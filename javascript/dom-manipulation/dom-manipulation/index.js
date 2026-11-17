
const userInfo = {
   username: "flatUser123",
   description: "Hi, welcome to my webpage! Just a new user of this website!",
   theme: "red"
}

function displayUser(userInfo){
    //use querySelector to select Header
    const header = document.querySelector("#main")
    //Use textContent to change the text of the title
    header.textContent = userInfo.username + "'s Personal Webpage"
    //useClassNmae to change css class
    header.className = userInfo.theme


    //Create new element for description and select existing element of where it will go
    const description = document.createElement("p")
    const body = document.querySelector("body")

    //Add textContent and className to new element
    description.textContent = userInfo.description
	description.className = userInfo.theme
    //Append new element to existing element
    body.append(description)
}


displayUser(userInfo)



