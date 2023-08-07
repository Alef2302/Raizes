function Delta ( a , b , c){
 const delta = (-b)*(-b) - 4*a*c
 console.log('Coeficientes: '+ 'a='+a+ ' b='+b+ ' c='+c);
 console.log('valor de delta='+ delta);
  const primeiraraiz  = (-b + Math.sqrt(delta)) / (2*a)  ;
  const segundaraiz = (-b - Math.sqrt(delta)) / (2*a)  ;	
  console.log('raiz primeira='+ primeiraraiz);
  console.log('segunda segundaraiz='+ segundaraiz);
 
}
Delta(1,12,20);
