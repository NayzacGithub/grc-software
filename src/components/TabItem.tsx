import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode, SVGProps } from "react";
// import { PropsWithChildren } from "react";


interface TabItemProps {
    itemLink: string;
    label: string;
    active: boolean;
}

const TabItem: React.FunctionComponent<TabItemProps> = ({ itemLink, label, active }) => {
    return (
        <></>
    );
}

export type TabItemType = React.FunctionComponent<TabItemProps>;

export default TabItem;