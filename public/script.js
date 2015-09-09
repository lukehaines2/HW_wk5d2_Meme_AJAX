$(document).ready(function() {
  console.log('hello world');

getVideos();
}); // close the doc reeady


//Event listeners - with Event delegation
$('#submit-video').on('click', function(event) {
  createVideo();
});

//MAIN FUNCTIONS

function getVideos(){
  request('GET', '/videos', null).done(function(response) {
    $.each(response, function(index, title) {
      appendVideo(title.title, title.url, title.description, title.genre) 
    });
  });
};

function appendVideo(title, url, genre, description){
 $("<li>" + title + '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ url +'" frameborder="0" allowfullscreen></iframe>' + genre + description + "</li>").appendTo("#video-list")
}

function createVideo() {
  data = {
    title: $('#new-title').val(),
    url: $('#new-url').val(),
    genre: $('#new-genre').val(),
    description: $('#new-description').val()
  }
  
  $.post('/videos/new', data, function(response) {
    appendNewVideo(response)
  })
}

