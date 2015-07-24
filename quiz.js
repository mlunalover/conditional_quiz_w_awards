var correct = 0;
var wrong = 0;
var firstQuestion = prompt('Is 1 < 2?');
if(firstQuestion ==='yes' || firstQuestion ==='Yes')  {
  alert('Correct!');
  document.write('<p>Question 1. Correct!</p>');
  correct +=1;
} else  {
  alert('Wrong!');
  document.write('<p>Question 1. Wrong!</p>');
  wrong +=1;
}
var secondQuestion = prompt('Is 2 > 5?');
if(secondQuestion ==='no' || secondQuestion ==='No')  {
  alert('Correct!');
  document.write('<p>Question 2. Correct!</p>');
  correct +=1;
} else  {
  alert('Wrong!');
  document.write('<p>Question 2. Wrong!</p>');
  wrong +=1;
}
var thirdQuestion = prompt('Is 10 > 11?');
if(thirdQuestion ==='no' || thirdQuestion ==='No')  {
  alert('Correct!');
  document.write('<p>Question 3. Correct!</p>');
  correct +=1;
} else  {
  alert('Wrong!');
  document.write('<p>Question 3. Wrong!</p>');
  wrong +=1;
}
var fourthQuestion = prompt('Is 15 < 10?');
if(fourthQuestion ==='no' || fourthQuestion ==='No')  {
  alert('Correct!');
  document.write('<p>Question 4. Correct!</p>');
  correct +=1;
} else  {
  alert('Wrong!');
  document.write('<p>Question 4. Wrong!</p>');
  wrong +=1;
}
var fifthQuestion = prompt('Is 8 < 3?');
if(secondQuestion ==='no' || secondQuestion ==='No')  {
  alert('Correct!');
  document.write('<p>Question 5. Correct!</p>');
  correct +=1;
} else  {
  alert('Wrong!');
  document.write('<p>Question 5. Wrong!</p>');
  wrong +=1;
}

if(correct >= 3)  {
  alert('Gold Crown!');
} else if(correct === 1 || correct === 2) {
  alert('Silver Crown!');
} else  {
  alert('Bronze Crown!');
}
document.write('<p>You got ' + correct + ' correct.</p>');
document.write('<p>You got ' + wrong +' wrong.</p>');
