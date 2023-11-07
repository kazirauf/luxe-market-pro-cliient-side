import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyBids = () => {
    const {user} = useAuth()
    const [bids, setBids] = useState([])
    console.log(bids);
    const url = `http://localhost:5000/jobBids?email=${user?.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBids(data)
        })
    }, [])

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
                <th></th>
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
                 <td>${t.price}</td>
                  <th>
                    <button  className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white btn-xs">
                      Delete
                    </button>
                  
                  </th> 
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