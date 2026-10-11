import './style.css'
import {
  orderLink,
  categories,
  menuItems,
  arrowIcon,
  renderHeader,
  renderFooter,
  menuCard,
  bindChrome,
} from './shared.js'

const filters = [{ id: 'all', label: 'All' }, ...categories]

document.querySelector('#app').innerHTML = `
  ${renderHeader({ active: 'menu' })}

  <main id="main" class="menu-page">
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">East Legon · Accra</p>
        <h1>The Menu</h1>
        <p class="page-hero-lead">Slushies, burgers, fries and combos. Tap any item to order on WhatsApp.</p>
      </div>
    </section>

    <section class="section section-flush" id="combos">
      <div class="container">
        <div class="deal-banner">
          <img src="/images/cats/combo_meal_3.jpg" alt="GHC 150 combo with a pink slushy at the booth" loading="lazy" decoding="async" />
          <div class="deal-banner-copy">
            <p class="eyebrow">The Deal</p>
            <h2><span class="price">GHC 150</span> Combo + Slushy</h2>
            <p>Burger, fries, sauce and your pick of slushy.</p>
            <a class="btn btn-primary" href="${orderLink('the GHC 150 Combo + Slushy')}" target="_blank" rel="noreferrer">Order the combo ${arrowIcon}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section menu-board" id="menu-board">
      <div class="container">
        <div class="filters" role="group" aria-label="Filter menu">
          ${filters
            .map(
              (f, i) =>
                `<button class="chip" type="button" data-filter="${f.id}" aria-pressed="${i === 0}">${f.label}</button>`
            )
            .join('')}
        </div>
        <div class="menu-grid" data-menu-grid>
          ${menuItems.map(menuCard).join('')}
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
