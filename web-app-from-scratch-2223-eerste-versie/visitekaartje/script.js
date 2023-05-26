let popup = document.getElementById("popup");
let popup2 = document.getElementById("popup2");
var dragValue;
const name = document.querySelector("p.name");

async function getData() {
	let res = await fetch("https://tribes-api.netlify.app/.netlify/functions/member?id=cldeppc393z9h0avwfpz8hb99")
	return await res.json();
}

function showData(data) {
    console.log(data);
    name.textContent = data.data.member.name;
}

getData()
    .then (data => {
    showData(data)
})

function openPopup () {
    popup.classList.add("open-popup-picture");
}

function closePopup () {
    popup.classList.remove("open-popup-picture");
}



function openPopup2 () {
    popup2.classList.add("open-popup-mail");
}

function closePopup2 () {
    popup2.classList.remove("open-popup-mail");
}



function move (id) {
    var element = document.getElementById("popup");
    element.style.position = "absolute";
    element.onmousedown = function() {
        dragValue = element;
    }
}

document.onmouseup = function(e) {
    dragValue = null;
}

document.onmousemove = function(e) {
    var x = e.pageX;
    var y = e.pageY;

    dragValue.style.left = x + "px";
    dragValue.style.top = y + "px";
}
