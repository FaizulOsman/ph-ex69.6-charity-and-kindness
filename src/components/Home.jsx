import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Fade } from "react-reveal";
import donateGroupImg from "../assets/images/icons/Group-9-1.png";
import DonationCard from "./DonationCard";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      <div className="mt-10 grid items-center grid-cols-1 md:grid-cols-2">
        <Fade left>
          <div className="w-10/12 mx-auto p-5 text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl font font-semibold mb-10">
              Charity and donation place
            </h1>
            <p className="mb-8">
              It's easier to take than to give. It's nobler to give than to
              take. The thrill of taking lasts a day. The thrill of giving lasts
              a lifetime.
            </p>
            <button className="btn btn-primary text-white">Donate now</button>
            <Link className="text-secondary hover:text-white duration-300 ml-5 text-lg hover:tracking-widest">
              Learn more
            </Link>
          </div>
        </Fade>
        <Fade right>
          <img className="mx-auto" src={donateGroupImg} alt="" />
        </Fade>
      </div>

      {/* ============= Categories ============= */}
      <div className="my-28 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {categories.map((category) => (
            <DonationCard key={category._id} category={category}></DonationCard>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to="/createCategory" className="btn btn-primary text-white">
            Add event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
