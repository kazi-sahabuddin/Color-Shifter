window.onload = () =>{
    main();
}
function main(){
    const root = document.getElementById("root");
    const bnt = document.getElementById("change-btn");
    const outt = document.getElementById("output");
    const outt2 = document.getElementById("output2");
    const copyBtn = document.getElementById("copyBtn");
    const copyBtn2 = document.getElementById("copyBtn2");


    bnt.addEventListener('click', function(){
        const color = generateColor();

        const hexColor = generateHEXColor(color);
        const rgbColor = generateRGBColor(color);
        root.style.backgroundColor = hexColor;
      
        outt.value = hexColor.substring(1).toUpperCase();
        outt2.value = rgbColor;


    });

    copyBtn.addEventListener("click", function(){
        navigator.clipboard.writeText(`#${outt.value}`);

        /*if(div != null)
        {
            div.remove();
            div=null;
        }*/
        if(isValidHex(outt.value))
        {
            generateToastMessage(`#${outt.value} copid.`);
        }
        else
        {
            alert('Invalid Color Code.');
        }

    });

    copyBtn2.addEventListener("click", function(){
        navigator.clipboard.writeText(outt2.value);

        /*if(div != null)
        {
            div.remove();
            div=null;
        }*/
 
        generateToastMessage(`${outt2.value} copid.`);


    });

    outt.addEventListener('keyup',function(e){
        const color = e.target.value;
        if(color)
        {
            outt.value = color.toUpperCase();
            if(isValidHex(color))
            {
                root.style.backgroundColor = `#${color}`;
                outt2.value = generateRGBColor(hexToRgb(color));
            }
        }
        
    });
}
/*
function generateHEXColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
   // const hex = red.toString(16)+green.toString(16)+blue.toString(16);
    let r = red.toString(16);
    let g = green.toString(16);
    let b = blue.toString(16);
    r=r.length<2?"0"+r:r;
    g=g.length<2?"0"+g:g;
    b=b.length<2?"0"+b:b;

    return `#${r+g+b}`;
}
*/

function generateHEXColor(color){
    
    let r = color.red.toString(16);
    let g = color.green.toString(16);
    let b = color.blue.toString(16);
    r=r.length<2?"0"+r:r;
    g=g.length<2?"0"+g:g;
    b=b.length<2?"0"+b:b;

    return `#${r+g+b}`;
}


function generateRGBColor(color){    

    return `rgb(${color.red},${color.green},${color.blue})`;
}



function generateColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);  
    

    return {
        red,
        green,
        blue
    };
}

function hexToRgb(hex)
{
    const red = parseInt(hex.slice(0,2),16);
    const green = parseInt(hex.slice(2,4),16);
    const blue = parseInt(hex.slice(4),16);
    return {
        red,
        green,
        blue
    };
}



function generateToastMessage(msg)
{
    const div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in'

    document.body.appendChild(div);
    setTimeout(function(){
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');
       
        
    },2000);
    setTimeout(() => {
        div.remove();
    }, 2450);
    

}

/**
 * @param {string} color: ;
 */

function isValidHex(color){
    if(color.length != 6)
        return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}


