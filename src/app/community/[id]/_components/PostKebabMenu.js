"use client";

import KebabMenu from "./KebabMenu";

export default function PostKebabMenu({ id }) {
  return (
    <KebabMenu>
      <KebabMenu.Link href={`/community/${id}/edit`}>수정하기</KebabMenu.Link>
      <KebabMenu.Button>삭제하기</KebabMenu.Button>
    </KebabMenu>
  );
}
