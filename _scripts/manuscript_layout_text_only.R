source(here::here("_scripts/manuscript_joint_functions.R"))

create_content <- function(cols_hide, text_only_version) {
  # create row
  cat("<div class='row manuscript-text-only'>")
  
  # create left column
  cat('<div class="col-sm-2">')
  
  cat('<div class="zoomButtons">')
  insert_dictionary_dropdown()
  cat('</div>')
  
  if(!text_only_version) cat('<h4 class="no-images-notice">No manuscript images available at the moment.</h2>')
  cat("</div>") # close column
  
  cat('<div class="col-sm-9 manuscript-text">')
  
  text_to_print <- data_text %>% 
    select(chapter, verse, transliteration, starts_with("translation_"), everything())
  
  insert_manuscript_text(text_to_print, cols_hide, fullWidth = TRUE, setLengthMenu = TRUE)
  
  cat("</div>") # close column
  
  cat("</div>") # close row
}

create_overlay_functions <- function(){
  cat('<script>')
  insert_dictionary_toggle_functions()
  cat('</script>')
}

