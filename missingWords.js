function missingWords(s, t) {
  let sWords = s.split(' ');
  let tWords = t.split(' ');
  let missing = [];
  let j = 0;
  for (let i = 0; i < sWords.length; i++) {
    if (j < tWords.length && sWords[i] === tWords[j]) {
      j++;
    } else {
      missing.push(sWords[i]);
    }
  }
  return missing;

  // return sWords.filter((word,index) => {
  //   if(!tWords.includes(word) && sWords) {

  //   }
  // })
}

missingWords(
  'Python is an easy to learn powerful programming language It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing',
  'Python is an easy to learn powerful programming language'
);

missingWords(
  'Python is an easy to learn powerful programming language It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing',
  'programming Python elegant syntax and dynamic typing'
);

// 'programming Python elegant syntax and dynamic typing'.includes("Python is")
