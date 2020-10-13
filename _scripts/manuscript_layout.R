create_content <- function(photoid, zoomid, photo_path, cols_hide) {
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
    select(-photo) %>% 
    select(chapter, verse, transliteration, starts_with("translation_"), everything())
  
  print( htmltools::tagList(datatable(current_table,
                                      rownames = FALSE, 
                                      escape = FALSE, 
                                      class = "row-border",
                                      extensions = c('ColReorder', 'Buttons'),
                                      options = list(
                                        dom = 'Bfrtip',
                                        buttons = I('colvis'),
                                        colReorder = TRUE,
                                        scrollY = '600px',
                                        scrollX = TRUE,
                                        paging = FALSE,
                                        columnDefs = list(list(visible=FALSE, targets=cols_hide))))) )
  
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