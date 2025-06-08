export interface NavbarProps {
    isOpen: boolean;
    toggleNavbar: () => void;
    isAuthenticated: boolean;
    type?: 'basic' | 'cta' | 'cta-icons' | 'cta-icons-avatar' | 'top-bar';
    isMobile?: boolean;
    isSticky?: boolean;
    navItems?: {
        current?: boolean;
        label: string;
        href: string;
        icon?: React.ReactNode;
        onClick?: () => void;
    }[];
    cta?: {
        label: string;
        href: string;
        icon?: React.ReactNode;
        onClick?: () => void;
    };
    avatar?: {
        src: string;
        alt: string;
        onClick?: () => void;
    };
}