document.addEventListener('DOMContentLoaded', function () {
    // Function to handle hash changes
    function handleHashChange() {
        var hash = window.location.hash.substring(1); // Get the hash without the '#'
        var element = document.getElementById(hash);

        // Scroll to the target element
        if (element) {
            element.scrollIntoView();
        }
    }

    // Event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Initial handling of hash (when the page loads)
    handleHashChange();
});
