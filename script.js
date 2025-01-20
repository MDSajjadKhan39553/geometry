// triangle function
function triangleArea(){
    // base value 
    const triangelBaseInput = document.getElementById("triangle-base")
    const triangleBaseText = triangelBaseInput.value
    const base = parseFloat(triangleBaseText)
    // Hesight value 
    const triangelHeightInput = document.getElementById("triangle-height")
    const triangleHeightText = triangelHeightInput.value
    const height = parseFloat(triangleHeightText)
    // Area calculation
    const area = 0.5 * base * height;
    console.log(area)
    document.getElementById("triangle-area").innerText = area;

   }
// rectangle function
function rectangleArea(){
    const rectangleWidthInput = document.getElementById("rectangle-width")
    const rectangleWidthText = rectangleWidthInput.value
    const width = parseFloat(rectangleWidthText)

    // length value 
    const rectangleLenthInput = document.getElementById("rectangle-length")
    const rectangleLenthText = rectangleLenthInput.value
    const length = parseFloat(rectangleLenthText)

    // Area calculation
    const area = width * length;
    document.getElementById("rectangle-area").innerText = area;
}
