import './style.css'
import {
  orderLink,
  menu,
  categories,
  arrowIcon,
  drip,
  icon,
  rings,
  frameMarkup,
  menuCard,
  carousel,
  bindCarousels,
  renderHeader,
  renderFooter,
  bindChrome,
} from './shared.js'

/** Each menu group is served as a numbered course, like a classic bill of fare. */
const courses = {
  original: { no: 'I', name: 'The Pour', note: 'House slushies', banner: '/images/hd/slushy-8.webp', banner2: '/images/hd/slushy-4.webp', theme: 'red' },
  fruity: { no: 'II', name: 'The Orchard', note: 'Pure fruit, frozen', banner: '/images/hd/slushy-1.webp', banner2: '/images/hd/slushy-10.webp', theme: 'cream' },
  cocktails: { no: 'III', name: 'After Dark', note: 'Cocktails · 18+', banner: '/images/hd/slushy-6.webp', banner2: '/images/hd/slushy-11.webp', theme: 'ink' },
  food: { no: 'IV', name: 'The Bite', note: 'Burgers & sides', banner: '/images/hd/burger-3.webp', banner2: '/images/hd/fries-3.webp', theme: 'cream' },
  combos: { no: 'V', name: 'The Feast', note: 'Combo meals', banner: '/images/hd/combo-meal.webp', banner2: '/images/hd/combo-meal-5.webp', theme: 'red' },
}

const priceRange = (g) => {
  const p = g.items.map((i) => i.price)
  const lo = Math.min(...p)
  const hi = Math.max(...p)
  return lo === hi ? `GHC ${lo}` : `GHC ${lo}–${hi}`
}

const billOfFare = `
  <section class="bill light" aria-labelledby="bill-title">
    <div class="container">
      <div class="bill-card" data-reveal>
        <p class="bill-est">Est. 2023 · East Legon, Accra</p>
        <h2 class="bill-title" id="bill-title"><span class="script">bill of</span> Fare</h2>
        <p class="bill-sub">Five courses, from the first pour to the full feast.</p>
        <ol class="bill-list">
          ${menu
            .map((g) => {
              const c = courses[g.id]
              return `
          <li>
            <a href="#${g.id}">
              <span class="bill-no">${c.no}</span>
              <span class="bill-name"><b>${c.name}</b><small>${g.title.replace('Slushify ', '')} · ${g.items.length} items</small></span>
              <span class="bill-dots" aria-hidden="true"></span>
              <span class="bill-price">${priceRange(g)}</span>
            </a>
          </li>`
            })
            .join('')}
        </ol>
        <p class="bill-foot">Any slushy with alcohol <b>GHC 80</b> · Order on WhatsApp <b>+233 50 994 9405</b></p>
      </div>
    </div>
  </section>`

const courseSection = (g) => {
  const c = courses[g.id]
  return `
  <section class="course course--${c.theme} menu-group menu-group--${g.kind}" id="${g.id}" aria-labelledby="${g.id}-title">
    <div class="course-banner">
      <div class="container course-banner-inner">
        <div class="course-mark" data-reveal>
          <span class="course-label">Course</span>
          <span class="course-no">${c.no}</span>
        </div>
        <div class="course-copy" data-reveal>
          <p class="script">${g.script}</p>
          <h2 class="display" id="${g.id}-title">${c.name}</h2>
          <p class="course-note">${c.note} · <b>${priceRange(g)}</b></p>
          <p class="cat-blurb">${g.blurb}</p>
        </div>
        <div class="course-photos" aria-hidden="true" data-reveal>
          <img src="${c.banner}" alt="" loading="lazy" decoding="async" />
          <img src="${c.banner2}" alt="" loading="lazy" decoding="async" />
        </div>
      </div>
      ${drip(`drip-${c.theme === 'cream' ? 'cream-2' : c.theme} drip-flip`)}
    </div>
    <div class="course-body light">
      <div class="container">
        ${g.kind === 'slushy' ? '<p class="spiked-pill"><b>GHC 50</b> classic · <b>GHC 80</b> with alcohol</p>' : ''}
      </div>
      ${carousel(g.items.map((item, i) => menuCard(g, item, i)), { label: c.name, cls: `carousel--${g.kind}`, autoplay: true })}
    </div>
  </section>`
}

document.querySelector('#app').innerHTML = `
  ${renderHeader({ active: 'menu' })}

  <main id="main" class="menu-page">
    <section class="page-hero light">
      <div class="hero-bg" aria-hidden="true"></div>
      ${rings('page-rings')}
      <div class="container">
        <p class="kicker">Cocktail / Mocktail Bar <span>·</span> East Legon</p>
        <h1><span class="script">the</span><span class="display display-xl display-outline">Menu</span></h1>
        <p class="page-hero-lead">Slushies from GHC 50, cocktails, burgers, sides and combos. Tap any item to order on WhatsApp.</p>
      </div>
    </section>

    <nav class="menu-tabs light" aria-label="Menu sections">
      <div class="menu-tabs-track">
        ${menu.map((g) => `<a href="#${g.id}" data-tab="${g.id}"><span class="tab-no">${courses[g.id].no}</span> ${courses[g.id].name}</a>`).join('')}
      </div>
    </nav>

    ${billOfFare}

    <div class="courses">
      ${menu.map(courseSection).join('')}
    </div>

    <section class="promo promo--menu section-drip" id="deal">
      ${drip('drip-cream')}
      <div class="container promo-grid">
        <div class="promo-art">
          ${frameMarkup({ image: '/images/cats/combo_meal_3.jpg', alt: 'Combo with a pink slushy at the booth', price: 'GHC 150' }, 'ticket')}
        </div>
        <div class="promo-copy">
          <p class="script">the deal is back</p>
          <h2 class="display">Combo + Slushy</h2>
          <p class="promo-price"><span>GHC</span>150</p>
          <a class="btn btn-white" href="${orderLink('the GHC 150 Combo + Slushy')}" target="_blank" rel="noreferrer">Order the deal ${arrowIcon}</a>
        </div>
      </div>
    </section>
  </main>

  ${renderFooter()}
`

bindChrome()
bindCarousels()

// Highlight the tab for the section in view
const tabs = [...document.querySelectorAll('[data-tab]')]
const setActive = (id) => {
  tabs.forEach((t) => {
    const on = t.dataset.tab === id
    t.classList.toggle('active', on)
    if (on) t.setAttribute('aria-current', 'true')
    else t.removeAttribute('aria-current')
  })
  const active = tabs.find((t) => t.dataset.tab === id)
  active?.parentElement.scrollTo({ left: active.offsetLeft - 16, behavior: 'smooth' })
}
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
    { rootMargin: '-45% 0px -50% 0px' }
  )
  menu.forEach((g) => io.observe(document.getElementById(g.id)))
}

// Old and category links (#slushies, #burgers, #fries…) land on the right section
const aliases = { slushies: 'original', burgers: 'food', fries: 'food', sides: 'food' }
const hash = location.hash.slice(1).toLowerCase()
const target = aliases[hash] || (menu.some((g) => g.id === hash) ? hash : categories.find((c) => c.id === hash)?.groups[0])
if (target) document.getElementById(target)?.scrollIntoView()
