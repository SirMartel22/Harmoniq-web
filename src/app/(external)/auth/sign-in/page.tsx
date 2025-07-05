"use client"
import Link from 'next/link'

import SigninForm from "@/components/SigninForm"


export default function SignIn() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <section className="w-4/5 max-w-5xl">
                <div className="mb-8 flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold">Welcome to Sign-In Page</h1>
                    <p className="text-sm text-neutral-500">Already have an account ? {" "}
                        <Link href="Login" className="underline underline-offset-4">Login</Link></p>
                </div>
  
                <SigninForm />
            </section>
        </div>
    )
}