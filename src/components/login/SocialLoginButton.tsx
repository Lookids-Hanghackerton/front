import Image from "next/image";
import Link from "next/link";

interface SocialLoginButton {
  id: string;
  callbackUrl: string;
  imageUrl: string;
  alt: string;
}

const SocialLoginButton = ({ id, callbackUrl, imageUrl, alt }: SocialLoginButton) => {
  return (
    <div id={id} className="relative w-full h-full">
      <Link href={callbackUrl} target="_blank" rel="noopener noreferrer">
        <Image src={imageUrl} alt={alt} layout="fill" objectFit="contain" />
      </Link>
    </div>
  );
};

export default SocialLoginButton;
