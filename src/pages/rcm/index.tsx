import { NextPage } from "next";
import Layout from "../../components/Layout";
import { trpc } from "../../utils/trpc";
import Head from "next/head";

const RCMIndex: NextPage = () => {
    const { data } = trpc.useQuery(["rcm.getAll"]);
    return (
        <Layout>
            <Head>
                <title>RCM | Pi-Comply</title>
            </Head>
            <div className="py-2 px-3 flex grow gap-3  ">
                <div className="bg-white rounded-2xl border flex flex-col gap-2 py-2  min-w-[250px]">
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
                        {/* <ul className="px-2">
                            <li className="flex gap-2 px-2 py-0.5 cursor-pointer"><span><label><input type="checkbox" name=""
                                id=""><span>Function</span></label></span></li>
                            <li className="flex gap-2 px-2 py-0.5 cursor-pointer"><span><label><input type="checkbox" name=""
                                id=""><span>Function Description</span></label></span></li>
                            <li className="flex gap-2 px-2 py-0.5 cursor-pointer"><span><label><input type="checkbox" name=""
                                id=""><span>Risk ID</span></label></span></li>
                            <li className="flex gap-2 px-2 py-0.5 cursor-pointer"><span><label><input type="checkbox" name=""
                                id=""><span>Risk Description</span></label></span></li>
                        </ul> */}
                    </details>
                </div>
                <div className="rounded-xl overflow-clip w-full">
                    <div className=" bg-white overflow-x-scroll max-h-[90vh]">
                        <table className="min-w-max w-full bg-white">
                            <thead className="  bg-white ">
                                <tr>
                                    <th className="font-normal bg-gray-50 border-b-2 px-2 py-2 text-left sticky top-0 left-0 z-10 " colSpan={1} >Processes</th>
                                    <th className="font-normal bg-white border-b-2 px-2 py-1 text-left border-l sticky top-0" colSpan={2}>Risks</th>
                                    <th className="font-normal bg-white border-b-2 px-2 py-1 text-left border-l sticky top-0" colSpan={2}>Controls</th>
                                </tr>
                                <tr className="">
                                    <th className="font-normal border-b-2  px-2 py-2 text-left sticky top-0 left-0 z-10 bg-gray-50">Process ID</th>
                                    <th className="font-normal bg-white border-b-2 border-l px-2 py-2 text-left sticky top-0">Process Description</th>
                                    <th className="font-normal bg-white border-b-2 border-l px-2 py-2 text-left sticky top-0">Risk ID</th>
                                    <th className="font-normal bg-white border-b-2 border-l px-2 py-2 text-left sticky top-0">Risk Description</th>
                                    <th className="font-normal bg-white border-b-2 border-l px-2 py-2 text-left sticky top-0">Control ID</th>
                                    <th className="font-normal bg-white border-b-2 border-l px-2 py-2 text-left sticky top-0">Control Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map(process => {
                                    return process.risks.map(risk => {
                                        return risk.controls.map(control => {
                                            return (
                                                <tr className="hover:bg-gray-100 cursor-pointer" key={`${process.id}-${risk.id}-${control.id}`}>
                                                    <th className="border-b max-h-10 truncate py-1 px-2 sticky left-0 bg-gray-50 border-r"><span>{process.id}</span></th>
                                                    <td className="border-b max-h-10 truncate py-1 px-2"><span>
                                                        {process.description && process.description.length > 80 ? <span>{process.description.slice(0, 60)}... <span className="text-blue-500">Read more</span></span>
                                                            : process.description}
                                                    </span>
                                                    </td>

                                                    <td className="border-b max-h-10 truncate py-1 px-2"><span>{risk.id}</span></td>
                                                    <td className="border-b max-h-10 truncate py-1 px-2"><span>
                                                        {risk.description && risk.description.length > 80 ? <span>{risk.description.slice(0, 60)}... <span className="text-blue-500">Read more</span></span>
                                                            : risk.description}
                                                    </span>
                                                    </td>
                                                    <td className="border-b max-h-10 truncate py-1 px-2"><span>{control.id}</span></td>
                                                    <td className="border-b max-h-10 truncate py-1 px-2"><span>
                                                        {control.description && control.description.length > 80 ? <span>{control.description.slice(0, 60)}... <span className="text-blue-500">Read more</span></span>
                                                            : control.description}
                                                    </span>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    })
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default RCMIndex;