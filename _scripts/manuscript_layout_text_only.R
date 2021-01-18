source(here::here("_scripts/manuscript_joint_functions.R"))

create_content <- function(cols_hide, text_only_version) {
  # create row
  cat("<div class='row manuscript-text-only'>")
  
  # create left column
  cat('<div class="col-sm-2">')
  
  cat('<div class="zoomButtons">')
  cat('<button onclick="fullWidthTable()">Change table width</button>')
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

create_full_width_function <- function(){
  cat('<script>
function fullWidthTable() {
var tableWidget = document.querySelector(".manuscript-text .datatables");
var table = document.querySelector(".manuscript-text table.display.dataTable.no-footer");
var scrollHead = (".manuscript-text .dataTables_scrollHeadInner");

var currentWidth = tableWidget.style.width;

if (currentWidth !== "100%") {
    tableWidget.style.width = "100%";
    table.style.display = "100%";
    scrollHead.style.display = "100%";
  } else {
    tableWidget.style.width = "960px";
  }
}
</script>')
}
