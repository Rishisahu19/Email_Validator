
// console.log("This is my script")


// // key = "ema_live_ITkV5Pqq40WNdMLdjqMZlNcb4AEBrNvWiSFd1MYE"
// // let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

// let result = {
//     "tag": "",
//     "free": false,
//     "role": false,
//     "user": "akshaykumar",
//     "email": "akshaykumar@codewithharry.com",
//     "score": 0.64,
//     "state": "undeliverable",
//     "domain": "codewithharry.com",
//     "reason": "invalid_mailbox",
//     "mx_found": true,
//     "catch_all": null,
//     "disposable": false,
//     "smtp_check": false,
//     "did_you_mean": "",
//     "format_valid": true
// }



// submitBtn.addEventListener("click", async (e) => {
//     e.preventDefault()
//     console.log("Clicked!")
//     resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`
//     let key = "e3d6dbc90dc9048d0adeb983a6a74a350"
//     let email = document.getElementById("username").value

//     let url = `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${email}`

//     let res = await fetch(url)
//     let result = await res.json()
//     let str = ``
//     for (key of Object.keys(result)) {
//         if (result[key] !== "" && result[key] !== " ") {
//             str = str + `<div>${key}: ${result[key]}</div>`
//         }
//     }

//     console.log(str)
//     resultCont.innerHTML = str
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("This is my script");
submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked!");

    let resultCont = document.getElementById("resultCont");
    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`;

    let key = "7b049fb74e654bcba728ee7777b65058";
    let email = document.getElementById("username").value;

    let url = `https://api.zerobounce.net/v2/validate?api_key=${key}&email=${email}`;

    try {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        let result = await res.json();

        let str = ``;
        for (let key of Object.keys(result)) {
            if (result[key] !== "" && result[key] !== " ") {
                str += `<div>${key}: ${result[key]}</div>`;
            }
        }

        console.log(str);
        resultCont.innerHTML = str;
    } catch (error) {
        console.error('Error:', error);
        resultCont.innerHTML = `<div>Error: ${error.message}</div>`;
    }
});

