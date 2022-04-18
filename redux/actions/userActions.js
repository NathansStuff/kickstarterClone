import * as t from '../types'
const setUser = (userObj) => {
  return {
      type: t.SET_USER,
      payload: userObj
  }
}

export default {
  setUser,
}