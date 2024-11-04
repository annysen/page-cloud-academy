import {
  CalendarDaysIcon,
  ChatBubbleBottomCenterIcon,
  CurrencyBangladeshiIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "./Utility/fakedb";

const JobDetails = () => {
  const allJobs = useLoaderData();
  const { id } = useParams();
  const job = allJobs.find((job) => job.id == id);

  return (
    <>
      <section>
        <h1 className="text-center text-2xl md:text-5xl font-bold py-10 bg-violet-200 underline text-violet-900">
          Job Details
        </h1>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3  my-5 mx-10 gap-5 md:mx-40">
        <div className="md:col-span-2">
          <h1 className="font-bold">Job Description:</h1>
          <p className="text-gray-500">{job.jobDescription}</p>
          <h1 className="font-bold">Job Responsibility:</h1>
          <p className="text-gray-500">{job.jobResponsibility}</p>
          <h1 className="font-bold">Educational Requirements:</h1>
          <p className="text-gray-500">{job.educationalRequirements}</p>
          <h1 className="font-bold">Experiences: </h1>
          <p className="text-gray-500">{job.experiences} years in this field</p>
        </div>
        <div className="text-white">
          <div className="bg-violet-500 rounded-lg p-5">
            <h1 className="font-bold">Job Details</h1>
            <hr className="my-2" />
            <div className="flex gap-1 md:items-center my-2">
              <CurrencyBangladeshiIcon className="h-6 w-6 text-white" />{" "}
              <p className="font-bold">Salary:</p>
              <p>{job.salary}/month</p>
            </div>
            <div className="flex gap-1 my-2 md:items-center">
              <CalendarDaysIcon className="h-5 w-5 text-white" />
              <p className="font-bold">Job Title:</p>
              <p>{job.position}</p>
            </div>
            <hr className="my-2" />
            <h1 className="font-bold">Contact Information</h1>
            <div className="flex gap-1 md:items-center my-2">
              <PhoneIcon className="h-5 w-5 text-white" />
              <p className="font-bold">Phone:</p>
              <p>{job.phone}</p>
            </div>
            <div className="flex gap-1 md:items-center my-2">
              <ChatBubbleBottomCenterIcon className="h-5 w-5 text-white" />
              <p className="font-bold">Email:</p>
              <p>{job.email}</p>
            </div>
            <div className="flex gap-1 md:items-center my-2">
              <MapPinIcon className="h-5 w-5 text-white" />
              <p className="font-bold">Address:</p>
              <p>{job.address}</p>
            </div>
          </div>
          <button onClick={() => addToDb(id)} className="btn-primary mt-3">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
