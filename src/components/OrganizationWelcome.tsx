import { useSession } from "next-auth/react"
import Image from "next/image"

export const OrganizationWelcome: React.FunctionComponent = () => {
    const { data } = useSession();
    return <header className="py-2 px-8 ">
        <div className="flex gap-4">
            <Image src="/images/logo.jpg" alt="bank" className=" h-24 w-24 bg-white rounded-lg border-4 border-gray-200 object-contain" width={96} height={96} />
            <h1 className="text-xl font-bold my-auto text-gray-800">Welcome, {data?.user?.name}</h1>
        </div>
    </header>
}
