/* JS Objectives:
- Conditional Dropdowns (only appear if specific selection is made).
- eg. If 'Ghost Sighting' is chosen, show a list of ghosts to pick from.
- WCAG keyboard navigation.
- Data captured and stored correctly.*/

//Conditional Dropdown:

// function to update hidden elements based on a selector's value.
function updateHiddenElements()
{
//get the value of the currently selected option in our selector.
    const incident = document.getElementById("specifyIncident").value;

//get the content we want to hide/show.
    const ghostDiv = document.getElementById("ghostDiv");

    const creatureDiv = document.getElementById("creatureDiv")

//hide content by default
    ghostDiv.style.display = "none";
    creatureDiv.style.display = "none";

//if the selcted option is "ghost sighting", show the hidden content by setting it's display to "block".
    if(incident === "ghostSighting")
    {
        ghostDiv.style.display = "block";
        
    } else if (incident === "creatureSighting") {
        creatureDiv.style.display = "block";
    }
}

/*call the function on page load so that the content loads in the correct state.
listeners wait for events to happen, and then call events when those events
happen. in this case, we're waiting for the page to finish loading.
in order to call the update function once the page loads, and then again when
the selector changes.*/

document.addEventListener("DOMContentLoaded", () => {
    updateHiddenElements();
    document.getElementById("specifyIncident").addEventListener("change", updateHiddenElements);
});





