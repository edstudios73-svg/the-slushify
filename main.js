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

document.body.classList.add('page-home')

document.querySelector('#app').innerHTML = `
  ${renderHeader({ active: 'home' })}

  <main id="top">
    <section class="hero" id="hero" aria-label="The Slushify hero">
      <div class="hero-media">
        <picture>
          <source media="(min-width: 800px)" srcset="/images/hero-desktop.png" width="615" height="446" />
          <img
            class="hero-poster"
            src="/images/hero-mobile.png"
            alt="The Slushify — Fresh Bites. Cool Sips. Burger, red slushy, and fries."
            width="682"
            height="1024"
            sizes="100vw"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
        <div class="hero-glow" aria-hidden="true"></div>
        <div class="hero-vignette" aria-hidden="true"></div>
        <a
          class="hero-order-hit"
          href="${orderLink('an order')}"
          target="_blank"
          rel="noreferrer"
        >Order Now</a>
      </div>

      <div class="hero-frame">
        <div class="hero-copy">
          <p class="hero-kicker">East Legon · Accra</p>
          <h1 class="hero-title">
            <span class="hero-title-line">Fresh Bites.</span>
            <span class="hero-title-line hero-title-accent">Cool Sips.</span>
          </h1>
          <p class="hero-lead">Classic plates. Icy pours. The Slushify way.</p>
          <div class="hero-actions">
            <a class="btn btn-red" href="/menu.html">See the Menu</a>
            <a class="btn btn-ghost" href="${orderLink('the menu')}" target="_blank" rel="noreferrer">Order Now</a>
          </div>
        </div>
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
