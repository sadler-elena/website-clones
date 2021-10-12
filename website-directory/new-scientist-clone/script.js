window.onload = function () {
    document.getElementById("defaultOpen").click();
}



function openCategory(evt, categoryName) {
    //Declare variables
    var i, tabcontent, tablinks;

    //Get elements with class="tabcontent" & hide them.
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //Get all elements with class="tablinks" and remove the class "active".
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Show the current tab & add "active" class to the opened tab button.
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += "active";
}