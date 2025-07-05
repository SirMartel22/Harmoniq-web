"use client"
import Link from 'next/link'

import SigninForm from "@/components/SigninForm"


export default function SignIn() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-300">
            <section className="w-2/5 max-w-5xl">
                <div className="mb-8 flex flex-col gap-2">
                    <h1 className="text-3xl font-bold">Welcome to Sign-In Page</h1>
                    <p className="text-sm text-neutral-500">Don`t have an account yet ? {" "}
                        <Link href="sign-up" className="underline underline-offset-4">Sign Up</Link></p>
                </div>
  
                <SigninForm />
            </section>
        </div>
    )
}