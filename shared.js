export const business = {
  name: 'The Slushify',
  address: 'JRMX+2P9, Boundary Road, East Legon, Accra',
  instagram: 'https://www.instagram.com/slushify._/',
  instagramHandle: '@slushify._',
  tiktok: 'https://www.tiktok.com/@slushify_y',
  orderPhone: '233509949405',
  orderPhoneLabel: '+233 50 994 9405',
  eventPhone: '233575978888',
  eventPhoneLabel: '+233 57 597 8888',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=THE+SLUSHIFY+JRMX%2B2P9+Accra',
  logo: '/images/logo.png',
}

export const wa = (phone, message) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

export const orderLink = (item = 'the menu') =>
  wa(business.orderPhone, `Hello Slushify! I'd like to order ${item}.`)

export const eventLink = wa(
  business.eventPhone,
  "Hello Slushify! I'd like to enquire about event services."
)

const img = (file) => `/images/cats/${file}`

export const categories = [
  { id: 'slushies', label: 'Slushies', tagline: 'Icy, bold, made to order', image: img('slushy_8.jpg') },
  { id: 'burgers', label: 'Burgers', tagline: 'Stacked, melty, classic', image: img('burger_3.jpg') },
  { id: 'fries', label: 'Fries', tagline: 'Golden, crisp, salted', image: img('fries_3.jpg') },
  { id: 'combos', label: 'Combos', tagline: 'Burger, fries & a slushy', image: img('combo_meal_3.jpg') },
]

/** Menu — names describe what is in each photo. */
export const menuItems = [
  { id: 'slushy-8', name: 'Smoke Red Slush', category: 'slushies', note: 'Strawberry and mint crown, served under frozen mist.', image: img('slushy_8.jpg'), tag: 'Signature' },
  { id: 'slushy-1', name: 'Citrus Red Freeze', category: 'slushies', note: 'Frozen red pour in a stem glass with a fresh orange wheel.', image: img('slushy_1.jpg') },
  { id: 'slushy-2', name: 'Lime Splash Red', category: 'slushies', note: 'Crushed red ice, poured to the brim, finished with lime.', image: img('slushy_2.jpg') },
  { id: 'slushy-3', name: 'Blue Cherry Ice', category: 'slushies', note: 'Electric blue slush crowned with a cherry.', image: img('slushy_3.jpg') },
  { id: 'slushy-4', name: 'Blue Lagoon Cup', category: 'slushies', note: 'Blue freeze in the Slushify cup with lemon and blueberries.', image: img('slushy_4.jpg') },
  { id: 'slushy-5', name: 'Red & Blue Duo', category: 'slushies', note: 'Two cups, two flavours — made for sharing.', image: img('slushy_5.jpg') },
  { id: 'slushy-6', name: 'Strawberry Daiquiri Freeze', category: 'slushies', note: 'Frozen strawberry in a salt-rimmed stem glass.', image: img('slushy_6.jpg') },
  { id: 'slushy-7', name: 'Double Strawberry Chill', category: 'slushies', note: 'Twin coupes with fresh strawberries and lime.', image: img('slushy_7.jpg') },
  { id: 'slushy-9', name: 'Sunset Cup', category: 'slushies', note: 'Pink-red freeze piled high with cherry and orange.', image: img('slushy_9.jpg') },
  { id: 'slushy-10', name: 'Pineapple Smoke Bowl', category: 'slushies', note: 'Served in a real pineapple with mist pouring over.', image: img('slushy_10.jpg'), tag: 'Showstopper' },
  { id: 'slushy-11', name: 'Cherry Horn', category: 'slushies', note: 'Bright red freeze in our signature horn glass.', image: img('slushy_11.jpg') },

  { id: 'burger-3', name: 'Classic Cheeseburger', category: 'burgers', note: 'Beef patty, melted cheese, lettuce and tomato on a toasted bun.', image: img('burger_3.jpg'), tag: 'Best seller' },
  { id: 'burger-1', name: 'Burger & Fries', category: 'burgers', note: 'Our cheeseburger with a side of golden fries.', image: img('burger_1.jpg') },
  { id: 'burger-4', name: 'Share Tray', category: 'burgers', note: 'Four cheeseburgers and fries — built for the table.', image: img('burger_4.jpg') },

  { id: 'fries-3', name: 'Basket & Dips', category: 'fries', note: 'Wire-basket fries with ketchup and house cream dip.', image: img('fries_3.jpg') },
  { id: 'fries-1', name: 'Paper Bag Fries', category: 'fries', note: 'Crisp fries with herbs and ketchup on the side.', image: img('fries_1.jpg') },
  { id: 'fries-2', name: 'Carton Fries', category: 'fries', note: 'Overflowing carton, crisp and salted.', image: img('fries_2.jpg') },
  { id: 'fries-4', name: 'Red Scoop Fries', category: 'fries', note: 'The classic red carton, piled high.', image: img('fries_4.jpg') },
  { id: 'fries-5', name: 'Fry Basket', category: 'fries', note: 'Golden fries in a paper-lined basket with ketchup.', image: img('fries_5.jpg') },

  { id: 'combo-1', name: 'GHC 150 Combo + Slushy', category: 'combos', price: 'GHC 150', note: 'Burger, fries, sauce and your pick of slushy.', image: img('combo_meal.jpg'), tag: 'Deal' },
  { id: 'combo-3', name: 'Booth Combo', category: 'combos', price: 'GHC 150', note: 'Burger, fry basket and a pink freeze at the booth.', image: img('combo_meal_3.jpg') },
  { id: 'combo-2', name: 'Table for Two', category: 'combos', note: 'Two full combos with fries, peppers and sauces.', image: img('combo_meal_2.jpg') },
  { id: 'combo-4', name: 'Shake & Burger', category: 'combos', note: 'Cheeseburger, fries and a tall topped shake.', image: img('combo_meal_4.jpg') },
  { id: 'combo-5', name: 'Burger & Cola', category: 'combos', note: 'Cheeseburger, fries, ketchup and an ice-cold cola.', image: img('combo_meal_5.jpg') },
  { id: 'combo-6', name: 'Garden Plate', category: 'combos', note: 'Cheeseburger and fries with dip, served al fresco.', image: img('combo_meal_6.jpg') },
]

