/* =========================================================
   Tsunami · Marindia
   ========================================================= */

/* ---------- 1. CONFIGURACIÓN: lo único que hay que tocar ---------- */
const CONFIG = {
  // Número de WhatsApp con código de país, sin + ni espacios.
  // DEMO: 59898100017 (Metheris). Al vender la web: 59894519705 (Tsunami).
  whatsapp: '59898100017',
  // Clave de Web3Forms. Al vender: crear una clave nueva con el mail de Tsunami.
  web3formsKey: '31bd8c3d-df41-4206-a1cd-f258cb680201',
  nombre: 'Tsunami',
  asuntoMail: 'Nueva consulta desde la web - Tsunami'
};

/* ---------- 2. CARTA ----------
   Precios en pesos uruguayos, tomados de la carta de junio 2026.
   Para cambiar un precio, editar el número "p" del plato o del grupo.
   v: true = veggie.  opts: opciones que el cliente elige al pedir.  */
const SALSAS = ['Salsa de puerro', 'Cuatro quesos', 'Filetto', 'Escarparo', 'Crema de champiñones', 'Boloñesa', 'Carusso'];
const GUARNICIONES = ['Puré de papas', 'Papas fritas', 'Papas rústicas', 'Arroz blanco', 'Ensalada fresca', 'Vegetales salteados', 'Puré de boniato'];
const opSalsa = { label: 'Salsa', vals: SALSAS };
const opGuarn = { label: 'Guarnición', vals: GUARNICIONES };
const opCarnePollo = { label: 'Carne o pollo', vals: ['Carne', 'Pollo'] };

