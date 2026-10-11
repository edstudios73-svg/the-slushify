import './style.css'
import {
  orderLink,
  categories,
  menuItems,
  arrowIcon,
  drip,
  icon,
  rings,
  frameMarkup,
  dishCard,
  renderHeader,
  renderFooter,
  bindChrome,
} from './shared.js'

const filters = [{ id: 'all', short: 'All', icon: 'martini' }, ...categories]

document.querySelector('#app').innerHTML = `
  ${renderHeader({ active: 'menu' })}

  <main id="main" class="menu-page">
    <section class="page-hero light">
      <div class="hero-bg" aria-hidden="true"></div>
      ${rings('page-rings')}
      <div class="container">
        <p class="kicker">Cocktail / Mocktail Bar <span>·</span> East Legon</p>
        <h1><span class="script">the</span><span class="display display-xl display-outline">Menu</span></h1>
        <p class="page-hero-lead">Tap any item to order on WhatsApp.</p>
      </div>
    </section>

    <section class="promo promo--menu section-drip" id="combos">
      ${drip('drip-cream')}
      <div class="container promo-grid">
        <div class="promo-art">
          ${frameMarkup({ image: '/images/cats/combo_meal_3.jpg', alt: 'GHC 150 combo with a pink slushy at the booth', price: 'GHC 150' }, 'ticket')}
        </div>
        <div class="promo-copy">
          <p class="script">the deal is back</p>
          <h2 class="display">Combo + Slushy</h2>
          <p class="promo-price"><span>GHC</span>150</p>
          <a class="btn btn-white" href="${orderLink('the GHC 150 Combo + Slushy')}" target="_blank" rel="noreferrer">Order the combo ${arrowIcon}</a>
        </div>
      </div>
      ${drip('drip-red drip-flip')}
    </section>

    <section class="menu-board light after-drip" id="menu-board">
      <div class="container">
        <div class="filters" role="group" aria-label="Filter menu">
          ${filters
            .map(
              (f, i) =>
                `<button class="chip" type="button" data-filter="${f.id}" aria-pressed="${i === 0}">${icon(f.icon, 'icon icon-sm')} ${f.short}</button>`
            )
            .join('')}
        </div>
        <div class="menu-grid" data-menu-grid>
          ${menuItems.map(dishCard).join('')}
        </div>
      </div>
    </section>
  </main>

  ${renderFooter()}
`

const chips = [...document.querySelectorAll('.chip')]
const cards = [...document.querySelectorAll('[data-menu-grid] .dish')]

const applyFilter = (id) => {
  chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.filter === id)))
  cards.forEach((card) => {
    card.hidden = id !== 'all' && card.dataset.category !== id
  })
}

chips.forEach((chip) => chip.addEventListener('click', () => applyFilter(chip.dataset.filter)))

bindChrome()

const hash = location.hash.slice(1).toLowerCase()
if (hash === 'combos') {
  document.getElementById('combos')?.scrollIntoView()
} else if (categories.some((c) => c.id === hash)) {
  applyFilter(hash)
  document.getElementById('menu-board')?.scrollIntoView()
}
