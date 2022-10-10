import { NextPage } from "next";
import Layout from "../../components/Layout";
import { trpc } from "../../utils/trpc";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { CreateRiskInput } from "../../validation/risks";
import { useState } from "react";
import { ErrorMessage } from '@hookform/error-message';

const CreateControlPage: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CreateRiskInput>();
    const [isSending, setIsSending] = useState<boolean>(false);
    const [showErrors, setShowErrors] = useState<boolean>(false);
    const { data: controls } = trpc.useQuery(["controls.getAll", {}]);
    const { mutateAsync } = trpc.useMutation(["risks.createRisk"]);
    const [categories, setCategories] = useState<string>();
    const [focusPoints, setFocusPoints] = useState<Array<number>>([0]);

    const onSubmit = async (data: CreateRiskInput): Promise<void> => {
        setShowErrors(false);
        setIsSending(true);
        try {
            const result = await mutateAsync(data);
            console.log(result);
        } finally {
            setIsSending(false);
        }
    }

    const handleCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategories(e.target.value);
    }

    const appendFocusPoint = () => {
        setFocusPoints([...focusPoints, focusPoints.length]);
    }



    return (
        <Layout>
            <Head>
                <title>Add New Control | Pi-Comply</title>
            </Head>
            <div className="text-2xl py-4 font-bold text-center">Add Control</div>
            <form className="bg-[#edf0f4]" onSubmit={handleSubmit(onSubmit, () => { setShowErrors(true) })}>
                <div className="px-4 grid gap-4 mx-auto grid-cols-3 ">
                    <div className="card p-3 w-full">
                        <h1 className="text-2xl font-bold pb-3 border-b">Details</h1>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="id" className="text-lg">Control ID</label>
                            <input type="text" id="id" {...register('id', { required: "You must include a unique and valid Risk ID" })} />
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="id"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>

                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="name" className="text-lg">Control Name</label>
                            <input type="text" id="name" {...register('name', { required: "You must include a risk name" })} />
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="name"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="category" className="text-lg">Category</label>
                            <select id="category" {...register('category', { required: "You must include a category" })} onChange={handleCategories}>
                                <option value="">-</option>
                                <option value="">Preventive</option>
                                <option value="">Detective</option>
                                <option value="">Corrective</option>
                            </select>

                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="processId" className="text-lg">Risk</label>
                            <select {...register("processId", { required: "You must select a risk" })} id="processId">
                                {
                                    controls && controls.map(fun => {
                                        return (
                                            <option value={fun.id} key={fun.id}>{fun.id} - {fun.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="processId"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="description" className="text-lg">Control Description</label>
                            <textarea {...register("description")} id="description" />
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="description"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                    </div>
                    <div className="card p-3 w-full">
                        <h1 className="text-2xl font-bold pb-3 border-b">RACI Model</h1>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="resposability" className="text-lg">Resposability</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="accountability" className="text-lg">Accountability</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="consulted" className="text-lg">Consulted</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="informed" className="text-lg">Informed</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="card p-3 w-full">
                        <h1 className="text-2xl font-bold pb-3 border-b">COSO Framework</h1>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="inherentRisk" className="text-lg">Principals</label>
                            <textarea></textarea>
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="residualRisk" className="text-lg">Points of focus</label>
                            {focusPoints.map((_, index) => {
                                return (
                                    <div key={index} className="flex flex-col gap-1 py-2">
                                        <input type="text" name="" id="" placeholder={`Focus point ${index+1}`} />
                                    </div>
                                )
                            })}
                            <button className="bg-gray-700 text-white rounded-lg py-1 text-lg" onClick={appendFocusPoint} type="button">+ Add new Focus Point</button>
                        </div>
                    </div>
                    <div className="card p-3 w-full">
                        <h1 className="text-2xl font-bold pb-3 border-b">Categories</h1>
                        <div className="flex flex-col gap-1 py-2">
                            <label className="text-lg">Categories (Comma seperated)</label>
                            <input type="text" onInput={handleCategories} />
                        </div>
                        <div className="flex gap-2">
                            {categories && categories.length > 0 && categories.split(',').map(cat => {
                                if (cat.trim() !== '') {
                                    return <div className="bg-indigo-500 text-white px-2 rounded-full py-1 font-semibold">{cat}</div>
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className="mt-2 flex justify-end px-4">
                    <button type="submit" className="bg-gray-900 text-white font-bold px-4 py-2 rounded-lg" disabled={isSending}>Submit</button>
                </div>
            </form>
        </Layout>
    )
}

export default CreateControlPage;