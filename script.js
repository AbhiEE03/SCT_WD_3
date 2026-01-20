/* ================= DATA: QUESTIONS REPOSITORY ================= */
const quizData = {
	technical: [
		{
			q: "What does HTML stand for?",
			options: [
				"Hyper Text Preprocessor",
				"Hyper Text Markup Language",
				"Hyper Tool Multi Language",
				"Home Tool Markup Language",
			],
			a: 1,
		},
		{
			q: "Which symbol is used for comments in JavaScript?",
			options: ["", "//", "/* */", "#"],
			a: 1,
		},
		{
			q: "Which CSS property changes text color?",
			options: ["text-color", "font-color", "color", "fg-color"],
			a: 2,
		},
		{
			q: "What is React.js?",
			options: [
				"Server-side Framework",
				"Database",
				"JavaScript Library",
				"Operating System",
			],
			a: 2,
		},
		{
			q: "What does SQL stand for?",
			options: [
				"Structured Query Language",
				"Strong Question Language",
				"Structured Query List",
				"Simple Query Language",
			],
			a: 0,
		},
		{
			q: "Which is NOT a programming language?",
			options: ["Python", "Java", "HTML", "C++"],
			a: 2,
		},
		{
			q: "What is the output of 2 + '2' in JS?",
			options: ["4", "22", "NaN", "Error"],
			a: 1,
		},
		{
			q: "Which tag is used for the largest heading in HTML?",
			options: ["<h6>", "<head>", "<h1>", "<heading>"],
			a: 2,
		},
		{
			q: "What implies a constant variable in JS?",
			options: ["var", "let", "const", "static"],
			a: 2,
		},
		{
			q: "Who created Linux?",
			options: [
				"Bill Gates",
				"Steve Jobs",
				"Linus Torvalds",
				"Mark Zuckerberg",
			],
			a: 2,
		},
	],
	space: [
		{
			q: "Which planet is known as the Red Planet?",
			options: ["Venus", "Mars", "Jupiter", "Saturn"],
			a: 1,
		},
		{
			q: "Who was the first person to walk on the moon?",
			options: [
				"Yuri Gagarin",
				"Buzz Aldrin",
				"Neil Armstrong",
				"Michael Collins",
			],
			a: 2,
		},
		{
			q: "What is the largest planet in our solar system?",
			options: ["Earth", "Mars", "Jupiter", "Saturn"],
			a: 2,
		},
		{
			q: "What implies the center of a Black Hole?",
			options: ["Event Horizon", "Singularity", "Quasar", "Nebula"],
			a: 1,
		},
		{
			q: "Which galaxy do we live in?",
			options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
			a: 1,
		},
		{
			q: "What is the sun mainly composed of?",
			options: [
				"Oxygen & Carbon",
				"Hydrogen & Helium",
				"Nitrogen & Argon",
				"Iron & Nickel",
			],
			a: 1,
		},
		{
			q: "Which planet has the most rings?",
			options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
			a: 0,
		},
		{
			q: "What is the closest star to Earth?",
			options: ["Proxima Centauri", "Sirius", "The Sun", "Alpha Centauri"],
			a: 2,
		},
		{
			q: "Who was the first human in space?",
			options: ["Neil Armstrong", "Yuri Gagarin", "Alan Shepard", "John Glenn"],
			a: 1,
		},
		{
			q: "What agency operates the Hubble Telescope?",
			options: ["SpaceX", "NASA & ESA", "Roscosmos", "ISRO"],
			a: 1,
		},
	],
	movies: [
		{
			q: "Who directed 'Inception'?",
			options: [
				"Steven Spielberg",
				"Christopher Nolan",
				"Quentin Tarantino",
				"James Cameron",
			],
			a: 1,
		},
		{
			q: "Which movie features the character 'Iron Man'?",
			options: ["Man of Steel", "The Avengers", "Justice League", "X-Men"],
			a: 1,
		},
		{
			q: "Who played Jack in 'Titanic'?",
			options: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Johnny Depp"],
			a: 2,
		},
		{
			q: "What is the highest-grossing movie of all time?",
			options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars"],
			a: 0,
		},
		{
			q: "In 'The Matrix', what color pill does Neo take?",
			options: ["Blue", "Red", "Green", "Yellow"],
			a: 1,
		},
		{
			q: "Which animation studio made 'Toy Story'?",
			options: ["DreamWorks", "Pixar", "Disney", "Sony"],
			a: 1,
		},
		{
			q: "Who is the villain in 'The Dark Knight'?",
			options: ["Bane", "The Joker", "Scarecrow", "Two-Face"],
			a: 1,
		},
		{
			q: "Which movie is set in 'Middle Earth'?",
			options: [
				"Harry Potter",
				"Lord of the Rings",
				"Game of Thrones",
				"Narnia",
			],
			a: 1,
		},
		{
			q: "What is the name of Simba's father in 'The Lion King'?",
			options: ["Scar", "Mufasa", "Timon", "Rafiki"],
			a: 1,
		},
		{
			q: "Which actor plays 'John Wick'?",
			options: ["Keanu Reeves", "Liam Neeson", "Jason Statham", "Tom Hardy"],
			a: 0,
		},
	],
	geo: [
		{
			q: "What is the capital of France?",
			options: ["Berlin", "Madrid", "Rome", "Paris"],
			a: 3,
		},
		{
			q: "Which is the largest country by area?",
			options: ["China", "USA", "Russia", "Canada"],
			a: 2,
		},
		{
			q: "How many continents are there?",
			options: ["5", "6", "7", "8"],
			a: 2,
		},
		{
			q: "Which country has the largest population?",
			options: ["India", "China", "USA", "Indonesia"],
			a: 0,
		},
		{
			q: "What is the longest river in the world?",
			options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
			a: 1,
		},
		{
			q: "Which country is known as the Land of the Rising Sun?",
			options: ["China", "South Korea", "Japan", "Thailand"],
			a: 2,
		},
		{
			q: "What is the currency of the UK?",
			options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
			a: 2,
		},
		{
			q: "Which continent is the Sahara Desert located in?",
			options: ["Asia", "South America", "Africa", "Australia"],
			a: 2,
		},
		{
			q: "What is the smallest country in the world?",
			options: ["Monaco", "Vatican City", "Malta", "San Marino"],
			a: 1,
		},
		{
			q: "Which country exited the EU (Brexit)?",
			options: ["France", "Germany", "United Kingdom", "Italy"],
			a: 2,
		},
	],
};

