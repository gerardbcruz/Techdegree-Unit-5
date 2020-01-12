// Lightbox
lightbox.option({
     'resizeDuration': 700,
     'wrapAround': true,
     'showImageNumberLabel': false,
     'fadeDuration': 600
   })

   // First try to get the value of the search field whenever a user types in that field, and log
   // that value to the screen with a console.log() statement. Checkout the keyup event
   // listener for this. And be sure to make the value case insensitive by using something like
   // the toLowerCase() method.
   // Next, start trying to target the entire caption by using the getAttribute() method, then
   // looping and logging the all lowercase version of the captions to the console.
   // Next comes the fun part. Start trying to find ways to check if the current value of the
   // search input is included within any of the captions, and if so, log the associated image
   // to the console.
   // Lastly, use a conditional so that if there's a match, display the container of the image,
   // and if not, hide it. Piece of cake!

const $search = $('#search');
const $links = $('a');

$search.keyup(function() {
  const $searchValue = $search.val().toLowerCase();

  //loop through a link tags
  $links.each(function() {
    let $captions = $(this).attr('data-title').toLowerCase();
    if () {
      $links.hide();
      $(this).show();
    }
  })

})
