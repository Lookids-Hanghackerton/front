import Image from "next/image";
import Link from "next/link";

interface SocialLoginButton {
  id: string;
  callbackUrl: string;
  imageUrl: string;
  alt: string;
  color: string;
}

const SocialLoginButton = ({ id, callbackUrl, imageUrl, alt, color }: SocialLoginButton) => {
  return (
    <div id={id} className="relative w-full h-full rounded-lg" style={{ backgroundColor: color }}>
      <Link href={callbackUrl} rel="noopener noreferrer">
        <Image src={imageUrl} alt={alt} layout="fill" objectFit="contain" />
      </Link>
    </div>
  );
};

export default SocialLoginButton;
