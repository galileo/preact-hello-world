export default function (state, action) {
  console.log('ACtion', action)

  switch (action.type) {
    case 'USER_FETCH':
      return {
        user: null,
        loading: true
      }
    case 'USER_FETCH_FULLFILED':
      return {
        user: action.payload,
        loading: false
      }
    case 'USER_FETCH_FAILED':
      return {
        user: null,
        loading: false
      }
    default:
      return state
  }
}
