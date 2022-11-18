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

export const useControlNavigation = () => {
    const router = useRouter();
    const addTab = useTabsStore(state => state.addTab);
    const setActiveTab = useTabsStore(state => state.setActiveTab);

    const navigateTo = (controlId: string) => {
        const tab = {
            id: controlId,
            name: controlId,
            href: `/controls/${controlId}`,
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

export const useRiskAssessmentNavigation = () => {
    const router = useRouter();
    const addTab = useTabsStore(state => state.addTab);
    const setActiveTab = useTabsStore(state => state.setActiveTab);

    const navigateTo = (riskId: string) => {
        const tab = {
            id: riskId,
            name: `${riskId} assessment`,
            href: `/risks/${riskId}/assessment`,
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

export const useControlAssessmentNavigation = () => {
    const router = useRouter();
    const addTab = useTabsStore(state => state.addTab);
    const setActiveTab = useTabsStore(state => state.setActiveTab);

    const navigateTo = (controlId: string) => {
        const tab = {
            id: controlId,
            name: `${controlId} assessment`,
            href: `/controls/${controlId}/assessment`,
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