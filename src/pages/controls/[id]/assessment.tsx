import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ActionsLayout, { ActionsLayoutHeader, ActionsLayoutMain, ActionsLayoutSection, ActionsLayoutSide } from "../../../components/ActionsLayout";
import Link from "next/link";
import { useControlNavigation } from "../../../utils/navHook";
import SigningBoard from "../../../components/SigningBoard";

const ActionButton = () => {
    return <button className="bg-blue-500 text-white  px-4 py-3  rounded-lg flex gap-2 my-auto "><span className="my-auto">Start Risk Assessment</span></button>
}

const ControlAssessmentPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data: control, isLoading, status } = trpc.useQuery(['controls.getControl', { controlId: id as string }]);

    const { navigateTo } = useControlNavigation();
    if (isLoading) {
        return <ActionsLayout><div>Loading...</div></ActionsLayout>
    }

    if (status == "error" || !control) {
        return <ActionsLayout><div>Error...</div></ActionsLayout>
    }



    return (
        <ActionsLayout>
            <ActionsLayoutHeader>
                <div className="flex flex-col ">
                    <span className="text-sm">Control Assessment</span>
                    <h1 className="text-2xl">
                        {control?.id} - <span className="font-bold"> Assessment #1</span>
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
                        <span className="text-sm">Status</span>
                        <h1 className="text-sm">
                            <span className="bg-red-500 text-white px-1 py-1 rounded-lg">Awaiting Assessment</span>
                        </h1>
                    </div>
                </div>

            </ActionsLayoutHeader>
            <ActionsLayoutMain>
                <div className="grid gap-5 grow">
                    <div className="p-5 bg-white">
                        <details open className=" pb-5">
                            <summary className="text-2xl font-bold">General</summary>
                            <div className="flex flex-col gap-2 justify-between pt-4">
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">Control ID</span>
                                    <span>{control.id}</span>
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
                        <div className="border-t-2 pb-5">
                            <h1 className="text-2xl font-bold mb-2">Working Paper</h1>
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-col gap-1 max-w-fit">
                                    <span className="font-bold">Process</span>
                                    <input type={'text'} name="process" value={control.RiskControl?.at(0).risk.FunctionRisk[0]?.function.name} disabled className="pFormInput " />
                                </div>
                                <div className="flex flex-col gap-1 max-w-fit">
                                    <span className="font-bold">Auditor Name</span>
                                    <input type={'text'} name="effectiveness" value="Nour Sofanati" disabled className="pFormInput " />
                                </div>
                                <div className="flex flex-col gap-1 max-w-fit">
                                    <span className="font-bold">Date of engagment</span>
                                    <input type={'date'} defaultValue={(new Date()).toISOString().slice(0, 10)[0]} className="pFormInput " />
                                </div>
                                <div className="flex flex-col gap-1 max-w-fit">
                                    <span className="font-bold">Control ID</span>
                                    <input type={'text'} defaultValue={control.id} disabled className="pFormInput " />
                                </div>

                                <div className="flex flex-col gap-1 max-w-fit">
                                    <span className="font-bold">Mitigating the following risks</span>
                                    <ul className=" list-disc pl-4">
                                        {control.RiskControl?.map((rc) => {
                                            return <li className="list-item">{rc.risk_id} - {rc.risk.name}</li>
                                        })}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-1 max-w-fit">
                                    <span className="font-bold">Design Effectiveness</span>
                                    <select name="effectiveness" className="pFormInput ">
                                        <option value="" selected>Select a value --</option>
                                        <option value="effective">Effective</option>
                                        <option value="defective">Defective</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1 max-w-fit">
                                    <span className="font-bold">Adequacy</span>
                                    <select name="adequacy" className="pFormInput ">
                                        <option value="" selected>Select a value --</option>
                                        <option value="effective">Adequate</option>
                                        <option value="defective">Not Adequate</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1 max-w-fit">
                                    <span className="font-bold">Impact</span>
                                    <textarea name="recommendations" className="pFormInput " />
                                </div>
                                <div className="flex flex-col gap-1 max-w-fit">
                                    <span className="font-bold">Recommendations</span>
                                    <textarea name="recommendations" className="pFormInput " />
                                </div>
                                <div className="flex flex-col gap-1 max-w-fit">
                                    <span className="font-bold">Attachments</span>
                                    <input type={'file'} name="attachments" className="pFormInput " multiple />
                                </div>
                                <div className="flex flex-col gap-1 max-w-fit">
                                    <span>Sign</span>
                                    <SigningBoard width={250} height={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ActionsLayoutSide>
                    <div className="card py-3 px-5 flex flex-col gap-2 min-w-[350px]">
                        <div className="grid grid-cols-3">
                            <h3 className="font-semibold">
                                Job
                            </h3>
                            <p className=" col-span-2 ">Control Assessment Job #1</p>
                        </div>
                    </div>
                    <div className="bg-white border-teal-600 border-2 border-l-8 py-3 px-5">
                        <h2 className="font-bold mb-2">Control Assessment</h2>
                        <p className="mb-1">Review and update the control information</p>
                        <p className="mb-1">Add, Review, Update test plans and provide Test Results.</p>
                    </div>
                </ActionsLayoutSide>
            </ActionsLayoutMain>
        </ActionsLayout>
    );
}

export default ControlAssessmentPage
