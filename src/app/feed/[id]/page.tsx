interface PageParams {
  id: string;
}

const Page = ({ params }: { params: PageParams }) => {
  const id = params.id;

  return <div>{id}</div>;
};

export default Page;
