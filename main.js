window.onload=function(){
    //zmienne
    var kroki, opoznienie, t=0,n=1,a=0, os=40;
    kroki = document.getElementById('kroki');
    opoznienie = document.getElementById('opoznienie');
    cont = document.getElementById('container');
    canv = document.getElementById('canv');
    box = document.getElementsByClassName('box');
    start = document.getElementById('start');
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      
    //funkcje
    start.addEventListener('click', async function(){
        await sleep(opoznienie.value);
    let div = document.createElement('div');
    div.className = 'box';
    canv.appendChild(div);
    box[1].style.top = box[0].offsetTop + 20 + 'px';
    
    for(var i =1; i<= kroki.value; i++){
        await sleep(opoznienie.value);
        let div = document.createElement('div');
        div.className = 'box';
        canv.appendChild(div);
        if(box[i-1].style.top > box[0].offsetTop + 'px'){
            box[i].style.left = box[i-1].offsetLeft + 20 + 'px';
            box[i].style.top = box[i-1].offsetTop + 'px';
        }
        if(box[i-1].style.left > box[0].offsetLeft + 'px'){
            box[i].style.top = box[i-1].offsetTop - 20 + 'px';
            box[i].style.left = box[i-1].offsetLeft + 'px';
        }
        if(box[i-1].style.top < box[0].offsetTop + 'px'){
            box[i].style.left = box[i-1].offsetLeft - 20 + 'px';
            box[i].style.top = box[i-1].offsetTop + 'px';
        }
        if(box[i-1].style.left < box[0].offsetLeft + 'px'){
            box[i].style.left = box[i-1].offsetLeft + 'px';
            box[i].style.top = box[i-1].offsetTop + 20 + 'px';
        }
        //drugie okrążenie

        if(box[i-1].style.top == box[0].offsetTop + os + 'px'){
            box[i].style.left = box[i-1].offsetLeft + 20 +'px';
            box[i].style.top = box[i-1].offsetTop + 'px';
        }
        if(box[i-1].style.left == box[0].offsetLeft + os + 'px'){
            box[i].style.left = box[i-1].offsetLeft +'px';
            box[i].style.top = box[i-1].offsetTop - 20 + 'px';
        }
        if(box[i-1].style.top == box[0].offsetTop - os + 'px'){
            box[i].style.top = box[i-1].offsetTop +'px';
            box[i].style.left = box[i-1].offsetLeft - 20 + 'px';

        }
        if(box[i-1].style.left == box[0].offsetLeft - os + 'px'){
            box[i].style.top = box[i-1].offsetTop + 20 + 'px';
            box[i].style.left = box[i-1].offsetLeft + 'px';
            os+=20
        }
    }
    }, true);
}
//norbert.ostaszewski@g-soft.pl 
