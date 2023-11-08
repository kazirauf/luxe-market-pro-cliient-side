import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const MyBids = () => {
    const {user} = useAuth()
    const [status, setStatus] = useState("Complete");
    const [bids, setBids] = useState([])
    console.log(bids);
    console.log(bids);
    const url = `http://localhost:5000/jobBids?email=${user?.email}`
    useEffect(() => {
        fetch(url, {credentials: "include"})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBids(data)
        })
    }, [])

    const handleComplete = (_id) => {
        const updateJobs = {status}
                  
            
                  fetch(`http://localhost:5000/jobsBids/${_id}`, {
                     method: 'PUT',
                     headers: {
                        'content-type': 'application/json'
                     },
                     body: JSON.stringify(updateJobs)
                  })
                  .then(res => res.json())
                  .then(data => {
                    console.log(data)
                    if(data.modifiedCount > 0) {
                      Swal.fire({
                        title: 'success!',
                        text: 'request successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                    }
                  })
            
                
           
        }

    return (
        <div>
    <div className="overflow-x-auto h-[800px] mx-3 mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Jobs & Date</th>
                <th>Price & Email</th>
                <div className="lg:flex flex-col">
                <th>Status</th>
                <th></th>
                </div>
                
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
              bids?.map((t) => 
                <tr key={t._id}>
                  <td>
                    <div className="flex flex-col sm:flex-row items-center space-x-3">
                      <div>
                        <div className="font-bold text-fuchsia-400">{t.jobTitle}</div>
                        <div className="text-sm">{t.deadline}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                  ${t.price}
                    
                    <br />
                    <span className="badge badge-ghost badge-sm">{t.email}</span>
                  </td>
               <div className="flex">
               <div className="lg:flex-row grid grid-cols-1">
               
               <th>
                   {t.status}
               </th> 
              </div>
              <div className="lg:flex-row grid grid-cols-1">
            
               <td >
                  { t.status === "in progress"  || t.status === "Completed" ?
                     <button onClick={() => handleComplete(t._id)} className="bg-gradient-to-r rounded-lg from-purple-500 to-pink-500 text-white btn-sm">Complete</button>
                     :
                     <button className="bg-gradient-to-r hidden rounded-lg from-purple-500 to-pink-500 text-white btn-sm">Complete</button>
                  }
               </td> 
              </div>
               </div>
                 
                </tr>
            )}
            </tbody>
            {/* foot */}
          </table>
        </div>
        </div>
    );
};

export default MyBids;