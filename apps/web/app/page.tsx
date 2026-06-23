"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const users = useQuery(api.users.getMeny)
  const addUser = useMutation(api.users.add)
  return (
    <div className="flex min-h-svh p-6">
      <p>apps/web</p>
      <p>{JSON.stringify(users)}</p>
      <Button onClick={() => addUser({})}>Add User</Button>
    </div>
  )
}
