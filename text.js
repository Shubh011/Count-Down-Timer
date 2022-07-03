const enddate = "30 july 2022 10:00 PM"

document.getElementById("enddate").innerHTML = enddate ;
const inputs = document.querySelectorAll("input")
function clock(){
    const end = new Date(enddate) ;
    const now = new Date() ;
    const diff = (end - now)/1000 ; //divide by 1000 convert miliseconds into seconds
   // console.log(diff) ; //show the difference in miliseconds 
   if(diff<0)
   {
    return ;
   }
    //convert into days
   inputs[0].value = Math.floor(diff/3600/24) ;
   //convert into hours
   inputs[1].value = Math.floor(diff/3600)%24 ;
   //convert into minutes
   inputs[2].value = Math.floor(diff/60)%60 ;
   //convert into seconds
   inputs[3].value = Math.floor(diff)%60 ;


}
clock() 
/*
- 1 day = 24hr
- 1 hr = 60 min 
- 1 min = 60s
 60 min = 3600 s
*/
setInterval(
    ()=>{
        clock()
    },
    1000
)