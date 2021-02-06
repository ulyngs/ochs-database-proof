library(magrittr)
library(dplyr)
library(glue)

## ZOOM BUTTONS ##
insert_zoom_buttons <- function(){
  glue('
<button class="manuscript-photo-button" id="zoomIn"><i class="fa fa-search-plus"></i></button>
<button class="manuscript-photo-button" id="zoomOut"><i class="fa fa-search-minus"></i></button>
<button class="manuscript-photo-button" id="zoomReset">Reset image</button>
<button class="manuscript-photo-button" onclick="highRes()">Resolution</button>
<button class="manuscript-photo-button" onclick="openNav()">Full screen</button>
') %>% knitr::raw_html() %>% cat()
}

insert_download_button <- function(photo_path_high){
  glue('<a href="{photo_path_high}" data-src="{photo_path_high}" role="button" class="manuscript-photo-button" download><i class="fa fa-download"></i></a>') %>% cat()
}

## INSERT MANUSCRIPT PHOTO ##
insert_manuscript_photo <- function(photo_path_medium, photo_size_medium, photo_path_high, photo_size_high, photoid){
  glue('
<div class="row manuscript-photo">
  <div class="col-sm-12">
    <div class="panzoomContainer" id="panzoomManuscriptPhoto">
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
                                   download = FALSE){
  print( htmltools::tagList(datatable(df,
                                      plugins = 'accent-neutralise',
                                      elementId = "manuscript-text-DT",
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
}


initialise_lazy_load <- function(){
  cat('<script src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.3.0/dist/lazyload.min.js"></script>')
  cat('<script>var lazyLoadInstance = new LazyLoad({data_src: "src-md-res"});</script>')
}



create_high_res_function <- function(photo_info_tibble){
  photo_info_tibble %>% 
    glue_data('
<script>
function highRes() {
var image = document.querySelector("#panzoomManuscriptPhoto img");

if (image.src === image.getAttribute("data-src-md-res")) {
    image.src = image.getAttribute("data-src-high-res");
    document.querySelector("#panzoomManuscriptPhoto .medium-image-size").style.display = "none";
    document.querySelector("#panzoomManuscriptPhoto .high-image-size").style.display = "block";
  } else {
    image.src = image.getAttribute("data-src-md-res");
    document.querySelector("#panzoomManuscriptPhoto .medium-image-size").style.display = "block";
    document.querySelector("#panzoomManuscriptPhoto .high-image-size").style.display = "none";
  }
}

function highResFull() {
var image = document.querySelector("#myNav img");

if (image.src === image.getAttribute("data-src-md-res")) {
    image.src = image.getAttribute("data-src-high-res");
    document.querySelector("#myNav .medium-image-size-overlay").style.display = "none";
    document.querySelector("#myNav .high-image-size-overlay").style.display = "block";
  } else {
    image.src = image.getAttribute("data-src-md-res");
    document.querySelector("#myNav .medium-image-size-overlay").style.display = "block";
    document.querySelector("#myNav .high-image-size-overlay").style.display = "none";
  }
}
</script>
              ', .open = "{{", .close = "}}") %>% cat()
}


