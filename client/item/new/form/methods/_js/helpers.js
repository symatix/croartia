Template.methods.helpers({
	pigmentForm:function(){
		if(Session.get("showPigment")){
			//$('.togglePigment').removeClass("active");
			$(".toggle").hide();
			delete Session.keys.showPigment;
			return true;
		}	
	}
/*	form:function(){
		    var methods = [
		    	"aas",
		    	"aes",
		    	"afm",
		    	"analysis",
		    	"afm","binderFiller","c_14","colorimetry","drms","fors","ft_ir","gc_ms","gl","granulometry","hygroscopic","irpIrrIrfc","libs","ol","om","pige","pixe","plm","rbs","rs","scanning","semSemEdx","synchrotron","tem","tl","tlc","uv_vis","uvf","vis","xrd","xrf","xxr"];
			var i;

			for(i=0; i<methods.length; i++){
				var methodsInput = '<div class="toggle" id="object_toggle-'+method[i]+'"><div class="row align-center"><div class="uderline-method"><h4>aas</h4> </div> </div> <div class="row"> <div class="col-xs-12 col-md-6 individual-property '+method[i]+'Experimental">EXPERIMENTAL PARAMETERS </div> <div class="col-xs-12 col-md-6"> <input type="text" class="individual-value individual-form" id="object_'+method[i]+'Experimental" placeholder="(e.g. X-ray tube voltage, laser wavelength, air/vacuum, etc.)" value="{{details.methods.'+method[i]+'.experimentalParameters}}"> </div> <div class="col-xs-12 col-md-6 individual-property '+method[i]+'Elements">ELEMENTS DETERMINED </div> <div class="col-xs-12 col-md-6"> <input type="text" class="individual-value individual-form" id="object_'+method[i]+'Elements" placeholder="(e.g. cobalt blue, red ochre, indigo, etc.)" value="{{details.methods.'+method[i]+'.elements}}"> </div> <div class="col-xs-12 col-md-6 individual-property '+method[i]+'Formulae">CHEMICAL FORMULAE DETERMINED </div> <div class="col-xs-12 col-md-6"> <input type="text" class="individual-value individual-form" id="object_'+method[i]+'Formulae" placeholder="" value="{{details.methods.'+method[i]+'.formulae}}"> </div> <div class="col-xs-12 col-md-6 individual-property '+method[i]+'PigmentsDyes">PIGMENTS/DYES IDENTIFIED </div> <div class="col-xs-12 col-md-6"> <input type="text" class="individual-value individual-form" id="object_'+method[i]+'PigmentsDyes" placeholder="" value="{{details.methods.'+method[i]+'.pigmentsDyes}}"> </div> <div class="col-xs-12 col-md-6 individual-property '+method[i]+'Priming">PRIMING IDENTIFIED </div> <div class="col-xs-12 col-md-6"> <input type="text" class="individual-value individual-form" id="object_'+method[i]+'Priming" placeholder="" value="{{details.methods.'+method[i]+'.priming}}"> </div> <div class="col-xs-12 col-md-6 individual-property '+method[i]+'BindingMedia">BINDING MEDIA IDENTIFIED </div> <div class="col-xs-12 col-md-6"> <input type="text" class="individual-value individual-form" id="object_'+method[i]+'BindingMedia" placeholder="" value="{{details.methods.'+method[i]+'.bindingMedia}}"> </div> <div class="col-xs-12 col-md-6 individual-property '+method[i]+'Varnish">VARNISH IDENTIFIED </div> <div class="col-xs-12 col-md-6"> <input type="text" class="individual-value individual-form" id="object_'+method[i]+'Varnish" placeholder="" value="{{details.methods.'+method[i]+'.varnish}}"> </div> <div class="col-xs-12 col-md-6 individual-property '+method[i]+'StretcherSupportStrainer">STRETCHER/SUPPORT/STRAINER IDENTIFIED </div> <div class="col-xs-12 col-md-6"> <input type="text" class="individual-value individual-form" id="object_'+method[i]+'StretcherSupportStrainer" placeholder="" value="{{details.methods.'+method[i]+'.stretcherSupportStrainer}}"> </div> <div class="col-xs-12"> &nbsp; </div> </div> <div class="row align-center"> <div class="col-xs-12 notes">Brief info about possible multilayers/underpaintings/retouches </div> <div class="col-sm-8 col-sm-offset-2"> <textarea class="" id="object_'+method[i]+'Brief" name="sources" rows="4" placeholder="(e.g. secondary effects from underlying signal sources)" value="{{details.methods.'+method[i]+'.notes.brief}}"></textarea> </div> <div class="col-xs-12 notes">Comments </div> <div class="col-sm-8 col-sm-offset-2"> <textarea class="" id="object_'+method[i]+'Comments" name="sources" rows="4" placeholder="(e.g. additional info not covered by the points above)" value="{{details.methods.'+method[i]+'.notes.comments}}"></textarea> </div> <div class="col-xs-12 notes">Sources </div> <div class="col-sm-8 col-sm-offset-2"> <textarea class="" id="object_'+method[i]+'Sources" name="sources" rows="4" placeholder="(literature)" value="{{details.methods.'+method[i]+'.notes.sources}}"></textarea> </div> <div class="col-xs-12"> &nbsp; </div> </div> {{> files_methods_'+method[i]+'}} <div class="row align-center"> <div class="col-xs-12 notes">Figure captions </div> <div class="col-sm-8 col-sm-offset-2"> <textarea class="" id="object_'+method[i]+'Caption" name="history" rows="4" placeholder="(e.g. additional info not covered by the points above)" value="{{details.methods.'+method[i]+'.notes.caption}}"></textarea> </div> <br/> </div> </div>';
				$('.methodsForm').append(methodsInput);
		    }
		return true;
	}
*/
})