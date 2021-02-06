source(here::here("_scripts/manuscript_joint_functions.R"))

create_content <- function(photoid, photo_path_medium, photo_size_medium, photo_path_high, photo_size_high, cols_hide) {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-6">')
  
  cat('<div class="zoomButtons">')
  insert_zoom_buttons()
  insert_dictionary_dropdown()
  cat(str_c('<button id="textZoomIn" class="manuscript-photo-button">Text <i class="fa fa-search-plus"></i></button>'))
  cat(str_c('<button id="textZoomOut" class="manuscript-photo-button">Text <i class="fa fa-search-minus"></i></button>'))
  cat(str_c('<button class="manuscript-photo-button" onclick="resetTransform()">Reset text</button>'))
  insert_download_button(photo_path_high)
  cat('</div>')
  
  insert_manuscript_photo(photo_path_medium, photo_size_medium, photo_path_high, photo_size_high, photoid)
  
  cat("</div>") # close column
  
  cat('<div class="col-sm-6 manuscript-text">')
  
  current_table <- data_text %>% 
    filter(photo == photoid) %>% 
    select(-photo) %>% 
    select(chapter, verse, transliteration, starts_with("translation_"), everything())
  
  insert_manuscript_text(current_table, 
                         cols_hide,
                         setLengthMenu = FALSE, 
                         scrollYPix = '550px', 
                         hideInfo = TRUE,
                         noPaging = TRUE,
                         fullWidth = TRUE)
  
  cat("</div>") # close column
  
  cat("</div>") # close row
}

create_overlay_functions <- function(photo_info_tibble){
  cat('<script>')
  insert_dictionary_toggle_functions()
  cat('</script>')
}