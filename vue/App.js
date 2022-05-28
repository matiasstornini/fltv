const apiurl = 'https://redcardfut2.netlify.app/Datos.json'
fetch(apiurl)
    .then(response => response.json())
    .then(function(data) {
        let html = '';
        data.forEach(function(data) {
            var dta = [];
            var date = new Date(data.dt * 1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var formattedTime =
                hours + ":" + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/
            dta.push(formattedTime);
            html += `
            <h3 align="center"><u>Todos los eventos:</u></h3>
             <h4>${dta} ${data.Partido} (${data.Competicion})</h4>
                ${data.Switch !== 0 ? (
                  `
                  ${data.EnlaceMatchs.valor1 !== "" ? (
                  	`<a class="waves-effect outline ahref waves-dark btnoutlinedark" href="${data.EnlaceMatchs.valor1}" style="background-color: #ffffff00;"><b>ABRIR 1</b></a>  `
                    ) : (
                      ""
                    )}
                    ${data.EnlaceMatchs.valor2 !== "" ? (
                      `<a class="waves-effect outline ahref waves-dark btnoutlinedark" href="${data.EnlaceMatchs.valor2}" style="background-color: #ffffff00;"><b>ABRIR 2</b></a>  `
                      ) : (
                        ""
                      )}
                      ${data.EnlaceMatchs.valor3 !== "" ? (
                        `<a class="waves-effect outline ahref waves-dark btnoutlinedark" href="${data.EnlaceMatchs.valor3}" style="background-color: #ffffff00;"><b>ABRIR 3</b></a>  `
                        ) : (
                          ""
                        )}
                      ${data.EnlaceMatchs.valor4 !== "" ? (
                        `<a class="waves-effect outline ahref waves-dark btnoutlinedark" href="${data.EnlaceMatchs.valor4}" style="background-color: #ffffff00;"><b>ABRIR 3</b></a>  `
                        ) : (
                          ""
                        )}
                      ${data.EnlaceMatchs.valor5 !== "" ? (
                        `<a class="waves-effect outline ahref waves-dark btnoutlinedark" href="${data.EnlaceMatchs.valor5}" style="background-color: #ffffff00;"><b>ABRIR 3</b></a>  `
                        ) : (
                          ""
                        )}
                      ${data.EnlaceMatchs.valor6 !== "" ? (
                        `<a class="waves-effect outline ahref waves-dark btnoutlinedark" href="${data.EnlaceMatchs.valor6}" style="background-color: #ffffff00;"><b>ABRIR 3</b></a>  `
                        ) : (
                          ""
                        )}
                  `
                ) : (
                  ""
                )}
             <a class="waves-effect outline ahref waves-dark btnoutlinedark" href="${data.Estadisticas}" style="background-color: #ffffff00;">Estadisticas</a>
             `;
        })
        document.getElementById('Matchs').innerHTML = html;

    })

    .catch(err => console.log(err))
