create_content <- function(photoid, zoomid, photo_path) {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-6">')
  
  cat('<div class="img-zoom-container">')
  cat(str_c('<img id="', photoid, '" src="', photo_path, '" width="600" height="400">'))
  cat(str_c('<div id="', zoomid, '" class="img-zoom-result"></div>'))
  cat('</div>') # close zoom container
  
  cat("</div>") # close column
  
  cat('<div class="col-sm-6">')
  
  current_table <- data_text %>% 
    filter(photo == photoid) %>% 
    select(-photo, -verse, -notes_parallels, -notes_collation, -notes_translation)
  
  print( htmltools::tagList(datatable(current_table,
                                      rownames = FALSE, 
                                      escape = FALSE, 
                                      class = "row-border")) )
  
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