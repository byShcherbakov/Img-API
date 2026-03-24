const button =document.querySelector(".btn");
const img = document.querySelector(".img");
const url = "https://aws.random.cat/meow";

//Асихрон фун
//Запрос с сайта
async function fetchH(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        img.src = data.file;
    }catch(error){
        console.log(error);
    }
}

button.addEventListener("click",()=>{
    let isloaded = img.complete; // проверка загрузилась ли фотка
    if(isloaded){
        fetchH();
    }
} );
