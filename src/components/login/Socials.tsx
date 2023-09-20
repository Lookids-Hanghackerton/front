import NaverButton from "@components/login/NaverButton";
import KakaoButton from "./KakaoButton";

const Socials = () => {
  return (
    <div className="w-full flex flex-col gap-4 mb-[20%] px-10">
      <div className="h-16">
        <NaverButton />
      </div>
      <div className="h-16">
        <KakaoButton />
      </div>
    </div>
  );
};

export default Socials;
