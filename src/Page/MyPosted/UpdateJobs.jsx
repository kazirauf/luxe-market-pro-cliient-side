import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const UpdateJobs = () => {
    const {user} = useAuth()
    const allData = useLoaderData()
    const { _id,  maximumPrice, deadline, jobTitle, description, minimumPrice, category} = allData;
    const handleUpdateJobs = (event) => {
        event.preventDefault()
          const form = event.target;
          const email = form.email.value;
          const jobTitle = form.jobTitle.value;
          const deadline = form.deadline.value;
          const description = form.description.value;
          const category = form.category.value;
          const minimumPrice = form.minimumPrice.value;
          const maximumPrice = form.maximumPrice.value;
          const updateProduct = {maximumPrice, deadline, jobTitle, email, description, minimumPrice, category}
          
    
          fetch(`http://localhost:5000/allJobs/${_id}`, {
             method: 'PUT',
             headers: {
                'content-type': 'application/json'
             },
             body: JSON.stringify(updateProduct)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
              Swal.fire({
                title: 'success!',
                text: 'job update successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
          })
    
        }
   
    return (
        <div>
              <div  className="min-h-screen flex items-center justify-center bg-purple-100">
<form onSubmit={handleUpdateJobs} className="bg-white p-8 rounded-lg shadow-lg py-10 w-[1000px]">
  <h1 className="text-center text-purple-700 font-semibold text-2xl">Update Jobs</h1>
  <div  className="mt-6 lg:flex gap-5">
<div className="flex-1">
<div className="py-3">
      <h1 className="font-bold mb-2 ml-1 text-purple-700">Your Email</h1>
   <input
      className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
      type="email"
      name="email"
      placeholder="the employer email address"
      value={user?.email
      }
      required
    />
   </div>
  <div className="py-3">
      <h1 className="font-bold mb-2 ml-1 text-purple-700">Job title</h1>
   <input
      className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
      type="text"
      placeholder=" Job title"
      defaultValue={jobTitle}
      name="jobTitle"
      required
    />
   </div>
  <div className="py-3">
      <h1 className="font-bold mb-2 ml-1 text-purple-700">Deadline</h1>
   <input
      className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
      type="date"
      placeholder="Job Deadline"
      defaultValue={deadline}
      name="deadline"
      required
    />
   </div>
  <div className="py-3">
      <h1 className="font-bold mb-2 ml-1 text-purple-700">Description</h1>
   <input
      className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
      type="text"
      placeholder="your job description"
      name="description"
      defaultValue={description}
      required
    />
   </div>
</div>
<div className="flex-1">
<div className="py-3">
      <h1 className="font-bold mb-2 ml-1 text-purple-700">Jobs Category</h1>
      <select
                  className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
                  name="category"
                  defaultValue={category}
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphics Design">Graphics Design</option>
                </select>
   </div>
  <div className="py-3">
      <h1 className="font-bold mb-2 ml-1 text-purple-700"> Minimum price</h1>
      <input
      className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
      type="text"
      placeholder="your minimum price"
      name="minimumPrice"
      defaultValue={minimumPrice}
      required
    />
     
   </div>
  <div className="py-3">
      <h1 className="font-bold mb-2 ml-1 text-purple-700">Maximum price</h1>
   <input
      className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
      type="text"
      placeholder="your maximum price"
      defaultValue={maximumPrice}
      name="maximumPrice"
      required
    />
   </div>
  
 </div>
   
  </div>
 <div className="flex justify-center">
  
 <button   className="w-full mt-4 py-3 lg:px-72 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-purple-400">Update Job</button>
 </div>
         
</form>
</div>
        </div>
    );
};

export default UpdateJobs;