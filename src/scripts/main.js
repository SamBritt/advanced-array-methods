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

//filter company's in the manufacturing industry
const manufacturingBusinesses = businesses.filter(b => b.companyIndustry == "Manufacturing");

// writeToDom(manufacturingBusinesses);

const agents = businesses.map(business => {
    let agent = {}
    agent.fullName = `${business.purchasingAgent.nameFirst}` + ` ${business.purchasingAgent.nameLast}`;
    agent.companyName = business.companyName;
    agent.phone = business.phoneWork;
    return agent
})


agents.forEach(e => {
    outEl.innerHTML += `
        <h3>${e.fullName}</h3>
        <p>${e.companyName}</p>
        <p>${e.phone}</p>
        <hr>
        `
})

