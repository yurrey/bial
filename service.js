cards = document.querySelectorAll('.content')
let selected = []
cards.forEach((check, i)=>{
  e.onclick=()=>{
    let check = e.querySelector('i')
    if(check.classList.contains('btn-check')){
      e.style.backgroundColor="white"
      check.classList.remove('btn-check')
    }else{
      e.style.backgroundColor="yellow",
      check.classList.add('btn-check')
    }
    
    
  }
  localStorage.setItem('elemnts', selected)
})
