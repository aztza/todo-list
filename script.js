const inputTag = document.getElementsByClassName("form-control")[0];
const container = document.getElementsByClassName("container")[0];
let productNum = 1;
const handleChange = (event) => {
    let inputValue = event.target.value;
    inputValue = productNum.toString() + ". " + inputValue;
    const bigList = document.createElement("div");
    bigList.classList.add("d-flex","justify-content-between","mt-3","bg-light","text-end","text-white","fs-5","shadow-sm")
    const trash = document.createElement("i");
    trash.classList.add("fa-solid","fa-trash-can","bg-danger","p-2","shadow-lg","bg-secondary","shopping_item");
    const listItem = document.createElement("span");
    listItem.classList.add("ms-2","mt-1","text-black","shopping_item")
    container.append(bigList);
    bigList.append(listItem);
    bigList.append(trash);
    listItem.append(inputValue);
    listItem.addEventListener("click", lineThrough);
    trash.addEventListener("click", deleteList);
    productNum++;
    inputTag.value = "";    
}

const lineThrough = (event) => {
    const mouseClick = event.target;
    mouseClick.id == "" ? mouseClick.setAttribute("id","text-deco") : mouseClick.removeAttribute("id");
}

const deleteList = (event) => {
    let icon = event.target;
    icon.parentElement.remove();
}
inputTag.addEventListener("change", handleChange);