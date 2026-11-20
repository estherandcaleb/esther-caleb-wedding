// Personalise these values before publishing.
const CONFIG = {
  rsvpUrl: "", // Paste your Google Form or RSVP destination URL here.
  musicUrl: "", // Add a royalty-free MP3 file path, e.g. assets/song.mp3
  weddingDate: "2027-02-27T10:00:00+03:00"
};
const intro = document.getElementById('intro');
const envelope = document.getElementById('envelope');
const openButton = document.getElementById('openButton');
const site = document.getElementById('site');
function openInvite(){ envelope.classList.add('open'); setTimeout(()=>{intro.classList.add('closed');site.classList.add('visible');site.setAttribute('aria-hidden','false');document.body.style.overflow='auto';},650); }
openButton.addEventListener('click',openInvite); envelope.addEventListener('click',openInvite); envelope.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openInvite();}});
const music=document.getElementById('bgMusic'), musicButton=document.getElementById('musicButton');
if(CONFIG.musicUrl){music.src=CONFIG.musicUrl;musicButton.addEventListener('click',async()=>{if(music.paused){try{await music.play();musicButton.innerHTML='♫ <span>Music on</span>';}catch(e){musicButton.innerHTML='♫ <span>Tap to play</span>';}}else{music.pause();musicButton.innerHTML='♫ <span>Music off</span>';}});}else{musicButton.addEventListener('click',()=>alert('Add your music file in CONFIG.musicUrl in script.js to enable music.'));}
if(CONFIG.rsvpUrl){const rsvp=document.getElementById('rsvpLink');rsvp.href=CONFIG.rsvpUrl;rsvp.target='_blank';rsvp.rel='noopener';document.getElementById('rsvpNote').textContent='Your RSVP will open in a new tab.';}else{document.getElementById('rsvpLink').addEventListener('click',e=>{e.preventDefault();alert('Add your RSVP form link in CONFIG.rsvpUrl in script.js before publishing.');});}
const target=new Date(CONFIG.weddingDate).getTime();function tick(){let delta=Math.max(0,target-Date.now());const days=Math.floor(delta/86400000);delta%=86400000;const hours=Math.floor(delta/3600000);delta%=3600000;const minutes=Math.floor(delta/60000);delta%=60000;const seconds=Math.floor(delta/1000);document.getElementById('days').textContent=days;document.getElementById('hours').textContent=String(hours).padStart(2,'0');document.getElementById('minutes').textContent=String(minutes).padStart(2,'0');document.getElementById('seconds').textContent=String(seconds).padStart(2,'0');}tick();setInterval(tick,1000);
