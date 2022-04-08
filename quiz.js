//Question bank
var questionBank = [
  {
    question: "HTML merupakan singkatan dari ?",
    option: ["Hyper Link Markup Leaguege", "Hyper Text Markup Laguage", " Hyper Tool Markup Laguage", "Hyper Test Markup Laguage"],
    answer: " Hyper Text Markup Laguage",
  },
  {
    question: " Berikut ini yang menjadi standarisasi Web",
    option: ["ECMAN (uropean Computer Manufacturers Association)", "W3C (World Wide Web Consortium)", "Google", "PSR (PHP Standars Recommendation)"],
    answer: " W3C (World Wide Web Consortium)",
  },
  {
    question: " Berikut ini tag untuk membuat heading, kecuali?",
    option: ["H4", "H5", "H6", "H7"],
    answer: "H7",
  },
  {
    question: " Untuk membuat baris baru menggunakan tag ?",
    option: ["br", "newline", "Break", "hr"],
    answer: "br",
  },
  {
    question: "Tag untuk membuat garis datar (horizontal)?",
    option: ["br", "newline", "Break", "hr"],
    answer: "hr",
  },
  {
    question: "Sintak yang benar untuk menambah warna latar belakang?",
    option: [" body =’background:green’ ", " body style=’background-color:green’ ", "body color=’green’", "background>green</background"],
    answer: "<body =’background:green’>",
  },
  {
    question: " Tag untuk membuat huruf tebal adalah?",
    option: ["bold", "b", "i", "important"],
    answer: "b",
  },
  {
    question: " Karakter yang digunakan untuk tag akhir ?",
    option: ["<>", "/", "*", "/"],
    answer: "</>",
  },
  {
    question: "Untuk membuat tabel menggunakan tag ?",
    option: ["table", "tables", "tb", "tab"],
    answer: "table",
  },
  {
    question: "Saat membuat tabel tag tr berfungsi untuk ?",
    option: ["membuat baris", "membuat kolom", "membuat header table", "membuat body tabel"],
    answer: "membuat baris",
  },
  {
    question: "Tag <ol> digunakan untuk membuat list ?",
    option: ["list terurut", "list Tidak terurut", "list tunggal", "list Jamak"],
    answer: "list terurut",
  },
  {
    question: "Terdapat 2 jenis list di HTML yaitu order list dan unordered list!",
    option: ["bener", "salah", "jawaban a dan b bener", "semua jawaban salah"],
    answer: "bener",
  },
  {
    question: "Untuk membuat checkbox menggunakan sintak?",
    option: ["checkbox", "input type=’checkbox’", "input type=’check’", "input type=’check_box’"],
    answer: "input type=’checkbox’",
  },
  {
    question: "Untuk membuat radio button mengunakan sintak?",
    option: ["Radio", "input type=’radio_button’", " input type=radio’", " radio_button"],
    answer: "input type=radio’",
  },
  {
    question: "Untuk membuat drop-down list menggunakan tag?",
    option: [" input type=’drop-down’", "drop-down", "select", "list>"],
    answer: "select",
  },
  {
    question: "Text area dapat dibuat menggunakan tag?",
    option: ["textarea", " input type=’textarea’", "text", "Semua jawaban salah"],
    answer: "textarea",
  },
  {
    question: "Sintak yang benar untuk memasukan gambar adalah",
    option: ["img href=’https://kelasprogrammer.com’ alt=’Kelas Programmer’", "img src=’kelasprogrammer.png’ alt=’Kelas Programmer’", "image src=’kelasprogrammer.jpg’ alt=’Kelas Programmer’", "tidak ada jawaban"],
    answer: "img src=’kelasprogrammer.png’ alt=’Kelas Programmer’",
  },
  {
    question: "Atribut alt pada tag img berfungsi untuk?",
    option: [" Menampilkan alternatif teks ketika gambar tidak bisa ditampilkan", " Membuat gambar dengan animasi", "Mengatur ukuran gambar", "Mengatur jarak gambar dengan elemen lain"],
    answer: " Menampilkan alternatif teks ketika gambar tidak bisa ditampilkan",
  },
  {
    question: "Untuk membuat komentar di HTML adalah",
    option: ["dimulai dengan <!-diahiri dengan->", "dimulai dengan <? diakhiri dengan ?>", "dimulai dengan // diakhiri dengan *// ", "dimulai dengan # diakhiri dengan #"],
    answer: "dimulai dengan <!-diahiri dengan-> ",
  },
  {
    question: "untuk menggunakan mendefenisikan judul menggunkan tag",
    option: ["head", "body", "footer", "title"],
    answer: "title",
  },
  {
    question: "Element HTML untuk memutar radio adalah?",
    option: ["vidio", "input type= 'vidio'", "media", "canvas"],
    answer: "vidio",
  },
  {
    question: "element HTMl untuk memutar suara adalah?",
    option: ["audio", "sound", "vidio", "mp3"],
    answer: "audio",
  },
  {
    question: "di dalam HTMl onfokus merupakan bagian dari atribut?",
    option: ["atribut style", "atribut event", "atribut media", "atribut HTML"],
    answer: "atribut event",
  },
  {
    question: "element <canvas> di gunakan untuk?",
    option: ["manipulasi data", "manampilkan jenis huruf", "membuat grafis", "menampikan gambar dinamis"],
    answer: "mambuat grafis",
  },
  {
    question: "Atribut yang di gunakan untuk field untuk membuat aturan field tersebut harus diisi adalah atribut?",
    option: ["validate", "required", "name", "value"],
    answer: "required",
  },
  {
    question: "untuk membuat navigasi link menggunkan tag?",
    option: ["nav", "navigation", "navbar", "panel"],
    answer: "nav",
  },
  {
    question: "untuk membuat paragraf menggunakan tag?",
    option: ["p", "paragraf", "i", "italic"],
    answer: "p",
  },
  {
    question: "atribut untuk mengatur pajang dan lebar suatu element adalah",
    option: ["width dan height", "width dan value", "value dan height", "style dan value"],
    answer: "width dan height",
  },
  {
    question: "Didalam penggunaan tabel terdapat atribut colspan yang berfungsi untuk",
    option: ["Menggabungkan beberapa cell baris", "Menggabungkan beberapa cell kolom", "Memisahkan beberapa cell baris ", "Memisahkan beberapa cell kolom"],
    answer: "Menggabungkan beberapa cell kolom",
  },
  {
    question: "Dalam atribut style properti yang digunakan untuk menentukan jenis huruf adalah",
    option: ["font-size", "font-family", "text-align", "background-color"],
    answer: "font-family",
  },
  {
    question: " Untuk memerikan nilai pada suatu elemen HTML menggunakan atribut?",
    option: ["name", "size", "value", "placeholder"],
    answer: "value",
  },
  {
    question: "Berikut ini atribut yang digunakan dalam form kecuali",
    option: ["method", "name", "action", "placeholder"],
    answer: "placeholder",
  },
  {
    question: "Dalam tag form terdapat dua jenis method yaitu?",
    option: ["GET dan HTTP", " GET dan POST", "POST dan SELF ", "HTTP dan SELF"],
    answer: "GET dan POST",
  },
  {
    question: "CSS dapat ditambahkan dalam elemen HTML degan 3 cara kecuali",
    option: ["Inline", "Outline", "Internal", "External"],
    answer: "Outline",
  },
  {
    question: " Untuk membuat tombol button menggunakan tag?",
    option: ["button", "input type='button", "jawaban a dan b benar", "semua jawaban salah"],
    answer: "jawaban a dan b benar",
  },
  {
    question: "Penulisan DOCTYPE yang benar dalaman HTML 5 adalah",
    option: ["html", "DOCTYPE", "!DOCTYPE HTML", "!DOCTYPE HTML5"],
    answer: "!DOCTYPE HTML",
  },
  {
    question: "Grafik yang di buat dengan SGV menggunakan format?",
    option: ["HTML", "XML", "CSS", "JS"],
    answer: "XML",
  },
  {
    question: "Untuk memasukan kode javascript dalam dokumen HTML menggunakan tag?",
    option: ["script", "javascript", "js", "jawaban a,b,c dan d benar"],
    answer: "script",
  },
  {
    question: "Setiap elemen HTML hanya dapat memiliki satu atribut ID tunggal (unik)!",
    option: ["benar", "salah", "jawaban a dan b bener", "jawaban a dan b salah"],
    answer: "benar",
  },
  {
    question: "HTML merupakan bahasa markup yang pemrosesannya berada di sisi?",
    option: ["client side", "server side", "local side", "eksternal side"],
    answer: "clinet side",
  },
];

