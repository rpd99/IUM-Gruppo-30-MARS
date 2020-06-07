function caricamentoPagina(str) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idAnimale = urlParams.get('id')
    document.getElementById("idAnimale").innerHTML = str + idAnimale;
    document.getElementById(idAnimale).className = "list-group-item align-items-center d-inline-flex p-0 py-1 justify-content-center active w-100";
    var a = document.getElementById('aggiuntaFarmaco');
    a.href = "aggiuntaFarmaco.html?id="+idAnimale;
    var b = document.getElementById('aggiuntaVaccino');
    b.href = "aggiuntaVaccino.html?id="+idAnimale;
    var c = document.getElementById('aggiuntaPodologo');
    c.href = "aggiuntaPodologo.html?id="+idAnimale;
}

function caricamentoPosizione(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idAnimale = urlParams.get('id')
    document.getElementById(idAnimale).className = "list-group-item align-items-center d-inline-flex p-0 py-1 justify-content-center active w-100";
}

function ricerca(tab, lists) {
    var input;
    var filtro;
    var lista;
    var voci;
    var x;
    var i;
    var testo;
    input = document.getElementById(tab);
    filtro = input.value.toUpperCase();
    lista = document.getElementById(lists);
    voci = lista.querySelectorAll("li");
    for (i = 0; i < voci.length; i++) {
    x = lista.querySelectorAll("li")[i];
    testo = x.textContent || x.innerText;
    if (testo.toUpperCase().indexOf(filtro) > -1) {
        voci[i].style.display = "";
    } else {
        voci[i].style.display = "none";
    }
    }
}

function localizzaMucca(muccaCliccata) {
    muccaCorrente =  localStorage.getItem("muccaCorrente");

    if (muccaCliccata != muccaCorrente && muccaCorrente!=null) {
    $('#mappa-stalla').mapster({
        mapKey: 'data-key'
    })
    .mapster('set',false,muccaCorrente);
    document.getElementById(muccaCorrente).classList.remove("active");
    }
    
    document.getElementById(muccaCliccata).classList.add("active");

    $('#mappa-stalla').mapster({
        mapKey: 'data-key',
        fillOpacity: 0,
        stroke: true,
        strokeColor: "3320FF",
        strokeWidth: 7,
        singleSelect: true
    })
    .mapster('set',true,muccaCliccata);

    localStorage.setItem("muccaCorrente", muccaCliccata);
}

function apriNotifica() {
    var x = document.getElementById("notifica");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}

function chiudiNotifica() {
    var x = document.getElementById("notifica");
    x.style.display = "none";
} 

function successMessageVaccino() {
    var x = document.getElementById("inlineFormInputGroup");
    var y = document.getElementById("inlineFormInputGroup2");
    var notifica = document.getElementById("notifica");
    if (x.value != "" && y.value != "") {
        var v = confirm("Inserire vaccino?");
        if(v===true){
            x.value = "";
            y.value = "";
            notifica.style.display = "block";
        }
    } else {
        if (x.value == "") {
            alert("Inserire data!");
        } else {
            alert("Inserire nome farmaco!");
        }
    }
}

function successMessageFarmaco() {
    var x = document.getElementById("dataInizio");
    var y = document.getElementById("inlineFormInputGroup");
    var z = document.getElementById("inlineFormInputGroup2");
    if (x.value != "" && y.value != "" && z.value != "") {
        var v = confirm("Inserire farmaco?");
        if(v===true) {
            x.value = "";
            y.value = "";
            z.value = "";
            document.getElementById("notifica").style.display = "block";
        }
    } else {
        if (x.value == "") {
            alert("Inserire data inizio!");
        } else if (y.value == "") {
            alert("Inserire data fine!");
        } else {
            alert("Inserire nome farmaco!")
        }
    }
}

function successMessagePodologo() {
    var x = document.getElementById("inlineFormInputGroup");
    var y = document.getElementById("exampleTextarea");
    if (x.value != "" && y.value != "") {
        var v = confirm("Inserire visita podologo?");
        if(v===true) {
            x.value = "";
            y.value = "";
            document.getElementById("notifica").style.display = "block";
        }
    } else {
        if (x.value == "") {
            alert("Inserire data visita!");
        } else {
            alert("Inserire nota podologo!")
        }
    }
}
