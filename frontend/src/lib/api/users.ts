const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}users`;

//
// Create a new user
export const createUser = async (data: {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}) => {
  const url = `${baseUrl}/signup`;

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
  const url = `${baseUrl}/signup/profile`;

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
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
  const url = `${baseUrl}/signin`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
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

export const logoutUser = async () => {
  const url = `${baseUrl}/logout`;

  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
};

//Get current user based on token
export const getCurrentUser = async () => {
  const url = `${baseUrl}/me`;

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
  const url = `${baseUrl}/${id}`;

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

export const getPoints = async (id?: string) => {
  const url = `${baseUrl + "/" + id}/points`;

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

export const getLevel = async (id?: string) => {
  const url = `${baseUrl + "/" + id}/level`;

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
  const url = `${baseUrl}/${id}/friends/count`;

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
