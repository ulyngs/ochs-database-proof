create_content <- function(photoid, zoomid, photo_path) {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-9 manuscript-photo">')
  
  cat(str_c('<div id="', zoomid, '">'))
  cat(str_c('<img src="', photo_path, '" class="img-fluid">'))
  cat('</div>') # close zoom container
  
  cat("</div>") # close column
  
  cat('<div class="col-sm-3 manuscript-text">')
  cat('<h2>No transliteration or translation available at the moment.</h2>')
  cat("</div>") # close column
  
  cat("</div>") # close row
}

initiate_zoom_effect <- function(photo_info_tibble) {
  cat("<script src='https://unpkg.com/panzoom@9.2.4/dist/panzoom.min.js'></script>")
  
  # create row
  cat('<script>')
  
  map(photo_info_tibble$zoomid,
      ~cat(str_c('panzoom(document.querySelector("#', .x, '"));\n')))
  
  cat('</script>')
}