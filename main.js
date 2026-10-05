

// constants for ratio 
const aspectRatioIndex = '1/2';
const aspectRatioForTutors = '1/1.8';
const aspectRatioSessions = '1/1.6';
const aspectRatioProfiles = '1/3';

const mainContent = document.getElementById("mainContent");

const tab = document.getElementById("tab");

mainContent.innerHTML = indexText;
mainContent.style.aspectRatio = aspectRatioIndex;

function indexTextChanger(){

    mainContent.innerHTML = indexText;
    mainContent.style.aspectRatio = aspectRatioIndex;
    window.scrollTo(0, 0);
    tab.style.left = "12.5%";

}

function forTutorsChanger(){
    
    mainContent.innerHTML = forTutorsText;
    mainContent.style.aspectRatio = aspectRatioForTutors;
    window.scrollTo(0, 0);
    tab.style.left = "62.5%";

}

function sessionChanger(){

    mainContent.innerHTML = sessionsText;
    mainContent.style.aspectRatio = aspectRatioSessions;
    window.scrollTo(0, 0);
    tab.style.left = "87.5%";

}

function profileChanger(){

    mainContent.innerHTML = profilesText;
    mainContent.style.aspectRatio = aspectRatioProfiles;
    window.scrollTo(0, 0);
    tab.style.left = "37.5%";

}

