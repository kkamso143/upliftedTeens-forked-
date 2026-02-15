console.log("Script loaded!");

document
  .querySelector(".exercise-button")
  .addEventListener("click", function () {
    console.log("Button clicked!");
  });

document
  .querySelector(".exercise-button")
  .addEventListener("click", function () {
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;
    const q4 = document.querySelector('input[name="q4"]:checked')?.value;

    if (!q1 || !q2 || !q3 || !q4) {
      alert("Please answer all the questions!");
      return;
    }

    const boredEasily = q1 === "Always" || q1 === "Not if I am interested";

    const likesPositive = ["yes!", "Its alright", "Dance", "Go for a walk"];
    const dislikesNegative = ["No.", "Sometimes", "Chill in bed", "Watch tv"];

    let likesExercise = false;
    if (likesPositive.includes(q2) || likesPositive.includes(q3)) {
      likesExercise = true;
    } else if (dislikesNegative.includes(q2) && dislikesNegative.includes(q3)) {
      likesExercise = false;
    }

    const randomNumber = q4 === "One" || q4 === "Two" ? 1 : 2;

    let suggestion = "";

    if (boredEasily) {
      if (randomNumber === 1) {
        suggestion = "You should try a YouTube dance workout!";
      } else {
        suggestion = "You should go to a trampoline park!";
      }
    } else if (likesExercise) {
      if (randomNumber === 1) {
        suggestion = "You should go for a run!";
      } else {
        suggestion = "You should go for a walk!";
      }
    } else {
      if (randomNumber === 1) {
        suggestion = "You should try meditating!";
      } else {
        suggestion = "You should play with your pets!";
      }
    }

    // Remove the quiz content and show the result
    document.querySelector(".quiz-container").remove();
    document.querySelector(".exercise-button").remove();

    const resultText = document.createElement("h2");
    resultText.textContent = suggestion;
    resultText.style.color = "#333";
    resultText.style.padding = "40px";
    resultText.style.fontSize = "24px";
    resultText.style.textAlign = "center";

    document.querySelector(".innerText3").innerHTML = suggestion;
  });
