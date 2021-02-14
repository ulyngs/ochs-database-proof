library(magrittr)
library(dplyr)
library(glue)

## ZOOM BUTTONS ##
insert_zoom_buttons <- function(image_num){
  glue('
<button class="manuscript-photo-button" id="zoomIn{image_num}"><i class="fa fa-search-plus"></i></button>
<button class="manuscript-photo-button" id="zoomOut{image_num}"><i class="fa fa-search-minus"></i></button>
<button class="manuscript-photo-button" id="zoomReset{image_num}">Reset image</button>
<button class="manuscript-photo-button" onclick="highRes{image_num}()">Resolution</button>
<button class="manuscript-photo-button" onclick="openNav{image_num}()">Full screen</button>
') %>% knitr::raw_html() %>% cat()
}

insert_download_button <- function(photo_path_high){
  glue('<a href="{photo_path_high}" data-src="{photo_path_high}" role="button" class="manuscript-photo-button" download><i class="fa fa-download"></i></a>') %>% cat()
}

## INSERT MANUSCRIPT PHOTO ##
insert_manuscript_photo <- function(image_num, photo_path_medium, photo_size_medium, photo_path_high, photo_size_high, photoid){
  glue('
<div class="row manuscript-photo">
  <div class="col-sm-12">
    <div class="panzoomContainer" id="panzoomManuscriptPhoto{image_num}">
      <p class="medium-image-size">{photo_size_medium}</p>
      <p class="high-image-size">{photo_size_high}</p>
      <img data-src-md-res="{photo_path_medium}" data-src-high-res="{photo_path_high}" class="img-fluid lazy">
    </div>
  <div class="photo-title"><p>{photoid}</p></div>
  </div>
</div>
') %>% knitr::raw_html() %>% cat()
}


## INSERT MANUSCRIPT TEXT ##
insert_manuscript_text <- function(df, cols_to_hide, 
                                   setId = NULL, 
                                   setLengthMenu = NULL, 
                                   scrollYPix = NULL, 
                                   hideInfo = FALSE,
                                   noPaging = FALSE,
                                   fullWidth = FALSE,
                                   download = FALSE,
                                   image_num = FALSE){
  print( htmltools::tagList(datatable(df,
                                      plugins = 'accent-neutralise',
                                      elementId = if (image_num) {paste0("manuscript-text-DT", image_num)} else {"manuscript-text-DT"},
                                      rownames = FALSE,
                                      escape = FALSE,
                                      extensions = c('ColReorder', 'Buttons', 'Responsive'),
                                      width = if (fullWidth) {'100%'} else {NULL},
                                      height = '100%',
                                      filter = 'top',
                                      options = list (
                                        searchHighlight = TRUE,
                                        dom = 'lBfrtip',
                                        buttons = if (download) {c('colvis', 'csv', 'excel', 'print')} else {I('colvis')},
                                        colReorder = TRUE,
                                        lengthMenu = if (setLengthMenu) {list(c(15, -1), c("15", "All"))} else {NULL},
                                        scrollY = if (!is.null(scrollYPix)) {scrollYPix} else {NULL},
                                        scrollX = TRUE,
                                        info = if (hideInfo) {FALSE} else {TRUE},
                                        paging = if (noPaging) {FALSE} else {TRUE},
                                        columnDefs = list(list(visible=FALSE, targets=cols_to_hide))
                                      ))
                            )
  )
}

## DICTIONARIES ##
dictionaries <- readr::read_csv(here::here("data/dictionaries.csv")) %>% 
  mutate(iframe_number = row_number())

insert_dictionary_dropdown <- function(){
  knitr::raw_html('
<div class="dropdown dictionary-dropdown">
  <button class="dropdown-toggle manuscript-photo-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dictionaries</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
') %>% cat()
  
  # iterate over the dictionaries and insert a button for each
  glue_data(dictionaries, '<button class="dropdown-item" onclick="openDictionary{iframe_number}()">{name}</button>') %>% cat()
  
  knitr::raw_html('<input class="dropdown-item" type="text" id="dictionary-url" placeholder="https://url-to-dictionary" />
  <button class="dropdown-item" onclick="toggleDictionaryURL()">Load URL</button>
  </div>
</div>
') %>% cat()
}

insert_dictionary_iframes <- function(){
  glue_data(dictionaries, '
<div class="sanskrit-dictionary" id="sanskrit-dictionary{iframe_number}">
  <a href="javascript:void(0)" class="closebtn-dictionary" onclick="closeDictionaries()">&times;</a>
  <iframe data-src="{url}"></iframe>
  <p>Via the <a href="https://www.sanskrit-lexicon.uni-koeln.de" target="_blank">Cologne Digital Sanskrit Dictionaries</a></p>
</div>
') %>% knitr::raw_html() %>% cat()
  knitr::raw_html('
<div class="sanskrit-dictionary" id="sanskrit-dictionary-url">
  <a href="javascript:void(0)" class="closebtn-dictionary" onclick="closeDictionaries()">&times;</a>
  <iframe src="" id="frame-dictionary-url"></iframe>
</div>
') %>% cat()
}

insert_dictionary_toggle_functions <- function(){
  cat('<script>')
  
  glue('
function closeDictionaries() { 
  $(".sanskrit-dictionary").removeClass("make-visible"); 
  $(".sanskrit-dictionary iframe").removeClass("make-visible");
}', .open = "{{", .close = "}}") %>% cat()
  
  dictionaries %>% glue::glue_data('
function openDictionary{{iframe_number}}() { 
  closeDictionaries()

  $("#sanskrit-dictionary{{iframe_number}}").addClass("make-visible"); 
  $("#sanskrit-dictionary{{iframe_number}} iframe").addClass("make-visible");
  
  var targetIframe = document.querySelector("#sanskrit-dictionary{{iframe_number}} iframe");
  targetIframe.src = targetIframe.getAttribute("data-src");
}
', .open = "{{", .close = "}}") %>% cat()
  
glue('
function toggleDictionaryURL() { 
  $("#sanskrit-dictionary-url").toggleClass("make-visible"); $("#sanskrit-dictionary-url iframe").toggleClass("make-visible");}\n
  $("input#dictionary-url").on("propertychange paste keyup", function() { var url = this.value; $("#frame-dictionary-url").attr("src", url); });
', .open = "{{", .close = "}}") %>% cat()

  cat('</script>')
}

create_overlay_divs <- function(photo_info_tibble, has_text = FALSE){
  first_part <- photo_info_tibble %>% 
  glue_data('
<div id="imageOverlay{image_num}" class="overlay">
<a href="javascript:void(0)" class="closebtn" onclick="closeNav{image_num}()">&times;</a>     
<div class="zoomButtonsFullScreen">       
<button class="manuscript-photo-button" id="zoomInFullScreen{image_num}"><i class="fa fa-search-plus"></i></button>
<button class="manuscript-photo-button" id="zoomOutFullScreen{image_num}"><i class="fa fa-search-minus"></i></button>
<button class="manuscript-photo-button" id="zoomResetFullScreen{image_num}">Reset image</button>
<button class="manuscript-photo-button" onclick="highResFull{image_num}()">Resolution</button>
       ')
  
  # event listeners are assigned in js/panzoom-elements.js
  text_buttons <- photo_info_tibble %>% 
    glue_data('
<button class="manuscript-photo-button" class="showTextbtn" onclick="showText{image_num}()">Show/hide text</button>
<button id="textZoomInFull{image_num}" class="manuscript-photo-button">Text <i class="fa fa-search-plus"></i></button>
<button id="textZoomOutFull{image_num}" class="manuscript-photo-button">Text <i class="fa fa-search-minus"></i></button>
<button class="manuscript-photo-button" onclick="resetTransform{image_num}()">Reset text</button>
         ')
  
  second_part <- photo_info_tibble %>% 
    glue_data('
</div>
<div class="panzoomContainer overlay-content" id="fullScreenPhoto{image_num}">
<p class="medium-image-size-overlay">{photo_size_medium}</p>
<p class="high-image-size-overlay">{photo_size_high}</p>
<img data-src-md-res="{photo_path_medium}" data-src-high-res="{photo_path_high}" class="img-fluid">
</div>
</div>
         ')
  
  if (has_text){
    paste(first_part, text_buttons, second_part) %>% cat() 
  } else {
    paste(first_part, second_part) %>% cat() 
  }
}
