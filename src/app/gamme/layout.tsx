import React from 'react';
import GammeShortcut from '@/components/navigation/GammeShortcut';

export default function GammeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      {/* Barre de navigation des gammes */}
      <GammeShortcut />
      {/* Contenu spécifique à la page */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
} 