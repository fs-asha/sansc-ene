(function ($) {
    // USE STRICT
    "use strict";
	
    //--------------------------------------------------
    // Start Preloaded
    //--------------------------------------------------
	$(window).on('load', function() {
        setTimeout(()=>{
            $("body").removeClass(' nav-fixed');
            $("#wizardForm").css({ 'min-height': 'calc(100vh - 125px)', height: 'calc(100vh - 125px)', 'overflow-y': 'auto' });
            $("#wizard").css({ 'min-height': 'calc(100vh - 170px)'});
        },500)
	});
    
    $(document).on("click", "#btn-buy", function () {
        setTimeout(()=>{
            window.location.href='wzform.html';
        },500);
    });

    //Wizard Init
    $("#wizard").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "none",
        titleTemplate: '<span class="bd-wizard-step-indicator"></span><h6 class="bd-wizard-step-title">#title#</h6>',
        onStepChanged: function (e, index , previndex) {
            console.log(e ,index, previndex);
            let steps = document.querySelector('#wizard .steps');

            if( index === 1) {
                steps.classList.add('second-step-active');
                steps.classList.remove('third-step-active','last-step-active');
            } else if (index === 2) {
                steps.classList.add('third-step-active');
                steps.classList.remove('second-step-active','last-step-active');
            } else if (index === 3) {
                steps.classList.add('last-step-active');
                steps.classList.remove('second-step-active','third-step-active');
            }else {
                steps.classList.remove('second-step-active','third-step-active','last-step-active');
            }

        },
        onFinished: function() {
            bootbox.alert("Form successfully submitted!", function(){
                location.href='index.html';
            });
        },
        labels: {
            previous: "Back",
        }
    });    

})(jQuery);