import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ActionsLayout, {ActionsLayoutHeader, ActionsLayoutMain, ActionsLayoutSection, ActionsLayoutSide} from "../../components/ActionsLayout";
import Link from "next/link";

const ActionButton = () => {
    return <button className="bg-blue-500 text-white  px-4 py-3  rounded-lg flex gap-2 my-auto "><span className="my-auto">Start Risk Assessment</span></button>
}

const RiskPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data: risk, isLoading, status } = trpc.useQuery(['risks.getRisk', { riskId: id as string }]);

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
                    <span className="text-sm">Risk</span>
                    <h1 className="text-2xl">
                        {risk?.id}
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
                <ActionButton />
            </ActionsLayoutHeader>
            <ActionsLayoutMain>
                <ActionsLayoutSection>
                    <div className="p-5">
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
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">Status</span>
                                    <span className="bg-red-500 text-white rounded-full px-2 pb-1 max-w-fit py-1">{`Awaiting Assessment`}</span>
                                </div>
                            </div>
                        </details>
                        <details open className=" border-t-2 pb-5">
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

                            <div className="grid py-4 gap-4">
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
                                <div>
                                    <h2 className="text-xl font-bold">Mitigating Controls</h2>
                                    <table className="bg-white w-full table-auto border mt-3">
                                        <thead>
                                            <tr>
                                                <th className="bg-[#dbdbdb]/30 border-x py-4">Control ID</th>
                                                <th className="bg-[#dbdbdb]/30 border-x py-4">Control Owner</th>
                                                <th className="bg-[#dbdbdb]/30 border-x py-4">Design Effectiveness</th>
                                                <th className="bg-[#dbdbdb]/30 border-x py-4">Operating Effectiveness</th>
                                                <th className="bg-[#dbdbdb]/30 border-x py-4">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {risk.RiskControl.length > 0 && risk.RiskControl.map((riskControl) => {
                                                return (
                                                    <Link href={`/controls/${riskControl.control_id}`} key={`${riskControl.risk_id}-${riskControl.control_id}`}>
                                                        <tr className="border-b border-gray-100 hover:bg-slate-100 cursor-pointer">
                                                            <td className="text-center py-5 border-x">{riskControl.control_id}</td>
                                                            <td className="text-center py-5 border-x">{`Nour Sofanati`}</td>
                                                            <td className="text-center py-5 border-x"><span className="bg-green-500 text-white px-4 rounded-full">Effective</span></td>
                                                            <td className="text-center py-5 border-x"><span className="bg-green-500 text-white px-4 rounded-full">Effective</span></td>
                                                            <td className="text-center py-5 border-x"><span className="bg-indigo-500 text-white px-4 rounded-full">Approved</span></td>
                                                        </tr>
                                                    </Link>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
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
                            <p className=" col-span-2">Inherent Risk Assessment (Inherent Assessment)</p>
                        </div>
                        <div className="grid grid-cols-3">
                            <h3 className="font-semibold">
                                Due Date
                            </h3>
                            <p className=" col-span-2">30/11/2022</p>
                        </div>
                    </div>
                    <div className="bg-white border-teal-600 border-2 py-3 px-5">
                        <h2 className="font-bold mb-2">Risk Assessment Guidance</h2>
                        <p className="mb-1">The following guidance should be considered when assessing the risk:</p>
                        <ul className="ml-5 list-disc">
                            <li className=" list-item">The risk should be assessed in the context of the organisation’s risk appetite and tolerance;</li>
                        </ul>
                    </div>
                </ActionsLayoutSide>
            </ActionsLayoutMain>
        </ActionsLayout>
    );
}

export default RiskPage
