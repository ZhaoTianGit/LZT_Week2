let dbUsers =[
    {
        username: "lee",
        password: "passwordlee",
        name: "lee zhao tian",
        email: "lzt@gmail.com"
    },
    {
        username: "hee",
        password: "passwordhee",
        name: "hee yee cinn",
        email: "hyc@gmail.com"
    },
    {
        username: "wee",
        password: "passwordwee",
        name: "wee mao phin",
        email: "wmp@gmail.com"
    }
] 

// function login(username, password){
//     console.log("someone try to login with",username , password);
//     let matched = dbUsers.find(element =>{
//         element.username == username
//     })
//     console.log(matched);
// }

function login(username, password){
    console.log("someone try to login with",username , password);
    let matched = dbUsers.find(Element =>
        Element.username == username
    )
    if(matched){
        if(matched.password == password){
            return matched
        }else{
            return "Password not matched"
        }
    }else {
        return "User not found"
    }
}

//try to login
// console.log(login("lee", "passwordlee")); 
// console.log(login("hee", "passwordhee")); 
//login("lee", "123456")

function register(regusername, regpassword, regname, regemail){
    //TODO: Check if username exist
    let regmatched = dbUsers.find(element =>
        element.username == regusername)
        if(regmatched){
            console.log("user existed");
        }else {
    dbUsers.push({
        username: regusername,
        password: regpassword,
        name: regname,
        email :regemail
    })}
}

//try to register
register("goh","passwordgoh","goh jia xuan","gjx@gmail.com")
register("goh","passwordgoh","goh jia xuan","gjx@gmail.com")
console.log(login("goh", "passwordgoh"));
