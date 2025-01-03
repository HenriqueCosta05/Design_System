import { DefaultTheme } from 'styled-components';   

// Main theme provider
export const theme: DefaultTheme = {
    colors: {
        primary: {
            main: '#212967',
            50: '#EDEFFE',
            100: '#C8CEFC',
            200: '#AEB6FB',
            300: '#8895F9',
            400: '#7181F8',
            500: '#4E61F6',
            600: '#4758E0',
            700: '#3745AF',
            800: '#2B3587',
            900: '#212967',
        },
        black: {
            main: 'rgba(0, 0, 0, 1)',
            50: 'rgba(0, 0, 0, 0.05)',
            100: 'rgba(0, 0, 0, 0.1)',
            200: 'rgba(0, 0, 0, 0.2)',
            300: 'rgba(0, 0, 0, 0.3)',
            400: 'rgba(0, 0, 0, 0.4)',
            500: 'rgba(0, 0, 0, 0.5)',
            600: 'rgba(0, 0, 0, 0.6)',
            700: 'rgba(0, 0, 0, 0.7)',
            800: 'rgba(0, 0, 0, 0.8)',
            900: 'rgba(0, 0, 0, 0.9)',
        },
        white: {
            main: 'rgba(255, 255, 255, 1)',
            100: 'rgba(255, 255, 255, 0.1)',
            200: 'rgba(255, 255, 255, 0.2)',
            300: 'rgba(255, 255, 255, 0.3)',
            400: 'rgba(255, 255, 255, 0.4)',
            500: 'rgba(255, 255, 255, 0.5)',
            600: 'rgba(255, 255, 255, 0.6)',
            700: 'rgba(255, 255, 255, 0.7)',
            800: 'rgba(255, 255, 255, 0.8)',
            900: 'rgba(255, 255, 255, 0.9)',
        },
        grey: {
            main: '#131927',
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EA',
            300: '#D2D5DB',
            400: '#9EA2AE',
            500: '#6D717F',
            600: '#4D5461',
            700: '#394050',
            800: '#212936',
            900: '#161A24',
        },
        green: {
            main: '#1C4D27',
            50: '#ECF8EF',
            100: '#C5E9CD',
            200: '#A9DEB4',
            300: '#81CF92',
            400: '#69C57D',
            500: '#43B75D',
            600: '#3DA755',
            700: '#308242',
            800: '#256533',
            900: '#1C4D27',
        },
        red: {
            main: '#641D1A',
            50: '#FDECEC',
            100: '#FAC5C3',
            200: '#F7A9A7',
            300: '#F4827E',
            400: '#F16965',
            500: '#EE443F',
            600: '#D93E39',
            700: '#A9302D',
            800: '#832523',
            900: '#641D1A',
        }, 
        yellow: {
            main: '#FFAA00',
            50: '#FFF7E6',
            100: '#FFE5B0',
            200: '#FFD88A',
            300: '#FFC654',
            400: '#FFBB33',
            500: '#FFAA00',
            600: '#E89B00',
            700: '#B57900',
            800: '#8C5E00',
            900: '#6B4700',
        }, 
        blue: {
            main: '#0095FF',
            50: '#E6F4FF',
            100: '#B0DEFF',
            200: '#8ACEFF',
            300: '#54B8FF',
            400: '#33AAFF',
            500: '#0095FF',
            600: '#0088E8',
            700: '#006AB5',
            800: '#00528C',
            900: '#003F6B',
        },
    },
    fontSizes: {
        textFont: {
            h1: '48px',
            h2: '40px',
            h3: '32px',
            h4: '28px',
            h5: '24px',
            s1: '18px',
            s2: '16px',
            b1: '16px',
            b2: '14px',
            b3: '14px',
            b4: '14px',
            c1: '12px',
            c2: '12px',
            c3: '10px',
            label: '12px'
        },
        buttonFont: {
            giant: '18px',
            large: '16px',
            medium: '14px',
            small: '12px',
            tiny: '10px'
        },
    },
    fontWeights: {
        regular: 400,
        medium: 500,
        bold: 700,
    },
    radius: {
        none: '0px',
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
    },
    spacing: {
        none: '0px',
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
    },       
    surface: {
        white: "#FFFFFF",
        black: "rgba(0, 0, 0, 0.9)",
        grey: "#F9FAFB",
        accent: "#EDEFFE",
    },
    icon: {
        white: "#FFFFFF",
        black: "rgba(0, 0, 0, 0.9)",
        grey: "#9EA2AE",
        lightGrey: "#D2D5DB",
        accent: "#4E61F6",
        success: "#43B75D",
        info: "#0095FF",
        warning: "#FFAA00",
        error: '#EE443F',
    },
    text: {
        primaryWhite: "#FFFFFF",
        primaryBlack: "rgba(0, 0, 0, 0.9)",
        secondaryWhite: "rgba(255, 255, 255, 0.6)",
        secondaryDarkGrey: "rgba(255, 255, 255, 0.5)",
        grey: "#9EA2AE",
        lightGrey: "#D2D5DB",
        disabled: "#9EA2AE",
        accent: "#4E61F6",
        links: "#4E61F6",
        success: "#43B75D",
        info: "#0095FF",
        warning: "#FFAA00",
        error: '#EE443F',
    }
}