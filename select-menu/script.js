var selectField=document.getElementById("select-field");
var selectText=document.getElementById("select-text");
var options=document.getElementsByClassName("option");
var list=document.getElementById("list");
var ArrowIcon=document.getElementById("ArrowIcon")
// Add click event to each option
for (let i = 0; i < options.length; i++) {
    options[i].onclick = function () {
        // Log clicked element
        console.log(options[i]); 

        // Update the selectText with the selected option's text content
        selectText.innerText = options[i].querySelector("p").textContent;

        // Hide the dropdown list after selection
        list.classList.add("hide");
        ArrowIcon.classList.toggle("rotate");
    };
}
selectField.onclick=function()
{
    list.classList.toggle("hide");
    ArrowIcon.classList.toggle("rotate");

}
