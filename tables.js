/*
 * Project:     Tables
 * Description: Education web mobile app that lets user practice his/her
 *              multiplication table skills.
 * Website:     http://ezraezraezra.com/class/woaa/class5/tables
 * 
 * Author:      Ezra Velazquez
 * Website:     http://ezraezraezra.com
 * Date:        October 2011 (Originally developed February 2011)
 * 
 */
/** Holds functionality for the multiplication table */
(function(){
	var num1;
	var num2;
	var right = 0;
	var wrong = 0;
	
	var $the_answer;
	var $submit;
	var $score_left;
	var $score_right;
	var $math_container;
	
	$(document).ready(function(){
		$the_answer = $("#the_answer");
		$submit = $("#submit");
		$score_left = $("#score_left");
		$score_right = $("#score_right");
		$math_container = $("#math_container");
		
		algorithm();
		$the_answer.focus();
		
		$submit.click(function(){
			checkAnswer();
		});
		
		$(window).keypress(function(){
			// Capture Enter Key
			if (event.keyCode == 13) {
				checkAnswer();
			}
		});
	});
	
	/**
	 * Check user input
	 */
	function checkAnswer(){
		if (num1 * num2 == parseInt($the_answer.val())) {
			algorithm();
			right++;
			updateScore(1);
		}
		else {
			wrong++;
			updateScore(0);
		}
		$the_answer.val("");
		$the_answer.focus();
	}
	
	/**
	 * Randomly generate table
	 */
	function algorithm(){
		num1 = Math.floor(Math.random() * 13);
		num2 = Math.floor(Math.random() * 13);
		$math_container.html(num1 + " x " + num2);
	}
	
	/**
	 * Update visual score
	 * @param {int} 1 for correct, 0 for incorrect
	 */
	function updateScore(x){
		if (x == 1) {
			$score_left.html("C: " + right);
		}
		else 
			if (x === 0) {
				$score_right.html("W: " + wrong);
			}
	}
})();
