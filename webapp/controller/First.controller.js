sap.ui.define( 
    [ 
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],function(Controller,MessageBox){
  "use strict";
  return Controller.extend("sap.training.exc.controller.First",{
    OnSayHello : function(){
        MessageBox.information("Surprise")
    }
  });
});