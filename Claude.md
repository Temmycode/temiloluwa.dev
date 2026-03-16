# Portfolio Website Instructions

You are building a **personal developer portfolio website** inside the **current folder**.

The project must be created using **Next.js (App Router)** with **TypeScript**.

The portfolio should showcase **mobile applications** built by the developer.

The design philosophy is:

- Extremely clean
- Developer-oriented
- Minimal but elegant
- Smooth UI interactions
- Dark-mode first
- Avoid the typical "AI-generated portfolio" look

The UI must feel **intentional, precise, and engineered**.

---

# Tech Stack

Use the following stack:

- Next.js (latest)
- TypeScript
- TailwindCSS
- Framer Motion (for subtle animations)
- next/image for optimized images

Avoid unnecessary libraries.

---

# Visual Design Principles

The UI must follow these principles:

### Theme

Default theme: **Dark Mode**

Dark colors should look similar to developer tools:

Background: near-black  
Panels: slightly lighter dark gray  
Text: soft white

Example palette:

- Background: #0b0b0c
- Panel: #121214
- Text primary: #e6e6e6
- Text secondary: #9ca3af
- Accent: subtle cool gray

Light mode should also exist but **dark mode is default**.

Use a **toggle switch** in the header to change themes.

---

### Typography

Fonts should look **developer-focused**, not marketing fonts.

Preferred fonts:

- JetBrains Mono
- Inter

Use JetBrains Mono for titles or highlights and Inter for body text.

Text spacing should feel like **reading code documentation**.

---

### Layout Feel

The site should feel like:

- a developer tool
- a terminal-inspired UI
- minimalistic
- precise

Spacing should be intentional.

Avoid:

- large gradients
- flashy colors
- large hero illustrations
- generic startup-style UI

Instead focus on:

- typography
- structure
- subtle motion
- crisp alignment

---

# Page Structure

The site should be **single-page** with sections.

Sections:

1. Header
2. About
3. Projects
4. Footer

Scrolling should be smooth.

---

# Header

Contains:

- Name
- Navigation links
- Theme toggle

Example nav:

About  
Projects  
GitHub

Header should become slightly blurred on scroll.

---

# About Section

This section introduces the developer.

There is an image available in: /me/

Use that as the profile picture.

The image should be:

- circular
- slightly grayscale
- hover animation that removes grayscale

The about text should describe the developer as:

- a mobile developer
- experienced with Flutter, Dart, Swift, and backend development with FastAPI
- someone who builds real production apps
- focused on mobile systems and backend integrations

You can generate a concise developer bio.

The tone should feel like a **technical engineer**, not a marketer.

---

# Projects Section

There are **three projects**.

Each project has its **own folder with images**.

The images should be used to create **project preview cards**.

Each card should include:

- Project name
- Description
- Technology stack
- GitHub link
- Image preview

Cards should have:

- hover animation
- subtle border
- slight elevation

Layout should be **grid based**.

---

# Project Data

## Adehun

Type: Escrow application

Description:

Adehun is an escrow platform designed to enable secure transactions between two parties.  
The system ensures funds are held safely until agreed conditions are met.

Tech Stack:

Frontend:

- Flutter
- Dart

Backend:

- FastAPI
- Python

Features to highlight:

- escrow workflow
- transaction safety
- API-driven architecture

Images are located in:/Adehun/

GitHub links should exist for:

- frontend
- backend

Add placeholders if needed.

---

## Apple Match

Type: Dating application

Description:

Apple Match is a dating application designed to connect people through interest-based matching and real-time interactions.

Tech Stack:

Frontend:

- Flutter
- Dart

Backend:

- FastAPI
- Python

Features to highlight:

- profile matching
- chat system
- backend APIs

Images are located in:/Apple Match/

---

## Guitar Explore

Type: Educational guitar app

Description:

Guitar Explore is an educational application that helps users explore guitars from different manufacturers and understand their characteristics.

Tech Stack:

- Swift
- SwiftUI

Images located in:/Guitar Explore/

---

# Project Cards Behavior

Each project card should:

- animate on hover
- expand slightly
- reveal GitHub links

Images should slide horizontally if multiple exist.

---

# Animations

Use **Framer Motion** but keep animations subtle.

Allowed animations:

- fade in
- slight upward motion
- hover scaling
- image transitions

Avoid:

- flashy animations
- large motion effects

Everything must feel **smooth and understated**.

---

# Buttons

Buttons should look **engineered**, not decorative.

Design:

- thin border
- slight hover glow
- rounded corners (subtle)

Examples:

View Project  
View GitHub

---

# Footer

Footer should contain:

- GitHub link
- copyright
- short developer tagline

Example:

"Built with precision."

---

# Responsiveness

The layout must work well on:

- desktop
- tablet
- mobile

Project cards should stack vertically on mobile.

---

# Image Handling

Images already exist in folders.

Automatically load images from each project folder.

Display them as:

- preview image
- gallery slider

Use Next.js optimized images.

---

# Performance

The site should:

- load quickly
- lazy load images
- use optimized assets

---

# Overall Goal

The final site should feel like:

A **mobile engineer’s workspace**.

Minimal. Precise. Technical.

It should communicate:

"I build real software."

Not:

"I used a website template."

Focus on:

- clarity
- precision
- developer personality
