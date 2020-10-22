create_content <- function(cols_hide, text_only_version) {
  # create row
  cat("<div class='row manuscript-text-only'>")
  
  # create left column
  cat('<div class="col-sm-3 manuscript-photo">')
  cat('<div class="zoomButtons">')
  cat(str_c('<a href="https://www.sanskrit-lexicon.uni-koeln.de/scans/MWScan/2020/web/webtc/indexcaller.php"><button>Dictionary</button></a>'))
  cat('</div>')
  if(!text_only_version) cat('<h2 class="no-images-notice">No manuscript images available at the moment.</h2>')
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
