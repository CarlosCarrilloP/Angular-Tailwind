/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      ultrawide: '1920px',

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {

      
    },
  },
  //Creamos una clase personalizada para el boton
  plugins: [
    //Boton azul
    function ({ addUtilities, theme, variants }) {
      const colors = theme('colors');
      const btnAzulStyles = {
        '.btn-azul': {
          backgroundColor: colors.blue[500],
          color: colors.white,
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
        },
        '.btn-azul:hover': {
          backgroundColor: colors.blue[600],
        },
      };

      addUtilities(btnAzulStyles, variants('btnAzul'));
    },
    
    //Texto gris
    function ({ addUtilities, theme, variants }) {
      const subtextGreyStyles = {
        '.subtext-grey': {
          display: 'block',
          color: theme('colors.gray.700', '#4a5568'),
          fontSize: '0.875rem',
          fontWeight: 700,
          marginBottom: '0.5rem',
        },
      };

      addUtilities(subtextGreyStyles, variants('subtextGrey'));
    },

  ],
}

