source(here::here("_scripts/manuscript_joint_functions.R"))

create_content <- function(photoid, photo_path_medium, photo_size_medium, photo_path_high, photo_size_high, zoomid, cols_hide) {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-6">')
  
  cat('<div class="zoomButtons">')
  insert_zoom_buttons(zoomid)
  insert_dictionary_dropdown()
  cat(str_c('<button onclick="resetTransform', zoomid, '()">Reset text</button>'))
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
  cat("<script src='/js/panzoom.js'></script>")
  
  cat('<script>')
  
  photo_info_tibble %>% 
    glue_data('
const elem{zoomid} = document.querySelector("#{zoomid}");
const panzoom{zoomid} = Panzoom(elem{zoomid});
const zoomInButton{zoomid} = document.querySelector("#zoomIn{zoomid}");
const zoomOutButton{zoomid} = document.querySelector("#zoomOut{zoomid}");
const resetButton{zoomid} = document.querySelector("#zoomReset{zoomid}");
zoomInButton{zoomid}.addEventListener("click", panzoom{zoomid}.zoomIn);
zoomOutButton{zoomid}.addEventListener("click", panzoom{zoomid}.zoomOut);
resetButton{zoomid}.addEventListener("click", panzoom{zoomid}.reset);
const elemFull{zoomid} = document.querySelector("#full{zoomid}");
const panzoomFull{zoomid} = Panzoom(elemFull{zoomid});
const zoomInButtonFull{zoomid} = document.querySelector("#zoomInFullScreen{zoomid}");
const zoomOutButtonFull{zoomid} = document.querySelector("#zoomOutFullScreen{zoomid}");
const resetButtonFull{zoomid} = document.querySelector("#zoomResetFullScreen{zoomid}");
zoomInButtonFull{zoomid}.addEventListener("click", panzoomFull{zoomid}.zoomIn);
zoomOutButtonFull{zoomid}.addEventListener("click", panzoomFull{zoomid}.zoomOut);
resetButtonFull{zoomid}.addEventListener("click", panzoomFull{zoomid}.reset);\n
') %>% 
    cat()
  
  cat('</script>')
  
  # enabling zooming of text
  cat('<script src="https://unpkg.com/panzoom@9.2.4/dist/panzoom.min.js"></script>')
  
  cat('<script>')
  
  photo_info_tibble %>%
    glue_data('
var element{{zoomid}} = document.querySelector("#{{zoomid}}DT");\n
var instance{{zoomid}} = panzoom(element{{zoomid}}, { zoomDoubleClickSpeed: 1, filterKey: function(/* e, dx, dy, dz */) { return true; }, beforeWheel: function(e) { var shouldIgnore = !e.altKey; return shouldIgnore; }, beforeMouseDown: function(e) { var shouldIgnore = !e.altKey; return shouldIgnore; } });\n
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
var instance{{zoomid}} = panzoom(element{{zoomid}}, { zoomDoubleClickSpeed: 1, filterKey: function(/* e, dx, dy, dz */) { return true; }, beforeWheel: function(e) { var shouldIgnore = !e.altKey; return shouldIgnore; }, beforeMouseDown: function(e) { var shouldIgnore = !e.altKey; return shouldIgnore; } });\n
showHeader{{zoomid}}()
}

function showText{{zoomid}}() {$("#{{zoomid}}DT").toggleClass("bring-to-foreground");}

function openNav{{zoomid}}() {
document.getElementById("myNav{{zoomid}}").style.width = "100%";
var image = document.querySelector("#myNav{{zoomid}} img");
image.src = image.getAttribute("data-src");
}

function closeNav{{zoomid}}() {
document.getElementById("myNav{{zoomid}}").style.width = "0%";
resetTransform{{zoomid}}()
}
', .open = "{{", .close = "}}") %>%
    cat()
  
  cat('</script>')
}