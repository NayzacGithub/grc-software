import { useSession } from "next-auth/react"
import Image from "next/image"

export const OrganizationWelcome: React.FunctionComponent = () => {
    const { data } = useSession();
    return <header className="py-2 px-8 ">
        <div className="flex gap-4">
            <div className=" h-24 w-24 bg-white rounded-xl border-4 overflow-clip border-gray-200 object-contain"><Image src="/images/ahli-bank.jpg" alt="bank" width={96} height={96} /></div>
            <h1 className="text-xl font-bold my-auto text-gray-700">Welcome, User</h1>
        </div>
    </header>
}
