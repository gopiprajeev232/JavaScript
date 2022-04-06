async function getData(uId) {
    console.log("start")

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com")
            }, 4000);
    })

    let result = await promise;
    console.log("Email id of the user id is: " + result);

    console.log("End");
}

getData("skc")