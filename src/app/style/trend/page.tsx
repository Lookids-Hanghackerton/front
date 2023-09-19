import Feeds from "@/components/style/Feeds";
import Tags from "@/components/style/Tags";

const Page = () => {
  return (
    <div>
      <Tags />
      <div className={"px-12"}>
        <Feeds />
      </div>
    </div>
  );
};

export default Page;
