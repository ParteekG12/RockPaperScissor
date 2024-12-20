let comp_choice;
let user_choice;
let tempU = 0;
let tempC = 0;
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let option = document.querySelectorAll(".pics");
let result = document.querySelector(".result");
let user_score = document.querySelector(".user_score");
let comp_score = document.querySelector(".comp_score");
user_score.innerHTML = 0;
comp_score.innerHTML = 0;

let fun1 = ()=>{
    if(comp_choice===0)
    {
        console.log("It's a Draw");
        result.innerHTML = "It's a Draw";
        result.style.width = "200px";
        result.style.backgroundColor = "black";
        user_score.innerHTML = tempU;
        comp_score.innerHTML = tempC;
    }
    else if(comp_choice===1)
    {
        console.log("You lost. Paper beats Rock");
        result.innerHTML = "You lost. Paper beats Rock";
        result.style.width = "470px";
        result.style.backgroundColor = "red";
        tempC++;
        user_score.innerHTML = tempU;
        comp_score.innerHTML = tempC;
    }
    else
    {
        console.log("You Win. Rock beats Scissor");
        result.innerHTML = "You Win. Rock beats Scissor";
        result.style.width = "470px";
        result.style.backgroundColor = "green";
        tempU++;
        user_score.innerHTML = tempU;
        comp_score.innerHTML = tempC;
    }
}

let fun2 = ()=>{
    if(comp_choice===1)
    {
        console.log("It's a Draw");
        result.innerHTML = "It's a Draw";
        result.style.width = "200px";
        result.style.backgroundColor = "black";
        user_score.innerHTML = tempU;
        comp_score.innerHTML = tempC;
    }
    else if(comp_choice===2)
    {
        console.log("You lost. Scissor beats Paper");
        result.innerHTML = "You lost. Scissor beats Paper";
        result.style.width = "470px";
        result.style.backgroundColor = "red";
        tempC++;
        user_score.innerHTML = tempU;
        comp_score.innerHTML = tempC;
    }
    else
    {
        console.log("You Win. Paper beats Rock");
        result.innerHTML = "You Win. Paper beats Rock";
        result.style.width = "470px";
        result.style.backgroundColor = "green";
        tempU++;
        user_score.innerHTML = tempU;
        comp_score.innerHTML = tempC;
    }
}

let fun3 = ()=>{
    if(comp_choice===2)
    {
        console.log("It's a Draw");
        result.innerHTML = "It's a Draw";
        result.style.width = "200px";
        result.style.backgroundColor = "black";
        user_score.innerHTML = tempU;
        comp_score.innerHTML = tempC;
    }
    else if(comp_choice===0)
    {
        console.log("You lost. Rock beats Scissor");
        result.innerHTML = "You lost. Rock beats Scissor";
        result.style.width = "470px";
        result.style.backgroundColor = "red";
        tempC++;
        user_score.innerHTML = tempU;
        comp_score.innerHTML = tempC;
    }
    else
    {
        console.log("You Win. Scissor beats Paper");
        result.innerHTML = "You Win. Scissor beats Paper";
        result.style.width = "470px";
        result.style.backgroundColor = "green";
        tempU++;
        user_score.innerHTML = tempU;
        comp_score.innerHTML = tempC;
    }
}

for(let i of option)
{
    i.addEventListener("mouseover", ()=>{
        i.style.border = "solid 6px black";
    })

    i.addEventListener("mouseout", ()=>{
        i.style.border = "none";
    })

    i.addEventListener("click", ()=>{
        comp_choice = Math.floor(Math.random() * 3);
        console.log("comp choice",comp_choice);
    })
}

rock.addEventListener("click", ()=>{
    user_choice = 0;
    console.log("user choice",user_choice);
});

rock.addEventListener("click", fun1)

rock.addEventListener("mousedown", ()=>{
    option[0].style.backgroundColor = "#f86fb1";
})
rock.addEventListener("mouseup", ()=>{
    option[0].style.backgroundColor = "#f80a7d";
})


paper.addEventListener("click", ()=>{
    user_choice = 1;
    console.log("user choice",user_choice);
});

paper.addEventListener("click", fun2)

paper.addEventListener("mousedown", ()=>{
    option[1].style.backgroundColor = "#f8e57a";
})
paper.addEventListener("mouseup", ()=>{
    option[1].style.backgroundColor = "#fed700";
})


scissor.addEventListener("click", ()=>{
    user_choice = 2;
    console.log("user choice",user_choice);
});

scissor.addEventListener("click", fun3)

scissor.addEventListener("mousedown", ()=>{
    option[2].style.backgroundColor = "#71c9f8";
})
scissor.addEventListener("mouseup", ()=>{
    option[2].style.backgroundColor = "#21b0fe";
})
