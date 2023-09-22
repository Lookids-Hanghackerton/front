import { RxHamburgerMenu } from "react-icons/rx";

interface RightProps {
  isText: boolean;
  text?: string;
  onClick?: () => void;
}

/**
 *

@param isText false => 햄버거 버튼 // true => text prop 필요
@param text
@param onClick
*/

const Right = ({ isText, text, onClick }: RightProps) => {
  return (
    <div className={"pl-6"}>
      {isText ? (
        <p className={"font-semibold cursor-pointer"} onClick={onClick}>
          {text}
        </p>
      ) : (
        <RxHamburgerMenu size={28} />
      )}
    </div>
  );
};

export default Right;
