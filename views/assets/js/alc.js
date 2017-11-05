$(function() {
    $('#new-record').click(function() {
        $('.section__user__info').css('display', 'none');
        $('.section__form__inner').fadeIn();
        $('.section-form').slideDown();
        $('.section-starter').slideUp()
    })
    $('#close-btn').click(function() {
        $('.section-form').slideUp('slow');
        $('.section-starter').slideDown('slow');
    });

    $('#formloader').submit(function(e){
        e.preventDefault();
        var data = $(this).serialize();
        $('#add-new').html('<i>please wait...</i>')
        $.ajax({
            url: '/new',
            method: 'POST',
            data: data,
            success: function(callback) {
                if(callback.status == 'success') {
                    $('.success-msg').html('<h5> Record Saved Successfully !</h5>')
                    setTimeout( function(){
                        window.location.reload()
                    }, 2000);
                  

                } else {
                    $('.success-msg').html('<h5> Error Occured While Saving Data !</h5>')
                }
            },
            error: function(err) {
                console.log('Error Occured !');
            }
        });
    });

    $('.data__preview').click(function(e) {
        e.preventDefault();
        var data_id = $(this).attr('data-id');
        $.get('/?id='+ data_id, function(callback) {
            var result = callback.result;
            $('#fullname').html( '<h4>' + result[0].firstname + ', ' + result[0].lastname + '</h4>');
            $('#parentname'). html( '<h4>' + result[0].parentname + '</h4>');
            $('#level').html( '<h4>' + result[0].level +'</h4>');
            $('#address').html( '<h4>' + result[0].address +'</h4>');
            $('#delete').attr('data-id', result[0]._id);
            $('#edit-button').attr('data-id', result[0]._id );
            $('#edit-button').attr('firstname', result[0].firstname);
            $('#edit-button').attr('lastname', result[0].lastname);
            $('#edit-button').attr('parentname', result[0].parentname);
            $('#edit-button').attr('email', result[0].email);
            $('#edit-button').attr('addr', result[0].address);
            $('#add-new').attr('data-id-submit', result[0]._id);
            //console.log(result[0].firstname);
        });
        $('.section-form').slideDown('slow');
        $('.section-starter').slideUp('slow');
        $('.section__form__inner').hide();
        $('.section__user__info').fadeIn('slow');
    });

    $('#edit-button').click(function() {
        var data = $(this).attr('data-id');
        $('.section__form__inner').slideDown();
        $('.section__user__info').slideUp();
        $('#add-new').text('Edit Information');
        $('#firstname').val($(this).attr('firstname'))
        $('#lastname').val($(this).attr('lastname'))
        $('#pemail').val($(this).attr('email'))
        $('#addr').val($(this).attr('addr'))
    });


    $('#delete').click(function() {
        var _id = $(this).attr('data-id');
        var conf = window.confirm('Are you sure you want to delete?');
        if(conf) {
            var that = $(this);
            $(this).html('<img src="./assets/bower_components/SVG-Loaders/svg-loaders/puff.svg" width="20px"/>');
            $.get('/delete/'+_id.toString(), function(callback) {
                if(callback.result.length > 0 ) {
                    that.text('delete');
                    $('#message-success').fadeIn('slow').html('<b>Record Deleted Successfully !</b>');
                    setTimeout(function() {
                       $('#message-success').fadeOut('slow');
                       $('.section-form').slideUp();
                       $('.section-starter').slideDown()
                    }, 1500);
                    $('.total__record').text(parseInt($('.total__record').text()) - 1)
                    $('.list__data'+_id).fadeOut('slow')
                }
            });
        }
    })

    $('#searchBtn').click(function() {
        var text = $('#search');
        if(text.val() == '' ) {
            return;
        } else {

            $.get('/get/'+ text.val(), function(callback) {
                var result = callback.result;
                //alert(result.length)
                if(result.length > 0 ) {
                    var data = '';
                    result.forEach(function(value) {
                        data += '<li class="list__data"><a href="#" class="data__preview" data-id=""><div class="pull-left"> Azeez Abiodun <p> Mr. Abiodun </p><p> SSL </p></div><div class="pull-right"><span class="button-link">  <i class="demo-icon  icon-angle-circled-right">&#xf138;</i></span></div><div class="clearfix"></div></a>';
                    })
                    $('.section__info').html(data);
                } else {
                    alert('Error Occured !')
                }
            })  
            
        }
    })
});