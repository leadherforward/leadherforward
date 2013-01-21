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

  // This originally was called at the top of this file, but was interfering with some registered events.
  // I have no idea why, but putting it down here seemed to help.
  createStoryJS({
    type:  'timeline',
    width: '100%',
    height:  '600',
    source:  '/timeline_config.json',
    embed_id: 'timeline-embed',
    start_at_end: false
  });
});

var setAltInTimeline = function(event){
   $('img.media-image').each(function(index, img){
     var name = $(img).closest('.layout-text-media').find('div.text').find('h3').text();
     img.alt = "Image of " + name;
   });
 }
