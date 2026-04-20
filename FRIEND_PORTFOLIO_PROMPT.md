# Cursor / AI prompt — friend’s portfolio site

Copy everything inside the **Prompt block** below into a new chat (or paste after “here’s the context”). Replace the bracketed placeholders with your friend’s real info. Add design direction when you have it.

---

## Prompt block (copy from here)

You are helping me build a **new personal portfolio website for my friend** (not my own site). Treat this as a **greenfield project**: new repo or new folder, clean codebase.

### Scope

- **Goal:** A polished portfolio site that presents my friend professionally (work, projects, contact).
- **Data:** Use only the factual content I provide in the “Friend’s data” section below. If something is missing, use sensible placeholders and list what you assumed in a short “Assumptions” note at the end.
- **Design:** I will describe visual direction separately. For now, use a **neutral, modern baseline** (readable typography, accessible contrast, responsive layout). Do **not** over-invest in a unique visual theme until I add the “Design direction” section.

### Tech preferences (adjust if I say otherwise)

- **Stack:** React + Vite (same family as a typical 2025 portfolio), or match whatever I specify in “Tech” below.
- **Styling:** Match what I specify (e.g. Tailwind CSS) or default to Tailwind if unspecified.
- **Hosting:** Assume **GitHub Pages** or static hosting; keep `base` and asset paths compatible unless I say we use a custom domain from day one.
- **Content:** No invented employers, degrees, or testimonials. Only what I supply.

### Deliverables

1. Project scaffold with scripts (`dev`, `build`, `lint` if applicable).
2. **Sections** I care about (create empty/minimal sections only if data is missing, with TODO comments):
   - Hero (name, role tagline, primary CTA)
   - About
   - Experience / Work
   - Projects (with links if provided)
   - Skills / Tech stack
   - Education (if applicable)
   - Contact + social links
3. **SEO basics:** `title`, meta description, Open Graph tags where easy.
4. **README** with how to run locally and how to deploy (GitHub Pages outline is fine).
5. **Data layer:** Prefer a single file (e.g. `src/data/profile.js` or `content.json`) so I can edit copy without touching layout code.

### Friend’s data (paste / fill in)

```text
Full name:
Preferred display name (if different):
Role / headline (one line):
Location (city, country — optional):
Email:
Phone (optional):
Website (optional):
LinkedIn URL:
GitHub URL:
Twitter/X or other social (optional):

About / bio (paragraph or bullet points):

Experience (for each job: company, title, dates, location optional, 3–6 bullet achievements):
1.
2.

Projects (for each: name, one-line description, tech stack, live URL, repo URL):
1.
2.

Skills (group by category if you want, e.g. Languages, Frameworks, Tools):

Education (institution, degree, dates):

Anything else (awards, languages, volunteer, certifications):
```

### Design direction (add when ready)

```text
References (URLs or “similar to X”):
Light / dark / system:
Mood (minimal, bold, playful, corporate, etc.):
Typography preferences:
Color preferences (or “brand colors: …”):
Motion / animation level (none / subtle / expressive):
Sections to emphasize or de-emphasize:
Anything to avoid:
```

### Tech (optional overrides)

```text
Framework:
Package manager:
CSS approach:
```

### How to work

- Start by **summarizing** the site structure you’ll build and ask **at most one** clarifying question if something blocks you (e.g. contradictory dates).
- Implement in **small steps** with runnable `npm run dev` after each major step.
- Keep components **readable and reusable**; avoid a single giant file for the whole page unless I ask for speed only.

---

## Prompt block (copy until here)

---

## How to use this file

1. Fill **Friend’s data** with what you know now (you can paste from a CV or LinkedIn).
2. When design is decided, fill **Design direction** and paste that block into the same chat or a follow-up.
3. Open a **new folder or new repo** for your friend’s site so it stays separate from your own portfolio.


