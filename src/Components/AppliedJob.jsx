import { CurrencyBangladeshiIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    companyName,
    position,
    logo,
    jobType,
    jobTime,
    jobLocation,
    salary,
    id,
  } = job;
  console.log(job);
  return (
    <div className="grid grid-cols-5 items-center border-2 rounded p-5 mx-5 mx-10 my-5 md:mx-48 md:my-10">
      <img
        className="h-10 w-10 md:h-32 md:w-32"
        src={`/image/${logo}`}
        alt=""
      />
      <div className="col-span-3 flex justify-between items-center ">
        <div>
          <h1 className="font-bold">{position}</h1>
          <p>{companyName}</p>
          <div className="mt-5 ">
            <small className="border p-2 text-violet-700 mr-3 ">
              {jobType}
            </small>
            <small className="border p-2 text-violet-700 mr-3 ">
              {jobTime}
            </small>
          </div>
          <div className="flex gap-5 items-center mt-5 ">
            <div className="flex gap-1 items-center">
              <MapPinIcon className="h-6 w-6 text-gray-500"></MapPinIcon>
              <small>{jobLocation}</small>
            </div>
            <div className="flex gap-1 items-center">
              <CurrencyBangladeshiIcon className="h-6 w-6 text-gray-500"></CurrencyBangladeshiIcon>
              <small>{salary} BDT</small>
            </div>
          </div>
        </div>
        <Link to={`/jobs/${id}`}>
          <button onClick={() => console.log(id)} className="btn-primary mt-5">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJob;
