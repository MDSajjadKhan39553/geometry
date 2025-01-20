//------------------ get  function 
function getInputValues(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText); 
    return inputValue; 
}
// --------------- set function
function setOutputValues(outputFieldId, area){
    const output = document.getElementById(outputFieldId);
    output.innerText = area;
}
// ---------------triangle function
function calculateTriangle(){
    const base = getInputValues('triangle-base');
    const height = getInputValues('triangle-height');
    const area = 0.5 * base * height;
    setOutputValues('triangle-area', area);
}    
// ---------------rectangle function 
function calculateRectangle(){
    const width = getInputValues('rectangle-width');
    const length = getInputValues('rectangle-length');
    const area = width * length;
    setOutputValues('rectangle-area', area);
}
//--------------- parallelogram functions
function calculateParallelogram(){
    const base = getInputValues('parallelogram-base');
    const height = getInputValues('parallelogram-height');
    const area = base * height;
    setOutputValues('parallelogram-area', area);
}
// ---------------Rhombus function
function calculateRhombus(){
    const depth1 = getInputValues('rhombus-depth-1');
    const depth2 = getInputValues('rhombus-depth-2');
    const area = depth1 * depth2;
    setOutputValues('rhombus-area', area);
}
//------------------Pantagon function
function calculatePentagon(){
    const parameter = getInputValues('pentagon-parameter');
    const apothem = getInputValues('pentagon-apothem');
    const area = 0.5 * parameter * apothem;
    setOutputValues('pentagon-area', area);
}
//-----------------ellipse function
function calculateEllipse(){
    const pie = getInputValues('ellipse-pie');
    const ab = getInputValues('ellipse-ab');
    const area =  pie * ab;
    setOutputValues('ellipse-area', area);
}