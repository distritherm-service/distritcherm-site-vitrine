import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Distritherm Services. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 