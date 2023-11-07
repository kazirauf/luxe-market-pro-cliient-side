import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";

const JobDetails = () => {
  const data = useLoaderData();
  const { user } = useAuth();
  const [status, setStatus] = useState('Pending');
  console.log(data);
  const {
    jobTitle,
    email,
    _id,
    deadline,
    description,
    minimumPrice,
    maximumPrice,
    category,
  } = data;

  const handleAddBid = (event) => {
    event.preventDefault()
      const form = event.target;
      const price = form.price.value;
      const deadline = form.deadline.value;
      const email = form.email.value;
      const buyer_email = form.buyer_email.value;
      const product = {price, deadline, buyer_email, status, email, jobTitle}
      console.log(product);

      fetch(`http://localhost:5000/jobsBids`, {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(product)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'Bid added successfully in my bids page',
            icon: 'success',
            confirmButtonText: 'Done'
          })
        }
      })

    }
  return (
    <section className="bg-purple-100">
      <div>
        <div className="flex justify-center pt-10">
          <div className="card bg-primary  w-[800px] bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <div className="card-body">
              <h2 className="card-title ">{jobTitle}</h2>
              <p className="font-bold ">Deadline: {deadline}</p>
              <p className="font-bold ">
                Price range: ${minimumPrice}-${maximumPrice}
              </p>
              <p className="">{description}</p>
            </div>
          </div>
        </div>

        <div className="py-20 flex items-center justify-center ">
          <form onSubmit={handleAddBid} className="bg-white p-8 rounded-lg shadow-lg py-10 w-[1000px]">
            <h1 className="text-center text-purple-700 font-semibold text-2xl">
              Place your bid form
            </h1>
            <div className="mt-6 lg:flex gap-5">
              <div className="flex-1">
                <div className="py-3">
                  <h1 className="font-bold mb-2 ml-1 text-purple-700">Price</h1>
                  <input
                    className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
                    type="text"
                    placeholder="your bidding amount"
                    name="price"
                    required
                  />
                </div>

                <div className="py-3">
                  <h1 className="font-bold mb-2 ml-1 text-purple-700">
                    Deadline
                  </h1>
                  <input
                    className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
                    type="date"
                    placeholder="Job Deadline"
                    name="deadline"
                    required
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="py-3">
                  <h1 className="font-bold mb-2 ml-1 text-purple-700">Email</h1>
                  <input
                    className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
                    type="email"
                    placeholder="your email address"
                    value={user?.email}
                    name="email"
                    required
                  />
                </div>
                <div className="py-3">
                  <h1 className="font-bold mb-2 ml-1 text-purple-700">
                    Buyer Email
                  </h1>
                  <input
                    className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
                    type="email"
                    placeholder="your maximum price"
                    name="buyer_email"
                    value={email}
                    required
                  />
                </div>
              </div>
            </div>
            {
                user?.email === email ? <button disabled className="w-full mt-4 py-3 px-4 rounded-full bg-gray-400 text-white text-center font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
                Bid on the project
              </button>
              :
              <button className="w-full mt-4 py-3 px-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
              Bid on the project
            </button>
            }
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
