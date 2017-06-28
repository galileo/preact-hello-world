const config = {
  urls: {
    user: 'https://api.github.com/users/'
  }
}

export function fetchUser (username) {
  console.log(username, 'to fetch')
  return (dispatch) => {
    console.log('super', username)

    const { urls } = config
    const apiUrl = urls.user

    dispatch({
      type: 'USER_FETCH'
    })

    fetch(`${apiUrl}${username}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Ups... There is an API Error')
        }

        return res.json()
      })
      .then(({ name, avatar_url }) => ({ name, image: avatar_url }))
      .then(user => {
        dispatch({
          type: 'USER_FETCH_FULLFILED',
          payload: user
        })
      })
      .catch(() => {
        dispatch({
          type: 'USER_FETCH_FAILED',
          payload: null
        })
      })
  }
}
