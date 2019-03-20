// const outEl = document.querySelector("#output")
// outEl.innerHTML = "<h1>Active Businesses</h1>"

// let zipCodeProperty = "addressZipCode";

// const writeToDom = (arr) => {
//     arr.forEach(business => {
//         outEl.innerHTML += `
//             <h1>${business.purchasingAgent.nameFirst + business.purchasingAgent.nameFirst}</h1>
//             <h3>${business.companyName}</h3>
//             <section>
//               ${business.addressFullStreet}
//             </section>
//             <section>
//             ${business.addressCity},
//             ${business["addressStateCode"]}
//             ${business[zipCodeProperty]}
//             </section>
//           `
//         outEl.innerHTML += "<hr/>"
//     })
// }

// businesses.forEach(business => {
//     console.log(business);
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity},
//     ${business["addressStateCode"]}
//     ${business[zipCodeProperty]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });
//Filter Function/////////////*********************************** */
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false

//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }

//     return inNewYork
// });
// writeToDom(newYorkBusinesses);

//filter company's in the manufacturing industry
// const manufacturingBusinesses = businesses.filter(b => b.companyIndustry == "Manufacturing");
// writeToDom(manufacturingBusinesses);

//Map Function//////////////************************************ */
// const agents = businesses.map(business => {
//     let agent = {}
//     agent.fullName = `${business.purchasingAgent.nameFirst}` + ` ${business.purchasingAgent.nameLast}`;
//     agent.companyName = business.companyName;
//     agent.phone = business.phoneWork;
//     return agent
// })

// agents.forEach(e => {
//     outEl.innerHTML += `
//         <h3>${e.fullName}</h3>
//         <p>${e.companyName}</p>
//         <p>${e.phone}</p>
//         <hr>
//         `
// })

//Find Function/////////************************************* */
// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundAgent = businesses.find(
//                 agent =>
//                     agent.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) ||
//                     agent.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
//             )

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}
//                 </h2>
//                 <section>
//                 ${foundAgent.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundAgent.addressCity},
//                 ${foundAgent.addressStateCode}
//                 ${foundAgent.addressZipCode} 
//                 </section>
//             `;
//         }
//     });

//Reduce Function////////************************************** */

// const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

// const totalRainfall = monthlyRainfall.reduce((acc, curr) => {
//     return acc + curr;
// });
// console.log(totalRainfall);

// const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

// const sentence = words.reduce((acc, curr) => {
//     return acc + ' ' + curr;
// })

// console.log(sentence);


//Practice: Big Spenders///////
//Display spenders of over $9,000.00
// const bigSpenders = businesses.filter(e => {
//     return e.orders.find(i => i > 9000)
// })
// writeToDom(bigSpenders)

//Practice: Solar System/////////
// const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
// const planetEl = document.getElementById("planets");

// let displayToDom = (item) => {
//     let div = document.createElement('div');
//     div.textContent = item;
//     planetEl.append(div);
// }

// planets.forEach(e => {
//     displayToDom(e)
// })
//displays Planets with first letter capitalized/////
// planets.map(e => displayToDom(e.charAt(0).toUpperCase() + e.substring(1)))

//display planets with letter 'e' included./////
// let ePlanets = planets.filter(e => e.includes('e'))
// displayToDom(ePlanets);

//Practice: Spam, Spam, Spam, Spam////////
customers.forEach(e => {
    console.log(e.contacts.email.join(' '));
})







