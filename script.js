function fetchAnswer() {
    fetch('https://yesno.wtf/api')
      .then(response => response.json())
      .then(data => {
        const answer = document.getElementById('answer');
        answer.innerHTML = `<p>${data.answer}</p><img src="${data.image}"/>`;
      });
  }

  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', () => {
    const question = document.getElementById('question');
    if (question.value !== '') {
      fetchAnswer();
      question.value = '';
      setTimeout(() => {
        const answer = document.getElementById('answer');
        answer.innerHTML = '';
      }, 5000);
    }
  });
