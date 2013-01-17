//var converted = JSON.parse('example_json.json');

jQuery(document).ready(function($) {

  // Script
 $('#timeline-embed').delegate('.profile', 'click', function(event){
   event.preventDefault();
   $.get( this.href, function(data){
     $(data).modal('show');
   });
 });

 $('body').delegate('.lead', 'click', function(event){
   var that = this;
   event.preventDefault();
   $.get( this.href, function(data){
     $(that).closest('#profileModal').html(data)
   });
 });

});
