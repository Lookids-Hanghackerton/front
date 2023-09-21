import ImageCarousel from "@components/feed/ImageCarousel";
import ItemTags from "@components/feed/ItemTags";
import Functions from "@components/feed/Functions";
import Counts from "@components/feed/Counts";
import Contents from "@components/feed/Contents";
import Owner from "@components/feed/Owner";

interface PageParams {
  id: string;
}

const Page = ({ params }: { params: PageParams }) => {
  const id = params.id;

  return (
    <div>
      <Owner />
      <ImageCarousel />
      <ItemTags />
      <div className={"px-3"}>
        <Functions />
        <Counts />
        <Contents />
      </div>
    </div>
  );
};

export default Page;
