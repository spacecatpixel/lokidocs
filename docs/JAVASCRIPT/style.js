window.onscroll = function(e) {
    const title = document.getElementsByClassName("md-header-nav__title")[0];
    if (this.oldScroll > this.scrollY) {
        title.setAttribute("data-md-state", "");
    } else if (window.pageYOffset >= 200) {
        title.setAttribute("data-md-state", "active");
    }
    this.oldScroll = this.scrollY;
}