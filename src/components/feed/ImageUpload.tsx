"use client";

import { useState, ChangeEvent } from "react";

const ImageUpload = () => {
  const [selectImage, setSelectImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("/noimage.gif");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setSelectImage(file);
    }
  };

  return (
    <>
      <div>
        <input type="file" accept="image/*" id="file" className="hidden" onChange={handleImageChange}></input>
        <label htmlFor="file" className="   flex justify-center items-center  mx-7 my-7">
          <img className=" w-9/12 h-80 rounded-2xl" src={imagePreview} alt="noImage"></img>
        </label>
      </div>
    </>
  );
};

export default ImageUpload;
