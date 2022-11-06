import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import donateGroupImg from "../assets/images/icons/Group-9-1.png";
import DonationCard from "./DonationCard";

const Home = () => {
  const events = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      <div className="mt-10 grid items-center grid-cols-1 md:grid-cols-2">
        <div className="w-10/12 mx-auto p-5 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl font font-semibold mb-10">
            Charity and donation place
          </h1>
          <p className="mb-8">
            It's easier to take than to give. It's nobler to give than to take.
            The thrill of taking lasts a day. The thrill of giving lasts a
            lifetime.
          </p>
          <button className="btn btn-primary text-white">Donate now</button>
          <Link className="text-secondary hover:text-white duration-300 ml-5 text-lg hover:tracking-widest">
            Learn more
          </Link>
        </div>
        <img className="mx-auto" src={donateGroupImg} alt="" />
      </div>

      {/* ============= events ============= */}
      <div className="my-28 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event) => (
            <DonationCard key={event._id} event={event}></DonationCard>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to="/createEvent" className="btn btn-primary text-white">
            Add event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
