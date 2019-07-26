const xlmhttp = new XMLHttpRequest();
//https://aws.random.cat/meow
const url = "https://aws.random.cat/meow";
let respondImage = document.getElementById('respond');

xlmhttp.open("GET", url, true);

xlmhttp.onload = (e) => {
    let image = JSON.parse(xlmhttp.responseText)
    respondImage.src = image.file;
};

xlmhttp.send();