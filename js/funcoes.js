function criarTabela(){
    //Criar matriz
    var matriz = new Array(256);
    for(var i = 0; i<=255; i ++) matriz[i] = new Array(256);


    //Preencher a matriz
    //var texto = "<table border = '1px solid'>";
    var ctr = 0;
    var cont = ctr;
    for (var linha = 0; linha <=255; linha ++){
        //texto+="<tr>";
        cont = ctr;
        for(var coluna = 0; coluna<=255; coluna ++){
            if(cont > 255) cont = 0;
            if(linha == 0) {
                //texto +="<th>";
                if(coluna!=0)matriz[linha][coluna]= String.fromCharCode(cont);
            }
            else{
                //texto +="<td>";
                matriz[linha][coluna]= String.fromCharCode(cont);
            } 
            if(coluna>0) cont ++;

        }
        if(linha != 0)  ctr ++;//texto +="</th>";
        /*
        else{
            //texto +="</td>";
            ctr ++;
        }
        */
       
    }
    //texto += "</table>";
    //document.write(texto);
    //document.getElementById("tabela").innerHTML = texto;
    return matriz;
}

function criptografar(mensagem,cifra){
    var textoCriptografado = "";

    var matriz = criarTabela();
    ctr = 0;
    for(var index = 0; index < mensagem.length ; index++){
        if(ctr>=cifra.length) ctr =0;
        textoCriptografado+= matriz[ cifra[ctr].charCodeAt(0) ][ mensagem[index].charCodeAt(0) ]; 
        ctr++;
    }

    return textoCriptografado;
}

function descriptografar(mensagemCriptografada, cifra){
    var textoOriginal = "";

    var matriz = criarTabela();
    ctr = 0;
    for(var index = 0; index < mensagemCriptografada.length ; index++){
        if(ctr>=cifra.length) ctr =0;
        var coluna = matriz[ cifra[ctr].charCodeAt(0) ].indexOf(mensagemCriptografada[index]);
        textoOriginal+= String.fromCharCode(coluna);
        ctr++;
    }
    
    return textoOriginal;
}