import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaTruck, FaTools, FaPhoneAlt } from 'react-icons/fa';

const produits = [
  {
    nom: 'Plâtrerie',
    image: '/platerie-image.png',
    description: "Plaques de plâtre, rails, montants, enduits, bandes à joint et accessoires.",
    lien: '/gamme/platerie',
  },
  {
    nom: 'Isolation',
    image: '/isolation-image.png',
    description: "Laine de verre, laine de roche, polystyrène, panneaux isolants toitures/façades.",
    lien: '/gamme/isolation',
  },
  {
    nom: 'Chauffage',
    image: '/chauffage-image.png',
    description: "Pompes à chaleur, chaudières, géothermie, poêles, équipements de chauffage.",
    lien: '/gamme/chauffage',
  },
  {
    nom: 'Climatisation',
    image: '/climatisation-image.png',
    description: "Systèmes de climatisation, modèles mobiles et installations centralisées.",
    lien: '/gamme/climatisation',
  },
  {
    nom: 'Plomberie',
    image: '/plomberie-image.png',
    description: "Tuyaux, raccords, robinets, éviers, lavabos, douches, WC, meubles sur mesure...",
    lien: '/gamme/plomberie',
  },
  {
    nom: 'Sanitaire',
    image: '/sanitaire-image2.png',
    description: "Tout pour des installations sanitaires complètes, durables et esthétiques.",
    lien: '/gamme/sanitaire',
  },
  {
    nom: 'Électricité',
    image: '/electricite-image.png',
    description: "Câbles, interrupteurs, disjoncteurs, prises, accessoires électriques.",
    lien: '/gamme/electricite',
  },
  {
    nom: 'Outillage',
    image: '/outillage-image.png',
    description: "Perceuses, visseuses, scies, niveaux laser, échafaudages, outillage spécialisé.",
    lien: '/gamme/outillage',
  },
  {
    nom: 'EPI',
    image: '/epi-image.png',
    description: "Casques, chaussures de sécurité, gants, lunettes, masques, vêtements de travail.",
    lien: '/gamme/epi',
  },
];

const OffreCompleteSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br  via-white to-blue-100">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-stretch gap-12">
        {/* Colonne gauche : contenu */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 leading-tight">
            Une offre complète <span className="text-blue-600">de matériaux et équipements</span>
          </h2>
          <br />
          {/* <p className="mb-8 text-gray-700 text-lg font-medium">
            clim / chauffage / plomberie / sanitaire / isolation / plâtrerie / électricité / photovoltaïque / outillage - EPI / découpe de verre et de bois
          </p> */}
          {/* Bulles produits */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
            {produits.map((prod) => (
              <div key={prod.nom} className="flex flex-col items-center text-center bg-white/80 rounded-2xl shadow-md p-5 group hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 border border-blue-100">
                <div className="w-20 h-20 mb-3 relative">
                  <Image src={prod.image} alt={prod.nom} fill className="object-cover rounded-full border-4 border-blue-200 group-hover:border-blue-400 transition-all duration-300" />
                </div>
                <span className="font-semibold text-blue-700 mb-1 text-base">{prod.nom}</span>
                <p className="text-xs text-gray-500 mb-2 min-h-[48px]">{prod.description}</p>
                <Link href={prod.lien} className="text-blue-600 text-xs font-medium flex items-center gap-1 hover:underline hover:text-blue-800 transition">
                  En savoirs voir plus <FaArrowRight className="inline-block text-xs" />
                </Link>
              </div>
            ))}
          </div>
          {/* Livraison/retrait */}
          <div className="flex items-start gap-4 mb-5 bg-white/90 rounded-xl p-5 border border-blue-100 shadow-sm">
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
              <FaTruck className="text-blue-600 text-2xl" />
            </div>
            <div>
              <span className="font-bold text-blue-700 text-lg">En livraison ou en retrait magasin</span>
              <p className="text-sm text-gray-600 mt-1">
                90% des marchandises en stock permanent. Livraison rapide sur chantier, dépôt ou retrait magasin. Service logistique réactif, horaires étendus (6h30-17h). Livraison 48h possible avec camions grand volume et grue 10T pour faciliter la manutention et réduire les risques.<br />
                <span className="italic">Urgence ? Ouverture sur RDV le samedi.</span>
              </p>
            </div>
          </div>
          {/* Location matériel */}
          <div className="flex items-start gap-4 mb-7 bg-white/90 rounded-xl p-5 border border-blue-100 shadow-sm">
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
              <FaTools className="text-blue-600 text-2xl" />
            </div>
            <div>
              <span className="font-bold text-blue-700 text-lg">Service location de matériel professionnel</span>
              <p className="text-sm text-gray-600 mt-1">
                Cardeuse souffleuse, carotteuse au diamant, sertisseuse hydraulique... Prix et conditions sur demande via l'espace contact ou par téléphone.
              </p>
            </div>
          </div>
          {/* Appel à l'action contact */}
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-blue-500 transition text-lg">
            <FaPhoneAlt /> Contactez-nous
          </Link>
        </div>
        {/* Colonne droite : image Taverny */}
        <div className="w-full lg:w-5/12 flex justify-center items-stretch">
          <div className="relative h-full w-full max-w-2xl min-h-[500px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-100 bg-white flex items-center justify-center">
            <Image
              src="/Taverny.png"
              alt="Offre complète Distritherm Services"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffreCompleteSection; 