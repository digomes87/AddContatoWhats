
function myfunction (){
  var telefone = document.getElementById("telefone").value;

  window.location.assign(`http://api.whatsapp.com/send?1=pt_BR&phone=55${telefone}`)
  console.log(`Numero ${telefone}`);
}