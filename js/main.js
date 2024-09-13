onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // Define text with sections separated by commas and associated styles
    const sections = [
      { text: 'SOSTENTE FUERTE YO SIENTO LO MISMO QUE ', color: '#ff6f61', font: 'Comic Sans MS', case: 'uppercase' },  // Soft coral color
      { text: 'tu sientes ', color: '#ff3F61', font: 'Comic Sans MS', case: 'lowercase' },  // Deep coral color
      { text: 'MIRADAS QUE NO MIENTEN ', color: '#ffcc5c', font: 'Verdana', case: 'uppercase' },  // Soft yellow color
      { text: 'sonrizas que muestran dientes ', color: '#88d8b0', font: 'Trebuchet MS', case: 'lowercase' },  // Soft mint color
      { text: 'CONTIGO TODO ', color: '#f5a623', font: 'Arial', case: 'uppercase' },  // Warm orange color
      { text: 'es más que suficiente no ocupo de alguien más solo a ti presente. ', color: '#c1c1c1', font: 'Georgia', case: 'lowercase' },  // Light gray color
      { text: 'no ocupo de alguien más ', color: '#9e9d24', font: 'Tahoma', case: 'uppercase' },  // Olive green color
      { text: 'solo a ti presente', color: '#8bc34a', font: 'Trebuchet MS', case: 'lowercase' },  // Fresh green color
    ];

    const titleElement = document.getElementById('title');
    let index = 0;
    let sectionIndex = 0;

    function appendTitle() {
      if (sectionIndex < sections.length) {
        const section = sections[sectionIndex];
        const chars = section.text.split('');
        let charIndex = 0;

        function appendSection() {
          if (charIndex < chars.length) {
            const span = document.createElement('span');
            span.style.color = section.color;
            span.style.fontFamily = section.font;
            span.textContent = chars[charIndex];
            titleElement.appendChild(span);
            charIndex++;
            setTimeout(appendSection, 100); // 100ms delay per character
          } else {
            sectionIndex++;
            setTimeout(appendTitle, 500); // 500ms delay between sections
          }
        }
        appendSection();
      }
    }

    appendTitle();
  }, 0);
}