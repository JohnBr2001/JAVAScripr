function carregarImagens(){
      
    var xmlHttpRequest = new XMLHttpRequest();
    var url = "https://dog.ceo/api/breeds/image/random"

    xmlHttpRequest.open("GET", url, true);

    xmlHttpRequest.onreadystatechange = function() {
        if (xmlHttpRequest.readyState == 3) {
            console.log('Carregando o conteúdo');
        }
        if (xmlHttpRequest.readyState == 4) {
             
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);

            console.log('Requisição Finalizada');
            console.log('Resultado da Requisição: ' + jsonResponse);
            console.log('Resultado da Requisição: ' + jsonResponse.message);

            var imgDog = document.getElementById("img_dog");
            imgDog.src = jsonResponse.message;
        }
    };
         
    xmlHttpRequest.send(null);

}


function carregarImagens(){
                  
    var url = "https://dog.ceo/api/breeds/image/random" 
    fetch(url, { 
        method: 'get' 
    })
    .then(function(response) { 
        response.json().then(function(data){
            console.log('Resultado da Requisição: ' + data.message); 
                  
            var imgDog = document.getElementById("img_dog");
            imgDog.src = data.message;
        });
    })
    .catch(function(err) { 
        console.error('O seguinte erro ocorreu durante a requisição: ' + err);
    });

}