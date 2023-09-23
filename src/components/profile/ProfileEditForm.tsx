"use client";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Card,
  Button,
  Text,
  Badge,
  Image,
  Radio,
  RadioGroup,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
} from "@chakra-ui/react";

import { useState } from "react";
const ProfileEditForm = () => {
  const [addActive, setAddActive] = useState(false);
  const data = {
    memberNickName: String,
    introduce: String,
    childrenList: [
      {
        childrenNickName: "최호야",
        childrenSex: "여",
        childrenBrith: "2022-03-12",
        childrenHeight: "89cm",
        childrenWeight: "11kg",
      },
      {
        childrenNickName: "세준이",
        childrenSex: "남",
        childrenBrith: "1999-03-12",
        childrenHeight: "182cm",
        childrenWeight: "86kg",
      },
      {
        childrenNickName: "박호랑",
        childrenSex: "남",
        childrenBrith: "1999-03-12",
        childrenHeight: "182cm",
        childrenWeight: "86kg",
      },
    ],
  };

  return (
    <div>
      <Card className="max-w-[1280px] mx-auto py-10 px-16">
        <FormControl className="flex flex-col gap-4">
          <Text fontSize="2xl" as="b">
            프로필 편집
          </Text>
          <div>
            <FormLabel>이름</FormLabel>
            <Input type="text" />
          </div>
          <div>
            <FormLabel>소개</FormLabel>
            <Input type="text" placeholder="소개글을 입력하세요" />
          </div>

          <Button colorScheme="blue">수정</Button>
        </FormControl>
      </Card>

      <Card className="max-w-[1280px] mx-auto py-10 px-16">
        <div className="flex justify-between items-center flex-wrap gap-y-2">
          <Text fontSize="2xl" as="b">
            우리 아이 정보
          </Text>

          <Button
            // justifySelf={"flex-end"}
            variant={addActive ? "outline" : "solid"}
            colorScheme="blue"
            size={"md"}
            onClick={() => setAddActive(!addActive)}
          >
            아이 정보 추가
            <Image src="/images/icon/large/children.png" width={20} className="ml-1" />
          </Button>
        </div>

        {addActive && <ChildrenForm />}

        <ul className="pt-6 pb-4">
          {data.childrenList.map((e, idx) => {
            return <Children child={e} key={idx} />;
          })}
        </ul>
      </Card>
    </div>
  );
};
{
}

export default ProfileEditForm;

function ChildrenForm({ child }: any) {
  const [value, setValue] = useState<string>("female");

  return (
    <Card className="w-full max-w-[1280px] mx-auto py-10" shadow="none">
      <FormControl className="flex flex-col gap-4">
        <div>
          <FormLabel>아이 이름</FormLabel>
          <Input type="text" />
        </div>
        <div>
          <FormLabel>생년월일</FormLabel>
          <Input type="datetime-local" />
        </div>
        <div>
          <FormLabel>성별</FormLabel>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row" spacing={5} className="mb-4">
              <Radio value="female">여자</Radio>
              <Radio value="male">남자</Radio>
            </Stack>
          </RadioGroup>
        </div>

        <div className="flex gap-6">
          <div className="flex items-center">
            <FormLabel minW={10} wordBreak="keep-all">
              키
            </FormLabel>
            <div className="flex items-center gap-6">
              <NumberInput defaultValue={2} min={0} max={100} className="flex-1">
                <NumberInputField maxLength={3} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text fontSize={"xl"} w={12}>
                cm
              </Text>
            </div>
          </div>

          <Divider orientation="vertical" h={10} />

          <div className="flex items-center">
            <FormLabel minW={12} wordBreak="keep-all">
              몸무게
            </FormLabel>

            <div className="flex items-center gap-6">
              <NumberInput defaultValue={2} min={0} step={0.1} max={100} className="flex-1">
                <NumberInputField maxLength={3} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text fontSize={"xl"} w={12}>
                kg
              </Text>
            </div>
          </div>
        </div>

        <Button colorScheme="blue">추가</Button>
      </FormControl>
    </Card>
  );
}

function Children({ child }: any) {
  return (
    <Card className="py-4" shadow="none">
      <div className="flex gap-4 items-center">
        <div className="w-20 h-20 rounded-2xl bg-slate-500" />
        <div>
          <Text fontSize="xl" as="b">
            {child.childrenNickName}
          </Text>
          <Text fontSize="md" className="mb-1">
            {child.childrenBrith}
          </Text>
          <div className="flex gap-2">
            <Badge>{child.childrenSex}</Badge>
            <Badge variant={"outline"}>{child.childrenHeight}</Badge>
            <Badge variant={"outline"}>{child.childrenWeight}</Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}
