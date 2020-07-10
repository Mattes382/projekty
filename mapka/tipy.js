$(document).ready(function(){
tippy('#AUT2331', {
    content: "Wien",
});
$('#AUT2331').attr('nazevkraje', 'Wien');

tippy('#AUT2330', {
    content: "Nieder­österreich",
});
$('#AUT2330').attr('nazevkraje', 'Nieder­österreich');

tippy('#Tirol', {
    content: "Tirol",
});
$('#Tirol').attr('nazevkraje', 'Tirol');
tippy('#Osttirol', {
    content: "Osttirol",
});
$('#Osttirol').attr('nazevkraje', 'Osttirol');

tippy('#AUT2327', {
    content: "Salzburg",
});
$('#AUT2327').attr('nazevkraje', 'Salzburg');

tippy('#AUT2326', {
    content: "Ober­österreich",
});
$('#AUT2326').attr('nazevkraje', 'Ober­österreich');

tippy('#AUT2325', {
    content: "Kärnten",
});
$('#AUT2325').attr('nazevkraje', 'Kärnten');

tippy('#AUT2323', {
    content: "Steier­mark",
});
$('#AUT2323').attr('nazevkraje', 'Steier­mark');

tippy('#NBurg', {
    content: "nördliches Burgen­land",
});
$('#NBurg').attr('nazevkraje', 'nördliches Burgen­land');
tippy('#SBurg', {
    content: "südliches Burgen­land",
});
$('#SBurg').attr('nazevkraje', 'südliches Burgen­land');

tippy('#AUT2320', {
    content: "Vorarl­berg",
});
$('#AUT2320').attr('nazevkraje', 'Vorarl­berg');

var idokresu = null;
var nazevokresu = null;
$('#tlacitkozpet').on('click', function (){
    
    $('#udaje').fadeToggle('slow' , function(){
        $('#mapa').fadeToggle('slow');
    });
    
});

$("path, polygon").on('click', function(){
    $(".st0").removeClass('aktivni');
    $(this).toggleClass("aktivni");
    setTimeout( function(){ 
        $(".st0").removeClass('aktivni');
      }  , 1500 );
   idokresu = $(this).attr('id');
   nazevokresu = $(this).attr('nazevkraje');
   $('#nadpisinformaci').html('Kontakte des Landes <br>'+ nazevokresu);
   setTimeout( function(){ 
   $('#mapa').fadeToggle('slow', function(){
    $('#udaje').fadeToggle('fast');
   });
}  , 200 );


   switch(idokresu) {
    case "AUT2331":
    case "AUT2330":
    case "AUT2320":
    case "NBurg":
        $('#informace').html("<div class='ContactDetail-profile'><h2>Ing. Gerd Müller </h2><p>Gebietsverkaufsleiter</p><p>Wien, Niederösterreich, nördliches Burgenland, Vorarlberg</p></div><div class='ContactDetail-telephone'><p>+43 (0) 676 379 21 31</p><div class='SocialIcons'><ul><li class='SocialIcons-item SocialIcons-item--email'><a href='mailto:gerd.mueller@kingspan.at' title='Ing. Gerd Müller'>email</a></li></ul></div></div>    <div class='ContactDetail-profile'><h2>Elena Kühnen</h2><p>Innendienst</p></div><div class='ContactDetail-telephone'><p>0049-281 9525081</p><div class='SocialIcons'><ul><li class='SocialIcons-item SocialIcons-item--email'><a href='mailto:elena.kuhnen@kingspan.com' title='Elena Kühnen'>email</a></li></ul></div></div>");
    break;
    case "AUT2326":
    case "AUT2327":
    case "Tirol":
    $('#informace').html("<div class='ContactDetail-profile'><h2>Dipl.-Ing. Jörgen Hofpointner </h2><p>Gebietsverkaufsleiter</p><p>Oberösterreich, Salzburg, Tirol</p></div><div class='ContactDetail-telephone'><p>+43 (0) 676 918 49 10</p><div class='SocialIcons'><ul><li class='SocialIcons-item SocialIcons-item--email'><a href='mailto:joergen.hofpointner@kingspan.at' title='Dipl.-Ing. Jörgen Hofpointner'>email</a></li></ul></div></div> <div class='ContactDetail-profile'><h2>Katrin Schmitz</h2><p>Innendienst</p></div><div class='ContactDetail-telephone'><p>0049-281 9525022</p><div class='SocialIcons'><ul><li class='SocialIcons-item SocialIcons-item--email'><a href='mailto:katrin.hoffmann@kingspan.com' title='Katrin Schmitz'>email</a></li></ul></div></div>");
    break;

    case "SBurg":
    case "AUT2325":
    case "AUT2323":
    case "Ostirrol":
    $('#informace').html("<div class='ContactDetail-profile'><h2>Dipl.-HTL-Ing. Mario Werner </h2><p>Gebietsverkaufsleiter Osttirol, Kärnten, Steiermark, südliches Burgenland</p></div><div class='ContactDetail-telephone'><p>+43 (0)676 - 912 26 00</p><div class='SocialIcons'><ul><li class='SocialIcons-item SocialIcons-item--email'><a href='mailto:mario.werner@kingspan.com' title='Dipl.-HTL-Ing. Mario Werner'>email</a></li></ul></div></div> <div class='ContactDetail-profile'><h2>Robin Junkereit</h2><p>Innendienst</p></div><div class='ContactDetail-telephone'><p>0049-281 9525083</p><div class='SocialIcons'><ul><li class='SocialIcons-item SocialIcons-item--email'><a href='mailto:robin.jukereit@kingspan.com' title='Robin Junkereit'>email</a></li></ul></div></div>");
    break;

    //...
}

});

});