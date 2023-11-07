import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyPosted = () => {
    const {user} = useAuth()
    const [userPostData, setUserPostData] = useState([])
    console.log(user);
    const url = `http://localhost:5000/myPost?email=${user?.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setUserPostData(data)
        })
    }, [])
    return (
        <div className="">
        <div className="overflow-x-auto h-[800px] mx-3 mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Jobs & Category</th>
                <th>Date & Email</th>
                <div className="lg:flex flex-col">
                <th>Price Range</th>
                <th></th>
                </div>
                
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
              userPostData.map((t) => 
                <tr key={t._id}>
                  <td>
                    <div className="flex flex-col sm:flex-row items-center space-x-3">
                      <div>
                        <div className="font-bold text-fuchsia-400">{t.jobTitle}</div>
                        <div className="text-sm">{t.category}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {t.deadline}
                    <br />
                    <span className="badge badge-ghost badge-sm">{t.email}</span>
                  </td>
                 <div className="lg:flex-row grid grid-cols-1">
                 <td>${t.minimumPrice}-${t.maximumPrice}</td>
                  <th>
                    <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white btn-xs">
                      Delete
                    </button>
                    <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white btn-xs">
                      Update
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

export default MyPosted;