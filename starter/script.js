'use strict';
 
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ---------------------------------- Selecting, creating and deleting

//Selecting elements
// const html = document.documentElement
// const head = document.head
// const body = document.body

// const allSections = document.querySelectorAll('.section')

// const sectionOne = document.getElementById('section--1')
// const allBtn = document.getElementsByTagName('button')
// const allClassesBtn = document.getElementsByClassname('btn')


// const header = document.querySelector('.header')

// ---------- Creating elements
// .insertAdjacentHTML('beforebegin', html)

// const message = document.createElement('div')
// message.classList.add('cookie-message')
// message.textContent = 'We use cookies for improved functionality and analytics'
// message.innerHTML = 'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>'

// header.prepend(message) // Header elementning boshidan ya'ni boshlanishi qayerda bo'lsa o'sha yerdan qo'yib beradi

// header.append(message) // Header elemntning oxiridan ya'ni header qayerda tugagan bo'lsa o'sha tugagan joyidan oldin qo'yib beradi

// header.prepend(message) // After begin
// header.append(message.cloneNode(true)) // Before end // Agar headerni ham boshida ham tugashida qo'yib bermoqchi bo'lsak birortasiga .cloneNode(true) qo'shib berishimiz kerak bo'ladi

// header.before(message) // Header boshlanishidan avval header elemntidan oldin qo'yib beradi
// header.after(message) // HEader elemntidan keyin y'ani tugashidan keyin header elemntining tashqarisidan qo'yib beradi. Bu ikki holda message header elemntidan tashqarida bo'ladi

// document.querySelector('.btn--close-cookie').addEventListener("click", () => {
  // message.parentElement.removeChild(message) // Eski usul bo'lib, birinchi o'chirmoqchi bo'lgan elementizmizni otasini ushlaymiz va keyin yana removeChild qilib shu elemntni berib yuboramiz

//   message.remove() // Bu yangi usul, shunchaki o'chirmoqchi bo'lgan elementimizga remove() metodni qo'shib beramiz
// })

// ---------------------------Styles, Attributes and Classes 
// message.style.backgroundColor = '#37383d'
// message.style.width = '120%'

// Style dagi qiymatlarni olish

// console.log(message.style.backgroundColor) // rgb(55, 56, 61)
// console.log(message.style.height) // Hech nima qaytarmaydi sababi bunaqa usul bilan faqat o'zimiz JS da bergan style larni olsak bo'ladi
// console.log(message.style.width) // 120%

// Barcha qiymatlarni hatto css da berilmagan avtomatik style larni olishning usuli

// console.log(getComputedStyle(message).height) // Bu yerda .heightni qo'ymasak barcha css stylelarni olib beradi qaysi biri kerak bo'lsa . orqali style nomini yozib qiymat olsak bo'ladi

// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px'

// document.documentElement.style.setProperty('--color-primary', 'orangered') // Bu css dagi variable larni ushlash, ularni o'zgartirish uchun

// Attribute lar bilan ishlash

// const logo = document.querySelector('.nav__logo')

// Standart attribute larni olish
// console.log(logo.alt)

// data- attributini olish
// Misol uchun data-version-number="3.0" degan attr bo'lsin, [data-] o'rniga dataset yoziladi, undan keyingi so'zlarni dataset.version agar data-version-number bo'lsa versiondan keyin Camele Case qilib yoziladi, dataset.versionNumber qilib
//console.log(logo.dataset.versionNumber)

// Standart bo'lmagan attributelarni olish, qo'shish
// console.log(logo.setAttribute('designer', 'Sunnat')) // qo'shish
// console.log(logo.getAttribute('designer')) // olish

//Classes

// ----------------Implementing smooth scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.getElementById('section--1')

btnScrollTo.addEventListener('click', function() {
  // const s1coords = section1.getBoundingClientRect() // Kordinatalarnini olib beradi

  // console.log('Current scroll (X/Y)', scrollX, scrollY) qancha masofaga scroll qilganimizni ko'rsatadi
  // console.log('width/height', document.documentElement.clientWidth, document.documentElement.clientHeight) // saytning ekran bo'yicha qancha qismida ko'rinib turganini aytadi

  // Scrolling
  // window.scrollTo(s1coords.left, s1coords.top)
  // window.scrollTo({
  //   left: s1coords.left + scrollX,
  //   top: s1coords.top + scrollY,
  //   behavior: 'smooth'
  // })

  section1.scrollIntoView()
})

