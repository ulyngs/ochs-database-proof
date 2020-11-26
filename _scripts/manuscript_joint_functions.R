library(magrittr)
library(dplyr)
library(glue)

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
