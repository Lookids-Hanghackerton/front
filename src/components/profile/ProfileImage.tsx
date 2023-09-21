"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";

const ProfileImage = () => {
  // 초기값은 프로필 사진 없을 때 넣을 기본 이미지
  const [image, setImage] = useState('/blank.png');
  
  const fileInput = useRef<HTMLInputElement>(null);
  
  const handleImage = async (e: any) => {
    // 내가 받을 파일은 하나기 때문에 index 0값의 이미지를 가짐
	const file = e.target.files[0]
    if(!file) return
    
    // 이미지 화면에 띄우기
    const reader = new FileReader();
    // 파일을 불러오는 메서드, 종료되는 시점에 readyState는 Done(2)이 되고 onLoad 시작
    reader.readAsDataURL(file)
    reader.onload = (e: any) => {
    	if(reader.readyState === 2) {
        	// 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
          	setImage(e.target.result)
        }
    }
    
    // 이미지 파일을 formData에 담아서 서버에 보내고, 서버는 받은 이미지 파일을 S3에 저장하고 받은 URL 값을 클라이언트로 반환해준다.
    const formData = new FormData();
    formData.append('image', file)
    try {
      // 
    	const imageRes = await (/*api 부분은 생략*/).post('/image', formData, {
          // 헤더에 보낼 파일의 타입이 multipart라 말해줘야 한다. 이미지 파일은 크기 때문에 부분으로 나눠서 보내기 때문
        	headers: { "Content-Type": "multipart/form-data" }
        })
        // 반환받은 이미지 URL, 원하는 곳에 사용하면 된다. 나 같은 경우 회원가입 할 때, 회원정보와 같이 한 번에 서버로 보내줬다.
        const image_URL = imageRes.data.imageURL
    } catch (e: Error) {
    	console.error(e.response)
    }
    
  }

  return (
  	<>	
    	{/* // 이미지 클릭했을 때 이미지 업로드, 숨긴 input의 reference를 fileInput으로 설정해서 가능 */}
    	<a href="#" onClick={() => {
        if(fileInput.current) {
          return fileInput.current.click()
        }
        } } >
    		<Image src={image} width={150} height={150} alt="프로필 이미지" />
    	</a>

      {/* // 이미지 업로드 버튼, htmlFor값을 숨긴 input의 id값으로 설정 */}
      <label htmlFor="input-file" >이미지 선택</label>

      {/* // 실제 이미지 받을 file 타입의 input */}
      <input type="file" name="image_URL" id="input-file" accept='image/*'
      style={{ display : "none" }} ref={fileInput} onChange={handleImage} />
    </>
  )
}

export default ProfileImage;