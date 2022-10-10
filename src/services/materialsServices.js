export const getMaterials = async (accesToken) => {
  return fetch(`${import.meta.env.VITE_URL}/materials`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accesToken}`
    }
  }).then(response => response.json())
    .then(data => data)

}