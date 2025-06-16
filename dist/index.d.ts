import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1 from 'react';

interface NavbarProps {
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

declare const Navbar: (Props: NavbarProps) => react_jsx_runtime.JSX.Element | undefined;

interface CarouselProps {
    variant?: CarouselVariant;
    items: any[];
    itemWidth?: string;
    itemHeight?: string;
    onSlideChange?: (index: number) => void;
    autoplay?: boolean;
    autoplaySpeed?: number;
    focusAt?: number;
    gap?: string;
    classNames?: any;
}
type CarouselVariant = 'inside-control' | 'outside-control' | 'indicator-outside' | 'indicator-inside' | 'indicator-and-control-inside' | 'with-cards' | 'testimonials' | 'logo';
type CarouselType = 'slider' | 'carousel';

declare const Carousel: React$1.FC<CarouselProps>;

export { Carousel, Navbar };
export type { CarouselProps, CarouselType, CarouselVariant, NavbarProps };
