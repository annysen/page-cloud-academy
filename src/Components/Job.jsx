import { CurrencyBangladeshiIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
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
    <div className="border-2 rounded p-5 mx-5">
      <img
        className="h-10 w-10 md:h-20 md:w-20 mb-5  border rounded"
        src={`/image/${logo}`}
        alt=""
      />
      <h1 className="font-bold">{position}</h1>
      <p>{companyName}</p>
      <div className="mt-5 ">
        <small className="border p-2 text-violet-700 mr-3 ">{jobType}</small>
        <small className="border p-2 text-violet-700 mr-3 ">{jobTime}</small>
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
      <Link to={`/jobs/${id}`}>
        <button onClick={() => console.log(id)} className="btn-primary mt-5">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Job;
