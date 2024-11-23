// Checks if the visitor is new
function isFirstTimeVisitor() {
    return !localStorage.getItem("hasVisited");
}
  
// Marks the visitor as not new
function setVisitorAsReturning() {
    localStorage.setItem("hasVisited", "true");
}
  
