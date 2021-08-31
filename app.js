const range = document.querySelectorAll("[type='range']");
const button = document.querySelector('#button');
const color = document.querySelectorAll("[type='color']")
const small = document.querySelectorAll('small');
const select = document.querySelector('#border-type');
const option = document.querySelectorAll('.border-options');
const buttons = document.querySelectorAll('.button');

const updateValueOnDom = () => {
    for(let i = 0; i < range.length; i++){
        small[i].innerHTML = `${range[i].value}`;
    }
}
const selectedIndex = () => {
    const select = document.querySelector('select').selectedIndex;
    const option = document.querySelectorAll('option'); 
    button.style.borderStyle = `${option[select].value}`
    if(button.style.borderStyle == 'none'){
        range[3].setAttribute('disabled', true);
        color[1].setAttribute('disabled', true)
    }
    else{
        range[3].removeAttribute('disabled');
        color[1].removeAttribute('disabled');
    }
}
const baseDesign = () => {
    const select = document.querySelector('select').selectedIndex;
    const option = document.querySelectorAll('option'); 

    button.style.height = `${range[0].value}px`;
    button.style.width = `${range[1].value}px`;
    button.style.fontSize = `${range[2].value}px`;
    button.style.borderWidth = `${range[3].value}px`;
    button.style.borderRadius = `${range[4].value}px`;
    button.style.backgroundColor = `${color[0].value}`;
    button.style.borderColor = `${color[1].value}`;
    button.style.color = `${color[2].value}`;
    button.style.borderStyle = `${option[select].value}`;
    range[3].setAttribute('disabled', true);
    color[1].setAttribute('disabled', true);
}

baseDesign();
updateValueOnDom();

range[0].addEventListener('input', () =>{
    button.style.height = `${range[0].value}px`
    updateValueOnDom();
    
})
range[1].addEventListener('input', () =>{
    button.style.width = `${range[1].value}px`
    updateValueOnDom();
})
range[2].addEventListener('input', () =>{
    button.style.fontSize = `${range[2].value}px`
    updateValueOnDom();

})
range[3].addEventListener('input', () =>{
        button.style.borderWidth = `${range[3].value}px`
        updateValueOnDom();
})
range[4].addEventListener('input', () =>{
    button.style.borderRadius = `${range[4].value}px`
    updateValueOnDom();

})
color[0].addEventListener('input', () => {
    button.style.backgroundColor = `${color[0].value}`
})
color[1].addEventListener('input', () => {
    button.style.borderColor = `${color[1].value}`
})
color[2].addEventListener('input', () => {
    button.style.color = `${color[2].value}`
})
select.addEventListener('change', () => {
    selectedIndex();
})
buttons[0].addEventListener('click', () => {
    button.style.fontWeight = "100";
})
buttons[1].addEventListener('click', () => {
    button.style.fontWeight = "normal";
    button.style.fontStyle = "normal";
    button.style.textTransform = "none";
    button.style.fontVariant = "normal";
})
buttons[2].addEventListener('click', () => {
    button.style.fontWeight = "bold";
})
buttons[3].addEventListener('click', () => {
    button.style.fontWeight = "bolder";
})
buttons[4].addEventListener('click', () => {
    button.style.fontStyle = "italic";
})
buttons[5].addEventListener('click', () => {
    button.style.fontStyle = "oblique";
})
buttons[6].addEventListener('click', () => {
    button.style.textTransform = "capitalize";
})
buttons[7].addEventListener('click', () => {
    button.style.textTransform = "uppercase";
})
buttons[8].addEventListener('click', () => {
    button.style.textTransform = "lowercase";
})
buttons[9].addEventListener('click', () => {
    button.style.fontVariant = "small-caps";
})