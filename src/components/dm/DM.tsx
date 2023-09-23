import { Button, Card, Input, InputGroup, InputRightAddon, Text } from "@chakra-ui/react";
import { BiMicrophone } from "react-icons/bi";

const DM = () => {
  const date = new Date();
  const dateString = `${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div className="flex justify-center flex-col items-center mb-10">
        <div className="w-40 h-40 rounded-full bg-slate-400 mb-2" />
        <Text fontSize={"xl"}>사용자명</Text>
        <Text fontSize={"md"}>소개글</Text>

        <Button className="mt-4">프로필 보기</Button>
      </div>
      <div className="flex justify-center flex-col gap-4 items-center mb-10 px-4">
        <Text fontSize={"md"} color={"GrayText"}>
          {dateString}
        </Text>

        <Card className="w-full flex items-end" shadow="none">
          <div className="w-60 h-40 rounded-md bg-slate-400" />
        </Card>

        <Card className="w-full flex items-end" shadow="none">
          <div className="w-60 h-60 rounded-md bg-slate-400" />
          <Text align="right" fontSize="sm" color="GrayText">
            확인함
          </Text>
        </Card>

        <Card className="w-full flex items-end" shadow="none">
          <div className="w-60 px-6 py-4 rounded-md bg-slate-200">
            <Text fontSize="sm" color="GrayText">
              안녕하세요
            </Text>
          </div>
        </Card>

        <Card className="w-full flex items-end" shadow="none">
          <div className="w-60 px-6 py-4 mb-6 rounded-md bg-slate-200">
            <Text fontSize="sm" color="GrayText">
              텍스트입니다.
            </Text>
          </div>
        </Card>

        <Card className="w-full flex items-start" shadow="none">
          <div className="w-60 h-60 rounded-md bg-slate-400" />
          <Text align="right" fontSize="sm" color="GrayText">
            확인함
          </Text>
        </Card>

        <Card className="w-full flex items-start" shadow="none">
          <div className="w-60 h-60 rounded-md bg-slate-400" />
          <Text align="right" fontSize="sm" color="GrayText">
            확인함
          </Text>
        </Card>
      </div>

      <div className="bg-white w-full max-w-[768px] flex items-center fixed left-1/2 -translate-x-1/2 h-16 bottom-20 py-4 px-4">
        <InputGroup size="lg" className="w-full">
          <Input placeContent={"메시지를 입력하세요"}></Input>
          <InputRightAddon children="전송" cursor={"pointer"} />
        </InputGroup>

        <BiMicrophone className="mx-4" size={22} />
      </div>
    </>
  );
};

export default DM;
