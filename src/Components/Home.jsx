import { createContext, useState } from "react";
import Header from "./Header";
import Jobs from "./Jobs";
export const JobContext = createContext(0);
import accountImage from "/image/icon/account.png";
import softImg from "/image/icon/devloper.jpg";
import markImg from "/image/icon/marketing.png";
import custImg from "/image/icon/Customer.jpg";
import Services from "./Services";

const Home = () => {
  const jobArray = [
    {
      jobType: "Account & Finance",
      jobCount: 300,
      iconLink: accountImage,
    },
    {
      jobType: "Software Development",
      jobCount: 500,
      iconLink: softImg,
    },
    {
      jobType: "Marketing",
      jobCount: 200,
      iconLink: markImg,
    },
    {
      jobType: "Customer Service",
      jobCount: 400,
      iconLink: custImg,
    },
  ];

  const [jobs, setJobs] = useState([]);

  return (
    <div>
      <Header></Header>
      <JobContext.Provider value={jobArray}>
        {/* <Jobs></Jobs> */}
        <Services></Services>
      </JobContext.Provider>
    </div>
  );
};

export default Home;
