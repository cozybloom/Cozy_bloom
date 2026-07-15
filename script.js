// --- قاعدة البيانات الأساسية المرتبة بالفولدرات ---
const products = [
  /* ==========================================================================
     1. قسم الأباجورات (Lamps) - 10 منتجات
     ========================================================================== */
  {
    id: 'Lily Lamp',
    name: 'Lily Lamp',
    price: 500,
    category: 'lamps',
    image: 'img/lamps/lamp1.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'Stargazer lily lamp',
    name: 'Stargazer lily lamp',
    price: 550,
    category: 'lamps',
    image: 'img/lamps/lamp2.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'Giant Rapunzel Lamp',
    name: 'Giant Rapunzel Lamp',
    price: 700,
    category: 'lamps',
    image: 'img/lamps/lamp3.jpg',
    hasColors: false,
  },
  {
    id: 'Lotus Lamp',
    name: 'Lotus Lamp',
    price: 250,
    category: 'lamps',
    image: 'img/lamps/lamp4.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'Tulip Lamp',
    name: 'Tulip Lamp',
    price: 500,
    category: 'lamps',
    image: 'img/lamps/lamp5.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'Sunflower Lamp',
    name: 'Sunflower Lamp',
    price: 600,
    category: 'lamps',
    image: 'img/lamps/lamp6.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'Giant Tulip Lamp',
    name: 'Giant Tulip Lamp',
    price: 650,
    category: 'lamps',
    image: 'img/lamps/lamp7.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'Giant Tulip Lamp',
    name: 'Giant Tulip Lamp',
    price: 650,
    category: 'lamps',
    image: 'img/lamps/lamp8.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'Jellyfish lamp',
    name: 'Jellyfish lamp',
    price: 450,
    category: 'lamps',
    image: 'img/lamps/lamp9.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'Small Rapunzel Lamp',
    name: 'Small Rapunzel Lamp',
    price: 450,
    category: 'lamps',
    image: 'img/lamps/lamp10.jpg',
    hasColors: false,
  },

  /* ==========================================================================
     2. قسم الميداليات (Medals) - 8 منتجات
     ========================================================================== */
  {
    id: 'medal-1',
    name: 'Pearl Rose Charm',
    price: 60,
    category: 'medals',
    image: 'img/medals/medal1.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'medal-2',
    name: 'Octopus Charm',
    price: 60,
    category: 'medals',
    image: 'img/medals/medal2.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'medal-3',
    name: ' Mini Bouquet',
    price: 60,
    category: 'medals',
    image: 'img/medals/medal3.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'medal-4',
    name: 'Frog Duck',
    price: 60,
    category: 'medals',
    image: 'img/medals/medal4.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'medal-5',
    name: 'Hello Kitty',
    price: 60,
    category: 'medals',
    image: 'img/medals/medal5.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'medal-6',
    name: 'ميدالية شنطة هاند ميد رقم 6',
    price: 60,
    category: 'Yellow Bloomls',
    image: 'img/medals/medal6.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'medal-7',
    name: 'Sunflower Charm',
    price: 60,
    category: 'medals',
    image: 'img/medals/medal7.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'medal-8',
    name: 'Pink Bloom',
    price: 60,
    category: 'medals',
    image: 'img/medals/medal8.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },

  /* ==========================================================================
   3. قسم البوكيهات (Bouquets) - 18 منتج
   ========================================================================== */
  {
    id: 'bouquet-1',
    name: 'Tulip Bouquet',
    price: 700,
    category: 'bouquets',
    image: 'img/bouquets/bouquet1.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },
  {
    id: 'bouquet-2',
    name: 'Lilium Bouquet',
    price: 600,
    category: 'bouquets',
    image: 'img/bouquets/bouquet2.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },
  {
    id: 'bouquet-3',
    name: 'Flora Bouquet',
    price: 850,
    category: 'bouquets',
    image: 'img/bouquets/bouquet3.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },
  {
    id: 'bouquet-4',
    name: 'Heart Bouquet',
    price: 400,
    category: 'bouquets',
    image: 'img/bouquets/bouquet4.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },
  {
    id: 'bouquet-5',
    name: 'Camellia Bouquet',
    price: 650,
    category: 'bouquets',
    image: 'img/bouquets/bouquet5.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },
  {
    id: 'bouquet-6',
    name: 'Butterfly Bouquet',
    price: 1550,
    category: 'bouquets',
    image: 'img/bouquets/bouquet6.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },
  {
    id: 'bouquet-7',
    name: 'Magnolia Bouquet',
    price: 470,
    category: 'bouquets',
    image: 'img/bouquets/bouquet7.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },
  {
    id: 'bouquet-8',
    name: 'Sakura Bouquet',
    price: 350,
    category: 'bouquets',
    image: 'img/bouquets/bouquet8.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },
  {
    id: 'bouquet-9',
    name: 'Hydrangea Bouquet',
    price: 400,
    category: 'bouquets',
    image: 'img/bouquets/bouquet9.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },

  /* ==========================================================================
   تابع قسم البوكيهات (Bouquets) - من 11 لـ 18
   ========================================================================== */
  {
    id: 'bouquet-11',
    name: 'Rose Bouquet',
    price: 800,
    category: 'bouquets',
    image: 'img/bouquets/bouquet11.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },
  {
    id: 'bouquet-13',
    name: 'Lily Bouquet',
    price: 850,
    category: 'bouquets',
    image: 'img/bouquets/bouquet13.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },
  {
    id: 'bouquet-14',
    name: 'Velvet Bouquet',
    price: 500,
    category: 'bouquets',
    image: 'img/bouquets/bouquet14.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },
  {
    id: 'bouquet-16',
    name: 'Dahlia Bouquet',
    price: 900,
    category: 'bouquets',
    image: 'img/bouquets/bouquet16.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },
  {
    id: 'bouquet-17',
    name: 'Jasmine Bouquet',
    price: 450,
    category: 'bouquets',
    image: 'img/bouquets/bouquet17.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]

  },
  {
    id: 'bouquet-18',
    name: 'Iris Bouquet',
    price: 350,
    category: 'bouquets',
    image: 'img/bouquets/bouquet18.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"],
    hasLed: true,    // خيار الإضاءة متاح
    ledPrice: 50     // تكلفة إضافة الـ LED
  },
  /* ==========================================================================
     4. قسم وردة سنجل عادية (Single Flowers) - 7 منتجات
     ========================================================================== */
  {
    id: 'sflower-1',
    name: 'Single Rose',
    price: 80,
    category: 'single-flowers',
    image: 'img/normal-flowers/flower1.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'sflower-2',
    name: ' Wrapped sunflower',
    price: 100,
    category: 'single-flowers',
    image: 'img/normal-flowers/flower2.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'sflower-3',
    name: 'Wrapped rose',
    price: 100,
    category: 'single-flowers',
    image: 'img/normal-flowers/flower3.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'sflower-4',
    name: 'Wrapped lily',
    price: 100,
    category: 'single-flowers',
    image: 'img/normal-flowers/flower4.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'sflower-5',
    name: 'Peony flower',
    price: 130,
    category: 'single-flowers',
    image: 'img/normal-flowers/flower5.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'sflower-6',
    name: 'Whispering Tulip ',
    price: 100,
    category: 'single-flowers',
    image: 'img/normal-flowers/flower6.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'sflower-7',
    name: 'Wrapped tulip',
    price: 100,
    category: 'single-flowers',
    image: 'img/normal-flowers/flower7.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },

  /* ==========================================================================
     5. قسم وردة سنجل عملاقة (Giant Flowers) - 5 منتجات
     ========================================================================== */
  {
    id: 'gflower-1',
    name: 'Giant rose',
    price: 500,
    category: 'single-flowers',
    image: 'img/giant-flowers/flower8.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'gflower-2',
    name: 'Giant rose',
    price: 500,
    category: 'single-flowers',
    image: 'img/giant-flowers/flower9.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'gflower-3',
    name: 'Giant rose',
    price: 500,
    category: 'single-flowers',
    image: 'img/giant-flowers/flower10.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'gflower-4',
    name: 'Giant rose',
    price: 500,
    category: 'single-flowers',
    image: 'img/giant-flowers/flower11.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'gflower-5',
    name: ' Giant rose',
    price: 500,
    category: 'single-flowers',
    image: 'img/giant-flowers/flower12.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },

  /* ==========================================================================
     6. قسم ميني بوت زينة مكتب (Mini Pots) - 10 منتجات
     ========================================================================== */
  /* ==========================================================================
     قسم الأصص الصغيرة (Mini Pots) - من 1 لـ 11
     ========================================================================== */
  {
    id: 'pot-1',
    name: 'Lily Mini Pot',
    price: 90,
    category: 'mini-pots',
    image: 'img/mini_pots/pot1.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'pot-2',
    name: 'Blossom Mini Pot',
    price: 90,
    category: 'mini-pots',
    image: 'img/mini_pots/pot2.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'pot-3',
    name: 'Daisy Desk Buddy',
    price: 90,
    category: 'mini-pots',
    image: 'img/mini_pots/pot3.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'pot-4',
    name: 'Hydrangea Mini Pot',
    price: 90,
    category: 'mini-pots',
    image: 'img/mini_pots/pot4.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'pot-5',
    name: 'Trio Daisy Pot',
    price: 90,
    category: 'mini-pots',
    image: 'img/mini_pots/pot5.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'pot-6',
    name: 'Lotus Mini Pot',
    price: 90,
    category: 'mini-pots',
    image: 'img/mini_pots/pot6.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'pot-7',
    name: 'Mini Daisy Pot',
    price: 90,
    category: 'mini-pots',
    image: 'img/mini_pots/pot7.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'pot-8',
    name: 'Sunflower Mini Pot',
    price: 90,
    category: 'mini-pots',
    image: 'img/mini_pots/pot8.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'pot-9',
    name: 'Bow Tulip Pot',
    price: 90,
    category: 'mini-pots',
    image: 'img/mini_pots/pot9.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'pot-10',
    name: 'Lavender Tulip Pot',
    price: 90,
    category: 'mini-pots',
    image: 'img/mini_pots/pot10.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'pot-11',
    name: 'Bunny Tulip Pot',
    price: 100,
    category: 'mini-pots',
    image: 'img/mini_pots/pot11.jpg',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  /* ==========================================================================
     7. قسم خاص (Special) - 3 منتجات
     ========================================================================== */
  {
    id: 'spec-1',
    name: 'Graduation Package',
    price: 800,
    category: 'special',
    image: 'img/special/graduation1.jpg',
    hasColors: false
  },
  {
    id: 'spec-1-2',
    name: 'Graduation Package',
    price: 800,
    category: 'special',
    image: 'img/special/graduation2.jpg',
    hasColors: false
  },
  {
    id: 'spec-2',
    name: 'Wall Hanger',
    price: 450,
    category: 'special',
    image: 'img/special/hanger.png',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  },
  {
    id: 'spec-3',
    name: 'Pearl Shell',
    price: 300,
    category: 'special',
    image: 'img/special/shell.png',
    hasColors: true,
    colors: ["Baby Pink", "Hot Pink", "Royal Blue", "Baby Blue", "White", "Lavender", "Purple", "Orange", "Yellow"]
  }
];
let cart = [];
let currentPage = 1;
const productsPerPage = 8; // حددي عدد المنتجات التي ترغبين في ظهورها بالصفحة الواحدة هنا
let filteredProducts = []; // لتخزين المنتجات بعد تصفيتها وقبل تقسيمها

// عرض المنتجات في المتجر مع دعم تقسيم الصفحات
function displayProducts() {
  let container = document.getElementById('products-container');
  container.innerHTML = '';

  // حساب مؤشر البداية والنهاية للمنتجات في الصفحة الحالية
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

  if (productsToDisplay.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#999; padding:20px; grid-column: 1/-1;">لا توجد منتجات في هذا القسم حالياً 🌸</p>';
    document.getElementById('pagination-container').innerHTML = '';
    return;
  }

  productsToDisplay.forEach(product => {
    // 🎨 خيار الألوان
    let colorHTML = product.hasColors ? `
                    <select class="color-selector" id="color-${product.id}">
                    <option value="" disabled selected hidden>Colors</option>                        ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                    </select>
                ` : '<div style="height:10px;"></div>';

    // 💡 خيار الـ LED مع تحديث السعر مباشرة عند الاختيار
    let ledHTML = product.hasLed ? `
    <div class="led-option-wrap" style="margin: 6px 0; text-align: left; font-size: 0.75rem; width: 100%;">
        <label style="cursor: pointer; display: inline-flex; align-items: center; gap: 4px; color: #666; white-space: nowrap;">
            <input type="checkbox" id="led-${product.id}" style="margin: 0; transform: scale(0.9);" onchange="updateProductCardPrice('${product.id}', ${product.price}, ${product.ledPrice || 50})">
            <span>Add LED Light (+${product.ledPrice || 50} EGP)</span>
        </label>
    </div>
` : '';
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
                    <div class="product-img-container">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x400?text=Cozy+Bloom'">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-price">${product.price} EGP</p>
                        ${colorHTML}
                        ${ledHTML}
                        <button class="add-to-cart-btn" onclick="addToCart('${product.id}')"> Add to Cart</button>
                    </div>
                `;
    container.appendChild(card);
  });

  // توليد أزرار التنقل والصفحات أسفل المنتجات
  setupPagination();
}

// توليد أزرار الصفحات ديناميكياً
function setupPagination() {
  const paginationContainer = document.getElementById('pagination-container');
  if (!paginationContainer) return; // حماية في حال لم يتم وضع الحاوية في الـ HTML بعد

  paginationContainer.innerHTML = '';
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // إذا كانت المنتجات تكفي لصفحة واحدة فقط، لا داعي لعرض الأزرار
  if (totalPages <= 1) return;

  // زر الصفحة السابقة (←)
  const prevBtn = document.createElement('button');
  prevBtn.className = 'page-btn';
  prevBtn.innerHTML = '←';
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      displayProducts();
      scrollToCollections();
    }
  };
  paginationContainer.appendChild(prevBtn);

  // أزرار أرقام الصفحات
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = `page-btn ${currentPage === i ? 'active' : ''}`;
    pageBtn.innerText = i;
    pageBtn.onclick = () => {
      currentPage = i;
      displayProducts();
      scrollToCollections();
    };
    paginationContainer.appendChild(pageBtn);
  }

  // زر الصفحة التالية (→)
  const nextBtn = document.createElement('button');
  nextBtn.className = 'page-btn';
  nextBtn.innerHTML = '→';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayProducts();
      scrollToCollections();
    }
  };
  paginationContainer.appendChild(nextBtn);
}

// دالة مساعدة لرفع الصفحة لأعلى قسم المنتجات بسلاسة عند الانتقال لصفحة أخرى
function scrollToCollections() {
  const collectionsSection = document.getElementById('Collections');
  if (collectionsSection) {
    window.scrollTo({
      top: collectionsSection.offsetTop - 100, // يترك مساحة صغيرة مريحة أعلى الفلتر
      behavior: 'smooth'
    });
  }
}

// دالة حساب السعر الإجمالي للمنتج مع إضافة سعر الليد إذا تم تحديده
// دالة حساب السعر الإجمالي (تم تعديلها ليكون الليد مجاني وبدون أي زيادة في السعر)
function calculateTotal(product, hasLedSelected) {
  if (hasLedSelected && product.hasLed) {
    return product.price + (product.ledPrice || 50); // يجمع سعر المنتج + سعر الليد
  }
  return product.price; // يرجع السعر الأصلي إذا لم يتم اختيار الليد
}

// تصفية المنتجات حسب التصنيف وإعادة ضبط الصفحات
function filterCategory(category) {
  showStoreFront();

  // تصفية المنتجات الأصلية وإعادتها للصفحة الأولى دائماً عند تغيير الفئة
  filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
  currentPage = 1;
  displayProducts();

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  const matchBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(category));
  if (matchBtn) matchBtn.classList.add('active');
}

// إضافة للمجموعات وتحديث السلة
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  let selectedColor = '';

  // 1. التأكد من اللون
  if (product.hasColors) {
    const colorSelect = document.getElementById(`color-${productId}`);
    selectedColor = colorSelect.value;
    if (!selectedColor) {
      showToast('Please select a color first! 🌸');
      return;
    }
  }

  // 2. التفتيش على خيار الـ LED
  let hasLedSelected = false;
  if (product.hasLed) {
    const ledCheckbox = document.getElementById(`led-${productId}`);
    if (ledCheckbox && ledCheckbox.checked) {
      hasLedSelected = true;
    }
  }

  // 3. حساب السعر المطلوب (بالإضاءة أو بدون)
  const itemPrice = calculateTotal(product, hasLedSelected);

  // 4. إضافة المنتج للسلة (مع التمييز بين الذي بـ LED والذي بدونه)
  const cartItem = cart.find(item => item.id === productId && item.color === selectedColor && item.hasLed === hasLedSelected);

  if (cartItem) {
    cartItem.qty++;
  } else {
    cart.push({
      ...product,
      price: itemPrice, // السعر المعدل
      color: selectedColor,
      hasLed: hasLedSelected,
      qty: 1
    });
  }

  updateCartUI();
  toggleSidebar(true);
}

// تحديث واجهات السلة
// تحديث واجهات السلة (تظهر خيار الليد بالإنجليزية وبدون أي زيادة في السعر)
// تحديث واجهات السلة (تظهر خيار الليد بالإنجليزية وبدون أي زيادة في السعر)
function updateCartUI() {
  const sidebarContainer = document.getElementById('sidebar-items-container');
  const pageContainer = document.getElementById('cart-page-items-container');

  if (sidebarContainer) sidebarContainer.innerHTML = '';
  if (pageContainer) pageContainer.innerHTML = '';

  let total = 0;
  let count = 0;

  if (cart.length === 0) {
    if (sidebarContainer) sidebarContainer.innerHTML = '<p style="text-align:center; color:#999; padding:20px;">السلة فارغة 🌸</p>';
    if (pageContainer) pageContainer.innerHTML = '<p style="text-align:center; color:#999; padding:20px;">السلة فارغة حالياً.. املأيها بالورد والجمال! 🌸</p>';
  } else {
    cart.forEach((item, index) => {
      total += item.price * item.qty;
      count += item.qty;

      // إظهار خيار الليد بالإنجليزية بشكل مميز وأنيق
      const ledBadge = item.hasLed ? '<br><small style="color:#FFB84C; font-weight:bold;">💡 LED Light Included (Free)</small>' : '';

      // 1. السلة الجانبية
      if (sidebarContainer) {
        const sItem = document.createElement('div');
        sItem.className = 'sidebar-item';
        sItem.innerHTML = `
                        <div>
                            <strong>${item.name}</strong>
                            ${item.color ? `<br><small style="color:#888;">اللون: ${item.color}</small>` : ''}
                            ${ledBadge}
                            <br><small>${item.price} EGP × ${item.qty}</small>
                        </div>
                        <button onclick="removeFromCart(${index})" style="color:#FF6B6B; background:none; border:none; cursor:pointer;">✕</button>
                    `;
        sidebarContainer.appendChild(sItem);
      }

      // 2. الصفحة المنفصلة الكاملة
      if (pageContainer) {
        const pItem = document.createElement('div');
        pItem.className = 'cart-page-item';
        pItem.innerHTML = `
                        <div>
                            <strong>${item.name}</strong>
                            ${item.color ? `<br><small style="color:#888;">اللون: ${item.color}</small>` : ''}
                            ${ledBadge}
                            <br><small>${item.price} EGP × ${item.qty}</small>
                        </div>
                        <button onclick="removeFromCart(${index})" style="color:#FF6B6B; background:none; border:none; cursor:pointer; font-weight:bold;">حذف</button>
                    `;
        pageContainer.appendChild(pItem);
      }
    });
  }

  // تحديث عدد المنتجات فوق أيقونة السلة
  const cartCountEl = document.getElementById('cart-count');
  if (cartCountEl) {
    cartCountEl.innerText = count;
  }

  // تحديث السعر الإجمالي لصفحة السلة الكاملة
  const pageTotalEl = document.getElementById('cart-page-total-price');
  if (pageTotalEl) {
    pageTotalEl.innerText = total;
  }

  // ✨ إضافة تحديث السعر الإجمالي في السلة الجانبية (Sidebar)
  const sidebarTotalEl = document.getElementById('sidebar-total-price'); // تأكدي أن هذا الـ ID موجود في الـ HTML الخاص بالسلة الجانبية
  if (sidebarTotalEl) {
    sidebarTotalEl.innerText = total;
  }
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

// التحكم في فتح وقفل السلة والـ Overlay الشفاف
function toggleSidebar(show) {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  if (show) {
    sidebar.classList.add('open');
    overlay.classList.add('show');
  } else {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  }
}

function switchToCartPage() {
  toggleSidebar(false);
  showCartPage();
}

function showCartPage() {
  document.getElementById('store-front-view').style.display = 'none';
  document.getElementById('cart-page-section').style.display = 'block';
  document.getElementById('Home').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showStoreFront() {
  document.getElementById('cart-page-section').style.display = 'none';
  document.getElementById('Home').style.display = 'flex';
  document.getElementById('store-front-view').style.display = 'block';
}

// إرسال البيانات للواتساب (معدل لإظهار خيار الليد)
function sendToWhatsApp() {
  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const address = document.getElementById('cust-address').value.trim();

  if (!name || !phone || !address) {
    showToast('Please fill in your delivery details! 📦');
    return;
  }

  if (cart.length === 0) {
    showToast('Your cart is empty! Add some beautiful flowers first 😉');
    return;
  }

  let message = `🌸 *طلب جديد من متجر Cozy Bloom* 🌸\n\n`;
  message += `👤 *الاسم:* ${name}\n`;
  message += `📞 *الرقم:* ${phone}\n`;
  message += `📍 *العنوان:* ${address}\n\n`;
  message += `🛍 *المنتجات المطلوبة:*\n`;

  let total = 0;
  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    // 💡 1. بناء تفاصيل المنتج (الاسم واللون إن وجد)
    let itemDetails = `- ${item.name}`;
    if (item.color) {
      itemDetails += ` (اللون: ${item.color})`;
    }

    // 💡 2. إضافة خيار الليد بوضوح إلى جانب المنتج إذا كان العميل قد اختاره
    if (item.hasLed) {
      itemDetails += ` [مع إضاءة LED 💡]`;
    }

    // 3. إضافة العدد والسعر الإجمالي للمنتج في السطر
    message += `${itemDetails} | العدد: ${item.qty} | السعر: ${itemTotal} EGP\n`;
  });

  message += `\n💰 *الإجمالي الكلي:* ${total} EGP`;

  const whatsappUrl = `https://wa.me/201070648458?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}
// التحكم في قائمة الموبايل المنسدلة
function toggleMobileMenu() {
  const nav = document.getElementById('main-nav');
  const menu = document.getElementById('mobile-menu');
  const toggle = document.getElementById('nav-toggle');
  const isOpen = menu.classList.toggle('open');
  nav.classList.toggle('menu-open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// التشغيل المبدئي للمتجر بعرض كل المنتجات
filterCategory('all');

// دالة لإظهار رسالة تنبيه شيك بديلة للـ alert التقليدية
function showToast(message) {
  // 1. التحقق من عدم وجود رسالة قديمة معروضة حالياً عشان ميتراكموش فوق بعض
  let existingToast = document.querySelector('.toast-notification');
  if (existingToast) {
    existingToast.remove();
  }

  // 2. إنشاء عنصر الرسالة الجديد
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerText = message;

  // 3. إضافة الرسالة لـ body الصفحة
  document.body.appendChild(toast);

  // 4. إظهار الرسالة بتأثير الحركة بعد جزء من الثانية
  setTimeout(() => {
    toast.classList.add('show');
  }, 50);

  // 5. إخفاء الرسالة وحذفها بعد 3 ثواني (3000 مللي ثانية)
  setTimeout(() => {
    toast.classList.remove('show');
    // حذف العنصر تماماً من الكود بعد انتهاء حركة الاختفاء
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3000);
}
// دالة لتحديث السعر المعروض في كارت المنتج مباشرة عند تحديد الليد
function updateProductCardPrice(productId, basePrice, ledPrice) {
  const checkbox = document.getElementById(`led-${productId}`);
  const priceElement = checkbox.closest('.product-info').querySelector('.product-price');

  if (checkbox && checkbox.checked) {
    priceElement.innerText = `${basePrice + ledPrice} EGP`;
  } else {
    priceElement.innerText = `${basePrice} EGP`;
  }
}

// دالة إغلاق السلة وقائمة الموبايل عند الضغط في أي مكان خارجهم (على الـ Overlay)
function closeAllOverlays() {
  // 1. إغلاق السلة الجانبية
  toggleSidebar(false);
  
  // 2. إغلاق قائمة الموبايل المنسدلة (إذا كانت مفتوحة)
  const menu = document.getElementById('mobile-menu');
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  
  if (menu && menu.classList.contains('open')) {
    menu.classList.remove('open');
    if (nav) nav.classList.remove('menu-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }
}
