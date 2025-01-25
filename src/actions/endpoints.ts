const BASE_URL = `${import.meta.env.VITE_API_URL}/api`

export const userEndpoints = {
  getUserById: (id: string) => `${BASE_URL}/users/${id}`,
}