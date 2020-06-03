
var prec = "";

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
    function posizioneMucca(name) {
      if (name != prec && prec!="") {
        document.getElementById(prec).className = "list-group-item align-items-center d-inline-flex p-0 py-1 justify-content-center w-100";

      }
        document.getElementById(name).className = "list-group-item align-items-center d-inline-flex p-0 py-1 justify-content-center active w-100";
        prec = name;
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

function eviMucca(){
  $('#mappaStalla')
        .mapster({
            mapKey: 'data-key'
        })
        .mapster('set',true,'ID000001');
}
