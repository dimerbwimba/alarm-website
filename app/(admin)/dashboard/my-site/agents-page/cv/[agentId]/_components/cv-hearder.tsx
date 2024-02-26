import SkeletonLoader from "@/components/skeleton-loader";
import { AgentDataProps } from "@/types";
import Link from "next/link";
interface CvHeaderProps {
    agent?: AgentDataProps;
    loading: Boolean // Make agent prop optional
}
const CvHeader = ({ agent, loading }: CvHeaderProps) => {

    if (loading) {
        return <div className="  justify-center col-span-4">
            <p>Chargement...</p>
            <SkeletonLoader r={2} />
        </div>
    }
    return (

        <div className=" flex justify-center col-span-4">


            <div className=" border-gray-400  h-screen lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8 sticky top-0">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        {agent?.type_agent}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{agent?.fonction}</div>
                    <p className="text-gray-700 text-base">{agent?.name}</p>
                    <div className=" flex flex-col space-y-2 text-center">
                        <Link className=" border rounded-lg p-1 text-white bg-yellow-700" href={`/dashboard/my-site/home/agents#${agent?._id}`}>Modifier agent</Link>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default CvHeader;