
jQuery(document).ready(function($) {
  // Script
<<<<<<< HEAD
	});
=======
 $('#example-profile').click(function(event){
   event.preventDefault();
   $.get( this.href, function(data){
     $(data).modal('show');
   });
 });
>>>>>>> 38f41b84a216e69831d253ea0d1f83afb456cb13

});
