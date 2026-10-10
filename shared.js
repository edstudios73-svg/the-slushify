export const business = {
  name: 'THE SLUSHIFY',
  address: 'JRMX+2P9, Boundary Road, Accra, Ghana',
  instagram: 'https://www.instagram.com/slushify._/',
  tiktok: 'https://www.tiktok.com/@slushify_y',
  orderPhone: '233509949405',
  eventPhone: '233575978888',
  contactPhone: '233550699788',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=THE+SLUSHIFY+JRMX%2B2P9+Accra',
  logo: '/images/logo.png',
}

export function logoMarkup({ className = '', size = 'nav' } = {}) {
  const classes = ['brand-logo', `brand-logo--${size}`, className].filter(Boolean).join(' ')
  return `
  <img
    class="${classes}"
    src="${business.logo}"
    alt="The Slushify"
    width="512"
    height="512"
    decoding="async"
  />`
}

export const wa = (phone, message) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

export const orderLink = (item = 'the menu') =>
  wa(business.orderPhone, `Hello Slushify! I'd like to enquire about ${item}.`)

export const eventLink = wa(
  business.eventPhone,
  "Hello Slushify! I'd like to enquire about event services."
)

const frames = ['neon', 'polaroid', 'blob', 'ticket', 'stamp', 'sticker', 'slant', 'drip']
const frameAt = (i) => frames[i % frames.length]

const cat = (folder) => `/images/cats/${folder}`

