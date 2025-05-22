// import { HiOutlineUsers} from "react-icons/hi";
import { FaHandHoldingHeart, FaHandsHelping, FaUserTie } from "react-icons/fa";

const valeurs = [
  {
    icon: <FaUserTie className="w-7 h-7 text-blue-600" />,
    title: "Notre Expertise",
    description: "Spécialistes en énergies renouvelables, climatisation,chauffage, et installations plâterie."
  },
  {
    icon: <FaHandsHelping className="w-7 h-7 text-blue-600" />,
    title: "Notre Engagement",
    description: "Apporter des solutions de haute qualité adaptées aux besoins spécifiques de nos clients."
  },
  {
    icon: <FaHandHoldingHeart className="w-7 h-7 text-blue-600" />,
    title: "Nos Valeurs",
    description: "Nous plaçons l'intégrité, la confiance et la satisfaction client au cœur de notre engagement."
  }
];

export default function ValeursSection() {
  return (
    <section className="w-full flex justify-center relative pointer-events-none select-none mb-12">
      {/* Fond dégradé bleu */}
      <div className="absolute inset-0 w-full h-full z-0 bg-transparent" style={{ minHeight: 180 }} />
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-8 gap-8 md:gap-0 max-w-5xl w-full -mt-32 md:-mt-38 relative z-10 border border-gray-100 pointer-events-auto select-auto">
        {valeurs.map((valeur, idx) => (
          <div key={idx} className="flex flex-col items-center text-center flex-1 px-2 md:px-6">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-3 shadow-md">
              {valeur.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1 whitespace-nowrap">{valeur.title}</h3>
            <p className="text-gray-600 text-sm leading-snug max-w-[220px] mx-auto">{valeur.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 