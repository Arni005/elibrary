// Book data
const books = [
  {
      title: "Discrete Mathematics",
      author: "Seymour Lipschutz",
      available:6 ,
      issued: 1
  }
];

// Function to issue a book
function issueBook(index) {
  if (books[index].available > 0) {
      books[index].available--;
      books[index].issued++;
      renderBooks();
  }
}

// Function to render books
function renderBooks() {
  const booksListElement = document.getElementById('booksList');
  
  booksListElement.innerHTML = books.map((book, index) => `
      <tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td><span class="badge badge-available">${book.available}</span></td>
          <td><span class="badge badge-issued">${book.issued}</span></td>
          <td>
              <button 
                  onclick="issueBook(${index})" 
                  class="issue-btn"
                  ${book.available === 0 ? 'disabled' : ''}
              >
                  Issue Book
              </button>
          </td>
      </tr>
  `).join('');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderBooks();
});

document.querySelectorAll('.issue-btn').forEach(button => {
  button.addEventListener('click', function() {
      // Get the book ID from the form's data attribute
      const form = button.closest('.issue-form');
      const bookId = form.getAttribute('data-book-id');
      
      // Send the AJAX request to the backend
      fetch('http://127.0.0.1:8000/book/', { 
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
          },
          body: JSON.stringify({ 'book_id': bookId })
      })
      .then(response => response.json())
      .then(data => {
          if (data.status === 'success') {
              // Update the available copies on the frontend
              document.getElementById(`available-copies-${bookId}`).innerText = data.available_copies;
          } else {
              alert(data.message);  // Show error message if no copies or book not found
          }
      })
      .catch(error => console.error('Error:', error));
  });
});
/*
// Function to render books
function renderBooks() {
    const bookListElement = document.getElementById('book-List');
    
    bookListElement.innerHTML = books.map((book, index) => `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><span class="badge badge-available">${book.available}</span></td>
            <td><span class="badge badge-issued">${book.issued}</span></td>
            <td>
                <button 
                    onclick="issueBook(${index})" 
                    class="issue-btn"
                    ${book.available === 0 ? 'disabled' : ''}
                >
                    Issue Book
                </button>
            </td>
        </tr>
    `).join('');
  }//
  
  
  // DOM Elements
  //const loadingElement = document.getElementById('loading');
  //const errorElement = document.getElementById('error');
  //const booksTable = document.getElementById('booksTable');
  //const booksBody = document.getElementById('booksBody');
  
  // Fetch books from the API
  async function fetchBooks() {
      try {
          const response = await fetch('http://127.0.0.1:8000/api/books/');
          if (!response.ok) throw new Error('Failed to fetch books');
          
          const data = await response.json();
          books = data;
          renderBooks();
      } catch (err) {
          showError(err.message);
      } finally {
          hideLoading();
      }
  }
  
  // Render books to the table
  function renderBooks() {
      if (!books.length) {
          showError('No books found');
          return;
      }
  
      booksBody.innerHTML = books.map(book => `
          <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${book.title}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${book.author}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      ${book.available}
                  </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      ${book.issued}
                  </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button 
                      onclick="issueBook('${book._id}')"
                      class="text-blue-600 hover:text-blue-900 ${book.available === 0 ? 'opacity-50 cursor-not-allowed' : ''}"
                      ${book.available === 0 ? 'disabled' : ''}
                  >
                      Issue Book
                  </button>
              </td>
          </tr>
      `).join('');
  
      booksTable.classList.remove('hidden');
  }
  
  // Issue a book
  async function issueBook(bookId) {
      try {
          const response = await fetch(`http://localhost:8000/api/books/${bookId}/issue`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              }
          });
  
          if (!response.ok) throw new Error('Failed to issue book');
          
          const updatedBook = await response.json();
          books = books.map(book => 
              book._id === updatedBook._id ? updatedBook : book
          );
          
          renderBooks();
      } catch (err) {
          showError(err.message);
      }
  }
  
  // Utility functions
  function showError(message) {
      errorElement.textContent = message;
      errorElement.classList.remove('hidden');
  }
  
  function hideLoading() {
      loadingElement.classList.add('hidden');
  }
  
  // Initialize the application
  document.addEventListener('DOMContentLoaded', fetchBooks);*/