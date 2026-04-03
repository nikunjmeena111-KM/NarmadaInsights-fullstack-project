export async function registerUser(formData) {
  const res = await fetch("http://localhost:8000/api/v1/users/register", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}