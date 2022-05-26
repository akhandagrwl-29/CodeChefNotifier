let problem_name = document.querySelectorAll(".breadcrumb a")[2].innerText;

let problem_id = document.getElementsByClassName("run-details-info")[0].children[1].children[1].children[0].innerHTML;

const problem = {
name : problem_name,
id : problem_id
};

// chrome.runtime.onConnect.addListener(function(port) {
//   port.postMessage(problem);
// });

var port = chrome.runtime.connect();
document.querySelector(".submit-run .ns-button").addEventListener("click",()=>{
  port.postMessage(problem);
})
