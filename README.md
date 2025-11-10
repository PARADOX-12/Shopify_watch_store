# Shopify Watches Store — Theme Development

This README covers setting up, developing, and deploying a Shopify theme for a watches store (Online Store 2.0 / Dawn-style theme).

## Project overview
- Purpose: theme optimized for selling watches (product detail emphasis, high‑quality media, specs / materials, variants).
- Goals: fast performance, accessible UI, responsive design, clear product information, conversion-focused layouts.

## Requirements
- Shopify store (development or live)
- Node.js (LTS) and npm or pnpm
- Shopify CLI (install from https://shopify.dev)
- Git

## Quick start
1. Clone repository:
    - git clone <repo-url>
    - cd repo
2. Install dependencies:
    - npm install
3. Login & connect to store:
    - shopify login --store your-store.myshopify.com
4. Start local dev server:
    - shopify theme dev
    - (local hot reload + sync with store assets)

## Common CLI commands
- shopify theme dev — preview & edit locally
- shopify theme pull — fetch theme from store
- shopify theme push — push local changes to store
- shopify theme serve — (older CLI variants)
- shopify apps create — for app extensibility (if needed)

## Theme structure (typical)
- assets/ — CSS, JS, images
- config/ — theme settings_schema.json, settings_data.json
- layout/ — theme.liquid, checkout (layouts)
- templates/ — product, collection, index, page
- sections/ — reusable/JSON sections (product, hero, gallery)
- snippets/ — small liquid partials (price, badges)
- locales/ — translations

## Product & content recommendations for watches
- High-resolution product photography (multiple angles + lifestyle)
- Video and 360 where possible
- Use product media and alt text for accessibility/SEO
- Metafields:
  - materials, movement, water resistance, lug width, case diameter, warranty
- Variant handling: SKU, price, inventory, per-variant images
- Collections: Gender, Style (dress, sport), Price tiers, New arrivals

## Performance & SEO tips
- Use responsive images (srcset) and WebP where supported
- Lazy-load non-critical images
- Minify and bundle CSS/JS in production (npm run build)
- Structured data: product schema, reviews, availability
- Optimize critical CSS and defer non-critical scripts

## Accessibility & UX
- Ensure keyboard focus states and ARIA labels on interactive controls
- Provide clear color contrast for price and CTA
- Large tappable areas for mobile
- Variant selectors accessible by keyboard and screen readers

## Testing & QA
- Test across major browsers and devices
- Verify checkout flow (digital product vs physical)
- Test currency/locale, tax and shipping behavior on store
- Automated checks: Lighthouse audits, unit tests for JS components

## Deployment & Release
- Create a theme preview or a new theme on Shopify for staging
- Use Git feature branches and PRs
- Deploy: shopify theme push --theme-id=<id> or use Shopify admin to publish
- Tag releases in Git and keep changelog

## Contributing
- Branch from main, add feature/fix, open PR
- Follow code style (linting) and include screenshots for UI changes
- Run tests and build before pushing

## Useful links
- Shopify dev docs: https://shopify.dev
- Theme kit / CLI docs for commands and authentication

## License
- Add project license (e.g., MIT) in LICENSE file.

Notes:
- Adapt theme structure to business needs (gift cards, subscriptions, warranty pages).
- Use metafields and custom sections to surface technical specs important to watch buyers.
- Monitor analytics and heatmaps to iterate on PDP and collection pages.
