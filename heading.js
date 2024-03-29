

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
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                alert(`Portrait Viewport width: ${viewportWidth}px`);
                alert(`Portrait Viewport height: ${viewportHeight}px`);
            } else if (mediaQueryLandscape.matches) {
                // Landscape mode
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                alert(`Landscape Viewport width: ${viewportWidth}px`);
                alert(`Landscape Viewport height: ${viewportHeight}px`);
            }
        }
    
        // Initial check
        handleOrientationChange();
    
        // Listen for orientation changes
        mediaQueryPortrait.addEventListener("change", handleOrientationChange);
        mediaQueryLandscape.addEventListener("change", handleOrientationChange);
    });
    