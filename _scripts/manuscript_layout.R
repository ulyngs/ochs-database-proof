source(here::here("_scripts/manuscript_joint_functions.R"))

create_content <- function(photoid, photo_path_medium, photo_size_medium, photo_path_high, photo_size_high, cols_hide, image_num) {
  # create row
  glue::glue('<div class="row manuscript-photo-and-text" id="manuscript-photo-anchor{image_num}">') %>% cat()
  
  # create left column
  cat('<div class="col-sm-6">')
  
  cat('<div class="zoomButtons">')
  insert_zoom_buttons(image_num)
  insert_dictionary_dropdown()
  glue::glue('
<button id="textZoomIn{image_num}" class="manuscript-photo-button">Text <i class="fa fa-search-plus"></i></button>
<button id="textZoomOut{image_num}" class="manuscript-photo-button">Text <i class="fa fa-search-minus"></i></button>
<button class="manuscript-photo-button" onclick="resetTransform{image_num}()">Reset text</button>
             ') %>% cat()
  insert_download_button(photo_path_high)
  cat('</div>')
  
  insert_manuscript_photo(image_num, photo_path_medium, photo_size_medium, photo_path_high, photo_size_high, photoid)
  
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
                         fullWidth = TRUE,
                         image_num = image_num)
  
  cat("</div>") # close column
  
  cat("</div>") # close row
}


initiate_text_zoom <- function(photo_info_tibble) {
  cat('<script src="/js/panzoom-elements.js"></script>')
  
  cat('<script>')
  photo_info_tibble %>%
    glue_data('
var elementDT{{image_num}} = document.querySelector("#manuscript-text-DT{{image_num}}");\n
var instanceDT{{image_num}} = panzoom(elementDT{{image_num}}, { 
zoomDoubleClickSpeed: 1, 
elementImageNum: "{{image_num}}",
filterKey: function(/* e, dx, dy, dz */) { return true; }, 
beforeWheel: function(e) { var shouldIgnore = !e.altKey; return shouldIgnore; }, 
beforeMouseDown: function(e) { var shouldIgnore = !e.altKey; return shouldIgnore; } 
});\n
', .open = "{{", .close = "}}") %>%
    cat()
  
  # hide header when text is panned
  photo_info_tibble %>%
    glue_data('
instanceDT{{image_num}}.on("panstart", function(e) { hideHeader{{image_num}}() });
', .open = "{{", .close = "}}") %>%
    cat()
  cat('</script>')
}