const MENU = [
  {
    id: 'cocina', titulo: 'Cocina',
    grupos: [
      {
        titulo: 'Para picar', sub: 'Tapeo y raciones',
        items: [
          { n: 'Brusquetas de champiñones, muzzarella y jamón crudo', p: 550 },
          { n: 'Brusquetas de champiñones, muzzarella y tomates secos', p: 450, v: true },
          { n: 'Langostinos al ajillo', p: 910 },
          { n: 'Raviolones de cordero crocantes con salsa picante', p: 750 },
          { n: 'Papas cheddar', p: 480 },
          { n: 'Papas cheddar veggie', p: 480, v: true },
          { n: 'Papas cheddar y panceta', p: 550 },
          { n: 'Papas champi', p: 550, v: true },
          { n: 'Papas con salsa champi + carne o pollo', p: 650, opts: [opCarnePollo] },
          { n: 'Papas rústicas en trío de salsas', d: 'Alioli, pachi y tártara', p: 410 },
          { n: 'Gramajo de langostinos', p: 750 },
          { n: 'Gramajo veggie', p: 520, v: true },
          { n: 'Salteado de mar y tierra', d: 'Cortes de carnes, chorizo y mix de mariscos, tomate, cebolla y morrón en cama de papas fritas', p: 850 },
          { n: 'Provoleta de cebolla, pimentón asado y champi', p: 460, v: true },
          { n: 'Provoleta de jamón crudo y alcaparras', p: 580 },
          { n: 'Tequeños x 6', p: 450 }
        ]
      },
      {
        titulo: 'Wraps y burgers',
        items: [
          { n: 'Wrap de pollo, carne o veggie', d: 'Salteado de choclo, tomate, lechuga, guacamole, cebolla y morrón. Con papas fritas', p: 610, opts: [{ label: 'Relleno', vals: ['Pollo', 'Carne', 'Veggie'] }] },
          { n: 'Wrap de langostinos', d: 'Salteado de choclo, tomate, lechuga, guacamole, cebolla y morrón. Con papas fritas', p: 720 },
          { n: 'Tsunami Burger', d: 'Doble carne, cheddar, salsa pachi, panceta crujiente y cebolla. Con fritas', p: 650 },
          { n: 'Tsunami Deluxe + provolone crispy', d: 'Doble carne, provolone crispy, cheddar, salsa barbacoa y panceta crujiente. Con papas rústicas', p: 750 },
          { n: 'Salad Burger', d: '200 g de carne, crema agria con ciboulette, dambo, mix de verdes y guacamole. Con papas fritas', p: 580 },
          { n: 'Classic Burger', d: '100 g de carne, lechuga, tomate y mayonesa. Con papas fritas', p: 500 },
          { n: 'Burger veggie', d: 'Hamburguesa veggie, queso crema, rúcula, champiñones y cebolla asada', p: 470, v: true },
          { n: 'Burger veggie Tsunami', d: 'Hamburguesa veggie, huevo frito, cheddar, guacamole y cebolla caramelizada', p: 650, v: true }
        ]
      },
      {
        titulo: 'Chivitos y milanesas',
        items: [
          { n: 'Chivito de carne o pollo', d: 'Queso phila con ciboulette, lechuga, tomate, jamón, queso, panceta, huevo frito y cebolla asada. Con fritas', p: 720, opts: [opCarnePollo] },
          { n: 'Milanesa de carne o pollo', d: 'Con guarnición a elección', p: 650, opts: [opCarnePollo, opGuarn] },
          { n: 'Milanesa a caballo con fritas', p: 750 },
          { n: 'Milanesa napolitana', p: 750 },
          { n: 'Milanesa con salsa champi', p: 780 },
          { n: 'Milanesa con cheddar y panceta', p: 780 }
        ]
      },
      {
        titulo: 'Ensaladas',
        items: [
          { n: 'Ensalada grill', d: 'Berenjena y zucchini asados al grill con rúcula, parmesano, tomate cherry, manzana y mix de verdes', p: 400, v: true },
          { n: 'Ensalada de langostinos teri', d: 'Mix de lechugas, palta, tomate cherry y langostinos teri con vinagreta balsámica de maracuyá', p: 650 }
        ]
      },
      {
        titulo: 'Pastas y risottos',
        note: '<b>Salsas:</b> puerro · cuatro quesos · filetto · escarparo (panceta, jamón, verdeo, crema, tomate, albahaca y tomillo) · crema de champiñones · boloñesa · carusso',
        items: [
          { n: 'Risotto de pollo', d: 'Pollo salteado, curry, champi y almendras', p: 750 },
          { n: 'Risotto de langostinos y azafrán', p: 850 },
          { n: 'Risotto de champiñones', d: 'Con tomates secos y rúcula', p: 650, v: true },
          { n: 'Sorrentinos de espinaca y parmesano', d: 'Con salsa a elección', p: 720, v: true, opts: [opSalsa] },
          { n: 'Sorrentinos de jamón y queso', d: 'Con salsa a elección', p: 720, opts: [opSalsa] },
          { n: 'Raviolones de cordero', p: 850 },
          { n: 'Fetuccini de tinta de calamar con salsa de mariscos', p: 750 },
          { n: 'Fetuccini con rúcula, tomates secos y champiñones', p: 510, v: true },
          { n: 'Fetuccini a la reggiana con fricassé de pollo', p: 650 }
        ]
      },
      {
        titulo: 'Plancha y grillado',
        note: '<b>Guarniciones:</b> puré de papas · papas fritas · papas rústicas · arroz blanco · ensalada fresca · vegetales salteados · puré de boniato',
        items: [
          { n: 'Pesca blanca con salsa de puerro', d: 'Con guarnición a elección', p: 780, opts: [opGuarn] },
          { n: 'Salmón a la plancha con salsa de champiñones y alcaparras', d: 'Con guarnición a elección', p: 1300, opts: [opGuarn] },
          { n: 'Entrecot con salsa de mostaza', d: 'Con guarnición a elección', p: 910, opts: [opGuarn] },
          { n: 'Entraña a la plancha con criolla ahumada', d: 'Con guarnición a elección', p: 890, opts: [opGuarn] },
          { n: 'Pollo grillé', d: 'Con guarnición a elección', p: 650, opts: [opGuarn] },
          { n: 'Suprema de pollo rellena', d: 'Con guarnición a elección', p: 810, opts: [opGuarn] },
          { n: 'Pulpo a la gallega', p: 1650 }
        ]
      },
      {
        titulo: 'Al wok',
        items: [
          { n: 'Pollo al wok', p: 550 },
          { n: 'Vegetales crujientes al wok', p: 470, v: true },
          { n: 'Arroz TAI', d: 'Arroz, pollo, camarones, hongos, vegetales, jengibre y soja', p: 690 }
        ]
      },
      {
        titulo: 'Pizzetas de masa madre',
        items: [
          { n: 'Entraña salteada', p: 550 },
          { n: 'Panceta y huevo', p: 480 },
          { n: 'Jamón crudo y rúcula', p: 510 },
          { n: 'Aceitunas', p: 380 },
          { n: 'Jamón', p: 380 },
          { n: 'Capresse', p: 420 },
          { n: 'Muzzarella', p: 350 },
          { n: '4 quesos', p: 480 },
          { n: 'Cebolla y cheddar', p: 480 }
        ]
      }
    ]
  },
  {
    id: 'sushi', titulo: 'Sushi',
    grupos: [
      {
        titulo: 'Uramakis premium', sub: '10 piezas', p: 650,
        items: [
          { n: 'Mexican', d: 'Langostino furai, mango y phila, con cobertura de guacamole y crocante' },
          { n: 'Pasión', d: 'Salmón, phila, ciboulette y verdeo grillado, con cobertura de mango y salsa de maracuyá' },
          { n: 'Coco roll', d: 'Pepino, mango y phila, con cobertura de salmón, coco caramelizado y salsa de maracuyá' },
          { n: 'Mediterráneo', d: 'Salmón grillado, tomates secos, rúcula y phila, cubierto con cremoso de puerro y parmesano grillado' },
          { n: 'Ibérico', d: 'Langostino apanado, phila y palta, con cobertura de salmón' },
          { n: 'Acevichado', d: 'Langostino, ciboulette y phila' },
          { n: 'Tataki roll', d: 'Langostino, rúcula y phila' },
          { n: 'Tsurai', d: 'Langostino grillado, mango y phila, con cobertura togarashi, salmón grillado y sriracha' }
        ]
      },
      {
        titulo: 'Uramakis', sub: '10 piezas', p: 580,
        items: [
          { n: 'New York salmón', d: 'Salmón, palta, phila y sésamo' },
          { n: 'New York langostino', d: 'Langostino grillado, palta, phila y sésamo' },
          { n: 'Nikkei roll', d: 'Salmón, phila y rúcula' },
          { n: 'Ottoko roll', d: 'Langostino, phila, zanahoria y ciboulette' }
        ]
      },
      {
        titulo: 'Uramakis veggie', sub: '10 piezas', p: 500,
        items: [
          { n: 'New York veggie', d: 'Zanahoria glaseada, palta, phila y sésamo', v: true },
          { n: 'Pasión veggie', d: 'Pepino, ciboulette, phila y verdeo grillado, con cobertura de mango y salsa de maracuyá', v: true },
          { n: 'Fushi', d: 'Hongos, tomates secos y phila, cubierto con cremoso de puerro y parmesano gratinado', v: true },
          { n: 'Épico veggie', d: 'Tamago, ciboulette, tomate seco y phila, con cobertura de palta', v: true },
          { n: 'Tsunami veggie', d: 'Rúcula, palta, hongos y phila', v: true }
        ]
      },
      {
        titulo: 'Hot rolls', sub: 'Uramaki', p: 600,
        items: [
          { n: 'Panko' },
          { n: 'Crispi salmón' },
          { n: 'Crispi langostino' },
          { n: 'Crispi mixto' }
        ]
      },
      {
        titulo: 'Futomakis', p: 580,
        items: [
          { n: 'Yanai', d: 'Salmón, phila y mango' },
          { n: 'Kosi', d: 'Langostino, rúcula y phila' }
        ]
      },
      {
        titulo: 'Futomakis veggie', p: 500,
        items: [
          { n: 'Ikura', d: 'Rúcula, mango, zanahoria y phila', v: true },
          { n: 'Killay', d: 'Rúcula, palta, hongos y phila', v: true }
        ]
      },
      {
        titulo: 'Futomakis tempura', p: 600,
        items: [
          { n: 'Tempura de salmón', d: 'Salmón, palta y phila' },
          { n: 'Tempura de langostino', d: 'Langostino, mango y phila' }
        ]
      },
      {
        titulo: 'Combinados',
        items: [
          { n: 'Combinado 14 piezas', p: 850 },
          { n: 'Combinado 24 piezas', p: 1380 },
          { n: 'Combinado 36 piezas', p: 1950 }
        ]
      },
      {
        titulo: 'Niguiris',
        items: [
          { n: 'Niguiri de salmón', p: 400 },
          { n: 'Niguiri de pesca blanca', p: 370 },
          { n: 'Niguiri de langostinos', p: 400 },
          { n: 'Niguiri tataki', p: 430 }
        ]
      },
      {
        titulo: 'Geishas', sub: '4 piezas', p: 400,
        items: [
          { n: 'Geisha de salmón, rúcula y phila' },
          { n: 'Geisha de salmón, palta y phila' },
          { n: 'Geisha de salmón, brotes, phila y caviar' }
        ]
      },
      {
        titulo: 'Temakis', p: 580,
        items: [
          { n: 'Temaki de salmón', d: 'Phila y palta' },
          { n: 'Temaki de langostino', d: 'Phila y rúcula' },
          { n: 'Temaki veggie', d: 'Palta, rúcula y zanahoria', v: true }
        ]
      },
      {
        titulo: 'Poke bowls',
        items: [
          { n: 'Poke de salmón', d: 'Repollo colorado, pepino, cebolla, zanahoria, cherry y phila, con salsa de maracuyá y quinoa frita', p: 550 },
          { n: 'Poke de langostino', d: 'Repollo colorado, zanahoria, mix de verdes, palta, pepino y phila, con salsa de mostaza y miel y sésamo', p: 550 },
          { n: 'Poke veggie mix', d: 'Verdes, zanahoria, cherry, palta, cebolla, repollo colorado, phila y mango, con salsa teriyaki y chips de boniato', p: 480, v: true }
        ]
      },
      {
        titulo: 'Ceviches y tiraditos',
        items: [
          { n: 'Ceviche de salmón', p: 680 },
          { n: 'Ceviche de pescado blanco', p: 610 },
          { n: 'Ceviche mixto', p: 750 },
          { n: 'Ceviche veggie', p: 550, v: true },
          { n: 'Tiradito Pasión', d: 'Salmón, salsa de maracuyá, rúcula y jugo de lima, con hilos de masa philo crocante', p: 490 },
          { n: 'Tiradito acevichado', d: 'Pescado blanco, emulsión acevichada, cilantro, hilos de masa philo crocante y togarashi', p: 450 }
        ]
      },
      {
        titulo: 'Para acompañar',
        items: [
          { n: 'Sandwich Agumy', d: 'Kanikama con salsa picante, salmón, pepino y palta con mayo de sriracha y ciboulette, rebozado en panko', p: 650 },
          { n: 'Arrolladitos primavera x 8', p: 350 }
        ]
      }
    ]
  },
  {
    id: 'tragos', titulo: 'Tragos',
    grupos: [
      {
        titulo: 'Cócteles de autor', p: 350,
        items: [
          { n: 'Grito de asencio', d: 'Gin, jugo de pomelo, almíbar simple, lámina de pepino, tónica y bitter #69' },
          { n: 'Vista Oeste', d: 'Vodka, maracuyá, almíbar de miel y licor de amaretto' },
          { n: 'Mithai', d: 'Ron, jugo de piña, jugo de limón, almíbar de manzanilla y licor Frangelico' },
          { n: 'Abuela Eva', d: 'Gin, jugo de limón, almíbar de jengibre, albahaca, espumante y tónica' },
          { n: 'Salsipuedes', d: 'Vodka, jugo de limón, almíbar de cardamomo y eucaliptus, float de frutos rojos' },
          { n: 'Primer Indio', d: 'Ron, Campari, reducción de frutos rojos, jugo de naranja y piña' },
          { n: 'Amalia Spritz', d: 'Jugo de maracuyá y frambuesa, Aperol, vino blanco y soda' },
          { n: 'Pasión de verano', d: 'Ron, Aperol, jugo de mango y maracuyá, almíbar de jengibre y jugo de pomelo rosado' },
          { n: 'La Picosa', d: 'Tequila picoso, manzanilla, mix cítrico y aire de remolacha' },
          { n: 'Shrub tonic de estación', d: 'Gin, licor, flores de sauco, shrub de frutas de estación y tónica' },
          { n: 'Roni Basile', d: 'Ron dorado, apricot brandy, jugo de pomelo rosado, albahaca y syrup de jengibre' }
        ]
      },
      {
        titulo: 'Clásicos', p: 310,
        items: [
          { n: 'Caipiroska clásica', d: 'Vodka, jugo de lima y azúcar' },
          { n: 'Mojito clásico', d: 'Ron, jugo de limón, menta, azúcar y golpe de soda' },
          { n: 'Tom Collins', d: 'Gin, jugo de limón, azúcar y golpe de soda' },
          { n: 'Gin & tonic', d: 'Gin, tónica y cítrico a elección' },
          { n: 'Americano', d: 'Campari, vermouth rosso y golpe de soda' },
          { n: 'Pisco sour', d: 'Pisco, jugo de limón, azúcar y clara' },
          { n: 'Moscow mule', d: 'Vodka, jugo de limón y ginger ale' },
          { n: 'Cynar julep', d: 'Cynar, jugo de pomelo, menta y azúcar rubia' },
          { n: 'Espresso martini', d: 'Vodka, almíbar simple, café y licor de café' },
          { n: 'Penicilin', d: 'Whisky escocés, jugo de limón, almíbar de miel y jengibre' }
        ]
      },
      {
        titulo: 'Cervezas',
        items: [
          { n: 'Patricia', p: 380 },
          { n: 'Stella Artois', p: 410 },
          { n: 'Corona 330 cc', p: 220 }
        ]
      }
    ]
  },
  {
    id: 'sin-alcohol', titulo: 'Sin alcohol',
    grupos: [
      {
        titulo: 'Cócteles sin alcohol', p: 300,
        items: [
          { n: 'Pomelada de romero' },
          { n: 'Ice tea melodías del bosque' },
          { n: 'Limonada de hibiscos' },
          { n: 'Shrub de estación' },
          { n: 'Sodeado de manzana' },
          { n: 'Remolacha y naranja' },
          { n: 'Mango y maracuyá' },
          { n: 'Maracuyá' },
          { n: 'Frutos rojos' },
          { n: 'Ananá' },
          { n: 'Naranja' }
        ]
      },
      {
        titulo: 'Limonadas', p: 200,
        items: [
          { n: 'Limonada de menta y jengibre' },
          { n: 'Limonada de pepino y menta' },
          { n: 'Ice tea', d: 'Limonada con té' }
        ]
      }
    ]
  },
  {
    id: 'dulce', titulo: 'Postres y merienda',
    grupos: [
      {
        titulo: 'Postres',
        items: [
          { n: 'Flan casero con dulce de leche', p: 300 },
          { n: 'Panqueques con dulce de leche', p: 300 },
          { n: 'Crème brûlée', p: 200 },
          { n: 'Cheesecake con salsa de frutos rojos', p: 420 },
          { n: 'Copa de mousse de chocolate', p: 420 },
          { n: 'Degustación de postres', p: 680 }
        ]
      },
      {
        titulo: 'Café',
        items: [
          { n: 'Expreso', p: 200 },
          { n: 'Americano', p: 220 },
          { n: 'Cortado', p: 250 },
          { n: 'Capuccino', p: 280 },
          { n: 'Submarino', p: 310 }
        ]
      },
      {
        titulo: 'Merienda',
        note: '¿Sin gluten? Consultanos por las opciones de merienda de <b>Cocina Sabini</b>, libre de gluten.',
        items: [
          { n: 'Merienda para dos', d: 'Dos bebidas calientes a elección, churros, scones, mermelada, sandwich de pan de nuez, brownie y dos jugos de naranja', p: 1100 },
          { n: 'Mini medialunas', p: 180 },
          { n: 'Scones', p: 180 },
          { n: 'Churros x 6', p: 200 },
          { n: 'Churros rellenos x 4', p: 280 },
          { n: 'Sandwich de pan de nuez', p: 250 },
          { n: 'Sandwich de pan de nuez veggie', p: 230, v: true },
          { n: 'Carrot cake', p: 380 },
          { n: 'Brownie con helado de crema', p: 380 }
        ]
      }
    ]
  }
];