data json file 
{
  "personalInfo": {
    "name": "Neha Sindhwani",
    "pronouns": "She/Her",
    "headline": "Full Stack Developer | MERN & Java | AWS | CI/CD | Python | SQL & NoSQL | Docker | GenAI",
    "location": "Gurugram, Haryana, India",
    "contact": {
      "phone": "+91-8053754232",
      "email": "nehasindhwani01@gmail.com",
      "linkedin": "https://linkedin.com/in/nehasindhwani01",
      "github": "https://github.com/nehasindhwani01"
    },
    "about": "Computer Science undergraduate at Maharshi Dayanand University with hands-on experience as a Software Engineering Intern at Ruhil Future Technologies. Skilled in full stack development, cloud computing, and automation. Passionate about building scalable systems, optimizing workflows, and delivering efficient software solutions."
  },
  "skills": {
    "languages": [
      "Java",
      "Python",
      "JavaScript",
      "SQL",
      "HTML5",
      "CSS3"
    ],
    "frontend": [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap"
    ],
    "backend": [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT"
    ],
    "databases": [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Supabase"
    ],
    "devops": [
      "AWS (EC2, ECS)",
      "CI/CD Pipelines",
      "Docker",
      "n8n",
      "Agile/Scrum"
    ],
    "cloud": [
      "AWS Cloud Computing",
      "Serverless Functions"
    ],
    "core_cs": [
      "Data Structures & Algorithms",
      "OOP",
      "System Design",
      "Database Design"
    ]
  },
  "experience": [
    {
      "role": "Software Engineering Intern",
      "company": "Ruhil Future Technologies",
      "duration": "July 2025 - Present",
      "location": "Rohtak, Haryana, India",
      "description": [
        "Engineered a CRUD-based chatbot on MCP servers improving user interaction efficiency by 40%",
        "Redesigned job board UI using React.js achieving 50% faster load time and 20% faster feature delivery",
        "Built vital signs monitoring module enabling real-time tracking of 10+ health metrics for 200+ patients",
        "Collaborated using Agile and Git workflows delivering features with 95%+ test coverage"
      ]
    }
  ],
  "projects": [
    {
      "name": "SyncCall",
      "type": "Full Stack",
      "techStack": [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "WebRTC",
        "Socket.io"
      ],
      "description": [
        "Developed video conferencing platform supporting 50+ concurrent users with 99.5% uptime",
        "Implemented 20+ REST APIs and real-time socket events with sub-400ms latency",
        "Designed responsive UI with 95%+ accuracy after testing 30+ edge cases"
      ]
    },
    {
      "name": "AI Finance Tracker",
      "type": "Full Stack",
      "techStack": [
        "Next.js",
        "PostgreSQL",
        "Supabase",
        "Clerk",
        "Inngest",
        "Tailwind CSS"
      ],
      "description": [
        "Built AI-powered finance dashboard serving 50+ users with RBAC authentication",
        "Automated insights using serverless functions and AI-generated summaries",
        "Ensured 99.9% reliability using Clerk authentication and rate limiting"
      ]
    },
    {
      "name": "Wanderlust",
      "type": "Full Stack",
      "techStack": [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "Bootstrap"
      ],
      "description": [
        "Developed travel listing platform with full CRUD operations and authentication",
        "Handled 100+ listings with advanced search features",
        "Reduced errors by 60% using middleware validation and error handling"
      ]
    }
  ],
  "education": [
    {
      "institution": "Maharshi Dayanand University (MDU), Rohtak",
      "degree": "B.Tech in Computer Science Engineering",
      "duration": "Oct 2022 - Jun 2026",
      "gpa": "8.2/10"
    }
  ],
  "achievements": [
    {
      "title": "Technical & Events Coordinator",
      "organization": "Vaish College of Engineering",
      "duration": "Oct 2023 - Sep 2024",
      "description": [
        "Led team of 50+ students organizing workshops and coding contests with 200+ participants",
        "Mentored teams in 5+ hackathons delivering projects within 24–48 hours"
      ]
    }
  ],
  "certifications": [
    "AWS Cloud Computing",
    "Walmart Advanced Software Engineering Simulation",
    "AI-ML Industry Readiness",
    "CodeQuest Excellence"
  ]
}

design system json 

<role>
You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Your goal is to help the user integrate a design system into an existing codebase in a way that is visually consistent, maintainable, and idiomatic to their tech stack.

Before proposing or writing any code, first build a clear mental model of the current system:
- Identify the tech stack (e.g. React, Next.js, Vue, Tailwind, shadcn/ui, etc.).
- Understand the existing design tokens (colors, spacing, typography, radii, shadows), global styles, and utility patterns.
- Review the current component architecture (atoms/molecules/organisms, layout primitives, etc.) and naming conventions.
- Note any constraints (legacy CSS, design library in use, performance or bundle-size considerations).

