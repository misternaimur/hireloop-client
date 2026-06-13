/** @format */

"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  Spinner,
} from "@heroui/react";
import { PinFill, Layers, CircleDollar, ArrowRight } from "@gravity-ui/icons";

export default function JobSection() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/jobs");
        if (!res.ok) {
          if (res.status === 401)
            throw new Error("Please log in to view openings.");
          throw new Error("Failed to fetch jobs.");
        }
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-150 flex items-center justify-center bg-black">
        <Spinner color="secondary" size="lg" label="Loading positions..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-150 flex flex-col items-center justify-center bg-black text-white px-4">
        <p className="text-red-400 font-medium mb-4">{error}</p>
        <Button
          color="danger"
          variant="flat"
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Header Container */}
      <div className="text-center max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#7B79FF] uppercase mb-4">
          <span className="w-1.5 h-1.5 bg-[#7B79FF] rounded-sm animate-pulse" />
          Smart Job Discovery
          <span className="w-1.5 h-1.5 bg-[#7B79FF] rounded-sm animate-pulse" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
          The roles you&rsquo;d never
          <br />
          find by searching
        </h2>
      </div>

      {/* Responsive Cards Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-2">
        {jobs.map((job) => (
          <Card
            key={job._id}
            className="bg-[#121214] border border-[#1A1A1E] text-white p-4 rounded-[24px] shadow-sm transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) hover:-translate-y-2 hover:border-[#2C2C35] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
          >
            {/* Title */}
            <Card.Header className="flex-col items-start pb-2 px-3">
              <h3 className="text-2xl font-bold tracking-wide text-neutral-100 group-hover:text-white transition-colors">
                {job.title}
              </h3>
            </Card.Header>

            {/* Content / Description */}
            <Card.Content className="py-2 px-3 text-sm text-neutral-400 font-normal leading-relaxed">
              <p>{job.description}</p>
            </Card.Content>

            {/* Badges / Meta Info */}
            <Card.Body className="flex-row flex-wrap gap-2 py-4 px-3">
              <div className="inline-flex items-center gap-1.5 bg-[#1A1625] text-[#DCA6FF] text-xs font-medium px-3 py-1.5 rounded-full border border-[#2B1F3A]">
                <PinFill width={13} height={13} />
                {job.location}
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[#161920] text-[#A6C5FF] text-xs font-medium px-3 py-1.5 rounded-full border border-[#1F2735]">
                <Layers width={13} height={13} />
                {job.type}
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[#161A18] text-[#A6FFC7] text-xs font-medium px-3 py-1.5 rounded-full border border-[#1F3525] w-full sm:w-auto">
                <CircleDollar width={13} height={13} />
                {job.salary}
              </div>
            </Card.Body>

            {/* Action CTA */}
            <Card.Footer className="pt-2 pb-1 px-3">
              <Button
                variant="light"
                className="text-white hover:text-neutral-300 font-semibold text-sm p-0 h-auto bg-transparent data-[hover=true]:bg-transparent flex items-center gap-2 group/btn"
              >
                Apply Now
                <ArrowRight
                  className="transform transition-transform duration-200 group-hover/btn:translate-x-1"
                  width={16}
                  height={16}
                />
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>

      {/* Bottom Central Action Button */}
      <div className="mt-14">
        <Button
          radius="full"
          className="bg-white text-black font-semibold text-sm px-8 py-6 shadow-md hover:bg-neutral-200 transition-all active:scale-95"
        >
          View all job open
        </Button>
      </div>
    </section>
  );
}
