import { RxHamburgerMenu } from "react-icons/rx";

interface RightProps {
  isText: boolean;
  text?: string;
}

/**
 *
 * @param isText false => 햄버거 버튼 // true => text prop 필요
 * @param text
 */

const Right = ({ isText, text }: RightProps) => {
  return (
    <div className={"pl-6"}>{isText ? <p className={"font-semibold"}>{text}</p> : <RxHamburgerMenu size={28} />}</div>
  );
};

export default Right;
