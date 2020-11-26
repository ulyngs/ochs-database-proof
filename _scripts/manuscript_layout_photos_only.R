create_content <- function(photoid, zoomid, photo_path) {
  # create row
  cat("<div class='row manuscript-photo-and-text'>")
  
  # create left column
  cat('<div class="col-sm-9 manuscript-photo">')
  
  cat('<div class="zoomButtons">')
  cat(str_c('<button id="zoomIn', zoomid, '">Zoom in</button>'))
  cat(str_c('<button id="zoomOut', zoomid, '">Zoom out</button>'))
  cat(str_c('<button id="zoomReset', zoomid, '">Reset</button>'))
  cat(str_c('<button onclick="openNav', zoomid, '()">Full screen</button>'))
  cat('<button onclick="toggleDictionary()">Dictionary</button>')
  cat('<button onclick="toggleDictionary2()">Dictionary2</button>')
  cat('<input type="text" id="dictionary-url" placeholder="https://" />')
  cat('<button onclick="toggleDictionaryURL()">Show</button>')
  cat('</div>')
  
  cat(str_c('<div class="panzoomContainer" id="', zoomid, '">'))
  cat(str_c('<img src="', photo_path, '" class="img-fluid">'))
  cat('</div>') # close zoom container
  
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
<img src="{{photo_path}}" class="img-fluid">
</div>
</div>\n
', .open = "{{", .close = "}}") %>%
    cat()
}

create_overlay_functions <- function(photo_info_tibble){
  cat('<script>')
  cat('function toggleDictionary() { $("#sanskrit-dictionary").toggleClass("make-visible"); $("#sanskrit-dictionary iframe").toggleClass("make-visible");}\n')
  cat('function toggleDictionary2() { $("#sanskrit-dictionary2").toggleClass("make-visible"); $("#sanskrit-dictionary2 iframe").toggleClass("make-visible");}\n')
  cat('function toggleDictionaryURL() { $("#sanskrit-dictionary-url").toggleClass("make-visible"); $("#sanskrit-dictionary-url iframe").toggleClass("make-visible");}\n')
  cat("$('input#dictionary-url').on('propertychange paste keyup',function(){var url = this.value;$('#frame-dictionary-url').attr('src', url);});")
  cat('</script>')
  cat('<script>')
  
  photo_info_tibble %>% 
    glue_data('
function openNav{{zoomid}}() {
document.getElementById("myNav{{zoomid}}").style.width = "100%";
}
function closeNav{{zoomid}}() {
document.getElementById("myNav{{zoomid}}").style.width = "0%";
}
', .open = "{{", .close = "}}") %>%
    cat()
  
  cat('</script>')
}