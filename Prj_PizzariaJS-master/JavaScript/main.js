// const BotaoAdicionarPizza = document.querySelectorAll(".card-area__button-add");
const modal = document.querySelector(".bkg-modal");
const btnconfirmar = document.querySelector(".btn__green-btn");
const maisclick = document.querySelectorAll(".card-area__button-add");
const btn_mais_add = document.querySelector("#mais");
const btn_diminuir = document.querySelector("#menos");
const contador = document.querySelectorAll(".modal__unit-control button");
const cancelar = document.querySelector(".btn__red-btn");
let preco = document.querySelector("#preco");
let valor = document.querySelector(".modal__unit-control span");
const TamanhoPequeno = document.querySelector(".modal__hover-p");
const TamanhoMedio = document.querySelector(".modal__hover-m");
const TamanhoGrande = document.querySelector(".modal__hover-g");


for (let j = 0; j < maisclick.length; j++) {
    maisclick[j].addEventListener('click', () => {
        modal.classList.add("bkg-modal--ativo");
        console.log("confirmado");
        modal.requestFullscreen();
        
    })
}



// btn_mais_add.addEventListener("click", () => 
// {
//     valor.innerHTML = parseInt(valor.innerHTML) +1;
//     preco.innerHTML = parseInt(preco.innerHTML) + parseInt(99);
//     console.log("adicionado");


// })

btn_mais_add.addEventListener('mousedown', () =>
{

        valor.innerHTML = parseInt(valor.innerHTML) +1;
        console.log("segurou");
    


});

btn_mais_add.addEventListener('mouseup',() =>{

    console.log("Soltou");

    
})



btn_diminuir.addEventListener('click', () => {

    valor.innerHTML = parseInt(valor.innerHTML) -1;
    preco.innerHTML = parseInt(preco.innerHTML) - parseInt(99);
    if(valor.innerHTML < 0)
    {

        valor.innerHTML = parseInt(0);
        
    }
    console.log("reduziu");     

    if(valor.innerHTML == 0 || valor.innerHTML <0)
    {

        preco.innerHTML = parseInt(00);



    }
    




})

cancelar.addEventListener('click', () =>
{

    
    modal.classList.remove("bkg-modal--ativo");
    console.log("cancelado");


})

btnconfirmar.addEventListener('click', () => 
{

    modal.classList.remove("bkg-modal--ativo");
    console.log("confirmado");




})


TamanhoPequeno.addEventListener('click', () => 
{
    console.log("apertou no Pequeno");
    
    
    TamanhoPequeno.classList.add("modal__hover_p--colorchange");
    TamanhoMedio.classList.remove("modal__hover_m--colorchange");
    TamanhoGrande.classList.remove("modal__hover_g--colorchange");
    




})

TamanhoMedio.addEventListener('click', () => 
{
    console.log("apertou no Médio");
    
    
    TamanhoMedio.classList.add("modal__hover_m--colorchange");
    TamanhoGrande.classList.remove("modal__hover_g--colorchange");
    TamanhoPequeno.classList.remove("modal__hover_p--colorchange");




})

TamanhoGrande.addEventListener('click', () => 
{
    console.log("apertou no Grande");
    
    
    TamanhoGrande.classList.add("modal__hover_g--colorchange");
    TamanhoMedio.classList.remove("modal__hover_m--colorchange");
    TamanhoPequeno.classList.remove("modal__hover_g--colorchange");




})