/* =========================================================
   A partir de acá, la lógica de la web (no hace falta tocarla)
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = n => '$' + n.toLocaleString('es-UY');
const waLink = text => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const isDesktop = () => window.matchMedia('(min-width: 761px)').matches;
const headerH = () => parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 70;

function formatPhone(n) {
  const local = n.startsWith('598') ? '0' + n.slice(3) : n;
  return local.replace(/^(\d{3})(\d{3})(\d{3})$/, '$1 $2 $3');
}

let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('is-on'), 2000);
}

function bump(el, cls = 'bump') {
  if (!el) return;
  el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
}

/* Botones de opción tipo "radio" (Terraza / Salón, Cuándo pasás) */
function initSeg(el) {
  el.addEventListener('click', e => {
    const b = e.target.closest('button[role="radio"]');
    if (!b) return;
    $$('button[role="radio"]', el).forEach(x => x.setAttribute('aria-checked', x === b ? 'true' : 'false'));
  });
}
const segValue = el => ($('button[aria-checked="true"]', el) || {}).dataset?.v || '';

/* ---------- Intro ---------- */
(function intro() {
  const el = $('#intro');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) document.documentElement.style.setProperty('--intro', '0s');
  setTimeout(() => {
    el.classList.add('is-out');
    setTimeout(() => el.remove(), 800);
  }, reduce ? 200 : 2000);
})();

/* ---------- Enlaces de WhatsApp ---------- */
function bindWaLinks() {
  $$('[data-wa]').forEach(a => { a.href = waLink(a.dataset.wa); });
  $$('.js-wa-number').forEach(s => { s.textContent = formatPhone(CONFIG.whatsapp); });
}

/* ---------- Header y navegación ---------- */
function initHeader() {
  const header = $('#header');
  const toggle = $('#navToggle');
  const nav = $('#nav');
  const onScroll = () => header.classList.toggle('is-solid', window.scrollY > window.innerHeight * 0.6 || nav.classList.contains('is-open'));
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', open);
    nav.classList.toggle('is-open', open);
    onScroll();
  });
  $$('a', nav).forEach(a => a.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    onScroll();
  }));

  const links = $$('a', nav);
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['carta', 'reservas', 'lugar', 'contacto'].forEach(id => io.observe(document.getElementById(id)));
}

/* ---------- Animaciones al aparecer ---------- */
function initReveal() {
  const els = $$('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); obs.unobserve(e.target); }
    });
  }, { threshold: .12 });
  els.forEach((el, i) => { el.style.transitionDelay = (i % 4) * 90 + 'ms'; io.observe(el); });
}

/* =========================================================
   CARTA Y PEDIDO
   ========================================================= */
