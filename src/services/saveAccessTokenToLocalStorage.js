
export const saveAccessTokenToLocalStorage = async (getAccessTokenSilently) => {
  const domain = import.meta.env.VITE_AUDIENCE_URL;
  try {
    const accessTokenValue = await getAccessTokenSilently({
      audience: domain,
    });
    console.log(accessTokenValue) //usado para desarrollo
    localStorage.setItem("accessToken", accessTokenValue)

  } catch (e) {
    console.log(e.message);
    window.location.replace("/login");
  }
};