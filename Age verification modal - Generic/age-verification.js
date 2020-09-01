$(window).on('load',function(){
  alignModal();
  let ageVerification = localStorage.getItem('ageVerification');
  if( ageVerification ){
    console.log("Client 18+");
	} else {
    $('#age-verification').modal('show');
    $("#under-18").click(function(){
      $(".age-info h1").text("¡Lo sentimos!");
      $(".age-info p em").text("¡Precioné el botón incorrecto!");
      $(".disclaimer").text("Debes verificar que tienes 18 años de edad o más para ingresar a este sitio");
      $(this).css("display", "none");
      $(".age-info .btn-primary").css("width", "100%");
      $(".age-info .btn-primary").text("Soy mayor de edad");
    })
    $("#over-18").click(function(){
    		localStorage.setItem('ageVerification', 'true');
      	console.log(localStorage.ageVerification)
    })
  }
});

$(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
});  

function alignModal(){
   let modalDialog = $('#age-verification').find(".modal-dialog");
      // Applying the top margin on modal dialog to align it vertically center
    modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 3));
}