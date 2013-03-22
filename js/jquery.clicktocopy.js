$("input:text").focus(function() { $(this).select(); } );

$("input:text").mouseup(function(e){
        e.preventDefault();
});