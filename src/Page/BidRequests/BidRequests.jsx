import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const BidRequests = () => {
    const {user} = useAuth()
    const [status, setStatus] = useState("in progress");
    const [cStatus, setCStatus] = useState("canceled");

    const [bids, setBids] = useState([])
   
    console.log(bids);
    const url = `http://localhost:5000/bidRequest?buyer_email=${user?.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBids(data)
        })
    }, [])

    const handleRejects = (_id) => {
    const updateJobs = {status: cStatus}
              
        
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
                    text: 'job update successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                }
              })
        
            
       
    }
    const handleAccept = (_id) => {
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
                    text: 'job update successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                }
              })
        
            
       
    }


    return (
        <div>
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
                 <div className="lg:flex-row grid grid-cols-1">
                  <td>
                   {t.status}
                  </td> 
                 </div>
               <td>
               <div className="lg:flex-row grid grid-cols-1">
              {
                 t.status === "in progress" || t.status === "canceled" || t.status === 'Complete' ?

                 <div className="hidden">
                    
                    <button onClick={() => handleAccept(t._id)}  className="btn bg-gradient-to-r from-green-600 to-green-400 text-white btn-xs">
                    Accept
                    </button>
                  
                    <button onClick={() => handleRejects(t._id)}  className="btn bg-gradient-to-r from-red-500 to-pink-300 text-white btn-xs">
                    Reject 
                    </button>
                 </div>
                 :
                 <div className="">
                    
                 <button onClick={() => handleAccept(t._id)}  className="btn bg-gradient-to-r from-green-600 to-green-400 text-white btn-xs">
                 Accept
                 </button>
               
                 <button onClick={() => handleRejects(t._id)}  className="btn bg-gradient-to-r from-red-500 to-pink-300 text-white btn-xs">
                 Reject 
                 </button>
              </div>
              }
                  
                  
                 </div>
               </td>
             
                </tr>
            )}
            </tbody>
            {/* foot */}
          </table>
        </div>
        </div>
        </div>
    );
};

export default BidRequests;