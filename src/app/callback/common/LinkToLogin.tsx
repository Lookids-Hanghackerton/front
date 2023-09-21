import Link from "next/link";

const LinkToLogin = () => {
  return (
    <Link href="/login" className="mt-4 text-gray-600 text-center">
      문제가 있나요? <br />
      <span className="underline">로그인으로 이동</span>
    </Link>
  );
};

export default LinkToLogin;
