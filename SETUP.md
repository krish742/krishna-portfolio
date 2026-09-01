# Krishna Pandya Portfolio — Development Setup

Comprehensive setup guide for cloning, running, verifying, and maintaining the portfolio repository for **Krishna Pandya** (UX Researcher & UX Designer).

---

## 1. Prerequisites

Before installing the project, ensure the following software is installed on your computer:

- **Git**: [git-scm.com](https://git-scm.com/) (Required for version control)
- **Node.js**: **Node.js 20 LTS (v20.18.x or higher)** — _Safest verified recommendation_.
  - _Compatibility_: Node.js 20 LTS is fully supported by React 19 (`react` v19.2), Vite 8 (`vite` v8.1), TanStack Start (`@tanstack/react-start` v1.168), and Nitro SSR 3.0.
  - You can check your installed version by running: `node -v`
- **npm**: **v10.x** (comes bundled with Node.js 20 LTS).
  - Check version by running: `npm -v`
- **Code Editor**: [VS Code](https://code.visualstudio.com/) (Recommended) with TypeScript and Tailwind CSS extensions.

---

## 2. Clone the Repository

Open your terminal or command prompt and clone the official GitHub repository:

```bash
git clone https://github.com/Nisargpandya07/empathetic-spaces-main.git
cd empathetic-spaces-main
```

---

## 3. Install Dependencies

Install the project dependencies defined in `package.json` and locked in `package-lock.json`:

```bash
npm install
```

_Note_: Running `npm install` automatically downloads and configures all required dependencies (React 19, Vite, TanStack Start / Router, Tailwind CSS, Lucide icons, Radix UI). Do **not** install React, Vite, or Tailwind globally.

---

## 4. Run the Development Server

To start the local development server:

```bash
npm run dev
```

Terminal output will display your local development URL (typically `http://localhost:3000`). Open this URL in any modern Web Browser (Chrome, Edge, Safari, Firefox). Hot Module Replacement (HMR) will automatically reflect any saved changes instantly.

---

## 5. Production Verification

Before committing changes, run these verification commands to ensure code quality and build stability:

- **Format Check / Auto-format**:

  ```bash
  npm run format
  ```

  _Runs Prettier across all `.ts`, `.tsx`, and `.css` files._

- **Typecheck**:

  ```bash
  npx tsc --noEmit
  ```

  _Verifies TypeScript type safety without generating JS output files._

- **Linter**:

  ```bash
  npm run lint
  ```

  _Runs ESLint rules to detect code quality issues._

- **Production Build**:
  ```bash
  npm run build
  ```
  _Compiles client bundles and Nitro SSR server worker scripts into `.output/`._

---

## 6. Git Workflow

### Daily Development Flow

1. **Pull latest changes before starting work**:

   ```bash
   git pull origin main
   ```

2. **Make your changes and check modified files**:

   ```bash
   git status
   ```

3. **Stage, commit, and push**:
   ```bash
   git add .
   git commit -m "Describe your changes clearly"
   git push origin main
   ```

> **CRITICAL RULE**: Do **NOT** force-push (`git push --force` or `git push -f`) to `main`.

### Recommended Branching for Larger Updates

For multi-step updates or feature additions, create a feature branch:

```bash
git checkout -b sister-content-update
```

Work on your changes, then stage and commit:

```bash
git add .
git commit -m "Update portfolio content"
git push -u origin sister-content-update
```

---

## 7. Common Troubleshooting

| Issue                                      | Root Cause                                           | Solution                                                                                                     |
| :----------------------------------------- | :--------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| **`node` or `npm` not recognized**         | Node.js is not installed or not in your system PATH. | Reinstall Node.js (v20 LTS) from [nodejs.org](https://nodejs.org/) and restart your terminal.                |
| **`npm install` fails**                    | Cached package conflicts or interrupted download.    | Run `npm cache clean --force` then delete `node_modules` folder and re-run `npm install`.                    |
| **Port 3000 already in use**               | Another dev server is running on port 3000.          | Vite will automatically suggest port 3001, or you can terminate the process using port 3000.                 |
| **TypeScript errors (`TS2345`, `TS2322`)** | Route tree out of sync or missing types.             | Run `npm run build` once to auto-generate `src/routeTree.gen.ts`, then re-run `npx tsc --noEmit`.            |
| **Git pull merge conflicts**               | Uncommitted local edits clash with remote commits.   | Run `git status`, commit or stash local edits (`git stash`), then run `git pull origin main`.                |
| **Git Authentication Failed**              | GitHub credentials or Personal Access Token expired. | Authenticate using GitHub Desktop, VS Code Git extension, or update your GitHub Personal Access Token (PAT). |

---

## 8. Project Structure

```
empathetic-spaces-main/
├── public/
│   └── Krishna-Pandya-Resume.pdf    # Downloadable resume PDF
├── src/
│   ├── assets/                      # Real project artifacts & images
│   │   ├── About_Professional_Portrait.png
│   │   ├── Hero_01_JIC_Wireframe.png
│   │   ├── Hero_02_Housing_Research.png
│   │   ├── Hero_03_Vosyn_Sketch.png
│   │   ├── JIC_*.jpg / Housing_*.jpg / Vosyn_*.jpg
│   │   └── *_OfficialProof_*.png
│   ├── components/
│   │   ├── portfolio/               # UI components (Hero, About, CaseStudy, Experience, Skills, Contact, SiteNav, Footer)
│   │   └── ui/                      # Primitive UI elements (Button, Card, Input, Modal, Badge)
│   ├── data/
│   │   ├── profile.ts               # Krishna's real contact details, links & resume path
│   │   └── projects.ts              # Authentic case study text, sections & proof structure
│   ├── routes/                      # TanStack Router file-based pages
│   │   ├── index.tsx                # Homepage (/)
│   │   ├── about.tsx                # About Page (/about)
│   │   ├── projects/$slug.tsx       # Individual Case Studies (/projects/$slug)
│   │   ├── projects/index.tsx       # All Work Index (/projects)
│   │   ├── experience.tsx           # Experience Page (/experience)
│   │   ├── skills.tsx               # Skills Page (/skills)
│   │   ├── education.tsx            # Education Page (/education)
│   │   ├── contact.tsx              # Contact Page (/contact)
│   │   └── resume.tsx               # Online Resume Page (/resume)
│   ├── routeTree.gen.ts             # Auto-generated TanStack Router tree
│   └── main.tsx                     # React application entry point
├── package.json                     # Project scripts and dependencies
├── tsconfig.json                    # TypeScript configuration
└── vite.config.ts                   # Vite build configuration
```

---

## 9. Important Content Rules & Authenticity

Maintain strict fidelity to Krishna Pandya's real professional credentials:

1. **No Fabrication**: Do not invent fake client projects, fake usability metrics, percentage increases, or fictional client approvals.
2. **No Fake Testimonials**: Do not create fictional quotes or fake client endorsements.
3. **Preserve Professional Details**:
   - Email: `krishnapandya391@gmail.com`
   - Phone: `548-333-2167`
   - LinkedIn: `https://www.linkedin.com/in/krishnapandya258/`
   - Location: `Ontario, Canada`
4. **Use Real Artifacts**: Always use the authentic project screenshots and proof cards stored in `src/assets/`.
5. **Framing Independent UX Practice**: Self-directed practice exercises must remain explicitly designated as `"Self-Directed Practice • Not Client Work"`.
6. **Privacy & Security**: Protect research participant privacy; never commit API keys or secret environment variables.

---

## 10. Handoff Folder & Scratch Files

- The directory `KRISHNA_PORTFOLIO_FINAL_MASTER_HANDOFF/` and file `scratch_handoff.txt` contain internal reference material.
- They are listed in `.gitignore` and kept **untracked / local**.
- Do **NOT** remove them from `.gitignore` or commit them to GitHub.

---

## 11. Deployment Overview

This repository is configured with Vite and Nitro SSR (`cloudflare-module` preset). Pushing commits to `main` on GitHub can automatically trigger builds on web hosting platforms such as **Cloudflare Pages**, **Vercel**, or **Netlify**.
