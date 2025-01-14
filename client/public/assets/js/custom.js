const handleOffcanvasClose = () => {
  // Close the offcanvas using Bootstrap's JavaScript API
  const offcanvasElement = document.getElementById("offcanvasNavbar");
  const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
  if (offcanvasInstance) {
    offcanvasInstance.hide();
  }
};
