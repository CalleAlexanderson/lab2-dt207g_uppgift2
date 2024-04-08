// Globala konstanter och variabler

// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init() {
    getWorks();
} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------

async function getWorks() {
    let workplaces;
    try {
        const response = await fetch(`http://127.0.0.1:3000/api/workplaces`);
        workplaces = await response.json();
    } catch (error) {
        console.log(error);
    }
    console.log(workplaces);
}

async function addWork() {
    let cname = "ICA";
    let jt = "Kassa ansvarig";
    let loc = "Hägerstensåsen";
    let desc = "Kassa chef på ICA Hägerstensåsen";
    let newWorkplace;

    if (cname != "" && jt != "" && loc != "" && desc != "") {
        newWorkplace = {
            companyname: cname,
            jobtitle: jt,
            location: loc,
            description: desc
        }
    }
    const response = await fetch(`http://127.0.0.1:3000/api/workplaces`, {
        method: "POST",
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify(newWorkplace)
    });

    const res = await response.json();
    console.log(res);
}
