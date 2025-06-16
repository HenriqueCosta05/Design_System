export interface CarouselProps {
    variant?: CarouselVariant;
    items: CarouselItem[];
    itemWidth?: string;
    itemHeight?: string;
    onSlideChange?: (index: number) => void;
    autoplay?: boolean;
    autoplaySpeed?: number;
    focusAt?: number;
    gap?: string;
    classNames?: string
}

export type CarouselVariant = 'inside-control' | 'outside-control' | 'indicator-outside' | 'indicator-inside' | 'indicator-and-control-inside' | 'with-cards' | 'testimonials' | 'logo';

export type CarouselType = 'slider' | 'carousel';

export type CarouselItem = {
    content: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    onHover?: () => void;
    onMouseEnter?: () => void;
}