const state = { tab: MENU[0].id, query: '', veggie: false, cart: new Map() };

const ITEMS = new Map();
MENU.forEach(sec => sec.grupos.forEach((g, gi) => g.items.forEach((it, ii) => {
  const id = `${sec.id}-${gi}-${ii}`;
  it.id = id;
  it.price = it.p ?? g.p;
  it.group = g;
  it.section = sec;
  ITEMS.set(id, it);
})));

function lineLabel(it) {
  // En grupos con nombre genérico (Uramakis, Hot rolls...) se aclara el grupo en el pedido
  const generic = it.group.p && !norm(it.n).includes(norm(it.group.titulo).split(' ')[0].slice(0, 6));
  return generic ? `${it.group.titulo}: ${it.n}` : it.n;
}

function highlight(text, q) {
  if (!q) return esc(text);
  const nt = norm(text), nq = norm(q);
  const i = nt.indexOf(nq);
  if (i < 0) return esc(text);
  return esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + q.length)) + '</mark>' + esc(text.slice(i + q.length));
}

function qtyForItem(id) {
  let q = 0;
  state.cart.forEach(l => { if (l.id === id) q += l.qty; });
  return q;
}

function actionHTML(it) {
  const qty = qtyForItem(it.id);
  if (!qty) return `<button type="button" class="add" data-add aria-label="Agregar ${esc(it.n)}"><span>+</span> Agregar</button>`;
  return qtyHTML(qty, it.n);
}
function qtyHTML(qty, name) {
  return `<div class="qty" role="group" aria-label="Cantidad de ${esc(name)}">
      <button type="button" data-d="-1" aria-label="Quitar uno">−</button>
      <output>${qty}</output>
      <button type="button" data-d="1" aria-label="Sumar uno">+</button>
    </div>`;
}

function itemHTML(it, q) {
  const showPrice = !it.group.p;
  return `
    <article class="item${qtyForItem(it.id) ? ' is-in' : ''}" data-id="${it.id}">
      <div class="item__info">
        <div class="item__line">
          <h4 class="item__name">${highlight(it.n, q)}${it.v ? '<span class="tag">Veggie</span>' : ''}</h4>
          ${showPrice ? `<span class="item__dots"></span><span class="item__price">${money(it.price)}</span>` : ''}
        </div>
        ${it.d ? `<p class="item__desc">${highlight(it.d, q)}</p>` : ''}
      </div>
      <div class="item__act">${actionHTML(it)}</div>
    </article>`;
}

function groupMeta(g) {
  const parts = [];
  if (g.sub) parts.push(esc(g.sub));
  if (g.p) parts.push(`<b>${money(g.p)}</b> cada uno`);
  return parts.join(' · ');
}

function renderTabs() {
  const tabs = $('#menuTabs');
  tabs.innerHTML = MENU.map(s =>
    `<button class="tab" role="tab" type="button" id="tab-${s.id}" aria-selected="${!state.query && s.id === state.tab}" data-tab="${s.id}">${esc(s.titulo)}</button>`).join('');
  tabs.classList.toggle('is-searching', !!state.query);
}

function visibleGroups() {
  const q = norm(state.query.trim());
  const secs = q ? MENU : MENU.filter(s => s.id === state.tab);
  const out = [];
  secs.forEach(sec => sec.grupos.forEach((g, gi) => {
    const items = g.items.filter(it =>
      (!state.veggie || it.v) &&
      (!q || norm(it.n + ' ' + (it.d || '') + ' ' + g.titulo).includes(q)));
    if (items.length) out.push({ sec, g, gi, items });
  }));
  return out;
}

function renderMenu() {
  const list = $('#menuList');
  const chips = $('#menuGroups');
  const q = state.query.trim();
  const groups = visibleGroups();

  if (!groups.length) {
    list.innerHTML = `<div class="empty-state"><p><b>No encontramos nada con esa búsqueda.</b></p><p>Probá con otra palabra${state.veggie ? ' o sacá el filtro veggie' : ''}.</p></div>`;
    chips.innerHTML = '';
    return;
  }

  list.innerHTML = groups.map(({ sec, g, gi, items }) => `
    <section class="mgroup" id="g-${sec.id}-${gi}" aria-label="${esc(g.titulo)}">
      <header class="mgroup__head">
        <h3 class="mgroup__title">${esc(g.titulo)}</h3>
        ${groupMeta(g) || q ? `<p class="mgroup__meta">${q ? esc(sec.titulo) + (groupMeta(g) ? ' · ' : '') : ''}${groupMeta(g)}</p>` : ''}
        ${g.note && !q ? `<p class="mgroup__note">${g.note}</p>` : ''}
      </header>
      <div class="mgroup__items">${items.map(it => itemHTML(it, q)).join('')}</div>
    </section>`).join('');

  chips.innerHTML = groups.map(({ sec, g, gi }, i) =>
    `<button type="button" data-target="g-${sec.id}-${gi}" class="${i === 0 ? 'is-active' : ''}">${esc(g.titulo)}</button>`).join('');
  observeGroups();
}

