const GRID = document.querySelector('.grid')

createGridElements(20)
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