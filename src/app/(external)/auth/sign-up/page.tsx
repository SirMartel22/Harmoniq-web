
import Link from 'next/link'
// import SignupForm from "@/components/SignupForm"
import SignupForm from "@/components/SignupForm"

export default function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <section className="w-4/5 max-w-5xl">
                <div className="mb-8 flex flex-col gap-2">
                    <h1 className="text-3xl font-bold">Sign Up? </h1>
                    <p> Already have an Account? {" "} 
                        <Link href="sign-in" className="underline underline-offset-4"> Sign In</Link>
                    </p>
                </div>

                <SignupForm /> 
            </section>
        </div>
    )
}