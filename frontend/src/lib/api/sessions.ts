export const getSession = async (id?: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}sessions/${id}`;

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

export const createSession = async (data: {
  userId: FormDataEntryValue | null;
  type: FormDataEntryValue | null;
  duration: FormDataEntryValue | null;
  startingTime: Date | null;
}) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}sessions`;

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

export const getSessionWeek = async () => {
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
export const getStudyTime = async (id?: string) => {
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
export const getSessionsCount = async (id?: string, type?: string) => {
  const url = `${
    process.env.NEXT_PUBLIC_API_BASE_URL
  }users/${id}/sessions/count${type ? `?type=${type}` : ""}`;

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

export const getAvaliablePlannedSessions = async (type?: string) => {
  const url = `${
    process.env.NEXT_PUBLIC_API_BASE_URL
  }sessions/planned/available${type ? `?type=${type}` : ""}`;

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

export const joinSession = async (data: { id?: string; userId?: string }) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}sessions/${data.id}/join`;

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      userId: data.userId,
    }),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
};

export const leaveSession = async (data: { id?: string; userId?: string }) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}sessions/${data.id}/leave`;

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      userId: data.userId,
    }),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
};

export const getVideoToken = async (id?: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}sessions/${id}/getToken`;

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