var question = document.getElementById("question");
var quizContainer = document.getElementById("quiz-container");
var scorecard = document.getElementById("scorecard");
var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var option5 = document.getElementById("option5");
var option6 = document.getElementById("option6");
var option7 = document.getElementById("option7");
var option8 = document.getElementById("option8");
var option9 = document.getElementById("option9");
var option10 = document.getElementById("option10");
var next = document.querySelector(".next");
var points = document.getElementById("score");
var span = document.querySelectorAll("span");
var i = 0;
var score = 0;

//function to display questions
function displayQuestion() {
  for (var a = 0; a < span.length; a++) {
    span[a].style.background = "none";
  }
  question.innerHTML = "Q." + (i + 1) + " " + questionBank[i].question;
  option0.innerHTML = questionBank[i].option[0];
  option1.innerHTML = questionBank[i].option[1];
  option2.innerHTML = questionBank[i].option[2];
  option3.innerHTML = questionBank[i].option[3];
  option4.innerHTML = questionBank[i].option[4];
  option5.innerHTML = questionBank[i].option[5];
  option6.innerHTML = questionBank[i].option[6];
  option7.innerHTML = questionBank[i].option[7];
  option8.innerHTML = questionBank[i].option[8];
  option9.innerHTML = questionBank[i].option[9];
  option10.innerHTML = questionBank[i].option[10];
  stat.innerHTML = "Question" + " " + (i + 1) + " " + "of" + " " + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
    document.getElementById(e.id).style.background = "limegreen";
  } else {
    document.getElementById(e.id).style.background = "tomato";
  }
  setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
  if (i < questionBank.length - 1) {
    i = i + 1;
    displayQuestion();
  } else {
    points.innerHTML = score + "/" + questionBank.length;
    quizContainer.style.display = "none";
    scoreboard.style.display = "block";
  }
}

//click events to next button
next.addEventListener("click", nextQuestion);

//Back to Quiz button event
function backToQuiz() {
  location.reload();
}

//function to check Answers
function checkAnswer() {
  var answerBank = document.getElementById("answerBank");
  var answers = document.getElementById("answers");
  answerBank.style.display = "block";
  scoreboard.style.display = "none";
  for (var a = 0; a < questionBank.length; a++) {
    var list = document.createElement("li");
    list.innerHTML = questionBank[a].answer;
    answers.appendChild(list);
  }
}

displayQuestion();
