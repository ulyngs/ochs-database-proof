create_content <- function(cols_hide, text_only_version) {
  # create row
  cat("<div class='row manuscript-text-only'>")
  
  # create left column
  cat('<div class="col-sm-3">')
  cat('<div class="zoomButtons">')
  insert_dictionary_dropdown()
  cat('</div>')
  if(!text_only_version) cat('<h2 class="no-images-notice">No manuscript images available at the moment.</h2>')
  cat("</div>") # close column
  
  cat('<div class="col-sm-9 manuscript-text">')
  
  print( htmltools::tagList(data_text %>% 
                              select(chapter, verse, transliteration, starts_with("translation_"), everything()) %>% 
                            datatable(plugins = 'accent-neutralise',
                                      rownames = FALSE,
                                      escape = FALSE,
                                      extensions = c('ColReorder', 'Buttons'),
                                      filter = 'top',
                                      options = list (
                                        searchHighlight = TRUE,
                                        columnDefs = list(list(visible=FALSE, targets=cols_hide)),
                                        lengthMenu = list(c(15, -1), c("15", "All")),
                                        colReorder = TRUE,
                                        dom = 'lBfrtip',
                                        buttons = I('colvis')
                                      ))
                            ) 
         )
  
  cat("</div>") # close column
  
  cat("</div>") # close row
}

create_overlay_functions <- function(){
  cat('<script>')
  insert_dictionary_toggle_functions()
  cat('</script>')
}
