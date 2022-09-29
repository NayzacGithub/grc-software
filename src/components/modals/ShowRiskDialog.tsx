import { Dialog } from '@headlessui/react'
import Link from 'next/link';
import { trpc } from '../../utils/trpc'

interface DialogProps {
    riskId: string,
    handleClose: () => void
}
const ShowRiskDialog: React.FunctionComponent<DialogProps> = ({ riskId, handleClose }) => {
    const { data: risk, isLoading, status } = trpc.useQuery(['risks.modalDetails', { riskId: riskId }]);
    return (
        <Dialog open={true} onClose={()=>{console.log('close')}} className="absolute top-0 right-0 left-0 bottom-0 z-20 bg-black/20 backdrop-blur grid place-items-center place-content-center">
            <Dialog.Panel className={'bg-white rounded-lg px-4 py-2 shadow-xl max-w-2xl min-w-fit relative'}>
                <Dialog.Title className={'text-xl font-semibold text-neutral-800'}>Risk Details</Dialog.Title>
                <Dialog.Description className={'mb-4 text-neutral-500 border-b-2'}>
                    Here are all of the details for this risk
                </Dialog.Description>

                {status == "success" && !isLoading && risk &&
                    <div className='flex flex-col gap-3'>
                        <div className="flex flex-col">
                            <span className='font-bold text-lg'>Function Name:</span>
                            <span>{risk.process.name}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='font-bold text-lg'>Function Description:</span>
                            <span> {risk.process.description}</span>
                        </div>

                        <div className="flex flex-col">
                            <span className='font-bold text-lg'>Risk Name:</span>
                            <span>{risk.name}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='font-bold text-lg'>Risk Description:</span>
                            <pre className="font-sans max-w-xl whitespace-pre-wrap">{risk.description}</pre>
                        </div>
                        <div className="flex flex-col">
                            <span><span className='font-bold'>Controls count:</span> {risk._count.controls} {risk._count.controls > 0 && <Link href={{ pathname: '/controls', query: { riskId: riskId } }}><a className='text-blue-500 underline'>View</a></Link>}</span>
                        </div>
                    </div>
                }

                <div className="absolute top-2 right-5 text-2xl cursor-pointer" onClick={handleClose}>&times;</div>
                {/* <button onClick={() => setIsOpen(false)}>Deactivate</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button> */}
            </Dialog.Panel>
        </Dialog>
    )
}
export default ShowRiskDialog;