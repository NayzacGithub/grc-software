import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ActionsLayout, { ActionsLayoutHeader, ActionsLayoutMain, ActionsLayoutSection, ActionsLayoutSide } from "../../../components/ActionsLayout";
import Link from "next/link";
import { useControlNavigation } from "../../../utils/navHook";

const ActionButton = () => {
    return <button className="bg-blue-500 text-white  px-4 py-3  rounded-lg flex gap-2 my-auto "><span className="my-auto">Start Risk Assessment</span></button>
}

const RiskAssessmentPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data: risk, isLoading, status } = trpc.useQuery(['risks.getRisk', { riskId: id as string }]);

    const { navigateTo } = useControlNavigation();
    if (isLoading) {
        return <ActionsLayout><div>Loading...</div></ActionsLayout>
    }

    if (status == "error" || !risk) {
        return <ActionsLayout><div>Error...</div></ActionsLayout>
    }



    return (
        <ActionsLayout>
            <ActionsLayoutHeader>
                <div className="flex flex-col ">
                    <span className="text-sm">Risk Assessment</span>
                    <h1 className="text-2xl">
                        {risk?.id} - <span className="font-bold"> Assessment #1</span>
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
                <div className="grid grid-cols-2 gap-5">
                    <div className="p-5 bg-white">
                        <h1 className="text-xl font-bold">
                            Mitigating controls
                        </h1>
                        <ul className="grid gap-4 mt-2 max-h-[60vh] overflow-y-auto">
                            {risk.RiskControl.map(rc => (
                                <li className="bg-gray-50 p-4 cursor-pointer hover:bg-gray-100" onClick={() => navigateTo(rc.control_id)} >
                                    <h1 className="font-semibold">{rc.control.id}</h1>
                                    <h2>
                                        {rc.control.name}
                                    </h2>
                                    <div className="flex gap-2">
                                        <div className="bg-green-300 px-2 py-1 rounded-lg">Design: Effective</div>
                                        <div className="bg-green-300 px-2 py-1 rounded-lg">Adequacy: Effective</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-5 bg-white">
                        <details open className=" pb-5">
                            <summary className="text-2xl font-bold">General</summary>
                            <div className="flex flex-col gap-2 justify-between pt-4">
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">Risk ID</span>
                                    <span>{risk.id}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">Description</span>
                                    <span className=" whitespace-pre-wrap">{risk.description}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">Owner</span>
                                    <span>{`Nour Sofanati`}</span>
                                </div>
                            </div>
                        </details>
                        <details className=" border-t-2 pb-5">
                            <summary className="text-2xl font-bold ">Reassessment Triggers</summary>
                            <div className="flex justify-around  pt-4">
                                <div className="flex flex-col gap-1 items-center">
                                    <span className="font-bold">Associated Losses</span>
                                    <span className="bg-green-700 text-white rounded-full px-4 pb-1 max-w-fit">{0}</span>
                                </div>
                                <div className="flex flex-col gap-1 items-center">
                                    <span className="font-bold">Open Issues</span>
                                    <span className="bg-green-700 text-white rounded-full px-4 pb-1 max-w-fit">{0}</span>
                                </div>
                                <div className="flex flex-col gap-1 items-center">
                                    <span className="font-bold">Indicators in breach</span>
                                    <span className="bg-green-700 text-white rounded-full px-4 pb-1 max-w-fit">{0}</span>
                                </div>
                            </div>
                        </details>
                        <details open className=" border-t-2 pb-5">
                            <summary className="text-2xl font-bold ">Inherent Risk Assessment</summary>
                            <div className="flex justify-around pt-4">
                                <div className="flex flex-col gap-1 items-center">
                                    <span className="font-bold">Inherent Impact</span>
                                    <span className="bg-green-700 text-white rounded-full px-4 pb-1 max-w-fit">{`Low`}</span>
                                </div>
                                <div className="flex flex-col gap-1 items-center">
                                    <span className="font-bold">Likelihood Impact</span>
                                    <span className="bg-green-700 text-white rounded-full px-4 pb-1 max-w-fit">{`Low`}</span>
                                </div>
                                <div className="flex flex-col gap-1 items-center">
                                    <span className="font-bold">Inherent Risk Rating</span>
                                    <span className="bg-green-700 text-white rounded-full px-4 pb-1 max-w-fit">{`Low`}</span>
                                </div>
                            </div>
                        </details>
                        <div className="border-t-2 pb-5">
                            <h1 className="text-2xl font-bold mb-2">Residual Risk Assessment</h1>
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-col gap-1 w-fit">
                                    <span className="font-bold">Impact</span>
                                    <select name="effectiveness" id="" className="border-gray-400 border-b-green-800 min-w-[250px] border-1 border-b-4 ">
                                        <option className="text-gray-500 font-bold" value="" selected>Select a value --</option>
                                        <option className="text-green-500 font-bold" value="1">1. Very low</option>
                                        <option className="text-green-400 font-bold" value="2">2. Low</option>
                                        <option className="text-yellow-500 font-bold" value="3">3. Medium</option>
                                        <option className="text-orange-500 font-bold" value="4">4. High</option>
                                        <option className="text-red-500 font-bold" value="5">5. Very High</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1 w-fit">
                                    <span className="font-bold">Likelihood</span>
                                    <select name="effectiveness" id="" className="border-gray-400 border-b-green-800 min-w-[250px] border-1 border-b-4 ">
                                        <option className="text-gray-500 font-bold" value="" selected>Select a value --</option>
                                        <option className="text-green-500 font-bold" value="1">1. Very low</option>
                                        <option className="text-green-400 font-bold" value="2">2. Low</option>
                                        <option className="text-yellow-500 font-bold" value="3">3. Medium</option>
                                        <option className="text-orange-500 font-bold" value="4">4. High</option>
                                        <option className="text-red-500 font-bold" value="5">5. Very High</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ActionsLayoutSide>
                    <div className="card py-3 px-5 flex flex-col gap-2">
                        <div className="grid grid-cols-3">
                            <h3 className="font-semibold">
                                Job
                            </h3>
                            <p className=" col-span-2">Risk Assessment Job #1</p>
                        </div>
                    </div>
                    <div className="bg-white border-teal-600 border-2 border-l-8 py-3 px-5">
                        <h2 className="font-bold mb-2">Risk Assessment Guidance</h2>
                        <p className="mb-1">The following guidance should be considered when assessing the risk:</p>
                        <ul className="ml-5 list-disc">
                            <li className=" list-item">The risk should be assessed in the context of the organisation’s risk appetite and tolerance;</li>
                        </ul>
                    </div>
                    <details className="bg-white border-teal-700 border-2 border-l-8 p-3" open>
                        <summary className="font-bold mb-2">Impact Guidance</summary>
                        <p className="mb-1">When Estimating impact, the following should be considered</p>
                        <ul className="ml-5">
                            <li className=" list-decimal">The expected level of disruption to business operations or applications;</li>
                            <li className=" list-decimal">The potential for negative media coverage or reputational damage;</li>
                            <li className=" list-decimal">The potential for loss of customer confidence or loss of customers; and</li>
                            <li className=" list-decimal">The degree of loss or sanctions that may be imposed by regulators.</li>
                        </ul>
                    </details>
                    <details className="bg-white border-teal-700 border-2 border-l-8 p-3" open>
                        <summary className="font-bold mb-2">Probablity Guidance</summary>
                        <p className="mb-1">Estimating the Probablity can be facilitated by considering, for example:</p>
                        <ul className="ml-5 list-disc">
                            <li className=" list-item">The frequency of the process (if the process is completed more frequently, it may increase the probability of an event/risk occuring); and</li>
                            <li className=" list-item">The frequency of past events (i.e if the risk has occured twice in the last month, it may increase the probability of a repeat occurrance)</li>
                        </ul>
                    </details>
                </ActionsLayoutSide>
            </ActionsLayoutMain>
        </ActionsLayout>
    );
}

export default RiskAssessmentPage
