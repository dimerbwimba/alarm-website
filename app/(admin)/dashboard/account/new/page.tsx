import BreadCrumb from "@/components/breadcrumb";
import { ManageUserForm } from "@/components/form/user-add-new";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator";

const breadcrumbItems = [
    { title: "Gérer les comptes", link: "/dashboard/account" },
    { title: "Ajouter", link: "/dashboard/account/create" },
  ];
const CreateNewAccount = () => {
    return (
        <ScrollArea className="h-full">
            <div className="flex-1 space-y-4 p-5">
                <BreadCrumb items={breadcrumbItems} />
              
                <ManageUserForm                     
                    initialData={null}
                />
            </div>
        </ScrollArea>
    );
}

export default CreateNewAccount;