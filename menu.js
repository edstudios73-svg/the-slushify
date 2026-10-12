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
  renderHeader,
  renderFooter,
  bindChrome,
} from './shared.js'

const groupIcon = { original: 'cup', fruity: 'cup', cocktails: 'martini', food: 'burger', combos: 'combo' }

const groupSection = (g) => `
  <section class="menu-group menu-group--${g.kind}" id="${g.id}" aria-labelledby="${g.id}-title">
    <header class="menu-group-head" data-reveal>
      <span class="cat-icon">${icon(groupIcon[g.id])}</span>
      <div>
        <p class="script">${g.script}</p>
        <h2 class="display" id="${g.id}-title">${g.title}</h2>
        <p class="cat-blurb">${g.blurb}</p>
      </div>
      ${g.kind === 'slushy' ? '<span class="spiked-pill"><b>GHC 50</b> classic · <b>GHC 80</b> with alcohol</span>' : ''}
    </header>
    <div class="${g.kind === 'slushy' ? 'slush-grid' : 'coupon-grid'}">
      ${g.items.map((item, i) => menuCard(g, item, i)).join('')}
    </div>
  </section>`

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
        ${menu.map((g) => `<a href="#${g.id}" data-tab="${g.id}">${icon(groupIcon[g.id], 'icon icon-sm')} ${g.title.replace('Slushify ', '')}</a>`).join('')}
      </div>
    </nav>

    <div class="menu-board light">
      <div class="container">
        ${menu.map(groupSection).join('')}
      </div>
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
