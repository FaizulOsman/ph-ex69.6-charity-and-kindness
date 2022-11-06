import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CreateEvent = () => {
  const events = useLoaderData();
  console.log(events);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const img = form.img.value;
    const event = { title, img };

    fetch(`http://localhost:5000/events`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Event added successfully");
          form.reset();
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto flex">
      <div className="border-r w-3/12">
        <h4 className="font-bold text-primary text-2xl text-center my-5">
          All events
        </h4>
        <ul>
          {events.map((event) => (
            <li key={event._id} className="mt-4">
              <Link>{event?.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-20 w-9/12">
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-10/12 mx-auto shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h1 className="text-4xl font-bold mb-5">Add an event</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control mb-5">
                <label className="label">
                  <span className="label-text">Event Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Event Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Event Image</span>
                </label>
                <input
                  type="text"
                  name="img"
                  placeholder="Event Image"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 bg-base-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Enter Description"
                id="description"
                cols="30"
                rows="10"
                className="bg-base-100 border rounded-lg p-4 border-gray-600"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Add event"
                className="btn btn-primary text-white"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
