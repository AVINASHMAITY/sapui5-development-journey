sap.ui.define(["sap/ui/core/ComponentContainer"],function(ComponentContainer){
"use strict";

//  XMLView.create({
//   id: "First",
//   viewName: "sap.training.exc.view.First"
//  }).then(function(e){
//    e.placeAt("cont");
//  });

var oContainer = new ComponentContainer({
  id : "container",
  name : "sap.training.exc",
  manifest : true,
  async : true,
  settings : {
    id: "sap.training.exc"
  }
});

oContainer.placeAt("cont");

});

