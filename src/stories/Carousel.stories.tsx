import { Carousel } from '../components';
import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'inside-control',
        'outside-control',
        'indicator-outside',
        'indicator-inside',
        'indicator-and-control-inside',
        'with-cards',
        'testimonials',
        'logo'
      ],
      description: 'The visual style of the carousel'
    },
    itemWidth: {
      control: 'text',
      description: 'Width of the carousel container'
    },
    itemHeight: {
      control: 'text',
      description: 'Height of the carousel container'
    },
    autoplay: {
      control: 'boolean',
      description: 'Whether to automatically advance slides'
    },
    autoplaySpeed: {
      control: 'number',
      description: 'Speed for autoplay in milliseconds'
    },
    focusAt: {
      control: 'text',
      description: 'Index or "center" to focus at'
    },
    gap: {
      control: 'text',
      description: 'Gap between items'
    },
    onSlideChange: { action: 'slide changed' }
  }
};

export default meta;

type Story = StoryObj<typeof Carousel>;

// Sample image items - using stable image sources
const imageItems = [
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1920&auto=format&fit=crop"
];

// Sample testimonial items
const testimonialItems = [
  {
    content: "This product has completely transformed our workflow. The intuitive interface and powerful features make it a pleasure to use every day.",
    author: {
      name: "Sarah Johnson",
      title: "Marketing Director at TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    rating: "★★★★★"
  },
  {
    content: "I've tried many similar solutions, but this one stands head and shoulders above the rest. The customer support is also exceptional.",
    author: {
      name: "Michael Chen",
      title: "Product Manager at InnoSoft",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    rating: "★★★★★"
  },
  {
    content: "The ROI we've seen since implementing this solution has been remarkable. I would highly recommend it to any business looking to improve efficiency.",
    author: {
      name: "Emily Rodriguez",
      title: "COO at GrowFast Inc",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    rating: "★★★★☆"
  }
];

// Sample card items
const cardItems = [
  {
    content: (
      <div className="p-6 bg-white rounded shadow-md h-full">
        <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
        <p className="text-gray-600 mb-4">Perfect for growing businesses</p>
        <div className="text-3xl font-bold mb-4">$29<span className="text-sm text-gray-500">/month</span></div>
        <ul className="mb-6 space-y-2">
          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Unlimited users</li>
          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Advanced analytics</li>
          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Priority support</li>
        </ul>
        <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    )
  },
  {
    content: (
      <div className="p-6 bg-blue-50 rounded shadow-md border-2 border-blue-500 h-full">
        <div className="absolute -top-3 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          POPULAR
        </div>
        <h3 className="text-xl font-bold mb-2">Business Plan</h3>
        <p className="text-gray-600 mb-4">For established enterprises</p>
        <div className="text-3xl font-bold mb-4">$99<span className="text-sm text-gray-500">/month</span></div>
        <ul className="mb-6 space-y-2">
          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Everything in Premium</li>
          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Custom integrations</li>
          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Dedicated account manager</li>
        </ul>
        <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    )
  },
  {
    content: (
      <div className="p-6 bg-white rounded shadow-md h-full">
        <h3 className="text-xl font-bold mb-2">Enterprise Plan</h3>
        <p className="text-gray-600 mb-4">Custom solutions for large organizations</p>
        <div className="text-3xl font-bold mb-4">Custom</div>
        <ul className="mb-6 space-y-2">
          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Everything in Business</li>
          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> SLA agreement</li>
          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> White-label options</li>
        </ul>
        <button className="w-full py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
          Contact Sales
        </button>
      </div>
    )
  }
];

// Sample logo items
const logoItems = [
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", 
    alt: "Amazon Logo",
    style: { maxHeight: '50px' }
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", 
    alt: "Google Logo",
    style: { maxHeight: '50px' }
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", 
    alt: "Apple Logo",
    style: { maxHeight: '50px' }
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", 
    alt: "Microsoft Logo",
    style: { maxHeight: '50px' }
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", 
    alt: "Netflix Logo",
    style: { maxHeight: '50px' }
  }
];

// Basic carousel with default settings
export const Default: Story = {
  args: {
    items: imageItems,
    itemHeight: '400px'
  }
};

// Inside Controls Variant
export const InsideControls: Story = {
  args: {
    variant: 'inside-control',
    items: imageItems,
    itemHeight: '400px'
  }
};

// Outside Controls Variant
export const OutsideControls: Story = {
  args: {
    variant: 'outside-control',
    items: imageItems,
    itemHeight: '400px'
  }
};

// Indicator Inside Variant
export const IndicatorInside: Story = {
  args: {
    variant: 'indicator-inside',
    items: imageItems,
    itemHeight: '400px'
  }
};

// Indicator Outside Variant
export const IndicatorOutside: Story = {
  args: {
    variant: 'indicator-outside',
    items: imageItems,
    itemHeight: '400px'
  }
};

// Combined Controls and Indicators Inside
export const ControlsAndIndicatorsInside: Story = {
  args: {
    variant: 'indicator-and-control-inside',
    items: imageItems,
    itemHeight: '400px'
  }
};

// Cards Variant
export const WithCards: Story = {
  args: {
    variant: 'with-cards',
    items: cardItems,
    itemHeight: '450px',
    gap: '32px'
  }
};

// Testimonials Variant
export const Testimonials: Story = {
  args: {
    variant: 'testimonials',
    items: testimonialItems,
    itemHeight: '320px'
  }
};

// Logo Variant
export const LogoCarousel: Story = {
  args: {
    variant: 'logo',
    items: logoItems,
    itemHeight: '120px',
    gap: '48px',
    autoplay: true,
    autoplaySpeed: 2000
  }
};

// Autoplay Example
export const WithAutoplay: Story = {
  args: {
    variant: 'indicator-inside',
    items: imageItems,
    autoplay: true,
    autoplaySpeed: 3000,
    itemHeight: '400px'
  }
};

// Custom Styling Example
export const WithCustomStyles: Story = {
  args: {
    items: imageItems,
    itemHeight: '400px',
    classNames: {
      container: 'border-4 border-blue-500 rounded-xl shadow-2xl'
    },
    gap: '40px'
  }
};

// Error Handling Example
export const WithErrorHandling: Story = {
  args: {
    items: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1920&auto=format&fit=crop",
      "https://invalid-image-url.jpg", // Will trigger error handling
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1920&auto=format&fit=crop",
    ],
    itemHeight: '400px'
  }
};

// Responsive Example
export const ResponsiveCarousel: Story = {
  args: {
    items: imageItems,
    itemWidth: '100%',
    itemHeight: 'calc(200px + 15vw)',
    variant: 'indicator-and-control-inside'
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive'
    }
  }
};

// Small Height Example
export const SmallHeightCarousel: Story = {
  args: {
    items: imageItems,
    itemHeight: '200px',
    variant: 'indicator-outside'
  }
};

// Large Height Example
export const LargeHeightCarousel: Story = {
  args: {
    items: imageItems,
    itemHeight: '600px',
    variant: 'inside-control'
  }
};

// Mix Content Types Example
export const MixedContentCarousel: Story = {
  args: {
    items: [
      imageItems[0],
      cardItems[0],
      testimonialItems[0]
    ],
    itemHeight: '450px'
  }
};