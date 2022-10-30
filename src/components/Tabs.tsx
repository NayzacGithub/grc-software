import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import useTabsStore from '../utils/tabsHook';

const Tabs = () => {
    const getTabs = useTabsStore(state => state.tabs);
    const getActiveTab = useTabsStore(state => state.activeTab);
    const removeTab = useTabsStore(state => state.removeTab);
    return (<nav>
        <nav className='bg-[#f4f4f4] flex border-collapse'>
            {getTabs && getTabs.length > 0 && getTabs.map((tab, index) => {
                return (
                    <div key={`tabIndex-${index}`} className="flex">
                        <Link href={tab.href} key={`tabIndex-${index}`}>
                            <a className={tab.href == getActiveTab?.href ? "radix-tab-active relative" : "radix-tab"}>
                                {tab.name && <span>{tab.name}</span>}
                            </a>
                        </Link>
                        {getActiveTab?.removable && tab.href == getActiveTab.href ? <button type='button' className="radix-tab-close" onClick={() => removeTab(getActiveTab)}><XMarkIcon className='h-6 w-6' /></button> : null}
                    </div>
                )
            })}
        </nav>
    </nav>)
}



export default Tabs;