---
title: InstruGo – Connecting Students & Instructors
publishDate: 2022-05-30 00:00:00
img: /assets/instrugo.png
img_alt: Interface of the InstruGo platform showing profiles and a booking flow
description: |
  A full stack web platform that helps students at any level — from elementary to university — find, contact, and book private instructors.
tags:
  - Full Stack
  - Product Design
  - React
  - Node.js

role: Lead Engineer
client: eSTUDENT LUMEN Development Board
year: '2022'
liveUrl: https://instrugo.frle.dev/
repoUrl: https://github.com/InstruGo
---

## The Idea

> “Good education should be accessible and personal — no matter where you start from.”

InstruGo was born from a simple need: helping students find the right instructors quickly and reliably. Whether they’re looking for help with math in primary school or exam prep at university level, the goal was to build a platform that made it easy to search, compare, and book tutors with minimal friction.

As someone passionate about both education and engineering, I wanted this to feel less like a job board and more like a modern product marketplace — with verified profiles, smart filters, and a smooth booking flow.

---

## My Role

I designed and built InstruGo from the ground up, including:

- Frontend in **React + TypeScript**
- Backend in **Node.js** with **Express**
- **MongoDB** as a flexible database layer
- Authentication with **JWT + bcrypt**
- File/image upload and profile management
- Booking logic with availability tracking and calendar sync
- Admin dashboard for content moderation and platform control

I also ran user testing sessions with real students and instructors to refine the flows before launch.

---

## Key Features

### 🔍 Smart search & filters

Users can search instructors by subject, education level, location, availability, and hourly rate.

### 📅 Booking & scheduling

Time slots are synced with instructors’ availability and bookings can be managed in-app.

### 🧾 Profiles & ratings

Each instructor has a profile with bio, credentials, availability, and student reviews.

### 🛡️ Secure messaging & account system

Students and instructors can message each other directly while keeping personal info safe.

---

## Lessons & Reflections

This project taught me a lot about building user-facing products from both a **technical** and **strategic** perspective. I had to think about platform trust, smooth UX, and maintaining flexibility for future verticals (e.g., test prep, group classes, etc.).

It also deepened my understanding of architecture for multi-user systems, including permission roles, resource ownership, and secure communication.

---

## Tech Stack

- **Frontend:** React, TypeScript, SCSS Modules
- **Backend:** Node.js, Express, MongoDB
- **Infra:** Heroku (prototype), Cloudinary for media, SendGrid for notifications
- **Other:** JWT, bcrypt, GitHub Actions for basic CI

---

## Status

The prototype is live in a closed beta and being used by a test group of students and instructors. The next steps include payment integration and user-driven content features.

---

#### Key Takeaways

- Building a real product—even without full funding—can be a powerful learning experience.
- Listening to users early helped me avoid overbuilding.
- Managing both product and tech taught me how much architecture is about tradeoffs and people, not just code.
