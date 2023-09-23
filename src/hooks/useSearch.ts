import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

const useSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [inputKeyword, setInputKeyword] = useState("");
  const [keyword, setKeyword] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputKeyword(e.target.value);
  };

  const clickHandler = () => {
    setKeyword(inputKeyword);
    router.replace(`/search?keyword=${inputKeyword}`);
  };

  return {
    params,
    changeHandler,
    clickHandler,
  };
};

export default useSearch;
