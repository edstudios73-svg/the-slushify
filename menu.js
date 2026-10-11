import './style.css'
import {
  orderLink,
  menuItems,
  menuFilterCategories,
  renderHeader,
  renderFooter,
  bindChrome,
  frameMarkup,
} from './shared.js'

const comboHero = menuItems.find((i) => i.id === 'combo-1')?.image || '/images/cats/combo_meal.jpg'
const sideHero = menuItems.find((i) => i.id === 'slushy-8')?.image || '/images/cats/slushy_8.jpg'
const dealShot = menuItems.find((i) => i.id === 'combo-3')?.image || '/images/cats/combo_meal_3.jpg'

const renderGrid = (filter = 'All') => {
  const items = menuItems.filter((item) => filter === 'All' || item.category === filter)
  return items
    .map(
      (item, i) => `
    <article class="menu-card menu-card-${(i % 3) + 1}" id="${item.id}">
      ${frameMarkup(item.image, item.name, item.frame, item.badge)}
      <div class="menu-card-body">
        <div class="menu-card-top">
          <span class="menu-cat">${item.category}</span>
          <span class="menu-price">${item.price}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.note}</p>
        <a class="btn btn-red btn-sm" href="${orderLink(item.name)}" target="_blank" rel="noreferrer">Enquire</a>
      </div>
    </article>`
    )
    .join('')
}

document.querySelector('#app').innerHTML = `
  ${renderHeader({ active: 'menu' })}

  <main class="menu-page">
    <section class="menu-hero">
      <div class="menu-hero-copy">
        <p class="pill">Full menu · East Legon</p>
        <h1>What We’re Pouring &amp; Plating</h1>
        <p>
          Browse the freeze, the stacks, the crunch, and the combo deals — then enquire on WhatsApp
          to lock in your order.
        </p>
      </div>
      <div class="menu-hero-art">
        ${frameMarkup(comboHero, 'GHC 150 combo meal plus slushy', 'ticket', '150')}
        ${frameMarkup(sideHero, 'Smoke red slush', 'neon', 'ICY')}
      </div>
    </section>

    <section class="menu-deal" id="combos">
      <div class="menu-deal-copy">
        <p class="eyebrow">Limited heat</p>
        <h2>GHC 150 Combo Meal + A Slushy</h2>
        <p>Burger. Grilled chicken. Fries. Sauce. Plus your pick of a Slushify freeze. The deal is back.</p>
        <a class="btn btn-red" href="${orderLink('the GHC 150 Combo + Slushy')}" target="_blank" rel="noreferrer">Order the combo</a>
      </div>
      <div class="menu-deal-visual">
        ${frameMarkup(dealShot, 'GHC 150 combo meal plus slushy', 'polaroid', 'DEAL')}
      </div>
    </section>

    <section class="menu-board">
      <div class="menu-filters" role="tablist" aria-label="Menu categories">
        ${menuFilterCategories
          .map(
            (cat, i) =>
              `<button class="filter-chip${i === 0 ? ' active' : ''}" data-filter="${cat}" role="tab">${cat}</button>`
          )
          .join('')}
      </div>
      <div class="menu-grid" data-menu-grid>
        ${renderGrid('All')}
      </div>
    </section>
  </main>

  ${renderFooter()}
`

const grid = document.querySelector('[data-menu-grid]')
document.querySelectorAll('.filter-chip').forEach((chip) =>
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach((c) => c.classList.remove('active'))
    chip.classList.add('active')
    grid.innerHTML = renderGrid(chip.dataset.filter)
  })
)

bindChrome()

const hashFilter = location.hash.slice(1).toLowerCase()
const hashChip = [...document.querySelectorAll('.filter-chip')].find(
  (chip) => chip.dataset.filter.toLowerCase() === hashFilter
)

if (location.hash === '#combos') {
  document.getElementById('combos')?.scrollIntoView({ behavior: 'auto' })
} else if (hashChip) {
  hashChip.click()
  document.querySelector('.menu-board')?.scrollIntoView({ behavior: 'auto' })
}
