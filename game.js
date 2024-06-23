

function checkAnswer(selectedAnswer, buttonElement) {
    var correctAnswer = "1";
    var questionContainer = buttonElement.closest(".question-container");
    var feedbackElement = questionContainer.querySelector("#mcFeedback");

    // Reset button colors
    questionContainer.querySelectorAll(".ansbtn").forEach(function (btn) {
      btn.style.backgroundColor = "";
    });

    if (selectedAnswer === correctAnswer) {
      buttonElement.style.backgroundColor = "green";
      feedbackElement.textContent = "Correct!";
    } else {
      buttonElement.style.backgroundColor = "red";
      var correctButton = questionContainer.querySelector("#ans" + correctAnswer.replace(" ", ""));
      correctButton.style.backgroundColor = "green";
      feedbackElement.textContent = "Incorrect!";
    }

    disableButtons(questionContainer);
  }

  function disableButtons(questionContainer) {
    questionContainer.querySelectorAll(".ansbtn").forEach(function (button) {
      button.disabled = true;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Multiple Choice buttons
    document.querySelectorAll(".ansbtn").forEach(function (button) {
      button.addEventListener("click", function () {
        checkAnswer(button.value, this);
      });
    });
  });

