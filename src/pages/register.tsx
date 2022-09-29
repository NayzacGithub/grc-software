import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { trpc } from "../utils/trpc";
import { RegisterSchema } from "../validation/auth";

const RegsiterPage: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>();
    const mutation = trpc.useMutation(["auth.register"]);
    const onSubmit = (data: RegisterSchema) => {
        try {
            mutation.mutateAsync(data);
        } finally {
            console.log('data');
        }
    }
    return <>
        <Head>
            <title>Register a new user</title>
        </Head>
        <main className="h-screen bg-gray-900  grid place-items-center text-white place-content-center">
            <section className=" bg-gray-600 border-2 border-gray-500 px-4 py-2 rounded-lg">
                <h1 className="text-xl text-white mb-4">
                    Create a new account.
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <input id="name" {...register('name', { required: true, maxLength: 30 })} className='input' />
                        {errors.name && errors.name.type === "required" && <span className="text-red-400 text-xs">This is required</span>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input id="email" {...register('email', { required: true })} className='input' type={'email'} />
                        {errors.email && errors.email.type === "required" && <span className="text-red-400 text-xs">This is required</span>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input id="password" {...register('password', { required: true })} className='input' type={'password'} />
                        {errors.password && errors.password.type === "required" && <span className="text-red-400 text-xs">This is required</span>}
                    </div>
                    <button type="submit" className="w-full py-2 bg-gray-900 rounded-lg mt-2" >Register</button>
                </form>
            </section>

        </main>
    </>
}

export default RegsiterPage;

