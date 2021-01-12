const modal = document.getElementById('myModal'),
  login = document.querySelector('.b-login'),
  filmsTab = document.getElementById('films-content'),
  tvsTab = document.getElementById('tv-ch-content'),
  filmsHeader = document.getElementById('films'),
  tvsHeader = document.getElementById('tv-channels'),
  logout = document.querySelector('.logout');

document.addEventListener('DOMContentLoaded', () => {
  filmsTab.style.display = 'block';
  filmsHeader.className += ' active';
  tvsTab.style.display = 'none';
  let username = localStorage.getItem('login');

  if (username) {
    logged.innerText = username;
    login.style.display = 'none';
    logout.style.display = 'inline';
  } return;
});

logout.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('login');
  logged.style.display = 'none';
  logout.style.display = 'none';
  login.style.display = '';
})

tvsHeader.addEventListener('click', () => {
  filmsTab.style.display = 'none';
  tvsTab.style.display = 'block';

  if (tvsHeader.className.includes('active')) return;

  filmsHeader.className = filmsHeader.className.replace(' active', '');
  tvsHeader.className += ' active';
});

filmsHeader.addEventListener('click', () => {
  tvsTab.style.display = 'none';
  filmsTab.style.display = 'block';
  
  if (filmsHeader.className.includes('active')) return;

  tvsHeader.className = tvsHeader.className.replace(' active', '');
  filmsHeader.className += ' active';
});

login.addEventListener('click', (e) => {
  modal.style.display = 'block';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) modal.style.display = 'none';
});

// работа с модальным окном
const modalLogin = document.querySelector('.b-modal-login'),
  chkbx = document.querySelector('.modal-checkbox'),
  loginStr = document.querySelector('.modal-login'),
  logged = document.querySelector('.username'),
  usernameWarn = document.querySelector('.warning-username'),
  saveWarn = document.querySelector('.warning-save'),
  storageWarn = document.querySelector('.warning-storage')
  namePattern = /^[А-Я][а-я]{3,16}$/;

modalLogin.addEventListener('click', (e) => {
  e.preventDefault();

  if (chkbx.checked) {
    if (namePattern.test(loginStr.value)) {
      try {
        localStorage.setItem('login', loginStr.value);
        modal.style.display = 'none';
        logged.innerText = loginStr.value;
        logged.style.display = 'block';
        login.style.display = 'none';
        logout.style.display = 'inline';
      } catch (error) {
        if (error == QUOTA_EXCEEDED_ERR) {
          usernameWarn.style.display = 'none';
          saveWarn.style.display =  'none';
          storageWarn.style.display = 'block';
        }
      }
    } else {
      saveWarn.style.display = 'none';
      storageWarn.style.display = 'none';
      usernameWarn.style.display = 'block';
      }
  } else {
    storageWarn.style.display = 'none';
    usernameWarn.style.display = 'none';
    saveWarn.style.display = 'block';
  }
});
