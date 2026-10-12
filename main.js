import './style.css'
import {
  business,
  orderLink,
  eventLink,
  categories,
  menuGroup,
  menuCard,
  moments,
  space,
  arrowIcon,
  drip,
  icon,
  rings,
  frameMarkup,
  carousel,
  renderHeader,
  renderFooter,
  bindChrome,
  bindCarousels,
} from './shared.js'

document.body.classList.add('page-home')

const story = [
  { word: 'Pour.', image: '/images/cats/slushy_2.jpg', alt: 'Red slushy being poured into a glass' },
  { word: 'Stack.', image: '/images/cats/burger_4.jpg', alt: 'A tray of stacked cheeseburgers and fries' },
  { word: 'Chill.', image: space.couple, alt: 'Guests relaxing at a red booth under the Slushify sign' },
]

const steps = [
  { icon: 'cup', title: 'Pick', text: 'Slushy, cocktail, burger or a combo.' },
  { icon: 'chat', title: 'Message', text: 'Send your order on WhatsApp.' },
  { icon: 'smile', title: 'Enjoy', text: 'Pick up or pull up a booth.' },
]

const categorySection = (cat, i) => {
  const groups = cat.groups.map(menuGroup)
  const slides = groups.flatMap((g) => g.items.map((item, n) => menuCard(g, item, n)))
  const kind = groups[0].kind
  // cream → dark → cream-2 → cream, with drips where the colour changes
  const theme = ['light', 'is-alt', 'light light-2', 'light'][i] || 'light'
  const flip = ['drip-cream', 'drip-black-2', '', ''][i]
  const cls = ['cat-section', `cat-section--${kind}`, theme, i === 1 || i === 2 ? 'after-drip' : '']
  return `
    <section class="${cls.filter(Boolean).join(' ')}" id="${cat.id}">
      <div class="container cat-head" data-reveal>
        <span class="cat-icon">${icon(cat.icon)}</span>
        <div>
          <p class="script">${cat.script}</p>
          <h2 class="display">${cat.label}</h2>
          <p class="cat-blurb">${cat.blurb}</p>
        </div>
        <a class="btn btn-sm btn-view" href="/menu.html#${cat.id}">View all</a>
      </div>
      ${carousel(slides, { label: cat.label, cls: `carousel--${kind}` })}
      ${flip ? drip(`${flip} drip-flip`) : ''}
    </section>`
}

