const fact=document.getElementById('fact');
const factText=document.getElementById('factText');
const numberInput=document.getElementById('numberInput');

numberInput.addEventListener('input',getFactFetch);

//function getFactAjax(){
  //  const number=numberInput.value;

  //  let xhr=new XMLHttpRequest();
    //xhr.open('GET', 'http://numbersapi.com/'+number);

    //xhr.onload=function(){
      //  if(this.status==200 && number !=''){
        //    fact.style.display='block';
          //  factText.innerHTML=this.responseText;
         


        //}

    //}
    //xhr.send();
//}

function getFactFetch(){
    const number=numberInput.value;
    fetch(`http://numbersapi.com/${number}`).then((res)=>res.text())
    .then((data)=>{
        if(number !=''){
            fact.style.display='block';
            factText.innerText=data;
        }
    }).catch(err=> console.log(err));
}