Ask the user focused questions to understand the user's goals. Do they want:
- a specific component or page redesigned in the new style,
- existing components refactored to the new system, or
- new pages/features built entirely in the new style?

Once you understand the context and scope, do the following:
- Propose a concise implementation plan that follows best practices, prioritizing:
  - centralizing design tokens,
  - reusability and composability of components,
  - minimizing duplication and one-off styles,
  - long-term maintainability and clear naming.
- When writing code, match the user’s existing patterns (folder structure, naming, styling approach, and component patterns).
- Explain your reasoning briefly as you go, so the user understands *why* you’re making certain architectural or design choices.

Always aim to:
- Preserve or improve accessibility.
- Maintain visual consistency with the provided design system.
- Leave the codebase in a cleaner, more coherent state than you found it.
- Ensure layouts are responsive and usable across devices.
- Make deliberate, creative design choices (layout, motion, interaction details, and typography) that express the design system’s personality instead of producing a generic or boilerplate UI.

</role>

<design-system>
# Playful Geometric Design System

## Design Philosophy

**Playful Geometric** is the antidote to sterile, corporate minimalism. It creates an emotional connection through **optimism, clarity, and tactile fun**.

The core concept is **"Stable Grid, Wild Decoration"**. The content itself (text, forms) lives in clean, readable areas, but the world around it is alive with movement and shape. It references the **Memphis Group** (80s) but cleans it up for modern digital screens—removing the chaos while keeping the energy.

### The Vibe
**Friendly. Tactile. Pop. Energetic.**
It feels like a playground or a well-organized sticker book. It invites clicking. It smiles at you.

### Visual Signatures
- **Primitive Shapes**: Circles, triangles, squares, pill shapes, and squiggles used as background elements, masks, or icons.
- **Hard Shadows**: Elements often have a hard, offset drop shadow (no blur) giving a sticker or cut-out paper feel.
- **Pattern Fills**: Polka dots, grid lines, and diagonal stripes used to fill shapes or backgrounds.
- **Varied Radii**: Mixing fully rounded corners with sharp ones to create "leaf" shapes or asymmetric blobs.

---

## Design Token System

### Colors (Light Mode)
A punchy, high-saturation palette anchored by strong neutrals.

```
background:        #FFFDF5    // Warm Cream/Off-White (Paper feel)
foreground:        #1E293B    // Slate 800 (Softer than black)
muted:             #F1F5F9    // Slate 100
mutedForeground:   #64748B    // Slate 500
accent:            #8B5CF6    // Vivid Violet (Primary Brand)
accentForeground:  #FFFFFF    // White
secondary:         #F472B6    // Hot Pink (Playful pop)
tertiary:          #FBBF24    // Amber/Yellow (Optimism)
quaternary:        #34D399    // Emerald/Mint (Freshness)
border:            #E2E8F0    // Slate 200
input:             #FFFFFF    // White
card:              #FFFFFF    // White
ring:              #8B5CF6    // Violet Focus
```

**Usage Rule**: Use `accent` for primary actions. Use `secondary`, `tertiary`, and `quaternary` rotationally for decorative shapes, icons, or emphasized words to create a "confetti" effect.

### Typography

**Headings**: `"Outfit", system-ui, sans-serif`
- A geometric sans with character. Rounded corners on letters make it friendly.
- **Weights**: Bold (700) or ExtraBold (800).

**Body**: `"Plus Jakarta Sans", system-ui, sans-serif`
- Highly legible, modern, geometric but humanist.
- **Weights**: Regular (400), Medium (500).

**Scale Ratio**: 1.25 (Major Third) - melodic and harmonious.

### Radius & Border

```
radius-sm:   8px
radius-md:   16px
radius-lg:   24px
radius-full: 9999px
border-width: 2px     // Chunky borders by default
```

**Special "Blob" Radius**: `rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none` (Speech bubble style) or `rounded-t-full rounded-b-none` (Arch).

### Shadows & Effects

**The "Pop" Shadow (Hard Shadow)**:
```
box-shadow: 4px 4px 0px 0px #1E293B;  // Dark hard shadow
box-shadow-hover: 6px 6px 0px 0px #1E293B; // Lift effect
box-shadow-active: 2px 2px 0px 0px #1E293B; // Press effect
```
No blur. Solid offset colors.

