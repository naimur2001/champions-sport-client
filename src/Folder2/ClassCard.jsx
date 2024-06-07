import React from 'react';
import { useContext } from 'react';
// import { AuthContext } from '../Authentication/AuthProvider';
// import useClassCart from '../../Folder1/Hooks/useClassCart';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './Authentication/AuthProvider';
import useClassCart from '../Folder1/Hooks/useClassCart';
import useClasses from '../Folder1/Hooks/useClasses';
// import useClasses from '../../Folder1/Hooks/useClasses';

const ClassCard = ({cl}) => {
  // const seat=parseInt(cl.seat);
  const {user}=useContext(AuthContext);
  const [classcart,refetch]=useClassCart()
  const [Classes,]=useClasses()
  const navigate=useNavigate()
  const location=useLocation()

  const handleClassCart = (cl) => {
    if (user && user.email) {
      const classInfo = {
        classId: cl._id,
        classUrl: cl.url,
        classPrice: cl.price,
        classSeat: cl.seat,
        className: cl.name,
        email: user.email,
      };
  
      fetch(`https://champion-sports-server.vercel.app/classcart`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
  
            // Update seat value
            
            // const updatedSeat = parseInt(cl.seat) - 1;
            // fetch(`https://champion-sports-server.vercel.app/classes/dec/${cl._id}`, {
            //   method: "PATCH",
            //   headers: {
            //     "content-type": "application/json",
            //   },
            //   body: JSON.stringify({ seat: updatedSeat }),
            // })
            //   .then((res) => res.json())
            //   .then((data) => {
            //     console.log("Seat updated:", data);
            //   });
  
            Swal.fire({
              position: "center",
              icon: "success",
              title: `You selected ${classInfo.className}`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "orange",
        cancelButtonColor: "purple",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  

  
  
  



  // console.log(seat);
  return (
    <div className='flex justify-center'>
<div className={cl.seat === 0 ? "card w-80 bg-red-600 h-96 glass" : "card w-80  h-96 glass"}>
  <figure><img src={cl.url}  alt="class!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{cl.name}</h2>
    <h2 className="badge badge-secondary">{cl.instructor_name}</h2>
    <div className='flex justify-between'>  <h2 className="font-medium">Available Seats - {cl.seat}</h2><h2 className="font-medium">{cl.price} USD</h2> </div>
    <div className="card-actions justify-end">
      <button onClick={()=>handleClassCart(cl)} className={cl.seat === 0 ? 'btn btn-warning disabled: opacity-60' : 'btn btn-warning'}>  Enroll Now!</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ClassCard;