import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 px-5">
        <div>
          <h1 className="font-bold text-xl">CareerHub</h1>
          <p className="text-gray-300 mt-2">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex gap-10 mt-5">
            <i className="fa-brands fa-facebook text-2xl"></i>
            <i className="fa-brands fa-square-twitter text-2xl"></i>
            <i className="fa-brands fa-square-instagram text-2xl"></i>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">Company Name</h1>
          <Link className="text-gray-300 mt-2" to="/about">
            About Us
          </Link>
          <Link className="text-gray-300 mt-2" to="/work">
            Work
          </Link>
          <Link className="text-gray-300 mt-2" to="/news">
            Latest News
          </Link>
          <Link className="text-gray-300 mt-2" to="/career">
            Career
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">Product</h1>
          <Link className="text-gray-300 mt-2" to="/prototype">
            Prototype
          </Link>
          <Link className="text-gray-300 mt-2" to="/p&p">
            Plans & Pricing
          </Link>
          <Link className="text-gray-300 mt-2" to="/customers">
            Customers
          </Link>
          <Link className="text-gray-300 mt-2" to="/integrations">
            Integrations
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">Support</h1>
          <Link className="text-gray-300 mt-2" to="/help">
            Help Desk
          </Link>
          <Link className="text-gray-300 mt-2" to="/sales">
            Sales
          </Link>
          <Link className="text-gray-300 mt-2" to="/partner">
            Become a Partner
          </Link>
          <Link className="text-gray-300 mt-2" to="/developers">
            Developers
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">Contact</h1>

          <p className="text-gray-300 mt-2">524 Broadway , NYC</p>
          <p className="text-gray-300 mt-2">+1 777 - 978 - 5570</p>
        </div>
      </div>

      {/* using a bar  */}
      <div className="h-px bg-gray-300 my-6"></div>

      <div className="flex justify-between">
        <h1>@2023 CareerHub. All Rights Reserved</h1>
        <p>Powered by CareerHub</p>
      </div>
    </footer>
  );
};

export default Footer;
