const dropMenu = (element)=>{

  let line1 = document.querySelector("#line1")
  let line2 = document.querySelector("#line3")
  let line3 = document.querySelector("#line2")
  let menu = document.querySelector(".contMenuMobile")
  let body = document.querySelector("body")

  if(menu.style.transform == 'translateX(0px)'){
    menu.style.transform = 'translateX(150%)'
    line1.style.width =""
    line1.style.top =""
    line2.style.width =""
    line2.style.top =""
    line3.style.transform = ""
    body.style.overflow = ""
  }
  else{ menu.style.transform = 'translateX(0px)'
    line1.style.width ="3rem"
    line1.style.top ="0.7rem"
    line2.style.width ="3rem"
    line2.style.top ="-0.7rem"
    line3.style.transform = "translateX(5rem)"
    body.style.overflow = "hidden"
}

}