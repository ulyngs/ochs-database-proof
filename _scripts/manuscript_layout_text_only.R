create_content <- function(cols_hide, text_only_version) {
  # create row
  cat("<div class='row manuscript-text-only'>")
  
  # create left column
  cat('<div class="col-sm-3 manuscript-photo">')
  cat('<div class="zoomButtons">')
  cat('<button onclick="toggleDictionary()">Dictionary</button>')
  cat('<button onclick="toggleDictionary2()">Dictionary2</button>')
  cat('<input type="text" id="dictionary-url" placeholder="https://" />')
  cat('<button onclick="toggleDictionaryURL()">Show</button>')
  cat('</div>')
  if(!text_only_version) cat('<h2 class="no-images-notice">No manuscript images available at the moment.</h2>')
  cat("</div>") # close column
  
  cat('<div class="col-sm-9 manuscript-text">')
  
  print( htmltools::tagList(data_text %>% 
                              select(chapter, verse, transliteration, starts_with("translation_"), everything()) %>% 
                            datatable(rownames = FALSE,
                                      extensions = c('ColReorder', 'Buttons'),
                                      filter = 'top',
                                      options = list (
                                        columnDefs = list(list(visible=FALSE, targets=cols_hide)),
                                        lengthMenu = list(c(15, -1), c("15", "All")),
                                        colReorder = TRUE,
                                        dom = 'lBfrtip',
                                        buttons = I('colvis')
                                      ))
                            ) 
         )
  
  cat("</div>") # close column
  
  cat("</div>") # close row
}

create_overlay_functions <- function(){
  cat('<script>')
  cat('function toggleDictionary() { $("#sanskrit-dictionary").toggleClass("make-visible"); $("#sanskrit-dictionary iframe").toggleClass("make-visible");}')
  cat('function toggleDictionary2() { $("#sanskrit-dictionary2").toggleClass("make-visible"); $("#sanskrit-dictionary2 iframe").toggleClass("make-visible");}')
  cat('function toggleDictionaryURL() { $("#sanskrit-dictionary-url").toggleClass("make-visible"); $("#sanskrit-dictionary-url iframe").toggleClass("make-visible");}')
  cat("$('input#dictionary-url').on('propertychange paste keyup',function(){var url = this.value;$('#frame-dictionary-url').attr('src', url);});")
  cat('</script>')
}
