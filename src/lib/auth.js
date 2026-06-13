/** @format */

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const mongoUri = process.env.MONGO_URI;
const dbName = process.env.AUTH_DB_NAME;

if (!mongoUri) {
  throw new Error(
    "Missing MongoDB connection string. Set MONGO_URI or MONGO_DB_URI.",
  );
}

if (!dbName) {
  throw new Error("Missing AUTH_DB_NAME in environment variables.");
}

const client = new MongoClient(mongoUri);
try {
  await client.connect();
} catch (error) {
  console.error("MongoDB connection failed:", error);
  throw new Error(
    "Unable to connect to MongoDB. Check the Atlas URI, IP allowlist, and TLS settings.",
  );
}
const db = client.db(dbName);

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
  trustedOrigins: ["http://localhost:3000"],
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
    transaction: false,
  }),
});
