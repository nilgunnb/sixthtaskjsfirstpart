let btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
    let task = document.querySelector(".task-box input").value;
    let h2 = document.createElement("h2");
    let div = document.createElement("div");
    let button = document.createElement("button");
    h2.innerHTML = task;
    button.innerHTML = "Delete";
    div.setAttribute("class","box my-4");
    button.setAttribute("class","btn btn-danger delete_box");
    div.append(h2,button);
    document.querySelector(".task-list").appendChild(div);

    let all_btns = document.querySelectorAll(".delete_box");
    for(let btn of all_btns){
        btn.onclick = function(){
            this.parentElement.remove();
        }
    }
})