const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function authClient(endpoint, bodyData) {
  const url = `${API_URL}${endpoint}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || "인증 요청에 실패했습니다.");
    }

    return data;
  } catch (error) {
    console.error(`인증 에러 (${endpoint}):`, error.message);
    throw error;
  }
}

export async function signIn(email, password) {
  return authClient("/auth/signIn", { email, password });
}

export async function signUp(email, password, nickname, passwordConfirmation) {
  return authClient("/auth/signUp", {
    email,
    password,
    nickname,
    passwordConfirmation,
  });
}
