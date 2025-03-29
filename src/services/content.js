
const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL
export const fetchContent = async (themeId) => {
  const url = `${BASE_URL}/content/theme/${themeId}`
  const res = await fetch(
    url
  ) 

  if (!res.ok) {
    const status = res.status
    const statusText = res.statusText
    const data = await res.text()
    const message = data ? JSON.parse(data).message : statusText
    console.error(status, statusText, message)
    throw new Error('Failed to fetch data')
  }

  const data = await res.json() 
  return data
}