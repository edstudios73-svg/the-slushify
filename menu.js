import './style.css'
import {
  orderLink,
  categories,
  menuItems,
  arrowIcon,
  drip,
  burst,
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
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container">
        <p class="pill">East Legon · Accra</p>
        <h1 class="retro retro-light retro-xl">The Menu</h1>
        <p class="page-hero-lead">Slushies, burgers, fries and combos. Tap any item to order on WhatsApp.</p>
      </div>
    </section>

    <section class="cream section-drip" id="combos">
      ${drip('drip-choc')}
      <div class="container">
        <div class="deal-card" data-reveal>
          <div class="deal-img">
            <img src="/images/cats/combo_meal.jpg" alt="GHC 150 combo: burger, fries, sauce and a slushy" loading="lazy" decoding="async" />
            ${burst('GHC<br>150', 'deal-burst')}
          </div>
          <div class="deal-copy">
            <p class="deal-kicker">The deal is back</p>
            <h2 class="retro retro-light">Combo + Slushy</h2>
            <p>Burger, fries, sauce and your pick of any slushy.</p>
            <a class="btn btn-mustard" href="${orderLink('the GHC 150 Combo + Slushy')}" target="_blank" rel="noreferrer">Order the combo ${arrowIcon}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="cream menu-board" id="menu-board">
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
