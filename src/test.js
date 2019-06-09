const alpha = [];

function genCharArray(charA, charZ) {
  let i = charA.charCodeAt(0);
  const j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    alpha.push(String.fromCharCode(i));
  }
  return alpha;
}
genCharArray('a', 'z');


function caesarCipher(str, num) {
  let newString = [];
  const lowerCaseString = str.toLowerCase();
  for (let i = 0; i < lowerCaseString.length; i++) {
    const currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    const currentIndex = alpha.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex -= 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    newString += alphabet[newIndex];
  }
}

caesarCipher('zoo keeper', 2);
