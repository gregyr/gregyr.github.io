
months = ["Jan. ", "Feb. ", "Mar. ", "Apr. ", "May. ", "Jun. ", 
 "Jul. ", "Aug. ", "Sep. ", "Oct. ", "Nov. ", "Dec. "]

function randomDate(start, end) {
  date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date
}

function formatDate(date){
  date_formatted = [date.getDate(), ". ", months[date.getMonth()], date.getFullYear()];
  return date_formatted.join('')
}

guess_text = document.querySelector(".current_guess");
lower_div = document.querySelector(".lower-dates")
higher_div = document.querySelector(".higher-dates")
let guesses = 1
let lower_bound = new Date(1900, 0, 1)
let upper_bound = new Date()
let current_guess = randomDate(lower_bound, upper_bound)
console.log(current_guess)
guess_text.text = formatDate(current_guess)

function guess_date(status){
  const date_element = document.createElement("a");
  date_element.classList.add("list-element")
  if(status == "lower"){
    upper_bound = current_guess
    date_element.text = formatDate(current_guess)
    higher_div.appendChild(date_element)
  }
  if(status == "higher"){
    lower_bound = current_guess
    date_element.text = formatDate(current_guess)
    lower_div.appendChild(date_element)
  }
  guesses++
  current_guess = randomDate(lower_bound, upper_bound)
  guess_text.text = formatDate(current_guess)
  console.log(`current: ${current_guess}`)
  console.log(`upper: ${upper_bound}`)
  console.log(`lower: ${lower_bound}`)
}

function showResult(){
  gameloop_container = document.querySelector(".gameloop-container")
  gameloop_container.innerHTML = ''

  result_display = `
  <div class = "guess_wrapper">
  <a class="current_guess"> Your Birthdate is: ${formatDate(current_guess)} </a>
  <a class="current_guess"> It took you: ${guesses} guesses </a>
  <button class = "result-button" onclick="location.reload();"> Play again! </button>
  </div>
  `

  gameloop_container.innerHTML = result_display

}




