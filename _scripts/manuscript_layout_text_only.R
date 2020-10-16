create_content <- function(cols_hide, text_only_version) {
  # create row
  cat("<div class='row manuscript-text-only'>")
  
  # create left column
  cat('<div class="col-sm-3 manuscript-photo">')
  if(!text_only_version) cat('<h2>No manuscript images available at the moment.</h2>')
  cat("</div>") # close column
  
  cat('<div class="col-sm-9 manuscript-text">')
  
  print( htmltools::tagList(data_text %>% 
                              select(chapter, verse, transliteration, starts_with("translation_"), everything()) %>% 
                            datatable(rownames = FALSE,
                                      extensions = c('ColReorder', 'Buttons'),
                                      filter = 'top',
                                      options = list (
                                        columnDefs = list(list(visible=FALSE, targets=cols_hide)),
                                        lengthMenu = list(c(15, -1), c("15", "All")),
                                        colReorder = TRUE,
                                        dom = 'lBfrtip',
                                        buttons = I('colvis')
                                      ))
                                      #escape = FALSE, 
                                      #class = "row-border",
                                      #extensions = c('ColReorder'),
                                      #options = list(
                                      #  dom = 'Bfrtip',
                                        #buttons = I('colvis'),
                                      #  colReorder = TRUE,
                                        #scrollX = TRUE,
                                      #  pageLength = 15,
                                      #  lengthMenu = list(c(15, -1), c("15", "All")),
                                        #paging = FALSE,
                                       # )
                                      #)
                            ) 
         )
  
  cat("</div>") # close column
  
  cat("</div>") # close row
}
