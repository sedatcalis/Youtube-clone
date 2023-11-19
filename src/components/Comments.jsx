import React, { useState, useEffect } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { useParams } from "react-router-dom";
import { getData } from "../helpers/getData";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getData(`/comments?id=${id}`);
          setComments(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [id]);
  
    console.log(comments);
 
  return (
    <div>
    <div className="flex flex-col  gap-5">
      <div className="flex gap-3 ">
        <p className="font-bold leading-7">{comments.length} Yorum</p>
        <div className="flex gap-2">
          <svg
            style={{ width: "24px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            focusable="false"
            className="pointer-events-none block w-full h-full"
          >
            <path
              fill="currentColor"
              d="M21,6.99H3V5h18V6.99z M15,11H3v1.99h12V11z M9,17H3v1.99h6V17z"
            />
          </svg>
          <span>Sıralama ölçüsü</span>
        </div>
      </div>

      <form className="flex flex-col gap-2 w-full">
        <div className="flex gap-3">
          <div className=" w-10 h-10 bg-black rounded-full">
            <div></div>
            <img
              className="rounded-full"
              src="https://yt3.googleusercontent.com/ytc/APkrFKat5awDLERIAqtjeZASnxiXi9Hke7DYcTJkjkii6A=s176-c-k-c0x00ffffff-no-rj"
              alt="user"
            />
          </div>
          <input
            className="w-full outline-none bg-black text-white border-b-2 border-gray-500 focus:border-transparent transition-all duration-300"
            placeholder="Yorum ekleyin ..."
          ></input>
        </div>

        <div className="flex justify-between items-center gap-5 w-full">
          <div className="bg-transparent p-1.5 hover:bg-gray-500 transition-colors inline-block rounded-full">
            <MdOutlineEmojiEmotions className=" text-[36px]" />
          </div>
          <div className="flex gap-5">
            <button className="hover:gray-500 px-5 py-2 rounded-full hover:bg-gray-600 focus:outline-none">
              İptal
            </button>
            <button className="text-white px-5 py-2 bg-gray-500 rounded-full hover:bg-gray-400 focus:outline-none">
              Yorum Yap
            </button>{" "}
          </div>
        </div>
      </form>
    </div>

    {/* Yorum Listesi */}
    <div className="flex flex-col items-center gap-5 w-full">
      {comments.map((comment) => (
        <React.Fragment key={comment.authorChannelId}>
          <div className="flex  items-center gap-5 w-full">
            <div className=" w-10 h-10 bg-black rounded-full my-5">
              <img
                className="rounded-full"
                src={comment.authorThumbnail
                    [2]}
                alt="user"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex gap-3">
                <p>{comment.authorText}</p>
                <p className="text-gray-500">{comment.publishedTimeText}</p>
              </div>
              <p className="">{comment.textDisplay}</p>
              <div className="flex items-center rounded-full ">
                <div className="py-2 px-4 max-w-[120px] flex items-center gap-1">
                  <AiFillLike size={20} />
                  <span>{comment.likesCount}</span>
                </div>
                <div className="py-2 px-4 ">
                  <AiFillDislike size={20} />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
  )
}

export default Comments
