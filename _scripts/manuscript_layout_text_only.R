create_content <- function() {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-2">')
  cat('<h2>No manuscript images available at the moment.</h2>')
  cat("</div>") # close column
  
  cat('<div class="col-sm-10">')
  
  print( htmltools::tagList(datatable(data_text,
                                      rownames = FALSE, 
                                      escape = FALSE, 
                                      class = "row-border")) )
  
  cat("</div>") # close column
  
  cat("</div>") # close row
}
