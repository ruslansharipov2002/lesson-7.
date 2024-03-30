
// 1. Array dagi 1-va oxirgi sonlar yig'indisini toping.


// function x(arr) {
//     if (arr.length < 2) {
//     } else {
//         return arr[0] + arr[arr.length - 1];
//     }
// }
// let massiv = [1, 2, 3, 4, 5];
// let yigind = x(massiv);
// console.log("Birinchi va oxirgi sonlar yig'indisi: " + yigind);


// 2. Ixtiyoriy array yarating agar arrayning 1-elementi juft bo'lsa uni toq 
// songa agar toq bo'lsa juft songa almashtiring 1-element random bo'lishi kerak 


// function almashtir(arr) {
//     if (arr.length < 1) {
//         return "Massiv bo'sh";
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] % 2 === 0) { 
//                 arr[i] = arr[i] + 1;
//             } else { 
//                 arr[i] = arr[i] - 1;
//             }
//         }
//         return arr;
//     }
// }
// function ixtiyoriyMassivUyani() {
//     let massiv = [];
//     const uzunlik = Math.floor(Math.random() * 10) + 1; 
//     for (let i = 0; i < uzunlik; i++) {
//         massiv.push(Math.floor(Math.random() * 10) + 1); 
//      }
//     return massiv;
// }   
// let massiv = ixtiyoriyMassivUyani();
// console.log("Boshlang'ich massiv: " + massiv);
// let a = almashtir(massiv);
// console.log("Almashtirilgan massiv: " + a);





// 3. [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4] shu arraydan 4 soni olib tashlansin.



// let son = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4];
// let indexlar = [];

// for (let i = 0; i < son.length; i++) {
//     if (son[i] === 4) {
//         indexlar.push(i);
//     }
// }

// console.log("4 soni indekslari: " + indexlar);

// nums = [1,3,2,4,5,6,99,102], target = 5, o'sish va kamayish tartibli
//  array ichida target qiymati array ichida nechinchi qiymatda turganini aniqlang 

// let nums = [0, 1, 3, 2, 4, 5, 6, 99, 102];
// let son = 5;

// nums.sort((a, b) => a - b);
// let y = nums.indexOf(son) + 1; 
// console.log("tartiblangan xolda  " + y + "-chi o'rinda joylashgan.");




//  Ixtiyoriy sonlardan iborat array olinsin va uning
//  ichidagi sonlar yig'indisi topilsin 2 xil yo'l bilan



// let sonlar = [1, 2, 3, 4, 5]; 

// let yigindisi = 0; 

// for (let i = 0; i < sonlar.length; i++) {
//     yigindisi += sonlar[i]; 
// }

// console.log("Sonlar yig'indisi:", yigindisi); 

// 2-yoli

// let sonlar = [1, 2, 3, 4, 5];

// let yigindisi = sonlar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log("Sonlar yig'indisi:", yigindisi); 




// Ixtiyoriy function va array yarating, function ga berilgan parametr 
// o'sish tartibida joylashgan array da nechinchi index da, kamayish 
// tartibida joylashgan array da nechinchi index da turgani aniqlansin

// function x(arr,number){
//     let a = arr.slice().sort((a, b)=> b - a)

//     let index = a.indexOf(number)

//     let b = arr.indexOf(a[index])
//     return b 
// }
// let array = [ 1, 5, 2, 8, 7, 6, 7, 60, 20, 10]

// let number = 2
// console.log(x(array, number));

// kamayish tartibini qilomadim


//  7. Ixtiyoriy fucntion va value lari sonlardan iborat bo'lgan object
//  yaratilsin, va object value siga function parametri ham oxiridan ham boshidan qo'shilsin 

// let obyekt = {
//     sonlar: [1, 2, 3, 4, 5], 
//     funksiya: function(a, b) {
//         let yigindisi = 0; 

//         for (let i = 0; i < this.sonlar.length; i++) {
//             yigindisi += this.sonlar[i]; 
//         }
//         return yigindisi + a + b; 
//     }
// }
// let natija = obyekt.funksiya(10, 20); 
// console.log("Natija:", natija);


// 8-masala Ixtiyoriy fucntion va value lari sonlardan iborat bo'lgan object yaratilsin

// let obyekt = {
//     funksiya1: function() {
//         return 1;
//     },
//     funksiya2: function() {
//         return 2;
//     },
//     qiymat1: 3,
//     qiymat2: 4
// }

// console.log(obyekt.funksiya1());
// console.log(obyekt.funksiya2());
// console.log(obyekt.qiymat1);    
// console.log(obyekt.qiymat2);    
