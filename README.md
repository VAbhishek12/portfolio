# Portfolio – Vedula Abhishek

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS 4 and Framer Motion.

Sections: hero with an interactive network canvas · about · experience · project case studies (modal) · skills · education & certificates · contact.

## Edit the content

Everything shown on the site lives in [`src/data/portfolio.ts`](src/data/portfolio.ts): profile, links, experience, projects, skills and certificates. To update the résumé, replace `public/Vedula_Abhishek_Resume.pdf` with the new file (keep the name).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check and build to dist/
npm run preview    # serve the production build
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel choose **Add New → Project**, import the repository.
3. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`). Click **Deploy**.

## Notes

- Respects `prefers-reduced-motion`; the canvas pauses when off-screen.
- Fully responsive down to 375 px wide.
