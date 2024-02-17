"use client"
import { FC, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HeroWithBG from "@/app/_components/hero_bg";
import { ArrowBigLeft, ArrowBigRight, CheckCheck, PhoneCall, Workflow } from "lucide-react";

interface CVData {
  data: {
    "Nom_Complet": {
      "photo": string,
      "Nom_de_Famille": string,
      "Post_Nom": string,
      "Prénom": string,
      "État_Civil": string,
      "Province": string,
      "Ville": string,
      "Lieu_et_Date_de_Naissance": string,
      "Nationalité": string,
      "Email": string,
      "Téléphone": string
    },
    "Qualifications_et_Compétences": string[],
    "Titres_Académiques": {
      "Institution": string,
      "Année": string,
      "Titre/Diplômes_Obtenus": string
    }[],
    "Autres_Compétences": string,
    "Formation_et_Expériences": {
      "Période": string,
      "Poste"?: string,
      "Formation"?: string,
      "Organisée_par"?: string,
      "Entreprise"?: string,
      "Institution"?: string,
      "Matricule"?: string,
      "Brevet"?: string,
      "Stage"?: string
    }[],
    "Langues_Parlées": {
      "Langue": string,
      "Lire": string,
      "Écrire": string,
      "Parlée": string
    }[],
    "Personnes_de_Référence": {
      "Nom_et_Post_Nom": string,
      "Position": string,
      "Contacts": string
    }[],
    "Travail_Académique": {
      "Sujet_de_Mémoire": string
    },
    "Fait_à_Goma_le": string,
    "Signature": string
  }
}

const AgentInfo: FC = () => {
  const params = useParams();
  const { name } = params;
  const [cvData, setCvData] = useState<CVData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/cv-data?name=${name}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: CVData = await response.json();
      setCvData(data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (name) {
      fetchData();
    }
  }, [name]);

  return (
    <div className="flex flex-col  justify-center items-center">
      <div className="w-full ">
        <HeroWithBG image_url="https://i.ibb.co/y4TR8Fc/DSC-0834-compressed.jpg" span_title="Alarm RDC" title={`CV | ${name} `} />
      </div>
      <div className=" md:w-1/2 relative flex justify-center ">
        <div className=" bg-white rounded-lg p-5 space-x-4 h-48 flex overflow-hidden absolute -top-5 ">
          <img src={cvData?.data["Nom_Complet"]["photo"]} className="shadow-lg rounded-lg" alt="" />
          <div className="">
          <div className="flex  flex-col gap-3">
                <ul className="space-y-3">
                    <li className="flex items-center gap-5 group">
                        <a href="" className="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                          <PhoneCall/>
                        </a>
                        <h5 className="text-base font-medium text-default-800">Appelle Direct</h5>
                    </li>
                    <li className="flex items-center gap-5 group">
                        <a href="" className="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="facebook" className="lucide lucide-facebook h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                        <h5 className="text-base font-medium text-default-800">Ecrie moi sur Facebook</h5>
                    </li>
                    <li className="flex items-center gap-5 group">
                        <a href="" className="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="linkedin" className="lucide lucide-linkedin h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                        <h5 className="text-base font-medium text-default-800">Rejoint moi sure Linkedin</h5>
                    </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="prose pt-48 prose-h2:bg-yellow-700 prose-h2:text-white prose-h2:rounded-lg prose-h2:text-center ">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {cvData && (
            <div className="px-3">
              <h2 className="bg-yellow-200">Informations Personnelles</h2>
              <p><span className=" font-bold">Nom:</span> {cvData.data["Nom_Complet"]["Nom_de_Famille"]}</p>
              <p><span className=" font-bold">Post Nom:</span> {cvData.data["Nom_Complet"]["Post_Nom"]}</p>
              <p><span className=" font-bold">Prénom:</span> {cvData.data["Nom_Complet"]["Prénom"]}</p>
              <p><span className=" font-bold">État Civil:</span> {cvData.data["Nom_Complet"]["État_Civil"]}</p>
              <p><span className=" font-bold">Province:</span> {cvData.data["Nom_Complet"]["Province"]}</p>
              <p><span className=" font-bold">Ville:</span> {cvData.data["Nom_Complet"]["Ville"]}</p>
              <p><span className=" font-bold">Lieu et Date de Naissance:</span> {cvData.data["Nom_Complet"]["Lieu_et_Date_de_Naissance"]}</p>
              <p><span className=" font-bold">Nationalité:</span> {cvData.data["Nom_Complet"]["Nationalité"]}</p>
              <p><span className=" font-bold">Email:</span> {cvData.data["Nom_Complet"]["Email"]}</p>
              <p><span className=" font-bold">Téléphone:</span> {cvData.data["Nom_Complet"]["Téléphone"]}</p>

              <h2>Qualifications et Compétences:</h2>
              <ul>
                {cvData.data["Qualifications_et_Compétences"].map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>

              <h2>Titres Académiques:</h2>
              <ul>
                {cvData.data["Titres_Académiques"].map((titre, index) => (
                  <li key={index}>
                    <p className=" font-bold">Institution: {titre["Institution"]}</p>
                    <h3 className="flex items-center"> <ArrowBigRight /><span>Année: {titre["Année"]}</span></h3>
                    <p>Titre/Diplômes Obtenu: {titre["Titre/Diplômes_Obtenus"]}</p>
                  </li>
                ))}
              </ul>

              <h2>Autres Compétences:</h2>
              <p className="">{cvData.data["Autres_Compétences"]}</p>

              <h2>Formation et Expériences:</h2>
              <ul>
                {cvData.data["Formation_et_Expériences"].map((experience, index) => (
                  <li key={index} className=" ">
                    <p className=" font-bold inline-flex space-x-2 "><Workflow /> <span>Période: {experience["Période"]}</span></p>
                    {experience["Poste"] && <p className=" underline">Poste: {experience["Poste"]}</p>}
                    {experience["Formation"] && <p>Formation: {experience["Formation"]}</p>}
                    {experience["Organisée_par"] && <p>Organisée par: {experience["Organisée_par"]}</p>}
                    {experience["Entreprise"] && <p>Entreprise: {experience["Entreprise"]}</p>}
                    {experience["Institution"] && <p>Institution: {experience["Institution"]}</p>}
                    {experience["Matricule"] && <p>Matricule: {experience["Matricule"]}</p>}
                    {experience["Brevet"] && <p>Brevet: {experience["Brevet"]}</p>}
                    {experience["Stage"] && <p>Stage: {experience["Stage"]}</p>}
                  </li>
                ))}
              </ul>

              <h2>Langues Parlées:</h2>
              <ul>
                {cvData.data["Langues_Parlées"].map((langue, index) => (
                  <tbody key={index}>
                    <th className=" inline-flex space-x-2"><CheckCheck /><span>Langue: {langue["Langue"]}</span> </th>
                    <p>Lire: {langue["Lire"]}</p>
                    <p>Écrire: {langue["Écrire"]}</p>
                    <p>Parlée: {langue["Parlée"]}</p>
                  </tbody>
                ))}
              </ul>

              <h2>Personnes de Référence:</h2>
              <ul>
                {cvData.data["Personnes_de_Référence"].map((ref, index) => (
                  <li key={index}>
                    <p>Nom et Post Nom: {ref["Nom_et_Post_Nom"]}</p>
                    <p>Position: {ref["Position"]}</p>
                    <p>Contacts: {ref["Contacts"]}</p>
                  </li>
                ))}
              </ul>

              <h2>Travail Académique:</h2>
              <p>{cvData.data["Travail_Académique"]["Sujet_de_Mémoire"]}</p>

              <h2>Fait à Goma le:</h2>
              <p>{cvData.data["Fait_à_Goma_le"]}</p>

              <h2>Signature:</h2>
              <p>{cvData.data["Signature"]}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AgentInfo;
