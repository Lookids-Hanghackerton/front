"use client";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FormControl, FormLabel, Card, Button, Text, Image, Input } from "@chakra-ui/react";
import Children from "./Children";
import ChildrenForm from "./ChildrenForm";
import { useQuery } from "@tanstack/react-query";
import { getMemberInfo, postChildren, putChildren, putMemberInfo } from "@/apis/controllers/useUserProfile";
import { COOKIE_NAME, getCookie } from "@/lib/cookie/cookie";
import ChildrenEdit from "./ChildrenEdit";

export interface User {
  memberNickName: string;
  memberEmailId: string;
  profileImage: string;
  point: 0;
  introduce: string;
  childrenList: Child[];
}

export interface Child {
  childrenNickName: string;
  childrenSex: string;
  childrenBirth: string;
  childrenHeight: number;
  childrenWeight: number;
  childrenId?: number;
}

const ProfileEditForm = () => {
  const userData = getCookie(COOKIE_NAME) || {
    memberUniqueId: "",
  };
  const { data: fetchedData }: any = useQuery(["memberUniqueId"], () =>
    getMemberInfo(userData.memberUniqueId).then(e => e.data.data),
  );

  const { register, handleSubmit, watch, setValue, getValues } = useForm<User>({
    defaultValues: {
      memberNickName: fetchedData?.memberNickName,
      introduce: fetchedData?.introduce,
      childrenList: fetchedData?.childrenList || [],
    },
  });
  const [addActive, setAddActive] = useState(false);
  const [editActive, setEditActive] = useState(false);
  const [editId, setEditId] = useState(-1);

  const watchChildrenList: Child[] =
    watch("childrenList").length === 0 ? fetchedData?.childrenList : watch("childrenList");

  // 핸들러
  const onSubmitProfile = (data: FieldValues) => {
    const { memberNickName, introduce } = data;
    // const { feedsList, ...left } = fetchedData;
    // const newData = { ...fetchedData, ...data } as User;
    putMemberInfo({ memberNickName, introduce });
  };

  const onSubmitChildren = (data: FieldValues) => {
    const prev = watch("childrenList");
    const { childrenWeight, childrenHeight, childrenBirth } = data;
    const newChildren = {
      ...data,
      childrenBirth: childrenBirth.slice(0, 10),
      childrenWeight: Number(childrenWeight),
      childrenHeight: Number(childrenHeight),
    } as Child;

    prev.push(newChildren);

    setValue("childrenList", prev);
    setAddActive(false);

    postChildren(newChildren);
  };

  const editToggle = (id: number) => {
    if (id === editId) {
      setEditActive(!editActive);
      editActive ? setEditId(-1) : setEditId(id);
    } else {
      setEditActive(true);
      setEditId(id);
    }
  };

  const editChildHandler = (id: number) => {
    const childrenList = getValues("childrenList");
    const child = childrenList.find(child => child.childrenId === id);
    if (!child) return;

    const { childrenWeight, childrenHeight, childrenBirth } = child;
    const updateChild = {
      ...child,
      childrenBirth: childrenBirth.slice(0, 10),
      childrenWeight: Number(childrenWeight),
      childrenHeight: Number(childrenHeight),
    } as Child;

    putChildren(updateChild, id);
  };

  return (
    <div className="px-6 py-6">
      <Card className="max-w-[1280px] mx-auto py-8 px-16 mb-4">
        <form onSubmit={handleSubmit(onSubmitProfile)}>
          <FormControl className="flex flex-col gap-4">
            <Text fontSize="2xl" as="b">
              정보 수정
            </Text>
            <div>
              <FormLabel>이름</FormLabel>
              <Input
                type="text"
                defaultValue={fetchedData?.memberNickName}
                {...register("memberNickName", { required: "이름을 입력하세요" })}
                autoComplete="off"
              />
            </div>
            <div>
              <FormLabel>소개</FormLabel>
              <Input
                type="text"
                defaultValue={fetchedData?.introduce}
                placeholder="소개글을 입력하세요"
                {...register("introduce")}
                autoComplete="off"
              />
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

        {addActive && fetchedData && <ChildrenForm type="post" onSubmit={onSubmitChildren} />}

        <ul className="pt-6 pb-4">
          {watchChildrenList &&
            watchChildrenList.map((e, idx) => {
              return (
                <>
                  <Children child={e} key={idx} onClick={editToggle} />
                  {editActive && e.childrenId === editId && <ChildrenForm type="put" onSubmitEdit={editChildHandler} />}
                </>
              );
            })}
        </ul>
      </Card>
    </div>
  );
};

export default ProfileEditForm;