// ------------------Types of events and event handlers

// const h1 = document.querySelector('h1')

// ----- mouseenter eventlisteneri ----

// h1.addEventListener('mouseenter', () => { // Hover effectiga o'xshaydi: sichqoncha shu elemnt ustiga kelishi
//   alert('Mouse entered!')
// })

// h1.onmouseenter = () => alert('hello world') // Eski usuli mouseenter ni

// Yuqoridagi ikkalasining farqi misol uchun shu h1 elemtiga 3 ta mouseenter bilan yangi usulda 3 xil funksiya yozdik, bu vaziyatda uchalasi navbat bilan ishlaydi, eski usulda esa faqat ohirgisi ishlaydi
// Yana bir farqi yangi usulda faqat bir marta ishlaydigan qilsa bo'ladi eskisida yo'q. Misol pastda

// const alertH1 = () => {
//   alert('Hi guys')
//   h1.removeEventListener('mouseenter', alertH1) // Event listenerlarni o'shirish uchun removeEventListener ishlatiladi
// }

// h1.addEventListener('mouseenter', alertH1)

// --------------- Event propagation: bubbling and capturing --------

// Bubbling phase - bir element va uning otasiga bir xil eventListenerlar berilgan bo'lsa va aynan shu elementni o'zi bosilganda birinchi o'zining funksiyasi ishlab so'ng otasiga ham ta'sir etadigan holat, Pastdagi kod bunga misol, keyin bubbling phase ni o'chirib qo'yish mumkin

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor()
//   // e.target // Bu ikkovining farqi shundaki e.target aynan qaysi bir elementga click bo'lsa barcha click eventListenerlar uchun shu elemnt bo'lib hisoblanadi, ya'ni e.target bu vaziyatda .nav__linkga teng
//   // e.currentTarget // Bu qaysi elementning eventListeneriga teng bo'lsa huddi o'shani o'ziga teng
//   console.log(this)
//   e.stopPropagation() // Bu bubbling bo'lmasligi uchun qo'yiladi ya'ni bubbling hususiyatini o'chirib qo'yadi, Lekin bunday qilish maslahat berilmaydi, Bu vaziyatda bubbling phase emas, target phase bo'lib qoladi
// })

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   // e.target // Bu yerda ham .nav__linkga teng sababi aynan .nav__linkka click qilindi shuning uchun e.target .nav__linkka teng bo'lib qoldi
//   this.style.backgroundColor = randomColor()
// })
// // Capturing phase qo'shish default holatda qo'shilmagan ya'ni false ga teng bo'ladi, uni qo'shish uchun addEventListenerga 3-chi argument sifatida true ni yuboramiz va capturing phase bubbling phase ni teskarisi bo'lib ishlaydi
// document.querySelector('.nav').addEventListener('click', function(e) {
//   // e.target // Bu yerda ham .nav__linkga teng sababi aynan .nav__linkka click qilindi shuning uchun e.target .nav__linkka teng bo'lib qoldi
//   this.style.backgroundColor = randomColor()
// }, true)

// ------------------ DOM Traversing -------------------

// const h1 = document.querySelector('h1')

//------------ Going downwards: child

// console.log(h1.querySelectorAll('.highlight')) // h1 teg ichidagi .highlight class i boor elementlarni olib beradi
// console.log(h1.childNodes) // h1 teg ichidagi barcha text, br, span hamma bolalarini olib beradi

// console.log(h1.children) // Bu faqat h1 ichidagi html teglarni olib beradi va HTMLCollection qaytaradi
// console.log(h1.firstElementChild) // h1 teg ichidagi eng birinchi html tegni olib beradi
// console.log(h1.lastElementChild) // Bu esa eng ohirgisini olib beradi

// ----------- Going upwards : parents

