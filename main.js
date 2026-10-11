import './style.css'
import {
  business,
  orderLink,
  eventLink,
  homeCategories,
  itemsByCategories,
  momentItems,
  spaceItems,
  menuItems,
  renderHeader,
  renderFooter,
  bindChrome,
  bindCarousels,
  frameMarkup,
  renderCarousel,
} from './shared.js'

const aboutShot = menuItems.find((i) => i.id === 'burger-3')?.image || '/images/cats/burger_3.jpg'
const mapShot = spaceItems[0]?.image || '/images/cats/the_space.jpg'

const categorySections = homeCategories
  .map((cat) => {
    let items = []
    let lifestyle = false
    let menuLink = ''

    if (cat.type === 'menu') {
      items = itemsByCategories(cat.categories)
      menuLink = `<a class="text-link" href="/menu.html">See all ${cat.title.toLowerCase()} →</a>`
    } else if (cat.type === 'moments') {
      items = momentItems
      lifestyle = true
      menuLink = `<a class="text-link" href="${business.instagram}" target="_blank" rel="noreferrer">@slushify._ ↗</a>`
    } else if (cat.type === 'space') {
      items = spaceItems
      lifestyle = true
      menuLink = `<a class="text-link" href="${business.mapUrl}" target="_blank" rel="noreferrer">Get directions →</a>`
    }

    if (!items.length) return ''

    return `
    <section class="cat-rail cat-rail-${cat.id}" id="${cat.id}">
      <div class="cat-rail-intro">
        <p class="eyebrow">${cat.eyebrow}</p>
        <h2>${cat.title}</h2>
        <p>${cat.blurb}</p>
        ${menuLink}
      </div>
      ${renderCarousel(cat.id, items, { lifestyle })}
    </section>`
  })
  .join('')

const heroCats = [
  {
    label: 'Slushies',
    href: '/menu.html#slushies',
    icon: '<path d="M10 11h12l-1.6 16.5a1.6 1.6 0 0 1-1.6 1.5h-5.6a1.6 1.6 0 0 1-1.6-1.5z"/><path d="M9 11c0-3 3-5 7-5s7 2 7 5"/><path d="M18 6l2-4h3"/><path d="M11 17h10"/>',
  },
  {
    label: 'Burgers',
    href: '/menu.html#burgers',
    icon: '<path d="M5 14c0-5 5-8 11-8s11 3 11 8z"/><path d="M4 18h24"/><path d="M5 22c0 2.5 2 4 4 4h14c2 0 4-1.5 4-4z"/><path d="M12 10h.01M16 9h.01M20 10h.01"/>',
  },
  {
    label: 'Fries',
    href: '/menu.html#fries',
    icon: '<path d="M8 14l2 14h12l2-14"/><path d="M8 14c2 2.5 5 3.5 8 3.5s6-1 8-3.5"/><path d="M11 14V5M14.5 15V3M18 15V4M21 14V6"/>',
  },
  {
    label: 'Combos',
    href: '/menu.html#combos',
    icon: '<path d="M4 17c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5z"/><path d="M3.5 20h17"/><path d="M4.5 23c0 1.5 1.2 2.5 2.5 2.5h10c1.3 0 2.5-1 2.5-2.5z"/><path d="M22 12h6l-1.2 14h-3.6z"/><path d="M25 12l1.5-6h2"/>',
  },
]

document.body.classList.add('page-home')

document.querySelector('#app').innerHTML = `
  ${renderHeader({ active: 'home' })}

  <main id="top">
    <section class="hero" id="hero" aria-label="The Slushify — Good Food. Great Vibes.">
      <div class="hero-bg" aria-hidden="true"></div>

      <div class="hero-inner">
        <div class="hero-copy">
          <h1 class="hero-title">
            <span class="hero-line hero-line--lead">Good Food.</span>
            <span class="hero-line hero-line--accent">Great Vibes.</span>
          </h1>
          <svg class="hero-swoosh" viewBox="0 0 220 28" aria-hidden="true" focusable="false">
            <path d="M6 22C58 9 120 4 214 6" />
            <path d="M40 25C92 16 140 13 184 14" />
          </svg>
        </div>

        <figure class="hero-feast">
          <picture>
            <source media="(min-width: 900px)" srcset="/images/hero-feast-desktop.webp" width="850" height="619" />
            <img
              src="/images/hero-feast-mobile.webp"
              alt="Burgers, golden fries, crispy chicken, and a cold drink from The Slushify"
              width="853"
              height="500"
              fetchpriority="high"
              decoding="async"
            />
          </picture>
        </figure>

        <a class="hero-cta" href="${orderLink('an order')}" target="_blank" rel="noreferrer">
          Order Now
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
        </a>

        <ul class="hero-cats" aria-label="Browse the menu">
          ${heroCats
            .map(
              (c) => `
          <li>
            <a href="${c.href}">
              <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">${c.icon}</svg>
              <span>${c.label}</span>
            </a>
          </li>`
            )
            .join('')}
        </ul>
      </div>
    </section>

    <section class="deal-strip">
      <div class="deal-strip-inner">
        <span class="deal-flash">GHC 150</span>
        <p>Combo meal + a Slushy — the deal is back.</p>
        <a class="btn btn-light btn-sm" href="/menu.html#combos">Grab it</a>
      </div>
    </section>

    <section class="about about-slim" id="about">
      <div class="about-visual about-visual-solo">
        ${frameMarkup(aboutShot, 'Stacked Slushify cheeseburgers', 'neon', 'STACK')}
      </div>
      <div class="about-copy">
        <p class="eyebrow">About Us</p>
        <h2>Passion for Great Food, Served with Love.</h2>
        <p>The Slushify is Accra’s good-time stop — smoking slushies, stacked burgers, crispy fries, and nights that feel like a highlight reel.</p>
        <a class="text-link" href="/menu.html">Browse full menu →</a>
      </div>
    </section>

    <section class="menu-rails" id="menu-preview">
      <div class="rails-head">
        <p class="eyebrow center">By category</p>
        <h2 class="center">Swipe the good stuff</h2>
        <p class="center rails-sub">Slushies, burgers, fries, combo meals, real moments — and the space.</p>
      </div>
      ${categorySections}
    </section>

    <section class="locations" id="find-us">
      <div class="map-art">
        ${frameMarkup(mapShot, 'Slushify red booth and script logo', 'polaroid', 'VISIT')}
      </div>
      <div class="locations-copy">
        <h2>Find a Slushify Near You!</h2>
        <a class="btn btn-red" href="${business.mapUrl}" target="_blank" rel="noreferrer">Get Directions</a>
        <div class="location-details">
          <p><strong>Address</strong><br />${business.address}</p>
          <p><strong>Orders</strong><br /><a href="${orderLink()}" target="_blank" rel="noreferrer">+233 50 994 9405</a></p>
          <p><strong>Events</strong><br /><a href="${eventLink}" target="_blank" rel="noreferrer">+233 57 597 8888</a></p>
        </div>
      </div>
    </section>
  </main>

  ${renderFooter()}
`

bindChrome()
bindCarousels()
