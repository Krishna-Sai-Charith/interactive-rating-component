function submit() {
    window.location.href = "submit.html";
  }
  let one=document.getElementById("one");
  one.addEventListener("click",function(){
    if(one.style.backgroundColor==="rgb(251, 116, 19)"){
      one.style.backgroundColor="#262E39"
    }
    else{
        one.style.backgroundColor="hsl(25, 97%, 53%)";
    }
  });
  let two=document.getElementById("two");
  two.addEventListener("click",function(){
    if(two.style.backgroundColor==="rgb(251, 116, 19)"){
      two.style.backgroundColor="#262E39"
    }
    else{
        two.style.backgroundColor="hsl(25, 97%, 53%)";
    }
  });
  let three=document.getElementById("three");
  three.addEventListener("click",function(){
    if(three.style.backgroundColor==="rgb(251, 116, 19)"){
      three.style.backgroundColor="#262E39"
    }
    else{
        three.style.backgroundColor="hsl(25, 97%, 53%)";
    }
  });
  let four=document.getElementById("four");
  four.addEventListener("click",function(){
    if(four.style.backgroundColor==="rgb(251, 116, 19)"){
      four.style.backgroundColor="#262E39"
    }
    else{
        four.style.backgroundColor="hsl(25, 97%, 53%)";
    }
  });
  let five=document.getElementById("five");
  five.addEventListener("click",function(){
    if(five.style.backgroundColor==="rgb(251, 116, 19)"){
      five.style.backgroundColor="#262E39"
    }
    else{
        five.style.backgroundColor="hsl(25, 97%, 53%)";
    }
  });
let rating=0;
function rating1(){
    rating = 1;
}
function rating2(){
     rating = 2;
}
function rating3(){
     rating =3;
}
function rating4(){
     rating = 4;
}
function rating5(){
    rating = 5;
}
document.querySelector(".submit-btn").addEventListener("click",function(){
    document.getElementById("second-container").style.display="block";
    document.getElementById("first-container").style.display="none";
    ratingSelected();
});
function ratingSelected(){
    document.querySelector(".rating-selected").innerHTML="You selected "+rating+" out of 5";
}





