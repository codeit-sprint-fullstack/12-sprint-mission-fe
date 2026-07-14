import type { Metadata } from "next";

import { PostWriteClient } from "@/app/(with-layout)/(app)/community/write/_components/PostWriteClient";

export const metadata: Metadata = {
  title: "게시글 쓰기",
};

export default function PostWritePage() {
  return <PostWriteClient />;
}
