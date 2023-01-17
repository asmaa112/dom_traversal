// document.body.style.backgroundColor = "red"

let btn = document.getElementById('btn')

let subdiv1 = document.getElementById('subdiv1')

let i =0


console.log(btn);
btn.onclick = function () { 
    if (i == 6)
    {
        i = 0
        Array.from(subdiv1.children).forEach(e => {
            e.style.backgroundColor = "black"
        })
    }
    else{
        subdiv1.children[i].style.backgroundColor = "pink"
        i++
    }

}




