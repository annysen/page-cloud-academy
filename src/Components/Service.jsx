import { useContext } from "react";
import { JobContext } from "./Home";

const Service = () => {
  const jobs = useContext(JobContext);

  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between  py-5 mx-5 md:mx-auto">
      {jobs?.map((job, index) => (
        <div key={index} className="  bg-violet-100 p-10">
          <img className="h-10 w-10 " src={job?.iconLink} alt="" />
          <h1 className="text-lg font-bold">{job.jobType}</h1>
          <p>{job.jobCount} Jobs Available</p>
        </div>
      ))}
    </div>
  );
};

export default Service;
