// Book data
const books = [
  {
      title: "Data structure with C",
      author: "Seymour Lipschutz",
      available: 5,
      issued: 2,
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