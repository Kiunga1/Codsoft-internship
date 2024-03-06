//Function to toggle overlay visibility
function showOverlay() {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('overlay').classList.add('Slide-from-right');
}

function hideOverlay() {
    document.getElementById('overlay').style.display='none';
}

//function to toggle Feature items visibility
const toggleFeature = (featureId) => {
    let feature = document.getElementById(featureId);
    //get all feature elements and loop through them 
    let allFeatures = document.querySelectorAll('.feature');
    
    allFeatures.forEach(item =>{ 
        //check for feature that's not being toggled and hide the feature
        if (item.id !== featureId) {
            item.classList.add('hidden');
        }
    });
    //Toggle visibility of selected feature
    feature.classList.toggle('hidden');
}

// Function to show the first feature initially when the page loads
const showFirstFeature = () => {
    const firstFeatureId = document.querySelectorAll('.feature')[0].id;
    toggleFeature(firstFeatureId);
};

// Event listener to call the function to show the first feature when the page loads
document.addEventListener("DOMContentLoaded", showFirstFeature);