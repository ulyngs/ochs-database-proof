create_content <- function() {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-3">')
  cat('<h2>No manuscript images available at the moment.</h2>')
  cat("</div>") # close column
  
  cat('<div class="col-sm-9">')
  
  print( htmltools::tagList(datatable(data_text,
                                      rownames = FALSE, 
                                      escape = FALSE, 
                                      class = "row-border",
                                      options = list(pageLength = 15, info = FALSE,
                                                     lengthMenu = list(c(15, -1), c("15", "All")) ))) )
  
  cat("</div>") # close column
  
  cat("</div>") # close row
}
