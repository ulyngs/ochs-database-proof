library(tidyverse)
library(here)
library(googlesheets4)
gs4_deauth()



# grab the meta data from google sheets
bengali_texts_meta <- read_sheet("https://docs.google.com/spreadsheets/d/1En-070H2UbocuY9VtkXbsMSjv3MswAtEjWhJZ5Sxq8s/edit?usp=sharing",
                                sheet = "texts",
                                col_types = "c")

# save it out
bengali_texts_meta %>% 
  write_csv(here("data", "bengali", "texts_meta.csv"))


