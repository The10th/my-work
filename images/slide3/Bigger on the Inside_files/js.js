    $(document).ready(function(){

          //initialise Stellar.js
        $(window).stellar();

        var box = $('.secla').scrollTop();
        var inside = $('.secla').innerHeight();
        var count = 0;
        var divs = 0;
        console.log(inside)


        function maxLength(el) {    
            if (!('maxLength' in el)) {
                var max = el.attributes.maxLength.value;
                el.keyup = function () {
                    if (this.value.length >= max) return false;
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
            return false;
        })

        $('.secla').scroll(function(){

            //109 is $('.secla').height()
            if ($('.secla').scrollTop() + 280  >= $('.secla').innerHeight()){

                $('.fussy:last-child').fadeOut(500, function(){
                    $(this).remove();
                $('#fus').append("<div class='col large 3 fussy'></div>")
            });
            }


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

    });

$('#refresh').click(function() {
    location.reload();
});