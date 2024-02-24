"use client"

import { useParams } from "next/navigation";

const AgentCv = () => {
    const params = useParams()
    const { agentId} = params
    return ( 
        <div>
            {agentId}
        </div>
     );
}
 
export default AgentCv;