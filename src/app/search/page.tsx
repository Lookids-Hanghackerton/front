const Page = () => {
  return (
    <div className={"grid grid-cols-2 sm:grid-cols-3 gap-2 p-2"}>
      {Array.from({ length: 100 }, () => (
        <img className={"w-full h-full cursor-pointer"} src={`https://picsum.photos/200`} alt="avatar" />
      ))}
    </div>
  );
};

export default Page;
