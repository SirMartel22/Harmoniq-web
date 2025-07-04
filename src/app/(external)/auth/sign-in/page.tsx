 
import Link from "next/link";

export default function SignIn() {
    return (
        // <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        //     <h1 className="text-2xl font-bold">SignIn</h1>
        // </div>

        <main className="flex min-h-screen items-center justify-center">
            <section className="w-4/5 max-w-5xl">
                <div>
                    <h1>SignIn</h1>
                    <p>Already Have an account? <Link href="#">Login</Link></p>
                </div>
            </section>
        </main>
    );
}