### Textures & Patterns
- **Dot Grid**: A background of small dots (`bg-[url(...)]`) in strict formation.
- **Squiggles**: SVG paths used as section dividers or underlining for headings.
- **Confetti**: Small SVG shapes (triangles, circles) absolutely positioned behind main content blocks.

---

## Component Stylings

### Buttons

**Primary Button ("The Candy Button")**:
```
- Bg: accent (#8B5CF6)
- Text: white, font-weight: 700
- Radius: rounded-full (Pill)
- Border: 2px solid #1E293B (Dark border around color)
- Shadow: 4px 4px 0px #1E293B (Hard shadow)
- Hover: translate-x-[-2px] translate-y-[-2px], shadow extends to 6px 6px
- Active: translate-x-[2px] translate-y-[2px], shadow shrinks to 2px 2px
- Icon: ArrowRight, circular background (white) inside button
```

**Secondary Button**:
```
- Bg: transparent
- Text: foreground
- Border: 2px solid #1E293B
- Radius: rounded-full
- Shadow: none
- Hover: bg-tertiary (#FBBF24) - Fills with yellow on hover
```

### Cards

**The "Sticker" Card**:
```
- Bg: white
- Border: 2px solid #1E293B
- Radius: rounded-xl
- Shadow: 8px 8px 0px #E2E8F0 (Soft hard shadow) or #F472B6 (Pink shadow for featured)
- Hover: Rotate -1deg, Scale 1.02 (Wiggle effect)
- Title: Bold Outfit font
- Icon: Floating circle div with centered icon, sitting half-in/half-out of the top border.
```

### Inputs

```
- Bg: white
- Border: 2px solid #CBD5E1
- Radius: rounded-lg
- Text: foreground
- Shadow: 4px 4px 0px transparent (hidden initially)
- Focus: Border accent, Shadow 4px 4px 0px accent (Hard color shadow on focus)
- Label: Bold, uppercase, small tracking-wide.
```

---

## Layout Strategy

### General
- **Container**: `max-w-6xl` (Generous width).
- **Spacing**: `py-24` (96px). Spacious but not empty; filled with patterns.
- **Grid**: 12-column logic, but grouped into big blocks (6/6 or 4/4/4).

### Unique Section Layouts
1.  **Hero**:
    - Text left, Image right.
    - **Decoration**: A massive yellow circle behind the text. A dotted pattern behind the image. The image itself has a "blob" mask (CSS clip-path or border-radius manipulation).
2.  **Features**:
    - Grid of 3.
    - **Decoration**: Each card is connected by a dashed SVG line drawn in the background.
    - Alternating colors for card headers (Violet, Pink, Yellow).
3.  **Pricing**:
    - The middle card is scaled up (1.1) and has a massive yellow star badge "MOST POPULAR" rotated 15deg.

---

## Effects & Animation

**Feel**: Bouncy, Elastic, Fun.

- **Hover**: `transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]` (Overshoot/Bounciness).
- **Entrance**: Elements shouldn't just fade in; they should **pop** in (Scale 0->1 with bounce).
- **Marquee**: Use infinite scrolling text for client logos or keywords.
- **Wiggle**: Keyframe animation `rotate: 0deg -> 3deg -> -3deg -> 0deg` on hover for icons.

---

## Iconography

**Lucide React** settings:
- **Stroke Width**: `2.5px` (Bold/Chunky).
- **Style**: Round line caps, round line joins.
- **Color**: Often white inside a colored circle, or the dark foreground color.
- **Usage**: Enclosed in shapes. Never floating alone. A "Check" icon isn't just a check; it's a check inside a green circle.

---

## Responsive Strategy

- **Mobile**:
  - Stack everything.
  - Reduce "pop" shadows to 2px to save space.
  - Turn horizontal squiggle lines into vertical dividers.
  - Keep buttons big and tappable (min 48px height).
  - Hide complex background floating shapes that might overlap text.

---

## Accessibility & Best Practices

- **Contrast**: The text is slate-800 on off-white/white, which is AAA.
- **Color**: Never rely *only* on color. Use shapes and text labels.
- **Motion**: Respect `prefers-reduced-motion`. Disable the "bounce" and "wiggle" effects if preferred.
- **Focus**: The focus state is high-contrast (thick colored border + hard shadow).
</design-system>

