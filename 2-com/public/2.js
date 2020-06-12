console.log("我是2");
const request = new XMLHttpRequest();
request.open("get", "http://1.com:8888/data.json");
request.onreadystatechange = () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.response);
  }
};
request.send();

const script = document.createElement("script");
script.src = "http://1.com:8888/data.js";
script.onload = () => {
  console.log(window.xxx);
};
document.body.appendChild(script);
