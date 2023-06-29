const timeElement = document.querySelector('#curTime');
const chatElement = document.querySelector('.whatsapp-click');
const closeElement = document.querySelector('#closeModal');
const WaModal = document.querySelector('.whatsapp-modal');
const clickChat = document.querySelector('.wm-chat-block');

const sendTo = '+234701165';
const initText = 'Hello, I would like to employ your service';
const url = `https://api.whatsapp.com/send?phone=${sendTo}&text=${initText}`;

const toggleWAModal = () => {
  const d = new Date(); // for now
  const h = d.getHours(); // => 9
  const m = String(d.getMinutes()).padStart(2, '0'); // =>  30
  timeElement.innerHTML = h + ':' + m;

  if (WaModal.style.opacity > 0) {
    clickChat.style.display = 'none';
    WaModal.style.opacity = 0;
    return;
  }
  clickChat.style.display = 'flex';
  WaModal.style.opacity = 1;
};

chatElement.addEventListener('click', toggleWAModal);
closeElement.addEventListener('click', toggleWAModal);
clickChat.addEventListener('click', () => {
  window.open(url, '_blank');
});
