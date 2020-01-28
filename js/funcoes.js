function criarTabela(){
    //Criar matriz
    var matriz = new Array(256);
    for(var i = 0; i<=255; i ++) matriz[i] = new Array(256);

    //Preencher a matriz
    var ctr = 0;
    var cont = ctr;
    for (var linha = 0; linha <=255; linha ++){
        cont = ctr;
        for(var coluna = 0; coluna<=255; coluna ++){
            if(cont > 255) cont = 0;
            if(linha == 0) {
                if(coluna!=0)matriz[linha][coluna]= String.fromCharCode(cont);
            }
            else{
                matriz[linha][coluna]= String.fromCharCode(cont);
            } 
            if(coluna>0) cont ++;

        }
        if(linha != 0)  ctr ++;
       
    }
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

function criptografarMensagem(){
    var mensagem = document.getElementById("txtCripto").value;
    var cifra = document.getElementById("inputCifraCripto").value;

    if(mensagem !="" && cifra != ""){
        var msgCripto = criptografar(mensagem,cifra);
        document.getElementById("txtDescripto").value = msgCripto;
        corAlerta("txtCripto",false);
        corAlerta("inputCifraCripto",false);
    }
    else{
        if(mensagem=="")corAlerta("txtCripto",true);
        if(cifra=="")corAlerta("inputCifraCripto",true);
    }
}

function descriptografarMensagem(){
    var mensagem = document.getElementById("txtDescripto").value;
    var cifra = document.getElementById("inputCifraDescripto").value;

    if(mensagem !="" && cifra != ""){
        var msgDescripto = descriptografar(mensagem,cifra);
        document.getElementById("txtCripto").value = msgDescripto;
        corAlerta("txtDescripto",false);
        corAlerta("inputCifraDescripto",false);
    }
    else{
        if(mensagem=="")corAlerta("txtDescripto",true);
        if(cifra=="")corAlerta("inputCifraDescripto",true);
    }
}

function corAlerta(id,alerta){
    if(alerta)document.getElementById(id).style.backgroundColor  = "#ff8080";
    
    else document.getElementById(id).style.backgroundColor  = "#ffffff";
}