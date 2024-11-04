import cloud from "../assets/cloud.png";

const Header = () => {
  return (
    <div className="bg-gray-100 ">
      <section className="grid grid-cols-1 md:grid-cols-2  justify-items-center  ">
        <div className="w-1/2 flex items-center">
          <div className="my-5">
            <h1 className="text-black font-extrabold text-5xl ">
              Empowering Your Future with
              <br />
              <span className="text-violet-500">
                {" "}
                Cloud Solutions & Training
              </span>
            </h1>

            <p className="text-gray py-5">
              At Page Cloud, we believe in harnessing the power of cloud
              technology to drive innovation, efficiency, and growth. Whether
              you are a business looking to transition to the cloud or an
              individual aiming to enhance your skills, we have the tools and
              expertise to help you succeed.
            </p>
            <button className="btn-primary mt-5">Get Standard</button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <img src={cloud} alt="" className="mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
