// 1. Create 3 sections for quiz: Start page, Quiz page, Score page. Only Start page is visible at beginning.
// 2. When user clicks start button, hide start page. Show quiz page. Score page is still hidden.
// 3. Creat object containing questions (10) and multiple choices (4 per question)
// 4. Append quiz div with current question
// 5. Append choices div with multiple choices
// 6. Create Next Question button to move to next question
// 7. After 10th question, diplay score page
// 8. Check for correct answers
// 9. Set up timer


$(document).ready(function() {
	$("#quizPage").hide();
	$("#scorePage").hide();
	
	$("#startButton").click(function () {
		$(this).hide();
		$("#quizPage").show();
	});

var quiz = [
	{
		"question" : "Q1: Most populated city?",
		"choice1" : "Tokyo",
		"choice2" : "New York City",
		"choice3" : "London",
		"choice4" : "Mexico City"
	},

	{
		"question" : "Q2: Most populated country?",
		"choice1" : "Indonesia",
		"choice2" : "China",
		"choice3" : "India",
		"choice4" : "USA"
	},

	{
		"question" : "Q3: Smallest country by land area?",
		"choice1" : "Malta",
		"choice2" : "Liechtenstein",
		"choice3" : "Monaco",
		"choice4" : "Vatican City"
	},

	{
		"question" : "Q4: Countries that are members of the UN?",
		"choice1" : "193",
		"choice2" : "150",
		"choice3" : "204",
		"choice4" : "107"
	},

	{
		"question" : "Q5: Most spoken language?",
		"choice1" : "Spanish",
		"choice2" : "Russian",
		"choice3" : "Mandarin Chinese",
		"choice4" : "English"
	},

	{
		"question" : "Q6: Largest country by land area?",
		"choice1" : "USA",
		"choice2" : "Australia",
		"choice3" : "Canada",
		"choice4" : "Russia"
	},

	{
		"question" : "Q7: Female heads of state?",
		"choice1" : "35",
		"choice2" : "15",
		"choice3" : "6",
		"choice4" : "53"
	},

	{
		"question" : "Q8: Richest country in the world?",
		"choice1" : "Norway",
		"choice2" : "Brunei",
		"choice3" : "Qatar",
		"choice4" : "Germany"
	},

	{
		"question" : "Q9: Most visited city in the world?",
		"choice1" : "London",
		"choice2" : "Bangkok",
		"choice3" : "Paris",
		"choice4" : "Istanbul"
	},

	{
		"question" : "Q10: How many countries in Africa?",
		"choice1" : "26",
		"choice2" : "17",
		"choice3" : "55",
		"choice4" : "38"
	}
];

var correctAnswer = ["Tokyo", "China", "Vatican City", "193", "Mandarin Chinese", "Russia", "15", "Qatar", "Bangkok", "55"];

// var q is the current question number
var q = 0;

function scorePage() {
	$("#quizPage").hide();
	$("#scorePage").show();
}
	
function displayQuiz() {
	
	// initial question and 4 choices
	$("#quiz").append(quiz[q].question);
		
	$("#choices").append('<input type="radio" name="question">').append(quiz[q].choice1);
	$("#choices").append('<input type="radio" name="question">').append(quiz[q].choice2);
	$("#choices").append('<input type="radio" name="question">').append(quiz[q].choice3);
	$("#choices").append('<input type="radio" name="question">').append(quiz[q].choice4);

	// move to next question for 10 questions
	$("#nextQuestion").click(function() {
		q++;
		
		if (q===9) {
			$("button").html("Submit Quiz");	
		};
		
		if (q===10) {
			scorePage();
			return;
		};
	
		$("#quiz").empty();
		$("#choices").empty();
		
		$("#quiz").append(quiz[q].question);
		
		$("#choices").append('<input type="radio" name="question">').append(quiz[q].choice1);
		$("#choices").append('<input type="radio" name="question">').append(quiz[q].choice2);
		$("#choices").append('<input type="radio" name="question">').append(quiz[q].choice3);
		$("#choices").append('<input type="radio" name="question">').append(quiz[q].choice4);
		$.each($('input[name="question"]:checked'), function() {
			console.log(this.val);
		});
		

	});		
}; 

displayQuiz();





}); //document ready function


