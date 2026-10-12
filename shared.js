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

const hd = (file) => `/images/hd/${file}.webp`

/* ———————————————————————————————— The real Slushify menu */
export const menu = [
  {
    id: 'original',
    group: 'slushies',
    kind: 'slushy',
    title: 'Slushify Original',
    script: 'house pours',
    blurb: 'Our signature slushies. Want it spiked? Any slushy with alcohol is GHC 80.',
    items: [
      { name: 'Red Passion', desc: 'Mixed fruit, grenadine syrup', price: 50, image: hd('slushy-8'), c1: '#e3242b', c2: '#ff8a80' },
      { name: 'Blue Pill', desc: 'Passion, blue curaçao, soda', price: 50, image: hd('slushy-4'), c1: '#1565c0', c2: '#64b5f6' },
      { name: 'Lemon Tease', desc: 'Fresh lemon, soda, passion', price: 50, image: hd('slushy-2'), c1: '#f9a825', c2: '#fff176' },
      { name: 'Pink Antidote', desc: 'Cranberry, grenadine, lemon', price: 50, image: hd('slushy-9'), c1: '#d81b60', c2: '#f8bbd0' },
      { name: 'Illusion', desc: 'Grape, Vimto, soda', price: 50, image: hd('slushy-5'), c1: '#6a1b9a', c2: '#ce93d8' },
    ],
  },
  {
    id: 'fruity',
    group: 'slushies',
    kind: 'slushy',
    title: 'Slushify Fruity',
    script: 'pure fruit',
    blurb: 'Straight-up fruit flavours, frozen. With alcohol: GHC 80.',
    items: [
      { name: 'Mango', desc: 'Sweet, sunny mango', price: 50, image: hd('slushy-1'), c1: '#f57c00', c2: '#ffd54f' },
      { name: 'Grape', desc: 'Deep purple grape', price: 50, image: hd('slushy-3'), c1: '#4a148c', c2: '#b39ddb' },
      { name: 'Watermelon', desc: 'Fresh watermelon', price: 50, image: hd('slushy-6'), c1: '#e53935', c2: '#a5d6a7' },
      { name: 'Pineapple', desc: 'Tropical pineapple', price: 50, image: hd('slushy-10'), c1: '#f9a825', c2: '#fff59d' },
      { name: 'Passion', desc: 'Tangy passion fruit', price: 50, image: hd('slushy-11'), c1: '#ef6c00', c2: '#ffcc80' },
    ],
  },
  {
    id: 'cocktails',
    group: 'cocktails',
    kind: 'coupon',
    title: 'Slushify Cocktails',
    script: 'after dark',
    blurb: 'Mixed at the bar. 18+ only, please drink responsibly.',
    items: [
      { name: 'Strawberry / Passion Fruit Mojito', desc: 'White rum, mint, lime juice, sugar and soda water', price: 80, image: hd('slushy-7') },
      { name: 'Mimosa', desc: 'Champagne and orange juice', price: 120, image: hd('slushy-1') },
      { name: 'Sex on the Beach', desc: 'Vodka, peach schnapps, orange juice and cranberry juice', price: 120, image: hd('slushy-2') },
      { name: 'Pornstar Martini', desc: 'Vodka, passion fruit liqueur, vanilla syrup, passion fruit purée, with a shot of Prosecco on the side', price: 120, image: hd('slushy-11') },
      { name: 'Piña Colada', desc: 'Coconut syrup, pineapple, tequila', price: 120, image: hd('slushy-10') },
      { name: 'Passion / Strawberry Margarita', desc: 'Margarita syrup, tequila', price: 120, image: hd('slushy-6') },
    ],
  },
  {
    id: 'food',
    group: 'food',
    kind: 'coupon',
    title: 'Slushify Sides',
    script: 'something to bite',
    blurb: 'Burgers, wings and crispy bites to go with your pour.',
    items: [
      { name: 'Beef Burger', desc: 'Cheese, bacon (optional)', price: 80, image: hd('burger-3') },
      { name: 'Fried Chicken Wings', desc: 'Crispy wings with dip. Best with an Illusion.', price: 60, image: hd('slushy-5'), pair: true },
      { name: 'Nuggets (6 pieces)', desc: 'Golden chicken nuggets. Best with a Blue Pill.', price: 60, image: hd('slushy-4'), pair: true },
      { name: 'Turkey', desc: 'With pepper sauce. Best with a Pink Antidote.', price: 100, image: hd('slushy-9'), pair: true },
      { name: 'Fried Yam', desc: 'Crispy fried yam', price: 40, image: hd('fries-1') },
      { name: 'Extra Fries', desc: 'A side of golden fries', price: 20, image: hd('fries-3') },
    ],
  },
  {
    id: 'combos',
    group: 'combos',
    kind: 'coupon',
    title: 'Combo Meals',
    script: 'best value',
    blurb: 'Full plates, one price.',
    items: [
      { name: 'Combo Meal: Burger, Fries & Wings', desc: 'Beef burger, fries and fried chicken wings', price: 120, image: hd('combo-meal-5') },
      { name: 'Combo Meal: Fried Yam & Turkey', desc: 'Fried yam with turkey', price: 120, image: hd('combo-meal-6') },
    ],
  },
]

