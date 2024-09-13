const title = document.querySelector('.title');
const lines = [
  { text: 'Ginn', emojiBefore: '🌻', emojiAfter: '🌻' },
  'Hoy es viernes 13',
  'y quiero que sepas que...'
];

lines.forEach((line, lineIndex) => {
  const lineDiv = document.createElement('div');
  lineDiv.classList.add('line');
  
  if (typeof line === 'object') {
    // Add emoji before and after the text
    const emojiBefore = document.createElement('span');
    emojiBefore.textContent = line.emojiBefore;
    emojiBefore.classList.add('emoji-before');

    const textSpan = document.createElement('span');
    textSpan.textContent = line.text;

    const emojiAfter = document.createElement('span');
    emojiAfter.textContent = line.emojiAfter;
    emojiAfter.classList.add('emoji-after');

    lineDiv.appendChild(emojiBefore);
    lineDiv.appendChild(textSpan);
    lineDiv.appendChild(emojiAfter);
  } else {
    const textSpan = document.createElement('span');
    textSpan.textContent = line;
    lineDiv.appendChild(textSpan);
  }

  title.appendChild(lineDiv);

  // Add a line break except for the last line
  if (lineIndex < lines.length - 1) {
    title.innerHTML += '<br>';
  }
});

// Add animation delay
const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Random delay between 0 and 3 seconds
  element.style.animationDelay = `${randomDelay}s`;
});