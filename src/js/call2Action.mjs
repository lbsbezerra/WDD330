// Checks if the visitor is new
function isFirstTimeVisitor() {
    return !localStorage.getItem("hasVisited");
}
  
// Marks the visitor as not new
function setVisitorAsReturning() {
    localStorage.setItem("hasVisited", "true");
}
  
// Creates and shows the call-to-action banner/modal
function showCallToAction() {
    const modal = document.createElement("div");
    modal.id = "call-to-action-modal";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";
  
    const content = `
      <div style="background: #fff; padding: 20px; text-align: center; border-radius: 10px; max-width: 500px;">
        <h2>Welcome to Our Site!</h2>
        <p>Register now to get 75% off your next order!</p>
        <button id="register-now" style="background: #c861ff; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Register Now</button>
        <button id="dismiss-cta" style="margin-top: 10px; background: none; color: #333; border: none; cursor: pointer;">No, thanks</button>
      </div>
    `;
  
    modal.innerHTML = content;
    document.body.appendChild(modal);
  
    // Adds event listeners to buttons
    document.getElementById("register-now").addEventListener("click", () => {
      alert("Redirecting to registration...");
      setVisitorAsReturning();
      modal.remove();
    });
  
    document.getElementById("dismiss-cta").addEventListener("click", () => {
      setVisitorAsReturning();
      modal.remove();
    });
}
  
// Initializes the call-to-action
export function initCallToAction() {
    if (isFirstTimeVisitor()) {
      showCallToAction();
    }
}