/** Product menu — real categorized brand shots */
export const menuItems = [
  // Slushies
  { id: 'slushy-1', name: 'Signature Red Freeze', category: 'Slushies', price: 'Ask', note: 'Bold crimson ice — the classic Slushify pour.', image: cat('slushy_1.jpg'), frame: frameAt(0), badge: 'CLASSIC' },
  { id: 'slushy-2', name: 'Sunset Layer Slush', category: 'Slushies', price: 'Ask', note: 'Red-to-gold layers piled high in the cup.', image: cat('slushy_2.jpg'), frame: frameAt(1), badge: 'LAYERED' },
  { id: 'slushy-3', name: 'Berry Blush Cup', category: 'Slushies', price: 'Ask', note: 'Pink berry freeze with that icy soft peak.', image: cat('slushy_3.jpg'), frame: frameAt(2), badge: 'FRUIT' },
  { id: 'slushy-4', name: 'Cherry Horn Pour', category: 'Slushies', price: 'Ask', note: 'Dramatic red freeze in signature glassware.', image: cat('slushy_4.jpg'), frame: frameAt(3), badge: 'WOW' },
  { id: 'slushy-5', name: 'Citrus Rim Red', category: 'Slushies', price: 'Ask', note: 'Bright red freeze with orange on the rim.', image: cat('slushy_5.jpg'), frame: frameAt(4), badge: 'BOLD' },
  { id: 'slushy-6', name: 'Stem Glass Daiquiri', category: 'Slushies', price: 'Ask', note: 'Frozen strawberry energy in a stemmed glass.', image: cat('slushy_6.jpg'), frame: frameAt(5), badge: 'NIGHT' },
  { id: 'slushy-7', name: 'Double Strawberry Chill', category: 'Slushies', price: 'Ask', note: 'Twin coupe pours with lime & fresh berries.', image: cat('slushy_7.jpg'), frame: frameAt(6), badge: 'SHARE' },
  { id: 'slushy-8', name: 'Smoke Red Slush', category: 'Slushies', price: 'Ask', note: 'Strawberry-mint crown with frozen mist.', image: cat('slushy_8.jpg'), frame: frameAt(7), badge: 'SIGNATURE' },
  { id: 'slushy-9', name: 'Pineapple Smoke Bowl', category: 'Slushies', price: 'Ask', note: 'Real pineapple vessel with fog pouring over.', image: cat('slushy_9.jpg'), frame: frameAt(0), badge: 'TROPICAL' },
  { id: 'slushy-10', name: 'Festival Fusion Cup', category: 'Slushies', price: 'Ask', note: 'Hand-held red freeze with grape & orange.', image: cat('slushy_10.jpg'), frame: frameAt(1), badge: 'EVENT' },
  { id: 'slushy-11', name: 'Cotton Candy Red', category: 'Slushies', price: 'Ask', note: 'Stem pour topped with candy cloud vibes.', image: cat('slushy_11.jpg'), frame: frameAt(2), badge: 'SWEET' },

  // Burgers
  { id: 'burger-1', name: 'Slushify Cheeseburger', category: 'Burgers', price: 'Ask', note: 'Sesame bun, melted cheese, lettuce, tomato — stacked right.', image: cat('burger_1.jpg'), frame: frameAt(3), badge: 'STACKED' },
  { id: 'burger-3', name: 'Hands-On Double Stack', category: 'Burgers', price: 'Ask', note: 'Two burgers, white wrap, cheese pull energy.', image: cat('burger_3.jpg'), frame: frameAt(4), badge: 'DOUBLE' },
  { id: 'burger-4', name: 'Tray of Four', category: 'Burgers', price: 'Ask', note: 'Four wrapped cheeseburgers + fries — made to share.', image: cat('burger_4.jpg'), frame: frameAt(5), badge: 'SHARE' },

  // Fries
  { id: 'fries-1', name: 'Salted Fry Cone', category: 'Fries', price: 'Ask', note: 'Golden fries spilling from a paper cone with ketchup.', image: cat('fries_1.jpg'), frame: frameAt(6), badge: 'GOLDEN' },
  { id: 'fries-2', name: 'White Carton Fries', category: 'Fries', price: 'Ask', note: 'Overflow carton fries — crisp, salted, classic.', image: cat('fries_2.jpg'), frame: frameAt(7), badge: 'CRISP' },
  { id: 'fries-3', name: 'Basket & Dips', category: 'Fries', price: 'Ask', note: 'Wire basket fries with ketchup + cream dip.', image: cat('fries_3.jpg'), frame: frameAt(0), badge: 'DIP' },
  { id: 'fries-4', name: 'Red Carton Fries', category: 'Fries', price: 'Ask', note: 'Icon red scoop carton piled high.', image: cat('fries_4.jpg'), frame: frameAt(1), badge: 'ICON' },
  { id: 'fries-5', name: 'Paper Bag Fries', category: 'Fries', price: 'Ask', note: 'Rustic bag pour with herbs and ketchup on the side.', image: cat('fries_5.jpg'), frame: frameAt(2), badge: 'STREET' },

  // Combo Meals
  { id: 'combo-1', name: 'GHC 150 Combo + Slushy', category: 'Combo Meals', price: 'GHC 150', note: 'Burger, grilled chicken, fries, sauce + a slushy.', image: cat('combo_meal.jpg'), frame: frameAt(3), badge: 'HOT DEAL' },
  { id: 'combo-2', name: 'Combo Meal Deal', category: 'Combo Meals', price: 'GHC 150', note: 'Burger, fry basket, dipping sauce & frozen pour.', image: cat('combo_meal_2.jpg'), frame: frameAt(4), badge: 'IS BACK' },
  { id: 'combo-3', name: 'Booth Combo Energy', category: 'Combo Meals', price: 'GHC 150', note: 'Full table combo with pink freeze — the deal is back.', image: cat('combo_meal_3.jpg'), frame: frameAt(5), badge: '150' },
  { id: 'combo-4', name: 'Board Combo Plate', category: 'Combo Meals', price: 'Ask', note: 'Burger, fries, chicken & ketchup on the branded board.', image: cat('combo_meal_4.jpg'), frame: frameAt(6), badge: 'FULL' },
  { id: 'combo-5', name: 'Shake & Stack Combo', category: 'Combo Meals', price: 'Ask', note: 'Burger, fries bowl, and a tall topped shake.', image: cat('combo_meal_5.jpg'), frame: frameAt(7), badge: 'TRIPLE' },
  { id: 'combo-6', name: 'Dark Plate Combo', category: 'Combo Meals', price: 'Ask', note: 'Burger, fries, ketchup & cola — classic night plate.', image: cat('combo_meal_6.jpg'), frame: frameAt(0), badge: 'NIGHT' },
]

