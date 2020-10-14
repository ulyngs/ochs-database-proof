create_content <- function(photoid, zoomid, photo_path, cols_hide) {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-6 manuscript-photo">')
  
  cat('<div class="zoomButtons">')
  cat(str_c('<button id="zoomIn', zoomid, '"><i class="fa fa-search-plus"></i></button>'))
  cat(str_c('<button id="zoomOut', zoomid, '"><i class="fa fa-search-minus"></i></button>'))
  cat(str_c('<button id="zoomReset', zoomid, '">Reset zoom</button>'))
  cat(str_c('<button onclick="hideHeader()">Hide header</button>'))
  cat(str_c('<button onclick="resetTransform()">Reset text</button>'))
  cat('</div>')
  
  cat(str_c('<div class="panzoomContainer" id="', zoomid, '">'))
  cat(str_c('<img src="', photo_path, '" class="img-fluid">'))
  cat('</div>') # close zoom container
  
  cat("</div>") # close column
  
  cat('<div class="col-sm-6 manuscript-text">')
  
  current_table <- data_text %>% 
    filter(photo == photoid) %>% 
    select(-photo) %>% 
    select(chapter, verse, transliteration, starts_with("translation_"), everything())
  
  print( htmltools::tagList(datatable(current_table,
                                      elementId = str_c(zoomid, "DT"),
                                      rownames = FALSE, 
                                      escape = FALSE,
                                      class = "row-border",
                                      extensions = c('ColReorder', 'Buttons'),
                                      options = list(
                                        dom = 'Bfrtip',
                                        buttons = I('colvis'),
                                        colReorder = TRUE,
                                        scrollY = '600px',
                                        scrollX = TRUE,
                                        paging = FALSE,
                                        info = FALSE,
                                        columnDefs = list(list(visible=FALSE, targets=cols_hide))))) )
  
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
resetButton{zoomid}.addEventListener("click", panzoom{zoomid}.reset);\n
') %>% 
    cat()
  
  cat('</script>')
  
  # enabling zooming of text
  cat('<script src="https://unpkg.com/panzoom@9.2.4/dist/panzoom.min.js"></script>')
  
  cat('<script>')
  
  photo_info_tibble %>%
    glue_data('
var element{{zoomid}} = document.querySelector("#{{zoomid}}DT");\n
var instance = panzoom(element{{zoomid}}, { zoomDoubleClickSpeed: 1, filterKey: function(/* e, dx, dy, dz */) { return true; }, beforeWheel: function(e) { var shouldIgnore = !e.altKey; return shouldIgnore; }, beforeMouseDown: function(e) { var shouldIgnore = !e.altKey; return shouldIgnore; } });\n
', .open = "{{", .close = "}}") %>%
    cat()
  
  # create function to hide text header
  cat('function hideHeader() {$(".dataTables_scrollHead").toggleClass("hide-on-pan"); $(".dt-buttons").toggleClass("hide-on-pan");$(".dataTables_filter").toggleClass("hide-on-pan");}')
  
  # create function to reset text position
  cat('function resetTransform() { var el = document.querySelectorAll(".html-widget"); for (var i = 0; i < el.length; i++) { el[i].style.transform = "matrix(1, 0, 0, 1, 0, 0)"; } }')
  
  cat('</script>')
}