/* ================= GAME LOGIC ================= */
let currentCategory = [];
let currentQuestionIndex = 0;
let score = 0;
let categoryName = "";
let acceptingAnswers = false;

// DOM Elements
const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const leaderboardScreen = document.getElementById("leaderboard-screen");

function showScreen(screen) {
	document.querySelectorAll(".screen").forEach((s) => {
		s.classList.remove("active");
		s.classList.add("hidden");
	});
	screen.classList.remove("hidden");
	screen.classList.add("active");
}

function startQuiz(category) {
	categoryName = category;
	currentCategory = quizData[category];
	currentQuestionIndex = 0;
	score = 0;
	document.getElementById("category-title").innerText = category.toUpperCase();
	showScreen(quizScreen);
	loadQuestion();
}

function loadQuestion() {
	const q = currentCategory[currentQuestionIndex];
	document.getElementById("question-text").innerText = q.q;
	document.getElementById("question-count").innerText =
		`${currentQuestionIndex + 1}/${currentCategory.length}`;

	// Update Progress Bar
	const progressPercent = (currentQuestionIndex / currentCategory.length) * 100;
	document.getElementById("progress-fill").style.width = `${progressPercent}%`;

	const optionsDiv = document.getElementById("options-container");
	optionsDiv.innerHTML = "";

	q.options.forEach((opt, index) => {
		const btn = document.createElement("button");
		btn.innerText = opt;
		btn.classList.add("option-btn");
		btn.onclick = () => selectAnswer(btn, index);
		optionsDiv.appendChild(btn);
	});

	acceptingAnswers = true;
}

function selectAnswer(btn, selectedIndex) {
	if (!acceptingAnswers) return;
	acceptingAnswers = false;

	const correctIndex = currentCategory[currentQuestionIndex].a;
	const allOptions = document.querySelectorAll(".option-btn");

	// Visual Feedback
	if (selectedIndex === correctIndex) {
		btn.classList.add("correct");
		score++;
	} else {
		btn.classList.add("wrong");
		allOptions[correctIndex].classList.add("correct"); // Show right answer
	}

	// Wait 1 second then go to next
	setTimeout(() => {
		currentQuestionIndex++;
		if (currentQuestionIndex < currentCategory.length) {
			loadQuestion();
		} else {
			endQuiz();
		}
	}, 1000);
}

function endQuiz() {
	showScreen(resultScreen);
	document.getElementById("final-score").innerText = score;
}

function goHome() {
	showScreen(homeScreen);
}

/* ================= LEADERBOARD LOGIC ================= */
function saveScore() {
	const username = document.getElementById("username").value.trim();
	if (!username) {
		alert("Please enter your name!");
		return;
	}

	const newScore = {
		name: username,
		score: score,
		category: categoryName.toUpperCase(),
		date: new Date().toLocaleDateString(),
	};

	// Get existing scores
	const highScores =
		JSON.parse(localStorage.getItem("skillCraftQuizScores")) || [];

	highScores.push(newScore);

	// Sort by score (descending)
	highScores.sort((a, b) => b.score - a.score);

	// Keep top 10
	highScores.splice(10);

	localStorage.setItem("skillCraftQuizScores", JSON.stringify(highScores));

	goHome();
}

function showLeaderboard() {
	showScreen(leaderboardScreen);
	const list = document.getElementById("high-scores-list");
	const highScores =
		JSON.parse(localStorage.getItem("skillCraftQuizScores")) || [];

	list.innerHTML =
		highScores
			.map(
				(score) => `
        <li class="score-item">
            <span>${score.name} <small>(${score.category})</small></span>
            <span class="score-badge">${score.score}/10</span>
        </li>
    `,
			)
			.join("") || "<p>No high scores yet!</p>";
}
