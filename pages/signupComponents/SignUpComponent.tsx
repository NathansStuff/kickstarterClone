import Link from 'next/link'
import React, { useState } from 'react'
import { auth } from '../../auth/firebase'

export default function SignUpComponent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [news, setNews] = useState(false)
  const [research, setResearch] = useState(false)


  const signup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth: any) => {
        // successful
        console.log(auth)
        if (auth) {
          
        }
      })
      .catch((error: { message: any }) => alert(error.message))
  }
  return (
    <div className="flex justify-center bg-[#F7F7F6] py-20">
      <div className="w-full max-w-[400px] bg-white ">
        <div className="flex w-full justify-center border-b">
          <p className="p-5 text-sm ">
            Have an account?{' '}
            <Link href="/login">
              <span className="cursor-pointer text-[#2752ff] hover:text-black hover:underline">
                {' '}
                Log in
              </span>
            </Link>
          </p>
        </div>
        <div className="m-5 p-5">
          <h1 className="pb-5 text-2xl">Sign up</h1>
          <form className="space-y-5" onSubmit={signup}>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 text-sm"
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 text-sm"
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 text-sm"
            />
            <div>
              <input
                type="checkbox"
                id="news"
                name="news"
                value="news"
                onChange={(e) => setNews(!news)}
              />
              <label htmlFor="news" className="pl-2 text-sm">
                Send me a weekly mix of handpicked projects, plus occasional
                Kickstarter news
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="research"
                name="research"
                value="research"
                onChange={(e) => setResearch(!research)}
              />
              <label htmlFor="research" className="pl-2 text-sm">
                Contact me about participating in Kickstarter research
              </label>
            </div>
            <p className="cursor-pointer text-xs text-[#2752FF] hover:underline">
              Forgot your password?
            </p>{' '}
            <button className="w-full" type="submit">
              <div className="flex w-full justify-center border bg-[#028858] p-2 text-sm text-white hover:bg-secondary">
                Log in
              </div>
            </button>
            <div>
              <p className="font-softBlack text-xs">
                By signing up, you agree to our{' '}
                <span className="cursor-pointer text-xs text-[#2752FF] hover:text-softBlack">
                  Privacy Policy
                </span>
                ,{' '}
                <span className="cursor-pointer text-xs text-[#2752FF] hover:text-softBlack">
                  Cookie Policy
                </span>{' '}
                and{' '}
                <span className="cursor-pointer text-xs text-[#2752FF] hover:text-softBlack">
                  Terms of Use
                </span>
                .
              </p>
            </div>
            <div className="flex w-full items-center justify-center space-x-3">
              <div className="w-full border-b" />
              <p className="text-sm">or</p>
              <div className="w-full border-b" />
            </div>
            <div>
              <p className="text-xs">
                Get notified when your friends back and launch projects. <br />
                We'll never post anything on Facebook without your permission.
              </p>
            </div>
          </form>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
        </div>
      </div>
    </div>
  )
}
function useHistory() {
  throw new Error('Function not implemented.');
}

