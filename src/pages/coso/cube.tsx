import { NextPage } from "next";
import Layout from "../../components/Layout"
import { trpc } from "../../utils/trpc";

const CosoCube: NextPage = () => {
    const { data: components } = trpc.useQuery(['coso.getAll'])
    if (components?.length == 0) return <>loading...</>
    return <Layout>
        <div className="p-5">
            <div className=" shadow rounded">
                <section className="bg-white p-5 flex flex-col gap-4">
                    {components?.map((component) => {
                        return <details key={component.id}>
                            <summary className=" cursor-pointer text-xl">{component.id}</summary>
                            {
                                component.CosoPrinciples.map((principle) => {
                                    return <details className="pl-4" key={principle.id}>
                                        <summary className="cursor-pointer text-lg">{principle.id}</summary>
                                        <div className="pl-12">
                                            <ul className="list-decimal">
                                                {principle.CosoFocusPoints.map((focusPoint) => {
                                                    return <li className="list-item" key={focusPoint.id}>{focusPoint.id}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </details>
                                })
                            }
                        </details>
                    })}
                </section>
            </div>
        </div>
    </Layout>
};


export default CosoCube;