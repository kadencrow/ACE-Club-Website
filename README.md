# ACE Club Website

The official website for **ACE Club**, a non-profit, student-run tutoring organization based out of Los Alamitos Elementary School. ACE Club connects local high school tutors with elementary school students, offering free academic tutoring and private music lessons.

## About ACE Club

ACE Club is entirely run by local high school students and is split into two divisions:

- **Hearts Division (Academics):** Tutoring in math, science, history, and English (reading and writing) for grades K–8.
- **Spades Division (Music):** Private lessons in violin, viola, cello, flute, piccolo, drums, piano, and general music theory — offered based on current tutor availability.

Beyond helping students, ACE Club gives its teenage tutors the opportunity to build professionalism, adaptability, and communication skills through real teaching experience.

## Features

- Single-page layout with dynamic content switching (Home, Tutor Profiles, For Tutors, Sessions) handled via JavaScript, no page reloads required
- Responsive banner and navigation menu
- Scroll-triggered fade-in animations for content sections
- Tutor and co-founder profile listings
- Session schedule and location information by school
- Custom favicon set and web app manifest for a polished browser/tab experience

## Tech Stack

- **HTML5** — page structure
- **CSS3** — styling, layout (flexbox), and scroll-based animations
- **JavaScript (vanilla)** — dynamic content rendering and navigation
- **Custom fonts** — Courier Prime (regular, bold, italic, bold-italic)

No build tools, frameworks, or dependencies are required — this is a static site that runs directly in the browser.

## Project Structure

```
ACE-Club-Website/
├── .github/workflows/     # GitHub Actions configuration
├── favicon/                # Favicon assets and site.webmanifest
├── fonts/                   # Courier Prime font files
├── images/                  # Banner, logos, and profile images
├── index.html               # Main HTML entry point
├── main.js                  # Handles content switching between pages/sections
├── text.js                  # Stores HTML content strings for each section
├── style.css                # All site styling
└── README.md
```

## Running Locally

Since this is a static site with no build step, you can run it with any local web server. For example, using VS Code's **Live Server** extension:

1. Clone the repository:
   ```bash
   git clone https://github.com/Billet1010/ACE-Club-Website.git
   ```
2. Open the folder in VS Code.
3. Right-click `index.html` and select **Open with Live Server** (or use any static server of your choice).

Opening `index.html` directly in a browser (via `file://`) may also work, but some features (like the favicon manifest) behave more reliably when served over `http://localhost`.

## Deployment

This site is designed to be hosted with **GitHub Pages**. When deploying to a project page (e.g. `https://<username>.github.io/ACE-Club-Website/`), make sure any asset paths in `index.html` and `favicon/site.webmanifest` are **relative** (no leading `/`), since a leading slash points to the domain root rather than the repository subfolder.

## Contact

For questions, tutoring inquiries, or to get involved as a tutor, reach out to:
📧 **phs.ace.tutoring@gmail.com**

## Contributing

This project is maintained by ACE Club's student co-founders and tutors. If you're a club member looking to contribute, please coordinate changes through the club's weekly meetings or reach out via the email above before submitting a pull request.
