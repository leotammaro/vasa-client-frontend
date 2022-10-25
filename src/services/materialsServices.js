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

export const createMaterial = async (materialData) => {

  return fetch(`${import.meta.env.VITE_API_URL}/materials`, {
    method: "POST",
    body: JSON.stringify(materialData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenValue}`
    }
  }).then(response => response.json())
    .then(data => data)
}

export const deleteMaterial = async (id) => {
  return fetch(`${import.meta.env.VITE_API_URL}/materials/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessTokenValue}`
    }
  })
}
