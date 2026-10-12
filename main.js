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

// Scroll-driven build: each disc eases between keyframes [x%, y%, scale, rotate, opacity]
const buildDiscs = [
  { key: 'combo', image: '/images/hd/combo-meal-5.webp' },
  { key: 'slushy', image: '/images/hd/slushy-8.webp' },
  { key: 'burger', image: '/images/hd/burger-3.webp' },
  { key: 'fries', image: '/images/hd/fries-3.webp' },
]

const buildScenes = [
  { no: 'The Slushify', title: 'Built Like a Legend', text: 'Frozen slushies, stacked burgers and golden fries. Scroll to see how we build it.' },
  { no: '01 · The Pour', title: 'Pour', text: 'Original and fruity slushies, mixed fresh and poured ice cold.', price: '50', cta: { label: 'See slushies', href: '/menu.html#original' } },
  { no: '02 · The Stack', title: 'Stack', text: 'A proper beef burger, stacked and served hot.', price: '80', cta: { label: 'See burgers', href: '/menu.html#food' } },
  { no: '03 · The Crunch', title: 'Crunch', text: 'Wings GHC 60, fried yam GHC 40, extra fries GHC 20.', price: '20', cta: { label: 'See sides', href: '/menu.html#food' } },
  { no: '04 · The Combo', title: 'The Combo', text: 'Burger, fries and wings in one plate. Message us and we get it going.', price: '120', cta: { label: 'Order a combo meal', href: orderLink('a Combo Meal'), ext: true } },
]

const buildFrames = {
  //            scene 0              1                    2                    3                    4
  combo: [[0, 0, 1.05, -4, 1], [-74, -48, 0.5, -14, 0.9], [-72, 68, 0.48, 8, 0.9], [-66, 72, 0.48, -10, 0.9], [0, 0, 1.08, 0, 1]],
  slushy: [[0, 0, 0.4, 0, 0], [0, 0, 1.1, 0, 1], [-76, -46, 0.48, -12, 0.95], [76, -50, 0.48, 10, 0.95], [-86, 38, 0.6, -12, 1]],
  burger: [[0, 0, 0.4, 0, 0], [76, -48, 0.48, 12, 0.95], [0, 0, 1.1, 0, 1], [-82, -30, 0.48, -8, 0.95], [86, 34, 0.6, 10, 1]],
  fries: [[0, 0, 0.4, 0, 0], [66, 74, 0.48, -8, 0.95], [80, 44, 0.48, 12, 0.95], [0, 0, 1.1, 0, 1], [70, 78, 0.5, 6, 1]],
}

const mix = (a, b, t) => a + (b - a) * t
// Short holds and an overshoot so every move snaps into place
const hold = (f) => {
  const t = Math.min(1, Math.max(0, (f - 0.08) / 0.62))
  const c = 1.9
  return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2)
}

const bindBuild = () => {
  const track = document.querySelector('[data-build]')
  if (!track) return
  const discs = Object.fromEntries([...track.querySelectorAll('[data-disc]')].map((el) => [el.dataset.disc, el]))
  const scenes = [...track.querySelectorAll('.build-scene')]
  const dots = [...track.querySelectorAll('.build-dots li')]
  const last = buildScenes.length - 1
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches
  let on = -1

  const render = (p) => {
    const t = Math.min(last, Math.max(0, p * last))
    const i = Math.min(last - 1, Math.floor(t))
    const e = hold(t - i)
    for (const [key, el] of Object.entries(discs)) {
      const a = buildFrames[key][i]
      const b = buildFrames[key][i + 1]
      const [x, y, s, r, o] = a.map((v, n) => mix(v, b[n], e))
      const punch = Math.sin(Math.PI * Math.min(1, Math.max(0, e)))
      const spin = punch * (key === 'combo' || key === 'burger' ? 40 : -40)
      el.style.transform = `translate(${x}%, ${y}%) rotate(${r + spin}deg) scale(${s + punch * 0.18})`
      el.style.opacity = o
      el.style.zIndex = Math.round(s * 10)
    }
    track.style.setProperty('--p', p.toFixed(3))
    const now = Math.round(t)
    if (now !== on) {
      on = now
      scenes.forEach((el, n) => el.classList.toggle('is-on', n === now))
      dots.forEach((el, n) => el.classList.toggle('is-on', n === now))
    }
  }

  if (still) {
    track.classList.add('is-still')
    render(1)
    return
  }

  let ticking = false
  const update = () => {
    ticking = false
    const rect = track.getBoundingClientRect()
    const span = rect.height - window.innerHeight
    render(Math.min(1, Math.max(0, -rect.top / span)))
  }
  const queue = () => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(update)
    }
  }
  addEventListener('scroll', queue, { passive: true })
  addEventListener('resize', queue)
  update()
}

