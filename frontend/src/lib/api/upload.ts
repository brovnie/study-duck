export const fetchAvatarSignature = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}users/avatar-signature`;

  const res = await fetch(url, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Failed to get signature");
  }

  return res.json();
};
