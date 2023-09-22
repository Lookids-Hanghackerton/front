import { IoMdCloseCircle } from "react-icons/io";

interface CenterProps {
  isText: boolean;
  text?: string;
  placeHolder?: string;
}

/**
 *
 * @param isText false => 검색 인풋 // true => text prop 필요
 * @param text
 * @param placeHolder
 */

const Center = ({ isText, text, placeHolder }: CenterProps) => {
  return (
    <div className={"pl-6"}>
      {isText ? (
        <p className={"text-xl font-semibold"}>{text}</p>
      ) : (
        <div className={"flex-1 relative"}>
          <input
            className={"min-w-0 w-full mr-8 p-4 font-medium text-sm outline-0 bg-gray-100 rounded-lg "}
            placeholder={placeHolder}
          />
          <div className={"absolute right-4 top-[14px] cursor-pointer"}>
            <IoMdCloseCircle size={24} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Center;
