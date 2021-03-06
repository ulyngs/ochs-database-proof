source(here::here("_scripts/manuscript_joint_functions.R"))

create_content <- function(photoid, photo_path_medium, photo_size_medium, photo_path_high, photo_size_high, image_num) {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-9">')
  
  cat('<div class="zoomButtons">')
  insert_zoom_buttons(image_num)
  insert_dictionary_dropdown()
  insert_download_button(photo_path_high)
  cat('</div>')
  
  insert_manuscript_photo(image_num, photo_path_medium, photo_size_medium, photo_path_high, photo_size_high, photoid)
  
  cat("</div>") # close column
  
  cat('<div class="col-sm-3 manuscript-text">')
  cat('<h4 class="no-text-notice">No transliteration or translation available at the moment.</h2>')
  cat("</div>") # close column
  
  cat("</div>") # close row
}
