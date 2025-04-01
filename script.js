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
