import { getRanking } from "@/apis/controllers/style/useGetRanking";
import Ranking from "@components/style/ranking/Ranking";

const Page = async () => {
  const feeds = await getRanking();

  return <Ranking feeds={feeds} />;
};

export default Page;
