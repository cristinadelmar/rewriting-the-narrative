# How Puerto Rican Feminists Rewrote the Narrative on Women's Murders
## Project 3
This is my submission for the LEDE Program’s third project. 

I focus on the changes in narrative in Puerto Rico around femicides, or the murder of women by their partners or ex-partners. A few years ago, Puerto Rican meadia rarely used the word "feminicidio" or feminicide to describe the killing of a woman for gender reasons. Feminist activism in recent years have been pushing for a change in narrative so this crimes can be counted and a prevention plan can be implemented by the government. 

For the project, I wanted to document if there has been any change in the way media refers to this crimes by counting the frequency in the use of the word. 

My goal was to put in practice scraping and storytelling with scrollama.

I used Datawrapper for the chart and Scrollama for the timeline.

The typing effect on the headline was created using Javascript.

The story webpage is here: https://cristinadelmar.github.io/rewriting-the-narrative/

## Data Collection Process

I scraped two news websites, El Vocero and NotiCel. For both, I used BeautifulSoup on their search engines to identify all the articles that showed as results when typing the word “feminicidio”. 

|  Data                 | File                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| Scraped from NotiCel  | [Output NotiCel](https://github.com/cristinadelmar/rewriting-the-narrative/blob/main/NotiCel.ipynb)          |
| Scraped from El Vocero| [Output_ElVocero](https://github.com/cristinadelmar/rewriting-the-narrative/blob/main/output_ElVocero.csv)    |

## Data Analysis Process

After having scraped, I created a DataFrame for each one to filter how many times the word “feminicidio” was used in a headline or in the preview of the content that shows up in the results page.

## Skills learned

I started experimenting with Javascript for a project and was able to include the effect I had in mind. This was also the first time I scraped a website and used Scrollama for a project. 

## Things I would’ve liked to do

I would have liked to scrape at least two more news website so the data could be more solid. It seems I'll have to apply browser automation. I decided to stick with the two I could scrape in order to submit before deadline, but I'll be making updates to include more data.

I'd also have liked to embellish the chart in Illustrator. That's a skill I need to improve for the next projects. 




 
