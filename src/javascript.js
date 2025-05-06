
function handleNav() {
    let nav = document.getElementById("nav");
    if (nav.children[1].classList.contains("hidden")) {
        // Closed
        nav.classList.add("bg-black/85");
        nav.classList.remove("bg-transparent");

        nav.children[1].classList.remove("hidden");
        nav.children[2].classList.remove("hidden");
        nav.children[3].classList.remove("hidden");
        nav.children[4].classList.remove("hidden");
        nav.children[5].classList.remove("hidden");
    } else {
        nav.classList.remove("bg-black/85");
        nav.classList.add("bg-transparent");

        nav.children[1].classList.add("hidden");
        nav.children[2].classList.add("hidden");
        nav.children[3].classList.add("hidden");
        nav.children[4].classList.add("hidden");
        nav.children[5].classList.add("hidden");
    }
}
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'cs',  // Czech as base language
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        includedLanguages: 'en,de,ru,pl,cs,fr' // Common languages for a Czech business
    }, 'google_translate_element');
    
    // Apply post-translation fixes
    applyTranslateFixes();
}

function applyTranslateFixes() {
    // Wait for Google Translate to load
    setTimeout(function() {
        // Remove Google's translation bar
        var gtBanner = document.querySelector('.skiptranslate');
        if (gtBanner) {
            gtBanner.style.display = 'none';
        }
        
        // Fix the body position
        document.body.style.top = '0';
        document.body.style.position = 'static';
        
        // Create a MutationObserver to keep fixing styles if Google modifies them
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.target === document.body && mutation.attributeName === 'style') {
                    document.body.style.top = '0';
                    document.body.style.position = 'static';
                }
            });
        });
        
        // Start observing the document body for style changes
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['style']
        });
        
    }, 100);
}