// console.log(h1.parentNode) // h1 elemntimizning otasini olib beradi ichidagi barcha elemntlari bilan
// console.log(h1.parentElement) // Bu ham parentNode bilan bir xil

// h1.closest('.header') // h1 ni o'zidan boshlab bitta yuqoriga chiqib shu class bor elementni qidiradi agar topa olmasa null qaytaradi

// ----------- Going sideways: siblings

// console.log(h1.previousElementSibling) // h1 dan oldingi elemntni ushlaydi h1 dan oldin bo'lmasa null qaytaradi va bu faqat html elemntlarga nisbatan
// console.log(h1.previousSibling) // Bu huddi childNodes ga o'xshash ya'ni o'zidan oldin comment bo'lsa commentni text bo'lsa textni enter bo'lsa uni ham ushlaydi

// console.log(h1.nextElementSibling) // Bu previousElementSiblingni teskarisi
// console.log(h1.nextSibling) // Bu previousSiblingni teskarisi

// ------------------------- Building a tabbed component---------------

const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab')

  if(!clicked) return

  tabs.forEach(btn => btn.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active')

  tabsContent.forEach(content => content.classList.remove('operations__content--active'))
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

// ------------------------ Passing arguments to event handlers ------------

const nav = document.querySelector('.nav')

const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const ul = link.closest('.nav__links')
    const siblings = ul.querySelectorAll('.nav__link')
    const logo = ul.previousElementSibling

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this
    })

    logo.style.opacity = this
  }
}

nav.addEventListener('mouseover', handleHover.bind('0.5'))

nav.addEventListener('mouseout', handleHover.bind('1'))

// -------------------------------- Implementing a sticky navigation: the scroll event -----------
// const initCoords = section1.getBoundingClientRect() // Juda ham yomon holat

// // Sticky navigation 
// window.addEventListener('scroll', function(e) {
//   if(this.scrollY >= initCoords.top) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// })

// ------------------------- A better way: yhe intersection observer api -----------

// const obsCallback = function(entries, observer){
//   const [entry] = entries
  
// }

// const obsOptions = {
//   root: null,
//   threshold: 0.1 // array ichida bir qancha qiymatlar ham berish mumkin
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions)

// observer.observe(section1)

const header = document.querySelector('.header')
const navHeight = getComputedStyle(nav).height

const stickyNav = function(entries) {
  const [entry] = entries
  
  if(!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}

 const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}`
})

headerObserver.observe(header)

// ------------------ Revealing elements on scroll -----------
const allSections = document.querySelectorAll('.section')
 
const revealSection = (entries, observer) => {
  const [entry] = entries 
  
  if(!entry.isIntersecting) return;
  
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2
})

allSections.forEach(section => {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})
  
// --------------------- Lazy loading images ----------------

const imgTargets = document.querySelectorAll('img[data-src]')

const loadImg = (entries) => {
  const [entry] = entries

  if(!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img')
  })


}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
})

imgTargets.forEach(img => imgObserver.observe(img))

// ---------------Building a slider component

const slides = document.querySelectorAll('.slide')
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')
const dotContainer = document.querySelector('.dots')

let curSlide = 0
const maxLength = slides.length

const goToSlide = function(slide) {
  slides.forEach((content, i) => content.style.transform = `translateX(${(i - slide) * 100}%)`)
}

goToSlide(0)

const createDots = function() {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    )
  })
}
createDots()

const activateDot = function(slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
}
activateDot(0)

const prevSlide = function() {
  curSlide = curSlide === 0 ? maxLength - 1 : --curSlide

  goToSlide(curSlide)
  activateDot(curSlide)
}

const nextSlide = function () {
  curSlide = curSlide === maxLength - 1 ? 0 : ++curSlide

  goToSlide(curSlide)
  activateDot(curSlide)
}

btnRight.addEventListener('click', nextSlide)

btnLeft.addEventListener('click', prevSlide)

document.addEventListener('keydown', function(e) {
  if(e.key === 'ArrowLeft') prevSlide()
  e.key === 'ArrowRight' && nextSlide()
})

dotContainer.addEventListener('click', function(e) {
  if(e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide
    goToSlide(slide)
    activateDot(slide)
  }
})