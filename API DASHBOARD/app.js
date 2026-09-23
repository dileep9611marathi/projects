import {getUser} from  "./api.js"

const button = document.querySelector("#loaduser");
button.addEventListener("click",async ()=>{
    try{
        const  data = await getUser();

        document.querySelector("#name").textContent = data.name;
        document.querySelector("#email").textContent = data.email;
        document.querySelector("#address").textContent =data.address.city;
    }
    catch(error){
        console.log("something went wrong :",error.message);
    }

})