"use client";

import { PlaceComment } from "@/types/Place";
import React, { useCallback, useState } from "react";
import CustomBtn from "../common/CustomBtn";
import { MessageCircle, User2 } from "lucide-react";

const PlaceComments: React.FC<{ comments: PlaceComment[] }> = ({
  comments,
}) => {
  const [visNum, setVisNum] = useState(3);

  const moreCommentHandler = useCallback(() => {
    setVisNum((prevNum) => prevNum + 3);
  }, []);

  return (
    <div className="w-full flex flex-col items-start justify-start gap-5">
      <h6 className="text-accentColor text-2xl text-center font-medium">
        نظرات کاربران
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex md:sticky top-0 flex-col items-start justify-start gap-5">
          <textarea
            rows={5}
            placeholder="نظر شما درباره این مکان"
            className="w-full rounded-md p-3 border outline-none focus:border-primaryColor transition-all ease-in-out duration-300"
          />
          <CustomBtn>
            افزودن نظر جدید
            <MessageCircle size={20} />
          </CustomBtn>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 col-span-1 md:col-span-2">
          {comments.slice(0, visNum).map((comment) => {
            return (
              <div
                className="bg-white w-full flex flex-col items-start justify-start gap-5 p-5 rounded-xl shadow-md"
                key={comment.Id}
              >
                <div className="flex items-center justify-start gap-5">
                  <User2
                    size={32}
                    className="bg-gradient-to-b from-primaryColor to-accentColor p-1 rounded-full text-white"
                  />
                  <h5 className="text-3xl font-medium">
                    {comment.Rate.toLocaleString("fa-IR")}
                  </h5>
                </div>
                <p>{comment.Content}</p>
              </div>
            );
          })}
        </div>
      </div>
      {comments.length > 3 &&
        comments.length !== visNum &&
        visNum < comments.length && (
          <CustomBtn onClickHandler={moreCommentHandler}>
            دیدن نظرات بیشتر
          </CustomBtn>
        )}
    </div>
  );
};

export default PlaceComments;
