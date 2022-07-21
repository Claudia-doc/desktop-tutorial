function VerificaSimpatia(){
    let N = document.getElementById("Num").value;
    let Par = document.getElementById("Risposta");

    var immagine = new Array();
    immagine[0]="img1.jpg";
    immagine[1]="img2.jpg";
    immagine[2]="img3.jpg";


    if(N<=0){
        Par.innerHTML="Sei poco simpatico. Cerca di imparare un po. Voto: " + N +".";
        x=0;
        document.getElementById("image").src=immagine[x];
    }
    else{
        if(N<=10){
        Par.innerHTML="Sei abbastanza simpatico :D . Voto: "+ N +".";
        x=1;
        document.getElementById("image").src=immagine[x];
        }else{
        Par.innerHTML="Sei tremendamente simpatico, mi hai fatto morire dalle risate, puoi collaborare con Checco Zalone XD XD XD. Voto: "+ N +".";
        x=2;
        document.getElementById("image").src=immagine[x];
        }
    }
    return;
}