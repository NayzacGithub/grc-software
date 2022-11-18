import { NextPage } from "next";
import Layout from "../../components/Layout";

const TasksPage: NextPage = () => {
    return (
        <Layout>
            <main className="px-4 py-1">
                <div className="grid grid-cols-3 gap-2">
                    <section></section>
                    <section></section>
                    <section></section>
                </div>
            </main>
        </Layout>
    );
};

export default TasksPage;