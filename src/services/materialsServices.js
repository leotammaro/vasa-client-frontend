const accessTokenValue = localStorage.getItem("accessToken")

export const getMaterials = async (inputValue) => {
  return fetch(`${import.meta.env.VITE_API_URL}/materials?query=${inputValue || ""}`, {
    method: "GET",

    headers: {
      Authorization: `Bearer ${accessTokenValue}`
    }
  }).then(response => response.json())
    .then(data => data)

}
