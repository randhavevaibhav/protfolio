// Main JS script for Vaibhav Randhave Portfolio

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');

  function openMobileMenu() {
    mobileMenu.classList.remove('translate-x-full');
    document.body.classList.add('overflow-hidden');
  }

  function closeMobileMenu() {
    mobileMenu.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

  // Close mobile menu on clicking any link
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 2. Active Navigation Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);

  // 3. Interactive Code Snippet Tabs in Hero
  const snippetTabs = document.querySelectorAll('.snippet-tab');
  const snippetContents = {
    'config': `{
  "name": "Vaibhav Randhave",
  "role": "Full-Stack JavaScript Developer",
  "experience": "4.5 Years",
  "location": "Pune, Maharashtra, India",
  "email": "randhavevaibhav3@gmail.com",
  "phone": "+91 9834481173",
  "status": "Ready for Impact"
}`,
    'stack': `interface DeveloperProfile {
  frontend: ['React.js', 'Redux', 'TypeScript', 'Tailwind CSS', 'TanStack Query'];
  backend: ['Node.js', 'Express.js', 'REST APIs', 'Swagger OpenAPI', 'Global Error Handler'];
  database: ['PostgreSQL', 'Supabase', 'Drizzle ORM', 'Prisma ORM', 'Oracle SQL'];
  architecture: ['Monorepo Workspace', 'End-to-End Type Safety', 'Session Auth'];
  testing: ['Jest (Frontend & Backend)', 'Cypress E2E', 'Selenium (Java)'];
}`,
    'impact': `#!/bin/bash
# High Impact Accomplishments
echo "--> Save ~3 Days Manual Work per Cycle via Custom Java Automation (TCS)"
echo "--> Resolved Critical Build/Compilation Failure @ CouponCabin"
echo "--> Built End-to-End Social Blogging Platform with Session Auth"
echo "--> Monorepo Jira Clone: Express + Drizzle + Supabase + TanStack Query + Jest"
echo "--> 100% Cross-Browser Responsive Production React UI"`
  };

  const codeDisplay = document.getElementById('hero-code-display');

  snippetTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      snippetTabs.forEach(t => {
        t.classList.remove('bg-slate-800', 'text-cyan-400', 'border-cyan-500/40');
        t.classList.add('text-slate-400', 'hover:text-slate-200');
      });
      tab.classList.add('bg-slate-800', 'text-cyan-400', 'border-cyan-500/40');
      tab.classList.remove('text-slate-400', 'hover:text-slate-200');

      const target = tab.getAttribute('data-tab');
      if (codeDisplay && snippetContents[target]) {
        codeDisplay.textContent = snippetContents[target];
      }
    });
  });

  // 4. Interactive Skills Tab Filter
  const skillCategoryBtns = document.querySelectorAll('.skill-cat-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillCategoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');

      skillCategoryBtns.forEach(b => {
        b.classList.remove('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40');
        b.classList.add('bg-slate-800/60', 'text-slate-400', 'border-slate-700/50');
      });

      btn.classList.add('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40');
      btn.classList.remove('bg-slate-800/60', 'text-slate-400', 'border-slate-700/50');

      skillCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'flex';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Project Detail Modal Logic
  const projectDetails = {
    'blogging': {
      title: 'Full-Stack Social Blogging Platform',
      period: '2025 – Present',
      subtitle: 'React.js, Node.js/Express, PostgreSQL, REST APIs',
      highlights: [
        'Built complete custom authentication & session-based authorization without external 3rd-party auth dependencies.',
        'Engineered rich social interactions: followers/following graph, nested comment/reply trees, likes, bookmarks, and global keyword post search.',
        'Created dynamic user statistics dashboard with real-time impression counter and author analytics.',
        'Optimized frontend UX with infinite scroll pagination, optimistic UI state updates, and smart pre-fetching for instant page transitions.'
      ],
      tags: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Custom Auth', 'REST APIs', 'Optimistic UI', 'Full CRUD']
    },
    'jira': {
      title: 'Full-Stack Jira Clone Platform (Monorepo)',
      period: '2025 – Present',
      subtitle: 'TypeScript Monorepo, React.js, Express.js, Drizzle ORM, Supabase PostgreSQL, TanStack Query, Jest, Swagger',
      highlights: [
        'Architected using a scalable Monorepo workspace isolating shared contract types, React frontend client, and Express API server for end-to-end TypeScript type-safety.',
        'Managed cloud PostgreSQL database on Supabase using type-safe Drizzle ORM with schema validations and automated migration pipelines.',
        'Integrated TanStack Query (React Query) on the frontend for smart server state synchronization, query caching, and optimistic UI mutations for instant feedback on issue boards.',
        'Designed robust Express.js backend with centralized global API error middleware, auto-generated Swagger OpenAPI documentation, and comprehensive Jest test suites for both frontend components & backend REST endpoints.'
      ],
      tags: ['Monorepo Architecture', 'TypeScript', 'React.js', 'Express.js', 'Drizzle ORM', 'Supabase', 'TanStack Query', 'Jest Testing', 'Swagger API', 'Global Error Handler']
    }
  };

  const projectModal = document.getElementById('project-modal');
  const projectModalTitle = document.getElementById('modal-title');
  const projectModalPeriod = document.getElementById('modal-period');
  const projectModalSubtitle = document.getElementById('modal-subtitle');
  const projectModalHighlights = document.getElementById('modal-highlights');
  const projectModalTags = document.getElementById('modal-tags');
  const projectModalCloseBtn = document.getElementById('modal-close-btn');

  document.querySelectorAll('.open-project-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const key = btn.getAttribute('data-project');
      const data = projectDetails[key];
      if (data && projectModal) {
        projectModalTitle.textContent = data.title;
        projectModalPeriod.textContent = data.period;
        projectModalSubtitle.textContent = data.subtitle;

        projectModalHighlights.innerHTML = data.highlights.map(h => 
          `<li class="flex items-start space-x-3 text-slate-300">
            <span class="inline-block p-1 mt-1 rounded bg-cyan-500/20 text-cyan-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </span>
            <span>${h}</span>
          </li>`
        ).join('');

        projectModalTags.innerHTML = data.tags.map(t => 
          `<span class="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-cyan-300 border border-slate-700">${t}</span>`
        ).join('');

        projectModal.classList.remove('hidden');
        projectModal.classList.add('flex');
        document.body.classList.add('overflow-hidden');
      }
    });
  });

  if (projectModalCloseBtn) {
    projectModalCloseBtn.addEventListener('click', () => {
      projectModal.classList.add('hidden');
      projectModal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    });
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.classList.add('hidden');
        projectModal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }

  // 6. Contact Form Submission Mock
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Message Sent Successfully! Vaibhav will reach out to you shortly.', 'success');
      contactForm.reset();
    });
  }
});

// Global Email Copy Function
function copyEmail() {
  const email = 'randhavevaibhav3@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('Email address copied to clipboard!', 'success');
  }).catch(() => {
    showToast('Failed to copy email. Please copy manually.', 'error');
  });
}

// Global Toast Notification Helper
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col space-y-3';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-slate-900 border-emerald-500/50 text-emerald-300' : 'bg-slate-900 border-cyan-500/50 text-cyan-300';
  
  toast.className = `toast glass-panel p-4 rounded-xl shadow-2xl border flex items-center space-x-3 ${bgClass} min-w-[280px] max-w-md backdrop-blur-xl`;
  
  toast.innerHTML = `
    <div class="p-2 rounded-lg ${type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-cyan-500/20 text-cyan-400'}">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${type === 'success' ? 'M5 13l4 4L19 7' : 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'}"></path>
      </svg>
    </div>
    <div class="text-sm font-medium text-slate-100 flex-1">${message}</div>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
