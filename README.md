# The Yenopoya World — React site

Recreated from the supplied PDF mockup, desktop view only for now.

## Structure

```
src/
  main.jsx            entry point
  App.jsx              assembles all sections in order
  App.css / index.css  page wrapper + global design tokens (colors, fonts, spacing)
  assets/images/       every photo/graphic used on the page
  components/
    Header/            top email bar + logo + nav
    Hero/               3-photo banner, title, tagline, socials, small photo strip
    Stats/              "At A Glance" numbers + pull quote
    EnrollBanner/        diagonal blue band, notebook graphic, Enroll button
    InquireMission/     "Enriching Communities" panel + Mission accordion
    QuickLinks/          Academics / Students / Admissions strip
    ContactBanner/      "Have questions or need assistance?" photo banner
    DiscoverFurther/    Gallery / News / Blogs cards
    Testimonials/       pull quote + photo
    InquireForm/         contact form over photo background
    CTASection/          closing logo + heading + Contact Us band
    Footer/              link columns + socials + copyright
```

Every component has its own `.jsx` and its own `.css` file, so you can
open any single folder and change just that section without touching
the rest. Shared bits (colors, fonts, the outline-button style, the
centered section heading style) live in `src/index.css` as CSS
variables/classes — change a value there and it updates everywhere.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Notes

- Desktop layout only, as requested — mobile/tablet breakpoints come next.
- A few photos that weren't in your reference images (hero row, small
  photo strip, Gallery/News/Blogs thumbnails, the inquire-form
  background) were cropped straight out of your PDF mockup so nothing
  is a random stock placeholder.
