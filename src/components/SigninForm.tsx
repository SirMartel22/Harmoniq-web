"use client"

import React from 'react'
import { z } from "zod"
import { useForm } from "react-hook-form"
import type { FieldPath, Control } from "react-hook-form"
import { Form, FormField, FormItem, FormControl, FormDescription, FormMessage, FormLabel } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"


const formSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(30),
  password: z.string().min(8),
})
const SigninForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password:"",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* field */}
        <SignupFormField
          name="email"
          label="Email"
          placeholder="Email"
          inputType="Email"
          formControl={form.control}
          description=""
        />

         <SignupFormField
          name="username"
          label="Username"
          placeholder="Username"
          description="At least 3 characters."
          formControl={form.control}
        />

         <SignupFormField
          name="password"
          label="Password"
          placeholder="Password"
          inputType="password"
          description="At least 8 characters."
          formControl={form.control}
        />
        <Button type="submit">Sign up</Button>
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
  formControl: Control<z.infer <typeof formSchema>, undefined>
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
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <input placeholder={placeholder} type={inputType || 'text'}
              {...field}
              autoComplete={name}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    
      />
  )
}

export default SigninForm
