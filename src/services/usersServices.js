const accessTokenValue = localStorage.getItem("accessToken")

export const getUsers = async (inputValue) => {
  return fetch(`${import.meta.env.VITE_API_URL}/users?query=${inputValue || ""}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessTokenValue}`
    }
  }).then(response => response.json())
}

export const createUser = async (userData) => {
  return fetch(`${import.meta.env.VITE_API_URL}/materials`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenValue}`
    }
  }).then(response => response.json())
    .then(data => data)
}

export const deleteUser = async (materialId) => {
  return fetch(`${import.meta.env.VITE_API_URL}/users/${materialId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessTokenValue}`
    }
  })
}
