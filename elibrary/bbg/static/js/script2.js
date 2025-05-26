// const books = [
//     {
//         title: "Discrete Mathematics",
//         author: "Kenneth H. Rosen",
//         description: "A comprehensive guide to discrete mathematics, covering logic, sets, algorithms, and graph theory.",
//         iconColor: "#3b82f6",
//         bgColor: "#dbeafe",
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15h20"/><path d="M2 7h20"/><path d="M2 11h20"/><path d="M4 19h16"/></svg>`,
//     link: "http://127.0.0.1:5500/available/index.html"
//         // Get the cell where the link will be added


//     },
//     {
//         title: "Python Programming",
//         author: "Eric Matthes",
//         description: "Learn Python programming from basics to advanced concepts with practical examples.",
//         iconColor: "#16a34a",
//         bgColor: "#dcfce7",
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
      
//     },
//     {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         description: "A powerful story of racial injustice and the loss of innocence in the American South.",
//         iconColor: "#9333ea",
//         bgColor: "#f3e8ff",
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>`
//     },
//     {
//         title: "Data Structures with C++",
//         author: "Debasis Samanta",
//         description: "A comprehensive guide to implementing and understanding data structures using C++.",
//         iconColor: "#dc2626",
//         bgColor: "#fee2e2",
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>`
//     },
//     {
//         title: "Let Us C++",
//         author: "Yashavant Kanetkar",
//         description: "Master C++ programming with this beginner-friendly guide to object-oriented programming.",
//         iconColor: "#ea580c",
//         bgColor: "#ffedd5",
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`
//     }
// ];

// function createBookCard(book) {
//     return `
//         <div class="book-card">
//             <div class="book-content">
//                 <div class="book-icon" style="background-color: ${book.bgColor}; color: ${book.iconColor}">
//                     ${book.icon}
//                 </div>
//                 <h2 class="book-title">${book.title}</h2>
//                 <p class="book-author">by ${book.author}</p>
//                 <p class="book-description">${book.description}</p>
//             </div>
//             <div class="book-footer">
//                 <button class="learn-more">
//                     Learn more →
//                 </button>
//             </div>
//         </div>
//     `;
// }

// function renderBooks() {
//     const booksContainer = document.getElementById('booksContainer');
//     booksContainer.innerHTML = books.map(book => createBookCard(book)).join('');
// }

// // Initialize the page
// document.addEventListener('DOMContentLoaded', renderBooks);









const books = [
  {
      title: "Discrete Mathematics",
      author: "Seymour Lipschutz",
      description: "A comprehensive guide to discrete mathematics, covering logic, sets, algorithms, and graph theory.",
      iconColor: "#3b82f6",
      bgColor: "#dbeafe",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15h20"/><path d="M2 7h20"/><path d="M2 11h20"/><path d="M4 19h16"/></svg>`,
      link: "http://127.0.0.1:8000/discrete_mathematics/"
  },
  {
      title: "Python Programming",
      author: "Eric Matthes",
      description: "Learn Python programming from basics to advanced concepts with practical examples.",
      iconColor: "#16a34a",
      bgColor: "#dcfce7",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>` ,
       link: "http://127.0.0.1:8000/python_programming/",
  },
  {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A powerful story of racial injustice and the loss of innocence in the American South.",
      iconColor: "#9333ea",
      bgColor: "#f3e8ff",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>`,
      link:"http://127.0.0.1:8000/to_kill_a_mockingbird/"
  },
  {
      title: "Data Structures with C",
      author: "Seymour Lipschutz",
      description: "A comprehensive guide to implementing and understanding data structures using C.",
      iconColor: "#dc2626",
      bgColor: "#fee2e2",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>`
      , link:"http://127.0.0.1:8000/data_structure/",
  },
  {
      title: "Let Us C++",
      author: "Yashavant Kanetkar",
      description: "Master C++ programming with this beginner-friendly guide to object-oriented programming.",
      iconColor: "#ea580c",
      bgColor: "#ffedd5",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`
  , link:"http://127.0.0.1:8000/let_us_c++/"
  }
];

function createBookCard(book) {
  return `
      <div class="book-card" ${book.link ? `data-link="${book.link}"` : ''}>
          <div class="book-content">
              <div class="book-icon" style="background-color: ${book.bgColor}; color: ${book.iconColor}">
                  ${book.icon}
              </div>
              <h2 class="book-title">${book.title}</h2>
              <p class="book-author">by ${book.author}</p>
              <p class="book-description">${book.description}</p>
          </div>
          <div class="book-footer">
              <button class="learn-more" ${book.link ? `data-link="${book.link}"` : ''}>
                  Learn more →
              </button>
          </div>
      </div>
  `;
}

function renderBooks() {
  const booksContainer = document.getElementById('booksContainer');
  booksContainer.innerHTML = books.map(book => createBookCard(book)).join('');
  
  // Add click event listeners
  const bookCards = document.querySelectorAll('.book-card');
  bookCards.forEach(card => {
      const link = card.dataset.link;
      if (link) {
          // Make the entire card clickable
          card.style.cursor = 'pointer';
          card.addEventListener('click', (e) => {
              // Don't trigger if clicking the learn more button (it has its own handler)
              if (!e.target.closest('.learn-more')) {
                  window.location.href = link;
              }
          });
          
          // Add click handler for the learn more button
          const learnMoreBtn = card.querySelector('.learn-more');
          learnMoreBtn.addEventListener('click', () => {
              window.location.href = link;
          });
      }
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', renderBooks);