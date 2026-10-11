import './style.css'
import {
  business,
  orderLink,
  eventLink,
  categories,
  menuItems,
  signatureIds,
  moments,
  space,
  arrowIcon,
  renderHeader,
  renderFooter,
  menuCard,
  bindChrome,
} from './shared.js'

document.body.classList.add('page-home')

const catIcons = {
  slushies:
    '<path d="M10 11h12l-1.6 16.5a1.6 1.6 0 0 1-1.6 1.5h-5.6a1.6 1.6 0 0 1-1.6-1.5z"/><path d="M9 11c0-3 3-5 7-5s7 2 7 5"/><path d="M18 6l2-4h3"/><path d="M11 17h10"/>',
  burgers:
    '<path d="M5 14c0-5 5-8 11-8s11 3 11 8z"/><path d="M4 18h24"/><path d="M5 22c0 2.5 2 4 4 4h14c2 0 4-1.5 4-4z"/><path d="M12 10h.01M16 9h.01M20 10h.01"/>',
  fries:
    '<path d="M8 14l2 14h12l2-14"/><path d="M8 14c2 2.5 5 3.5 8 3.5s6-1 8-3.5"/><path d="M11 14V5M14.5 15V3M18 15V4M21 14V6"/>',
  combos:
    '<path d="M4 17c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5z"/><path d="M3.5 20h17"/><path d="M4.5 23c0 1.5 1.2 2.5 2.5 2.5h10c1.3 0 2.5-1 2.5-2.5z"/><path d="M22 12h6l-1.2 14h-3.6z"/><path d="M25 12l1.5-6h2"/>',
}

const signatures = signatureIds.map((id) => menuItems.find((i) => i.id === id)).filter(Boolean)

