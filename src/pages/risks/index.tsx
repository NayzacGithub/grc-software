import { NextPage } from "next";
import Layout from "../../components/Layout";
import { trpc } from "../../utils/trpc";
import Head from "next/head";
import ShowRiskDialog from "../../components/modals/ShowRiskDialog";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useTabsStore from "../../utils/tabsHook";

const RisksIndex: NextPage = () => {
    const router = useRouter();
    const { functionId } = router.query;
    const { data } = trpc.useQuery(["risks.getAll", {
        functionId: functionId as string
    }]);
    const [selectedRiskId, setSelectedRiskId] = useState<string | undefined>();


    const addTab = useTabsStore(state => state.addTab);
    const setActiveTab = useTabsStore(state => state.setActiveTab);





    return (
        <Layout>
            <Head>
                <title>Risks Catalog | Pi-Comply</title>
            </Head>
            <header className="bg-white py-3 px-8 shadow " data-id="header">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        {functionId && functionId.length && <button className="rounded border border-gray-300  px-4 py-0.5 bg-white"
                            style={{ boxShadow: "0 0 10px rgba(0,0,0,40%) inset" }}> <span className="font-bold">{functionId}</span> Risks</button>}
                        <Link href={'/risks'}><button className="rounded border border-gray-300  px-4 py-0.5" style={{ boxShadow: functionId == undefined || functionId?.length == 0 ? "0 0 10px rgba(0,0,0,40%) inset" : "" }}>All Risks</button></Link>
                    </div>
                    <Link href={'/risks/create'} className=" self-end justify-self-end"><button className="self-end justify-self-end py-1 px-4 bg-green-500 text-white font-bold">Add Risk</button></Link>
                </div>
            </header>
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
                    </details>
                </div>
                <div className="rounded-xl overflow-clip w-full">
                    <div className=" bg-white overflow-x-scroll max-h-[90vh]">
                        <table className="min-w-max w-full bg-white">
                            <thead className="bg-white">
                                <tr>
                                    <th className="font-normal bg-white border-b-2 px-2 py-1 text-left sticky top-0" colSpan={2}>Functions</th>
                                    <th className="font-normal bg-white border-b-2 px-2 py-1 text-left border-l sticky top-0" colSpan={2}>Risks</th>
                                </tr>
                                <tr className="">
                                    <th className="font-normal bg-gray-50 border-b-2 px-2 py-2 text-left sticky top-0 left-0 z-10 ">Function ID</th>
                                    <th className="font-normal bg-white border-b-2 border-l px-2 py-2 text-left sticky top-0">Function</th>
                                    <th className="font-normal bg-white border-b-2 border-l px-2 py-2 text-left sticky top-0">Risk ID</th>
                                    <th className="font-normal bg-white border-b-2 border-l px-2 py-2 text-left sticky top-0">Risk Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map(row => {
                                    return (
                                        <tr className="hover:bg-gray-100 cursor-pointer" key={row.id}>
                                            <th className="border-b max-h-10 truncate py-1 px-2 sticky left-0 bg-gray-50 border-r-2"><span>{row.FunctionRisk[0]?.function_id}</span></th>
                                            <td className="border-b max-h-10 truncate py-1 px-2"><span>{row.FunctionRisk[0]?.function.name}</span></td>
                                            <td className="border-b max-h-10 truncate py-1 px-2"><span>{row.id}</span></td>
                                            <td className="border-b max-h-10 truncate py-1 px-2">
                                                <span>
                                                    {row.description && row.description.length > 80 ? <span>{row.description.slice(0, 80)}... <span className="text-blue-500">Read more</span></span>
                                                        : row.description}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {selectedRiskId && <ShowRiskDialog riskId={selectedRiskId} handleClose={() => setSelectedRiskId(undefined)} />}
        </Layout>
    )
}

export default RisksIndex;