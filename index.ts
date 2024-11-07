const toggle_Button =document.getElementById('toggle-skills') as HTMLButtonElement
const toggle1_Button = document.getElementById('toggle1-skills') as HTMLButtonElement
const skill = document.getElementById('Skills') as HTMLElement
toggle_Button.addEventListener('click',()=>{  
    skill.style.display='block'
    toggle_Button.style.display='none'
    toggle1_Button.style.display='block'

})

toggle1_Button.addEventListener('click',()=>{
    skill.style.display='none'
   toggle1_Button.style.display='none'
    toggle_Button.style.display='block'
   
})