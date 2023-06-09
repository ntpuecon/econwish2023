googlesheets4::read_sheet(
    "https://docs.google.com/spreadsheets/d/18WNH5ckkq1a-iPpGREjwgyW3Cbb51YZ6qqFGyyrNfD8/edit#gid=1991794251",
    "ValidList"
) -> sh

sh |>
 dplyr::filter()