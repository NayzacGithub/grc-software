import { NextPage } from "next";
import Layout from "../../components/Layout";
import { trpc } from "../../utils/trpc";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

const ControlsIndex: NextPage = () => {
    const router = useRouter();
    const { riskId } = router.query;

    const { data } = trpc.useQuery(["controls.getAll", {
        riskId: riskId as string
    }]);
    return (
        <Layout>
            <Head>
                <title>Controls Catalog | Pi-Comply</title>
            </Head>
            <header className="bg-white py-3 px-8 shadow " data-id="header">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        {riskId && riskId.length && <button className="rounded border border-gray-300  px-4 py-0.5 bg-white"
                            style={{ boxShadow: "0 0 10px rgba(0,0,0,40%) inset" }}>{riskId} Controls</button>}
                        <Link href={'/controls'}><button className="rounded border border-gray-300  px-4 py-0.5" style={{ boxShadow: riskId == undefined || riskId?.length == 0 ? "0 0 10px rgba(0,0,0,40%) inset" : "" }}>All Controls</button></Link>
                    </div>
                </div>
            </header>
            <div className="py-2 px-3 flex gap-3 grow">
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
                                    <th className="font-normal bg-white border-b-2 px-2 py-1 text-left sticky top-0" >Process</th>
                                    <th className="font-normal bg-white border-b-2 px-2 py-1 text-left sticky top-0" >Risk</th>
                                    <th className="font-normal bg-white border-b-2 px-2 py-1 text-left border-l sticky top-0" colSpan={2}>Controls</th>
                                </tr>
                                <tr className="">
                                    <th className="font-normal bg-white border-b-2  px-2 py-2 text-left sticky top-0">Function ID</th>
                                    <th className="font-normal bg-white border-b-2  px-2 py-2 text-left sticky top-0">Risk ID</th>
                                    <th className="font-normal bg-white border-b-2 border-l px-2 py-2 text-left sticky top-0">Control ID</th>
                                    <th className="font-normal bg-white border-b-2 border-l px-2 py-2 text-left sticky top-0">Control Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map(row => {
                                    return (
                                        <tr className="hover:bg-gray-100 cursor-pointer" key={row.id}>
                                            <td className="border-b max-h-10 truncate py-1 px-2"><span>{row.risk?.processId}</span></td>
                                            <td className="border-b max-h-10 truncate py-1 px-2"><span>{row.risk?.id}</span></td>
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

        </Layout>
    )
}

export default ControlsIndex;