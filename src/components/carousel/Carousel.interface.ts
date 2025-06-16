export interface CarouselProps {
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

export type CarouselVariant = 'inside-control' | 'outside-control' | 'indicator-outside' | 'indicator-inside' | 'indicator-and-control-inside' | 'with-cards' | 'testimonials' | 'logo';

export type CarouselType = 'slider' | 'carousel';
