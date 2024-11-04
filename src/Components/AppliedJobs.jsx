import { useLoaderData } from "react-router-dom";
import { getAppliedJobs } from "./Utility/fakedb";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const getJobs = getAppliedJobs();
  const jobIdArray = Object.keys(getJobs).map((key) => parseInt(key));
  console.log(getJobs);

  const allJobs = useLoaderData();

  let appliedJobsArray;

  if (jobIdArray.length > 0) {
    appliedJobsArray = allJobs.filter((job) => {
      return jobIdArray.includes(job.id);
    });
  } else {
    appliedJobsArray = [];
  }

  console.log(appliedJobsArray);

  return (
    <>
      <section>
        <h1 className="text-center text-2xl md:text-5xl font-bold py-10 bg-violet-200 underline text-violet-900">
          Applied Jobs
        </h1>
      </section>
      <div>
        {appliedJobsArray.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;
