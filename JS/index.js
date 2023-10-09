document.title = "Image Slider";
let rowBody = document.querySelector('.row');
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');
let lefArrow = document.querySelector('.fa-arrow-left');
parent.classList.replace('d-flex','d-none')

let imagesSource = [
    "images/one.jpg",
    "images/two.jpg",
    "images/three.jpg",
    "images/four.jpg",
    "images/five.jpg",
    "images/six.jpg",
]
var box = '';
for(let i = 0; i<6; i++){
    box += `
    <div class="col-sm-12 col-md-6 col-lg-4">
        <img src="${imagesSource[i]}" alt="person image" class="w-100">
    </div>
    `;
    rowBody.innerHTML = box;
}
let globalIndex;
let images = document.querySelectorAll('img');
images.forEach(function(element,index){
    element.addEventListener('click',function(){
        show(index);
        globalIndex = index;
    })
});
function show(index){
    parent.classList.replace('d-none','d-flex');
    child.style.backgroundImage = `url(${imagesSource[index]})`;
}
parent.onclick = function(e){
    parent.classList.replace('d-flex','d-none');
}
child.onclick = function(e){
    e.stopPropagation();
}
function rightMove(){
    if(globalIndex == images.length -1) globalIndex = 0;
    else globalIndex +=1 ;
    child.style.backgroundImage = `url(${imagesSource[globalIndex]})`;
}
function leftMove(){
    if(globalIndex == 0) globalIndex = images.length-1;
    else globalIndex-- ;
    child.style.backgroundImage = `url(${imagesSource[globalIndex]})`;
}
function closeFunction(){
    parent.classList.replace('d-flex','d-none');
}
document.onkeyup = function(e){
    if(e.key == 'ArrowLeft' || 'ArrowDown') leftMove();
    else if(e.key == 'ArrowRight' || "ArrowUp") rightMove();
    else if(e.key == 'Escape') closeFunction();
}