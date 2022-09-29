import { PropsWithChildren } from "react";
import Header from "./Header";

const Layout: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <main className="bg-[#eef0f4] flex flex-col max-h-screen h-screen" style={{ background: "url('/images/pattern.svg') repeat-x fixed #edf0f4" }}>
            <Header />
            <div className="grow flex flex-col">
                {children}
            </div>
        </main>
    )
}

export default Layout;