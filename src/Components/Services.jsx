import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import Job from "./Job";
import Service from "./Service";

const Services = () => {
  const allJobs = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  const [jobs, setJobs] = useState(allJobs.slice(0, 4));

  const handleShowAll = () => {
    setShowAll(true);
    setJobs(allJobs);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setJobs(allJobs.slice(0, 4));
  };

  return (
    <div>
      <div className="flex justify-center mt-5">
        <div>
          <h1 className="text-center font-extrabold text-5xl">
            Services Category List
          </h1>
          <p className="text-center py-5">
            We provide a full spectrum of Enterprise solutions for all kinds of
            industries.
          </p>

          {/* show all Service  */}
          <Service />
        </div>
      </div>
      <div>
        <h1 className="text-center font-extrabold text-5xl">Featured Jobs</h1>
        <p className="text-center py-5">
          Explore thousands of job opportunities with all the information you
          need. It's your future.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-48">
        {jobs?.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      {!showAll ? (
        <div className="flex justify-center mt-5">
          <button className="btn-primary mb-5" onClick={handleShowAll}>
            Show All
          </button>
        </div>
      ) : (
        <div className="flex justify-center mt-5">
          <button className="btn-primary mb-5" onClick={handleShowLess}>
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Services;
