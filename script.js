document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        const markdownContent = e.target.result;
        const htmlContent = marked(markdownContent);
        document.getElementById('markdownContent').innerHTML = htmlContent;
    };

    reader.readAsText(file);
});
