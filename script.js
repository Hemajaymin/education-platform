function loginUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Login Successful!");
        return true;
    } else {
        alert("Invalid Credentials! Try again.");
        return false;
    }
}

function generateQuiz() {
    let questions = [
        "What is the capital of India?",
        "Solve: 5 + 7",
        "Who wrote 'Macbeth'?",
        "What is the chemical symbol for water?",
        "Solve: 12 × 6"
    ];
    
    let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById("quiz-output").innerText = "Quiz Question: " + randomQuestion;
}
// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const grade = urlParams.get("grade"); // Get grade from URL parameter

    if (!grade) {
        console.error("Grade not found in URL.");
        return;
    }

    fetch("books.json") // Fetch books data from books.json
        .then(response => {
            if (!response.ok) {
                throw new Error("Books file not found");
            }
            return response.json();
        })
        .then(data => {
            displayBooks(data, grade);
        })
        .catch(error => console.error("Error fetching books:", error));
});

// Function to display books based on selected grade
function displayBooks(data, grade) {
    let booksContainer = document.getElementById("books-list");
    if (!booksContainer) {
        console.error("Books container not found.");
        return;
    }

    booksContainer.innerHTML = ""; // Clear previous content

    let booksFound = false;

    data.forEach(book => {
        if (book.grade == grade) {
            booksFound = true;
            let bookItem = `
                <div class="book">
                    <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p><a href="${book.download}" target="_blank">Download</a></p>
                </div>
            `;
            booksContainer.innerHTML += bookItem;
        }
    });

    if (!booksFound) {
        booksContainer.innerHTML = "<p>No books found for this grade.</p>";
    }
}
