document.addEventListener("mousemove", function(e){

    const sparkle = document.createElement("span");

    sparkle.innerHTML = "✦";

    sparkle.className = "sparkle";

    sparkle.style.left = e.pageX + "px";

    sparkle.style.top = e.pageY + "px";

    sparkle.style.fontSize = (10 + Math.random()*12) + "px";

    sparkle.style.transform = `rotate(${Math.random()*360}deg)`;

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },700);

});