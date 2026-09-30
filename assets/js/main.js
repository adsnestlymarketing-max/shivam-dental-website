/**
 * Shivam Dental & Maxillofacial Centre
 * Enterprise Frontend Application Logic
 * 
 * Modular components:
 * - Navbar Scroll & Mobile Offcanvas Drawer
 * - Dynamic URL Parameter Binding for Specialist/Service Routing
 * - WhatsApp Form Engine with input sanitization and verification
 * - Accessible Toast Notifications
 * - Smooth Scroll & Interactive UI Animations
 */

(function () {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', () => {
    App.init();
  });

  const App = {
    init() {
      this.initNavbar();
      this.initEnquiryForms();
      this.handleUrlParameters();
      this.initCurrentYear();
      this.initSmoothScroll();
    },

    /**
     * Navigation bar scroll elevation & Mobile off-canvas drawer
     */
    initNavbar() {
      const header = document.getElementById('siteHeader');
      const menuToggle = document.getElementById('mobileMenuToggle');
      const drawer = document.getElementById('mobileNavDrawer');
      const backdrop = document.getElementById('drawerBackdrop');
      const drawerClose = document.getElementById('drawerClose');
      const drawerLinks = document.querySelectorAll('.drawer-link');

      // Throttled scroll listener using requestAnimationFrame
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (header) {
              if (window.scrollY > 30) {
                header.classList.add('scrolled');
              } else {
                header.classList.remove('scrolled');
              }
            }
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });

      const openDrawer = () => {
        if (drawer && backdrop) {
          drawer.classList.add('open');
          backdrop.classList.add('open');
          if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
          document.body.style.overflow = 'hidden';
        }
      };

      const closeDrawer = () => {
        if (drawer && backdrop) {
          drawer.classList.remove('open');
          backdrop.classList.remove('open');
          if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      };

      if (menuToggle) menuToggle.addEventListener('click', openDrawer);
      if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
      if (backdrop) backdrop.addEventListener('click', closeDrawer);

      drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
      });

      // Escape key to close mobile drawer
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
          closeDrawer();
        }
      });
    },

    /**
     * Auto-select doctor/treatment in contact form based on incoming URL query parameters
     * e.g., contact.html?doctor=dr-amit-raj or contact.html?service=root-canal
     */
    handleUrlParameters() {
      const urlParams = new URLSearchParams(window.location.search);
      const doctorParam = urlParams.get('doctor');
      const serviceParam = urlParams.get('service');
      const selectElem = document.getElementById('mainDoctorOrService');

      if (selectElem) {
        const targetValue = (doctorParam || serviceParam || '').trim().toLowerCase();
        if (targetValue) {
          for (let i = 0; i < selectElem.options.length; i++) {
            const optVal = selectElem.options[i].value.toLowerCase();
            const optText = selectElem.options[i].text.toLowerCase();
            if (optVal.includes(targetValue) || optText.includes(targetValue) || targetValue.includes(optVal)) {
              selectElem.selectedIndex = i;
              break;
            }
          }
        }
      }
    },

    /**
     * Centralized WhatsApp and appointment form handlers
     */
    initEnquiryForms() {
      const heroForm = document.getElementById('heroEnquiryForm');
      const mainForm = document.getElementById('mainEnquiryForm');
      const whatsappNumber = (typeof CLINIC_CONFIG !== 'undefined' && CLINIC_CONFIG.contact) 
        ? CLINIC_CONFIG.contact.whatsappNumber 
        : '919811234567';

      // 1. Hero / Homepage Quick Form
      if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const nameInput = document.getElementById('enquiryName');
          const phoneInput = document.getElementById('enquiryPhone');
          const serviceInput = document.getElementById('enquiryService');
          const messageInput = document.getElementById('enquiryMessage');

          const name = nameInput ? nameInput.value.trim() : '';
          const phone = phoneInput ? phoneInput.value.trim() : '';
          const service = serviceInput ? serviceInput.value : 'General Enquiry';
          const message = messageInput ? messageInput.value.trim() : '';

          if (!name || !phone) {
            this.showToast('Please fill in your name and contact number.', 'error');
            return;
          }

          const waText = encodeURIComponent(
            `*New Website Enquiry - Shivam Dental Centre*\n` +
            `----------------------------------------\n` +
            `*Name:* ${name}\n` +
            `*Phone:* ${phone}\n` +
            `*Interest:* ${service}\n` +
            (message ? `*Message:* ${message}\n` : '') +
            `*Location:* Yamuna Vihar, Delhi 110053`
          );

          heroForm.reset();
          this.showToast('Thank you! Redirecting to WhatsApp...', 'success');
          setTimeout(() => {
            window.open(`https://wa.me/${whatsappNumber}?text=${waText}`, '_blank');
          }, 600);
        });
      }

      // 2. Contact Page Full Booking Form
      if (mainForm) {
        mainForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const nameInput = document.getElementById('mainName');
          const phoneInput = document.getElementById('mainPhone');
          const emailInput = document.getElementById('mainEmail');
          const doctorSelect = document.getElementById('mainDoctorOrService');
          const messageInput = document.getElementById('mainMessage');

          const name = nameInput ? nameInput.value.trim() : '';
          const phone = phoneInput ? phoneInput.value.trim() : '';
          const email = emailInput ? emailInput.value.trim() : '';
          const doctorOrService = doctorSelect ? doctorSelect.value : 'General Enquiry';
          const message = messageInput ? messageInput.value.trim() : '';

          if (!name || !phone) {
            this.showToast('Please fill in your name and contact number.', 'error');
            return;
          }

          const waText = encodeURIComponent(
            `*New Patient Enquiry - Shivam Dental Centre*\n` +
            `----------------------------------------\n` +
            `*Patient Name:* ${name}\n` +
            `*Phone:* ${phone}\n` +
            (email ? `*Email:* ${email}\n` : '') +
            `*Doctor / Service:* ${doctorOrService}\n` +
            `*Query / Symptoms:* ${message || 'Consultation requested'}\n` +
            `*Location:* Yamuna Vihar, Delhi 110053`
          );

          mainForm.reset();
          this.showToast('Enquiry received! Opening WhatsApp...', 'success');
          setTimeout(() => {
            window.open(`https://wa.me/${whatsappNumber}?text=${waText}`, '_blank');
          }, 600);
        });
      }
    },

    /**
     * Toast notification display
     */
    showToast(msg, type = 'success') {
      const toast = document.getElementById('toastNotification');
      const toastMsg = document.getElementById('toastMsg');
      if (!toast || !toastMsg) return;

      toastMsg.textContent = msg;
      toast.classList.remove('error', 'success');
      toast.classList.add(type);
      toast.classList.add('show');

      setTimeout(() => {
        toast.classList.remove('show');
      }, 3500);
    },

    /**
     * Auto update copyright year
     */
    initCurrentYear() {
      const yearElements = document.querySelectorAll('.current-year');
      const year = new Date().getFullYear();
      yearElements.forEach(el => {
        el.textContent = year;
      });
    },

    /**
     * Smooth scrolling for in-page anchors
     */
    initSmoothScroll() {
      document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  };

  // Expose App on window for testing or extensions
  window.ShivamDentalApp = App;
})();
