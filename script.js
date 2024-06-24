function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function submitQuiz() {
    var correctAnswers = {
        q1: "Energi yang berpindah dari benda yang bersuhu lebih tinggi ke benda yang bersuhu lebih rendah",
        q2: "Air mendidih dan berubah menjadi uap",
        q3: "Joule",
        q4: "Perpindahan panas melalui materi yang menyentuh",
        q5: "Penggunaan oven"
    };

    var score = 0;
    var totalQuestions = 5;
    var resultsHtml = "";

    for (var i = 1; i <= totalQuestions; i++) {
        var selectedAnswer = document.querySelector('input[name="q' + i + '"]:checked');
        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswers['q' + i]) {
                score++;
                resultsHtml += "<p>Pertanyaan " + i + ": Benar</p>";
            } else {
                resultsHtml += "<p>Pertanyaan " + i + ": Salah (Jawaban benar: " + correctAnswers['q' + i] + ")</p>";
            }
        } else {
            resultsHtml += "<p>Pertanyaan " + i + ": Tidak dijawab</p>";
        }
    }

    resultsHtml += "<p>Skor Anda: " + score + " dari " + totalQuestions + "</p>";
    document.getElementById('quizResult').innerHTML = resultsHtml;
    showPage('result');
}
