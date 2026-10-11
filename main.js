import './style.css'
import {
  business,
  orderLink,
  eventLink,
  categories,
  menuItems,
  signatureIds,
  moments,
  space,
  arrowIcon,
  drip,
  burst,
  renderHeader,
  renderFooter,
  bindChrome,
} from './shared.js'

document.body.classList.add('page-home')

const byId = (id) => menuItems.find((i) => i.id === id)
const signatures = signatureIds.map(byId).filter(Boolean)
const slushyBar = ['slushy-8', 'slushy-3', 'slushy-7', 'slushy-10', 'slushy-11', 'slushy-4'].map(byId)

const features = [
  {
    title: 'Made to Order',
    text: 'Every burger is stacked when you order it — hot, melty and never sitting around.',
    image: '/images/cats/burger_3.jpg',
  },
  {
    title: 'Icy Signatures',
    text: 'Smoking cups, pineapple bowls and horn glasses. Slushies worth the photo.',
    image: '/images/cats/slushy_6.jpg',
  },
  {
    title: 'The GHC 150 Combo',
    text: 'Burger, fries, sauce and a slushy of your choice. One order, one price.',
    image: '/images/cats/combo_meal_4.jpg',
  },
]

document.querySelector('#app').innerHTML = `
  ${renderHeader({ active: 'home' })}

  <main id="main">
    <section class="hero" id="hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="pill">Est. 2023 · East Legon, Accra</p>
          <h1 class="hero-title">Good Food.<br /><em>Great Vibes.</em></h1>
          <p class="hero-lead">Classic burgers, golden fries and icy slushies — made to order and served with good energy.</p>
          <div class="btn-row">
            <a class="btn btn-red" href="/menu.html">View Menu</a>
            <a class="btn btn-ghost-light" href="${orderLink('an order')}" target="_blank" rel="noreferrer">Order on WhatsApp ${arrowIcon}</a>
          </div>
          <a class="hero-people" href="${business.instagram}" target="_blank" rel="noreferrer">
            <span class="avatars" aria-hidden="true">
              ${moments
                .slice(0, 4)
                .map((m) => `<img src="${m.image}" alt="" width="44" height="44" />`)
                .join('')}
            </span>
            <span>
              <strong>Our happy customers</strong>
              <small>See them on ${business.instagramHandle}</small>
            </span>
          </a>
          <dl class="hero-stats">
            <div><dt>11+</dt><dd>Slushy flavours</dd></div>
            <div><dt>150</dt><dd>GHC combo deal</dd></div>
            <div><dt>2023</dt><dd>Serving since</dd></div>
          </dl>
        </div>

        <figure class="hero-art">
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
          <a class="hero-burst" href="/menu.html#combos" aria-label="GHC 150 combo deal">
            ${burst('GHC<br>150<small>combo</small>')}
          </a>
        </figure>
      </div>
    </section>

    <section class="cream section-drip" id="favourites">
      ${drip('drip-choc')}
      <div class="container">
        <header class="title-row" data-reveal>
          <div>
            <h2 class="retro retro-dark">House Favourites</h2>
            <p class="sub">The ones everybody orders.</p>
          </div>
          <a class="btn btn-choc btn-sm" href="/menu.html">View all</a>
        </header>
        <div class="fav-grid">
          ${signatures
            .map(
              (item, i) => `
          <article class="fav" data-reveal style="--d:${(i % 3) * 80}ms">
            <a class="fav-link" href="${orderLink(item.name)}" target="_blank" rel="noreferrer">
              <span class="fav-img">
                <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" />
              </span>
              ${burst(item.price ? item.price.replace('GHC ', 'GHC<br>') : item.tag || 'Fave', 'fav-burst')}
              <h3>${item.name}</h3>
              <p>${item.note}</p>
              <span class="fav-cta">Order ${arrowIcon}</span>
            </a>
          </article>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="choc vibe" id="story">
      <div class="container">
        <header class="vibe-head" data-reveal>
          <p class="vibe-kicker">
            Happiness in your hands
            <img src="${moments[1].image}" alt="" width="64" height="32" />
          </p>
          <h2 class="retro retro-light retro-xl">Feel the Vibe</h2>
        </header>
        <div class="feature-grid">
          ${features
            .map(
              (f, i) => `
          <article class="feature" data-reveal style="--d:${i * 90}ms">
            <img src="${f.image}" alt="" loading="lazy" decoding="async" />
            <div>
              <h3>${f.title}</h3>
              <p>${f.text}</p>
            </div>
          </article>`
            )
            .join('')}
        </div>
        <p class="vibe-story" data-reveal>
          The Slushify opened in 2023 with a simple idea: honest burgers, crisp fries and slushies that look as good as they taste. Pull up a red booth and stay a while.
        </p>
      </div>
      <p class="ghost-word" aria-hidden="true">Slushify</p>
    </section>

    <section class="tan section-drip section-drip-bottom" id="slushies">
      ${drip('drip-choc')}
      <div class="container">
        <header class="center-head" data-reveal>
          <h2 class="retro retro-dark">Sip It Slow</h2>
          <p class="sub">Eleven-plus slushies, poured fresh at the bar.</p>
        </header>
      </div>
      <div class="cup-rail" data-reveal>
        ${slushyBar
          .map(
            (s) => `
        <a class="cup" href="${orderLink(s.name)}" target="_blank" rel="noreferrer">
          <span class="cup-img"><img src="${s.image}" alt="${s.name}" loading="lazy" decoding="async" /></span>
          <span class="cup-name">${s.name}</span>
        </a>`
          )
          .join('')}
      </div>
      <div class="center-cta">
        <a class="btn btn-choc" href="/menu.html#slushies">All slushies ${arrowIcon}</a>
      </div>
      ${drip('drip-tan drip-flip')}
    </section>

    <section class="cream" id="categories">
      <div class="container">
        <header class="center-head" data-reveal>
          <h2 class="retro retro-dark">Pick Your Craving</h2>
          <p class="sub">Four classics, done right.</p>
        </header>
        <div class="arch-grid">
          ${categories
            .map(
              (c, i) => `
          <a class="arch" href="/menu.html#${c.id}" data-reveal style="--d:${i * 80}ms">
            <span class="arch-img"><img src="${c.image}" alt="" loading="lazy" decoding="async" /></span>
            <strong>${c.label}</strong>
            <small>${c.tagline}</small>
          </a>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="cream" id="deal">
      <div class="container">
        <div class="deal-card" data-reveal>
          <div class="deal-img">
            <img src="/images/cats/combo_meal_3.jpg" alt="GHC 150 combo with a pink slushy at the booth" loading="lazy" decoding="async" />
            ${burst('GHC<br>150', 'deal-burst')}
          </div>
          <div class="deal-copy">
            <p class="deal-kicker">The deal is back</p>
            <h2 class="retro retro-light">Combo + Slushy</h2>
            <ul class="deal-list">
              <li>Classic cheeseburger</li>
              <li>Golden fries &amp; sauce</li>
              <li>Any slushy on the menu</li>
            </ul>
            <a class="btn btn-mustard" href="${orderLink('the GHC 150 Combo + Slushy')}" target="_blank" rel="noreferrer">Order the combo ${arrowIcon}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="cream-2" id="moments">
      <div class="container">
        <header class="center-head" data-reveal>
          <h2 class="retro retro-dark">Our People</h2>
          <p class="sub">Real faces, real pours. Tag ${business.instagramHandle} to get featured.</p>
        </header>
        <div class="snap-grid">
          ${moments
            .map(
              (m, i) => `
          <figure class="snap" data-reveal style="--d:${(i % 3) * 80}ms; --r:${[-2.5, 1.5, -1, 2, -1.5, 2.5][i]}deg">
            <img src="${m.image}" alt="${m.alt}" loading="lazy" decoding="async" />
          </figure>`
            )
            .join('')}
        </div>
        <div class="center-cta">
          <a class="btn btn-choc" href="${business.instagram}" target="_blank" rel="noreferrer">Follow ${business.instagramHandle} ${arrowIcon}</a>
        </div>
      </div>
    </section>

    <section class="cream" id="visit">
      <div class="container">
        <header class="center-head" data-reveal>
          <h2 class="retro retro-dark">Come Through</h2>
          <p class="sub">Red booths, cold cups, warm lights.</p>
        </header>
        <div class="visit-grid">
          <figure class="visit-photo" data-reveal>
            <img src="${space.booth}" alt="Red booths and the Slushify sign inside the shop" loading="lazy" decoding="async" />
            ${burst('East<br>Legon', 'visit-burst')}
          </figure>
          <figure class="visit-photo" data-reveal style="--d:90ms">
            <img src="${space.couple}" alt="Guests at a red booth under the Slushify sign" loading="lazy" decoding="async" />
            ${burst('Accra', 'visit-burst visit-burst-right')}
          </figure>
        </div>
        <div class="visit-info" data-reveal>
          <div><span>Find us</span>${business.address}</div>
          <div><span>Orders</span><a href="${orderLink()}" target="_blank" rel="noreferrer">${business.orderPhoneLabel}</a></div>
          <div><span>Events &amp; catering</span><a href="${eventLink}" target="_blank" rel="noreferrer">${business.eventPhoneLabel}</a></div>
          <a class="btn btn-red" href="${business.mapUrl}" target="_blank" rel="noreferrer">Get directions ${arrowIcon}</a>
        </div>
      </div>
    </section>
  </main>

  ${renderFooter()}
`

bindChrome()
