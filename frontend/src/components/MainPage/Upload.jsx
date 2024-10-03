import { useCallback, useState } from "react";
import { Button } from "../Button";
import { InputBox } from "../Inputbox";

export default function Upload() {
  const [imgPrev, setImgPrev] = useState("");

  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPrev(reader.result); // Set the preview URL
      };
      reader.readAsDataURL(file); // Convert the image file to a base64 URL
    }
  }, []);

  const uploadHandler = () => {
    const response = fetch("/api/video/upload", {
      credentials: "include",
      method: "POST",
      // body:
    });
  };

  return (
    <div className=" bg-blue-800 md:flex justify-between mx-2 my-auto p-2 w-[80%] md:h-[50%] rounded-lg  ">
      <div className=" flex-grow p-4 ">
        <form encType="multipart/form-data">
          <InputBox name={"title"} placeholder={"Title"} />
          <InputBox type="file" onChange={handleImageChange} />
          <Button type={"submit"} value={"Upload"} onClick={uploadHandler} />
        </form>
      </div>
      <div className="w-[50%] bg-black relative ">
        {imgPrev && (
          <img
            src={imgPrev}
            className="w-full h-full object-contain object-center "
          />
        )}
      </div>
    </div>
  );
}

// https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications
// to display image convert it to url(FileReader api) and pass it in img tag
