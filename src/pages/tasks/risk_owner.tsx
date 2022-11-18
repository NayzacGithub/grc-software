import { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { OrganizationWelcome } from "../../components/OrganizationWelcome";
import { useRiskAssessmentNavigation, useRiskNavigation } from "../../utils/navHook";

const TasksPage: NextPage = () => {
    const { navigateTo } = useRiskAssessmentNavigation();
    return (
        <Layout>
            <main className="px-4 py-3">
                <OrganizationWelcome />
                <div className="grid grid-cols-3 gap-2">
                    <section className="border-2 bg-gray-50 w-full p-4">
                        <h1 className="text-2xl font-bold">
                            My Tasks:
                        </h1>
                        <ul className="grid gap-4 mt-2">
                            <a className="cursor-pointer " onClick={() => navigateTo("GBCWCGW001")}>
                                <li className="bg-white hover:bg-gray-100 p-2 border grid grid-cols-3">
                                    <div className="flex flex-col text-gray-700 col-span-2">
                                        <h2 className="font-bold text-xl">Risk Assessment - #1</h2>
                                        <h3 className="font-bold text">GBCWCGW001</h3>
                                        <p>Loan loss allowance estimate</p>
                                        <small className="text-yellow-800">Due in 14 hours</small>
                                    </div>
                                    <p className="text-yellow-500 font-bold text-center my-auto">Awaiting <br /> risk assessment</p>
                                </li>
                            </a>

                            <a className="cursor-pointer" onClick={() => navigateTo("GBCWCGW002")}>
                                <li className="bg-white hover:bg-gray-100 p-2 border grid grid-cols-3">
                                    <div className="flex flex-col text-gray-700 col-span-2">
                                        <h2 className="font-bold text-xl">Risk Assessment - #2</h2>
                                        <h3 className="font-bold text">GBCWCGW002</h3>
                                        <p>Allowance of loan losses and reserve for unfunded loan commitments disclosure</p>
                                        <small className="text-yellow-800">Due in 3 days and 2 hours</small>
                                    </div>
                                    <p className="text-yellow-500 font-bold text-center my-auto">Awaiting <br /> risk assessment</p>
                                </li>
                            </a>

                        </ul>
                    </section>
                    <section className="border-2 bg-gray-50 w-full p-4">
                        <h1 className="text-2xl font-bold">
                            Subscription Tasks:
                        </h1>
                        <p className="text-center font-bold text-gray-500 text-xl mt-12">No subscription tasks</p>

                    </section>
                    <section className="border-2 bg-gray-50 w-full p-4">
                        <h1 className="text-2xl font-bold">
                            Oversight Tasks:
                        </h1>
                        <p className="text-center font-bold text-gray-500 text-xl mt-12">No oversight tasks</p>
                    </section>

                </div>
            </main>
        </Layout>
    );
};

export default TasksPage;