/** Lifestyle / space — not orderable products */
export const momentItems = [
  { id: 'm-1', name: 'Pink Fit Freeze', caption: 'Slushy moment outside A3', image: cat('slushy_moments.jpg'), frame: frameAt(1), badge: 'VIBE' },
  { id: 'm-2', name: 'Phone Smile', caption: 'Sharing the pour', image: cat('slushy_moments_2.jpg'), frame: frameAt(2), badge: 'MOMENT' },
  { id: 'm-4', name: 'Yellow Cardigan Glow', caption: 'Layered cup, big smile', image: cat('slushy_moments_4.jpg'), frame: frameAt(3), badge: 'GLOW' },
  { id: 'm-6', name: 'Mango Smile', caption: 'Yellow freeze happiness', image: cat('slushy_moments_6.jpg'), frame: frameAt(5), badge: 'SUNNY' },
  { id: 'm-7', name: 'Teal Twin Energy', caption: 'Two cups, one vibe', image: cat('slushy_moments_7.jpg'), frame: frameAt(6), badge: 'DUO' },
  { id: 'm-8', name: 'Street Style Pair', caption: 'Blue + sunset layers', image: cat('slushy_moments_8.jpg'), frame: frameAt(7), badge: 'CREW' },
  { id: 'm-9', name: 'Peace & Pour', caption: 'AC/DC chill mode', image: cat('slushy_moments_9.jpg'), frame: frameAt(0), badge: 'PEACE' },
  { id: 'm-10', name: 'Teal Glass Moment', caption: 'Green drip, gold bangles', image: cat('slushy_moments_10.jpg'), frame: frameAt(1), badge: 'DRIP' },
  { id: 'm-0', name: 'Point the Pour', caption: 'Layered red-green legend', image: cat('moments.jpg'), frame: frameAt(2), badge: 'LEGEND' },
]

export const spaceItems = [
  { id: 'space-1', name: 'The Sign', caption: 'Script logo over the red booth', image: cat('the_space.jpg'), frame: 'polaroid', badge: 'SPACE' },
  { id: 'space-2', name: 'The Booth', caption: 'Red booths, warm lights, menu on the table', image: cat('the_space_2.jpg'), frame: 'neon', badge: 'EAST LEGON' },
  { id: 'space-3', name: 'Wall Close-Up', caption: 'Slushify lettering in the room', image: cat('slushy_moments_5.jpg'), frame: 'stamp', badge: 'HOME' },
]

/** Homepage category rails */
export const homeCategories = [
  {
    id: 'slushies',
    title: 'Slushies',
    eyebrow: 'The freeze',
    blurb: 'Signature icy pours — smoke, layers, pineapple bowls & stem-glass nights.',
    type: 'menu',
    categories: ['Slushies'],
  },
  {
    id: 'burgers',
    title: 'Burgers',
    eyebrow: 'The stacks',
    blurb: 'Cheese-pull cheeseburgers, double stacks, and share trays.',
    type: 'menu',
    categories: ['Burgers'],
  },
  {
    id: 'fries',
    title: 'Fries',
    eyebrow: 'The crunch',
    blurb: 'Cartons, cones, baskets — golden and salted.',
    type: 'menu',
    categories: ['Fries'],
  },
  {
    id: 'combos',
    title: 'Combo Meals',
    eyebrow: 'The deals',
    blurb: 'GHC 150 combo + slushy energy and full-plate stacks.',
    type: 'menu',
    categories: ['Combo Meals'],
  },
  {
    id: 'moments',
    title: 'Slushy Moments',
    eyebrow: 'The vibes',
    blurb: 'Real faces, real pours — East Legon energy on camera.',
    type: 'moments',
  },
  {
    id: 'space',
    title: 'The Space',
    eyebrow: 'Come through',
    blurb: 'Red booths, script logo, warm lights — home of Slushify.',
    type: 'space',
  },
]

