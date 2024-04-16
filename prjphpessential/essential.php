<?php



$var = 140;

 MontarMensagemWeb($_POST["Login"],$_POST["Senha"]);

 $perfil = "ADM";
 carreOpções($perfil);

// If trnario
// echo ($user == "juquinha" && $senha == "123") ?     echo "Você logou" . $user : echo "Não logou";



function carreOpções($opcaoperfil)
{


    if($opcaoperfil== "ADM")
    {
        RenderizarMenu(6);

        // echo "<ul>";
        // for ($i=0; $i < 5 ; $i++) { 
        //    echo "<li><a href=\"\">opção ".$i."</a></li>";
        // }
        // echo "</ul>";

    }
    elseif ($opcaoperfil=="VEN") {
        RenderizarMenu(3);
        // $i = 1;
        // do {
        //     echo "<li><a href=\"\">opção ".$i."</a></li>";
        //     $i++;
        // } while ($i <= 3);
    }
    elseif ($opcaoperfil=="CLI") 
    {
           RenderizarMenu(2); 
    //    $i = 1;
    //    while($i <=2)
    //    {

    //     echo "<li><a href=\"\">opção ".$i."</a></li>";
    //     $i++;


    //    }
        
    }
   
    

}

function RenderizarMenu(int $NumeroPerfil) 
{
    echo "<ul>";
    for ($i=0; $i <= $NumeroPerfil ; $i++) { 
        echo "<li><a href=\"\">opção ".$i."</a></li>";
     }
     echo "</ul>";

   

}

function MontarMensagemWeb(string $login, string $senha)
{
    $MensagemRetorno="";
    if(ValidarUsuario($login, $senha))
    {
        $MensagemRetorno =  "Você logou" . $login;
        
    }
    else {
        $MensagemRetorno = "Não logou";
    }
    return $MensagemRetorno;

}

function ValidarUsuario(string $login, string $senha)
{
    return ($login == "juquinha" && $senha == "123") ? true :false;
    


}