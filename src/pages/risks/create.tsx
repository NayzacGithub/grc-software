import { NextPage } from "next";
import Layout from "../../components/Layout";
import { trpc } from "../../utils/trpc";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { CreateRiskInput } from "../../validation/risks";
import { useState } from "react";
import { ErrorMessage } from '@hookform/error-message';

const CreateRiskPage: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CreateRiskInput>();
    const [isSending, setIsSending] = useState<boolean>(false);
    const [showErrors, setShowErrors] = useState<boolean>(false);
    const { data: functions } = trpc.useQuery(["processes.getAll"]);
    const { mutateAsync } = trpc.useMutation(["risks.createRisk"]);
    const [categories, setCategories] = useState<string>();

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
    return (
        <Layout>
            <Head>
                <title>Add New Risk | Pi-Comply</title>
            </Head>
            <div className="text-2xl py-4 font-bold text-center">Add Risk</div>
            <p className="text-left">
                {/* {JSON.stringify(error)} */}
            </p>
            <form className="bg-[#edf0f4]" onSubmit={handleSubmit(onSubmit, () => { setShowErrors(true) })}>
                <div className="px-4 grid gap-4 min-w-max mx-auto grid-cols-2 ">
                    <div className="card p-3 w-full">
                        <h1 className="text-2xl font-bold pb-3 border-b">Details</h1>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="id" className="text-lg">Risk ID</label>
                            <input type="text" id="id" {...register('id', { required: "You must include a unique and valid Risk ID" })} />
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="id"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="name" className="text-lg">Risk Name</label>
                            <input type="text" id="name" {...register('name', { required: "You must include a risk name" })} />
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="name"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="riskType" className="text-lg">Category</label>
                            <select {...register("riskType", { required: "You must select a risk type" })} id="riskType">
                                <option value="Strategic_Risk">Strategic Risk</option>
                                <option value="Operational_Risk">Operational Risk</option>
                                <option value="Financial_Risk">Financial Risk</option>
                                <option value="Compliance_Risk">Compliance Risk</option>
                                <option value="Reputational_Risk">Reputational Risk</option>
                            </select>
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="riskType"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="processId" className="text-lg">Function</label>
                            <select {...register("processId", { required: "You must select a function" })} id="processId">
                                {
                                    functions && functions.map(fun => {
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
                            <label htmlFor="description" className="text-lg">Risk Description</label>
                            <textarea {...register("description")} id="description" />
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="description"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                    </div>
                    <div className="card p-3 w-full">
                        <h1 className="text-2xl font-bold pb-3 border-b">Parameters</h1>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="likelihood" className="text-lg">Likelihood</label>
                            <select {...register("likelihood")} id="likelihood">
                                <option className="text-green-500 font-bold" value="1">1. Rare</option>
                                <option className="text-green-400 font-bold" value="2">2. Unlikely</option>
                                <option className="text-yellow-500 font-bold" value="3">3. Possible</option>
                                <option className="text-orange-500 font-bold" value="4">4. Likely</option>
                                <option className="text-red-500 font-bold" value="5">5. Very Likely</option>
                            </select>
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="likelihood"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="impact" className="text-lg">Impact</label>
                            <select {...register("impact")} id="impact">
                                <option className="text-green-500 font-bold" value="1">1. Very low</option>
                                <option className="text-green-400 font-bold" value="2">2. Low</option>
                                <option className="text-yellow-500 font-bold" value="3">3. Medium</option>
                                <option className="text-orange-500 font-bold" value="4">4. High</option>
                                <option className="text-red-500 font-bold" value="5">5. Very High</option>
                            </select>
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="impact"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="riskVelocity" className="text-lg">Velocity</label>
                            <select {...register("riskVelocity")} id="riskVelocity">
                                <option className="text-green-500 font-bold" value="1">1. Very low</option>
                                <option className="text-green-400 font-bold" value="2">2. Low</option>
                                <option className="text-yellow-500 font-bold" value="3">3. Medium</option>
                                <option className="text-orange-500 font-bold" value="4">4. High</option>
                                <option className="text-red-500 font-bold" value="5">5. Very High</option>
                            </select>
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="riskVelocity"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                    </div>
                    <div className="card p-3 w-full">
                        <h1 className="text-2xl font-bold pb-3 border-b">Risk Assessment</h1>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="inherentRisk" className="text-lg">Inherent Risk</label>
                            <input type="text" {...register("inherentRisk", { required: "Please enter an inherent risk value" })} id="inherentRisk" />
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="inherentRisk"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="residualRisk" className="text-lg">Residual Risk</label>
                            <input type="text" {...register("residualRisk", { required: "Please enter a residual risk value" })} id="residualRisk" />
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="residualRisk"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                    </div>
                    <div className="card p-3 w-full">
                        <h1 className="text-2xl font-bold pb-3 border-b">Risk Thresholds</h1>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="riskAppetite" className="text-lg">Risk Appetite</label>
                            <input type="text" {...register("riskAppetite")} id="riskAppetite" />
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="riskAppetite"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="riskTolerance" className="text-lg">Risk Tolerance</label>
                            <input type="text" {...register("riskTolerance")} id="riskTolerance" />
                            <ErrorMessage
                                errors={showErrors ? errors : {}}
                                name="riskTolerance"
                                render={({ message }) => <p className="text-red-500">{message}</p>}
                            />
                        </div>
                    </div>
                    <div className="card p-3 w-full">
                        <h1 className="text-2xl font-bold pb-3 border-b"></h1>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="riskAppetite" className="text-lg">Risk Owner</label>
                            <input type="text" />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="riskAppetite" className="text-lg">Department</label>
                            <input type="text" />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label htmlFor="riskAppetite" className="text-lg">Line of defense</label>
                            <select name="" id="">
                                <option value="1">Line of defense 1</option>
                                <option value="1">Line of defense 2</option>
                                <option value="1">Line of defense 3</option>
                                <option value="1">Board of directors</option>
                            </select>
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

export default CreateRiskPage;