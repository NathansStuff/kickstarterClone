import React from 'react'
import { auth } from '../auth/firebase'
import Router from 'next/router'

export default function UserPopup() {
  const signOut = () => {
    console.log('signing out!')
    auth
      .signOut()
      .then(() => {
        // successful
        Router.push('/')
      })
      .catch((error: { message: any }) => alert(error.message))
  }

  return (
    <div className="p-10 text-sm">
      <div className="flex space-x-5 pb-10">
        <div className="flex flex-col space-y-5 pb-5">
          <div>
            <h1 className="font-bold uppercase">Your Account</h1>
          </div>
          <div>
            <p className="cursor-pointer hover:text-secondary hover:underline">
              Saved projects
            </p>
            <p className="cursor-pointer hover:text-secondary hover:underline">
              Recommended for you
            </p>
            <p className="cursor-pointer hover:text-secondary hover:underline">
              Following
            </p>
          </div>
          <div>
            <p className="cursor-pointer hover:text-secondary hover:underline">
              Profile
            </p>
            <p className="cursor-pointer hover:text-secondary hover:underline">
              Settings
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-bold uppercase">Backed Projects</h1>
          </div>
        </div>
      </div>
      <div className="w-full border-t pt-5" onClick={signOut}>
        <h1 className="cursor-pointer hover:text-secondary hover:underline">
          Log out
        </h1>
      </div>
    </div>
  )
}
