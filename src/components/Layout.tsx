
import { PropsWithChildren } from "react";
import Header from "./Header";

const Layout: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <main className="bg-[#eef0f4] flex flex-col max-h-screen h-screen">
            <Header />
            <div className="grow flex flex-col ">
                {children}
            </div>
        </main>
    )
}

export default Layout;