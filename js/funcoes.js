function criarTabela(){
    var texto = "<table border = '1px solid'>";
    var ctr = 0;
    var cont = ctr;
    for (var linha = 0; linha <=93; linha ++){
        texto+="<tr>";
        cont = ctr;
        for(var coluna = 0; coluna<=93; coluna ++){
            if(cont >= 93) cont = 0;
            if(linha == 0) {
                texto +="<th>";
                if(coluna!=0)texto+= String.fromCharCode(cont+33);
            }
            else{
                texto +="<td>";
                texto+= String.fromCharCode(cont+33);
            } 
            if(coluna>0) cont ++;

        }
        if(linha == 0) texto +="</th>";
        else{
            texto +="</td>";
            ctr ++;
        }
    }
    texto += "</table>";
    document.write(texto);
    //document.getElementById("tabela").innerHTML = texto;
}