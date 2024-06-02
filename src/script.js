function teste_Sorteio ()
  {   
    aleatorio= Math.round(Math.random()*10)
    chute=prompt("Digite seu numero da Sorte")
    console.log(aleatorio)
        
      while(chute <1 || chute > 10){
        
      chute=prompt("Numero inválido digite um numero de 1 - 10")
      
      }
    
       numero_certo=chute==aleatorio
    
      if(numero_certo){    
      paragrafoResultado.innerHTML= '🎉Você ganhou o Sorteio !!!🎉'
      paragrafoResultado.style.backgroundColor= "yellow";
    
      }  
    
      if(!numero_certo){      
      paragrafoResultado.innerHTML= '🙁Que Pena !! Tente outra vez !!!🙁'
      paragrafoResultado.style.backgroundColor= "red";
      
     }
  
}

