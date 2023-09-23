import { FieldValues } from "react-hook-form";

export default function InputText({ placeholder = "내용을 입력해주세요", type = "text", isDisabled = false }) {
  let currentStyle = error && error?.type;
  if (isDisabled) currentStyle = "disable";
  if (typeof currentStyle !== "string") currentStyle = "default";

  return (
    <>
      {/* input box */}
      <div className={`flex justify-between w-full h-[2.5625rem] items-center rounded border `}>
        <input
          className={`border-none w-full h-full font-bold mx-[0.88rem] my-[0.62rem] bg-inherit text-lg text-primary placeholder:text-[#d4dae2] focus:outline-none`}
          type={type}
          placeholder={placeholder}
          disabled={isDisabled}
          {...register()}
          autoComplete="off"
        />
        <style></style>
      </div>
    </>
  );
}
