var input = document.querySelector("input")
function insertKey(insert){
    input.value += insert
}
function clearVal(){
    input.value = ""
}
function deleteVal(){
    input.value= input.value.slice(0,length-1)
}
function evalVal(){
    input.value = eval(input.value)
}

