export const createSession = async (data: {
  userId: FormDataEntryValue | null;
  type: FormDataEntryValue | null;
  duration: FormDataEntryValue | null;
  startingTime: Date | null;
}) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}sessions`;
  console.log("user id is", data.userId);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      userId: data.userId,
      type: data.type,
      duration: data.duration,
      startingTime: data.startingTime,
    }),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
};

export const getSessionWeek = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}sessions/weekly`;

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
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}sessions/studytime`;

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
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}sessions/completed`;

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
