import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DonationCard from "./DonationCard";

const EventCard = () => {
  const [events, setEvents] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.allEvent);
        setCount(data.count);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/events?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.allEvent);
        setCount(data.count);
      });
  }, [page, size]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {events?.map((event) => (
          <DonationCard key={event._id} event={event}></DonationCard>
        ))}
      </div>
      <div className="text-center">
        <p>
          Current Page: {page} and size: {size}
        </p>
        {[...Array(pages).keys()].map((number) => (
          <button
            className={
              number === page
                ? "btn btn-primary text-white"
                : "btn border border-gray-600"
            }
            onClick={() => setPage(number)}
            key={number}
          >
            {number + 1}
          </button>
        ))}
        <select
          defaultValue={10}
          onChange={(event) => setSize(event.target.value)}
          className="btn border border-gray-600"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="text-center mt-5">
        <Link to="/createEvent" className="btn btn-primary text-white">
          Add event
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
