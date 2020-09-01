jQuery(function(){ jQuery("#order_shipping_address_taxid").Rut({
   on_error: function(){ alert('El rut ingresado es incorrecto');jQuery("#order_shipping_address_taxid").val('');jQuery("#order_shipping_address_taxid").focus(); },
   format_on: 'keyup'
   });});

  function validarlogin1()
  {
  if (jQuery('#order_shipping_address_taxid').val() == '')
  {
    alert('Debe completar Rut');
    jQuery('#order_shipping_address_taxid').focus();
    return false;
  }

  return true;
  }

if($("#shipping_same_as_billing").is(":checked")){
jQuery(function(){ jQuery("#order_billing_address_taxid").Rut({
   on_error: function(){ alert('El Rut de facturación ingresado es incorrecto');jQuery("#order_billing_address_taxid").val('');jQuery("#order_billing_address_taxid").focus(); },
   format_on: 'keyup'
   });});

  function validarlogin1()
  {
  if (jQuery('#order_billing_address_taxid').val() == '')
  {
    alert('Debe completar Rut de Facturacion');
    jQuery('#order_billing_address_taxid').focus();
    return false;
  }

  return true;
  }
}
