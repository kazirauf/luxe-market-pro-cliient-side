import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyPosted = () => {
    const {user} = useAuth()
    const [users, setUsers] = useState([])
    console.log(user);
    const url = `http://localhost:5000/myPost?email=${user?.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUsers(data)
        })
    }, [])

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
         if (result.isConfirmed) {
       

         fetch(`http://localhost:5000/myPost/${_id}`, {
             method: "DELETE"
            
         })
         .then(res => res.json())
         .then(data => {
             console.log(data);
             if(data.deletedCount > 0) {
             Swal.fire(
             'Deleted!',
             'Your file has been deleted.',
             'success'
           )
           const remainingUser = users.filter(u => u._id !== _id)
           setUsers(remainingUser)
            }
         })
         }
       })
 }


 
    return (
        <div className="">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

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
              users?.map((t) => 
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
                    <button onClick={() => handleDelete(t._id)} className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white btn-xs">
                      Delete
                    </button>
                    <Link to={`/updateJobs/${t._id}`}  className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white btn-xs">
                      Update
                    </Link>
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