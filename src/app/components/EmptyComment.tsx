import React from "react";
import imgReplyEmpty from "@/assets/images/img_reply_empty.png";
import imgInquiryEmpty from "@/assets/images/img_inquiry_empty.png";

import Image from "next/image";

const EmptyComment = ({ type }: { type: "products" | "articles" }) => {
  return (
    <div className="flex flex-col gap-[16px] items-center">
      <Image
        src={type === "products" ? imgInquiryEmpty : imgReplyEmpty}
        alt="댓글이 없어요"
        width={140}
        height={140}
      />
      <div className="flex flex-col items-center text-lg text-(--Secondary-400)">
        {type === "products" ? (
          <p>아직 문의가 없어요</p>
        ) : (
          <>
            <p>아직 댓글이 없어요,</p>
            <p>지금 댓글을 달아보세요!</p>
          </>
        )}
      </div>
    </div>
  );
};

export default EmptyComment;
