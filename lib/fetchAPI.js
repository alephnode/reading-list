import fetch from 'node-fetch'

export default async function fetchAPI(query, { variables } = {}) {
  const headers = {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': process.env.HASURA_ACCESS_SECRET,
  }

  const res = await (
    await fetch(process.env.HASURA_API_ENDPOINT, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  ).json()

  if (res.error) console.log(res.error)
  return res.data
}
