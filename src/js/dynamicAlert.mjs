// Function to load alerts from alerts.json
export async function loadAlerts() {
    try {
      // Fetches the alerts data from the alerts.json file
      const response = await fetch('./alerts.json'); 
      if (!response.ok) {
        throw new Error('Failed to load alerts data');
      }
      const alerts = await response.json();
  
      // Checks if there are any alerts
      if (alerts.length > 0) {
        // Creates the section element for the alert list
        const alertSection = document.createElement('section');
        alertSection.classList.add('alert-list');
  
        // Loops through each alert and build a <p> element
        alerts.forEach(alert => {
          const alertMessage = document.createElement('p');
          alertMessage.textContent = alert.message;
          alertMessage.style.backgroundColor = alert.backgroundColor;
          alertMessage.style.color = alert.textColor;
          
          // Appends each alert to the section
          alertSection.appendChild(alertMessage);
        });
  
        // Prepends the alert section to the main element
        const mainElement = document.querySelector('main');
        if (mainElement) {
          mainElement.prepend(alertSection);
        } else {
          console.error('Main element not found in the document');
        }
      }
    } catch (error) {
      console.error('Error loading alerts:', error);
    }
  }