let groupObserver;
function observeGroups() {
  if (groupObserver) groupObserver.disconnect();
  const top = headerH() + $('#menuBar').offsetHeight;
  groupObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      $$('#menuGroups button').forEach(b => {
        const on = b.dataset.target === e.target.id;
        b.classList.toggle('is-active', on);
        if (on) {
          const c = $('#menuGroups');
          c.scrollTo({ left: b.offsetLeft - c.offsetWidth / 2 + b.offsetWidth / 2, behavior: 'smooth' });
        }
      });
    });
  }, { rootMargin: `-${top + 10}px 0px -60% 0px` });
  $$('.mgroup').forEach(s => groupObserver.observe(s));
}

function scrollToMenuTop() {
  const y = $('#menuBar').getBoundingClientRect().top + window.scrollY - headerH();
  if (window.scrollY > y + 2) window.scrollTo({ top: y, behavior: 'smooth' });
}

function scrollToGroup(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const y = target.getBoundingClientRect().top + window.scrollY - headerH() - $('#menuBar').offsetHeight + 4;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

/* ---- Selector de opciones ---- */
let pickerItem = null;
function openPicker(it) {
  pickerItem = it;
  $('#pickerTitle').textContent = it.n;
  $('#pickerPrice').textContent = money(it.price);
  $('#pickerOpts').innerHTML = it.opts.map((o, oi) => `
    <fieldset class="picker__group">
      <legend>Elegí ${esc(o.label.toLowerCase())}</legend>
      <div class="seg" role="radiogroup" data-opt="${oi}">
        ${o.vals.map((v, vi) => `<button type="button" role="radio" aria-checked="${vi === 0}" data-v="${esc(v)}">${esc(v)}</button>`).join('')}
      </div>
    </fieldset>`).join('');
  $$('#pickerOpts .seg').forEach(initSeg);
  $('#picker').hidden = false;
  document.body.classList.add('lock');
  setTimeout(() => $('#pickerOpts button').focus(), 50);
}
function closePicker() {
  $('#picker').hidden = true;
  if (!$('#order').classList.contains('is-open')) document.body.classList.remove('lock');
  pickerItem = null;
}

/* ---- Pedido ---- */
function lineKey(id, choices) { return id + (choices.length ? '|' + choices.join('|') : ''); }

function addToCart(id, choices = [], delta = 1) {
  const key = lineKey(id, choices);
  const line = state.cart.get(key) || { key, id, choices, qty: 0 };
  line.qty += delta;
  if (line.qty <= 0) state.cart.delete(key); else state.cart.set(key, line);
  saveCart();
  renderOrder();
}

function removeOneForItem(id) {
  const key = [...state.cart.keys()].reverse().find(k => state.cart.get(k).id === id);
  if (key) addToCart(id, state.cart.get(key).choices, -1);
}

function cartTotals() {
  let count = 0, total = 0;
  state.cart.forEach(l => { const it = ITEMS.get(l.id); if (!it) return; count += l.qty; total += l.qty * it.price; });
  return { count, total };
}

function renderOrder() {
  const order = $('#order');
  const { count, total } = cartTotals();
  order.classList.toggle('is-empty', count === 0);

  $('#orderLines').innerHTML = [...state.cart.values()].map(l => {
    const it = ITEMS.get(l.id);
    if (!it) return '';
    return `<li class="oline" data-key="${esc(l.key)}">
      <span class="oline__name">${esc(lineLabel(it))}${l.choices.length ? `<span class="oline__opt">${esc(l.choices.join(' · '))}</span>` : ''}</span>
      ${qtyHTML(l.qty, it.n)}
      <span class="oline__price">${l.qty} × ${money(it.price)} = <b>${money(it.price * l.qty)}</b></span>
    </li>`;
  }).join('');

  $('#orderTotal').textContent = money(total);
  $('#cartBarTotal').textContent = money(total);
  $('#cartBarCount').textContent = count;
  $('#cartBar').classList.toggle('is-on', count > 0 && cartInView);
  const badge = $('#headerCount');
  badge.hidden = count === 0;
  badge.textContent = count;

  // Actualiza los botones de la carta sin redibujar todo
  $$('#menuList .item').forEach(el => {
    const it = ITEMS.get(el.dataset.id);
    const qty = qtyForItem(it.id);
    el.classList.toggle('is-in', qty > 0);
    const act = $('.item__act', el);
    const hasQty = !!$('.qty', act);
    if (qty && hasQty) $('output', act).textContent = qty;
    else if (!!qty !== hasQty) act.innerHTML = actionHTML(it);
  });
}

// La barra del pedido se muestra sólo mientras el visitante está en la carta
// (en el resto de la web queda el botón «Tu pedido» del encabezado).
let cartInView = false;
function watchCartZone() {
  const io = new IntersectionObserver(([e]) => {
    cartInView = e.isIntersecting;
    $('#cartBar').classList.toggle('is-on', cartInView && cartTotals().count > 0);
  }, { rootMargin: '-35% 0px -35% 0px' });
  io.observe(document.getElementById('carta'));
}

function saveCart() {
  try { sessionStorage.setItem('tsunami-pedido', JSON.stringify([...state.cart.values()])); } catch (e) { /* sin almacenamiento */ }
}
function loadCart() {
  try {
    const raw = JSON.parse(sessionStorage.getItem('tsunami-pedido') || '[]');
    raw.forEach(l => { if (ITEMS.has(l.id) && l.qty > 0) state.cart.set(l.key, l); });
  } catch (e) { /* sin almacenamiento */ }
}

function openOrder(open) {
  const order = $('#order');
  const scrim = $('#scrim');
  order.classList.toggle('is-open', open);
  order.setAttribute('aria-hidden', String(!open));
  if (open) { scrim.hidden = false; requestAnimationFrame(() => scrim.classList.add('is-on')); }
  else { scrim.classList.remove('is-on'); setTimeout(() => { scrim.hidden = true; }, 300); }
  document.body.classList.toggle('lock', open);
  if (open) setTimeout(() => $('#orderClose').focus(), 350);
}

function buildOrderMessage() {
  const name = $('#oName').value.trim();
  const when = segValue($('#oWhen'));
  const notes = $('#oNotes').value.trim();
  const { total } = cartTotals();
  const rows = [...state.cart.values()].map(l => {
    const it = ITEMS.get(l.id);
    const opt = l.choices.length ? ` (${l.choices.join(', ')})` : '';
    return `• ${l.qty} x ${lineLabel(it)}${opt} — ${money(it.price * l.qty)}`;
  });
  return [
    `Hola ${CONFIG.nombre}! Quiero hacer un pedido para retirar:`,
    '',
    ...rows,
    '',
    `Total estimado: ${money(total)}`,
    `Nombre: ${name}`,
    `Retiro: ${when}`,
    notes ? `Aclaraciones: ${notes}` : null,
    '',
    '¿Me confirman el total y el tiempo? Gracias!'
  ].filter(x => x !== null).join('\n');
}

function initMenu() {
  loadCart();
  renderTabs();
  renderMenu();
  renderOrder();
  initSeg($('#oWhen'));
  watchCartZone();

  $('#menuTabs').addEventListener('click', e => {
    const b = e.target.closest('[data-tab]');
    if (!b) return;
    state.tab = b.dataset.tab;
    if (state.query) { state.query = ''; $('#menuSearch').value = ''; }
    renderTabs();
    renderMenu();
    scrollToMenuTop();
  });

  let searchTimer;
  $('#menuSearch').addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.query = e.target.value; renderTabs(); renderMenu(); }, 160);
  });
  $('#veggieOnly').addEventListener('change', e => { state.veggie = e.target.checked; renderMenu(); });
  $('#menuGroups').addEventListener('click', e => {
    const b = e.target.closest('[data-target]');
    if (b) scrollToGroup(b.dataset.target);
  });

  // Agregar y + / − en la carta
  $('#menuList').addEventListener('click', e => {
    const itemEl = e.target.closest('.item');
    if (!itemEl) return;
    const it = ITEMS.get(itemEl.dataset.id);
    if (e.target.closest('[data-add]') || e.target.closest('[data-d="1"]')) {
      if (it.opts) { openPicker(it); return; }
      addToCart(it.id, [], 1);
      toast(`Agregaste ${lineLabel(it)}`);
      bump($('#cartBar'));
      bump($('#headerCount'));
    } else if (e.target.closest('[data-d="-1"]')) {
      removeOneForItem(it.id);
    }
    bump($('.qty', itemEl));
  });

  // Selector de opciones
  $('#pickerAdd').addEventListener('click', () => {
    if (!pickerItem) return;
    const it = pickerItem;
    const choices = $$('#pickerOpts .seg').map(segValue);
    addToCart(it.id, choices, 1);
    closePicker();
    toast(`Agregaste ${lineLabel(it)} (${choices.join(', ')})`);
    bump($('#cartBar'));
    bump($('#headerCount'));
  });
  $('#pickerClose').addEventListener('click', closePicker);
  $('#picker').addEventListener('click', e => { if (e.target.id === 'picker') closePicker(); });

  // + / − dentro del pedido
  $('#orderLines').addEventListener('click', e => {
    const btn = e.target.closest('.qty button');
    if (!btn) return;
    const line = state.cart.get(btn.closest('.oline').dataset.key);
    if (line) addToCart(line.id, line.choices, Number(btn.dataset.d));
  });

  $('#orderClear').addEventListener('click', () => {
    if (!confirm('¿Vaciar todo el pedido?')) return;
    state.cart.clear(); saveCart(); renderOrder();
  });

  $('#cartBar').addEventListener('click', () => openOrder(true));
  $('#headerCart').addEventListener('click', () => openOrder(true));
  $('#orderClose').addEventListener('click', () => openOrder(false));
  $('#scrim').addEventListener('click', () => openOrder(false));
  $('#orderBrowse').addEventListener('click', () => {
    openOrder(false);
    document.getElementById('carta').scrollIntoView({ behavior: 'smooth' });
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!$('#picker').hidden) closePicker(); else openOrder(false);
  });

  $('#orderForm').addEventListener('submit', e => {
    e.preventDefault();
    if (!checkField('oName', validName($('#oName').value, 'tu nombre'))) { $('#oName').focus(); return; }
    if (!cartTotals().count) return;
    window.open(waLink(buildOrderMessage()), '_blank', 'noopener');
  });
  $('#oName').addEventListener('input', () => { if ($('#oName').closest('.field').classList.contains('has-err')) checkField('oName', validName($('#oName').value, 'tu nombre')); });

  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(observeGroups, 200); });
}

