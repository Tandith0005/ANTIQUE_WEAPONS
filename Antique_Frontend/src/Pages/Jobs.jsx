import React from "react";
import CompactPoster from "../Components/JobsComponent/CompactPoster";
import Heading from "../Components/Shared/Heading";
import { useQuery } from "@tanstack/react-query";
import AxiosInstance from "../Components/Shared/Axiosinstance";

const Jobs = () => {
  //  Fetch data from backend 
  const {
    isPending,
    error,
    data: jobs = [],
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await AxiosInstance.get("/jobs");
      return res.data;
    },
  });

  // Loading Spinner
  if (isPending) {
    return (
      <section className="flex items-center justify-center h-dvh bg-[#f7e1b5]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-[#53310e] border-t-[#f7e1b5] rounded-full animate-spin"></div>
          <p className="text-[#53310e] font-semibold text-lg md:text-xl">
            Loading bounty jobs...
          </p>
        </div>
      </section>
    );
  }

  // Error Handling
  if (error) {
    return (
      <section className="flex flex-col items-center justify-center h-[80vh] text-center bg-[#f7e1b5]">
        <p className="text-[#53310e] text-xl font-semibold mb-2">
          Failed to load jobs
        </p>
        <p className="text-[#53310e]/80 text-sm">Please try again later.</p>
      </section>
    );
  }

  return (
    <section className="custom-container py-12 md:py-20 font-serif">
      {/* Heading Section */}
      <Heading title="Bounty Jobs" subtitle="Wanted Criminals" />

      {/* Jobs Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {jobs.map((job) => (
          <CompactPoster
            key={job._id}
            id={job._id}
            image={job.image}
            Name={job.name}
            age={job.age}
            crime={job.crime}
            reward={job.reward}
            status={job.status}
            lastSeen={job.lastSeen}
          />
        ))}
      </div>
    </section>
  );
};

export default Jobs;
