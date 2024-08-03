$( document ).ready(function() {

    // карта
    let map;
    
    DG.then(function () {
        map = DG.map('map', {
            center: [59.907478, 30.324797],
            zoom: 13
        });
    
        DG.marker([59.907478, 30.324797]).addTo(map).bindPopup('Альфа Маркетинг');
    });

    
    // маска ввода телефона
    $('.telephone').mask("+7(999) 999-9999");

    

    // зачистка полей формы и открытие информации об успешной отправке формы

     // --------------1----------------------


    $('.pagecrm_application .form_but').click(function (e) {
		e.preventDefault();
        if($('.pagecrm_application :input').val() != ''){

            $('.pagecrm_successfully_sent_overlay').show();
            $('.pagecrm_application .pagecrm_application_inp').val('');
            $('.pagecrm_application :textarea').val('');
        }
        else{
            $('.pagecrm_successfully_sent_overlay_error').show();
            $('.pagecrm_application :input').css({
                background: '#B2222280',
            })
            $('.pagecrm_application .pagecrm_application_inp').val('');
            $('.pagecrm_application :textarea').val('');
        }
	});

    $('.pagecrm_successfully_sent_overlay .close-popup').click(function () {
        $('.pagecrm_application :input').val('');
        $('.pagecrm_application :textarea').val('');
        $('.pagecrm_successfully_sent_overlay').fadeOut(300);
    });



    // --------------2----------------------
    $('.pagecrm_Feedback .close-popup').click(function () {
		$('.pagecrm_successfully_sent_overlay').fadeOut(300);
        $('.pagecrm_application :input').val('');
        $('.pagecrm_application :textarea').val('');
        $('.pagecrm_application .opt_selected').attr(selected);
	});

    $('.pagecrm_Feedback button').click(function (e) {
        e.preventDefault();
        if($('.pagecrm_form_element :input').val() != ''){
            $('.pagecrm_successfully_sent_overlay').show();
            $('.pagecrm_form_element :input').val('');
            $('.pagecrm_Feedback .opt_selected').attr(selected);
        }
        else{
            $('.pagecrm_successfully_sent_overlay_error').show();
            $('.pagecrm_form_element :input').css({
                background: '#B2222280',
            })
        }  
	});

    $(document).mouseup(function () {
        $('.pagecrm_successfully_sent_overlay_error').fadeOut(300);
	});

    $(document).mouseup(function () {
        $('.pagecrm_successfully_sent_overlay').fadeOut(300);
	});

    $('.pagecrm_connection_card_but_click').click(function (){
            $('.pagecrm_filling_overlay').show()
    })


    $('.pagecrm_filling_overlay .but').click(function (e){
        e.preventDefault();
        if( $('.pagecrm_filling_overlay :input').val() != ''){
            $('.pagecrm_successfully_sent_overlay').show();
            $('.pagecrm_filling_overlay :input').val('');
        }
        else{
            $('.pagecrm_successfully_sent_overlay_error').show();
            $('.pagecrm_form_element :input').css({
                background: '#B2222280',
            })
        }
    })

    $('.pagecrm_successfully_sent_overlay_popup .close-popup').mouseup(function () {
        $('.pagecrm_successfully_sent_overlay').fadeOut();
        $('.pagecrm_filling_overlay').fadeOut();
	});




});