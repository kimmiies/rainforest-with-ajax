$(document).on('ready page: load', function() {
  $('#search-form').submit(function(event){   //each time the submit button of search form is trigger do this: prevent default, set the value that comes in to search value.
    event.preventDefault();
    var searchValue = $('#search').val();


    $.get('/products?search=' + searchValue)   //making new tempory route?
      .done(function(data){
        console.log(data);
          $('#products').html(data);
      });
  });
});

//upon this AJAX request being done/successful do this: change the html of DOM (DIV id=products) to the data that came back from request

//This javascript replaces this:

  //   function display_search_results(){
  //     // readyState===4 means request completed successfully
  //     if (this.readyState === 4) {
  //       console.log(this);
  //       document.getElementById('products').innerHTML = this.responseText;
  //     }
  //   }
  //
  // var form = document.getElementById('search-form');
  //
  // form.addEventListener('submit', function(event){
  //   event.preventDefault();
  //
  //   var searchValue = document.getElementById('search').value;
  //
  //   var xhr = new XMLHttpRequest();
  //   xhr.onload = display_search_results;
  //   xhr.open('GET', '/products?search=' + searchValue, true);
  //   xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  //   xhr.send();
  // });


// Make sure the DOM is loaded before we begin setting up and selecting listeners
// $(document).on('ready', function() {
//
// });     same same but different?
