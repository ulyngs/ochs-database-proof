create_content <- function(photoid, zoomid, photo_path) {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-10">')
  
  cat('<div class="img-zoom-container">')
  cat(str_c('<img id="', photoid, '" src="', photo_path, '" width="900" height="600">'))
  cat(str_c('<div id="', zoomid, '" class="img-zoom-result-large"></div>'))
  cat('</div>') # close zoom container
  
  cat("</div>") # close column
  
  cat('<div class="col-sm-2">')
  cat('<h2>No transliteration or translation available at the moment.</h2>')
  cat("</div>") # close column
  
  cat("</div>") # close row
}

initiate_zoom_effect <- function(photo_info_tibble) {
  # create row
  cat('<script>\n')
  
  map2(photo_info_tibble$photoid, photo_info_tibble$zoomid, 
       ~cat(str_c('imageZoom("', .x, '", "', .y, '");\n')))
  
  cat('</script>')
}