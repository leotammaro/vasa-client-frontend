const accessTokenValue = localStorage.getItem("accessToken")

export const getUsers = async (inputValue) => {
  return fetch(`${import.meta.env.VITE_API_URL}/users?query=${inputValue || ""}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessTokenValue}`
    }
  }).then(response => response.json())
}
