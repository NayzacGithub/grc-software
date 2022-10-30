import Link from 'next/link';
import useTabsStore from '../utils/tabsHook';

const Tabs = () => {
    const getTabs = useTabsStore(state => state.tabs);
    const getActiveTab = useTabsStore(state => state.activeTab);
    return (<nav>
        <ul className='bg-[#f4f4f4] flex border-collapse'>
            {getTabs && getTabs.length > 0 && getTabs.map((tab, index) => {
                return (
                    <Link href={tab.href} key={`tabIndex-${index}`}>
                        <a className={tab.href == getActiveTab?.href ? "radix-tab-active" : "radix-tab"}>
                            {tab.name && <span>{tab.name}</span>}
                        </a>
                    </Link>
                )
            })}
        </ul>
    </nav>)
}



export default Tabs;