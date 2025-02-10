sap.ui.define(["sap/ui/core/mvc/XMLView"],function(XMLView){
"use strict";

 XMLView.create({
  id: "First",
  viewName: "sap.training.exc.view.First"
 }).then(function(e){
   e.placeAt("cont");
 });
});