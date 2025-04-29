import { Project } from '../types';

interface PortfolioCategory {
  id: string;
  title: string;
  description: string;
  projects: Project[];
}
// Import images for WordPress E-commerce
import we1 from '../assets/web/we1.png';
import wof4 from '../assets/web/wof4.png';
import wf2 from '../assets/web/wf2.png';
import wmp3 from '../assets/web/wmp3.png';

// Import images for SaaS Dashboards
import crm1 from '../assets/web/crm1.jpg';
import crm2 from '../assets/web/crm2.png';
import crm3 from '../assets/web/crm3.png';
import crm4 from '../assets/web/crm4.png';
import crm5 from '../assets/web/crm5.png';

// Import images for React Landing Pages
import web1 from '../assets/web/web1.png';
import web2 from '../assets/web/web2.png';
import web3 from '../assets/web/web3.png';
import web4 from '../assets/web/web4.png';
import web5 from '../assets/web/web5.png';
import web6 from '../assets/web/web6.png';
import web7 from '../assets/web/web7.jpg';

export const webDevelopmentCategories: PortfolioCategory[] = [
  {
    id: 'wordpress-ecommerce',
    title: 'WordPress E-commerce',
    description: 'Custom WooCommerce solutions for online businesses',
    projects: [
      {
        id: 'fashion-store',
        title: 'Fashion Store',
        description: 'Custom WooCommerce store with advanced filtering and size guide',
        image: we1,
      },
      {
        id: 'organic-food',
        title: 'Organic Food Store',
        description: 'WooCommerce store with subscription boxes and recipe integration',
        image: wof4,
      },
      {
        id: 'artisan-marketplace',
        title: 'Artisan Marketplace',
        description: 'Multi-vendor marketplace for handcrafted goods',
        image: wf2,
      },
      {
        id: 'electronics-shop',
        title: 'Electronics Shop',
        description: 'Feature-rich electronics store with product comparisons',
        image: wmp3,
      },
    ],
  },
  {
    id: 'saas-dashboards',
    title: 'SaaS Dashboards',
    description: 'Interactive dashboards for data visualization and analytics',
    projects: [
      {
        id: 'analytics-dashboard',
        title: 'Analytics Dashboard',
        description: 'Real-time data visualization for marketing metrics',
        image: crm1,
      },
      {
        id: 'crm-dashboard',
        title: 'CRM Dashboard',
        description: 'Customer relationship management system with rich insights',
        image: crm2,
      },
      {
        id: 'project-management',
        title: 'Project Management',
        description: 'Task management and team collaboration platform',
        image: crm3,
      },
      {
        id: 'finance-dashboard',
        title: 'Finance Dashboard',
        description: 'Financial analytics and reporting system',
        image: crm4,
      },
      {
        id: 'sales-dashboard',
        title: 'Sales Dashboard',
        description: 'Track sales performance and KPIs',
        image: crm5,
      },
    ],
  },
  {
    id: 'react-landing',
    title: 'Interactive React Landing Pages',
    description: 'Engaging landing pages with smooth animations',
    projects: [
      {
        id: 'startup-landing',
        title: 'Startup Landing',
        description: 'Modern landing page with parallax effects',
        image: web1,
      },
      {
        id: 'product-launch',
        title: 'Product Launch',
        description: 'Interactive product showcase with 3D elements',
        image: web2,
      },
      {
        id: 'app-landing',
        title: 'App Landing',
        description: 'Mobile app landing page with animated features',
        image: web3,
      },
      {
        id: 'event-landing',
        title: 'Event Landing',
        description: 'Conference landing page with countdown timer',
        image: web4,
      },
      {
        id: 'business-landing',
        title: 'Business Landing',
        description: 'Corporate landing page for startups',
        image: web5,
      },
      {
        id: 'personal-portfolio',
        title: 'Personal Portfolio',
        description: 'Personal branding and portfolio site',
        image: web6,
      },
      {
        id: 'agency-landing',
        title: 'Agency Landing',
        description: 'Creative agency landing page',
        image: web7,
      },
    ],
  },
];
export const contentWritingCategories: PortfolioCategory[] = [
  {
    id: 'seo-blog',
    title: 'SEO Blog Articles',
    description: 'Engaging content that ranks and drives organic traffic',
    projects: [
      {
        id: 'tech-series',
        title: 'Tech Blog Series',
        description: 'In-depth articles on emerging technologies',
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
      },
      {
        id: 'finance-blog',
        title: 'Finance Blog',
        description: 'Educational content on personal finance',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85'
      },
      {
        id: 'health-wellness',
        title: 'Health & Wellness',
        description: 'Evidence-based health and wellness articles',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b'
      },
      {
        id: 'travel-blog',
        title: 'Travel Blog',
        description: 'Engaging travel guides and destination reviews',
        image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b'
      }
    ]
  },
  {
    id: 'product-descriptions',
    title: 'Product Descriptions',
    description: 'Compelling copy that converts browsers into buyers',
    projects: [
      {
        id: 'fashion-descriptions',
        title: 'Fashion Collection',
        description: 'Luxury fashion product descriptions',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050'
      },
      {
        id: 'tech-gadgets',
        title: 'Tech Gadgets',
        description: 'Technical product descriptions made simple',
        image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece'
      },
      {
        id: 'home-decor',
        title: 'Home Decor',
        description: 'Lifestyle-focused product descriptions',
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126'
      },
      {
        id: 'beauty-products',
        title: 'Beauty Products',
        description: 'Engaging beauty product descriptions',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796'
      }
    ]
  },
  {
    id: 'email-ad-copy',
    title: 'Email & Ad Copywriting',
    description: 'High-converting email campaigns and ad copy',
    projects: [
      {
        id: 'launch-campaign',
        title: 'Product Launch Campaign',
        description: 'Email sequence with 45% open rate',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
      },
      {
        id: 'social-ads',
        title: 'Social Media Ads',
        description: 'Facebook ad copy with 3.5% CTR',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a'
      },
      {
        id: 'newsletter-series',
        title: 'Newsletter Series',
        description: 'Weekly newsletter with 40% engagement',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2'
      },
      {
        id: 'google-ads',
        title: 'Google Ads Campaign',
        description: 'Search ads with 8% conversion rate',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984'
      }
    ]
  }
];

