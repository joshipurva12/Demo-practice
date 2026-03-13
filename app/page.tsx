"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
export default function Home() {
  const [tasks, setTasks] = useState<any[]>([])

  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    const { data } = await supabase
      .from("tasks")
      .select("*")

    setTasks(data || [])
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Team Task Board
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {tasks.map(task => (
          <div
            key={task.id}
            className="border p-4 rounded-lg shadow"
          >
            <h2 className="font-semibold">
              {task.title}
            </h2>

            <p className="text-sm text-gray-500">
              {task.status}
            </p>
          </div>
        ))}

      </div>
    </main>
  )
}