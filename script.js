const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    keyboardNavigation: true
});

document.getElementById('open-eye-gallery')?.addEventListener('click', function(e) {
    e.preventDefault();
    // Etsitään se silmäkuva, joka on oikeasti osa galleriaa (mobiiliversio)
    // ja simuloidaan klikkaus siihen.
    const actualGalleryItem = document.querySelector('.d-lg-none .glightbox');
    if (actualGalleryItem) {
        actualGalleryItem.click();
    }
});


