import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';   
function AddSAP() {
    const [image, setImage] = useState(null);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
        setImage(acceptedFiles[0]);
      },
    });
  return (
    <div className="fixed h-full w-full flex justify-center items-center">
    <div className=" w-4/6  h-4/5 bg-white rounded-xl p-10 flex" style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
        <div className="w-2/4 h-full flex justify-center items-center bg-lightgray border-1 border-black border-dotted ">
        <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p className='text-xl text-white bg-secondarygreen px-5 py-1 rounded-lg cursor-pointer'>Upload</p>
      }
      {
        image &&
        <img src={URL.createObjectURL(image)} alt="uploaded image" />
      }
    </div>
        </div>
        <div className="w-2/3 h-full px-5 ">
          <div className="flex flex-col">
            <div className="text-4xl text-gray font-bold ">Activity</div>
            <div className="grid grid-cols-2   auto-cols-max py-5 gap-3 w-full">
            <div className="py-1 px-5  rounded-lg flex justify-center items-center bg-lightgray text-gray  text-lg hover:bg-blue hover:text-white cursor-pointer"style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Paper Presentaion</div>
            <div className="py-1 px-5  rounded-lg flex justify-center items-center bg-lightgray text-gray  text-lg hover:bg-blue hover:text-white cursor-pointer"style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Project Presentaion</div>
            <div className="py-1 px-5  rounded-lg flex justify-center items-center bg-lightgray text-gray  text-lg hover:bg-blue hover:text-white cursor-pointer"style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Techo Events</div>
            <div className="py-1 px-5  rounded-lg flex justify-center items-center bg-lightgray text-gray  text-lg hover:bg-blue hover:text-white cursor-pointer"style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Sports & Games</div>
            <div className="py-1 px-5  rounded-lg flex justify-center items-center bg-lightgray text-gray text-lg hover:bg-blue hover:text-white cursor-pointer"style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Membership</div>
            <div className="py-1 px-5  rounded-lg flex justify-center items-center bg-lightgray text-gray  text-lg hover:bg-blue hover:text-white cursor-pointer"style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Leadership</div>
            <div className="py-1 px-5  rounded-lg flex justify-center items-center bg-lightgray text-gray  text-lg hover:bg-blue hover:text-white cursor-pointer"style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>VAC Courses</div>
            <div className="py-1 px-5  rounded-lg flex justify-center items-center bg-lightgray text-gray  text-lg hover:bg-blue hover:text-white cursor-pointer"style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Paper/Patent/Copyrigh</div>
            <div className="py-1 px-5  rounded-lg flex justify-center items-center bg-lightgray text-gray text-lg hover:bg-blue hover:text-white cursor-pointer"style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>GATE/CAT/Govt </div>
            <div className="py-1 px-5  rounded-lg flex justify-center items-center bg-lightgray text-gray  text-lg hover:bg-blue hover:text-white cursor-pointer"style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Placement/Internship</div>
            <div className="py-1 px-5  rounded-lg flex justify-center items-center bg-lightgray text-gray  text-lg hover:bg-blue hover:text-white cursor-pointer"style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Enterpreneurship</div>
            <div className="py-1 px-5  rounded-lg flex justify-center items-center bg-lightgray text-gray  text-lg hover:bg-blue hover:text-white cursor-pointer"style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Social activities</div>
            
            </div>
          </div>
        </div>
    </div>
    </div> 
  )
}

export default AddSAP