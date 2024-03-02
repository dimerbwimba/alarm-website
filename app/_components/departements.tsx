import { useState, useEffect } from 'react';
import axios from 'axios';
import { SingleDepartementType } from '@/types';
import { CheckCheck } from 'lucide-react';

const Departements = () => {
    const [loading, setLoading] = useState(true);
    const [departements, setDepartements] = useState<SingleDepartementType[]>([]);
    const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);

    const getDepartements = async () => {
        await axios.get('/api/public/departements').then(({ data }) => {
            if (!data.error) {
                setLoading(false);
                setDepartements(data.departements);
            }
        });
    };

    useEffect(() => {
        getDepartements();
    }, []);

    const toggleDepartmentExpansion = (departmentId: string) => {
        if (expandedDepartments.includes(departmentId)) {
            setExpandedDepartments(expandedDepartments.filter((id) => id !== departmentId));
        } else {
            setExpandedDepartments([...expandedDepartments, departmentId]);
        }
    };

    const isDepartmentExpanded = (departmentId: string) => expandedDepartments.includes(departmentId);
    
    if (loading) {
        return (<div aria-label="Loading..." role="status" className="flex items-center h-screen space-x-2">
          <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
            <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
            <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="24"></line>
            <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
            </line>
            <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="24"></line>
            <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
            </line>
            <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="24"></line>
            <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
            <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
            </line>
          </svg>
          <span className="text-4xl font-medium text-gray-500">Loading...</span>
        </div>)
      }
    return (
        <div>
            <section
                id="departements"
            >
                <div className="p-5 md:p-20 lg:py-20 py-10  w-full bg-gradient-to-b bg-yellow-800">
                   
                                <div className="text-center text-gray-100">
                                    <span className="py-1 text-gray-100 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 text-default-950">
                                        Departement
                                    </span>
                                    <h2 className="text-4xl text-gray-100 font-bold text-default-950 mt-6">
                                        ALARM RDC. Departements.
                                    </h2>
                                    <hr className="my-6 border border-dashed text-default-800" />
                                </div>
                                <div className="grid w-full md:grid-cols-3 grid-cols-1 gap-x-10 gap-y-6">
                                    {departements?.map((item: SingleDepartementType, index) => (
                                        <div
                                            key={index}
                                            className="group relative shadow rounded-md z-2 bg-default-100 dark:bg-default-50"
                                        >
                                            <div className="flex py-2 justify-center">
                                                <div className="h-12  w-12 rounded-md flex items-center justify-center transition-all duration-500 text-xl border border-default-200 text-default-950 hover:text-primary bg-white/5 hover:bg-white">
                                                    0{index + 1}
                                                </div>
                                            </div>
                                            <div className="p-6 py-8">
                                                <div className="flex mb-2 text-default-950">
                                                    <span className="price text-3xl font-semibold mb-0">
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <hr className="my-6 border border-dashed text-default-800 hidden xl:block" />
                                                <ul
                                                    role="list"
                                                    className="mt-4 mb-5 -ms-3 text-sm text-default-white"
                                                >
                                                    {item.roles.slice(0, isDepartmentExpanded(item._id) ? item.roles.length : 3).map((role, roleIndex) => (
                                                        <li key={roleIndex} className="flex items-center gap-2 py-1">
                                                            <CheckCheck className='w-4 h-4 text-primary'/>
                                                            <span className="text-base text-default-950">
                                                                {role}
                                                            </span>
                                                        </li>
                                                    ))}
                                                    {item.roles.length > 3 && (
                                                        <li
                                                            className="flex justify-center border rounded-lg bg-orange-200 items-center gap-2 py-1 cursor-pointer text-primary"
                                                            onClick={() => toggleDepartmentExpansion(item._id)}
                                                        >
                                                            <span className=' font-bold'>
                                                                {isDepartmentExpanded(item._id) ? 'Voir moins' : 'Voir plus'}
                                                            </span>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                           
                </div>
            </section>
        </div>
    );
};

export default Departements;
