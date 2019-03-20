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

//Map Function
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

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundAgent = businesses.find(
                agent =>
                    agent.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) ||
                    agent.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
            )

            outEl.innerHTML = `
                <h2>
                ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}
                </h2>
                <section>
                ${foundAgent.addressFullStreet}

                </section>
                <section>
                ${foundAgent.addressCity},
                ${foundAgent.addressStateCode}
                ${foundAgent.addressZipCode} 
                </section>
            `;
        }
    });


