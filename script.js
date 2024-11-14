// 1-тапсырма

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      continue;
    }
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('3-5');  
    } else if (i % 3 === 0) {
      console.log('3'); 
    } else if (i % 5 === 0) {
      console.log('5'); 
    } else if (i % 4 === 0) {
      console.log('4'); 
    } else if (i % 7 === 0) {
      console.log('7'); 
    } else {
      console.log(i);  
    }
  }
  

// 2-тапсырма

  let score = 0;

  let answer1 = prompt("Қазақстанның астанасы қай қала?");
  if (answer1 === "Астана" || answer1 === "Нур-Султан") {
    score += 5;
  } else {
    score -= 1;
  }

  let answer2 = prompt("JavaScript тілі қандай мақсатта қолданылады?");
  if (answer2 === "Веб-разработка" || answer2 === "Веб") {
    score += 5;
  } else {
    score -= 1;
  }

  let answer3 = prompt("Қазақ тілінде 'Hello' деген сөз қалай айтылады?");
  if (answer3 === "Сәлем") {
    score += 5;
  } else {
    score -= 1;
  }

  alert("Сіздің ұпайыңыз: " + score);



// 3-тапсырма


  let start = басталуы(prompt("Бастапқы санды енгізіңіз:"));
  let end = бітуі(prompt("Соңғы санды енгізіңіз:"));

  let num4 = 1;
  let num7 = 1;
  let bum4 = false;
  let bum7 = false;

  let i = start;
  do {
    if (i % 4 === 0) {
        num4 *= i;
        bum4 = true;
    }
    i++;
  } while (i <= end);

  i = start;
  do {
    if (i % 7 === 0) {
        num7  *= i;
        bum7  = true;
    }
    i++;
  } while (i <= end);

  if (bum4) {
    alert("4-ке қалдықсыз бөлінетін сандардың көбейтіндісі: " + num4);
  } else {
    alert("4-ке қалдықсыз бөлінетін сандар табылмады.");
  }

  if (bum7) {
    alert("7-ге қалдықсыз бөлінетін сандардың көбейтіндісі: " + num7 );
  } else {
    alert("7-ге қалдықсыз бөлінетін сандар табылмады.");
  }