export const itemsByCategories = (cats) =>
  menuItems.filter((item) => cats.includes(item.category))

export const menuFilterCategories = ['All', 'Slushies', 'Burgers', 'Fries', 'Combo Meals']

export function frameMarkup(src, alt, frame = 'polaroid', badge = '') {
  return `
  <div class="frame frame-${frame}">
    <div class="frame-inner">
      <img src="${src}" alt="${alt}" loading="lazy" />
    </div>
    ${badge ? `<span class="frame-badge">${badge}</span>` : ''}
    <span class="frame-spark" aria-hidden="true"></span>
  </div>`
}

export function renderCarousel(id, items, { lifestyle = false } = {}) {
  return `
  <div class="carousel" data-carousel="${id}">
    <div class="carousel-head">
      <div class="carousel-dots" data-dots></div>
      <div class="carousel-nav">
        <button type="button" class="carousel-btn" data-prev aria-label="Previous">←</button>
        <button type="button" class="carousel-btn" data-next aria-label="Next">→</button>
      </div>
    </div>
    <div class="carousel-track" data-track>
      ${items
        .map((item) => {
          if (lifestyle) {
            return `
        <figure class="carousel-slide vibe-slide">
          ${frameMarkup(item.image, item.name, item.frame, item.badge)}
          <figcaption>${item.caption || item.name}</figcaption>
        </figure>`
          }
          return `
        <article class="carousel-slide">
          ${frameMarkup(item.image, item.name, item.frame, item.badge)}
          <div class="carousel-meta">
            <span class="menu-cat">${item.category}</span>
            <span class="menu-price">${item.price}</span>
          </div>
          <h3>${item.name}</h3>
          <p>${item.note}</p>
          <a class="btn btn-red btn-sm" href="${orderLink(item.name)}" target="_blank" rel="noreferrer">Enquire</a>
        </article>`
        })
        .join('')}
    </div>
  </div>`
}

export function bindCarousels() {
  document.querySelectorAll('[data-carousel]').forEach((root) => {
    const track = root.querySelector('[data-track]')
    const slides = [...track.querySelectorAll('.carousel-slide')]
    const dotsWrap = root.querySelector('[data-dots]')
    const prev = root.querySelector('[data-prev]')
    const next = root.querySelector('[data-next]')
    if (!slides.length) return

    dotsWrap.innerHTML = slides
      .map(
        (_, i) =>
          `<button type="button" class="carousel-dot${i === 0 ? ' active' : ''}" data-dot="${i}" aria-label="Go to slide ${i + 1}"></button>`
      )
      .join('')

    const dots = [...dotsWrap.querySelectorAll('[data-dot]')]
    let index = 0
    let timer

    const go = (i) => {
      index = (i + slides.length) % slides.length
      const left = slides[index].offsetLeft - track.offsetLeft
      track.scrollTo({ left, behavior: 'smooth' })
      dots.forEach((d, di) => d.classList.toggle('active', di === index))
    }

    const restart = () => {
      clearInterval(timer)
      timer = setInterval(() => go(index + 1), 4200)
    }

    prev.addEventListener('click', () => {
      go(index - 1)
      restart()
    })
    next.addEventListener('click', () => {
      go(index + 1)
      restart()
    })
    dots.forEach((d) =>
      d.addEventListener('click', () => {
        go(Number(d.dataset.dot))
        restart()
      })
    )

    track.addEventListener(
      'scroll',
      () => {
        const nearest = slides.reduce(
          (best, slide, i) => {
            const dist = Math.abs(slide.offsetLeft - track.scrollLeft - track.offsetLeft)
            return dist < best.dist ? { i, dist } : best
          },
          { i: 0, dist: Infinity }
        )
        index = nearest.i
        dots.forEach((d, di) => d.classList.toggle('active', di === index))
      },
      { passive: true }
    )

    restart()
  })
}

