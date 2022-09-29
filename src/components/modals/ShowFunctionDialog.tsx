import { Dialog } from '@headlessui/react'
import Link from 'next/link';
import { trpc } from '../../utils/trpc'

interface DialogProps {
    functionId: string,
    handleClose: () => void
}
const ShowFunctionDialog: React.FunctionComponent<DialogProps> = ({ functionId, handleClose }) => {
    const { data: fnc, isLoading, status } = trpc.useQuery(['processes.modalDetails', { functionId: functionId }]);
    return (
        <Dialog open={true} onClose={()=>{console.log('close')}} className="absolute top-0 right-0 left-0 bottom-0 z-20 bg-black/20 backdrop-blur grid place-items-center place-content-center">
            <Dialog.Panel className={'bg-white rounded-lg px-4 py-2 shadow-xl max-w-2xl min-w-fit relative'}>
                <Dialog.Title className={'text-xl font-semibold text-neutral-800'}>Function Details</Dialog.Title>
                <Dialog.Description className={'mb-4 text-neutral-500 border-b-2'}>
                    Here are all of the details for this function
                </Dialog.Description>

                {status == "success" && !isLoading && fnc &&
                    <div className='flex flex-col gap-3'>
                        <div className="flex flex-col">
                            <span className='font-bold text-lg'>Function Name:</span>
                            <span>{fnc.name}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='font-bold text-lg'>Function Description:</span>
                            <span> {fnc.description}</span>
                        </div>
                        <div className="flex flex-col">
                            <span><span className='font-bold'>Risks count:</span> {fnc._count.risks} {fnc._count.risks > 0 && <Link href={{ pathname: '/risks', query: { functionId: functionId } }}><a className='text-blue-500 underline'>View</a></Link>}</span>
                        </div>
                    </div>
                }

                <div className="absolute top-2 right-5 text-2xl cursor-pointer" onClick={handleClose}>&times;</div>

            </Dialog.Panel>
        </Dialog>
    )
}
export default ShowFunctionDialog;