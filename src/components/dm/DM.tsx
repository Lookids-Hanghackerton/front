import { Button, Card, Text } from "@chakra-ui/react";

const DM = () => {
  const date = new Date();
  const dateString = `${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div className="flex justify-center flex-col items-center mb-10">
        <div className="w-60 h-60 rounded-full bg-slate-400" />
        <Text fontSize={"2xl"}>사용자명</Text>
        <Text fontSize={"xl"}>소개글</Text>

        <Button>프로필 보기</Button>
      </div>
      <div className="flex justify-center flex-col items-center mb-10">
        <Text fontSize={"md"} color={"GrayText"}>
          {dateString}
        </Text>

        <Card>
          <Text></Text>
        </Card>
      </div>
    </>
  );
};

export default DM;