// Slim order bar that appears once the hero is behind you
const bindOrderBar = () => {
  const bar = document.querySelector('.order-bar')
  const hero = document.getElementById('hero')
  const footer = document.querySelector('.site-footer, footer')
  if (!bar || !hero) return
  const check = () => {
    const past = hero.getBoundingClientRect().bottom < 0
    const atEnd = footer && footer.getBoundingClientRect().top < window.innerHeight - 40
    const b = document.getElementById('build')?.getBoundingClientRect()
    const inBuild = b && b.top < innerHeight * 0.5 && b.bottom > innerHeight * 0.5
    bar.classList.toggle('is-on', past && !atEnd && !inBuild)
  }
  addEventListener('scroll', check, { passive: true })
  check()
}

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
          <a class="hero-seal" href="/menu.html#combos" aria-label="Combo meal GHC 120">
            <span>GHC</span><b>120</b><span>Combo</span>
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


    <section class="build" id="build" aria-label="How we build it">
      <div class="build-track" data-build>
        <div class="build-stage">
          ${rings('build-rings')}
          <div class="build-discs" aria-hidden="true">
            ${buildDiscs.map((d) => `<div class="bd" data-disc="${d.key}"><img src="${d.image}" alt="" width="640" height="640" loading="lazy" decoding="async" /></div>`).join('')}
          </div>
          <div class="build-copy container">
            ${buildScenes
              .map(
                (s, i) => `
            <div class="build-scene${i === 0 ? ' is-on' : ''}" data-scene="${i}">
              <p class="build-no">${s.no}</p>
              <h2 class="display">${s.title}</h2>
              <p class="build-text">${s.text}</p>
              ${s.price ? `<p class="build-price"><span>GHC</span>${s.price}</p>` : ''}
              ${s.cta ? `<a class="btn btn-red" href="${s.cta.href}" ${s.cta.ext ? 'target="_blank" rel="noreferrer"' : ''}>${s.cta.label} ${arrowIcon}</a>` : ''}
            </div>`
              )
              .join('')}
          </div>
          <ol class="build-dots" aria-hidden="true">${buildScenes.map((_, i) => `<li${i === 0 ? ' class="is-on"' : ''}></li>`).join('')}</ol>
          <p class="build-hint" aria-hidden="true">Scroll</p>
          <p class="build-ghost" aria-hidden="true"><span>Pour</span><span>Stack</span><span>Crunch</span><span>Combo</span></p>
        </div>
      </div>
      ${drip('drip-black-2 drip-flip')}
    </section>

    <section class="story light light-2 after-drip" id="story">
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
          ${frameMarkup({ image: '/images/hd/combo-meal-5.webp', alt: 'Combo meal: beef burger, fries and a cold cola', price: 'GHC 120' }, 'ticket')}
        </div>
        <div class="promo-copy" data-reveal>
          <p class="script">best value</p>
          <h2 class="display">Combo Meal</h2>
          <p class="promo-price"><span>GHC</span>120</p>
          <ul class="promo-list">
            <li>${icon('burger', 'icon icon-sm')} Burger</li>
            <li>${icon('fries', 'icon icon-sm')} Fries</li>
            <li>${icon('combo', 'icon icon-sm')} Wings</li>
          </ul>
          <a class="btn btn-white" href="${orderLink('a Combo Meal')}" target="_blank" rel="noreferrer">Order a combo meal ${arrowIcon}</a>
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

  <div class="order-bar" role="region" aria-label="Quick order">
    <p><b>Combo Meal · GHC 120</b><span>Order on WhatsApp</span></p>
    <a class="btn btn-red btn-sm" href="${orderLink('an order')}" target="_blank" rel="noreferrer">${icon('chat', 'icon icon-sm')} Order Now</a>
  </div>
`

bindChrome()
bindCarousels()
bindBuild()
bindOrderBar()
