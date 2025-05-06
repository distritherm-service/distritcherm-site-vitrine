import React from 'react';
import Link from 'next/link';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
}

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  
  // Fonction pour générer les éléments du fil d'Ariane
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(path => path);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    // Ajouter l'accueil
    breadcrumbs.push({ label: 'Accueil', href: '/' });
    
    // Construire les chemins pour chaque niveau
    let currentPath = '';
    paths.forEach((path) => {
      currentPath += `/${path}`;
      // Formater le label pour l'affichage
      const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
      breadcrumbs.push({ label, href: currentPath });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav
      aria-label="Fil d'Ariane"
      className="relative bg-transparent backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#7CB9E8]/0 via-white/30 to-[#007FFF]/0 pointer-events-none"></div>
      <div className="container relative mx-auto px-4">
        <ol className="flex items-center py-3 overflow-x-auto scrollbar-hide gap-1" role="list">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center min-w-0" role="listitem">
              {index > 0 && (
                <FaChevronRight className="w-2.5 h-2.5 mx-2 text-gray-300 opacity-70 flex-shrink-0" aria-hidden="true" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span
                  className="text-[#007FFF] font-semibold whitespace-nowrap bg-[#007FFF]/10 px-3 py-1.5 rounded-full inline-flex items-center text-sm shadow-sm cursor-default select-none"
                  aria-current="page"
                >
                  {index === 0 ? <FaHome className="w-4 h-4 mr-1.5 opacity-70" aria-hidden="true" /> : null}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-[#007FFF] transition-colors duration-200 whitespace-nowrap inline-flex items-center text-sm px-2 py-1 rounded-full hover:bg-[#007FFF]/10 focus:outline-none focus:ring-2 focus:ring-[#007FFF]/30 focus:bg-[#007FFF]/10 group"
                  tabIndex={0}
                >
                  {index === 0 ? <FaHome className="w-4 h-4 mr-1.5 opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true" /> : null}
                  <span className="truncate">{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </nav>
  );
};

export default Breadcrumb; 