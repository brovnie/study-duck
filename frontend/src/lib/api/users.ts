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
// Create a new user profile
export const createUserProfile = async (data: {
  id: string;
  name: FormDataEntryValue | null;
  institute: FormDataEntryValue | null;
  timezone: FormDataEntryValue | null;
  image: string | null;
}) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}users/signup/profile`;

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: data.id,
      name: data.name,
      institute: data.institute,
      timezone: data.timezone,
      image: data.image,
    }),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
};

//
// Sign in a user
export const loginUser = async (data: {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}users/signin`;

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

//Get current user based on token
export const getCurrentUser = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}users/me`;

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
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

export const getPoints = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}users/${id}/points`;

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
};

export const getSessionsCount = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}users/${id}/sessions/completed`;

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
};

export const getStudyTime = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}users/${id}/sessions/studytime`;

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
};

export const getCountFriends = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}users/${id}/friends/count`;

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
};

export const getSessionWeek = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}users/${id}/sessions/weekly`;

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
};

export const getLevel = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}users/${id}/level`;

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
};
