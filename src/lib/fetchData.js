export const fetchSignIn = async (email, password) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PANDAMARKET_API_URL}/auth/signIn`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  );
  const data = await res.json();

  return data;
};
