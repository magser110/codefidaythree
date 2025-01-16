function showModal(message) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.padding = '20px';
    modal.style.backgroundColor = 'white';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modal.innerText = message;
  
    document.body.appendChild(modal);
    setTimeout(() => document.body.removeChild(modal), 3000);
  }
  
  showModal('Hello, this is a custom modal!');
  