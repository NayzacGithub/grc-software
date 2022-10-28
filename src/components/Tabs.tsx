import * as RadixTabs from '@radix-ui/react-tabs';
import Link from 'next/link';
import useTabsStore from '../utils/tabsHook';
// import { CalendarDaysIcon, DocumentCheckIcon, HomeIcon, TableCellsIcon } from '@heroicons/react/24/outline';
// import { useRouter } from 'next/router';
// import { TypeOf } from 'zod';
// import TabItem from './TabItem';

const Tabs = () => {
    const getTabs = useTabsStore(state => state.tabs);
    const getActiveTab = useTabsStore(state => state.activeTab);
    return (<RadixTabs.Root >
        <RadixTabs.List className='bg-[#f4f4f4] flex border-collapse'>
            {getTabs && getTabs.length > 0 && getTabs.map((tab, index) => {
                return (
                    <RadixTabs.Trigger asChild value={tab.id} key={`tabIndex-${index}`}>
                        <Link href={tab.href}>
                            <a className={tab.href == getActiveTab?.href ? "radix-tab-active" : "radix-tab"}>
                                {tab.name && <span>{tab.name}</span>}
                            </a>
                        </Link>
                    </RadixTabs.Trigger>
                )
            })}
        </RadixTabs.List>
    </RadixTabs.Root>)
}



export default Tabs;