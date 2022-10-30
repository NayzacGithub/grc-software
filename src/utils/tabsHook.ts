import create from 'zustand';

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
    setActiveTab: (tab: Tab) => {
        set({ activeTab: tab });
    },
    addTab: (tab: Tab) => {
        if(!useTabsStore.getState().hasTab(tab, useTabsStore.getState().tabs)) {
            set((state) => ({ tabs: [...state.tabs, tab] }))
        }
        return;
    },
    removeTab: (tab: Tab) => {
        set((state) => ({ tabs: state.tabs.filter((t) => t.id !== tab.id) }))
    },
    hasTab: (tab: Tab, tabs: Tab[]) => {
        const tabIds = tabs.map((t) => t.id);
        return tabIds.includes(tab.id);
    },
}));

export default useTabsStore;