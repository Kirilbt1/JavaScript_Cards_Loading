const toggler = document.querySelector("#toggler");//go zemam toglerot
let todoInput = document.querySelector("input");
const listItems = document.querySelectorAll(".el");
const trash = document.querySelectorAll(".trash")
const ul = document.querySelector("ul");

// Function to toggle the visibility of the input field

toggler.addEventListener("click", () => {
    todoInput.classList.toggle("hideInput");
});

// Exercise 2

// listItems.forEach(el => {
//     el.addEventListener("click", () => {
//         el.classList.toggle("completed")
//     });
// })

// Exercise 3
// trash.forEach(el => {
//     el.addEventListener("click", () => {
//         el.parentNode.remove();
//         // el.parentElement.remove();
//     });
// });

// Exercise 4


// on imput 
todoInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && todoInput.value) {
        ul.innerHTML += `<li class="el">
        <span class="trash">
        <i class="fa fa-trash"></i>
        </span> ${todoInput.value}
      </li>`
        todoInput.value = ""
    }

});
// For all html to work with innerHTML 
document.addEventListener("click", e => {
    console.log(e.target)
    if (e.target.classList.contains('el')) {
        e.target.classList.toggle("completed");
    }

    if (e.target.classList.contains('trash')) {
        e.target.parentNode.remove();

    }
});

