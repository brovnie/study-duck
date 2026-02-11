const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;
const defaultHeaders = {
  "Content-Type": "application/json",
  ...(token && { Authorization: `Bearer ${token}` }),
};

//
// Create a new user
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

  const responseData = await response.json();

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
};

//
// Get user by ID
export const getUserById = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}users/${id}`;

  const response = await fetch(url, {
    method: "GET",
    headers: defaultHeaders,
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
};
