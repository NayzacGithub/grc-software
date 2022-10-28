import { NextPage } from "next";
import Layout from "../../components/Layout";
import { trpc } from "../../utils/trpc";
import Head from "next/head";
import { useState } from "react";


type Columns = {
    functions: boolean
    risks: boolean
    controls: boolean
    raci: boolean
    assertions: boolean
}

const RCMIndex: NextPage = () => {
    const { data: functionRisk } = trpc.useQuery(["rcm.getAll"]);

    const [columns, setColumns] = useState<Columns>({ functions: true, risks: true, controls: true, raci: true, assertions: true });
    const handleColumnToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColumns({ ...columns, [e.target.name]: e.target.checked });

    }
    return (
        <Layout>
            <Head>
                <title>RCM | Pi-Comply</title>
            </Head>
            <div className="py-2 px-3 flex grow gap-3  ">
                <div className="bg-white rounded-2xl border flex flex-col gap-2 py-2  min-w-[300px]">
                    <details open>
                        <summary className="text-lg font-semibold text-gray-700 px-3">Columns</summary>
                        <div className="flex flex-col gap-2 px-3">
                            <div className="flex gap-2">
                                <input type="checkbox" className="rounded-sm" name="functions" checked={columns.functions} onChange={handleColumnToggle} />
                                <span className="text-gray-700">Functions</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="rounded-sm" name="risks" checked={columns.risks} onChange={handleColumnToggle} />
                                <span className="text-gray-700">Risks</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="rounded-sm" name="controls" checked={columns.controls} onChange={handleColumnToggle}/>
                                <span className="text-gray-700">Controls</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="rounded-sm" name="raci" checked={columns.raci} onChange={handleColumnToggle}/>
                                <span className="text-gray-700">RACI</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="rounded-sm" name="assertions" checked={columns.assertions} onChange={handleColumnToggle}/>
                                <span className="text-gray-700">Assertions</span>
                            </div>
                        </div>
                    </details>
                    <h1 className="font-semibold px-2">
                        Filter Risks By
                    </h1>
                    <div className="px-2">

                        <div className="rounded-full border px-2 text-gray-500 py-1 min-w-full ">
                            🔍 Search
                        </div>
                    </div>
                    <details open>
                        <summary className="hover:bg-gray-200 px-4 transition-colors cursor-pointer select-none">System Defined
                            Filters
                        </summary>
                    </details>
                </div>
                <div className="rounded-xl overflow-clip w-full">
                    <div className=" bg-white overflow-x-scroll h-full">
                        <table className="min-w-max w-full bg-white max-h-[535px] h-[535px] block">
                            <thead className="  bg-white text-white">
                                <tr>
                                    {columns.functions && <th className="font-normal bg-[#7f8faf] border-b-2 px-2 py-2 text-left" colSpan={3} >Functions</th>}
                                    {columns.risks && <th className="font-normal bg-[#002060] border-b-2 px-2 py-1 text-left border-l" colSpan={3}>Risks</th>}
                                    {columns.controls && <th className="font-normal bg-[#0070c0] border-b-2 px-2 py-1 text-left border-l" colSpan={3}>Controls</th>}
                                    {columns.raci && <th className="font-normal bg-[#548135] border-b-2 px-2 py-1 text-left border-l" colSpan={4}>RACI Model</th>}
                                    {columns.assertions && <th className="font-normal bg-[#add8e6] text-black border-b-2 px-2 py-1 text-left border-l" colSpan={8}>Assertions</th>}
                                </tr>
                                <tr>
                                    {columns.functions && <><th className="font-normal border-b-2  px-2 py-2 text-left sticky top-0  z-10 bg-[#7f8faf]">Function ID</th>
                                        <th className="font-normal bg-[#7f8faf] border-b-2 border-l px-2 py-2 text-left sticky top-0 ">Function Name</th>
                                        <th className="font-normal bg-[#7f8faf] border-b-2 border-l px-2 py-2 text-left sticky top-0 ">Function Description</th>
                                    </>
                                    }
                                    {columns.risks && <><th className="font-normal bg-[#002060] border-b-2 border-l px-2 py-2 text-left sticky top-0 ">Risk ID</th>
                                        <th className="font-normal bg-[#002060] border-b-2 border-l px-2 py-2 text-left sticky top-0 ">Risk Name</th>
                                        <th className="font-normal bg-[#002060] border-b-2 border-l px-2 py-2 text-left sticky top-0 ">Risk Description</th>
                                    </>}
                                    {columns.controls && <><th className="font-normal bg-[#0070c0] border-b-2 border-l px-2 py-2 text-left sticky top-0">Control ID</th>
                                        <th className="font-normal bg-[#0070c0] border-b-2 border-l px-2 py-2 text-left sticky top-0">Control Name</th>
                                        <th className="font-normal bg-[#0070c0] border-b-2 border-l px-2 py-2 text-left sticky top-0">Control Description</th>
                                    </>}
                                    {columns.raci && <><th className="font-normal bg-[#548135] border-b-2 border-l px-2 py-2 text-left sticky top-0 ">Responsability</th>
                                        <th className="font-normal bg-[#548135] border-b-2 border-l px-2 py-2 text-left sticky top-0 ">Accountability</th>
                                        <th className="font-normal bg-[#548135] border-b-2 border-l px-2 py-2 text-left sticky top-0 ">Consulted</th>
                                        <th className="font-normal bg-[#548135] border-b-2 border-l px-2 py-2 text-left sticky top-0 ">Informed</th></>
                                    }
                                    {columns.assertions && <><th className="font-normal bg-[#add8e6] text-black border-b-2 border-l px-2 py-2 text-left sticky top-0 ">Name</th>
                                        <th className="font-normal bg-[#add8e6] text-black border-b-2 border-l px-2 py-2 sticky top-0 "><b>C</b><br />Completeness</th>
                                        <th className="font-normal bg-[#add8e6] text-black border-b-2 border-l px-2 py-2 sticky top-0 "><b>E</b><br />Existence</th>
                                        <th className="font-normal bg-[#add8e6] text-black border-b-2 border-l px-2 py-2 sticky top-0 "><b>A</b><br />Accuracy</th>
                                        <th className="font-normal bg-[#add8e6] text-black border-b-2 border-l px-2 py-2 sticky top-0 "><b>V</b><br />Valuation</th>
                                        <th className="font-normal bg-[#add8e6] text-black border-b-2 border-l px-2 py-2 sticky top-0 "><b>O</b><br />Obligation</th>
                                        <th className="font-normal bg-[#add8e6] text-black border-b-2 border-l px-2 py-2 sticky top-0 "><b>P</b><br />Presentation</th>
                                        <th className="font-normal bg-[#add8e6] text-black border-b-2 border-l px-2 py-2 text-left sticky top-0 ">Account Type</th>
                                    </>}
                                </tr>
                            </thead>
                            <tbody className="max-h-[535px] h-[535px]">
                                {
                                    functionRisk && functionRisk.map(_fr => {
                                        return _fr.risk.RiskControl.map(_rc => {
                                            return _rc.control.ControlRACI.map(_cr => {
                                                return <tr key={`${_fr.function_id}-${_fr.risk_id}-${_rc.control_id}-${_cr.id}`} className={'hover:bg-gray-50'}>
                                                    {columns.functions && <><th className=" border-y py-1 border-x px-2 bg-[#7f8faf]/5">{_fr.function.id}</th>
                                                        <td className=" border-y py-1 border-x px-2">{_fr.function.name}</td>
                                                        <td className=" border-y py-1 border-x px-2">{_fr.function.description?.slice(0, 50)}</td></>}
                                                    {columns.risks && <><th className=" border-y py-1 border-x px-2 bg-[#002060]/5">{_fr.risk.id}</th>
                                                        <td className=" border-y py-1 border-x px-2">{_fr.risk.name.slice(0, 50)}</td>
                                                        <td className=" border-y py-1 border-x px-2">{_fr.risk.description?.slice(0, 50)}</td></>}
                                                    {columns.controls && <><th className=" border-y py-1 border-x px-2 bg-[#0070c0]/5">{_rc.control_id}</th>
                                                        <td className=" border-y py-1 border-x px-2">{_rc.control.name.slice(0, 50)}</td>
                                                        <td className=" border-y py-1 border-x px-2">{_rc.control.description?.slice(0, 50)}</td></>}
                                                    {columns.raci && <><td className=" border-y py-1 border-x px-2 capitalize font-semibold bg-[#548135]/5">{_cr.responsability}</td>
                                                        <td className=" border-y py-1 border-x px-2 capitalize font-semibold bg-[#548135]/5">{_cr.accountability}</td>
                                                        <td className=" border-y py-1 border-x px-2 capitalize font-semibold bg-[#548135]/5">{_cr.consulted}</td>
                                                        <td className=" border-y py-1 border-x px-2 capitalize font-semibold bg-[#548135]/5">{_cr.informed}</td></>}
                                                    {columns.assertions && <><td className=" border-y py-1 border-x px-2 capitalize font-semibold">{_rc.control.Assertion[0] && _rc.control.Assertion[0]?.name}</td>
                                                        <td className=" border-y py-1 border-x px-2 capitalize font-semibold">{_rc.control.Assertion[0] && _rc.control.Assertion[0].name.length > 0 && (_rc.control.Assertion[0]?.completeness ? 'Y' : 'N')}</td>
                                                        <td className=" border-y py-1 border-x px-2 capitalize font-semibold">{_rc.control.Assertion[0] && _rc.control.Assertion[0].name.length > 0 && (_rc.control.Assertion[0]?.existence ? 'Y' : 'N')}</td>
                                                        <td className=" border-y py-1 border-x px-2 capitalize font-semibold">{_rc.control.Assertion[0] && _rc.control.Assertion[0].name.length > 0 && (_rc.control.Assertion[0]?.accuracy ? 'Y' : 'N')}</td>
                                                        <td className=" border-y py-1 border-x px-2 capitalize font-semibold">{_rc.control.Assertion[0] && _rc.control.Assertion[0].name.length > 0 && (_rc.control.Assertion[0]?.valuation ? 'Y' : 'N')}</td>
                                                        <td className=" border-y py-1 border-x px-2 capitalize font-semibold">{_rc.control.Assertion[0] && _rc.control.Assertion[0].name.length > 0 && (_rc.control.Assertion[0]?.obligation ? 'Y' : 'N')}</td>
                                                        <td className=" border-y py-1 border-x px-2 capitalize font-semibold">{_rc.control.Assertion[0] && _rc.control.Assertion[0].name.length > 0 && (_rc.control.Assertion[0]?.presentation ? 'Y' : 'N')}</td>
                                                        <td className=" border-y py-1 border-x px-2 capitalize font-semibold">{_rc.control.Assertion[0] && _rc.control.Assertion[0]?.account_type.split('_').join(' ')}</td></>}
                                                </tr>
                                            })
                                        });
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default RCMIndex;