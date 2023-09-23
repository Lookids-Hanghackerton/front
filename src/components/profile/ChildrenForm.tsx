"use client";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Card,
  Button,
  Text,
  RadioGroup,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
  Input,
} from "@chakra-ui/react";
import { Child } from "./ProfileEditForm";

const ChildrenForm = ({ children }: { children: Child[] }) => {
  const { register, handleSubmit, formState } = useForm<Child>({
    defaultValues: {
      childrenNickName: "",
      childrenBrith: "",
      childrenSex: "",
      childrenHeight: 0,
      childrenWeight: 0,
    },
  });
  const [childSex, setChildSex] = useState<string>("female");
  const [addActive, setAddActive] = useState(false);

  const onSubmitChild = (data: FieldValues) => {
    const newChild = { ...data, childrendSex: childSex };
    console.log(newChild);
  };

  return (
    <Card className="w-full max-w-[1280px] mx-auto py-8" shadow="none">
      <form onSubmit={handleSubmit(onSubmitChild)}>
        <FormControl className="flex flex-col gap-4">
          <div>
            <FormLabel>아이 이름</FormLabel>
            <Input type="text" {...register("childrenNickName", { required: "이름을 입력하세요" })} />
          </div>
          <div>
            <FormLabel>생년월일</FormLabel>
            <Input type="datetime-local" {...register("childrenBrith", { required: "생년월일을 입력하세요" })} />
          </div>
          <div>
            <FormLabel>성별</FormLabel>
            <RadioGroup onChange={setChildSex} value={childSex}>
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
                  <NumberInputField maxLength={3} {...register("childrenHeight", { required: "키를 입력하세요" })} />
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
                  <NumberInputField
                    maxLength={3}
                    {...register("childrenWeight", { required: "몸무게를 입력하세요" })}
                  />
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

          <Button colorScheme="blue" type="submit">
            추가
          </Button>
        </FormControl>
      </form>
    </Card>
  );
};

export default ChildrenForm;
