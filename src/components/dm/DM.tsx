import { Button, Card, Text } from "@chakra-ui/react";

const DM = () => {
  const date = new Date();
  const dateString = `${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div className="flex justify-center flex-col items-center mb-10">
        <div className="w-40 h-40 rounded-full bg-slate-400" />
        <Text fontSize={"xl"}>사용자명</Text>
        <Text fontSize={"md"}>소개글</Text>

        <Button className="mt-4">프로필 보기</Button>
      </div>
      <div className="flex justify-center flex-col gap-6 items-center mb-10 px-4">
        <Text fontSize={"md"} color={"GrayText"}>
          {dateString}
        </Text>

        <Card className="w-full flex items-end">
          <div className="w-60 h-40 rounded-md bg-slate-400" />
          <Text align="right" fontSize="sm" color="GrayText">
            확인함
          </Text>
        </Card>

        <Card className="w-full flex items-end">
          <div className="w-60 h-60 rounded-md bg-slate-400" />
          <Text align="right" fontSize="sm" color="GrayText">
            확인함
          </Text>
        </Card>

        <Card className="w-full flex items-end">
          <div className="w-60 px-6 py-4 rounded-md bg-slate-200">
            <Text fontSize="sm" color="GrayText">
              확인함
            </Text>
          </div>
        </Card>

        <Card className="w-full flex items-start">
          <div className="w-60 h-60 rounded-md bg-slate-400" />
          <Text align="right" fontSize="sm" color="GrayText">
            확인함
          </Text>
        </Card>
      </div>
    </>
  );
};

export default DM;
