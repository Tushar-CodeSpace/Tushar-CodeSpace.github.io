# Tushar | DevOps Engineer Portfolio

> Production-grade, dark-themed portfolio website for a Senior DevOps Engineer, built with **Vite + React + TypeScript + Tailwind CSS** and deployed 100% free on **GitHub Pages** via **GitHub Actions CI/CD**.

[![Deploy Vite to GitHub Pages](https://github.com/Tushar-CodeSpace/Tushar-CodeSpace.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Tushar-CodeSpace/Tushar-CodeSpace.github.io/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-Tushar--CodeSpace.github.io-0084ff?style=flat&logo=github)](https://tushar-codespace.github.io)

---

## 🚀 Live Demo
Visit: **[https://tushar-codespace.github.io](https://tushar-codespace.github.io)**

---

## 🌟 Features

- **Pixel-Accurate Design**: Faithfully implements the dark industrial DevOps aesthetic from the visual mockup:
  - Custom terminal prompt (`> Hello, I'm`, `> whoami`)
  - 5 Stat Badges (`4+ Years`, `20+ Projects`, `132+ Repositories`, `99.9% Uptime`, `10+ Live Deployments`)
  - 5 Core Competency Pills with glowing badges
  - 3D Isometric DevOps Architecture Diagram with interactive node hotspots
- **Featured Projects**:
  - `OcTyn-DevOps-Services` (DevOps Platform)
  - `NIDOWORKZ Deployment` (Industrial Automation / WMS / Sorter)
  - `Central Monitoring Agent` (Python metrics & alerts)
  - `GLiTch - DevOps as a Service` (PaaS / Server Management)
  - Category filter tabs (`All`, `DevOps Platform`, `Industrial Automation`, `Monitoring System`, `Self Project`)
  - Interactive deep-dive modal for each project with architectural pipelines and metrics
- **Three-Column Highlights Section**:
  - **Experience**: 3-stage timeline (Nido Machineries, Flipkart Automation, Nedo Automation) with expandable details
  - **Tech Stack**: Categorized skill rows (Cloud, Containers, CI/CD, Monitoring, Databases, Languages, Others) with SVG icons and proficiency tooltips
  - **About Me & Let's Connect**: Profile photo, bio, status badges, one-click copyable email (`tushar.codespace@gmail.com`), and social links
- **Interactive Terminal Lab**:
  - Playable Linux terminal (`tushar@production:~$`) supporting commands: `whoami`, `docker ps`, `kubectl get pods`, `cat resume.txt`, `uptime`, `curl health`, `skills`, `clear`
- **Engineering Blog / Post-Mortems**:
  - Articles on Industrial CI/CD, edge sensor telemetry, and Git migration with embedded reader modal
- **Resume Viewer Modal**:
  - Interactive resume preview with 1-click Print and plain text download
- **Contact Modal**:
  - Direct email formulation with mailto integration and copy email feedback

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: Crisp SVG Brand Icons & [Lucide React](https://lucide.dev/)
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)
- **Hosting**: GitHub Pages (100% Free)

---

## ⚡ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle into /dist
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🚢 CI/CD & GitHub Pages Deployment

The repository is configured with a fully automated CI/CD pipeline at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### How It Works:
1. Whenever you `git push` to the `main` branch, GitHub Actions starts automatically.
2. It sets up Node.js 20, runs `npm ci`, and compiles the Vite application into static HTML, CSS, and JS (`dist/`).
3. It packages and deploys the static assets directly to **GitHub Pages**.

### One-Time Setup in GitHub:
To ensure GitHub Pages uses the GitHub Actions workflow:
1. Go to your repository on GitHub: `https://github.com/Tushar-CodeSpace/Tushar-CodeSpace.github.io`
2. Click **Settings** ➔ **Pages** (under Code and automation in the left sidebar).
3. Under **Build and deployment** ➔ **Source**, select **GitHub Actions**.
4. Push your changes:
   ```bash
   git add .
   git commit -m "feat: complete devops portfolio with vite and github actions"
   git push origin main
   ```
5. Your site will automatically go live at **`https://tushar-codespace.github.io/`**!

