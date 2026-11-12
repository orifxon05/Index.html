# Orifxon Ma'rufxonov — Personal Developer Portfolio

> **Python Developer | AI & Automation | Cybersecurity**  
> Information Security student at the International Islamic Academy of Uzbekistan.

A premium, human-crafted personal portfolio website built with clean semantics, elegant typography, and authentic project presentations.

---

## 🌟 Key Highlights & Design Philosophy

1. **Authentic Professional Positioning**:
   - Focus on practical software development with Python, Telegram bots, AI API integrations, and database architectures, combined with an academic foundation in Information Security.
   - Avoids artificial percentages, exaggerated corporate claims, and generic AI buzzwords.

2. **Midnight Blue Premium Editorial Aesthetic**:
   - Palette: Deep Midnight Blue canvas (`#0B1220`), secondary section background (`#111C2E`), card surfaces (`#17243A`), elevated surfaces (`#1C2B42`), primary text (`#F1F5FC`), secondary text (`#A4B2C7`), vibrant accent blue (`#4D9FFF`), accent hover (`#78B7FF`), and crisp borders (`#263750` / `#24334A`).
   - Typography: Google Fonts **Newsreader** (classic editorial serif), **Plus Jakarta Sans** (clean contemporary body), and **JetBrains Mono** (technical annotations).
   - Zero gratuitous neon glows, CRT scanlines, or fake terminal screens. Deep, calm, and highly readable.

3. **Curated Practical Projects**:
   - **Personal Telegram AI Assistant**: Telethon MTProto client with role-based access control (RBAC) and LLM API integration.
   - **Dormitory Duty Management Bot**: Automated cyclical scheduling and timed notification dispatcher.
   - **Warehouse & Retail Management Web Platform**: Dual-database structure (PostgreSQL/MongoDB) with dynamic QR processing.
   - **Birthday Greeting Automation Bot**: Scheduled calendar checking and automated media dispatching.
   - **Media & Audio Storage Telegram Bot**: Asynchronous stream processing and cloud archive management.
   - **Security & SIEM Home-Lab**: Practical investigation of network traffic and system log triage.

4. **Complete Dual-Language Support (UZ / EN)**:
   - Full seamless client-side translation across all sections, metadata, modal views, and forms.
   - Preserves user preference in `localStorage`.

5. **Direct & Honest Contact Options**:
   - Direct Telegram (`@Orifxon_05`), Instagram (`@_sheeyh_9`), GitHub (`orifxon05`), phone, and email.
   - One-click clipboard copying with toast confirmation.
   - Direct email composition via native client (`mailto:`).

---

## 📂 Project Structure

```text
├── index.html                  # Semantic HTML5 with Newsreader & Plus Jakarta Sans
├── style.css                   # Editorial CSS design system, typography, responsive rules
├── script.js                   # Bilingual dictionary, project filter, modals & form logic
├── orifxon.png                 # Authentic high-resolution portrait
├── Orifxon_Marufxonov_CV.pdf   # Official curriculum vitae (downloadable)
├── vercel.json                 # Security headers (nosniff, X-Frame-Options) & cache policy
├── .gitignore                  # Git exclusions
└── README.md                   # Documentation
```

---

## 💻 Local Preview

Run a local HTTP server using Python:

```bash
python -m http.server 8080
```

Open your browser at:
`http://localhost:8080`

---

## 🚀 Deployment (Vercel)

The repository is configured for automatic deployment with Vercel:

1. Push latest changes to GitHub:
   ```bash
   git add .
   git commit -m "feat: human-crafted editorial developer portfolio"
   git push origin main
   ```
2. Vercel automatically detects commits and builds the production site at:
   `https://protfolio-orifxon-s-projects.vercel.app`
