import Link from 'next/link';
import React, { useState } from 'react'

export default function SigninComponent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(event)
  }
  return (
    <div className="flex justify-center bg-[#F7F7F6] py-20">
      <div className="m-5 w-full max-w-[400px] bg-white p-5">
        <h1 className="pb-5 text-2xl">Log in</h1>
        <form className="space-y-5" onSubmit={onChange}>
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
          <p className="cursor-pointer text-xs text-[#2752FF] hover:underline">
            Forgot your password?
          </p>{' '}
          <button className="w-full" type="submit">
            <div className="flex w-full justify-center border bg-[#028858] p-2 text-sm text-white hover:bg-secondary">
              Log in
            </div>
          </button>
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
          <div className="border-b" />
          <div className="flex justify-center text-sm">
            <p>
              New to Kickstarter?{' '}
              <Link href="/signup">
                <span className="cursor-pointer text-[#2752FF] hover:text-softBlack hover:underline">
                  Sign up
                </span>
              </Link>
            </p>
          </div>
          <div className="border-b" />
          <p className="text-xs text-[#9b9e9e]">
            This site is protected by reCAPTCHA and the Google{' '}
            <span className="cursor-pointer text-[#2752FF] hover:underline">
              Privacy Policy{' '}
            </span>
            and{' '}
            <span className="cursor-pointer text-[#2752FF] hover:underline">
              Terms of Service
            </span>{' '}
            apply.
          </p>
        </form>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
      </div>
    </div>
  )
}
