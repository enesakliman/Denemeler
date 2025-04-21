// map() kullanımı: Bir array’in her elemanını belli bir kurala göre dönüştürür, yeni bir array döner.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(numbers);
console.log(doubled);

// filter() kullanımı: Şarta uyan elemanları süzer, yeni bir array döner.
const even = numbers.filter((num) => num % 2 === 0);
console.log(even);

// reduce() Kullanımı: Bir array’i tek bir değere indirger. Genelde toplam, çarpım, objeye dönüştürme gibi işlemlerde kullanılır.
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total);

// find() Kullanımı: Koşulu sağlayan ilk elemanı döner.
const users = [
  { id: 1, name: "Ayşe" },
  { id: 2, name: "Fatma" },
];
const user = users.find((u) => u.id === 1);
console.log(user);

// some() Kullanımı: Array’in en az bir elemanı koşulu sağlıyorsa true döner.
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven);

// every() Kullanımı: Array’in tüm elemanları koşulu sağlıyorsa true döner.
const allEven = numbers.every(num => num % 2 === 0)
console.log(allEven);

// Örnek
const products = [
    { name: "Laptop", price: 8000, inStock: true },
    { name: "Telefon", price: 5000, inStock: false },
    { name: "Klavye", price: 400, inStock: true },
    { name: "Mouse", price: 250, inStock: true },
  ];
  
const productsName = products.map(pro => pro.name.toUpperCase()) // map() örneklendirme
console.log(productsName);

const productsInStock = products.filter(pro => pro.inStock, true) // filter() örneklendirme
console.log(productsInStock)

const productsTotalPrice = products.reduce((total, pro) =>{
    return total + pro.price
}, 0)
console.log("Tüm Ürünlerin Toplam Fiyatı",productsTotalPrice)

const productsInStockPrice = productsInStock.reduce((total, pro) => {
    return total + pro.price
}, 0)

console.log("Stokta Olan Ürünlerin Toplam Fiyatı:",productsInStockPrice)

const productsPriceFind = products.find((p) => p.price === 5000)
console.log(productsPriceFind)

const productsStock = products.some((p) => p.inStock, true)
console.log(productsStock)

const productsAllStock = products.every(p => p.inStock, true)
console.log(productsAllStock)