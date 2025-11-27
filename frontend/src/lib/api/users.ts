"use client";
export const createUser = async (data: {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}users/signup`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
};
