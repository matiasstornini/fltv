let card = '';
console.log(x);
var dta = [];
var date = new Date(1665929700 * 1000);
var hours = date.getHours();
var minutes = "0" + date.getMinutes();
var formattedTime =
    hours + ":" + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/
dta.push(formattedTime);
card += `
<h3 align="center"><u>Evento Destacado:</u></h3>
<div class="card sticky-action" style="overflow: visible;">
    <div class="card-image waves-effect waves-block waves-light">
        <img class="" src="https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2022/10/15/16657903599615.jpg" widt="100%" height="100%">
    </div>
    <div class="card-content">
        <span class="card-title grey-text text-darken-4">${dta[0]} Real Madrid - Barcelona</span>
    </div>
    
    <div class="card-action">
        ${x === 0 ? "No Disp." : (
            `
            <a class="waves-effect outline ahref waves-dark btnoutlinedark" href="${Enlaces[0]}" style="background-color: #ffffff00;"><b>Abrir</b></a>
            <a class="waves-effect outline ahref waves-dark btnoutlinedark" href="${Enlaces[1]}" style="background-color: #ffffff00;"><b>Abrir</b></a>
            <a class="waves-effect outline ahref waves-dark btnoutlinedark" href="${Enlaces[2]}" style="background-color: #ffffff00;"><b>Abrir</b></a>
            <a class="waves-effect outline ahref waves-dark btnoutlinedark" href="${Enlaces[3]}" style="background-color: #ffffff00;"><b>Abrir</b></a>
            <a class="waves-effect outline ahref waves-dark btnoutlinedark" href="${Enlaces[4]}" style="background-color: #ffffff00;"><b>Abrir</b></a>
            <a class="waves-effect outline ahref waves-dark btnoutlinedark" href="${Enlaces[5]}" style="background-color: #ffffff00;"><b>Abrir</b></a>

            <a class="waves-effect outline ahref waves-dark btnoutlinedark" href="https://csb-vvcdv9-adiccfut.vercel.app/partido1" style="background-color: #ffffff00;">Estadisticas</a>`
        )}
        
    </div>
</div>`;
document.getElementById('Card').innerHTML = card;
