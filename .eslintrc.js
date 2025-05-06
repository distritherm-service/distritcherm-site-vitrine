module.exports = {
  extends: [
    'next/core-web-vitals'
  ],
  rules: {
    // Désactiver l'avertissement concernant les apostrophes non échappées
    'react/no-unescaped-entities': 'off',
    // Désactiver l'erreur de variables non utilisées pour les variables commençant par _
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }]
  }
};
