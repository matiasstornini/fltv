
  function fuctiondarkmode() {
     var element = document.body;
     element.classList.toggle("dark-mode");

     if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode','true');
     }else{
      localStorage.setItem('dark-mode','false');
     }
  }

  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById("buton").innerHTML = "<span onclick='fuctiondarkmode(); location.reload();' class='waves-effect waves-light btnoutline' style='background-color: #ffffff00;''><b>Modo oscuro: ON</b></span>  ";
  }else{
    document.body.classList.remove('dark-mode');
    document.getElementById("buton").innerHTML = "<span onclick='fuctiondarkmode(); location.reload();' class='waves-effect waves-light btnoutline' style='background-color: #ffffff00;''><b>Modo claro: ON</b> ";
  }

  let is_dark=document.querySelector("body").classList.contains("dark-mode");let elements=document.getElementsByClassName("waves-effect");for(let i=0;i<elements.length;i++){if(!is_dark){elements[i].classList.remove("waves-light");elements[i].classList.remove("btnoutlinelight");elements[i].classList.add("waves-dark");elements[i].classList.add("btnoutlinedark")}else{elements[i].classList.remove("waves-dark");elements[i].classList.add("waves-light");elements[i].classList.remove("btnoutlinedark");elements[i].classList.add("btnoutlinelight")}}

// 
let openScreen = (screenName) => {
  // any other stuff you may need to do before opening the screen.
  window.AppInventor.setWebViewString(screenName);
}

