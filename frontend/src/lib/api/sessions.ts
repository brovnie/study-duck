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
