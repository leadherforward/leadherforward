jQuery(document).ready(function($) {

  // Script
 $('#example-profile').click(function(event){
   event.preventDefault();
   $.get( this.href, function(data){
     $(data).modal('show');
   });
 });

});