export const signatureIds = ['slushy-8', 'burger-3', 'slushy-10', 'combo-1', 'fries-3', 'slushy-7']

export const moments = [
  { image: img('slushy_moments_10.jpg'), alt: 'Guest in an AC/DC tee holding a Slushify cup' },
  { image: img('slushy_moments_2.jpg'), alt: 'Guest in pink with a slushy' },
  { image: img('slushy_moments_5.jpg'), alt: 'Guest in a yellow cardigan smiling with a slushy' },
  { image: img('slushy_moments_8.jpg'), alt: 'Two friends with slushies' },
  { image: img('slushy_moments_6.jpg'), alt: 'Guest pointing at his Slushify cup' },
  { image: img('slushy_moments_7.jpg'), alt: 'Guest in polka dots with a yellow slushy' },
]

export const space = {
  wall: img('the_space_2.jpg'),
  booth: img('the_space.jpg'),
  couple: img('moments.jpg'),
}

export const navLinks = [
  { href: '/menu.html', label: 'Menu', key: 'menu' },
  { href: '/index.html#story', label: 'Our Story', key: 'story' },
  { href: '/index.html#moments', label: 'Moments', key: 'moments' },
  { href: '/index.html#visit', label: 'Visit', key: 'visit' },
]

const arrow = '<svg class="icon-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 12h15M13 6l6 6-6 6" /></svg>'
export const arrowIcon = arrow

export function renderHeader({ active = 'home' } = {}) {
  const links = navLinks
    .map((l) => `<a href="${l.href}"${l.key === active ? ' aria-current="page"' : ''}>${l.label}</a>`)
    .join('')
  return `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" data-header>
    <div class="header-inner">
      <a class="brand" href="/index.html" aria-label="The Slushify — home">
        <img class="brand-mark" src="${business.logo}" alt="" width="44" height="44" />
        <span class="brand-word"><small>The</small>Slushify</span>
      </a>
      <nav class="nav-desktop" aria-label="Primary">${links}</nav>
      <a class="btn btn-primary btn-sm header-cta" href="${orderLink()}" target="_blank" rel="noreferrer">Order Now</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <div class="nav-mobile" id="mobile-nav" hidden>
    <nav aria-label="Mobile">
      <a href="/index.html">Home</a>
      ${links}
    </nav>
    <a class="btn btn-primary" href="${orderLink()}" target="_blank" rel="noreferrer">Order on WhatsApp ${arrow}</a>
    <p class="nav-mobile-meta">${business.address}</p>
  </div>`
}

