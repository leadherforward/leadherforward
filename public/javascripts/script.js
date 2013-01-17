//var converted = JSON.parse('example_json.json');

jQuery(document).ready(function($) {

  // Script
 $('#timeline-embed').delegate('.profile', 'click', function(event){
   event.preventDefault();
   $.get( this.href, function(data){
     $(data).modal('show');
   });
 });

});
