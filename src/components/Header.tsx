import { Bars3Icon, BellIcon, Cog6ToothIcon, QuestionMarkCircleIcon, UserIcon } from "@heroicons/react/24/outline";
import React from "react";
import useMainNavigation from "../utils/mainNavHook";
import Searchbox from "./Searchbox";
import Tabs from "./Tabs";

const Hamburger = () => {
    const { navigateTo, mainNavigationLinks } = useMainNavigation();
    const [showingNav, setShowingNav] = React.useState(false);
    const showNav = () => {
        setShowingNav(true);
    }

    const hideNav = () => {
        setShowingNav(false);
    }

    const handleNavToggle = () => {
        if (showingNav) {
            hideNav();
        } else {
            showNav();
        }
    }

    return (
        <div className="relative my-auto">
            <button title="Menu" onClick={handleNavToggle}>
                <Bars3Icon className="w-6 h-6 my-auto" />
            </button>
            {showingNav && <nav className="absolute bg-white text-black shadow-xl border-2 rounded-lg overflow-clip">
                <ul>
                    {mainNavigationLinks.map((link) => (
                        <li className="py-2 px-4 min-w-max text-left hover:bg-slate-50 border-b" onClick={() => navigateTo(link)}><a>{link.name}</a></li>
                    ))}
                </ul>
            </nav>}
        </div>
    )
}

const Header: React.FunctionComponent = () => {
    return <div className=" sticky top-0 z-20" data-id="layout-navigation">
        <header className="w-full bg-[#161616] text-white  px-4 ">
            <div className="flex justify-between gap-4">
                <Hamburger />
                <div className="my-auto flex flex-grow justify-between py-3">
                    <section className="my-auto">
                        <p>
                            Pi-Comply - <span className="font-bold">Governance, Risk and Compliance</span>
                        </p>
                    </section>
                    <Searchbox />

                    <nav className="flex gap-5 my-auto">
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