const igIcon = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 1-1.5s.9-.8 1.5-1c.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.2 0-3.5 0-4.8.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.3 1-.4 2-.1 1.2-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.4 2 .2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2 1 .3 2 .4 1.2.1 1.6.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.3-1 .4-2 .1-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.2-1-.3-2-.4-1.3-.1-1.6-.1-4.8-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm6.2-.9a1.2 1.2 0 1 1 0 2.3 1.2 1.2 0 0 1 0-2.3Z"/></svg>`
const ttIcon = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14.6 3h2.1c.2 1.5 1 2.8 2.2 3.7 1 .7 2.1 1.1 3.3 1.2v2.2c-1.5 0-2.9-.4-4.2-1.2v6.6c0 3.5-2.8 6.4-6.3 6.5A6.4 6.4 0 0 1 5.1 15c0-3.5 2.8-6.4 6.3-6.4.3 0 .7 0 1 .1v2.3a4 4 0 0 0-1-.1 4.1 4.1 0 1 0 4.1 4.1V3Z"/></svg>`

export function renderFooter() {
  const year = new Date().getFullYear()
  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a class="brand" href="/index.html" aria-label="The Slushify — home">
          <img class="brand-mark" src="${business.logo}" alt="" width="52" height="52" loading="lazy" />
          <span class="brand-word"><small>The</small>Slushify</span>
        </a>
        <p>Slushies, burgers, fries and good company. East Legon, Accra.</p>
      </div>
      <div class="footer-col">
        <h3>Explore</h3>
        <a href="/menu.html">Menu</a>
        <a href="/menu.html#combos">GHC 150 Combo</a>
        <a href="/index.html#story">Our Story</a>
        <a href="/index.html#visit">Visit</a>
      </div>
      <div class="footer-col">
        <h3>Contact</h3>
        <a href="${orderLink()}" target="_blank" rel="noreferrer">Orders · ${business.orderPhoneLabel}</a>
        <a href="${eventLink}" target="_blank" rel="noreferrer">Events · ${business.eventPhoneLabel}</a>
        <a href="${business.mapUrl}" target="_blank" rel="noreferrer">Get directions</a>
      </div>
      <div class="footer-col">
        <h3>Follow</h3>
        <div class="footer-social">
          <a href="${business.instagram}" target="_blank" rel="noreferrer" aria-label="Instagram ${business.instagramHandle}">${igIcon}</a>
          <a href="${business.tiktok}" target="_blank" rel="noreferrer" aria-label="TikTok @slushify_y">${ttIcon}</a>
        </div>
      </div>
    </div>
    <div class="container footer-base">
      <p>© ${year} The Slushify. All rights reserved.</p>
      <p>Est. 2023 · Accra</p>
    </div>
  </footer>`
}

export function menuCard(item) {
  return `
  <article class="dish" data-category="${item.category}">
    <div class="dish-media">
      <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" />
      ${item.tag ? `<span class="dish-tag">${item.tag}</span>` : ''}
    </div>
    <div class="dish-body">
      <div class="dish-head">
        <h3>${item.name}</h3>
        ${item.price ? `<span class="dish-price">${item.price}</span>` : ''}
      </div>
      <p>${item.note}</p>
      <a class="dish-order" href="${orderLink(item.name)}" target="_blank" rel="noreferrer">Order ${arrow}</a>
    </div>
  </article>`
}

export function bindChrome() {
  const toggle = document.querySelector('.menu-toggle')
  const panel = document.getElementById('mobile-nav')
  const header = document.querySelector('[data-header]')

  const setOpen = (open) => {
    document.body.classList.toggle('nav-open', open)
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    panel.hidden = !open
  }

  if (toggle && panel) {
    toggle.addEventListener('click', () => setOpen(!document.body.classList.contains('nav-open')))
    panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)))
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) setOpen(false)
    })
  }

  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  }

  const reveals = document.querySelectorAll('[data-reveal]')
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }),
      { rootMargin: '0px 0px -10% 0px' }
    )
    reveals.forEach((el) => io.observe(el))
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'))
  }
}
