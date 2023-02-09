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
    </div>
    </div> 
  )
}

export default AddSAP