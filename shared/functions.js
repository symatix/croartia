Meteor.myFunctions = {
  dateFormat:function(){
    Date.prototype.getHoursCustom = function(){
      var retval = this.getHours();
      if (retval < 10) {
          return ("0" + retval.toString());
      } else {
          return retval.toString();
      }
    }
    Date.prototype.getMinutesCustom = function(){
      var retval = this.getMinutes();
      if (retval < 10) {
          return ("0" + retval.toString());
      } else {
          return retval.toString();
      }
    }
    Date.prototype.getSecondsTwoCustom = function(){
      var retval = this.getSeconds();
      if (retval < 10) {
          return ("0" + retval.toString());
      } else {
          return retval.toString();
      }
    }
    var date = new Date();
    var dateFormat = (date.getMonth() + 1) + '.' + date.getDate() + '.' +  date.getFullYear() + '. '+date.getHoursCustom() + ':' + date.getMinutesCustom() + ':' + date.getSecondsTwoCustom();
    return dateFormat;
  },
clearIndividualValues: function(){
    event.target.author.value = '';
    event.target.title.value = '';
    event.target.date.value = '';
    event.target.period_style.value = '';
    event.target.collection_owner.value = '';
    event.target.museum_gallery.value = '';
    event.target.painting_technique.value = '';
    event.target.stretcher.value = '';
    event.target.support.value = '';
    event.target.priming.value = '';
    event.target.paint_layer.value = '';
    event.target.varnish.value = '';
    event.target.img_front.value ='',
    event.target.img_back.value =''
  },
  insertData: function(){
// clear all placeholders before input
//    $('form').submit(function() {
//            $(this).find('.individual-value').each(function() {
//                $(this).val('');
//            });
//    });

////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#aas').is(':checked')){

      var aasDetails = false;
      
    } else {

      var aasDetails = {
          experimentalParameters:document.getElementById("object_aasExperimental").value,
          elements:document.getElementById("object_aasElements").value,
          formulae:document.getElementById("object_aasFormulae").value,
          pigmentsDyes:document.getElementById("object_aasPigmentsDyes").value,
          priming:document.getElementById("object_aasPriming").value,
          bindingMedia:document.getElementById("object_aasBindingMedia").value,
          varnish:document.getElementById("object_aasVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_aasStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_aasBrief").value,
            comments:document.getElementById("object_aasComments").value,
            sources:document.getElementById("object_aasSources").value,
            caption:document.getElementById("object_aasCaption").value,
          },
          files:{
            aasFiles1:document.getElementById("aasFiles1").value,
            aasFiles1_id:document.getElementById("aasFiles1_id").value,
            aasFiles2:document.getElementById("aasFiles2").value,
            aasFiles2_id:document.getElementById("aasFiles2_id").value,
            aasFiles3:document.getElementById("aasFiles3").value,
            aasFiles3_id:document.getElementById("aasFiles3_id").value,
            aasFiles4:document.getElementById("aasFiles4").value,
            aasFiles4_id:document.getElementById("aasFiles4_id").value,
            aasFiles5:document.getElementById("aasFiles5").value,
            aasFiles5_id:document.getElementById("aasFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////    
  if(!$('#aes').is(':checked')){

      var aesDetails = false;
      
    } else {

      var aesDetails = {
          experimentalParameters:document.getElementById("object_aesExperimental").value,
          elements:document.getElementById("object_aesElements").value,
          formulae:document.getElementById("object_aesFormulae").value,
          pigmentsDyes:document.getElementById("object_aesPigmentsDyes").value,
          priming:document.getElementById("object_aesPriming").value,
          bindingMedia:document.getElementById("object_aesBindingMedia").value,
          varnish:document.getElementById("object_aesVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_aesStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("objectae_aesBrief").value,
            comments:document.getElementById("object_aesComments").value,
            sources:document.getElementById("object_aesSources").value,
            caption:document.getElementById("object_aesCaption").value,
          },
          files:{
            aesFiles1:document.getElementById("aesFiles1").value,
            aesFiles1_id:document.getElementById("aesFiles1_id").value,
            aesFiles2:document.getElementById("aesFiles2").value,
            aesFiles2_id:document.getElementById("aesFiles2_id").value,
            aesFiles3:document.getElementById("aesFiles3").value,
            aesFiles3_id:document.getElementById("aesFiles3_id").value,
            aesFiles4:document.getElementById("aesFiles4").value,
            aesFiles4_id:document.getElementById("aesFiles4_id").value,
            aesFiles5:document.getElementById("aesFiles5").value,
            aesFiles5_id:document.getElementById("aesFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////    
  if(!$('#afm').is(':checked')){

      var afmDetails = false;
      
    } else {

      var afmDetails = {
          experimentalParameters:document.getElementById("object_afmExperimental").value,
          elements:document.getElementById("object_afmElements").value,
          formulae:document.getElementById("object_afmFormulae").value,
          pigmentsDyes:document.getElementById("object_afmPigmentsDyes").value,
          priming:document.getElementById("object_afmPriming").value,
          bindingMedia:document.getElementById("object_afmBindingMedia").value,
          varnish:document.getElementById("object_afmVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_afmStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_afmBrief").value,
            comments:document.getElementById("object_afmComments").value,
            sources:document.getElementById("object_afmSources").value,
            caption:document.getElementById("object_afmCaption").value,
          },
          files:{
            afmFiles1:document.getElementById("afmFiles1").value,
            afmFiles1_id:document.getElementById("afmFiles1_id").value,
            afmFiles2:document.getElementById("afmFiles2").value,
            afmFiles2_id:document.getElementById("afmFiles2_id").value,
            afmFiles3:document.getElementById("afmFiles3").value,
            afmFiles3_id:document.getElementById("afmFiles3_id").value,
            afmFiles4:document.getElementById("afmFiles4").value,
            afmFiles4_id:document.getElementById("afmFiles4_id").value,
            afmFiles5:document.getElementById("afmFiles5").value,
            afmFiles5_id:document.getElementById("afmFiles5_id").value,
          }
      }
    }////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#analysis').is(':checked')){

      var analysisDetails = false;
      
    } else {

      var analysisDetails = {
          experimentalParameters:document.getElementById("object_analysisExperimental").value,
          elements:document.getElementById("object_analysisElements").value,
          formulae:document.getElementById("object_analysisFormulae").value,
          pigmentsDyes:document.getElementById("object_analysisPigmentsDyes").value,
          priming:document.getElementById("object_analysisPriming").value,
          bindingMedia:document.getElementById("object_analysisBindingMedia").value,
          varnish:document.getElementById("object_analysisVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_analysisStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_analysisBrief").value,
            comments:document.getElementById("object_analysisComments").value,
            sources:document.getElementById("object_analysisSources").value,
            caption:document.getElementById("object_analysisCaption").value,
          },
          files:{
            analysisFiles1:document.getElementById("analysisFiles1").value,
            analysisFiles1_id:document.getElementById("analysisFiles1_id").value,
            analysisFiles2:document.getElementById("analysisFiles2").value,
            analysisFiles2_id:document.getElementById("analysisFiles2_id").value,
            analysisFiles3:document.getElementById("analysisFiles3").value,
            analysisFiles3_id:document.getElementById("analysisFiles3_id").value,
            analysisFiles4:document.getElementById("analysisFiles4").value,
            analysisFiles4_id:document.getElementById("analysisFiles4_id").value,
            analysisFiles5:document.getElementById("analysisFiles5").value,
            analysisFiles5_id:document.getElementById("analysisFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#binderFiller').is(':checked')){

      var binderFillerDetails = false;
      
    } else {

      var binderFillerDetails = {
          experimentalParameters:document.getElementById("object_binderFillerExperimental").value,
          elements:document.getElementById("object_binderFillerElements").value,
          formulae:document.getElementById("object_binderFillerFormulae").value,
          pigmentsDyes:document.getElementById("object_binderFillerPigmentsDyes").value,
          priming:document.getElementById("object_binderFillerPriming").value,
          bindingMedia:document.getElementById("object_binderFillerBindingMedia").value,
          varnish:document.getElementById("object_binderFillerVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_binderFillerStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_binderFillerBrief").value,
            comments:document.getElementById("object_binderFillerComments").value,
            sources:document.getElementById("object_binderFillerSources").value,
            caption:document.getElementById("object_binderFillerCaption").value,
          },
          files:{
            binderFillerFiles1:document.getElementById("binderFillerFiles1").value,
            binderFillerFiles1_id:document.getElementById("binderFillerFiles1_id").value,
            binderFillerFiles2:document.getElementById("binderFillerFiles2").value,
            binderFillerFiles2_id:document.getElementById("binderFillerFiles2_id").value,
            binderFillerFiles3:document.getElementById("binderFillerFiles3").value,
            binderFillerFiles3_id:document.getElementById("binderFillerFiles3_id").value,
            binderFillerFiles4:document.getElementById("binderFillerFiles4").value,
            binderFillerFiles4_id:document.getElementById("binderFillerFiles4_id").value,
            binderFillerFiles5:document.getElementById("binderFillerFiles5").value,
            binderFillerFiles5_id:document.getElementById("binderFillerFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#c_14').is(':checked')){

      var c_14Details = false;
      
    } else {

      var c_14Details = {
          experimentalParameters:document.getElementById("object_c_14Experimental").value,
          elements:document.getElementById("object_c_14Elements").value,
          formulae:document.getElementById("object_c_14Formulae").value,
          pigmentsDyes:document.getElementById("object_c_14PigmentsDyes").value,
          priming:document.getElementById("object_c_14Priming").value,
          bindingMedia:document.getElementById("object_c_14BindingMedia").value,
          varnish:document.getElementById("object_c_14Varnish").value,
          stretcherSupportStrainer:document.getElementById("object_c_14StretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_c_14Brief").value,
            comments:document.getElementById("object_c_14Comments").value,
            sources:document.getElementById("object_c_14Sources").value,
            caption:document.getElementById("object_c_14Caption").value,
          },
          files:{
            c_14Files1:document.getElementById("c_14Files1").value,
            c_14Files1_id:document.getElementById("c_14Files1_id").value,
            c_14Files2:document.getElementById("c_14Files2").value,
            c_14Files2_id:document.getElementById("c_14Files2_id").value,
            c_14Files3:document.getElementById("c_14Files3").value,
            c_14Files3_id:document.getElementById("c_14Files3_id").value,
            c_14Files4:document.getElementById("c_14Files4").value,
            c_14Files4_id:document.getElementById("c_14Files4_id").value,
            c_14Files5:document.getElementById("c_14Files5").value,
            c_14Files5_id:document.getElementById("c_14Files5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#drms').is(':checked')){

      var drmsDetails = false;
      
    } else {

      var drmsDetails = {
          experimentalParameters:document.getElementById("object_drmsExperimental").value,
          elements:document.getElementById("object_drmsElements").value,
          formulae:document.getElementById("object_drmsFormulae").value,
          pigmentsDyes:document.getElementById("object_drmsPigmentsDyes").value,
          priming:document.getElementById("object_drmsPriming").value,
          bindingMedia:document.getElementById("object_drmsBindingMedia").value,
          varnish:document.getElementById("object_drmsVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_drmsStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_drmsBrief").value,
            comments:document.getElementById("object_drmsComments").value,
            sources:document.getElementById("object_drmsSources").value,
            caption:document.getElementById("object_drmsCaption").value,
          },
          files:{
            drmsFiles1:document.getElementById("drmsFiles1").value,
            drmsFiles1_id:document.getElementById("drmsFiles1_id").value,
            drmsFiles2:document.getElementById("drmsFiles2").value,
            drmsFiles2_id:document.getElementById("drmsFiles2_id").value,
            drmsFiles3:document.getElementById("drmsFiles3").value,
            drmsFiles3_id:document.getElementById("drmsFiles3_id").value,
            drmsFiles4:document.getElementById("drmsFiles4").value,
            drmsFiles4_id:document.getElementById("drmsFiles4_id").value,
            drmsFiles5:document.getElementById("drmsFiles5").value,
            drmsFiles5_id:document.getElementById("drmsFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#fors').is(':checked')){

      var forsDetails = false;
      
    } else {

      var forsDetails = {
          experimentalParameters:document.getElementById("object_forsExperimental").value,
          elements:document.getElementById("object_forsElements").value,
          formulae:document.getElementById("object_forsFormulae").value,
          pigmentsDyes:document.getElementById("object_forsPigmentsDyes").value,
          priming:document.getElementById("object_forsPriming").value,
          bindingMedia:document.getElementById("object_forsBindingMedia").value,
          varnish:document.getElementById("object_forsVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_forsStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_forsBrief").value,
            comments:document.getElementById("object_forsComments").value,
            sources:document.getElementById("object_forsSources").value,
            caption:document.getElementById("object_forsCaption").value,
          },
          files:{
            forsFiles1:document.getElementById("forsFiles1").value,
            forsFiles1_id:document.getElementById("forsFiles1_id").value,
            forsFiles2:document.getElementById("forsFiles2").value,
            forsFiles2_id:document.getElementById("forsFiles2_id").value,
            forsFiles3:document.getElementById("forsFiles3").value,
            forsFiles3_id:document.getElementById("forsFiles3_id").value,
            forsFiles4:document.getElementById("forsFiles4").value,
            forsFiles4_id:document.getElementById("forsFiles4_id").value,
            forsFiles5:document.getElementById("forsFiles5").value,
            forsFiles5_id:document.getElementById("forsFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#fr_ir').is(':checked')){

      var fr_irDetails = false;
      
    } else {

      var fr_irDetails = {
          experimentalParameters:document.getElementById("object_fr_irExperimental").value,
          elements:document.getElementById("object_fr_irElements").value,
          formulae:document.getElementById("object_fr_irFormulae").value,
          pigmentsDyes:document.getElementById("object_fr_irPigmentsDyes").value,
          priming:document.getElementById("object_fr_irPriming").value,
          bindingMedia:document.getElementById("object_fr_irBindingMedia").value,
          varnish:document.getElementById("object_fr_irVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_fr_irStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_fr_irBrief").value,
            comments:document.getElementById("object_fr_irComments").value,
            sources:document.getElementById("object_fr_irSources").value,
            caption:document.getElementById("object_fr_irCaption").value,
          },
          files:{
            fr_irFiles1:document.getElementById("fr_irFiles1").value,
            fr_irFiles1_id:document.getElementById("fr_irFiles1_id").value,
            fr_irFiles2:document.getElementById("fr_irFiles2").value,
            fr_irFiles2_id:document.getElementById("fr_irFiles2_id").value,
            fr_irFiles3:document.getElementById("fr_irFiles3").value,
            fr_irFiles3_id:document.getElementById("fr_irFiles3_id").value,
            fr_irFiles4:document.getElementById("fr_irFiles4").value,
            fr_irFiles4_id:document.getElementById("fr_irFiles4_id").value,
            fr_irFiles5:document.getElementById("fr_irFiles5").value,
            fr_irFiles5_id:document.getElementById("fr_irFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#gc_ms').is(':checked')){

      var gc_msDetails = false;
      
    } else {

      var gc_msDetails = {
          experimentalParameters:document.getElementById("object_gc_msExperimental").value,
          elements:document.getElementById("object_gc_msElements").value,
          formulae:document.getElementById("object_gc_msFormulae").value,
          pigmentsDyes:document.getElementById("object_gc_msPigmentsDyes").value,
          priming:document.getElementById("object_gc_msPriming").value,
          bindingMedia:document.getElementById("object_gc_msBindingMedia").value,
          varnish:document.getElementById("object_gc_msVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_gc_msStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_gc_msBrief").value,
            comments:document.getElementById("object_gc_msComments").value,
            sources:document.getElementById("object_gc_msSources").value,
            caption:document.getElementById("object_gc_msCaption").value,
          },
          files:{
            gc_msFiles1:document.getElementById("gc_msFiles1").value,
            gc_msFiles1_id:document.getElementById("gc_msFiles1_id").value,
            gc_msFiles2:document.getElementById("gc_msFiles2").value,
            gc_msFiles2_id:document.getElementById("gc_msFiles2_id").value,
            gc_msFiles3:document.getElementById("gc_msFiles3").value,
            gc_msFiles3_id:document.getElementById("gc_msFiles3_id").value,
            gc_msFiles4:document.getElementById("gc_msFiles4").value,
            gc_msFiles4_id:document.getElementById("gc_msFiles4_id").value,
            gc_msFiles5:document.getElementById("gc_msFiles5").value,
            gc_msFiles5_id:document.getElementById("gc_msFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#gl').is(':checked')){

      var glDetails = false;
      
    } else {

      var glDetails = {
          experimentalParameters:document.getElementById("object_glExperimental").value,
          elements:document.getElementById("object_glElements").value,
          formulae:document.getElementById("object_glFormulae").value,
          pigmentsDyes:document.getElementById("object_glPigmentsDyes").value,
          priming:document.getElementById("object_glPriming").value,
          bindingMedia:document.getElementById("object_glBindingMedia").value,
          varnish:document.getElementById("object_glVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_glStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_glBrief").value,
            comments:document.getElementById("object_glComments").value,
            sources:document.getElementById("object_glSources").value,
            caption:document.getElementById("object_glCaption").value,
          },
          files:{
            glFiles1:document.getElementById("glFiles1").value,
            glFiles1_id:document.getElementById("glFiles1_id").value,
            glFiles2:document.getElementById("glFiles2").value,
            glFiles2_id:document.getElementById("glFiles2_id").value,
            glFiles3:document.getElementById("glFiles3").value,
            glFiles3_id:document.getElementById("glFiles3_id").value,
            glFiles4:document.getElementById("glFiles4").value,
            glFiles4_id:document.getElementById("glFiles4_id").value,
            glFiles5:document.getElementById("glFiles5").value,
            glFiles5_id:document.getElementById("glFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#granulometry').is(':checked')){

      var granulometryDetails = false;
      
    } else {

      var granulometryDetails = {
          experimentalParameters:document.getElementById("object_granulometryExperimental").value,
          elements:document.getElementById("object_granulometryElements").value,
          formulae:document.getElementById("object_granulometryFormulae").value,
          pigmentsDyes:document.getElementById("object_granulometryPigmentsDyes").value,
          priming:document.getElementById("object_granulometryPriming").value,
          bindingMedia:document.getElementById("object_granulometryBindingMedia").value,
          varnish:document.getElementById("object_granulometryVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_granulometryStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_granulometryBrief").value,
            comments:document.getElementById("object_granulometryComments").value,
            sources:document.getElementById("object_granulometrySources").value,
            caption:document.getElementById("object_granulometryCaption").value,
          },
          files:{
            granulometryFiles1:document.getElementById("granulometryFiles1").value,
            granulometryFiles1_id:document.getElementById("granulometryFiles1_id").value,
            granulometryFiles2:document.getElementById("granulometryFiles2").value,
            granulometryFiles2_id:document.getElementById("granulometryFiles2_id").value,
            granulometryFiles3:document.getElementById("granulometryFiles3").value,
            granulometryFiles3_id:document.getElementById("granulometryFiles3_id").value,
            granulometryFiles4:document.getElementById("granulometryFiles4").value,
            granulometryFiles4_id:document.getElementById("granulometryFiles4_id").value,
            granulometryFiles5:document.getElementById("granulometryFiles5").value,
            granulometryFiles5_id:document.getElementById("granulometryFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#hygroscopic').is(':checked')){

      var hygroscopicDetails = false;
      
    } else {

      var hygroscopicDetails = {
          experimentalParameters:document.getElementById("object_hygroscopicExperimental").value,
          elements:document.getElementById("object_hygroscopicElements").value,
          formulae:document.getElementById("object_hygroscopicFormulae").value,
          pigmentsDyes:document.getElementById("object_hygroscopicPigmentsDyes").value,
          priming:document.getElementById("object_hygroscopicPriming").value,
          bindingMedia:document.getElementById("object_hygroscopicBindingMedia").value,
          varnish:document.getElementById("object_hygroscopicVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_hygroscopicStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_hygroscopicBrief").value,
            comments:document.getElementById("object_hygroscopicComments").value,
            sources:document.getElementById("object_hygroscopicSources").value,
            caption:document.getElementById("object_hygroscopicCaption").value,
          },
          files:{
            hygroscopicFiles1:document.getElementById("hygroscopicFiles1").value,
            hygroscopicFiles1_id:document.getElementById("hygroscopicFiles1_id").value,
            hygroscopicFiles2:document.getElementById("hygroscopicFiles2").value,
            hygroscopicFiles2_id:document.getElementById("hygroscopicFiles2_id").value,
            hygroscopicFiles3:document.getElementById("hygroscopicFiles3").value,
            hygroscopicFiles3_id:document.getElementById("hygroscopicFiles3_id").value,
            hygroscopicFiles4:document.getElementById("hygroscopicFiles4").value,
            hygroscopicFiles4_id:document.getElementById("hygroscopicFiles4_id").value,
            hygroscopicFiles5:document.getElementById("hygroscopicFiles5").value,
            hygroscopicFiles5_id:document.getElementById("hygroscopicFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#irpIrrIrfc').is(':checked')){

      var irpIrrIrfcDetails = false;
      
    } else {

      var irpIrrIrfcDetails = {
          experimentalParameters:document.getElementById("object_irpIrrIrfcExperimental").value,
          elements:document.getElementById("object_irpIrrIrfcElements").value,
          formulae:document.getElementById("object_irpIrrIrfcFormulae").value,
          pigmentsDyes:document.getElementById("object_irpIrrIrfcPigmentsDyes").value,
          priming:document.getElementById("object_irpIrrIrfcPriming").value,
          bindingMedia:document.getElementById("object_irpIrrIrfcBindingMedia").value,
          varnish:document.getElementById("object_irpIrrIrfcVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_irpIrrIrfcStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_irpIrrIrfcBrief").value,
            comments:document.getElementById("object_irpIrrIrfcComments").value,
            sources:document.getElementById("object_irpIrrIrfcSources").value,
            caption:document.getElementById("object_irpIrrIrfcCaption").value,
          },
          files:{
            irpIrrIrfcFiles1:document.getElementById("irpIrrIrfcFiles1").value,
            irpIrrIrfcFiles1_id:document.getElementById("irpIrrIrfcFiles1_id").value,
            irpIrrIrfcFiles2:document.getElementById("irpIrrIrfcFiles2").value,
            irpIrrIrfcFiles2_id:document.getElementById("irpIrrIrfcFiles2_id").value,
            irpIrrIrfcFiles3:document.getElementById("irpIrrIrfcFiles3").value,
            irpIrrIrfcFiles3_id:document.getElementById("irpIrrIrfcFiles3_id").value,
            irpIrrIrfcFiles4:document.getElementById("irpIrrIrfcFiles4").value,
            irpIrrIrfcFiles4_id:document.getElementById("irpIrrIrfcFiles4_id").value,
            irpIrrIrfcFiles5:document.getElementById("irpIrrIrfcFiles5").value,
            irpIrrIrfcFiles5_id:document.getElementById("irpIrrIrfcFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#libs').is(':checked')){

      var libsDetails = false;
      
    } else {

      var libsDetails = {
          experimentalParameters:document.getElementById("object_libsExperimental").value,
          elements:document.getElementById("object_libsElements").value,
          formulae:document.getElementById("object_libsFormulae").value,
          pigmentsDyes:document.getElementById("object_libsPigmentsDyes").value,
          priming:document.getElementById("object_libsPriming").value,
          bindingMedia:document.getElementById("object_libsBindingMedia").value,
          varnish:document.getElementById("object_libsVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_libsStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_libsBrief").value,
            comments:document.getElementById("object_libsComments").value,
            sources:document.getElementById("object_libsSources").value,
            caption:document.getElementById("object_libsCaption").value,
          },
          files:{
            libsFiles1:document.getElementById("libsFiles1").value,
            libsFiles1_id:document.getElementById("libsFiles1_id").value,
            libsFiles2:document.getElementById("libsFiles2").value,
            libsFiles2_id:document.getElementById("libsFiles2_id").value,
            libsFiles3:document.getElementById("libsFiles3").value,
            libsFiles3_id:document.getElementById("libsFiles3_id").value,
            libsFiles4:document.getElementById("libsFiles4").value,
            libsFiles4_id:document.getElementById("libsFiles4_id").value,
            libsFiles5:document.getElementById("libsFiles5").value,
            libsFiles5_id:document.getElementById("libsFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#om').is(':checked')){

      var omDetails = false;
      
    } else {

      var omDetails = {
          experimentalParameters:document.getElementById("object_omExperimental").value,
          elements:document.getElementById("object_omElements").value,
          formulae:document.getElementById("object_omFormulae").value,
          pigmentsDyes:document.getElementById("object_omPigmentsDyes").value,
          priming:document.getElementById("object_omPriming").value,
          bindingMedia:document.getElementById("object_omBindingMedia").value,
          varnish:document.getElementById("object_omVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_omStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_omBrief").value,
            comments:document.getElementById("object_omComments").value,
            sources:document.getElementById("object_omSources").value,
            caption:document.getElementById("object_omCaption").value,
          },
          files:{
            omFiles1:document.getElementById("omFiles1").value,
            omFiles1_id:document.getElementById("omFiles1_id").value,
            omFiles2:document.getElementById("omFiles2").value,
            omFiles2_id:document.getElementById("omFiles2_id").value,
            omFiles3:document.getElementById("omFiles3").value,
            omFiles3_id:document.getElementById("omFiles3_id").value,
            omFiles4:document.getElementById("omFiles4").value,
            omFiles4_id:document.getElementById("omFiles4_id").value,
            omFiles5:document.getElementById("omFiles5").value,
            omFiles5_id:document.getElementById("omFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#pige').is(':checked')){

      var pigeDetails = false;
      
    } else {

      var pigeDetails = {
          experimentalParameters:document.getElementById("object_pigeExperimental").value,
          elements:document.getElementById("object_pigeElements").value,
          formulae:document.getElementById("object_pigeFormulae").value,
          pigmentsDyes:document.getElementById("object_pigePigmentsDyes").value,
          priming:document.getElementById("object_pigePriming").value,
          bindingMedia:document.getElementById("object_pigeBindingMedia").value,
          varnish:document.getElementById("object_pigeVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_pigeStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_pigeBrief").value,
            comments:document.getElementById("object_pigeComments").value,
            sources:document.getElementById("object_pigeSources").value,
            caption:document.getElementById("object_pigeCaption").value,
          },
          files:{
            pigeFiles1:document.getElementById("pigeFiles1").value,
            pigeFiles1_id:document.getElementById("pigeFiles1_id").value,
            pigeFiles2:document.getElementById("pigeFiles2").value,
            pigeFiles2_id:document.getElementById("pigeFiles2_id").value,
            pigeFiles3:document.getElementById("pigeFiles3").value,
            pigeFiles3_id:document.getElementById("pigeFiles3_id").value,
            pigeFiles4:document.getElementById("pigeFiles4").value,
            pigeFiles4_id:document.getElementById("pigeFiles4_id").value,
            pigeFiles5:document.getElementById("pigeFiles5").value,
            pigeFiles5_id:document.getElementById("pigeFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#pixe').is(':checked')){

      var pixeDetails = false;
      
    } else {

      var pixeDetails = {
          experimentalParameters:document.getElementById("object_pixeExperimental").value,
          elements:document.getElementById("object_pixeElements").value,
          formulae:document.getElementById("object_pixeFormulae").value,
          pigmentsDyes:document.getElementById("object_pixePigmentsDyes").value,
          priming:document.getElementById("object_pixePriming").value,
          bindingMedia:document.getElementById("object_pixeBindingMedia").value,
          varnish:document.getElementById("object_pixeVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_pixeStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_pixeBrief").value,
            comments:document.getElementById("object_pixeComments").value,
            sources:document.getElementById("object_pixeSources").value,
            caption:document.getElementById("object_pixeCaption").value,
          },
          files:{
            pixeFiles1:document.getElementById("pixeFiles1").value,
            pixeFiles1_id:document.getElementById("pixeFiles1_id").value,
            pixeFiles2:document.getElementById("pixeFiles2").value,
            pixeFiles2_id:document.getElementById("pixeFiles2_id").value,
            pixeFiles3:document.getElementById("pixeFiles3").value,
            pixeFiles3_id:document.getElementById("pixeFiles3_id").value,
            pixeFiles4:document.getElementById("pixeFiles4").value,
            pixeFiles4_id:document.getElementById("pixeFiles4_id").value,
            pixeFiles5:document.getElementById("pixeFiles5").value,
            pixeFiles5_id:document.getElementById("pixeFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#rbs').is(':checked')){

      var rbsDetails = false;
      
    } else {

      var rbsDetails = {
          experimentalParameters:document.getElementById("object_rbsExperimental").value,
          elements:document.getElementById("object_rbsElements").value,
          formulae:document.getElementById("object_rbsFormulae").value,
          pigmentsDyes:document.getElementById("object_rbsPigmentsDyes").value,
          priming:document.getElementById("object_rbsPriming").value,
          bindingMedia:document.getElementById("object_rbsBindingMedia").value,
          varnish:document.getElementById("object_rbsVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_rbsStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_rbsBrief").value,
            comments:document.getElementById("object_rbsComments").value,
            sources:document.getElementById("object_rbsSources").value,
            caption:document.getElementById("object_rbsCaption").value,
          },
          files:{
            rbsFiles1:document.getElementById("rbsFiles1").value,
            rbsFiles1_id:document.getElementById("rbsFiles1_id").value,
            rbsFiles2:document.getElementById("rbsFiles2").value,
            rbsFiles2_id:document.getElementById("rbsFiles2_id").value,
            rbsFiles3:document.getElementById("rbsFiles3").value,
            rbsFiles3_id:document.getElementById("rbsFiles3_id").value,
            rbsFiles4:document.getElementById("rbsFiles4").value,
            rbsFiles4_id:document.getElementById("rbsFiles4_id").value,
            rbsFiles5:document.getElementById("rbsFiles5").value,
            rbsFiles5_id:document.getElementById("rbsFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#rs').is(':checked')){

      var rsDetails = false;
      
    } else {

      var rsDetails = {
          experimentalParameters:document.getElementById("object_rsExperimental").value,
          elements:document.getElementById("object_rsElements").value,
          formulae:document.getElementById("object_rsFormulae").value,
          pigmentsDyes:document.getElementById("object_rsPigmentsDyes").value,
          priming:document.getElementById("object_rsPriming").value,
          bindingMedia:document.getElementById("object_rsBindingMedia").value,
          varnish:document.getElementById("object_rsVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_rsStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_rsBrief").value,
            comments:document.getElementById("object_rsComments").value,
            sources:document.getElementById("object_rsSources").value,
            caption:document.getElementById("object_rsCaption").value,
          },
          files:{
            rsFiles1:document.getElementById("rsFiles1").value,
            rsFiles1_id:document.getElementById("rsFiles1_id").value,
            rsFiles2:document.getElementById("rsFiles2").value,
            rsFiles2_id:document.getElementById("rsFiles2_id").value,
            rsFiles3:document.getElementById("rsFiles3").value,
            rsFiles3_id:document.getElementById("rsFiles3_id").value,
            rsFiles4:document.getElementById("rsFiles4").value,
            rsFiles4_id:document.getElementById("rsFiles4_id").value,
            rsFiles5:document.getElementById("rsFiles5").value,
            rsFiles5_id:document.getElementById("rsFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#rtg').is(':checked')){

      var rtgDetails = false;
      
    } else {

      var rtgDetails = {
          experimentalParameters:document.getElementById("object_rtgExperimental").value,
          elements:document.getElementById("object_rtgElements").value,
          formulae:document.getElementById("object_rtgFormulae").value,
          pigmentsDyes:document.getElementById("object_rtgPigmentsDyes").value,
          priming:document.getElementById("object_rtgPriming").value,
          bindingMedia:document.getElementById("object_rtgBindingMedia").value,
          varnish:document.getElementById("object_rtgVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_rtgStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_rtgBrief").value,
            comments:document.getElementById("object_rtgComments").value,
            sources:document.getElementById("object_rtgSources").value,
            caption:document.getElementById("object_rtgCaption").value,
          },
          files:{
            rtgFiles1:document.getElementById("rtgFiles1").value,
            rtgFiles1_id:document.getElementById("rtgFiles1_id").value,
            rtgFiles2:document.getElementById("rtgFiles2").value,
            rtgFiles2_id:document.getElementById("rtgFiles2_id").value,
            rtgFiles3:document.getElementById("rtgFiles3").value,
            rtgFiles3_id:document.getElementById("rtgFiles3_id").value,
            rtgFiles4:document.getElementById("rtgFiles4").value,
            rtgFiles4_id:document.getElementById("rtgFiles4_id").value,
            rtgFiles5:document.getElementById("rtgFiles5").value,
            rtgFiles5_id:document.getElementById("rtgFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#scanning').is(':checked')){

      var scanningDetails = false;
      
    } else {

      var scanningDetails = {
          experimentalParameters:document.getElementById("object_scanningExperimental").value,
          elements:document.getElementById("object_scanningElements").value,
          formulae:document.getElementById("object_scanningFormulae").value,
          pigmentsDyes:document.getElementById("object_scanningPigmentsDyes").value,
          priming:document.getElementById("object_scanningPriming").value,
          bindingMedia:document.getElementById("object_scanningBindingMedia").value,
          varnish:document.getElementById("object_scanningVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_scanningStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_scanningBrief").value,
            comments:document.getElementById("object_scanningComments").value,
            sources:document.getElementById("object_scanningSources").value,
            caption:document.getElementById("object_scanningCaption").value,
          },
          files:{
            scanningFiles1:document.getElementById("scanningFiles1").value,
            scanningFiles1_id:document.getElementById("scanningFiles1_id").value,
            scanningFiles2:document.getElementById("scanningFiles2").value,
            scanningFiles2_id:document.getElementById("scanningFiles2_id").value,
            scanningFiles3:document.getElementById("scanningFiles3").value,
            scanningFiles3_id:document.getElementById("scanningFiles3_id").value,
            scanningFiles4:document.getElementById("scanningFiles4").value,
            scanningFiles4_id:document.getElementById("scanningFiles4_id").value,
            scanningFiles5:document.getElementById("scanningFiles5").value,
            scanningFiles5_id:document.getElementById("scanningFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#semSemEdx').is(':checked')){

      var semSemEdxDetails = false;
      
    } else {

      var semSemEdxDetails = {
          experimentalParameters:document.getElementById("object_semSemEdxExperimental").value,
          elements:document.getElementById("object_semSemEdxElements").value,
          formulae:document.getElementById("object_semSemEdxFormulae").value,
          pigmentsDyes:document.getElementById("object_semSemEdxPigmentsDyes").value,
          priming:document.getElementById("object_semSemEdxPriming").value,
          bindingMedia:document.getElementById("object_semSemEdxBindingMedia").value,
          varnish:document.getElementById("object_semSemEdxVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_semSemEdxStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_semSemEdxBrief").value,
            comments:document.getElementById("object_semSemEdxComments").value,
            sources:document.getElementById("object_semSemEdxSources").value,
            caption:document.getElementById("object_semSemEdxCaption").value,
          },
          files:{
            semSemEdxFiles1:document.getElementById("semSemEdxFiles1").value,
            semSemEdxFiles1_id:document.getElementById("semSemEdxFiles1_id").value,
            semSemEdxFiles2:document.getElementById("semSemEdxFiles2").value,
            semSemEdxFiles2_id:document.getElementById("semSemEdxFiles2_id").value,
            semSemEdxFiles3:document.getElementById("semSemEdxFiles3").value,
            semSemEdxFiles3_id:document.getElementById("semSemEdxFiles3_id").value,
            semSemEdxFiles4:document.getElementById("semSemEdxFiles4").value,
            semSemEdxFiles4_id:document.getElementById("semSemEdxFiles4_id").value,
            semSemEdxFiles5:document.getElementById("semSemEdxFiles5").value,
            semSemEdxFiles5_id:document.getElementById("semSemEdxFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#tem').is(':checked')){

      var temDetails = false;
      
    } else {

      var temDetails = {
          experimentalParameters:document.getElementById("object_temExperimental").value,
          elements:document.getElementById("object_temElements").value,
          formulae:document.getElementById("object_temFormulae").value,
          pigmentsDyes:document.getElementById("object_temPigmentsDyes").value,
          priming:document.getElementById("object_temPriming").value,
          bindingMedia:document.getElementById("object_temBindingMedia").value,
          varnish:document.getElementById("object_temVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_temStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_temBrief").value,
            comments:document.getElementById("object_temComments").value,
            sources:document.getElementById("object_temSources").value,
            caption:document.getElementById("object_temCaption").value,
          },
          files:{
            temFiles1:document.getElementById("temFiles1").value,
            temFiles1_id:document.getElementById("temFiles1_id").value,
            temFiles2:document.getElementById("temFiles2").value,
            temFiles2_id:document.getElementById("temFiles2_id").value,
            temFiles3:document.getElementById("temFiles3").value,
            temFiles3_id:document.getElementById("temFiles3_id").value,
            temFiles4:document.getElementById("temFiles4").value,
            temFiles4_id:document.getElementById("temFiles4_id").value,
            temFiles5:document.getElementById("temFiles5").value,
            temFiles5_id:document.getElementById("temFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#tl').is(':checked')){

      var tlDetails = false;
      
    } else {

      var tlDetails = {
          experimentalParameters:document.getElementById("object_tlExperimental").value,
          elements:document.getElementById("object_tlElements").value,
          formulae:document.getElementById("object_tlFormulae").value,
          pigmentsDyes:document.getElementById("object_tlPigmentsDyes").value,
          priming:document.getElementById("object_tlPriming").value,
          bindingMedia:document.getElementById("object_tlBindingMedia").value,
          varnish:document.getElementById("object_tlVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_tlStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_tlBrief").value,
            comments:document.getElementById("object_tlComments").value,
            sources:document.getElementById("object_tlSources").value,
            caption:document.getElementById("object_tlCaption").value,
          },
          files:{
            tlFiles1:document.getElementById("tlFiles1").value,
            tlFiles1_id:document.getElementById("tlFiles1_id").value,
            tlFiles2:document.getElementById("tlFiles2").value,
            tlFiles2_id:document.getElementById("tlFiles2_id").value,
            tlFiles3:document.getElementById("tlFiles3").value,
            tlFiles3_id:document.getElementById("tlFiles3_id").value,
            tlFiles4:document.getElementById("tlFiles4").value,
            tlFiles4_id:document.getElementById("tlFiles4_id").value,
            tlFiles5:document.getElementById("tlFiles5").value,
            tlFiles5_id:document.getElementById("tlFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#tlc').is(':checked')){

      var tlcDetails = false;
      
    } else {

      var tlcDetails = {
          experimentalParameters:document.getElementById("object_tlcExperimental").value,
          elements:document.getElementById("object_tlcElements").value,
          formulae:document.getElementById("object_tlcFormulae").value,
          pigmentsDyes:document.getElementById("object_tlcPigmentsDyes").value,
          priming:document.getElementById("object_tlcPriming").value,
          bindingMedia:document.getElementById("object_tlcBindingMedia").value,
          varnish:document.getElementById("object_tlcVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_tlcStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_tlcBrief").value,
            comments:document.getElementById("object_tlcComments").value,
            sources:document.getElementById("object_tlcSources").value,
            caption:document.getElementById("object_tlcCaption").value,
          },
          files:{
            tlcFiles1:document.getElementById("tlcFiles1").value,
            tlcFiles1_id:document.getElementById("tlcFiles1_id").value,
            tlcFiles2:document.getElementById("tlcFiles2").value,
            tlcFiles2_id:document.getElementById("tlcFiles2_id").value,
            tlcFiles3:document.getElementById("tlcFiles3").value,
            tlcFiles3_id:document.getElementById("tlcFiles3_id").value,
            tlcFiles4:document.getElementById("tlcFiles4").value,
            tlcFiles4_id:document.getElementById("tlcFiles4_id").value,
            tlcFiles5:document.getElementById("tlcFiles5").value,
            tlcFiles5_id:document.getElementById("tlcFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#uv_vis').is(':checked')){

      var uv_visDetails = false;
      
    } else {

      var uv_visDetails = {
          experimentalParameters:document.getElementById("object_uv_visExperimental").value,
          elements:document.getElementById("object_uv_visElements").value,
          formulae:document.getElementById("object_uv_visFormulae").value,
          pigmentsDyes:document.getElementById("object_uv_visPigmentsDyes").value,
          priming:document.getElementById("object_uv_visPriming").value,
          bindingMedia:document.getElementById("object_uv_visBindingMedia").value,
          varnish:document.getElementById("object_uv_visVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_uv_visStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_uv_visBrief").value,
            comments:document.getElementById("object_uv_visComments").value,
            sources:document.getElementById("object_uv_visSources").value,
            caption:document.getElementById("object_uv_visCaption").value,
          },
          files:{
            uv_visFiles1:document.getElementById("uv_visFiles1").value,
            uv_visFiles1_id:document.getElementById("uv_visFiles1_id").value,
            uv_visFiles2:document.getElementById("uv_visFiles2").value,
            uv_visFiles2_id:document.getElementById("uv_visFiles2_id").value,
            uv_visFiles3:document.getElementById("uv_visFiles3").value,
            uv_visFiles3_id:document.getElementById("uv_visFiles3_id").value,
            uv_visFiles4:document.getElementById("uv_visFiles4").value,
            uv_visFiles4_id:document.getElementById("uv_visFiles4_id").value,
            uv_visFiles5:document.getElementById("uv_visFiles5").value,
            uv_visFiles5_id:document.getElementById("uv_visFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#uvf').is(':checked')){

      var uvfDetails = false;
      
    } else {

      var uvfDetails = {
          experimentalParameters:document.getElementById("object_uvfExperimental").value,
          elements:document.getElementById("object_uvfElements").value,
          formulae:document.getElementById("object_uvfFormulae").value,
          pigmentsDyes:document.getElementById("object_uvfPigmentsDyes").value,
          priming:document.getElementById("object_uvfPriming").value,
          bindingMedia:document.getElementById("object_uvfBindingMedia").value,
          varnish:document.getElementById("object_uvfVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_uvfStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_uvfBrief").value,
            comments:document.getElementById("object_uvfComments").value,
            sources:document.getElementById("object_uvfSources").value,
            caption:document.getElementById("object_uvfCaption").value,
          },
          files:{
            uvfFiles1:document.getElementById("uvfFiles1").value,
            uvfFiles1_id:document.getElementById("uvfFiles1_id").value,
            uvfFiles2:document.getElementById("uvfFiles2").value,
            uvfFiles2_id:document.getElementById("uvfFiles2_id").value,
            uvfFiles3:document.getElementById("uvfFiles3").value,
            uvfFiles3_id:document.getElementById("uvfFiles3_id").value,
            uvfFiles4:document.getElementById("uvfFiles4").value,
            uvfFiles4_id:document.getElementById("uvfFiles4_id").value,
            uvfFiles5:document.getElementById("uvfFiles5").value,
            uvfFiles5_id:document.getElementById("uvfFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#vis').is(':checked')){

      var visDetails = false;
      
    } else {

      var visDetails = {
          experimentalParameters:document.getElementById("object_visExperimental").value,
          elements:document.getElementById("object_visElements").value,
          formulae:document.getElementById("object_visFormulae").value,
          pigmentsDyes:document.getElementById("object_visPigmentsDyes").value,
          priming:document.getElementById("object_visPriming").value,
          bindingMedia:document.getElementById("object_visBindingMedia").value,
          varnish:document.getElementById("object_visVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_visStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_visBrief").value,
            comments:document.getElementById("object_visComments").value,
            sources:document.getElementById("object_visSources").value,
            caption:document.getElementById("object_visCaption").value,
          },
          files:{
            visFiles1:document.getElementById("visFiles1").value,
            visFiles1_id:document.getElementById("visFiles1_id").value,
            visFiles2:document.getElementById("visFiles2").value,
            visFiles2_id:document.getElementById("visFiles2_id").value,
            visFiles3:document.getElementById("visFiles3").value,
            visFiles3_id:document.getElementById("visFiles3_id").value,
            visFiles4:document.getElementById("visFiles4").value,
            visFiles4_id:document.getElementById("visFiles4_id").value,
            visFiles5:document.getElementById("visFiles5").value,
            visFiles5_id:document.getElementById("visFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#xrd').is(':checked')){

      var xrdDetails = false;
      
    } else {

      var xrdDetails = {
          experimentalParameters:document.getElementById("object_xrdExperimental").value,
          elements:document.getElementById("object_xrdElements").value,
          formulae:document.getElementById("object_xrdFormulae").value,
          pigmentsDyes:document.getElementById("object_xrdPigmentsDyes").value,
          priming:document.getElementById("object_xrdPriming").value,
          bindingMedia:document.getElementById("object_xrdBindingMedia").value,
          varnish:document.getElementById("object_xrdVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_xrdStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_xrdBrief").value,
            comments:document.getElementById("object_xrdComments").value,
            sources:document.getElementById("object_xrdSources").value,
            caption:document.getElementById("object_xrdCaption").value,
          },
          files:{
            xrdFiles1:document.getElementById("xrdFiles1").value,
            xrdFiles1_id:document.getElementById("xrdFiles1_id").value,
            xrdFiles2:document.getElementById("xrdFiles2").value,
            xrdFiles2_id:document.getElementById("xrdFiles2_id").value,
            xrdFiles3:document.getElementById("xrdFiles3").value,
            xrdFiles3_id:document.getElementById("xrdFiles3_id").value,
            xrdFiles4:document.getElementById("xrdFiles4").value,
            xrdFiles4_id:document.getElementById("xrdFiles4_id").value,
            xrdFiles5:document.getElementById("xrdFiles5").value,
            xrdFiles5_id:document.getElementById("xrdFiles5_id").value,
          }
      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    if(!$('#xrf').is(':checked')){

      var xrfDetails = false;
      
    } else {

      var xrfDetails = {
          experimentalParameters:document.getElementById("object_xrfExperimental").value,
          elements:document.getElementById("object_xrfElements").value,
          formulae:document.getElementById("object_xrfFormulae").value,
          pigmentsDyes:document.getElementById("object_xrfPigmentsDyes").value,
          priming:document.getElementById("object_xrfPriming").value,
          bindingMedia:document.getElementById("object_xrfBindingMedia").value,
          varnish:document.getElementById("object_xrfVarnish").value,
          stretcherSupportStrainer:document.getElementById("object_xrfStretcherSupportStrainer").value,
          notes:{
            brief:document.getElementById("object_xrfBrief").value,
            comments:document.getElementById("object_xrfComments").value,
            sources:document.getElementById("object_xrfSources").value,
            caption:document.getElementById("object_xrfCaption").value,
          },
          files:{
            xrfFiles1:document.getElementById("xrfFiles1").value,
            xrfFiles1_id:document.getElementById("xrfFiles1_id").value,
            xrfFiles2:document.getElementById("xrfFiles2").value,
            xrfFiles2_id:document.getElementById("xrfFiles2_id").value,
            xrfFiles3:document.getElementById("xrfFiles3").value,
            xrfFiles3_id:document.getElementById("xrfFiles3_id").value,
            xrfFiles4:document.getElementById("xrfFiles4").value,
            xrfFiles4_id:document.getElementById("xrfFiles4_id").value,
            xrfFiles5:document.getElementById("xrfFiles5").value,
            xrfFiles5_id:document.getElementById("xrfFiles5_id").value,
          }
      }
    }


    var itemType = $("input[name='type']:checked").val();
    alert(itemType);
    var itemDetails = {
    type:itemType,
    info:{
      userId:Meteor.user()._id,
      createdAt: Meteor.myFunctions.dateFormat(),
      addedBy:Meteor.user().profile.full_name,
      last_edit: Meteor.myFunctions.dateFormat(),
      editedBy:Meteor.user().profile.full_name,
      editorId:Meteor.user()._id,
      visible:"public",
    },
    data:{
      basic:{
        front:document.getElementById("img_front").value,
        front_id:document.getElementById("img_front_id").value,
        back:document.getElementById("img_back").value,
        back_id:document.getElementById("img_back_id").value,
        side:document.getElementById("img_side").value,
        side_id:document.getElementById("img_side_id").value,
        signature:document.getElementById("img_signature").value,
        signature_id:document.getElementById("img_signature_id").value,
        basic_files:document.getElementById("basic_files").value,
        basic_files_id:document.getElementById("basic_files_id").value,
      },
      original:{
        photoOne:document.getElementById("photoOne1").value,
        photoOne1_id:document.getElementById("photoOne1_id").value,
        photoTwo1:document.getElementById("photoTwo1").value,
        photoTwo1_id:document.getElementById("photoTwo1_id").value,
        photoThree1:document.getElementById("photoThree1").value,
        photoThree1_id:document.getElementById("photoThree1_id").value,
        photoFour1:document.getElementById("photoFour1").value,
        photoFour1_id:document.getElementById("photoFour1_id").value,
        files:document.getElementById("files1").value,
        files_id:document.getElementById("files1_id").value,
      },
      interventions:{
        photoOne2:document.getElementById("photoOne2").value,
        photoOne2_id:document.getElementById("photoOne2_id").value,
        photoTwo2:document.getElementById("photoTwo2").value,
        photoTwo2_id:document.getElementById("photoTwo2_id").value,
        photoThree2:document.getElementById("photoThree2").value,
        photoThree2_id:document.getElementById("photoThree2_id").value,
        photoFour2:document.getElementById("photoFour2").value,
        photoFour2_id:document.getElementById("photoFour2_id").value,
        files:document.getElementById("files2").value,
        files_id:document.getElementById("files2_id").value,
      },
      restoration:{
        photoOne3:document.getElementById("photoOne3").value,
        photoOne3_id:document.getElementById("photoOne3_id").value,
        photoTwo3:document.getElementById("photoTwo3").value,
        photoTwo3_id:document.getElementById("photoTwo3_id").value,
        photoThree3:document.getElementById("photoThree3").value,
        photoThree3_id:document.getElementById("photoThree3_id").value,
        photoFour3:document.getElementById("photoFour3").value,
        photoFour3_id:document.getElementById("photoFour3_id").value,
        files:document.getElementById("files3").value,
        files_id:document.getElementById("files3_id").value,
      },
    },
	  basic:{
		  author:document.getElementById("author").value,
		  title:document.getElementById("title").value,
		  date:document.getElementById("date").value,
		  technique:document.getElementById("technique").value,
		  dimensions_noFrame:document.getElementById("dimensions_noFrame").value,
		  dimensions_frame:document.getElementById("dimensions_frame").value,
		  originalOwner:document.getElementById("originalOwner").value,
		  currentOwner:document.getElementById("currentOwner").value,
		  originalLocation:document.getElementById("originalLocation").value,
		  currentLocation:document.getElementById("currentLocation").value,
      inventoryNumber:document.getElementById("inventoryNumber").value,
      authority:document.getElementById("authority").value,
      legalStatus:document.getElementById("legalStatus").value,
      investigated:document.getElementById("methodsTechniques").value,
      projectName:document.getElementById("projectName").value,
      summaryProjects:document.getElementById("summaryProjects").value,
      notes:{
        provenance:document.getElementById("provenanceBasic").value,
        comments:document.getElementById("commentsBasic").value
      },
	  },
    materials:{
      original:{
        primingGround:document.getElementById("primingGround1").value,
        pigmentsDyes:document.getElementById("pigmentsDyes1").value,
        bendingMedium:document.getElementById("bendingMedium1").value,
        additives:document.getElementById("additives1").value,
        layerVarnish:document.getElementById("layerVarnish1").value,
        underdrawingPentimento:document.getElementById("underdrawingPentimento1").value,
        leafs:document.getElementById("leafs1").value,
        leafsApplication:document.getElementById("leafsApplication1").value,
        periodStyle:document.getElementById("periodStyle1").value,
        stretcher:document.getElementById("stretcher1").value,
        supportStrainer:document.getElementById("supportStrainer1").value,
        support:document.getElementById("support1").value,
        thickness:document.getElementById("thickness1").value,
        piecesJoints:document.getElementById("piecesJoints1").value,
        texture:document.getElementById("texture1").value,
        color:document.getElementById("color1").value,
        manufacturer:document.getElementById("manufacturer1").value,
        wave:document.getElementById("wave1").value,
        constructionAids:document.getElementById("constructionAids1").value,
        decorativeApplications:document.getElementById("decorativeApplications1").value,
        potataGiornata:document.getElementById("potataGiornata1").value,
        relief:document.getElementById("relief1").value,
        samples:document.getElementById("samples1").value,
        plaster:{
          layers:document.getElementById("p_layers1").value,
          composition:document.getElementById("p_composition1").value,
          binderFiller:document.getElementById("p_binderFiller1").value,
        },
        density:{
          weft:document.getElementById("densityWeft1").value,
          warp:document.getElementById("densityWarp1").value,
        },
        thickness:{
          weft:document.getElementById("thicknessWeft1").value,
          warp:document.getElementById("thicknessWarp1").value,
        },
        decorativeFrame:{
          periodStyle:document.getElementById("df_periodStyle1").value,
          support:document.getElementById("df_support1").value,
          priming:document.getElementById("df_priming1").value,
          decorativeLayer:document.getElementById("df_decorativeLayer1").value,
        },
        notes:{
          sources:document.getElementById("sources1").value,
          comments:document.getElementById("comments1").value
        },
      },
      interventions:{
        primingGround:document.getElementById("primingGround2").value,
        pigmentsDyes:document.getElementById("pigmentsDyes2").value,
        bendingMedium:document.getElementById("bendingMedium2").value,
        additives:document.getElementById("additives2").value,
        layerVarnish:document.getElementById("layerVarnish2").value,
        leafs:document.getElementById("leafs2").value,
        leafsApplication:document.getElementById("leafsApplication2").value,
        periodStyle:document.getElementById("periodStyle2").value,
        interventions:document.getElementById("interventions2").value,
        piecesJoints:document.getElementById("piecesJoints2").value,
        texture:document.getElementById("texture2").value,
        color:document.getElementById("color2").value,
        manufacturer:document.getElementById("manufacturer2").value,
        wave:document.getElementById("wave2").value,
        constructionAids:document.getElementById("constructionAids2").value,
        decorativeApplications:document.getElementById("decorativeApplications2").value,
        potataGiornata:document.getElementById("potataGiornata2").value,
        relief:document.getElementById("relief2").value,
        samples:document.getElementById("samples2").value,
        plaster:{
          layers:document.getElementById("p_layers2").value,
          composition:document.getElementById("p_composition2").value,
          binderFiller:document.getElementById("p_binderFiller2").value,
        },
        density:{
          weft:document.getElementById("densityWeft2").value,
          warp:document.getElementById("densityWarp2").value,
        },
        thickness:{
          weft:document.getElementById("thicknessWeft2").value,
          warp:document.getElementById("thicknessWarp2").value,
        },
        decorativeFrame:{
          periodStyle:document.getElementById("df_periodStyle2").value,
          support:document.getElementById("df_support2").value,
          priming:document.getElementById("df_priming2").value,
          decorativeLayer:document.getElementById("df_decorativeLayer2").value,
          warnish:document.getElementById("df_warnish2").value,
        },
        notes:{
          sources:document.getElementById("sources2").value,
          comments:document.getElementById("comments2").value
        },
      },
      work:{
        executor:document.getElementById("executor").value,
        responsiblePerson:document.getElementById("responsiblePerson").value,
        investor:document.getElementById("investor").value,
        people:document.getElementById("people").value,
        chronologicalProcess:document.getElementById("chronologicalProcess").value,
        duration:document.getElementById("duration").value,
        notes:{
          comments:document.getElementById("comments3").value
        },
      },
    },
    details:{
      methods:{
        aas:aasDetails,
        aes:aesDetails,
        afm:afmDetails,
        analysis:analysisDetails,
        binderFiller:binderFillerDetails,
        c_14:c_14Details,
        drms:drmsDetails,
        fors:forsDetails,
        fr_ir:fr_irDetails,
        gc_ms:gc_msDetails,
        gl:glDetails,
        granulometry:granulometryDetails,
        hygroscopic:hygroscopicDetails,
        irpIrrIrfc:irpIrrIrfcDetails,
        libs:libsDetails,
        om:omDetails,
        pige:pigeDetails,
        pixe:pixeDetails,
        rbs:rbsDetails,
        rs:rsDetails,
        rtg:rtgDetails,
        scanning:scanningDetails,
        semSemEdx:semSemEdxDetails,
        tem:temDetails,
        tl:tlDetails,
        tlc:tlcDetails,
        uv_vis:uv_visDetails,
        uvf:uvfDetails,
        vis:visDetails,
        xrd:xrdDetails,
        xrf:xrfDetails,
      },
    },
  }
  console.log(itemDetails);
  Meteor.call("insertItem", itemDetails);
  alert("["+itemDetails.basic.title+"] successfully updated");
  },
  updateData: function(){
    var itemId = Session.get("itemId");
    var itemDetails = {
    userId:event.target.user_id.value,
    createdAt: event.target.created_at.value,
    addedBy:event.target.added_by.value,
    last_edit: Meteor.myFunctions.dateFormat(),
    editedBy:Meteor.user().profile.full_name,
    editorId:Meteor.user()._id,
    visible:"public",
	  basic:{
		  author:event.target.author.value,
		  title:event.target.title.value,
		  date:event.target.date.value,
		  period_style:event.target.period_style.value,
		  collection_owner:event.target.collection_owner.value,
		  museum_gallery:event.target.museum_gallery.value,
		  painting_technique:event.target.painting_technique.value,
		  stretcher:event.target.stretcher.value,
		  support:event.target.support.value,
		  priming:event.target.priming.value,
		  paint_layer:event.target.paint_layer.value,
		  varnish:event.target.varnish.value
	  },
	  data:{
      research:{
        research:event.target.data_research.value,
        researchId:event.target.data_research_id.value
      },
		  imgs:{
			  img_front:event.target.img_front.value,
			  img_front_id:event.target.img_front_id.value,
			  img_back:event.target.img_back.value,
			  img_back_id:event.target.img_back_id.value
		  }
	  }
    }
    Meteor.call("updateItem", itemId, itemDetails)
    alert("["+itemDetails.basic.title+"] successfully updated");
  },
  addUser: function(){
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();
    var full_name = $('[name=full_name]').val();
    var institution = $('[name=institution]').val();
    var telephone = $('[name=telephone]').val();

    var userDetails = {
      username:username,
      password: password,
      profile: {
        full_name: full_name,
        email: email,
        institution: institution,
        telephone: telephone,
        password:password // this is insecure, only admin should see this field
      }
    }
    Meteor.call("createUsers", userDetails);
  },
  editUser: function(){
    var userId = Session.get("userId");
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();
    var full_name = $('[name=full_name]').val();
    var institution = $('[name=institution]').val();
    var telephone = $('[name=telephone]').val();

    var userDetails = {
      username:username,
      password: password,
      profile: {
        full_name: full_name,
        email: email,
        institution: institution,
        telephone: telephone,
        password:password // this is insecure, only admin should see this field
      }
    }
    Meteor.call("editUsers", userId, userDetails)
  }
}