/* =========================================================
   VALIDACIONES
   ========================================================= */
const RE_NAME = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]+$/;

function validName(v, what = 'el nombre') {
  v = v.trim();
  if (!v) return `Escribí ${what}.`;
  if (v.length < 2) return 'Es demasiado corto.';
  if (!RE_NAME.test(v)) return 'Usá solo letras.';
  if (/(.)\1{3,}/i.test(v)) return 'Revisá lo que escribiste.';
  return '';
}
function validEmail(v) {
  v = v.trim();
  if (!v) return 'Escribí tu correo electrónico.';
  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v)) return 'Ese correo no parece válido. Ej.: nombre@gmail.com';
  return '';
}
function validPhoneUY(v) {
  const d = v.replace(/[\s\-().]/g, '').replace(/^\+?598/, '0');
  if (!d) return 'Escribí tu teléfono.';
  // Celular: 09X XXX XXX (9 dígitos). Fijo: 2XXX XXXX o 4XXX XXXX (8 dígitos).
  if (/^09[1-9]\d{6}$/.test(d) || /^[24]\d{7}$/.test(d)) return '';
  return 'Ingresá un teléfono uruguayo válido. Ej.: 099 123 456';
}
function validMessage(v) {
  v = v.trim();
  if (!v) return 'Contanos tu consulta.';
  if (v.length < 15) return 'Contanos un poco más (al menos 15 caracteres).';
  const words = v.split(/\s+/).filter(w => /[a-záéíóúñü]{2,}/i.test(w));
  if (words.length < 3) return 'Escribí tu consulta con algunas palabras.';
  if (/(.)\1{5,}/.test(v)) return 'Revisá el mensaje.';
  return '';
}

