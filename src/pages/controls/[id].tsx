import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ActionsLayout, { ActionsLayoutHeader, ActionsLayoutMain, ActionsLayoutSection, ActionsLayoutSide } from "../../components/ActionsLayout";

const ActionButton = () => {
    return <button className="bg-blue-500 text-white  px-4 py-3  rounded-lg flex gap-2">Actions <ChevronDownIcon className="w-6 h-6" /></button>
}

const RiskPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data: control, isLoading, status } = trpc.useQuery(['controls.getControl', { controlId: id as string }]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (status == "error" || !control) {
        return <div>Error</div>
    }

    return (
        <ActionsLayout>
            <ActionsLayoutHeader>
                <div className="flex flex-col ">
                    <span className="text-sm">Control</span>
                    <h1 className="text-2xl">
                        {control.id}
                    </h1>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col ">
                        <span className="text-sm">Owner</span>
                        <h1 className="text-lg">
                            Nour Sofanati
                        </h1>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <span className="text-sm">Design Effectiveness</span>
                        <h1 className="text-sm">
                            <span className="bg-green-500 text-white px-1 py-1 rounded-lg">Effective</span>
                        </h1>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <span className="text-sm">Operating Effectiveness</span>
                        <h1 className="text-sm">
                            <span className="bg-green-500 text-white px-1 py-1 rounded-lg">Effective</span>
                        </h1>
                    </div>
                </div>
                <ActionButton />
            </ActionsLayoutHeader>
            <ActionsLayoutMain>
                <ActionsLayoutSection>
                    <div className="p-5">
                        <details open className=" pb-5">
                            <summary className="text-2xl font-bold">General</summary>
                            <div className="grid gap-5">
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">Control ID</span>
                                    <span>{control.id}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">Control</span>
                                    <span>{control.name}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">Description</span>
                                    <span className=" whitespace-pre-wrap">{control.description}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">Owner</span>
                                    <span>{`Nour Sofanati`}</span>
                                </div>
                            </div>
                        </details>

                        <details open className=" border-t-2 pb-5">
                            <summary className="text-2xl font-bold ">Control Assessment</summary>
                            <div className="flex justify-around pt-4">
                                {/* <div className="flex flex-col gap-1 justify-center items-center">
                                    <span className="font-bold">Design Effectiveness</span>
                            
                                    <span className="bg-green-700 text-white rounded-full px-4 pb-1 max-w-fit">{`Effective`}</span>
                                </div>
                                <div className="flex flex-col gap-1 justify-center items-center">
                                    <span className="font-bold">Adequacy</span>
                                    <span className="bg-green-700 text-white rounded-full px-4 pb-1 max-w-fit">{`Adequate`}</span>
                            
                                </div> */}
                                <div className="flex flex-col gap-1 justify-center items-center">
                                    <span className="font-bold">Design Effectiveness</span>
                                    <select name="effectiveness" id="" className="border-gray-400 border-b-green-800 min-w-[250px] border-1 border-b-4 ">
                                        <option value="">Effective</option>
                                        <option value="">Defective</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1 justify-center items-center">
                                    <span className="font-bold">Adequacy</span>
                                    <select name="effectiveness" id="" className="border-gray-400 border-b-green-800 min-w-[250px] border-1 border-b-4 ">
                                        <option value="">Effective</option>
                                        <option value="">Defective</option>
                                    </select>
                                </div>
                            </div>
                            
                        </details>
                        <details open className=" border-t-2 pb-5">
                            <summary className="text-2xl font-bold ">Control Issues</summary>
                            <div>
                                <h2 className="text-xl font-bold">Control Issues</h2>
                                <table className="bg-white w-full table-auto border mt-3">
                                    <thead>
                                        <tr>
                                            <th className="bg-[#dbdbdb]/30 border-x py-4">Issue name</th>
                                            <th className="bg-[#dbdbdb]/30 border-x py-4">Description</th>
                                            <th className="bg-[#dbdbdb]/30 border-x py-4">Priority</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td className="text-center py-5 border-x" colSpan={3}>No Results</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </details>
                    </div>
                </ActionsLayoutSection>
                <ActionsLayoutSide>
                    <div className="card py-3 px-5 flex flex-col gap-2">
                        <div className="grid grid-cols-3">
                            <h3 className="font-semibold">
                                Stage
                            </h3>
                            <p className=" col-span-2">Assess Control</p>
                        </div>
                        <div className="grid grid-cols-3">
                            <h3 className="font-semibold">
                                Due Date
                            </h3>
                            <p className=" col-span-2">30/11/2022</p>
                        </div>
                    </div>
                    <div className="bg-white border-teal-600 border-2 py-3 px-5">
                        <h2 className="font-bold mb-2">Control Assessment</h2>
                        <p className="mb-1">Review and update the control information</p>
                        <p className="mb-1">Add, Review, Update test plans and provide Test Results.</p>
                    </div>
                </ActionsLayoutSide>
            </ActionsLayoutMain>
        </ActionsLayout>
    );
}

export default RiskPage
