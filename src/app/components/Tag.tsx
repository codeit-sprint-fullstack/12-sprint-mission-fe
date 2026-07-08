import React from "react";

const Tag = ({ tag }: { tag: string }) => {
  return (
    <div className="px-[16px] py-[6px] bg-(--Secondary-100) rounded-[26px] w-fit">
      <p className="text-lg text-(--Secondary-800)">#{tag}</p>
    </div>
  );
};

export default Tag;
