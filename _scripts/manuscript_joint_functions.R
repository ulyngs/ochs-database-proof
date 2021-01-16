library(magrittr)
library(dplyr)
library(glue)

## ZOOM BUTTONS ##
insert_zoom_buttons <- function(zoomid){
  glue('<button id="zoomIn{zoomid}"><i class="fa fa-search-plus"></i></button>',
       '<button id="zoomOut{zoomid}"><i class="fa fa-search-minus"></i></button>',
       '<button id="zoomReset{zoomid}">Reset zoom</button>',
       '<button onclick="openNav{zoomid}()">Full screen</button>',
       '<button onclick="highRes{zoomid}()">Resolution</button>'
  ) %>% cat()
}

## INSERT MANUSCRIPT PHOTO ##
insert_manuscript_photo <- function(zoomid, photo_path_medium, photo_size_medium, photo_path_high, photo_size_high, photoid){
  glue('<div class="row manuscript-photo"><div class="col-sm-12">',
       '<div class="panzoomContainer" id="{zoomid}">',
       '<p class="medium-image-size">{photo_size_medium}</p>',
       '<p class="high-image-size">{photo_size_high}</p>',
       '<img data-src-md-res="{photo_path_medium}" data-src-high-res="{photo_path_high}" class="img-fluid lazy">',
       '</div>',
       '<div class="photo-title"><p>{photoid}</p></div>',
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
  
  # iterates over the dictionaries and insert a button for each
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
  cat('<script>var lazyLoadInstance = new LazyLoad({data_src: "src-md-res"});</script>')
}



create_overlay_divs <- function(photo_info_tibble, hasText = FALSE){
  # create the divs
  first_part <- photo_info_tibble %>% 
    glue_data('<div id="myNav{zoomid}" class="overlay">
<a href="javascript:void(0)" class="closebtn" onclick="closeNav{zoomid}()">&times;</a>
<div class="zoomButtonsFullScreen">
<button id="zoomInFullScreen{zoomid}">Zoom in</button>
<button id="zoomOutFullScreen{zoomid}">Zoom out</button>
<button id="zoomResetFullScreen{zoomid}">Reset</button>
<button onclick="highResFull{zoomid}()">Resolution</button>')
  
  text_button <- photo_info_tibble %>% 
    glue_data('<button class="showTextbtn" onclick="showText{zoomid}()">Show/hide text</button>')
  
  second_part <- photo_info_tibble %>% 
    glue_data('</div>
<div class="panzoomContainer overlay-content" id="full{zoomid}">
<p class="medium-image-size-overlay">{photo_size_medium}</p>
<p class="high-image-size-overlay">{photo_size_high}</p>
<img data-src-md-res="{photo_path_medium}" data-src-high-res="{photo_path_high}" class="img-fluid">
</div>
</div>\n')
  
  if (hasText){
    paste(first_part, text_button, second_part) %>% cat() 
  } else {
    paste(first_part, second_part) %>% cat() 
  }
}

create_high_res_function <- function(photo_info_tibble){
  photo_info_tibble %>% 
    glue_data('
<script>
function highRes{{zoomid}}() {
var image = document.querySelector("#{{zoomid}} img");

if (image.src === image.getAttribute("data-src-md-res")) {
    image.src = image.getAttribute("data-src-high-res");
    document.querySelector("#{{zoomid}} .medium-image-size").style.display = "none";
    document.querySelector("#{{zoomid}} .high-image-size").style.display = "block";
  } else {
    image.src = image.getAttribute("data-src-md-res");
    document.querySelector("#{{zoomid}} .medium-image-size").style.display = "block";
    document.querySelector("#{{zoomid}} .high-image-size").style.display = "none";
  }
}

function highResFull{{zoomid}}() {
var image = document.querySelector("#myNav{{zoomid}} img");

if (image.src === image.getAttribute("data-src-md-res")) {
    image.src = image.getAttribute("data-src-high-res");
    document.querySelector("#myNav{{zoomid}} .medium-image-size-overlay").style.display = "none";
    document.querySelector("#myNav{{zoomid}} .high-image-size-overlay").style.display = "block";
  } else {
    image.src = image.getAttribute("data-src-md-res");
    document.querySelector("#myNav{{zoomid}} .medium-image-size-overlay").style.display = "block";
    document.querySelector("#myNav{{zoomid}} .high-image-size-overlay").style.display = "none";
  }
}
</script>
              ', .open = "{{", .close = "}}") %>% cat()
}


openAndCloseFullScreen <- function(photo_info_tibble){
  photo_info_tibble %>% 
    glue_data('
function openNav{{zoomid}}() {
document.getElementById("myNav{{zoomid}}").style.width = "100%";
var image = document.querySelector("#myNav{{zoomid}} img");
image.src = image.getAttribute("data-src-md-res");
}

function closeNav{{zoomid}}() {
document.getElementById("myNav{{zoomid}}").style.width = "0%";
}
', .open = "{{", .close = "}}") %>%
    cat()
}
