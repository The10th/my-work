
        // creates random ipsum on page load
        $(document).ready(function(){

            for (var i = 0; i <= 8; i++) {
               $('.fussy').append("<div class='col-md-3 secbox'><p id='awesome'>Photo booth fixie pour-over Cosby sweater meh flexitarian brunch, kogi High Life. Plaid Cosby sweater asymmetrical gluten-free bicycle rights, selfies tofu before they sold out wolf. XOXO heirloom cornhole, polaroid kogi ennui health goth disrupt next level flexitarian seitan Portland</p></div>")
           };

        //initialize Stellar.js
        $(window).stellar();

         //modal control - expands modal size from 0 width 0 height:

         $('.mainModal').click(function(event){

            $('.modalDialog>div').css('width',750)
            $('.modalDialog>div').css('height',850)
            event.stopPropagation();
        });
            $('.close').click(function(event){

            $('.modalDialog>div').css('width',0)
            $('.modalDialog>div').css('height',0)
            event.stopPropagation();
        });

        var inside = $('.secla').innerHeight();
        var count = 0;
        var divs = 0;


        function maxLength(el) {    
            if (!('maxLength' in el)) {
                var max = el.attributes.maxLength.value;
                el.keyup = function () {
                    if (this.value.length >= max) 
                        return false;
                };
            }
        }

        maxLength(document.getElementById("texs"));
        
        function updateCountdown() {
            // 150 is the max message length
            var remaining = 150 - $('#texs').val().length;
            $('.countdown').text(remaining + ' characters remaining');

        }

        $(secs).click(function(){

            function calculateLIsInRow() {


                $('.fussy').each(function() {
                    if($(this).prev().length > 0) {
                        if($(this).position().top != $(this).prev().position().top) return false;
                        divs++;
                    }
                    else {
                        divs++;   
                    }
                });
                console.log('No: of div in a row = ' + divs);
            }   
            calculateLIsInRow();

            $('#secla').resize(calculateLIsInRow);

            count++;
            var fusec = $('#texs').val();
            // if (divs <= 4){
                $('.fussy').append("<div class='col-md-3 secbox'><p id='awesome"+count+"''>"+fusec+"</p></div>")
            // } else if (divs > 4){

            //  $('.rossy').append("<div class='col-md-3 secbox'><p id='awesome"+count+"''>"+fusec+"</p></div>")
            // }


            $('#texs').val('');
            var remaining = 150 - $('#texs').val().length;
            $('.countdown').text(remaining + ' characters remaining')
            $('#secs').prop('disabled', true);
            event.preventDefault();
        })

    // removes div content on scroll

    $('.secla').scroll(function(){

            //109 is $('.secla').height()
            if ($('.secla').scrollTop() > $('.secla').height()-190) {
            $('.fussy:first-child').fadeOut(500, function(){
                $(this).remove();
                // $('#ro').attr('id', 'fus')
                // $('.rossy').attr('class','fussy')
                $('#fus').append("<div class='col large 3 fussy'></div>")
                // divs - 4;
                // $('#ro').attr('id', 'fus');
                // console.log(divs)
            })};

        });


    $('#secrets').on('click' , function() {
        if( $.trim($('#texs').val()).length > 0 ){
            $('#secs').prop('disabled', false);
        }
        else {
            $('#secs').prop('disabled', true);
        }

    });

    updateCountdown();
    $('#texs').change(updateCountdown);
    $('#texs').keyup(updateCountdown);


    $('#refresh').click(function() {
        location.reload();
    });

 // contact icon spin   

 var $spindoc = $('.spindoc'),
 $body = $(document.body),
 bodyHeight = $body.height();

 $(window).scroll(function () {
    $spindoc.css({
        'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 180) + 'deg)'
    });
});
 var $revspin = $('.revspin'),
 $body = $(document.body),
 bodyHeight = $body.height();

 $(window).scroll(function () {
    $revspin.css({
        'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * -180) + 'deg)'
    });
});

});

    

    
