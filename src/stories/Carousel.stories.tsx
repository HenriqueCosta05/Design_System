import type { Meta, StoryObj } from '@storybook/nextjs';
import { Carousel } from '../components';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible carousel component built with Glide.js that supports multiple variants and content types.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['inside-control', 'outside-control', 'indicator-outside', 'with-cards', 'testimonials', 'logo'],
      description: 'The visual variant of the carousel',
    },
    items: {
      control: 'object',
      description: 'Array of items to display in the carousel',
    },
    itemWidth: {
      control: 'text',
      description: 'Width of each carousel item',
    },
    itemHeight: {
      control: 'text',
      description: 'Height of each carousel item',
    },
    autoplay: {
      control: 'boolean',
      description: 'Enable/disable autoplay',
    },
    autoplaySpeed: {
      control: 'number',
      description: 'Autoplay speed in milliseconds',
    },
    gap: {
      control: 'text',
      description: 'Gap between carousel items',
    },
    classNames: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const imageItems = [
  {
    content: "https://picsum.photos/600/300?random=1",
    alt: "Sample image 1"
  },
  {
    content: "https://picsum.photos/600/300?random=2",
    alt: "Sample image 2"
  },
  {
    content: "https://picsum.photos/600/300?random=3",
    alt: "Sample image 3"
  },
  {
    content: "https://picsum.photos/600/300?random=4",
    alt: "Sample image 4"
  }
];

const customContentItems = [
  {
    content: (
      <div className="flex h-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Welcome</h2>
          <p className="text-lg">This is slide number one</p>
        </div>
      </div>
    )
  },
  {
    content: (
      <div className="flex h-full items-center justify-center bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Discover</h2>
          <p className="text-lg">Amazing features await you</p>
        </div>
      </div>
    )
  },
  {
    content: (
      <div className="flex h-full items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Get Started</h2>
          <p className="text-lg">Begin your journey today</p>
        </div>
      </div>
    )
  }
];

const testimonialItems = [
  {
    content: "This product has completely transformed our workflow. The team is more productive than ever, and our clients are thrilled with the results!",
    author: {
      name: "Sarah Johnson",
      title: "CEO at TechFlow",
      avatar: "https://i.pravatar.cc/150?img=1",
      link: "https://techflow.com"
    },
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    content: "Amazing customer service and fantastic results. The implementation was smooth, and the support team was incredibly helpful throughout the process.",
    author: {
      name: "Michael Chen",
      title: "Product Manager at InnovateCorp",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    content: "Best investment we've made for our business. The ROI was visible within the first month, and it keeps getting better!",
    author: {
      name: "Emily Rodriguez",
      title: "Marketing Director at GrowthLab",
      avatar: "https://i.pravatar.cc/150?img=3",
      link: "https://growthlab.com"
    },
    rating: "⭐⭐⭐⭐⭐"
  }
];

const logoItems = [
  {
    content: (
      <div className="flex items-center justify-center h-full">
        <div className="bg-gray-200 px-8 py-4 rounded-lg">
          <span className="text-2xl font-bold text-gray-700">Company A</span>
        </div>
      </div>
    )
  },
  {
    content: (
      <div className="flex items-center justify-center h-full">
        <div className="bg-gray-200 px-8 py-4 rounded-lg">
          <span className="text-2xl font-bold text-gray-700">Brand B</span>
        </div>
      </div>
    )
  },
  {
    content: (
      <div className="flex items-center justify-center h-full">
        <div className="bg-gray-200 px-8 py-4 rounded-lg">
          <span className="text-2xl font-bold text-gray-700">Partner C</span>
        </div>
      </div>
    )
  },
  {
    content: (
      <div className="flex items-center justify-center h-full">
        <div className="bg-gray-200 px-8 py-4 rounded-lg">
          <span className="text-2xl font-bold text-gray-700">Client D</span>
        </div>
      </div>
    )
  }
];

export const Default: Story = {
  args: {
    variant: 'inside-control',
    items: customContentItems,
    itemWidth: '600px',
    itemHeight: '300px',
    autoplay: false,
    gap: '16px',
  },
};

export const InsideControls: Story = {
  args: {
    variant: 'inside-control',
    items: customContentItems,
    itemWidth: '600px',
    itemHeight: '300px',
    autoplay: true,
    autoplaySpeed: 4000,
    gap: '16px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with navigation controls positioned inside the carousel area.',
      },
    },
  },
};

export const OutsideControls: Story = {
  args: {
    variant: 'outside-control',
    items: imageItems,
    itemWidth: '500px',
    itemHeight: '250px',
    autoplay: false,
    gap: '20px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with navigation controls positioned outside the carousel area.',
      },
    },
  },
};

export const WithIndicators: Story = {
  args: {
    variant: 'indicator-outside',
    items: customContentItems,
    itemWidth: '400px',
    itemHeight: '200px',
    autoplay: false,
    gap: '12px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with dot indicators for navigation positioned outside the carousel.',
      },
    },
  },
};

export const CardStyle: Story = {
  args: {
    variant: 'with-cards',
    items: customContentItems,
    itemWidth: '700px',
    itemHeight: '350px',
    autoplay: false,
    gap: '24px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with card-style presentation including shadows and elevated appearance.',
      },
    },
  },
};

export const Testimonials: Story = {
  args: {
    variant: 'testimonials',
    items: testimonialItems,
    itemWidth: '600px',
    itemHeight: '400px',
    autoplay: true,
    autoplaySpeed: 5000,
    gap: '20px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Specialized carousel variant for displaying customer testimonials with author information.',
      },
    },
  },
};

export const LogoCarousel: Story = {
  args: {
    variant: 'logo',
    items: logoItems,
    itemWidth: '800px',
    itemHeight: '100px',
    autoplay: true,
    autoplaySpeed: 3000,
    gap: '30px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel optimized for displaying company logos or partner brands.',
      },
    },
  },
};

export const AutoplayExample: Story = {
  args: {
    variant: 'inside-control',
    items: customContentItems,
    itemWidth: '600px',
    itemHeight: '300px',
    autoplay: true,
    autoplaySpeed: 2000,
    gap: '16px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with autoplay enabled and custom speed (2 seconds per slide).',
      },
    },
  },
};

export const CustomSizing: Story = {
  args: {
    variant: 'outside-control',
    items: customContentItems,
    itemWidth: '300px',
    itemHeight: '150px',
    autoplay: false,
    gap: '8px',
    classNames: 'border border-gray-300 rounded-lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with custom dimensions and additional styling classes.',
      },
    },
  },
};

export const InteractiveExample: Story = {
  args: {
    variant: 'inside-control',
    items: customContentItems,
    itemWidth: '600px',
    itemHeight: '300px',
    autoplay: false,
    gap: '16px',
    onSlideChange: (index: number) => {
      console.log(`Slide changed to: ${index}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with slide change callback. Check the browser console for slide change events.',
      },
    },
  },
};