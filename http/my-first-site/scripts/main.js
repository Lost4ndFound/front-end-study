// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";

let myImage = document.querySelector("img");
let animal = document.getElementById("animal");
let introduce = document.getElementById("introduce");

myImage.onclick = function (){
    let mySrc = myImage.getAttribute("src");
    
    if (mySrc === "images/whale.jpg") {
        myImage.setAttribute("src", "images/tiger.jpg");
        myImage.setAttribute("alt", "老虎");
        animal.textContent = "老虎";
        introduce.textContent = "虎（学名：Panthera tigris ；英文名：Tiger）：是哺乳纲的大型猫科动物；毛色浅黄或棕黄色，满身黑色横纹；头圆、耳短，耳背面黑色，中央有一白斑甚显著；四肢健壮有力；尾粗长，具黑色环纹，尾端黑色。共有九个亚种，各亚种之间的体型和形态差异很大。西伯利亚虎最大，雄性体长可达3.7米，体重423千克。苏门答腊虎是最小的活亚种，雄虎体长2.34米，体重136千克。";
    } else {
        myImage.setAttribute("src", "images/whale.jpg");
        myImage.setAttribute("alt", "鲸鱼");
        animal.textContent = "鲸鱼";
        introduce.textContent = "地球上最成功的海洋哺乳动物要属鲸类。它们的身体和四肢骨骼演变得简直就像鱼一样了，难怪被人们俗称为“鲸鱼”。当然，它们不是鱼类，它们是温血的、胎生哺乳并有很高智力的高等脊椎动物";
    }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("请输入你的名字");
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "动物世界酷毙了, " + myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "动物世界酷毙了, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}