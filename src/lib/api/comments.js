const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function updateComment(commentId, content) {
  const res = await fetch(`${BASE_URL}/comments/${commentId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  if (!res.ok) {
    throw new Error("댓글 수정에 실패했습니다.");
  }

  return res.json();
}

export async function deleteComment(commentId) {
  const res = await fetch(`${BASE_URL}/comments/${commentId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("댓글 삭제에 실패했습니다.");
  }

  return;
}
