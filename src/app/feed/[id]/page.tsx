import ImageCarousel from "@components/feed/ImageCarousel";

interface PageParams {
  id: string;
}

const Page = ({ params }: { params: PageParams }) => {
  const id = params.id;

  return (
    <div>
      <ImageCarousel />
    </div>
  );
};

export default Page;
