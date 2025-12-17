import type { Project } from "@/types";

/**
 * Projects data layer
 * Pure data - no logic (SRP - Single Responsibility Principle)
 *
 * Instructions for customization:
 * 1. Replace with your actual projects
 * 2. Update all fields with real data
 * 3. Add high-quality thumbnail images to /public/projects/ folder
 * 4. Ensure repoUrl points to actual repositories
 * 5. Add demoUrl only if live demo is available
 */

export const projects: readonly Project[] = [
  {
    id: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "A comprehensive analytics platform for SaaS businesses with real-time metrics, custom reports, and team collaboration features.",
    longDescription: `Built a full-featured analytics dashboard for SaaS companies to track key metrics like MRR, churn rate, customer lifetime value, and user engagement. The platform includes real-time data visualization, customizable dashboards, automated reporting, and team collaboration tools.

Key technical achievements:
- Implemented real-time data streaming using WebSockets
- Built custom chart components with D3.js and Recharts
- Designed a flexible query builder for custom reports
- Optimized database queries to handle millions of data points
- Integrated with Stripe, Paddle, and other payment providers

The application serves 500+ businesses and processes over 10 million events daily.`,
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "D3.js",
      "AWS",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    demoUrl: "https://analytics-demo.example.com",
    repoUrl: "https://github.com/yourusername/saas-analytics-platform",
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "An intelligent content creation tool powered by GPT-4 that helps marketers and writers generate high-quality content in seconds.",
    longDescription: `Developed an AI-powered content generation platform that leverages OpenAI's GPT-4 to help content creators produce blog posts, social media content, ad copy, and more. The platform includes templates, tone customization, SEO optimization suggestions, and team workspace features.

Key features:
- Integration with OpenAI API for content generation
- Custom prompt engineering for different content types
- Real-time SEO analysis and suggestions
- Built-in plagiarism checker
- Multi-language support (15+ languages)
- Team collaboration and version control

Used by 2,000+ content creators and marketing teams to generate 50,000+ pieces of content monthly.`,
    tags: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "Vercel",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    demoUrl: "https://ai-content-demo.example.com",
    repoUrl: "https://github.com/yourusername/ai-content-generator",
  },
  {
    id: "real-estate-marketplace",
    title: "Real Estate Marketplace",
    description:
      "A modern property listing platform with advanced search, virtual tours, mortgage calculators, and real-time chat between buyers and agents.",
    longDescription: `Created a comprehensive real estate marketplace connecting buyers, sellers, and agents. The platform features advanced property search with filters, interactive maps, 360° virtual tours, mortgage calculators, document management, and real-time messaging.

Technical highlights:
- Implemented geospatial search using PostGIS
- Integrated Mapbox for interactive property maps
- Built virtual tour viewer with 360° panorama support
- Created mortgage calculator with amortization schedules
- Real-time chat system using Socket.io
- Document upload and e-signature integration
- Progressive web app with offline support

Platform hosts 10,000+ property listings and facilitates 100+ transactions monthly.`,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Mapbox",
      "AWS S3",
      "Stripe",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
    demoUrl: "https://realestate-demo.example.com",
    repoUrl: "https://github.com/yourusername/real-estate-marketplace",
  },
  {
    id: "fitness-tracking-app",
    title: "Fitness & Nutrition Tracker",
    description:
      "A comprehensive health and fitness app with workout tracking, meal planning, progress analytics, and AI-powered recommendations.",
    longDescription: `Developed a holistic fitness and nutrition platform that helps users track workouts, log meals, monitor progress, and receive personalized recommendations. The app includes exercise libraries, custom workout builders, meal planning, barcode scanning, and integration with fitness wearables.

Key features:
- Exercise library with 1,000+ exercises and video demonstrations
- Custom workout builder with rest timer and progress tracking
- Nutrition tracking with barcode scanner and food database (500,000+ items)
- AI-powered meal and workout recommendations
- Progress charts and body measurement tracking
- Social features: challenges, leaderboards, friend connections
- Integration with Apple Health, Google Fit, Fitbit, and more

Active user base of 50,000+ with 4.8★ rating on app stores.`,
    tags: [
      "React Native",
      "TypeScript",
      "Firebase",
      "TensorFlow",
      "Redux",
      "Expo",
      "Stripe",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80",
    demoUrl: "https://fitness-demo.example.com",
    repoUrl: "https://github.com/yourusername/fitness-tracker",
  },
  {
    id: "project-management-tool",
    title: "Agile Project Management Tool",
    description:
      "A collaborative project management platform with Kanban boards, Gantt charts, time tracking, and team communication features.",
    longDescription: `Built a full-featured project management solution designed for agile teams. Features include customizable Kanban boards, Gantt charts, sprint planning, time tracking, resource management, and integrated team communication.

Technical implementation:
- Drag-and-drop Kanban boards with React DnD
- Dynamic Gantt charts with timeline visualization
- Real-time collaboration using WebSockets
- Advanced filtering and search
- Custom fields and workflow automation
- Time tracking with invoicing
- File attachments and document versioning
- Email and Slack integrations

Used by 200+ teams to manage 5,000+ projects with 99.9% uptime.`,
    tags: [
      "Vue.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
      "Docker",
      "Kubernetes",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    demoUrl: "https://pm-demo.example.com",
    repoUrl: "https://github.com/yourusername/project-management-tool",
  },
  {
    id: "e-learning-platform",
    title: "Interactive E-Learning Platform",
    description:
      "A modern learning management system with video courses, interactive quizzes, progress tracking, and certificates of completion.",
    longDescription: `Developed a comprehensive e-learning platform that enables educators to create and sell online courses. Features include video hosting, interactive assessments, discussion forums, live classes, and detailed analytics for both instructors and students.

Platform capabilities:
- Video course creation with drag-and-drop curriculum builder
- Interactive quizzes with various question types
- Live video classes using WebRTC
- Discussion forums and Q&A sections
- Progress tracking and completion certificates
- Payment processing and subscription management
- Mobile-responsive video player with adjustable playback
- Multi-language subtitle support

Platform hosts 500+ courses with 15,000+ enrolled students and 95% completion rate.`,
    tags: [
      "React",
      "TypeScript",
      "Django",
      "Python",
      "PostgreSQL",
      "AWS",
      "Stripe",
      "WebRTC",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
    demoUrl: "https://elearning-demo.example.com",
    repoUrl: "https://github.com/yourusername/elearning-platform",
  },
  {
    id: "social-media-scheduler",
    title: "Social Media Management Suite",
    description:
      "An all-in-one social media management tool for scheduling posts, analyzing performance, and managing multiple accounts from one dashboard.",
    longDescription: `Created a comprehensive social media management platform that helps businesses and creators manage their social presence across multiple platforms. Features include bulk scheduling, content calendar, analytics, team collaboration, and AI-powered caption generation.

Core features:
- Multi-platform posting (Twitter, Facebook, Instagram, LinkedIn, TikTok)
- Visual content calendar with drag-and-drop scheduling
- Bulk upload and CSV import
- Post preview for all platforms
- Analytics dashboard with engagement metrics
- Best time to post recommendations
- Hashtag suggestions and tracking
- Team roles and approval workflows
- Media library with asset management

Manages 100,000+ social media accounts posting 1M+ times monthly.`,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Bull Queue",
      "OpenAI API",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
    demoUrl: "https://social-demo.example.com",
    repoUrl: "https://github.com/yourusername/social-media-scheduler",
  },
  {
    id: "inventory-management",
    title: "Cloud Inventory Management System",
    description:
      "A powerful inventory and warehouse management system with barcode scanning, stock alerts, supplier management, and reporting.",
    longDescription: `Built an enterprise-grade inventory management system for businesses to track stock levels, manage suppliers, process orders, and generate detailed reports. The system includes mobile apps for warehouse staff with barcode scanning capabilities.

Key functionalities:
- Real-time inventory tracking across multiple warehouses
- Barcode and QR code scanning (mobile app)
- Purchase order management
- Stock level alerts and automatic reordering
- Supplier management and pricing history
- Multi-currency support
- Advanced reporting and forecasting
- Integration with QuickBooks and Xero
- Role-based access control

Deployed across 50+ warehouses managing $10M+ in inventory.`,
    tags: [
      "Angular",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Ionic",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop&q=80",
    repoUrl: "https://github.com/yourusername/inventory-management",
  },
  {
    id: "recipe-sharing-community",
    title: "Recipe Sharing Community",
    description:
      "A social platform for food enthusiasts to share recipes, create meal plans, generate shopping lists, and connect with other home chefs.",
    longDescription: `Developed a vibrant community platform for home cooks and food enthusiasts to discover, share, and organize recipes. Features include recipe creation tools, meal planning, automatic shopping list generation, nutritional information, and social features like following, commenting, and recipe collections.

Platform features:
- Rich recipe editor with ingredient scaling
- Meal planning calendar with drag-and-drop
- Automatic shopping list generation with aisle organization
- Nutritional calculation using USDA database
- Recipe ratings and reviews
- Photo upload and gallery
- Recipe collections and saved favorites
- Social feed and discovery algorithm
- Dietary filters (vegan, gluten-free, keto, etc.)

Growing community of 25,000+ users sharing 100,000+ recipes.`,
    tags: [
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Algolia",
      "Tailwind CSS",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80",
    demoUrl: "https://recipes-demo.example.com",
    repoUrl: "https://github.com/yourusername/recipe-community",
  },
] as const;

/**
 * Featured projects for homepage
 * Manually curated list of best projects to showcase
 */
export const featuredProjects = [
  projects[0], // SaaS Analytics Dashboard
  projects[1], // AI Content Generator
  projects[2], // Real Estate Marketplace
] as const;

/**
 * Get projects by tag
 * Helper function to filter projects by technology
 */
export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter((project) =>
    project.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
};

/**
 * Get all unique tags from projects
 * Useful for filtering UI
 */
export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

/**
 * Project statistics
 * Summary metrics for about/stats sections
 */
export const projectStats = {
  total: projects.length,
  withDemo: projects.filter((p) => p.demoUrl).length,
  technologies: getAllTags().length,
  featured: featuredProjects.length,
} as const;
