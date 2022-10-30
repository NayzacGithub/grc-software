import { useRouter } from "next/router";
import useTabsStore from "./tabsHook";

export const useRiskNavigation = () => {
    type NavigationLink = {
        href: string;
        name: string;
    }
    const riskNavigationLinks: Array<NavigationLink> = [
        { href: '/risks', name: 'Risks Catalog' },
        { href: '/risks/new', name: 'New Risk' },
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
        riskNavigationLinks
    }
}