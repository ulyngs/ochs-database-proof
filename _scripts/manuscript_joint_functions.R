library(magrittr)
library(dplyr)
library(glue)

## ZOOM BUTTONS ##
insert_zoom_buttons <- function(zoomid){
  glue('<button id="zoomIn', zoomid, '"><i class="fa fa-search-plus"></i></button>',
       '<button id="zoomOut', zoomid, '"><i class="fa fa-search-minus"></i></button>',
       '<button id="zoomReset', zoomid, '">Reset zoom</button>',
       '<button onclick="openNav', zoomid, '()">Full screen</button>'
  ) %>% cat()
}

## INSERT MANUSCRIPT PHOTO ##
insert_manuscript_photo <- function(zoomid, photo_path, photoid){
  glue('<div class="row manuscript-photo"><div class="col-sm-12">',
       '<div class="panzoomContainer" id="', zoomid, '">',
       '<img data-src="', photo_path, '" class="img-fluid lazy">',
       '</div>',
       '<div class="photo-title"><p>', photoid, '</p></div>',
       '</div></div>'
  ) %>% cat()
}

## INSERT MANUSCRIPT TEXT ##
insert_manuscript_text <- function(df, cols_to_hide, 
                                   setId = NULL, 
                                   setLengthMenu = NULL, 
                                   scrollYPix = NULL, 
                                   hideInfo = FALSE,
                                   noPaging = FALSE,
                                   fullWidth = FALSE){
  print( htmltools::tagList(datatable(df,
                                      plugins = 'accent-neutralise',
                                      elementId = if (!is.null(setId)) {paste0(setId, "DT")} else {NULL},
                                      rownames = FALSE,
                                      escape = FALSE,
                                      extensions = c('ColReorder', 'Buttons', 'Responsive'),
                                      width = if (fullWidth) {'100%'} else {NULL},
                                      height = '100%',
                                      filter = 'top',
                                      options = list (
                                        searchHighlight = TRUE,
                                        dom = 'lBfrtip',
                                        buttons = I('colvis'),
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
  mutate(function_name = stringr::str_c("toggleDictionary", row_number(), "()")) %>% 
  mutate(iframe_number = row_number())

insert_dictionary_dropdown <- function(){
  cat('<div class="dropdown dictionary-dropdown"><button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dictionaries</button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton">')
  glue_data(dictionaries, '<button class="dropdown-item" onclick="{function_name}">{name}</button>') %>% cat()
  cat('<input class="dropdown-item" type="text" id="dictionary-url" placeholder="https://url-to-dictionary" />')
  cat('<button class="dropdown-item" onclick="toggleDictionaryURL()">Load URL</button>')
  cat('</div></div>')
}

insert_dictionary_iframes <- function(){
  glue_data(dictionaries, '
<div class="sanskrit-dictionary" id="sanskrit-dictionary{iframe_number}">
<a href="javascript:void(0)" class="closebtn-dictionary" onclick="{function_name}">&times;</a>
<iframe src="{url}"></iframe>
<p>Via the <a href="https://www.sanskrit-lexicon.uni-koeln.de" target="_blank">Cologne Digital Sanskrit Dictionaries</a></p>
</div>
') %>% 
    cat()
  cat('<div id="sanskrit-dictionary-url"><a href="javascript:void(0)" class="closebtn-dictionary" onclick="toggleDictionaryURL()">&times;</a><iframe src="" id="frame-dictionary-url"></iframe></div>')
}

insert_dictionary_toggle_functions <- function(){
  glue_data(dictionaries, '
function {{function_name}} { 
$("#sanskrit-dictionary{{iframe_number}}").toggleClass("make-visible"); 
$("#sanskrit-dictionary{{iframe_number}} iframe").toggleClass("make-visible");
}
', .open = "{{", .close = "}}") %>% 
    cat()
  
  cat('function toggleDictionaryURL() { $("#sanskrit-dictionary-url").toggleClass("make-visible"); $("#sanskrit-dictionary-url iframe").toggleClass("make-visible");}\n')
  cat("$('input#dictionary-url').on('propertychange paste keyup',function(){var url = this.value;$('#frame-dictionary-url').attr('src', url);});")
}


initialise_lazy_load <- function(){
  cat('<script src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.3.0/dist/lazyload.min.js"></script>')
  cat('<script>var lazyLoadInstance = new LazyLoad({});</script>')
}



create_overlay_divs <- function(photo_info_tibble){
  # create the divs
  photo_info %>% 
    glue_data('<div id="myNav{{zoomid}}" class="overlay">
<a href="javascript:void(0)" class="closebtn" onclick="closeNav{{zoomid}}()">&times;</a>
<div class="zoomButtonsFullScreen">
<button id="zoomInFullScreen{{zoomid}}">Zoom in</button>
<button id="zoomOutFullScreen{{zoomid}}">Zoom out</button>
<button id="zoomResetFullScreen{{zoomid}}">Reset</button>
</div>
<div class="panzoomContainer overlay-content" id="full{{zoomid}}">
<img data-src="{{photo_path}}" class="img-fluid">
</div>
</div>\n
', .open = "{{", .close = "}}") %>%
    cat()
}