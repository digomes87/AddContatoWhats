// http://api.whatsapp.com/send?1=pt_BR&phone=5511980785518

function myfunction (){
  var telefone = document.getElementById("telefone").value;

  window.location.assign(`http://api.whatsapp.com/send?1=pt_BR&phone=55${telefone}`)
  console.log(`Numero ${telefone}`);
}

function loadBalance(){
  var ddi = '';
  var dddEscolha = [];

  $.getJSON("./consulta/ddi.json", function(data){
    dddEscolha = data.country;

    for(i=0; i < dddEscolha.length; i++){
      ddi += `<option value="${dddEscolha[i]}"></option>`
    }
    console.log(`Aqui ddi ${ddi}`);
    document.getElementById('ddi').innerHTML = ddi;
  })
}