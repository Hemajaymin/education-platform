const booksData = {
  1: ["Math Basics", "Alphabet Fun", "Science for Kids"],
  2: ["Advanced Phonics", "Counting Numbers", "Simple Science"],
  3: ["Math Magic", "English Grammar", "Our World"],
  // Extend up to grade 12
  12: ["Calculus", "Physics", "Organic Chemistry", "Computer Science"]
};

function loadGrades() {
  const gradeDiv = document.getElementById('grades');
  for (let i = 1; i <= 12; i++) {
    const btn = document.createElement('button');
    btn.textContent = `Grade ${i}`;
    btn.onclick = () => loadBooks(i);
    gradeDiv.appendChild(btn);
  }
}

function loadBooks(grade) {
  const listDiv = document.getElementById('bookList');
  listDiv.innerHTML = "";
  const books = booksData[grade] || [];
  books.forEach(book => {
    const bookItem = document.createElement('p');
    bookItem.textContent = book;
    listDiv.appendChild(bookItem);
  });
}

window.onload = loadGrades;
