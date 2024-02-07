const GRID = document.querySelector('.grid')
const BUTTON = document.querySelector('button')
const DEFAULT_GRID_SIZE = 16

createGridElements(DEFAULT_GRID_SIZE)

GRID.addEventListener('mouseover', paintElements)
BUTTON.addEventListener('click', changeGridSize)

function createGridElements(proportion) {
  const gridElementsQuantity = proportion * proportion
  const gridWidth = +getComputedStyle(GRID).width.replace(/\D/g, '')
  const gridElementDimension = gridWidth / proportion

  for (let i = 0; i < gridElementsQuantity; i++) {
    const gridElement = document.createElement('div')

    gridElement.style.cssText = `
    width: ${gridElementDimension}px;
    height: ${gridElementDimension}px;
    border: 1px solid black;
    background: white;
    `
    GRID.append(gridElement)
  }
}

function paintElements(e) {
  randomR = Math.floor(Math.random() * 256)
  randomG = Math.floor(Math.random() * 256)
  randomB = Math.floor(Math.random() * 256)

  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

function changeGridSize(e) {
  gridSize = getGridSize()
  if (gridSize === undefined) return
  GRID.innerHTML = ''
  createGridElements(gridSize)
}

function getGridSize() {
  while (true) {
    let size = prompt('What\'s the size of the Grid?')
    if (size === null) return

    size = +size
    if (isNaN(size)) {
      alert('The size must be a number')
    } else if (size > 100) {
      alert('The limit of the Grid is 100')
    } else if (size < 1) {
      alert('The size of the Grid must be greater than 0')
    } else {
      return size
    }
  }
}