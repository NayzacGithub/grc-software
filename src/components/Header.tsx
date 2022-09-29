import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FunctionComponent = () => {
    const router = useRouter();
    return <div className=" sticky top-0 z-20" data-id="layout-navigation">
        <header className="w-full bg-[#313949] text-white  px-4 flex gap-8 justify-between">
            <div className="flex gap-8">
                <div id="logo" className="my-auto">
                    {/* <img src="./pianat-logo.png" className="h-9 " alt=""/> */}
                    LOGO
                </div>
                <nav className="flex my-auto">
                    <Link href={'/'}><a className={"px-2 py-3 " + (router.pathname == '/' && 'active')}>Home</a></Link>
                    <Link href={'/processes'}><a className={"px-2 py-3 " + (router.pathname.includes('/processes') && 'active')}>Processes Catalog</a></Link>
                    <Link href={'/risks'}><a className={"px-2 py-3 " + (router.pathname.includes('/risks') && 'active')}>Risk Catalog</a></Link>
                    <Link href={'/controls'}><a className={"px-2 py-3 " + (router.pathname.includes('/controls') && 'active')}>Control Catalog</a></Link>
                    <Link href={'/rcm'}><a className={"px-2 py-3 " + (router.pathname.includes('/rcm') && 'active')}>RCM</a></Link>
                    {/* <a href="Reports.html" className="px-2 py-3">Reports</a> */}
                </nav>
            </div>
            <nav className="flex gap-2 my-auto">
                {/* <img src="./user.jpg" className="w-9 h-9 rounded-full" alt=""> */}
            </nav>
        </header>
    </div>
}

export default Header;