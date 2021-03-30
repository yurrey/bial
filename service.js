checkbtn = document.querySelectorAll('.btn')
cards = document.querySelectorAll('.card')

let selected = []
checkbtn.forEach((e, i)=>{
  e.onclick=()=>{
    let icon = e.querySelector('i')
    if(icon.classList.contains('fa-check')){
      cards[i].style.backgroundColor="white"
      icon.classList.remove('fa-check')
    }else{
      cards[i].style.backgroundColor="yellow",
      icon.classList.add('fa-check')
    }
    
    
  }
})
