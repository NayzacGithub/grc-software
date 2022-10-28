// import Link from "next/link";
// import { useRouter } from "next/router";
import { Bars3Icon, BellIcon, Cog6ToothIcon, QuestionMarkCircleIcon, UserIcon } from "@heroicons/react/24/outline";
import React, { useMemo, useState } from "react";
import { trpc } from "../utils/trpc";
import Tabs from "./Tabs";
import { debounce, cloneDeep } from "lodash";
import Link from "next/link";



const Searchbox = () => {
    const [query, setQuery] = useState<string | undefined>();
    const { data } = trpc.useQuery(['search.q', { query: query as string }], { enabled: query !== undefined && query.length > 0 });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // debounce the input
        if (e.target.value.length > 0) {
            setQuery(e.target.value);
        } else {
            setQuery(undefined);
        }
    }

    useMemo(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="relative">
            <input type="text" placeholder="Search" className="w-[500px] text-black" onChange={debounce(handleInputChange, 300)} />
            {data && query && query.length > 0 && <div className="absolute bg-white border-2 shadow-lg rounded-lg  top-12 left-0 right-0 p-2 text-black grid gap-5">
                {data.functions.length > 0 &&
                    <div>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <h2 className="text-lg font-semibold text-gray-500">
                                    Functions
                                </h2>
                                <div className="my-auto">
                                    <div className="bg-gray-100 text-gray-400 border border-gray-300 px-2 rounded-full text-xs font-bold">{data.functions.length}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border-b pb-5">
                            {cloneDeep(data.functions).splice(0, 3).map((f) => {
                                return <Searchbox.Result query={query} key={f.id} id={f.id} name={f.name} type="functions" />
                            })}
                        </div>
                    </div>}
                {data.risks.length > 0 &&
                    <div>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <h2 className="text-lg font-semibold text-gray-500">
                                    Risks
                                </h2>
                                <div className="my-auto">
                                    <div className="bg-gray-100 text-gray-400 border border-gray-300 px-2 rounded-full text-xs font-bold">{data.risks.length}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border-b pb-5">
                            {cloneDeep(data.risks).splice(0, 5).map((f) => {
                                return <Searchbox.Result query={query} key={f.id} id={f.id} name={f.name} type="risks" />
                            })}
                        </div>
                    </div>}
                {data.controls.length > 0 &&
                    <div>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <h2 className="text-lg font-semibold text-gray-500">
                                    Controls
                                </h2>
                                <div className="my-auto">
                                    <div className="bg-gray-100 text-gray-400 border border-gray-300 px-2 rounded-full text-xs font-bold">{data.controls.length}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border-b pb-5">
                            {cloneDeep(data.controls).splice(0, 5).map((f) => {
                                return <Searchbox.Result query={query} key={f.id} id={f.id} name={f.name} type="controls" />
                            })}
                        </div>
                    </div>}
            </div>}

        </div >
    )
}

interface SearchboxResultProps {
    id: string,
    name: string,
    query: string,
    type: "functions" | "risks" | "controls"
}
Searchbox.Result = ({ id, name, query, type }: SearchboxResultProps) => {
    const indexOfQueryInName = name.toLowerCase().indexOf(query.toLowerCase());
    const indexOfQueryInID = id.toLowerCase().indexOf(query.toLowerCase());
    return (
        <Link href={`/${type}/${id}`} target="_blank">
            <a className="py-2 rounded-xl hover:bg-slate-100 " target="_blank">
                <div className="text-gray-800 text-lg font-mono font-semibold relative">
                    {id}
                    {indexOfQueryInID > -1 && <div className="bg-indigo-500/20 absolute top-0 bottom-0 h-[1.5rem]" style={{ width: `${query.length}ch`, left: `${indexOfQueryInID}ch` }} />}
                </div>
                <div className="text-gray-500 relative font-mono">
                    {name}
                    {indexOfQueryInName > -1 && <div className="bg-indigo-500/20 absolute top-0 bottom-0 h-[1.5rem]" style={{ width: `${query.length}ch`, left: `${indexOfQueryInName}ch` }} />}
                </div>
            </a>
        </Link>
    )
}


const Header: React.FunctionComponent = () => {

    return <div className=" sticky top-0 z-20" data-id="layout-navigation">
        <header className="w-full bg-[#161616] text-white  px-4 ">
            <div className="flex justify-between gap-4">
                <div id="logo" className="my-auto">
                    <Bars3Icon className="w-6 h-6" />
                </div>
                <div className="my-auto flex flex-grow justify-between py-3">
                    <section>
                        <p>
                            Pi-Comply - <span className="font-bold">Governance, Risk and Compliance</span>
                        </p>
                    </section>
                    <Searchbox />

                    <nav className="flex gap-5">
                        <BellIcon className="w-6 h-6" />
                        <Cog6ToothIcon className="w-6 h-6" />
                        <UserIcon className="w-6 h-6" />
                        <QuestionMarkCircleIcon className="w-6 h-6" />
                    </nav>
                </div>
            </div>
        </header>
        <Tabs />
    </div>
}

export default Header;