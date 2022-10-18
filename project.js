const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("password-1")
let pass2El = document.getElementById("password-2")

let passLenEl = document.getElementById("user-input")

//booleans for if pass is created or not
let created1 = false
let created2 = false

function setPassLen(){
    let passLen = passLenEl.value
    
    if(created1 === false && created2 === false){
        for(let k = 0; k <= passLen; k++){
                let randomChar1 = Math.floor(Math.random() * characters.length)
                let pass1 = characters[randomChar1]
                pass1El.textContent += pass1
                created1 = true  
            }
            
            for(let l = 0; l < passLen; l++){
                let randomChar2 = Math.floor(Math.random() * characters.length)
                let pass2 = characters[randomChar2]
                pass2El.textContent += pass2
                created2 = true
            }
    } else {
        pass1El.textContent = ""
        pass2El.textContent = ""
        created1 = false
        created2 = false
        setPassLen()
        }
    }
    // console.log(passLenEl.value)


//generates two passwords 15 characters long
function generatePass(){
    if(created1 === false && created2 === false){
        for(let i = 0; i <= 16; i++){
            let randomChar1 = Math.floor(Math.random() * characters.length)
            let pass1 = characters[randomChar1]
            pass1El.textContent += pass1
            created1 = true  
        }
        
        for(let j = 0; j <= 16; j++){
            let randomChar2 = Math.floor(Math.random() * characters.length)
            let pass2 = characters[randomChar2]
            pass2El.textContent += pass2
            created2 = true
        }
    } else{
        pass1El.textContent = ""
        pass2El.textContent = ""
        created1 = false
        created2 = false
        generatePass()
    }
}




