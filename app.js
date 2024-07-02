// 1-masala
// prompt da kiritilgan songacha bo'lgan juft va toq sonlar yig'indisini 
// toping va ular o'rtasidagi farqni ham console ga chiqaring 

// let juftSon = 0
// let toqSon = 0
// let total = 0
// let difference = 0
// let num = +prompt("Son kiriting")
// for(let i = 0; i <= num; i++) {
//     if (i % 2 == 0) {
//         juftSon += 1
//     }else {
//         toqSon += 1
//     }
//     total  = juftSon + toqSon
//     difference =  Math.abs(juftSon - toqSon) 
// }
// console.log(juftSon, 'Juft sonlar');
// console.log(toqSon, 'Toq sonlar');
// console.log(total,"yig'indi");
// console.log(difference, "Oradagi farq");


// 2-masala
// shunday function yarating ki argument sifatida berilgan songacha bo'lgan 
// sonlarning yig'indisi qaytarsin (return qilsin)

// function totalNumber(a) {
//     let total = 0
//     for(let i = 0; i <= a; i++) {
//         console.log(i);
//         total += i
//     }
//     return total
// }
// console.log(totalNumber(5));


// 3-masala
// array ni ichidagi sonlar yig'indisini topib beradigan 
// algorithm yarating array sonlardan tashkil topsin

// let arr = [1,2,3,4,5]

// let total = 0
// for(let i = 0; i <= arr.length; i++) {
//     console.log(i);
//     total += i
// }
// console.log(total);


// 4-masala
//  array ichidagi juft sonlar yig'indisini topadigan algorithm yarating 

// let arr = [1,2,3,4,5,6]
// let juftSonlar = 0
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i]% 2 === 0) {
//         juftSonlar += arr[i]
       
//     }
// }
// console.log(juftSonlar);


// 5-masala
// shunday function yaratinki agument sifatida berilgan 
// son array ichida bor yoki yo'qligini aniqlab bersin 

// const isExist = (num) => {
//     let arr = [1,2,3,4,5]
//     for(let i = 0; i < arr.length; i++) {
//         if (num == arr[i]) {
//             return "Bu raqam mavjud"
//         }
//     }
//     return "Bu raqam mavjud emas"
// }
// console.log(isExist(5));


// ↑ tepdagi 5-masalani yana bir usuli
// reduce bilan (qoshimcha)

// function isNumberExist(arr,num) {
//     return arr.includes(num)
// }

// const arr = [1,2,3,4,5]
// console.log(isNumberExist(arr,10));




// 6-masala
// shunday function yaratinki agument sifatida berilgan son array ichida 
// bor bo'lsa array dan olib tashlab agar bo'lmasa array ning oxiridan qo'shib qo'ysin

// const isExist = (num) => {
//     let arr = [1, 2, 3, 4, 5];
//     let found = false; 

//     for (let i = 0; i <= arr.length; i++) {
//         console.log(i);
//         if (num === arr[i]) {
//             arr.splice(i, 1); 
//             found = true; 
//             break; 
//         }
//     }

//     if (!found) {
//         arr.push(num); 
//     }

//     return arr;
// }

// console.log(isExist(10));



// 7-masala 
//  array ichidagi birinchi va oxirgi sonlar o'rtasidagi 
// farqni toping farq har doim musbat son chiqishi kerak

// let arr = [1,2,3,4,5]

// let differnce = 0
// let firstNum
// let lastNum
// for(let i = 0; i <= arr.length; i++) {
//     console.log(i);
//     firstNum = arr[0]
//     lastNum = arr[arr.length - 1]
//     differnce = Math.abs(firstNum - lastNum)
// }

// console.log(differnce,"oradagi farq");




    