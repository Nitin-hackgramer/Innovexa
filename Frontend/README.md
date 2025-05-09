# Innovexa - Tech Community Website

A responsive, modern one-page website for a tech freelance community.

## Features

- Fully responsive design optimized for all device sizes
- Dark/light mode toggle (defaults to dark mode)
- Interactive elements with smooth animations via Framer Motion
- WhatsApp integration for community joining
- Dynamic content sections with modern card-based layouts
- SEO optimization with proper meta tags

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Project Structure

- `/app`: Next.js app router files
- `/components`: Reusable React components
  - `/ui`: Shadcn UI components
  - `/providers`: Context providers
- `/public`: Static assets
- `/lib`: Utility functions

## Page Sections

1. Hero section with logo, tagline, and call-to-action
2. About section with admin introductions and community vision
3. Groups overview with specialized tech categories
4. Live activity feed showing community engagement
5. How it works section explaining the referral process
6. Member spotlight carousel showcasing community members
7. Resources section with filterable learning materials
8. Contact section with WhatsApp invite and contact form
9. Footer with navigation links and social media

## Getting Started

### Prerequisites

- Node.js 16.8+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/technexus-community.git
cd technexus-community
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The project is configured for easy deployment on platforms like Vercel or Netlify:

```bash
npm run build
# or
yarn build
```

This will generate a static export in the `/out` directory.

## Customization

- **Colors**: Brand colors are defined in `app/globals.css` based on the provided logo
- **Content**: Update the data in each component file to customize text and images
- **Styling**: Modify Tailwind classes or update the theme in `tailwind.config.ts`
- **Components**: Add or remove sections by updating `app/page.tsx`

## License

This project is l