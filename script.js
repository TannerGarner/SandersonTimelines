$('#showtwok').on('click', function(){
    $('#wok').toggleClass('displaytwok');
    if (!$('#wok').hasClass('displaytwok')){
        $('#wok')[0].scrollIntoView({behavior:'smooth'});
    }
    //collapse other sections
    if (!$('#wor').hasClass('displaywor')){
        $('#wor').toggleClass('displaywor');
    }
    if (!$('#oath').hasClass('displayo')){
        $('#oath').toggleClass('displayo');
    }
    if (!$('#row').hasClass('displayrow')){
        $('#row').toggleClass('displayrow');
    }
});

$('#showwor').on('click', function(){
    $('#wor').toggleClass('displaywor');
    if (!$('#wor').hasClass('displaywor')){
        $('#wor')[0].scrollIntoView({behavior:'smooth'});
    }
    //collapse other sections
    if (!$('#oath').hasClass('displayo')){
        $('#oath').toggleClass('displayo');
    }
    if (!$('#row').hasClass('displayrow')){
        $('#row').toggleClass('displayrow');
    }
});

$('#showo').on('click', function(){
    $('#oath').toggleClass('displayo');
    if (!$('#oath').hasClass('displayo')){
        $('#oath')[0].scrollIntoView({behavior:'smooth'});
    }
    //collapse other sections
    if (!$('#row').hasClass('displayrow')){
        $('#row').toggleClass('displayrow');
    }
});

$('#showrow').on('click', function(){
    $('#row').toggleClass('displayrow');
    if (!$('#row').hasClass('displayrow')){
        $('#row')[0].scrollIntoView({behavior:'smooth'});
    }
});