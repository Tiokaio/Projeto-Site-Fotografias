let nome = document.querySelector('#nome').value;
let numero = document.querySelector('#numero').value;




    document.querySelector("#submit").addEventListener('click',function(){
        let nomeS = document.getElementById("nome").value
        let numeroS=document.getElementById("numero").value

        if (nomeS == '' || numeroS== ''){alert('Preencha as Informações')}
    else
{
    let orçamento=document.querySelector('#scales').value
    let url = ("https://api.whatsapp.com/send?phone=5521997475545&text= Bem vindo a Borges Fotografia -->> %0A Qual é o seu nome? %0A " + nomeS + " %0A Qual o seu número ?%0A "+
    numeroS + " %0A Qual Orçamento Deseja ?%0A "+ orçamento);
    window.open(url);
}})

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }






