import { useRouter } from "next/router";
import useTabsStore from "./tabsHook";

export const useRiskNavigation = () => {
    const router = useRouter();
    const addTab = useTabsStore(state => state.addTab);
    const setActiveTab = useTabsStore(state => state.setActiveTab);

    const navigateTo = (riskId: string) => {
        const tab = {
            id: riskId,
            name: riskId,
            href: `/risks/${riskId}`,
            removable: true,
        };
        addTab(tab);
        setActiveTab(tab);
        router.push(tab.href);
    }
    return {
        navigateTo,
    }
}