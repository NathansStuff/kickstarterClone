import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { auth } from '../auth/firebase'
import { Provider } from 'react-redux'
import React from 'react'
import { store, wrapper } from '../redux/store'
// import {useStateValue} from './StateProvider'
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../redux/actions/index'

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch()

  // Checks for user State change
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        dispatch(allActions.userActions.setUser(authUser))
      } else {
        // User is logged out
        dispatch(allActions.userActions.logOut())
      }
    })
  }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
