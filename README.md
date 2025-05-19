# Interactive Workflow Portfolio

A modern portfolio application built with Next.js, React, and Tailwind CSS that showcases interactive workflow demonstrations.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Interactive workflow demonstrations for various use cases
- Modern UI with Tailwind CSS for styling
- Next.js for seamless page navigation and server-side rendering
- Contact form for visitor inquiries

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/workflow-portfolio.git
cd workflow-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/src/app`: Contains the Next.js app router pages
- `/src/components`: Reusable React components
- `/src/lib`: Utility functions and data
- `/public`: Static assets like images

## Customization

- Update the portfolio information in `/src/app/page.js`
- Replace placeholder images in `/public/images/`
- Modify workflow data in `/src/lib/workflowData.js`
- Customize the styling in `tailwind.config.js` and `/src/app/globals.css`

## Deployment

This application can be easily deployed to platforms like Vercel or Netlify:

```bash
# Build the application
npm run build
# or
yarn build
```

## License

MIT