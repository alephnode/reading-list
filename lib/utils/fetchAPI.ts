import axios from 'axios'

export default async function fetchAPI(query: string) {
  if(!process.env.HASURA_API_ENDPOINT) return

  const headers = {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': process.env.HASURA_ACCESS_SECRET,
  }

  const res = await (
    await axios.post(process.env.HASURA_API_ENDPOINT, 
      JSON.stringify({query}), 
      { headers })
  ).data

  return res
}
