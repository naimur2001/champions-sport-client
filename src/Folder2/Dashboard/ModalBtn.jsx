import React from 'react';
import useClasses from '../../Folder1/Hooks/useClasses';
import { useForm } from 'react-hook-form';

const ModalBtn = ({id}) => {
  const [classes,refetch]=useClasses();
  const { register, handleSubmit,reset,watch, formState: { errors } } = useForm();
  const onSubmit=(data)=>{
    // console.log(data,'emon');
    console.log(id,'modal');
    
  }
  const modalFunction=()=>{

  }


  return (
    <div>
        {/* The button to open modal */}
<label htmlFor="my_modal_6" className=" badge font-medium text-white badge-lg mx-2 badge-primary">Feedback</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
<form onSubmit={handleSubmit(onSubmit)}>
 <div  className="modal-box">
    <h3 className="font-bold text-lg mb-2">Feedback</h3>
   <input type="text" {...register('name', { required: true })} placeholder="name" name="name" className="input input-bordered" />
    <div className="modal-action">
    <input className="btn btn-error" type="submit" value={'Send'} />
      <label htmlFor="my_modal_6" className="btn">Close!</label>
     
    </div>
  </div>
  </form>
</div>
    </div>
  );
};

export default ModalBtn;