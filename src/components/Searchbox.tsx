import Link from "next/link";
import React, { useEffect, useState } from "react";
import { debounce, cloneDeep } from "lodash";
import { trpc } from "../utils/trpc";
const Searchbox = () => {
    const [query, setQuery] = useState<string | undefined>();
    const { data } = trpc.useQuery(['search.q', { query: query as string }], { enabled: query !== undefined && query.length > 0 });
    const searchRef = React.useRef<HTMLInputElement>(null);
    const formRef = React.useRef<HTMLFormElement>(null);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0) {
            setQuery(e.target.value);
        } else {
            setQuery(undefined);
        }
    }

    const clearSearch = () => {
        setQuery(undefined);
        formRef.current?.reset();
        searchRef.current?.focus();
    }

    return (
        <div className="relative">
            <form ref={formRef}>
                <input type="text" placeholder="Search functions, risks, and controls" className="w-[500px] text-black rounded-lg" onChange={debounce(handleInputChange, 300)} ref={searchRef} />
            </form>
            {data && query && query.length > 0 &&
                (<div className="absolute bg-white border-2 shadow-lg rounded-lg  top-12 left-0 right-0 p-2 text-black grid gap-5">
                    <button className="absolute top-1 right-3 text-xl font-bold" onClick={clearSearch} >&times;</button>
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
                    {data.controls.length == 0 && data.risks.length == 0 && data.functions.length == 0 && <div className="text-center text-gray-400">No results found</div>}
                </div>)
            }

        </div >
    )
}

type ResultType = "functions" | "risks" | "controls";

interface SearchboxResultProps {
    id: string,
    name: string,
    query: string,
    type: ResultType
}

Searchbox.Result = ({ id, name, query, type }: SearchboxResultProps) => {
    const indexOfQueryInName = name.toLowerCase().indexOf(query.toLowerCase());
    const indexOfQueryInID = id.toLowerCase().indexOf(query.toLowerCase());
    return (
        <Link href={`/${type}/${id}`}>
            <a className="py-2 rounded-xl hover:bg-slate-100 ">
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


export default Searchbox;