import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const Event = () => {
  const { count, allEvent } = useLoaderData();
  const [events, setEvents] = useState(allEvent);

  const handleDelete = (event) => {
    const confirm = window.confirm(`Do you want to delete ${event.title}`);
    if (confirm) {
      fetch(`http://localhost:5000/events/${event._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const exist = events.filter((e) => e._id !== event._id);
            setEvents(exist);
            toast.success(`Successfully deleted ${event.title}`);
          }
        });
    }
  };

  return (
    <div className="w-11/12 mx-auto md:flex">
      <div className="md:border-r w-full md:w-5/12 lg:w-4/12 p-4">
        <h4 className="flex justify-between font-bold text-primary text-2xl text-center my-5">
          <Link to="/events">All events</Link>
          <Link to="/events/createevent">
            <button className="btn btn-primary text-white">Create</button>
          </Link>
        </h4>
        <ul>
          {events?.map((event) => (
            <li key={event._id} className="mt-4 flex justify-between">
              <Link
                to={`/events/updateevent/${event?._id}`}
                title={`Update ${event?.title}`}
              >
                {event?.title}
              </Link>
              <span
                onClick={() => handleDelete(event)}
                className="bg-primary cursor-pointer rounded-full px-2 hover:bg-red-600"
              >
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-20 w-full md:w-7/12 lg:w-8/12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Event;
