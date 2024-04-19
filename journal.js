const journalEntries = [
    { date: "2024-04-17", entry: "Today was a great day!" },
    { date: "2024-04-16", entry: "Yesterday was also great!" },
    // Add more entries as needed
  ];
  
  const journalContainer = document.querySelector('.journal-entries');
  const journalEntryInput = document.getElementById('journalEntry');
  const saveEntryButton = document.getElementById('saveEntry');
  const prevDayButton = document.getElementById('prevDay');
  const nextDayButton = document.getElementById('nextDay');
  
  let currentDateIndex = 0;
  
  const renderJournalEntry = (entry) => {
    const entryElement = document.createElement('div');
    entryElement.classList.add('journal-entry');
    entryElement.innerHTML = `
      <p><strong>Date:</strong> ${entry.date}</p>
      <p><strong>Entry:</strong> ${entry.entry}</p>
    `;
    journalContainer.appendChild(entryElement);
  };
  
  const renderJournalEntries = () => {
    journalContainer.innerHTML = '';
    const currentDateEntry = journalEntries[currentDateIndex];
    renderJournalEntry(currentDateEntry);
  };
  
  const saveJournalEntry = () => {
    const entryText = journalEntryInput.value.trim();
    if (entryText !== '') {
      const currentDate = new Date().toISOString().slice(0, 10);
      journalEntries.push({ date: currentDate, entry: entryText });
      renderJournalEntries();
      journalEntryInput.value = ''; // Clear the textarea after saving
    }
  };
  
  saveEntryButton.addEventListener('click', saveJournalEntry);
  
  prevDayButton.addEventListener('click', () => {
    if (currentDateIndex > 0) {
      currentDateIndex--;
      renderJournalEntries();
    }
  });
  
  nextDayButton.addEventListener('click', () => {
    if (currentDateIndex < journalEntries.length - 1) {
      currentDateIndex++;
      renderJournalEntries();
    }
  });
  
  renderJournalEntries();
  