function checkField(id, msg) {
  const input = document.getElementById(id);
  const field = input.closest('.field');
  const err = $(`.field__err[data-for="${id}"]`);
  if (err) err.textContent = msg;
  field.classList.toggle('has-err', !!msg);
  input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  return !msg;
}

/* =========================================================
   RESERVAS
   ========================================================= */
function initReservas() {
  const peopleOut = $('#resPeople');
  let people = 2;
  $('#resForm .qty').addEventListener('click', e => {
    const b = e.target.closest('[data-step]');
    if (!b) return;
    people = Math.min(30, Math.max(1, people + Number(b.dataset.step)));
    peopleOut.textContent = people;
  });
  initSeg($('#resPlace'));

  const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const date = $('#resDate');
  date.min = iso(new Date());
  date.value = iso(new Date());

  const fmtDate = v => {
    const [y, m, d] = v.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('es-UY', { weekday: 'long', day: 'numeric', month: 'long' });
  };

  $('#resForm').addEventListener('submit', e => {
    e.preventDefault();
    const okDate = checkField('resDate', !date.value ? 'Elegí el día.' : (date.value < date.min ? 'Elegí un día desde hoy en adelante.' : ''));
    const time = $('#resTime').value;
    const okTime = checkField('resTime', time ? '' : 'Elegí la hora.');
    const okName = checkField('resName', validName($('#resName').value));
    if (!(okDate && okTime && okName)) { $('#resForm .has-err input')?.focus(); return; }
    const place = segValue($('#resPlace'));
    const note = $('#resNote').value.trim();
    const msg = [
      `Hola ${CONFIG.nombre}! Quiero reservar una mesa:`,
      '',
      `• ${people} ${people === 1 ? 'persona' : 'personas'}`,
      `• ${fmtDate(date.value)} a las ${time}`,
      place ? `• Preferencia: ${place}` : null,
      `• A nombre de: ${$('#resName').value.trim()}`,
      note ? `• Comentario: ${note}` : null,
      '',
      '¿Tienen lugar? Gracias!'
    ].filter(x => x !== null).join('\n');
    window.open(waLink(msg), '_blank', 'noopener');
  });
  ['resDate', 'resTime'].forEach(id => document.getElementById(id).addEventListener('change', () => checkField(id, '')));
  $('#resName').addEventListener('blur', e => { if (e.target.value) checkField('resName', validName(e.target.value)); });
}

/* =========================================================
   FORMULARIO DE CONTACTO (Web3Forms)
   ========================================================= */
function initContact() {
  const form = $('#contactForm');
  const status = $('#cStatus');
  const rules = {
    cNombre: v => validName(v, 'tu nombre'),
    cApellido: v => validName(v, 'tu apellido'),
    cEmail: validEmail,
    cTel: validPhoneUY,
    cTipo: v => v ? '' : 'Elegí el tipo de consulta.',
    cMensaje: validMessage
  };
  Object.keys(rules).forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener('blur', () => { if (el.value) checkField(id, rules[id](el.value)); });
    el.addEventListener('input', () => { if (el.closest('.field').classList.contains('has-err')) checkField(id, rules[id](el.value)); });
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    status.className = 'form-status'; status.textContent = '';
    let firstBad = null;
    Object.keys(rules).forEach(id => {
      const ok = checkField(id, rules[id](document.getElementById(id).value));
      if (!ok && !firstBad) firstBad = id;
    });
    if (firstBad) { document.getElementById(firstBad).focus(); return; }
    if (form.botcheck.checked) return;

    const btn = $('#cSubmit');
    btn.disabled = true; btn.textContent = 'Enviando…';
    const data = {
      access_key: CONFIG.web3formsKey,
      subject: CONFIG.asuntoMail,
      from_name: 'Web de Tsunami',
      replyto: $('#cEmail').value.trim(),
      'Nombre': $('#cNombre').value.trim(),
      'Apellido': $('#cApellido').value.trim(),
      'Correo electrónico': $('#cEmail').value.trim(),
      'Teléfono': $('#cTel').value.trim(),
      'Tipo de consulta': $('#cTipo').value,
      'Mensaje': $('#cMensaje').value.trim()
    };
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      status.className = 'form-status ok';
      status.textContent = '¡Gracias! Recibimos tu consulta y te respondemos por mail a la brevedad.';
    } catch (err) {
      status.className = 'form-status bad';
      status.textContent = 'No se pudo enviar. Probá de nuevo o escribinos por WhatsApp.';
    } finally {
      btn.disabled = false; btn.textContent = 'Enviar consulta';
    }
  });
}

/* ---------- Arranque ---------- */
document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  bindWaLinks();
  initHeader();
  initReveal();
  initMenu();
  initReservas();
  initContact();
});
