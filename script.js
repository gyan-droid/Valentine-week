
function showYes() {
    const questionBox = document.querySelector('.question-box');
    const photos = document.querySelector('.photos');
    const messageBox = document.createElement('p');
    messageBox.className = 'final-message';
    messageBox.textContent = 'I caught you, and I'm not gonna let you go. He he he he';
    document.querySelector('.container').appendChild(messageBox);
    questionBox.style.display = 'none';
    photos.style.display = 'block';
}
