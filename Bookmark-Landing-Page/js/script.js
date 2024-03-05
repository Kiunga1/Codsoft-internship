//Function to toggle overlay visibility
function showOverlay() {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('overlay').classList.add('Slide-from-right');
}

function hideOverlay() {
    document.getElementById('overlay').style.display='none';
}

//function to toggle Feature items visibility
function toggleFeature (featureId) {
    let feature = document.getElementById(featureId);
    if (feature.classList.contains('hidden')){
        //show the feature
        feature.classList.remove('hidden');
    } else {
        //Hide feature
        feature.classList.add ('hidden');
    }
}