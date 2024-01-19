// const post = {
//     username: "@harrychamp",
//     content: "This is my #firstpost",
//     likes: 150,
//     reposts: 5, 
//     tags: ["@elonmusk", "@tesla"]
// }

// const sqaure = (n) => (n*n);
// console.log(sqaure)

// let id = setInterval(() => {
//     console.log("Hello World");
// }, 2000);


// setTimeout(() => {
//     clearInterval(id);
//     console.log("clear interval ran")
// }, 10000);

const object= {
    message:'Hello,World!',


    logMessage() {
        console.log(this.message);
    }

};

setTimeout(object.logMessage, 1000)