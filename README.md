A responsive IIMT website made with Next.js, Reactjs and Bootstrap.

## Features

- Responsive Hamburger Menu – Works seamlessly across all device sizes
- Bootstrap Integration – Uses Bootstrap 5 for styling and components
- Next.js – Modern React framework with App Router
- Mobile-First Design – Optimized for both mobile and desktop
- Dropdown Menu – Supports nested navigation
- Smooth Animations – Transition effects and hover states

## Project Structure

```
hamburger-menu/
├── app/
│   ├── layout.tsx          # Root layout with Navbar
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   └── Navbar.tsx          # Hamburger menu component
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Styling (`app/globals.css`)

Custom styles include:

- Modern gradient background for navbar
- Hover effects and transitions
- Bootstrap integration
- Mobile responsiveness

## Key Technologies

- **Next.js** - React framework for production
- **React** - UI library
- **Bootstrap** - CSS framework
- **TypeScript** - Type safety
- **CSS3**- Custom styling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Getting Help

For issues or questions:

1. Check the component code in `components/Navbar.tsx`
2. Review Bootstrap documentation: https://getbootstrap.com
3. Check Next.js docs: https://nextjs.org
