// Sample data: List of issued books
const issuedBooks = [
  {
      studentId: '123',
      bookName: 'The Great Gatsby',
      dateIssued: '2023-10-01',
      returnDate: '2023-10-15',
  },
  {
      studentId: '124',
      bookName: 'To Kill a Mockingbird',
      dateIssued: '2023-10-05',
      returnDate: '2023-10-20',
  },
  {
      studentId: '123',
      bookName: '1984',
      dateIssued: '2023-10-10',
      returnDate: '2023-10-25',
  },
];

// Attach event listener for the search form
document.getElementById('searchForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const studentId = document.getElementById('studentId').value;

  displayIssuedBooks(studentId);
});

// Function to display issued books
function displayIssuedBooks(studentId) {
  const statusBody = document.getElementById('statusBody');

  statusBody.innerHTML = ''; // Clear previous results

  const studentBooks = issuedBooks.filter((book) => book.studentId === studentId);

  if (studentBooks.length === 0) {
      statusBody.innerHTML = '<tr><td colspan="4">No issued books found for this Student ID.</td></tr>';
      return;
  }

  studentBooks.forEach((book) => {
      const pendingDays = calculatePendingDays(book.returnDate);

      const newRow = document.createElement('tr');
      newRow.innerHTML = `
          <td>${book.bookName}</td>
          <td>${book.dateIssued}</td>
          <td>${book.returnDate}</td>
          <td>${pendingDays} days</td>
      `;
      statusBody.appendChild(newRow);
  });
}

// Function to calculate pending days dynamically
function calculatePendingDays(returnDate) {
  const today = new Date();
  const returnDateObj = new Date(returnDate);

  const diffTime = returnDateObj - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

  return diffDays > 0 ? diffDays : 0; // Ensure no negative days are displayed
}

// Attach event listener to the Add Book form
document.getElementById('addBookForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const studentId = document.getElementById('addStudentId').value;
  const bookName = document.getElementById('addBookName').value;
  const dateIssued = document.getElementById('addDateIssued').value;
  const returnDate = document.getElementById('addReturnDate').value;

  // Add the new book data to the issuedBooks array
  issuedBooks.push({
      studentId: studentId,
      bookName: bookName,
      dateIssued: dateIssued,
      returnDate: returnDate,
  });

  // Clear the form inputs
  document.getElementById('addBookForm').reset();

  alert('Book added successfully!');
});

// Automatically refresh the pending days every 1 second
setInterval(() => {
  const studentId = document.getElementById('studentId').value;

  if (studentId) {
      displayIssuedBooks(studentId);
  }
}, 1000);