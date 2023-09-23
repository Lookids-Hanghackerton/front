import { Card, Text, Badge } from "@chakra-ui/react";
import { Child } from "./ProfileEditForm";

const Children = ({ child }: { child: Child }) => {
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
};

export default Children;
