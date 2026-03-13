"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

//git pls work
export default function Login() {
  const [email, setEmail] = useState("")

  const login = async () => {
    await supabase.auth.signInWithOtp({
      email
    })
    alert("Check your email for login link")
  }

  return (
    <div className="flex flex-col gap-4 p-10 max-w-sm">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        className="border p-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={login}
        className="bg-black text-white p-2 rounded"
      >
        Login
      </button>
    </div>
  )
}