import React from 'react';
import useClasses from '../../Folder1/Hooks/useClasses';

const ModalBtn = ({id}) => {
  const [classes,refetch]=useClasses();
  console.log(id);
  const handleFeedback=(id)=>{
    // event.preventDefault()
//     console.log(id,'same');
//     const form=event.target;
//     const feedback=form.feedback.value
//   console.log(feedback);
 
console.log(id,'daiyan');
// // refetch()
//   form.reset()
}
  return (
    <div>
        {/* The button to open modal */}
<label htmlFor="my_modal_6" className=" badge font-medium text-white badge-lg mx-2 badge-primary">Feedback</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">

 <div  className="modal-box">
    {/* <h3 className="font-bold text-lg mb-2">Feedback</h3>
    <input type="text" placeholder="Write here" name='feedback' className="input input-bordered input-primary w-full max-w-xs" /> */}
    <div className="modal-action">
     <button onClick={()=>handleFeedback(id)} className='btn border-0 bg-red-600 text-white'>
      Send
     </button>
      <label htmlFor="my_modal_6" className="btn">Close!</label>
     
    </div>
  </div>

</div>
    </div>
  );
};

export default ModalBtn;