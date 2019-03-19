const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

let zipCodeProperty = "addressZipCode";

const writeToDom = (arr) => {
    arr.forEach(business => {
        outEl.innerHTML += `
            <h2>${business.companyName}</h2>
            <section>
              ${business.addressFullStreet}
            </section>
            <section>
            ${business.addressCity},
            ${business["addressStateCode"]}
            ${business[zipCodeProperty]}
            </section>
          `
        outEl.innerHTML += "<hr/>"
    })
}

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

const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false

    if (business.addressStateCode === "NY") {
        inNewYork = true
    }

    return inNewYork
});
// writeToDom(newYorkBusinesses);


const manufacturingBusinesses = businesses.filter(b => b.companyIndustry == "Manufacturing");

writeToDom(manufacturingBusinesses);