export function renderHeader({ active = 'home' } = {}) {
  return `
  <header class="site-header" data-header>
    <a class="logo" href="/index.html" aria-label="The Slushify home">
      ${logoMarkup({ size: 'nav' })}
      <span class="logo-wordmark">
        <span class="logo-the">The</span>
        <span class="logo-name">Slushify</span>
      </span>
    </a>
    <nav class="nav-desktop" aria-label="Primary">
      <a href="/index.html" class="${active === 'home' ? 'is-active' : ''}">Home</a>
      <a href="/menu.html" class="${active === 'menu' ? 'is-active' : ''}">Menu</a>
      <a href="/index.html#about">About</a>
      <a href="/index.html#moments">Moments</a>
      <a href="/index.html#space">The Space</a>
      <a href="/index.html#find-us">Find us</a>
    </nav>
    <a class="btn btn-red header-cta" href="${orderLink()}" target="_blank" rel="noreferrer">Order Now</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">
      <span></span><span></span><span></span>
      <b class="sr-only">Menu</b>
    </button>
  </header>
  <nav class="nav-mobile" id="mobile-nav" aria-label="Mobile">
    <div class="nav-mobile-brand">
      ${logoMarkup({ size: 'mobile' })}
      <p class="nav-mobile-title">The Slushify</p>
    </div>
    <a href="/index.html">Home</a>
    <a href="/menu.html">Menu</a>
    <a href="/index.html#about">About</a>
    <a href="/index.html#moments">Moments</a>
    <a href="/index.html#space">The Space</a>
    <a href="/index.html#find-us">Find us</a>
    <a class="btn btn-dark" href="${orderLink()}" target="_blank" rel="noreferrer">Order Now</a>
  </nav>`
}

export function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="footer-bar">
      <a class="footer-logo" href="/index.html" aria-label="The Slushify home">
        ${logoMarkup({ size: 'footer' })}
      </a>
      <p class="footer-copy">© 2026 The Slushify</p>
      <div class="footer-social">
        <a
          class="social-link"
          href="${business.instagram}"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram @slushify._"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 1-1.5s.9-.8 1.5-1c.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.2 0-3.5 0-4.8.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.3 1-.4 2-.1 1.2-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.4 2 .2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2 1 .3 2 .4 1.2.1 1.6.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.3-1 .4-2 .1-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.2-1-.3-2-.4-1.3-.1-1.6-.1-4.8-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm6.2-.9a1.2 1.2 0 1 1 0 2.3 1.2 1.2 0 0 1 0-2.3Z"
            />
          </svg>
        </a>
        <a
          class="social-link"
          href="${business.tiktok}"
          target="_blank"
          rel="noreferrer"
          aria-label="TikTok @slushify_y"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M14.6 3h2.1c.2 1.5 1 2.8 2.2 3.7 1 .7 2.1 1.1 3.3 1.2v2.2c-1.5 0-2.9-.4-4.2-1.2v6.6c0 3.5-2.8 6.4-6.3 6.5A6.4 6.4 0 0 1 5.1 15c0-3.5 2.8-6.4 6.3-6.4.3 0 .7 0 1 .1v2.3a4 4 0 0 0-1-.1 4.1 4.1 0 1 0 4.1 4.1V3Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>`
}

export function bindChrome() {
  const toggle = document.querySelector('.menu-toggle')
  const header = document.querySelector('[data-header]')
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open')
      toggle.setAttribute('aria-expanded', String(open))
    })
    document.querySelectorAll('.nav-mobile a').forEach((link) =>
      link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
        toggle.setAttribute('aria-expanded', 'false')
      })
    )
  }
  if (header) {
    window.addEventListener(
      'scroll',
      () => header.classList.toggle('scrolled', window.scrollY > 16),
      { passive: true }
    )
  }
}
