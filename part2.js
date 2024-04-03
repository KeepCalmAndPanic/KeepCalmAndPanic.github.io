function replayButton(){
    let part2 = document.getElementById("part2Wrapper");
    let part2Copy = part2.cloneNode(true);
    part2.replaceWith(part2Copy);
    idAnimation();

}

document.getElementById("part2Wrapper").addEventListener("onload", idAnimation());

function idAnimation(){
    const element = document.getElementById("part2NameID");
    let opacity = 0;
    let animID;
    let timer = 0;
    element.style.opacity = "0";


    function animate(){
        if (timer < 1000){
            timer += 10;
            
        }
        else if(timer >= 1000 && timer <1100){
            opacity += 0.1;
            element.style.opacity = opacity+"";
            timer += 10;
            
        }

        else if(timer >=1100){
            clearInterval(animID);
        }
    }
    animID = setInterval(animate, 100);
}
