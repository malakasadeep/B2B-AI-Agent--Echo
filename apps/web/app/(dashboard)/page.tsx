"use client"

import { useMutation } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"
import { OrganizationSwitcher,  UserButton } from "@clerk/nextjs"

export default function Page() {

  const addUser = useMutation(api.users.add)
  return (
    <>
      <p>apps/web</p>
      <Button onClick={() => addUser({})}>Add User</Button>
      <UserButton />
      <OrganizationSwitcher hidePersonal />
    </>
  )
}
