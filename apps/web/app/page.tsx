"use client"

import { useMutation, useQuery, Authenticated, Unauthenticated } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"
import { SignInButton, UserButton } from "@clerk/nextjs"

export default function Page() {
  const users = useQuery(api.users.getMeny)
  const addUser = useMutation(api.users.add)
  return (
    <>
      <Authenticated>
        <p>apps/web</p>
        <p>{JSON.stringify(users)}</p>
        <Button onClick={() => addUser({})}>Add User</Button>
        <UserButton />
      </Authenticated>
      <Unauthenticated>
        <p>Login to use the app</p>
        <SignInButton />
      </Unauthenticated>
    </>
  )
}
