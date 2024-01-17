

/*     const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    alert(`Screen width: ${screenWidth}px`);
    alert(`Screen height: ${screenHeight}px`); */
    window.addEventListener("load", () => {
        const mediaQueryPortrait = window.matchMedia("(orientation: portrait)");
        const mediaQueryLandscape = window.matchMedia("(orientation: landscape)");
    
        function handleOrientationChange() {
            // Portrait mode
            if (mediaQueryPortrait.matches) {
                const screenWidth = window.screen.width;
                const screenHeight = window.screen.height;
                alert(`Portrait Screen width: ${screenWidth}px`);
                alert(`Portrait Screen height: ${screenHeight}px`);
            } else if (mediaQueryLandscape.matches) {
                // Landscape mode
                const screenWidth = window.screen.width;
                const screenHeight = window.screen.height;
                alert(`Landscape Screen width: ${screenWidth}px`);
                alert(`Landscape Screen height: ${screenHeight}px`);
            }
        }
    
        // Initial check
        handleOrientationChange();
    
        // Listen for orientation changes
        mediaQueryPortrait.addEventListener("change", handleOrientationChange);
        mediaQueryLandscape.addEventListener("change", handleOrientationChange);
    });
    
