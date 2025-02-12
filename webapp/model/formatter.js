sap.ui.define([], function(){
"use strict";

return {
    classText : function(cls){
        switch(cls){
            case "C" : return "Business class";
            case "Y" : return "Economy class";
            case "F" : return "First class";
            default : return cls;
        }
    }
};

});