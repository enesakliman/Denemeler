// // 1. Gün
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
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven);

// Örnek
const products = [
  { name: "Laptop", price: 8000, inStock: true },
  { name: "Telefon", price: 5000, inStock: false },
  { name: "Klavye", price: 400, inStock: true },
  { name: "Mouse", price: 250, inStock: true },
];

const productsName = products.map((pro) => pro.name.toUpperCase()); // map() örneklendirme
console.log(productsName);

const productsInStock = products.filter((pro) => pro.inStock, true); // filter() örneklendirme
console.log(productsInStock);

const productsTotalPrice = products.reduce((total, pro) => {
  return total + pro.price;
}, 0);
console.log("Tüm Ürünlerin Toplam Fiyatı", productsTotalPrice);

const productsInStockPrice = productsInStock.reduce((total, pro) => {
  return total + pro.price;
}, 0);

console.log("Stokta Olan Ürünlerin Toplam Fiyatı:", productsInStockPrice);

const productsPriceFind = products.find((p) => p.price === 5000);
console.log(productsPriceFind);

const productsStock = products.some((p) => p.inStock, true);
console.log(productsStock);

const productsAllStock = products.every((p) => p.inStock, true);
console.log(productsAllStock);

// // 2. Gün

// Scope: Değişkenlerin nerede tanımlandığına göre erişilip erişilemediğini belirler.
// Tipler:
// Global Scope
// Function Scope
// Block Scope (let/const ile)

function testScope() {
  let massage = "Merhaba";
  console.log(massage);
}
// console.log(massage);

// Closure: Bir fonksiyon, kendi scope’unda olmayan bir değişkene erişmeye devam edebiliyorsa, buna closure denir. Yani fonksiyonlar hafızasında dış değişkeni tutar.
function sayacOlustur() {
  let sayi = 0;
  return function () {
    sayi++;
    console.log(sayi);
  };
}
const sayac = sayacOlustur();
sayac();
sayac();
sayac();
// sayi, fonksiyon kapandıktan sonra bile hatırlanır.

// Hosting: Değişkenler ve fonksiyonlar, tanımlandıkları yerden yukarı “taşınmış gibi” davranırlar. Ama bu davranış sadece var ve function declaration için geçerlidir.

console.log(x);
var x = 5;

// console.log(y) Hata verir.
let y = 4;

foo();
function foo() {
  console.log("Hello");
}

// this: bir fonksiyonun nasıl çağrıldığına bağlı olarak değişen bir bağlamdır.

const person = {
  name: "Zeynep",
  speak() {
    console.log("Benim adım " + this.name);
  },
};

person.speak(); // Benim adım Zeynep

const speakFunc = person.speak;
speakFunc(); // this -> undefined (strict mode'da) veya window

// example
document.addEventListener("DOMContentLoaded", function () {
  const btnSayac = document.getElementById("btn");
  const mekan = document.getElementById("mekan");

  function sayacOlustur() {
    let sayi = 0;
    return function () {
      sayi++;
      mekan.textContent = sayi;
    };
  }

  const sayacA = sayacOlustur();
  btnSayac.addEventListener("click", sayacA);
});
