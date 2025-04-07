const Admin = {
    name: "Danila",
    age: 18,
    isAdmin: true,
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}

console.log(Admin)
Admin.sayHello("Aroken")

// =============================================================




const users = [
    {
        name: "Ivan",
        age: 21,
        isAdmin: false
    },
    {
        name: "Jhon",
        age: 23,
        isAdmin: false
    },
    {
        name: "Kris",
        age: 20,
        isAdmin: true
    },
    {
        name: "Mark",
        age: 23,
        isAdmin: false
    },
    {
        name: "Tom",
        age: 30,
        isAdmin: true
    },
    {
        name: "Danila",
        age: 18,
        isAdmin: true
    },
    {
        name: "july",
        age: 25,
        isAdmin: false
    }
]



for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}



// =============================================

let i = 0

while(i < 4) {
i = i + 1
console.log(`${i} Простой пользователь`)
}





