"use client"
import React from 'react'
import { z } from "zod"
import { useForm } from "react-hook-form"
import type { FieldPath, Control } from "react-hook-form"
import { Form, FormField, FormItem, FormControl, FormDescription, FormMessage, FormLabel } from '@/components/ui/form'
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"



const formSchema = z.object({
    firstName: z.string().min(3).max(30),
    lastName: z.string().min(3).max(30),
    email: z.string().email(),
    username: z.string().min(3).max(30),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
})



const SignupForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            confirmPassword:"",
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }


  return (
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* fields */}
              <SignupFormField
                  name="firstName"
                  label="First Name"
                  placeholder="Kindly input your FirstName"
                  formControl={form.control}
                  description=""
              />

            <SignupFormField
                  name="lastName"
                  label="Last Name"
                  placeholder="Kindly input your FirstName"
                  formControl={form.control}
                  description=""
              />
              

            <SignupFormField
                  name="email"
                  label="Email"
                  placeholder="Kindly input your Email"
                  formControl={form.control}
                  inputType= "Email"
                  description=""
              />

            <SignupFormField
                  name="username"
                  label="Username"
                  placeholder="Kindly input your Username"
                  formControl={form.control}
                  description="At least 3 characters"
              />

            <SignupFormField
                  name="password"
                  label="Password"
                  placeholder="Password"
                  inputType="password"
                  formControl={form.control}
                  description="Atleast 8 characters."
              />

            <SignupFormField
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Re enter your password"
                  inputType="password"
                  formControl={form.control}
                  description="Password must match the password provided above"
              />

              <Button type="submit">Sign Up</Button>

          </form>
    </Form>
  )
}


interface SignupFormFieldProps {
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;
    description: string;
    inputType?: string;
    formControl: Control <z.infer<typeof formSchema>, undefined>
}

const SignupFormField: React.FC<SignupFormFieldProps> = ({
    name, label, placeholder, description, inputType, formControl
}) => {
    return (
        <FormField
            control={formControl}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel> {label} </FormLabel>
                    <FormControl>
                        <input
                            placeholder={placeholder}
                            type={inputType || 'text'}
                            {...field}
                            autoComplete= {name}
                        />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default SignupForm
