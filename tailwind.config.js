module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Marca Principal: Boocat (Terracota + Neutros Elegantes)
                brand: {
                    primary: {
                        light: '#C57A4A',       // Terracota principal
                        dark: '#E39663',        // Terracota claro (modo oscuro)
                        hover: {
                            light: '#B0673F',   // Terracota oscuro (hover)
                            dark: '#CF8050',    // Terracota oscuro (hover dark)
                        },
                    },
                    secondary: {
                        light: '#1A1A1A',       // Negro profundo
                        dark: '#F6D7AE',        // Crema (modo oscuro)
                        hover: {
                            light: '#000000',   // Negro puro
                            dark: '#EACB9E',    // Crema dorada (hover dark)
                        },
                    },
                    tertiary: {
                        light: '#F6D7AE',       // Crema claro
                        dark: '#FFF1DC',        // Crema muy claro (modo oscuro)
                        hover: {
                            light: '#EACB9E',   // Crema dorada (hover)
                            dark: '#F2E2C3',    // Crema cálido (hover dark)
                        },
                    },
                },

                // Accesos Rápidos (Botones, Enlaces)
                accent: {
                    primary: {
                        light: '#C57A4A',
                        dark: '#E39663',
                        hover: {
                            light: '#B0673F',
                            dark: '#CF8050',
                        },
                        disabled: {             // Nuevo: estado disabled
                            light: '#C57A4A80', // Con opacidad 50%
                            dark: '#E3966380',
                        },
                    },
                },

                // Fondos y Superficies
                bg: {
                    light: '#FAFAFA',           // Blanco ligeramente cálido (mejor contraste)
                    dark: '#252525',            // Gris muy oscuro (no negro puro)
                },
                surface: {
                    light: '#FFFFFF',
                    dark: '#1E1E1E',
                    muted: {
                        light: '#F0F0F0',       // Gris muy claro (antes #EAEAEA)
                        dark: '#2E2E2E',        // Gris oscuro (antes #2A2A2A)
                    },
                },

                // Textos (Optimizados para WCAG AAA)
                text: {
                    primary: {
                        light: '#1E1E1E',       // Casi negro (mejor que #2D2D2D)
                        dark: '#F0F0F0',        // Blanco suave (mejor que #F5F5F5)
                    },
                    secondary: {
                        light: '#555555',
                        dark: '#CCCCCC',       // Gris claro (antes #BBBBBB)
                    },
                    muted: {
                        light: '#777777',       // Gris medio (antes #595959)
                        dark: '#AAAAAA',        // Gris intermedio (antes #DDDDDD)
                    },
                    onAccent: {                 // Nuevo: texto sobre botones/accent
                        light: '#FFFFFF',      // Blanco sobre terracota
                        dark: '#1A1A1A',        // Negro sobre crema
                    },
                },

                // Bordes y Estados
                border: {
                    light: '#E0E0E0',          // Gris muy claro (antes #DDDDDD)
                    dark: '#454545',            // Gris oscuro (antes #444444)
                },
                state: {
                    success: {
                        light: '#4E8B4A',       // Verde terroso (armonía con terracota)
                        dark: '#6BA368',        // Verde claro (modo oscuro)
                        'success/10': 'rgba(78, 139, 74, 0.1)',
                        'success/20': 'rgba(78, 139, 74, 0.2)',
                    },
                    warning: {
                        light: '#E6A037',       // Amarillo dorado
                        dark: '#FFC55C',
                    },
                    error: {
                        light: '#C44E4E',        // Rojo apagado
                        dark: '#E57373',
                    },
                },
            },
        }
    },
    plugins: [],
}