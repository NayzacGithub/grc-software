import { NextPage } from "next";
import { trpc } from "../../utils/trpc";
import Head from "next/head";
import { useRouter } from "next/router";
import ActionsLayout, {ActionsLayoutHeader, ActionsLayoutMain, ActionsLayoutSection, ActionsLayoutSide} from "../../components/ActionsLayout";
import Link from "next/link";
import { useRiskNavigation } from "../../utils/navHook";

const RisksIndex: NextPage = () => {
    const router = useRouter();
    const { functionId } = router.query;
    const { data } = trpc.useQuery(["risks.getAll", {
        functionId: functionId as string
    }]);
    const { navigateTo } = useRiskNavigation();
    return (
        <ActionsLayout>
            <Head>
                <title>Risks Catalog | Pi-Comply</title>
            </Head>
            <ActionsLayoutHeader>
                <h1 className="text-2xl font-bold text-gray-700 my-auto">Risks Catalog</h1>
                <Link href={`/risks/create`} className={"my-auto"}>
                    <a className="bg-blue-500 text-white px-4 py-2 rounded-lg my-auto">Create Risk</a>
                </Link>
            </ActionsLayoutHeader>
            <ActionsLayoutMain>
                <ActionsLayoutSection>
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
                                    <tr className="hover:bg-gray-100 cursor-pointer" key={row.id} onClick={() => navigateTo(row.id)}>
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
                </ActionsLayoutSection>
                <ActionsLayoutSide>
                    <div className="bg-white rounded-md p-4 min-w-full shadow-xl sticky top-10 w-[250px]">
                        <input type="text" className="border-gray-300 rounded-lg w-full" placeholder="Search risks" />
                    </div>
                </ActionsLayoutSide>
            </ActionsLayoutMain>
        </ActionsLayout>
    )
}

export default RisksIndex;