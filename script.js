const btn = document.getElementById("btn")
const colortext = document.getElementById("color")
const wrap = document.getElementById("wrap")
const heading = document.getElementById("heading")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener('click',()=>{
    let j = prompt("How many times that you need the background color to be changed ?");
    for(let i=0;i<j;i++){
    setTimeout(function(){
        let hexColor = '#'
        for(let k=1;k<=6;k++)
        {
            hexColor+=randHexValue();
        }
        console.log(hexColor);        
        wrap.style.backgroundColor = hexColor
        colortext.innerHTML = hexColor},150*i)
    }
    setTimeout(function(){
        wrap.style.backgroundColor = '#FFFFFF'
        colortext.innerHTML = '#FFFFFF'
    },150*j)
    btn.style.display = 'none';
    setTimeout(function(){
        btn.style.display = 'flex'
    },150*j)
})
function randHexValue(){
    let rendomIndex = Math.floor(Math.random()*16)
    return hex[rendomIndex]
}
wrap.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});