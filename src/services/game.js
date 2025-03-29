
const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL
export const startGame = async (themeId) => {
  const url = `${BASE_URL}/game/`
  const res = await fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ "themeId" : themeId })
    }
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


export const makeMove = async (gameId, selectedCardIds) => {
  const url = `${BASE_URL}/game/move`
  const res = await fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "gameId": gameId,
        "selectedCardIds": selectedCardIds
     })
    }
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
