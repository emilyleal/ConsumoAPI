
    const obterTemp = () =>{
    const chave = '777fd6c175f16899b669ab9b22be7638'
    const cidade = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=${chave}&units=metric`


  fetch(url)
        .then(resposta =>{
          //console.log(resposta)
          return resposta.json()
        })
          .then(dados =>{
            console.log(dados);
            document.getElementById("temp").innerText = dados.main.temp 
          })
          .catch(erro => {
            console.log(erro)
          })
 }