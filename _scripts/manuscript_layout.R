create_content <- function(photoid, zoomid, photo_path) {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-6 manuscript-photo">')
  
  cat(str_c('<div id="', zoomid, '">'))
  cat(str_c('<img src="', photo_path, '" class="img-fluid">'))
  cat('</div>') # close zoom container
  
  cat("</div>") # close column
  
  cat('<div class="col-sm-6 manuscript-text">')
  
  current_table <- data_text %>% 
    filter(photo == photoid) %>% 
    select(-photo, -verse) %>% 
    select(chapter, transliteration, contains("translation_"), everything())
  
  print( htmltools::tagList(datatable(current_table,
                                      rownames = FALSE, 
                                      escape = FALSE, 
                                      class = "row-border",
                                      options = list(scrollY = '600px', scrollX = TRUE, paging = FALSE))) )
  
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