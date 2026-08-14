// Decode JWT payload (no verification - just to read user info)
export function getUser() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    // Check expiry
    if (payload.exp && Date.now() / 1000 > payload.exp) {
      localStorage.removeItem("token");
      return null;
    }
    return payload; // { userId, name, email }
  } catch {
    return null;
  }
}

export function isLoggedIn() {
  return !!getUser();
}
