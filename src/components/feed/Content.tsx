import { useState, ChangeEvent } from "react";

const Content = () => {
  const [content, setContent] = useState<string>("");

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = e.target.content.value;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    };
    fetch(`http://49.50.161.207:8080/feed/write`, options)
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
    setContent("");
  };

  return (
    <>
      <div className=" w-full h-96 my-4">
        <form className="w-full h-96 flex justify-center items-center " onSubmit={handleSubmit}>
          <input
            name="content"
            className="border border-gray-300 p-2 rounded-md w-8/12 h-96 px-36"
            type="text"
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={handleContentChange}
          ></input>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <label htmlFor="submit" className="cursor-pointer min-w-0 w-2/12 mx-8 my-8 p-4 font-medium text-sm rounded-lg ">
          {"등록"}
          <input
            id="submit"
            type="submit"
            className="hidden min-w-0 w-2/12 mx-8 my-8 p-4 font-medium text-sm outline-0 "
          ></input>
        </label>
      </div>
    </>
  );
};

export default Content;
