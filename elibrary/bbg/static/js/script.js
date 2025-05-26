document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const loginBtn = document.getElementById('loginBtn');
  const heroLoginBtn = document.getElementById('heroLoginBtn');
  const booksBtn = document.getElementById('booksBtn');
  const heroTitle = document.querySelector('.hero-title');
  const heroDescription = document.querySelector('.hero-description');
  const heroButtons = document.querySelector('.hero-buttons');
  const heroImage = document.querySelector('.hero-image');
  const ctaTitle = document.querySelector('.cta-title');

  // Add animation classes
  heroTitle.classList.add('fade-in');
  heroDescription.classList.add('fade-in');
  heroButtons.classList.add('fade-in');
  heroImage.classList.add('slide-in');
  
  // Mobile Navigation Toggle
  navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      const icon = navToggle.querySelector('i');
      icon.classList.toggle('ri-menu-line');
      icon.classList.toggle('ri-close-line');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
      if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
          navMenu.classList.remove('active');
          const icon = navToggle.querySelector('i');
          icon.classList.add('ri-menu-line');
          icon.classList.remove('ri-close-line');
      }
  });

  // Login functionality
  let isLoggedIn = false;

  function toggleLogin() {
      isLoggedIn = !isLoggedIn;
      const loginText = isLoggedIn ? 'Logout' : 'Login';
      loginBtn.querySelector('span').textContent = loginText;
      heroLoginBtn.textContent = loginText;
      
      // Show welcome message
      if (isLoggedIn) {
          showNotification('Welcome back! 👋');
      } else {
          showNotification('Successfully logged out');
      }
  }

  loginBtn.addEventListener('click', toggleLogin);
  heroLoginBtn.addEventListener('click', toggleLogin);

  // Books Available button
  booksBtn.addEventListener('click', function() {
      showNotification('Loading available books...');
      // Simulate loading books
      setTimeout(() => {
          showNotification('Feature coming soon!');
      }, 1500);
  });

  // Notification system
  function showNotification(message) {
      const notification = document.createElement('div');
      notification.className = 'notification';
      notification.style.cssText = `
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: var(--purple-gradient);
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 1000;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
      `;
      notification.textContent = message;
      document.body.appendChild(notification);

      // Animate in
      setTimeout(() => {
          notification.style.opacity = '1';
          notification.style.transform = 'translateY(0)';
      }, 100);

      // Remove after 3 seconds
      setTimeout(() => {
          notification.style.opacity = '0';
          notification.style.transform = 'translateY(20px)';
          setTimeout(() => notification.remove(), 300);
      }, 3000);
  }

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
              navMenu.classList.remove('active');
          }
      });
  });

  // Hover effects for navigation items
  document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-2px)';
      });
      
      item.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
      });
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.1 });

  // Observe elements
  document.querySelectorAll('.fade-in, .slide-in').forEach(el => observer.observe(el));
});