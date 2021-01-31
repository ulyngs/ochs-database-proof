source(here::here("_scripts/manuscript_joint_functions.R"))

create_content <- function(photoid, photo_path_medium, photo_size_medium, photo_path_high, photo_size_high, zoomid, cols_hide) {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-6">')
  
  cat('<div class="zoomButtons">')
  insert_zoom_buttons(zoomid)
  insert_dictionary_dropdown()
  cat(str_c('<button class="manuscript-photo-button" onclick="resetTransform', zoomid, '()">Reset text</button>'))
  
  cat(str_c('<button id="textZoomIn', zoomid, '" class="manuscript-photo-button">Text <i class="fa fa-search-plus"></i></button>'))
  cat(str_c('<button id="textZoomOut', zoomid, '" class="manuscript-photo-button">Text <i class="fa fa-search-minus"></i></button>'))
  insert_download_button(photo_path_high)
  cat('</div>')
  
  insert_manuscript_photo(zoomid, photo_path_medium, photo_size_medium, photo_path_high, photo_size_high, photoid)
  
  cat("</div>") # close column
  
  cat('<div class="col-sm-6 manuscript-text">')
  
  current_table <- data_text %>% 
    filter(photo == photoid) %>% 
    select(-photo) %>% 
    select(chapter, verse, transliteration, starts_with("translation_"), everything())
  
  insert_manuscript_text(current_table, 
                         cols_hide, 
                         setId = zoomid, 
                         setLengthMenu = FALSE, 
                         scrollYPix = '550px', 
                         hideInfo = TRUE,
                         noPaging = TRUE,
                         fullWidth = TRUE)
  
  cat("</div>") # close column
  
  cat("</div>") # close row
}

initiate_zoom_effect <- function(photo_info_tibble) {
  # enable zooming of photos
  prepare_zoom_effect(photo_info_tibble)
  
  # enabling zooming of text
  cat('<script src="/js/panzoom-elements.js"></script>')
  
  cat('<script>')
  photo_info_tibble %>%
    glue_data('
var element{{zoomid}} = document.querySelector("#{{zoomid}}DT");\n
var instance{{zoomid}} = panzoom(element{{zoomid}}, { 
zoomDoubleClickSpeed: 1, 
elementZoomId: "{{zoomid}}",
filterKey: function(/* e, dx, dy, dz */) { return true; }, 
beforeWheel: function(e) { var shouldIgnore = !e.altKey; return shouldIgnore; }, 
beforeMouseDown: function(e) { var shouldIgnore = !e.altKey; return shouldIgnore; } 
});\n
', .open = "{{", .close = "}}") %>%
    cat()
  
  # hide header when text is panned
  photo_info_tibble %>%
    glue_data('
instance{{zoomid}}.on("panstart", function(e) { hideHeader{{zoomid}}() });
', .open = "{{", .close = "}}") %>%
    cat()
  cat('</script>')
}

create_overlay_functions <- function(photo_info_tibble){
  cat('<script>')
  insert_dictionary_toggle_functions()
  cat('</script>')
  cat('<script>')
  
  photo_info_tibble %>% 
    glue_data('
function hideHeader{{zoomid}}() {$("#{{zoomid}}DT .dataTables_scrollBody td div").addClass("add-background"); 
$("#{{zoomid}}DT .dataTables_scrollBody td").addClass("white-font"); 
$("#{{zoomid}}DT .dataTables_scrollBody").addClass("no-scroll"); 
$("#{{zoomid}}DT .dataTables_scrollHead").addClass("hide-on-pan"); 
$("#{{zoomid}}DT .dt-buttons").addClass("hide-on-pan");
$("#{{zoomid}}DT .dataTables_filter").addClass("hide-on-pan");}

function showHeader{{zoomid}}(){
{$("#{{zoomid}}DT .dataTables_scrollBody td div").removeClass("add-background"); 
$("#{{zoomid}}DT .dataTables_scrollBody td").removeClass("white-font"); 
$("#{{zoomid}}DT .dataTables_scrollBody").removeClass("no-scroll"); 
$("#{{zoomid}}DT .dataTables_scrollHead").removeClass("hide-on-pan"); 
$("#{{zoomid}}DT .dt-buttons").removeClass("hide-on-pan");
$("#{{zoomid}}DT .dataTables_filter").removeClass("hide-on-pan");}
}

function resetTransform{{zoomid}}(){
var instance{{zoomid}} = panzoom(element{{zoomid}}, { 
zoomDoubleClickSpeed: 1, 
elementZoomId: "{{zoomid}}",
filterKey: function(/* e, dx, dy, dz */) { return true; }, 
beforeWheel: function(e) { var shouldIgnore = !e.altKey; return shouldIgnore; }, 
beforeMouseDown: function(e) { var shouldIgnore = !e.altKey; return shouldIgnore; } });\n
showHeader{{zoomid}}()
}

function showText{{zoomid}}() {$("#{{zoomid}}DT").toggleClass("bring-to-foreground");}
', .open = "{{", .close = "}}") %>%
    cat()
  
  openAndCloseFullScreen(photo_info_tibble)
  
  cat('</script>')
}