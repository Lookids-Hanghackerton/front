import { RxHamburgerMenu } from "react-icons/rx";

interface RightProps {
  isText: boolean;
  text?: string;
  onClick?: () => void;
}

/**
 *
 * @param isText
 * @param text
 * @param onClick
 */

const Post = ({ isText, text, onClick }: RightProps) => {
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

export default Post;
