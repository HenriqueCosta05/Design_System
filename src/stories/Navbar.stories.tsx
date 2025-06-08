import type { Meta, StoryObj } from '@storybook/nextjs';
import Navbar from '../components/navbar/Navbar';
import { NavbarProps } from '../components/navbar/Navbar.interface';

const mockNavItems = [
  { label: 'Home', href: '/', current: true },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' }
];

const mockToggleNavbar = () => console.log('Toggle navbar clicked');

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['basic', 'cta', 'cta-icons', 'cta-icons-avatar', 'top-bar'],
    },
    isAuthenticated: { control: 'boolean' },
    isOpen: { control: 'boolean' },
    isMobile: { control: 'boolean' },
    isSticky: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const baseProps: NavbarProps = {
  isOpen: false,
  toggleNavbar: mockToggleNavbar,
  isAuthenticated: false,
  navItems: mockNavItems,
};

export const Basic: Story = {
  args: {
    ...baseProps,
    type: 'basic',
  },
};

export const WithCTA: Story = {
  args: {
    ...baseProps,
    type: 'cta',
    cta: {
      label: 'Try it free',
      href: '/signup',
    },
  },
};

export const WithCTAAndIcons: Story = {
  args: {
    ...baseProps,
    type: 'cta-icons',
    navItems: mockNavItems.map((item, idx) => ({
      ...item,
      icon: idx === 0 ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
      ) : undefined,
    })),
    cta: {
      label: 'Contact us',
      href: '/contact',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
      ),
    },
  },
};

// CTA with Icons and Avatar Navbar
export const WithCTAIconsAvatar: Story = {
  args: {
    ...baseProps,
    type: 'cta-icons-avatar',
    isAuthenticated: true,
    avatar: {
      src: 'https://i.pravatar.cc/40?img=35',
      alt: 'User profile',
    },
  },
};

// Top Bar Navbar
export const TopBar: Story = {
  args: {
    ...baseProps,
    type: 'top-bar',
  },
};

// Mobile View
export const MobileView: Story = {
  args: {
    ...baseProps,
    type: 'basic',
    isMobile: true,
    isOpen: true,
  },
};

// Sticky Navbar
export const StickyNavbar: Story = {
  args: {
    ...baseProps,
    type: 'cta',
    isSticky: true,
  },
};

// Authenticated User
export const AuthenticatedUser: Story = {
  args: {
    ...baseProps,
    type: 'cta-icons-avatar',
    isAuthenticated: true,
    avatar: {
      src: 'https://i.pravatar.cc/40?img=35',
      alt: 'User profile',
      onClick: () => console.log('Avatar clicked'),
    },
  },
};