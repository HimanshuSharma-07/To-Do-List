let btn = document.querySelector(".button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let delBtn1 = document.querySelector(".delBtn1"); 
let reset = document.querySelector(".reset");


btn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    li.innerText = input.value;


    let delBtn2 = document.createElement("img");
    delBtn2.className = "delBtn";
    delBtn2.src = "img/bin.png";
    delBtn2.alt = "Delete";
    
  
    delBtn2.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(delBtn2);
    ul.appendChild(li);
    input.value = "";
  }
});


delBtn1.addEventListener("click", () => {
  if (ul.lastChild) {
    ul.removeChild(ul.lastChild);
  }
});


reset.addEventListener("click", () => {
  ul.innerHTML = "";
});
