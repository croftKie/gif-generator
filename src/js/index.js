import '../css/style.css'
import { giphyAPI } from '../../config';
gifGet().then((data)=>{
    qrcode(data.data.images.original.url).then((response)=>{
        document.getElementById('qr-image').src = response.url;
    })
})


document.getElementById('newGifButton').addEventListener('click',()=>{
    gifGet().then((data)=>{
        qrcode(data.data.images.original.url).then((response)=>{
            document.getElementById('qr-image').src = response.url;
        })
    })
});



async function qrcode(data){
    const url = data;
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`);
    return response;
}

async function gifGet(){
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${giphyAPI}&tag=&rating=pg-13`,{mode: 'cors'});
    const data = await response.json();
    return data
}