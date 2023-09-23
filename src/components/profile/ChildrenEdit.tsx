import { Card, Text, Badge, Button, Input } from "@chakra-ui/react";
import { Child } from "./ProfileEditForm";
import { BiEdit } from "react-icons/bi";

const ChildrenEdit = ({ child, onClick }: { child: Child; onClick: (id: number) => void }) => {
  return (
    <Card className="py-4" shadow="none">
      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="w-20 h-20 rounded-2xl bg-slate-500" />
          <div>
            <Input value={child.childrenNickName} />
            <Input value={child.childrenBirth} />
            <div className="flex gap-2">
              <Badge>{child.childrenSex === "female" ? "여" : "남"}</Badge>
              <Badge variant={"outline"}>{child.childrenHeight}cm</Badge>
              <Badge variant={"outline"}>{child.childrenWeight}kg</Badge>
            </div>
          </div>
        </div>

        <Button h={12} rounded={"2xl"} onClick={() => onClick(child.childrenId || -1)}>
          <BiEdit />
        </Button>
      </div>
    </Card>
  );
};

export default ChildrenEdit;
