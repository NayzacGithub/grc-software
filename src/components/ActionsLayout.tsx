import clsx from "clsx"
import { PropsWithChildren } from "react"
import Layout from "./Layout"

const ActionsLayout = ({ children }: PropsWithChildren) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export const ActionsLayoutHeader = ({ children }: PropsWithChildren) => {
    return <header className="bg-white px-8 pt-2 flex justify-between border-b-2 pb-4 ">
        {children}
    </header>
}

export const ActionsLayoutSide = ({ children }: PropsWithChildren) => {
    return <aside className="shrink max-w-lg flex flex-col gap-4">
        {children}
    </aside>
}

export const ActionsLayoutSection = ({ children }: PropsWithChildren) => {
    return <section className="grow  bg-white rounded-lg shadow-xl">{children}</section>
}

export const ActionsLayoutMain = ({ children }: PropsWithChildren) => {
    return <main className={clsx("flex p-5 gap-8 grow")}>{children}</main>
}

export default ActionsLayout