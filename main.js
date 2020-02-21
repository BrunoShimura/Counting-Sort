const botao = document.querySelector("a");

botao.addEventListener("click",(event)=>{
  const vetor = document.forms["form"]["texto"].value;
  if (vetor == "") {
    alert("Insira o vetor");
  }
  else{
    var a = JSON.parse("[" + vetor + "]");
    document.getElementById("tbA").innerHTML = tabela(a);
    document.getElementById("tbB").innerHTML = tabela(countingSort(a, 0, maior(a)));  
  }
})
//---------------------------------------------------------
function tabela(vet){
  var x,txt='',txt2='';
  txt += '<tr><th>Índices</th>';
  txt2 += '<tr><th>Elementos</th>';
  for (x in vet) {
    txt += '<td>'+ x + '</td>';
  }
  for (x in vet) {
    txt2 +=  '<td>' + vet[x] + '</td>';
  }
  txt +='</tr>'+ txt2 + '</tr>';
  return txt;
} 

function countingSort(arr, min, max)
  {
    var i, z = 0, count = [];
 
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    document.getElementById("tbC").innerHTML = tabela(count);
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
 return arr;
}

function maior(vet){
  var maior = vet[0];;
  for(i in vet){
    if(maior < vet[i]){
      maior = vet[i];
    }
  }
  return maior;
}