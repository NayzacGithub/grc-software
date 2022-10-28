// import React from 'react';
import { HomeIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React, { ReactNode, SVGProps } from 'react';
import create from 'zustand';
// import TabItem from '../components/TabItem';

export interface Tab {
    id: string;
    name: string;
    href: string;
    removable: boolean;
}

export interface TabState {
    tabs: Tab[];
    activeTab?: Tab;
    setActiveTab: (tab: Tab) => void;
    addTab: (tab: Tab) => void;
    removeTab: (tab: Tab) => void;
    hasTab: (tab: Tab, tabs: Tab[]) => boolean;
}

const homeTab: Tab = {
    id: 'home',
    name: 'Home',
    href: '/',
    removable: false,
};

const useTabsStore = create<TabState>((set) => ({
    tabs: [homeTab],
    activeTab: undefined,
    setActiveTab: (tab: Tab) => { set({ activeTab: tab }); },
    addTab: (tab: Tab) => set((state) => ({ tabs: [...state.tabs, tab] })),
    removeTab: (tab: Tab) => set((state) => ({ tabs: state.tabs.filter((t) => t.id !== tab.id) })),
    hasTab: (tab: Tab, tabs: Tab[]) => {
        const tabIds = tabs.map((t) => t.id);
        return tabIds.includes(tab.id);
    }
}));

// export const useNavigateTo = (tab: Tab) => {
//     const { setActiveTab, addTab, hasTab, tabs } = useTabsStore();
//     const router = useRouter();
//     return (tab: Tab) => {
//         if (!hasTab(tab, tabs)) {
//             addTab(tab);
//         }
//         setActiveTab(tab);
//         router.push(tab.href);        
//     };
// }

export default useTabsStore;