document.querySelector('#app').innerHTML = `
  ${renderHeader({ active: 'home' })}

  <main id="main">
    <section class="hero light" id="hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="kicker">Cocktail / Mocktail Bar <span>·</span> Est. 2023</p>
          <h1 class="hero-title">
            <span class="hero-the" aria-hidden="true">the</span>
            Good Food.
            <span class="hero-script">Great Vibes</span>
          </h1>
          <p class="hero-lead">Frozen slushies, mocktails, stacked burgers and golden fries in East Legon, Accra.</p>
          <div class="btn-row">
            <a class="btn btn-red" href="${orderLink('an order')}" target="_blank" rel="noreferrer">${icon('chat', 'icon icon-sm')} Order Now</a>
            <a class="btn btn-outline" href="/menu.html">View Menu</a>
          </div>
        </div>

        <figure class="hero-art">
          ${rings('hero-rings')}
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
          <a class="hero-seal" href="/menu.html#combos" aria-label="GHC 150 combo deal">
            <span>GHC</span><b>150</b><span>Combo</span>
          </a>
        </figure>
      </div>

      <nav class="container hero-cats" aria-label="What we serve">
        ${categories
          .map(
            (c) => `
        <a href="#${c.id}">
          ${icon(c.icon)}
          <span>${c.short}</span>
        </a>`
          )
          .join('')}
        <a href="#food">
          ${icon('fries')}
          <span>Sides</span>
        </a>
      </nav>
    </section>

    <div class="band band--red" aria-hidden="true">
      <div class="band-track">
        ${Array.from({ length: 4 }, () => '<span>Pour</span><i>✦</i><span>Stack</span><i>✦</i><span>Crunch</span><i>✦</i><span>Chill</span><i>✦</i>').join('')}
      </div>
    </div>

    <section class="story light light-2" id="story">
      <div class="container">
        <div class="story-grid">
          ${story
            .map(
              (s, i) => `
          <figure class="story-card" data-reveal style="--d:${i * 100}ms">
            <img src="${s.image}" alt="${s.alt}" loading="lazy" decoding="async" />
            <figcaption>${s.word}</figcaption>
          </figure>`
            )
            .join('')}
        </div>
        <p class="story-line" data-reveal>
          <span class="script">since 2023</span>
          A cocktail &amp; mocktail bar that also stacks a serious burger.
        </p>
      </div>
      <p class="ghost-word" aria-hidden="true">Slushify</p>
    </section>

    <section class="menu-intro light section-drip" id="menu">
      ${drip('drip-cream-2')}
      <div class="container" data-reveal>
        <p class="script">the</p>
        <h2 class="display display-xl">Menu</h2>
        <div class="menu-intro-tabs">
          ${categories.map((c) => `<a href="#${c.id}">${icon(c.icon, 'icon icon-sm')} ${c.short}</a>`).join('')}
        </div>
      </div>
    </section>

    ${categories.map(categorySection).join('')}

    <section class="promo section-drip" id="deal">
      ${drip('drip-cream')}
      <div class="container promo-grid">
        <div class="promo-art" data-reveal>
          ${frameMarkup({ image: '/images/cats/combo_meal.jpg', alt: 'GHC 150 combo: burger, fries, sauce and a slushy', price: 'GHC 150' }, 'ticket')}
        </div>
        <div class="promo-copy" data-reveal>
          <p class="script">the deal is back</p>
          <h2 class="display">Combo + Slushy</h2>
          <p class="promo-price"><span>GHC</span>150</p>
          <ul class="promo-list">
            <li>${icon('burger', 'icon icon-sm')} Burger</li>
            <li>${icon('fries', 'icon icon-sm')} Fries &amp; sauce</li>
            <li>${icon('cup', 'icon icon-sm')} Any slushy</li>
          </ul>
          <a class="btn btn-white" href="${orderLink('the GHC 150 Combo + Slushy')}" target="_blank" rel="noreferrer">Order the combo ${arrowIcon}</a>
        </div>
      </div>
      ${drip('drip-red drip-flip')}
    </section>

    <section class="steps light after-drip">
      <div class="container center-head" data-reveal>
        <p class="script">easy as</p>
        <h2 class="display">One, Two, Slush</h2>
      </div>
      <div class="container steps-grid">
        ${steps
          .map(
            (s, i) => `
        <div class="step" data-reveal style="--d:${i * 90}ms">
          <span class="step-num">0${i + 1}</span>
          ${icon(s.icon)}
          <h3>${s.title}</h3>
          <p>${s.text}</p>
        </div>`
          )
          .join('')}
      </div>
      ${drip('drip-cream drip-flip')}
    </section>

    <section class="people after-drip" id="moments">
      <div class="container vibe-head" data-reveal>
        <p class="vibe-kicker">
          Happiness in your hands
          <img src="${moments[1].image}" alt="" width="64" height="32" />
        </p>
        <h2 class="display display-xl display-outline">Feel the Vibe</h2>
        <p class="vibe-sub">Real faces, real pours. Tag <a href="${business.instagram}" target="_blank" rel="noreferrer">${business.instagramHandle}</a> to get featured.</p>
      </div>
      ${carousel(
        moments.map((m, i) => `<div class="tilt" style="--r:${[-3, 2, -1.5, 2.5, -2, 1.5, -2.5, 2, -1][i % 9]}deg">${frameMarkup(m, 'polaroid')}</div>`),
        { label: 'Our people', cls: 'carousel--people', autoplay: true }
      )}
      ${drip('drip-black-2 drip-flip')}
    </section>

    <section class="visit light after-drip" id="visit">
      <div class="container visit-grid">
        <div class="visit-art" data-reveal>
          ${rings('visit-rings')}
          <img src="${space.booth}" alt="Red booths and the Slushify sign inside the shop" loading="lazy" decoding="async" />
        </div>
        <div class="visit-copy" data-reveal>
          <p class="script">come through</p>
          <h2 class="display">Pull Up a Booth</h2>
          <ul class="visit-list">
            <li>${icon('pin', 'icon icon-sm')}<span>${business.address}</span></li>
            <li>${icon('chat', 'icon icon-sm')}<span>Orders · <a href="${orderLink()}" target="_blank" rel="noreferrer">${business.orderPhoneLabel}</a></span></li>
            <li>${icon('martini', 'icon icon-sm')}<span>Events · <a href="${eventLink}" target="_blank" rel="noreferrer">${business.eventPhoneLabel}</a></span></li>
          </ul>
          <div class="btn-row">
            <a class="btn btn-red" href="${business.mapUrl}" target="_blank" rel="noreferrer">Get directions ${arrowIcon}</a>
            <a class="btn btn-outline" href="${eventLink}" target="_blank" rel="noreferrer">Book an event</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${renderFooter()}
`

bindChrome()
bindCarousels()
