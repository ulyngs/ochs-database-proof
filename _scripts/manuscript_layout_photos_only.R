create_content <- function(photoid, zoomid, photo_path) {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-9">')
  
  cat('<div class="zoomButtons">')
  cat(str_c('<button id="zoomIn', zoomid, '">Zoom in</button>'))
  cat(str_c('<button id="zoomOut', zoomid, '">Zoom out</button>'))
  cat(str_c('<button id="zoomReset', zoomid, '">Reset</button>'))
  cat(str_c('<button onclick="openNav', zoomid, '()">Full screen</button>'))
  insert_dictionary_dropdown()
  cat('</div>')
  
  cat('<div class="row manuscript-photo"><div class="col-sm-12">')
  cat(str_c('<div class="panzoomContainer" id="', zoomid, '">'))
  cat(str_c('<img data-src="', photo_path, '" class="img-fluid lazy">'))
  cat('</div>') # close zoom container
  cat("</div></div>") # close container for photo
  
  cat("</div>") # close column
  
  cat('<div class="col-sm-3 manuscript-text">')
  cat('<h2 class="no-text-notice">No transliteration or translation available at the moment.</h2>')
  cat("</div>") # close column
  
  cat("</div>") # close row
}

initiate_zoom_effect <- function(photo_info_tibble) {
  cat("<script src='/js/panzoom.js'></script>")
  
  # create row
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
}

create_overlay_functions <- function(photo_info_tibble){
  cat('<script>')
  insert_dictionary_toggle_functions()
  cat('</script>')
  cat('<script>')
  
  photo_info_tibble %>% 
    glue_data('
function openNav{{zoomid}}() {
document.getElementById("myNav{{zoomid}}").style.width = "100%";
var image = document.querySelector("#myNav{{zoomid}} img");
image.src = image.getAttribute("data-src");
}

function closeNav{{zoomid}}() {
document.getElementById("myNav{{zoomid}}").style.width = "0%";
}
', .open = "{{", .close = "}}") %>%
    cat()
  
  cat('</script>')
}