document.querySelector('#app').innerHTML = `
  ${renderHeader({ active: 'home' })}

  <main id="main">
    <section class="hero" id="hero" aria-label="The Slushify — Good Food. Great Vibes.">
      <div class="hero-bg" aria-hidden="true"></div>

      <div class="hero-inner">
        <div class="hero-copy">
          <p class="hero-kicker">East Legon · Accra</p>
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
              alt="Burgers, golden fries, crispy chicken and a cold drink from The Slushify"
              width="853"
              height="500"
              fetchpriority="high"
              decoding="async"
            />
          </picture>
        </figure>

        <a class="hero-cta" href="${orderLink('an order')}" target="_blank" rel="noreferrer">
          Order Now ${arrowIcon}
        </a>

        <ul class="hero-cats" aria-label="Browse the menu">
          ${categories
            .map(
              (c) => `
          <li>
            <a href="/menu.html#${c.id}">
              <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">${catIcons[c.id]}</svg>
              <span>${c.label}</span>
            </a>
          </li>`
            )
            .join('')}
        </ul>
      </div>
    </section>

    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        ${Array.from({ length: 2 })
          .map(
            () => `
        <span>Slushies</span><i>✦</i><span>Burgers</span><i>✦</i><span>Fries</span><i>✦</i><span>Combos</span><i>✦</i><span>Good Vibes</span><i>✦</i>`
          )
          .join('')}
      </div>
    </div>

    <section class="section" id="categories">
      <div class="container">
        <header class="section-head" data-reveal>
          <p class="eyebrow">The Menu</p>
          <h2>Four things, done right.</h2>
          <a class="link-arrow" href="/menu.html">Full menu ${arrowIcon}</a>
        </header>
        <div class="cat-grid">
          ${categories
            .map(
              (c, i) => `
          <a class="cat-card" href="/menu.html#${c.id}" data-reveal style="--d:${i * 70}ms">
            <img src="${c.image}" alt="" loading="lazy" decoding="async" />
            <span class="cat-card-shade" aria-hidden="true"></span>
            <span class="cat-card-text">
              <span class="cat-card-num">0${i + 1}</span>
              <strong>${c.label}</strong>
              <small>${c.tagline}</small>
            </span>
          </a>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section section-tight" id="signatures">
      <div class="container">
        <header class="section-head" data-reveal>
          <p class="eyebrow">House Favourites</p>
          <h2>The ones everybody orders.</h2>
        </header>
      </div>
      <div class="rail" data-reveal>
        ${signatures.map(menuCard).join('')}
      </div>
    </section>

    <section class="section deal" id="deal">
      <div class="container deal-grid">
        <div class="deal-media" data-reveal>
          <img src="/images/cats/combo_meal.jpg" alt="GHC 150 combo: burger, fries, sauce and a slushy" loading="lazy" decoding="async" />
        </div>
        <div class="deal-copy" data-reveal>
          <p class="eyebrow">The Deal</p>
          <h2><span class="price">GHC 150</span> Combo + Slushy</h2>
          <p>A stacked burger, golden fries, dipping sauce and your pick of any slushy. One order, one price.</p>
          <ul class="deal-list">
            <li>Classic cheeseburger</li>
            <li>Golden fries &amp; sauce</li>
            <li>Any slushy on the menu</li>
          </ul>
          <a class="btn btn-primary" href="${orderLink('the GHC 150 Combo + Slushy')}" target="_blank" rel="noreferrer">Order the combo ${arrowIcon}</a>
        </div>
      </div>
    </section>

    <section class="section story" id="story">
      <div class="container story-grid">
        <div class="story-copy" data-reveal>
          <p class="eyebrow">Our Story</p>
          <h2>A classic burger bar with an icy twist.</h2>
          <p>The Slushify started in 2023 with a simple idea: honest burgers, crisp fries and slushies that look as good as they taste. Everything is made to order and served the way it should be — cold, hot and fast.</p>
          <dl class="stats">
            <div><dt>2023</dt><dd>Established</dd></div>
            <div><dt>11+</dt><dd>Slushy flavours</dd></div>
            <div><dt>150</dt><dd>GHC combo deal</dd></div>
          </dl>
        </div>
        <div class="story-media" data-reveal>
          <img class="story-img-a" src="${space.couple}" alt="Guests at a red booth under the Slushify sign" loading="lazy" decoding="async" />
          <img class="story-img-b" src="/images/cats/burger_1.jpg" alt="Cheeseburger with fries" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <section class="section" id="moments">
      <div class="container">
        <header class="section-head" data-reveal>
          <p class="eyebrow">Moments</p>
          <h2>Our people, our pours.</h2>
          <a class="link-arrow" href="${business.instagram}" target="_blank" rel="noreferrer">${business.instagramHandle} ${arrowIcon}</a>
        </header>
        <div class="moments-grid">
          ${moments
            .map(
              (m, i) => `
          <figure class="moment" data-reveal style="--d:${(i % 3) * 70}ms">
            <img src="${m.image}" alt="${m.alt}" loading="lazy" decoding="async" />
          </figure>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section visit" id="visit">
      <div class="container visit-grid">
        <div class="visit-media" data-reveal>
          <img src="${space.booth}" alt="Red booths and the Slushify sign inside the shop" loading="lazy" decoding="async" />
        </div>
        <div class="visit-copy" data-reveal>
          <p class="eyebrow">Visit Us</p>
          <h2>Pull up a booth.</h2>
          <ul class="visit-list">
            <li><span>Address</span>${business.address}</li>
            <li><span>Orders</span><a href="${orderLink()}" target="_blank" rel="noreferrer">${business.orderPhoneLabel}</a></li>
            <li><span>Events &amp; catering</span><a href="${eventLink}" target="_blank" rel="noreferrer">${business.eventPhoneLabel}</a></li>
          </ul>
          <div class="btn-row">
            <a class="btn btn-primary" href="${business.mapUrl}" target="_blank" rel="noreferrer">Get directions ${arrowIcon}</a>
            <a class="btn btn-ghost" href="${eventLink}" target="_blank" rel="noreferrer">Book an event</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${renderFooter()}
`

bindChrome()
