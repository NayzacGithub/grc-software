import { useRouter } from "next/router";
import useTabsStore from "./tabsHook";



const useMainNavigation = () => {
    type NavigationLink = {
        href: string;
        name: string;
    }
    const mainNavigationLinks: Array<NavigationLink> = [
        { href: '/', name: 'Home' },
        { href: '/rcm/beta', name: 'RCM' },
        { href: '/functions', name: 'Functions' },
        { href: '/risks', name: 'Risks Catalog' },
        { href: '/controls', name: 'Controls Catalog' },
    ]

    const router = useRouter();
    const addTab = useTabsStore(state => state.addTab);
    const setActiveTab = useTabsStore(state => state.setActiveTab);

    const navigateTo = (navItem: NavigationLink) => {
        if (navItem.href === router.pathname) return;
        if (navItem.href === '/') {
            router.push(navItem.href);
            return;
        }
        const tab = {
            id: navItem.name.toLowerCase(),
            name: navItem.name,
            href: navItem.href,
            removable: true,
        };
        addTab(tab);
        setActiveTab(tab);
        router.push(navItem.href);
    }
    return {
        navigateTo,
        mainNavigationLinks
    }
}

export default useMainNavigation;