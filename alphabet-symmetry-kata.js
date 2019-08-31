function solve(array){

    let arrayResult = [];
      for(let i=0; i<array.length; i++){
      
          arrayResult.push(findNum(array[i]));
        
      }
      return arrayResult;
  }
  
  
  function findNum(str){
      let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      let num = 0;
      str = str.toLowerCase();
      for(let i=0; i<str.length; i++){
          if(str[i]==alphabet[i]){
              num++;
          }
      }
      return num;
  }