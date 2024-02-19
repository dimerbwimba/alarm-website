import { Skeleton } from "./ui/skeleton";

const SkeletonLoader = ({r}:{r:number}) => {
    return ( 
        <div className="flex items-center space-x-4">
            <Skeleton className="h-4 w-[250px] border" />
        </div>
     );
}
 
export default SkeletonLoader;