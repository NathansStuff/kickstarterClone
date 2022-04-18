import * as t from '../types'
const setUser = (userObj) => {
  return {
      type: t.SET_USER,
      payload: userObj
  }
}

const logOut = () => {
  return {
      type: t.LOG_OUT
  }
}

export default {
  setUser,
  logOut
}