const titleDisplay = document.getElementById('title')
const finalTitle = 'feminicidio'
const subtitle = "<br />How Puerto Rican Feminists Rewrote the Narrative on Women's Murders"
let titleLetterIndex = 0
const timeoutMs = 500

function writeTitle()
{
  titleDisplay.innerHTML += finalTitle[titleLetterIndex]
  console.log('add a letter', titleLetterIndex)
  ++titleLetterIndex
}

function writeTextLoop() 
{
  if (titleLetterIndex < finalTitle.length)
  {
    writeTitle()
    setTimeout(writeTextLoop, timeoutMs)
  }
  else
  {
    const subtitleDisplay = document.getElementById('subtitle')
    subtitleDisplay.style.visibility = "visible"
  }
}

writeTextLoop()