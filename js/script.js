// Portfolio JavaScript Functions

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add animations on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Add a slight reveal animation to sections when they come into view
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    section.classList.add('section-hidden');
    observer.observe(section);
  });
  
  // Add tooltip effect for certification links
  const certLinks = document.querySelectorAll('.certification-link');
  certLinks.forEach(link => {
    // Add "Click to view certificate" text on hover
    const tooltipText = document.createElement('span');
    tooltipText.textContent = 'Click to view certificate';
    tooltipText.className = 'tooltip-text';
    link.appendChild(tooltipText);
    
    // Add visual feedback on hover
    link.addEventListener('mouseenter', () => {
      tooltipText.style.opacity = '1';
    });
    
    link.addEventListener('mouseleave', () => {
      tooltipText.style.opacity = '0';
    });
  });
}); 