// Import images and videos from the assets folder
import logo1 from '../assets/ads/logo1.jpg';
import logo2 from '../assets/ads/logo2.jpg';
import logo3 from '../assets/ads/logo3.jpg';
import logo4 from '../assets/ads/logo4.jpeg';

import ad1 from '../assets/ads/ad1.jpg';
import ad2 from '../assets/ads/ad2.jpg';
import ad3 from '../assets/ads/ad3.jpg';
// import ad4 from '../assets/ads/ad4.jpeg';

import video1 from '../assets/ads/video1.mp4';
import video2 from '../assets/ads/video2.mp4';
import video3 from '../assets/ads/video3.mp4';

// Portfolio category data
export const graphicDesignCategories: PortfolioCategory[] = [
  {
    id: 'brand-identity',
    title: 'Brand Logo Design',
    description: 'Comprehensive brand identity systems',
    projects: [
      {
        id: 'cafe-brand',
        title: 'KU Trading Branding',
        description: 'Complete brand identity for an upscale cafe',
        image: logo1 // Imported logo image
      },
      {
        id: 'tech-startup',
        title: 'Tech Startup Identity',
        description: 'Modern branding for a SaaS company',
        image: logo2 // Imported logo image
      },
      {
        id: 'fashion-brand',
        title: 'Fashion Brand Identity',
        description: 'Luxury fashion brand design system',
        image: logo3 // Imported logo image
      },
      {
        id: 'wellness-brand',
        title: 'Wellness Brand Package',
        description: 'Holistic brand identity for wellness company',
        image: logo4 // Imported logo image
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Campaigns',
    description: 'Engaging social media design campaigns',
    projects: [
      {
        id: 'summer-campaign',
        title: 'Summer Collection',
        description: 'Instagram campaign with 25K engagement',
        image: ad1 // Imported social media ad image
      },
      {
        id: 'food-campaign',
        title: 'Restaurant Campaign',
        description: 'Social media campaign for restaurant chain',
        image: ad2 // Imported social media ad image
      },
      {
        id: 'fitness-social',
        title: 'Fitness Challenge',
        description: 'Month-long social media fitness campaign',
        image: ad3 // Imported social media ad image
      },
      // {
      //   id: 'holiday-campaign',
      //   title: 'Holiday Campaign',
      //   description: 'Festive social media campaign series',
      //   image: ad4 // Imported social media ad image
      // }
    ]
  },
  {
    id: 'print-design',
    title: '3D Video + Animations',
    description: 'Professional print design portfolio',
    projects: [
      {
        id: 'business-cards',
        title: 'Luxury Business Cards',
        description: 'Premium business card designs',
        image: video1 // Imported video
      },
      {
        id: 'event-materials',
        title: 'Conference Materials',
        description: 'Complete event collateral package',
        image: video2 // Imported video
      },
      {
        id: 'product-catalog',
        title: 'Product Catalog',
        description: 'High-end product catalog design',
        image: video3 // Imported video
      },
      // {
      //   id: 'magazine-design',
      //   title: 'Magazine Layout',
      //   description: 'Editorial design for lifestyle magazine',
      //   image: video3 // Imported video
      // }
    ]
  }
];
