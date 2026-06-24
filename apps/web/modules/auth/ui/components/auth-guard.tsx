"use client"

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react"
import { AuthLayout } from "../layouts/auth-layout"
import { SignInView } from "../views/sign-in-view"

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <AuthLoading>
                <AuthLayout>
                    <div className="flex items-center justify-center">
                        <h1>Loading...</h1>
                    </div>
                </AuthLayout>
            </AuthLoading>

            <Authenticated>
                {children}
            </Authenticated>

            <Unauthenticated>
                <AuthLayout>
                    <SignInView />
                </AuthLayout>
            </Unauthenticated>
        </>
    )
}