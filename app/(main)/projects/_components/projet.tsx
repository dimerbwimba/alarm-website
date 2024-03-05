import Markdown from "react-markdown";

const Projet = ({ projet }:any) => {
    return (
        <div className=" bg-gray-100 p-4 rounded-lg">
            <div className=" col-span-9">
                <div className=" bg-yellow-700 px-2 my-3 rounded-lg text-white font-bold text-2xl">{projet.title}</div>
                <div className=" prose prose-md">
                    <Markdown>
                        {projet.description}
                    </Markdown>
                </div>
                <div className=" border-t line-clamp-2"> {projet.file_description} </div>
            </div>
        </div>
    );
}

export default Projet;