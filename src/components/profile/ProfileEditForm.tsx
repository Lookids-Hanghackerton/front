"use client";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FormControl, FormLabel, Card, Button, Text, Image, Input } from "@chakra-ui/react";
import Children from "./Children";
import ChildrenForm from "./ChildrenForm";

export interface User {
  memberNickName: string;
  introduce: string;
  childrenList: Child[];
}

export interface Child {
  childrenNickName: string;
  childrenSex: string;
  childrenBrith: string;
  childrenHeight: number;
  childrenWeight: number;
}

const ProfileEditForm = () => {
  const [addActive, setAddActive] = useState(false);
  const { register, handleSubmit, formState } = useForm<User>({
    defaultValues: {
      memberNickName: "",
      introduce: "",
      childrenList: [],
    },
  });

  const onSubmitProfile = (data: FieldValues) => {
    console.log(data);
  };

  const data: User = {
    memberNickName: "",
    introduce: "",
    childrenList: [
      {
        childrenNickName: "최호야",
        childrenSex: "여",
        childrenBrith: "2022-03-12",
        childrenHeight: 89,
        childrenWeight: 11,
      },
      {
        childrenNickName: "세준이",
        childrenSex: "남",
        childrenBrith: "1999-03-12",
        childrenHeight: 182,
        childrenWeight: 86,
      },
      {
        childrenNickName: "박호랑",
        childrenSex: "남",
        childrenBrith: "2023-03-12",
        childrenHeight: 30,
        childrenWeight: 16,
      },
    ],
  };

  return (
    <div className="px-6 py-6">
      <Card className="max-w-[1280px] mx-auto py-8 px-16 mb-4">
        <form onSubmit={handleSubmit(onSubmitProfile)}>
          <FormControl className="flex flex-col gap-4">
            <Text fontSize="2xl" as="b">
              프로필 편집
            </Text>
            <div>
              <FormLabel>이름</FormLabel>
              <Input type="text" {...register("memberNickName", { required: "이름을 입력하세요" })} />
            </div>
            <div>
              <FormLabel>소개</FormLabel>
              <Input type="text" placeholder="소개글을 입력하세요" {...register("introduce")} />
            </div>

            <Button colorScheme="blue" type="submit">
              수정
            </Button>
          </FormControl>
        </form>
      </Card>

      <Card className="max-w-[1280px] mx-auto py-10 px-16">
        <div className="flex justify-between items-center flex-wrap gap-y-2">
          <Text fontSize="2xl" as="b">
            우리 아이 정보
          </Text>

          <Button
            variant={addActive ? "outline" : "solid"}
            colorScheme="blue"
            size={"md"}
            onClick={() => setAddActive(!addActive)}
          >
            아이 정보 추가
            <Image src="/images/icon/large/children.png" width={20} className="ml-1" />
          </Button>
        </div>

        {addActive && <ChildrenForm children={data.childrenList} />}

        <ul className="pt-6 pb-4">
          {data.childrenList.map((e, idx) => {
            return <Children child={e} key={idx} />;
          })}
        </ul>
      </Card>
    </div>
  );
};

export default ProfileEditForm;
