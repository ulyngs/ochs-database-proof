create_content <- function(cols_hide) {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-3 manuscript-photo">')
  cat('<h2>No manuscript images available at the moment.</h2>')
  cat("</div>") # close column
  
  cat('<div class="col-sm-9 manuscript-text">')
  
  print( htmltools::tagList(data_text %>% 
                              select(chapter, verse, transliteration, starts_with("translation_"), everything()) %>% 
                            datatable(rownames = FALSE, 
                                      escape = FALSE, 
                                      class = "row-border",
                                      extensions = c('Buttons', 'ColReorder'),
                                      options = list(
                                        dom = 'Bfrtip',
                                        buttons = I('colvis'),
                                        colReorder = TRUE,
                                        #scrollX = TRUE,
                                        pageLength = 15, 
                                        info = FALSE,
                                        lengthMenu = list(c(15, -1), c("15", "All")),
                                        columnDefs = list(list(visible=FALSE, targets=cols_hide))
                                        )
                                      )
                            ) 
         )
  
  cat("</div>") # close column
  
  cat("</div>") # close row
}