export const categories = [
  { id: 'slushies', label: 'Slushies', short: 'Slushies', script: 'Pour', blurb: 'Original and fruity flavours from GHC 50. Spiked: GHC 80.', icon: 'cup', groups: ['original', 'fruity'] },
  { id: 'cocktails', label: 'Cocktails', short: 'Cocktails', script: 'Shake', blurb: 'Mojitos, margaritas, martinis and more.', icon: 'martini', groups: ['cocktails'] },
  { id: 'food', label: 'Burgers & Sides', short: 'Food', script: 'Stack', blurb: 'Burgers, wings, nuggets, turkey and fries.', icon: 'burger', groups: ['food'] },
  { id: 'combos', label: 'Combo Meals', short: 'Combos', script: 'Share', blurb: 'Full plates from GHC 120.', icon: 'combo', groups: ['combos'] },
]

export const menuGroup = (id) => menu.find((g) => g.id === id)

export const moments = [
  { image: img('slushy_moments_10.jpg'), alt: 'Guest in an AC/DC tee holding a Slushify cup', caption: 'Peace & pours' },
  { image: img('slushy_moments_2.jpg'), alt: 'Guest in pink with a slushy', caption: 'Pretty in pink' },
  { image: img('slushy_moments_5.jpg'), alt: 'Guest in a yellow cardigan smiling with a slushy', caption: 'Golden hour' },
  { image: img('slushy_moments_8.jpg'), alt: 'Two friends with slushies', caption: 'Bring a friend' },
  { image: img('slushy_moments_6.jpg'), alt: 'Guest pointing at his Slushify cup', caption: 'This one’s mine' },
  { image: img('slushy_moments_7.jpg'), alt: 'Guest in polka dots with a yellow slushy', caption: 'Sunny side' },
  { image: img('slushy_moments.jpg'), alt: 'Guest in green holding a slushy', caption: 'Fresh fit' },
  { image: img('slushy_moments_4.jpg'), alt: 'Guest with phone and slushy', caption: 'Post it' },
  { image: img('slushy_moments_9.jpg'), alt: 'Couple with slushies', caption: 'Date night' },
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

/** Melting edge between sections — colour comes from the `drip-*` class. */
export const drip = (cls = '') =>
  `<svg class="drip ${cls}" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 0H1440V24H1424Q1414 24 1414 34V84A14 14 0 0 1 1386 84V34Q1386 24 1376 24H1299Q1289 24 1289 34V53A17 17 0 0 1 1255 53V34Q1255 24 1245 24H1203Q1193 24 1193 34V81A17 17 0 0 1 1159 81V34Q1159 24 1149 24H1101Q1091 24 1091 34V87A11 11 0 0 1 1069 87V34Q1069 24 1059 24H989Q979 24 979 34V47A11 11 0 0 1 957 47V34Q957 24 947 24H915Q905 24 905 34V81A17 17 0 0 1 871 81V34Q871 24 861 24H787Q777 24 777 34V53A17 17 0 0 1 743 53V34Q743 24 733 24H707Q697 24 697 34V41A17 17 0 0 1 663 41V34Q663 24 653 24H621Q611 24 611 34V59A11 11 0 0 1 589 59V34Q589 24 579 24H531Q521 24 521 34V41A17 17 0 0 1 487 41V34Q487 24 477 24H400Q390 24 390 34V84A14 14 0 0 1 362 84V34Q362 24 352 24H307Q297 24 297 34V53A17 17 0 0 1 263 53V34Q263 24 253 24H192Q182 24 182 34V44A14 14 0 0 1 154 44V34Q154 24 144 24H112Q102 24 102 34V70A14 14 0 0 1 74 70V34Q74 24 64 24H0Z" fill="currentColor"/></svg>`

/** Line-art icons, drawn to match the martini glasses in the logo. */
const iconPaths = {
  martini: '<path d="M5 5h22L16 17z"/><path d="M16 17v10"/><path d="M10 27h12"/><path d="M21 9l4-5"/><circle cx="25.5" cy="3.5" r="1.5"/>',
  cup: '<path d="M10 11h12l-1.6 16.5a1.6 1.6 0 0 1-1.6 1.5h-5.6a1.6 1.6 0 0 1-1.6-1.5z"/><path d="M9 11c0-3 3-5 7-5s7 2 7 5"/><path d="M18 6l2-4h3"/><path d="M11 17h10"/>',
  burger: '<path d="M5 14c0-5 5-8 11-8s11 3 11 8z"/><path d="M4 18h24"/><path d="M5 22c0 2.5 2 4 4 4h14c2 0 4-1.5 4-4z"/><path d="M12 10h.01M16 9h.01M20 10h.01"/>',
  fries: '<path d="M8 14l2 14h12l2-14"/><path d="M8 14c2 2.5 5 3.5 8 3.5s6-1 8-3.5"/><path d="M11 14V5M14.5 15V3M18 15V4M21 14V6"/>',
  combo: '<path d="M4 17c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5z"/><path d="M3.5 20h17"/><path d="M4.5 23c0 1.5 1.2 2.5 2.5 2.5h10c1.3 0 2.5-1 2.5-2.5z"/><path d="M22 12h6l-1.2 14h-3.6z"/><path d="M25 12l1.5-6h2"/>',
  chat: '<path d="M6 25l1.6-4.8A10 10 0 1 1 11 24.6z"/><path d="M12.5 12.5c.5 2.5 2.5 4.5 5 5"/>',
  pin: '<path d="M16 29s9-8.2 9-15a9 9 0 0 0-18 0c0 6.8 9 15 9 15z"/><circle cx="16" cy="14" r="3.2"/>',
  smile: '<circle cx="16" cy="16" r="12"/><path d="M11 19c1.2 1.8 3 2.7 5 2.7s3.8-.9 5-2.7"/><path d="M12 12.5h.01M20 12.5h.01"/>',
}

export const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 32 32" aria-hidden="true" focusable="false">${iconPaths[name]}</svg>`

/** Logo-style swoosh rings, reused as decoration and as an image frame. */
export const rings = (cls = '') => `
  <svg class="rings ${cls}" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
    <circle cx="100" cy="100" r="97" class="ring-full" />
    <circle cx="100" cy="100" r="90" class="ring-arc ring-arc-a" pathLength="100" />
    <circle cx="100" cy="100" r="85" class="ring-arc ring-arc-b" pathLength="100" />
    <circle cx="100" cy="100" r="90" class="ring-arc ring-arc-c" pathLength="100" />
    <circle cx="100" cy="100" r="85" class="ring-arc ring-arc-d" pathLength="100" />
  </svg>`

const badge = (item) =>
  item.price
    ? `<span class="frame-badge frame-badge--price">${item.price}</span>`
    : item.tag
      ? `<span class="frame-badge">${item.tag}</span>`
      : ''

/** Each category gets its own frame so the menu reads at a glance. */
export function frameMarkup(item, frame) {
  const pic = `<img src="${item.image}" alt="${item.alt || item.name}" loading="lazy" decoding="async" />`
  switch (frame) {
    case 'ring':
      return `<div class="frame frame-ring"><span class="frame-ring-img">${pic}</span>${rings('frame-rings')}${badge(item)}</div>`
    case 'cup':
      return `<div class="frame frame-cup"><span class="cup">${pic}</span>${badge(item)}</div>`
    case 'stamp':
      return `<div class="frame frame-stamp"><span class="stamp">${pic}</span>${badge(item)}</div>`
    case 'arch':
      return `<div class="frame frame-arch"><span class="arch-in">${pic}</span>${badge(item)}</div>`
    case 'ticket':
      return `<div class="frame frame-ticket"><span class="ticket">${pic}<span class="ticket-stub"><b>${item.price || 'Combo'}</b><small>Admit one</small></span></span></div>`
    case 'polaroid':
      return `<figure class="frame frame-polaroid"><span class="tape" aria-hidden="true"></span>${pic}<figcaption>${item.caption || ''}</figcaption></figure>`
    default:
      return `<div class="frame">${pic}</div>`
  }
}

const ghc = (price) => `<small>GHC</small><b>${price}</b>`

/** Slushy frame: a dome-topped card tinted with the flavour. */
export function slushyCard(item) {
  return `
  <article class="slush" style="--c1:${item.c1};--c2:${item.c2}">
    <div class="slush-art">
      <span class="slush-cup"><img src="${item.image}" alt="${item.name} slushy" loading="lazy" decoding="async" /></span>
      <span class="price-coin">${item.price}</span>
    </div>
    <h3 class="slush-name">${item.name}</h3>
    <p>${item.desc}</p>
    <a class="dish-order" href="${orderLink(`a ${item.name} slushy`)}" target="_blank" rel="noreferrer">Order ${arrow}</a>
  </article>`
}

/** Coupon frame: cream ticket with a dashed cut line and a tear-off price stub. */
export function couponCard(item, i = 0, label = '') {
  const art = `<span class="coupon-art${item.pair ? ' coupon-art--pair' : ''}"><img src="${item.image}" alt="${item.pair ? `Slushy to pair with ${item.name}` : item.name}" loading="lazy" decoding="async" />${item.pair ? '<span class="pair-tag">+ slushy</span>' : ''}</span>`
  return `
  <article class="coupon">
    ${art}
    <div class="coupon-body">
      <span class="coupon-no">No. ${String(i + 1).padStart(2, '0')}${label ? ` · ${label}` : ''}${item.tag ? ` · <em>${item.tag}</em>` : ''}</span>
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <a class="dish-order" href="${orderLink(item.name)}" target="_blank" rel="noreferrer">Order ${arrow}</a>
    </div>
    <div class="coupon-stub" aria-label="GHC ${item.price}">${ghc(item.price)}</div>
    <span class="coupon-cut" aria-hidden="true">✂</span>
  </article>`
}

export function menuCard(group, item, i) {
  return group.kind === 'slushy' ? slushyCard(item) : couponCard(item, i, group.title.replace('Slushify ', ''))
}

const chevron = (dir) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${dir === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}" /></svg>`

export function carousel(slides, { label, cls = '', autoplay = false } = {}) {
  return `
  <div class="carousel ${cls}" data-carousel${autoplay ? ' data-autoplay' : ''} role="region" aria-roledescription="carousel" aria-label="${label}">
    <div class="carousel-track" data-track tabindex="0">
      ${slides.map((s, i) => `<div class="slide" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${slides.length}">${s}</div>`).join('')}
    </div>
    <div class="carousel-ui">
      <button class="carousel-btn" type="button" data-prev aria-label="Previous">${chevron('prev')}</button>
      <div class="carousel-dots" data-dots></div>
      <button class="carousel-btn" type="button" data-next aria-label="Next">${chevron('next')}</button>
    </div>
  </div>`
}

export function bindCarousels() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  document.querySelectorAll('[data-carousel]').forEach((root) => {
    const track = root.querySelector('[data-track]')
    const slides = [...track.children]
    const dotsWrap = root.querySelector('[data-dots]')
    if (!slides.length) return

    dotsWrap.innerHTML = slides
      .map((_, i) => `<button type="button" class="carousel-dot" data-dot="${i}" aria-label="Go to slide ${i + 1}"></button>`)
      .join('')
    const dots = [...dotsWrap.children]

    const step = () => slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0)
    const atEnd = () => track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
    const go = (i) => track.scrollTo({ left: slides[Math.max(0, Math.min(i, slides.length - 1))].offsetLeft - slides[0].offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' })

    const sync = () => {
      const i = Math.round(track.scrollLeft / step())
      dots.forEach((d, di) => d.classList.toggle('active', di === Math.min(i, slides.length - 1)))
      root.classList.toggle('is-static', track.scrollWidth <= track.clientWidth + 4)
    }

    root.querySelector('[data-prev]').addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }))
    root.querySelector('[data-next]').addEventListener('click', () => (atEnd() ? go(0) : track.scrollBy({ left: step(), behavior: 'smooth' })))
    dots.forEach((d) => d.addEventListener('click', () => go(Number(d.dataset.dot))))
    track.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    sync()

    if (root.hasAttribute('data-autoplay') && !reduceMotion) {
      let paused = false
      const pause = () => (paused = true)
      const resume = () => (paused = false)
      root.addEventListener('pointerenter', pause)
      root.addEventListener('pointerleave', resume)
      root.addEventListener('focusin', pause)
      root.addEventListener('focusout', resume)
      track.addEventListener('touchstart', pause, { passive: true })
      setInterval(() => {
        if (paused || document.hidden || root.classList.contains('is-static')) return
        atEnd() ? go(0) : track.scrollBy({ left: step(), behavior: 'smooth' })
      }, 3200)
    }
  })
}

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
        <span class="brand-word"><small>the</small>Slushify</span>
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
  const band = ['Slushies', 'Mocktails', 'Burgers', 'Fries', 'Combos']
    .map((w) => `<span>${w}</span><i>✦</i>`)
    .join('')
  return `
  <div class="band" aria-hidden="true"><div class="band-track">${band}${band}${band}${band}</div></div>
  <footer class="site-footer">
    <div class="container footer-cta">
      ${rings('footer-rings')}
      <p class="script">Thirsty?</p>
      <h2 class="display">Order on WhatsApp</h2>
      <a class="btn btn-red" href="${orderLink()}" target="_blank" rel="noreferrer">${icon('chat', 'icon icon-sm')} Start your order</a>
    </div>
    <div class="container footer-grid">
      <div class="footer-brand">
        <a class="brand" href="/index.html" aria-label="The Slushify — home">
          <img class="brand-mark" src="${business.logo}" alt="" width="52" height="52" loading="lazy" />
          <span class="brand-word"><small>the</small>Slushify</span>
        </a>
        <p>Slushies, burgers, fries and good company. East Legon, Accra.</p>
      </div>
      <div class="footer-col">
        <h3>Explore</h3>
        <a href="/menu.html">Menu</a>
        <a href="/menu.html#combos">Combo Meals · GHC 120</a>
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
