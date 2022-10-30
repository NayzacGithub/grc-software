import { NextPage } from "next";
import { trpc } from "../../utils/trpc";
import ActionsLayout, { ActionsLayoutMain } from "../../components/ActionsLayout";
import { Assertion, Control, ControlCoso, ControlRACI, FunctionRisk, Risk, RiskControl } from "@prisma/client";
import { MouseEvent, useState } from "react";
import clsx from "clsx";

interface RCMAttributeProps {
    title: string,
    value: string,
    rating?: boolean
}

const RCMAttribute: React.FunctionComponent<RCMAttributeProps> = ({ title, value }: RCMAttributeProps) => {
    return (
        <p>
            <span className="text-neutral-500">{title}: </span>
            <span>{value}</span>
        </p>
    )
}

type ControlType = Control & {
    Assertion: Assertion[];
    ControlRACI: ControlRACI[];
};

type RCM = Risk & {
    FunctionRisk: (FunctionRisk & {
        function: {
            id: string;
            name: string;
            description: string | null;
        };
    })[];
    RiskControl: (RiskControl & {
        control: Control & {
            Assertion: Assertion[];
            ControlRACI: ControlRACI[];
            ControlCoso: (ControlCoso)[];
        };
    })[];
}

const RCMIndex: NextPage = () => {
    const { data: risks } = trpc.useQuery(["rcm.betaAll"]);
    const [selectedRCM, setSelectedRCM] = useState<RCM | undefined>(undefined);
    const [selectedControl, setSelectedControl] = useState<ControlType | undefined>(undefined);
    const handleSelectRCM = (_: MouseEvent<HTMLDivElement>, rcm: RCM) => {
        setSelectedControl(undefined);
        setSelectedRCM(rcm);
    }

    const handleSelectControl = (_: MouseEvent<HTMLDivElement>, control: ControlType) => {
        setSelectedControl(control);
    }


    return (
        <ActionsLayout>
            <ActionsLayoutMain>
                <div className="grid grid-cols-3 gap-3">
                    <section className="bg-white rounded-lg shadow-lg p-5 h-[80vh] overflow-y-scroll">
                        <div className={"flex flex-col gap-2"}>
                            {
                                risks && risks.map((r) => {
                                    return (
                                        <div className={clsx(`py-1 px-2 border-b hover:bg-indigo-50 cursor-pointer rounded-xl`, selectedRCM?.id == r.id && `bg-indigo-100 ring-2 ring-indigo-200 z-10`)} key={r.id} onClick={_ => handleSelectRCM(_, r)}>
                                            <h3 className="text-2xl font-semibold">
                                                {r.name}
                                            </h3>
                                            <div className="flex text-sm gap-4">
                                                <RCMAttribute title="Risk ID" value={r.id} />
                                                <div className="border-r"></div>
                                                <RCMAttribute title="Inherent Rating" value={'High'} />
                                                <div className="border-r"></div>
                                                <RCMAttribute title="Residual Rating" value={'High'} rating={true} />
                                            </div>
                                            <div className="flex text-sm gap-4">
                                                <RCMAttribute title="Control count" value={r.RiskControl.length.toString()} />
                                                <div className="border-r"></div>
                                                <RCMAttribute title="Function" value={r.FunctionRisk[0]?.function_id.toString() as string} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                    {selectedRCM !== undefined ? <article className="bg-white rounded-lg shadow-lg p-5 min-w-full flex flex-col gap-2 sticky top-0 h-[80vh]">
                        <header className="pb-2 border-b border-dashed">
                            <h1 className="text-xl font-bold text-neutral-900">{selectedRCM.name}</h1>
                            <details>
                                <summary
                                    className=" font-semibold text-neutral-600 font-mono">{selectedRCM.id}
                                </summary>
                                <p className="text-sm text-neutral-500 whitespace-pre-wrap">{selectedRCM.description}</p>
                            </details>
                        </header>
                        <section id="rating" className="pb-2 border-b border-dashed">
                            <h1 className="text-xl font-bold text-neutral-900">Risk rating:</h1>
                            <table className=" table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="border"></th>
                                        <th className="border">Impact</th>
                                        <th className="border">Frequency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="border">Inherent</th>
                                        <td className="py-2 text-center border"><span className="text-center text-sm bg-orange-500 text-white font-bold px-2 rounded-full py-1">High</span></td>
                                        <td className="py-2 text-center border"><span className="text-center text-sm bg-orange-500 text-white font-bold px-2 rounded-full py-1">High</span></td>
                                    </tr>
                                    <tr>
                                        <th className="border">Residual</th>
                                        <td className="py-2 text-center border"><span className="text-center text-sm bg-orange-500 text-white font-bold px-2 rounded-full py-1">High</span></td>
                                        <td className="py-2 text-center border"><span className="text-center text-sm bg-orange-500 text-white font-bold px-2 rounded-full py-1">High</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="mt-1">
                                <p className="text-sm text-neutral-500  mb-1">The last assessment was made in <span className="font-bold">Sep 24th, 2022</span> (1 month ago)</p>
                            </div>
                        </section>
                        <section id="controls" className="pb-2 border-dashed ">
                            <div className="flex justify-between">
                                <h1 className="text-xl font-bold text-neutral-900">Controls:</h1>
                                <span className="text-neutral-500 text-sm my-auto">
                                    {selectedRCM.RiskControl.length} controls
                                </span>
                            </div>
                            <div className="max-h-[260px] mt-1 overflow-y-auto">
                                <table className="w-full table-auto ">
                                    <thead className="relative">
                                        <tr className="sticky bg-white top-0">
                                            <th className="border py-2 px-2">Control ID</th>
                                            <th className="border py-2">Control Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            selectedRCM.RiskControl.map((rc) => (
                                                <tr key={`${rc.risk_id}-${rc.control_id}`} className={clsx('hover:bg-indigo-50 cursor-pointer', selectedControl?.id == rc.control_id && (`bg-indigo-50 font-bold `))} onClick={_ => handleSelectControl(_, rc.control)}>
                                                    <th className="border py-2 px-2 text-center max-w-fit">{rc.control_id}</th>
                                                    <td className="border py-2 px-2">{rc.control.name}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </section>
                        <section id="functions" className="pb-2 border-dashed">
                            <h1 className="text-xl font-bold text-neutral-900">Functions:</h1>
                            {
                                selectedRCM.FunctionRisk.map((fr) => (
                                    <>
                                        <p><span className="text-gray-400">ID: </span>{fr.function_id}</p>
                                        <p><span className="text-gray-400">Name: </span>{fr.function.name}</p>
                                        <p className="text-gray-700 text-sm whitespace-pre-wrap">{fr.function.description}</p>
                                    </>
                                ))
                            }
                        </section>

                    </article> : <article className="border-4 grid items-center content-center text-center font-bold text-gray-500 h-[80vh] rounded-lg">No Risk Selected</article>}

                    {selectedControl !== undefined ?
                        <article className="bg-white rounded-lg shadow-lg p-5 min-w-full flex flex-col gap-2 sticky top-0 h-[80vh]">
                            <header className="pb-2 border-b border-dashed">
                                <h1 className="text-xl font-bold text-neutral-900">{selectedControl.name}</h1>
                                <details>
                                    <summary className=" font-semibold text-neutral-600 font-mono">{selectedControl.id}</summary>
                                    <p className="text-sm text-neutral-500 whitespace-pre-wrap">{selectedControl.description}</p>
                                </details>
                            </header>
                            {
                                selectedControl.Assertion && selectedControl.Assertion.length > 0 && (

                                    <section id="assertions" className="pb-2">
                                        <div className="flex justify-between">
                                            <h1 className="text-xl font-bold text-neutral-900">Assertions:</h1>
                                            <span className="text-neutral-500 text-sm my-auto">
                                                Account type: <span className="font-bold">{selectedControl?.Assertion[0]?.account_type.split('_').join(' ')}</span>
                                            </span>
                                        </div>
                                        <div className="max-h-[260px] mt-1 overflow-y-auto">
                                            <table className="w-full">
                                                <thead>
                                                    <tr>
                                                        <th className="border border-b-4 py-2 bg-gray-50">Completeness</th>
                                                        <th className="border border-b-4 py-2 bg-gray-50">Existence</th>
                                                        <th className="border border-b-4 py-2 bg-gray-50">Accuracy</th>
                                                        <th className="border border-b-4 py-2 bg-gray-50">Valuation</th>
                                                        <th className="border border-b-4 py-2 bg-gray-50">Obligation</th>
                                                        <th className="border border-b-4 py-2 bg-gray-50">Presentation</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        selectedControl.Assertion.map((assertion) => (
                                                            <tr key={assertion.id}>
                                                                <td className="border py-1 text-center"><span className={clsx(assertion.completeness ? 'bg-green-500 text-white' : 'bg-red-500 text-white', 'text-white font-bold px-3 rounded-full pb-0.5')}>{assertion.completeness ? 'Yes' : 'No'}</span></td>
                                                                <td className="border py-1 text-center"><span className={clsx(assertion.existence ? 'bg-green-500 text-white' : 'bg-red-400', 'text-white font-bold px-3 rounded-full pb-0.5')}>{assertion.existence ? 'Yes' : 'No'}</span></td>
                                                                <td className="border py-1 text-center"><span className={clsx(assertion.accuracy ? 'bg-green-500 text-white' : 'bg-red-400', 'text-white font-bold px-3 rounded-full pb-0.5')}>{assertion.accuracy ? 'Yes' : 'No'}</span></td>
                                                                <td className="border py-1 text-center"><span className={clsx(assertion.valuation ? 'bg-green-500 text-white' : 'bg-red-400', 'text-white font-bold px-3 rounded-full pb-0.5')}>{assertion.valuation ? 'Yes' : 'No'}</span></td>
                                                                <td className="border py-1 text-center"><span className={clsx(assertion.obligation ? 'bg-green-500 text-white' : 'bg-red-400', 'text-white font-bold px-3 rounded-full pb-0.5')}>{assertion.obligation ? 'Yes' : 'No'}</span></td>
                                                                <td className="border py-1 text-center"><span className={clsx(assertion.presentation ? 'bg-green-500 text-white' : 'bg-red-400', 'text-white font-bold px-3 rounded-full pb-0.5')}>{assertion.presentation ? 'Yes' : 'No'}</span></td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                )
                            }
                            {
                                selectedControl.ControlRACI && selectedControl.ControlRACI.length > 0 && (
                                    <>
                                        <h1 className="text-xl font-bold text-neutral-900">RACI Framework:</h1>
                                        <table className="w-full">
                                            <thead>
                                                <tr>
                                                    <th className="py-2 border border-b-4 bg-gray-100">Responsible</th>
                                                    <th className="py-2 border border-b-4 bg-gray-100">Accountable</th>
                                                    <th className="py-2 border border-b-4 bg-gray-100">Consulted</th>
                                                    <th className="py-2 border border-b-4 bg-gray-100">Informed</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    selectedControl.ControlRACI.map((raci) => (
                                                        <tr key={raci.id}>
                                                            <td className="text-center px-1 py-1 border">{raci.responsability}</td>
                                                            <td className="text-center px-1 py-1 border">{raci.accountability}</td>
                                                            <td className="text-center px-1 py-1 border">{raci.consulted}</td>
                                                            <td className="text-center px-1 py-1 border">{raci.informed}</td>
                                                        </tr>
                                                    ))

                                                }
                                            </tbody>
                                        </table>
                                    </>
                                )
                            }
                            {

                            }
                        </article>
                        :
                        <article className="border-4 grid items-center content-center text-center font-bold text-gray-500 h-[80vh] rounded-lg">No Control Selected</article>
                    }

                </div>
            </ActionsLayoutMain>
        </ActionsLayout>
    )
}

export default RCMIndex;