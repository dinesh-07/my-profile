const linkElement = document.getElementById('theme-style');
let themeDots = document.querySelectorAll('.theme-dot');

const setTheme = (mode) => {
  if (mode === 'light') {
    linkElement.href = 'style.css';
  } else if (mode === 'blue') {
    linkElement.href = 'blue.css';
  } else if (mode === 'green') {
    linkElement.href = 'green.css';
  } else if (mode === 'purple') {
    linkElement.href = 'purple.css';
  }
  localStorage.setItem('theme', mode);
};

for (let i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener('click', () => {
    let mode = themeDots[i].dataset.mode;
    setTheme(mode);
  });
}

let theme = localStorage.getItem('theme');

if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}
