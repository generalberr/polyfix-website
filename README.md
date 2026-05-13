# PolyFix Website

Built with **Next.js 14** (App Router) + TypeScript + CSS Modules.

## Project Structure

```
src/
  app/
    page.tsx          ← Home page (/)
    layout.tsx        ← Root layout
    globals.css       ← Global styles & CSS variables
    product/
      page.tsx        ← Product page (/product)
      page.module.css
    contact/
      page.tsx        ← Contact page (/contact)
      page.module.css
    about/
      page.tsx        ← About page (/about)
      page.module.css
    ar/
      layout.tsx      ← RTL layout wrapper
      page.tsx        ← Arabic home (/ar)
      page.module.css
  components/
    Navbar.tsx        ← Shared navbar (EN + AR)
    Navbar.module.css
    Footer.tsx        ← Shared footer (EN + AR)
    Footer.module.css
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy

Push to GitHub — Vercel auto-deploys on every commit.

## Customization

- **Colors & fonts**: Edit `src/app/globals.css`
- **Nav links**: Edit `src/components/Navbar.tsx`
- **Content**: Edit the relevant `page.tsx` file
- **Styles**: Each page has its own `page.module.css`
