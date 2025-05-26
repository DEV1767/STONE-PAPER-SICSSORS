
 let userscore=0;
 let compscore=0;
 
  const choices = document.querySelectorAll(".choice");
  const msg=document.querySelector(".move")
  const score=document.querySelector("#user-score")
   const Cscore=document.querySelector("#com-score")

    const gcompchoice=()=>{
        const option=["Scissors","Rock","Paper"];
        const randidx=Math.floor(Math.random ()*3);
         console.log("Random index:", randidx);
        return option[randidx];
    };
     const drawgame=()=>{
      msg.innerText="Match Draw🤝"
      msg.style.backgroundColor="grey"

   }
   const wingame=()=>{
     msg.innerText="You win!!🎉"
     msg.style.backgroundColor="green"
     userscore++
     score.innerText=userscore
     
   }
   const losegame=()=>{
      msg.innerText="You Lose!!😢"
      msg.style.backgroundColor="red"
      compscore++
      Cscore.innerText=compscore
   }
    const playgame=(userchoice)=>{
    console.log("Userchoice=",userchoice);
    const compchoice = gcompchoice();
    if (userchoice === compchoice){
       drawgame();
    }
    else if( userchoice==="Scissors"&& compchoice==="Rock" ){
       losegame();
    }
    else if(userchoice==="Scissors"&& compchoice==="Paper"){
       wingame();
    }
    else if(userchoice==="Rock" && compchoice==="Scissors"){
      wingame();
    }
    else if(userchoice==="Rock"&& compchoice==="Paper"){
      losegame();
    }
    else if(userchoice==="Paper"&& compchoice==="Rock"){
        wingame();
    }
    else if(userchoice==="Paper" && compchoice==="Scissors"){
       losegame();
    }
}
    choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const userchoice=choice.getAttribute("id");
            playgame(userchoice);
        })
    })