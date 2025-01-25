import { userEndpoints } from "../endpoints"

// This is an example to organise fetch functions
export const getUserById = async (id: string) => {
  const url = userEndpoints.getUserById(id)
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
  const response = await fetch(url, options)
  if(!response.ok) {
    throw new Error(`Failed to fetch user with id ${id}`)
  }
  const result = await response.json()
  return result
}