import { useState, ChangeEvent } from "react";

const ImageUpload = () => {
  return (
    <>
      <div>
        <input type="file" accept="image/*" id="file" className="hidden"></input>
        <label htmlFor="file" className=" bg-blue-500  flex justify-center items-center  mx-7 my-7">
          <img className=" w-9/12 h-80 " src="/noimage.gif" alt="noImage"></img>
        </label>
      </div>
    </>
  );
};

export default ImageUpload;
