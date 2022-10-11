export const getUsers = async (accesToken) => {
  return fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accesToken}`
    }
  }).then(response => response.json())
}