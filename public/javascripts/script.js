//var converted = JSON.parse('example_json.json');

jQuery(document).ready(function($) {
  setAltInTimeline();
  // Script
 $('#timeline-embed').delegate('.profile', 'click', function(event){
   event.preventDefault();
   $.get( this.href, function(data){
     $(data).modal('show');
   });
 });

 $('.leader-container').delegate('.profile', 'click', function(event){
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

 $('body').delegate('.back_to_profile', 'click', function(event){
   var that = this;
   event.preventDefault();
   $.get( $(this).attr('href'), function(data){
     $(that).closest('.modal-body').replaceWith($(data).children());
   });
 });

$('body').click(setAltInTimeline);
$('body').keydown(setAltInTimeline);
});

var setAltInTimeline = function(event){
   $('img.media-image').each(function(index, img){
     var name = $(img).closest('.layout-text-media').find('div.text').find('h3').text();
     img.alt = "Image of " + name;
   });
 }
