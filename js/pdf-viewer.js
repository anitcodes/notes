function openPdfViewer(pdfUrl, event) {
    event.preventDefault();
    const viewerUrl = `viewer.html?file=${encodeURIComponent(pdfUrl)}`;
    window.location.href = viewerUrl;
}

// Add this to handle PDF links dynamically
document.addEventListener('DOMContentLoaded', function() {
    const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');
    pdfLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            openPdfViewer(this.href, e);
        });
    });
}); 