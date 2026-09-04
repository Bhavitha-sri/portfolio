document.addEventListener("DOMContentLoaded", function () {

  document.body.classList.add("loaded");

  var resumeBtn = document.querySelector(".btn-secondary");

  resumeBtn.addEventListener("click", function (event) {
    if (resumeBtn.getAttribute("href") === "#") {
      event.preventDefault();
      console.log("Add your resume.pdf link in index.html");
    }
  });
});
