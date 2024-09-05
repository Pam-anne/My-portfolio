const mobileNav = () => {
    const headerBtn = document.querySelector('.header_bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav_link');  // Fix selector

    // State
    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';  // Disable scroll when mobile menu is open
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';  // Re-enable scroll
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';  // Re-enable scroll when a link is clicked
        });
    });
};

export default mobileNav;
