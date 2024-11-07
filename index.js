var toggleButton = document.getElementById('toggle-skills');
var toggle1Button = document.getElementById('toggle1-skills');
var skills = document.getElementById('Skills');
toggleButton.addEventListener('click', function () {
    skills.style.display = 'block';
    toggleButton.style.display = 'none';
    toggle1Button.style.display = 'block';
});
toggle1Button.addEventListener('click', function () {
    skills.style.display = 'none';
    toggle1Button.style.display = 'none';
    toggleButton.style.display = 'block';
});
