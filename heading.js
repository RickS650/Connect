
window.addEventListener("load", () => {
/*     const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    alert(`Screen width: ${screenWidth}px`);
    alert(`Screen height: ${screenHeight}px`); */

const mediaQueryPortrait = window.matchMedia("(orientation: portrait)");
const mediaQueryLandscape = window.matchMedia("(orientation: landscape)");

function handleOrientationChange() {
  if (mediaQueryPortrait.matches) {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    alert('In portrait');
    alert(`Screen width: ${mediaQueryPortrait.screenWidth}px`);
    alert(`Screen height: ${mediaQueryPortrait.screenHeight}px`);
  } else if (mediaQueryLandscape.matches) {
    // Landscape mode
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    alert(`Screen width: ${screenWidth}px`);
    alert(`Screen height: ${screenHeight}px`);
  }
}

// Initial check
handleOrientationChange();

// Listen for orientation changes
mediaQueryPortrait.addEventListener("change", handleOrientationChange);
mediaQueryLandscape.addEventListener("change", handleOrientationChange);
});