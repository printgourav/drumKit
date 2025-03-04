const grid = document.getElementById('buttonGrid');

const crash = document.getElementById('crash')
const bass = document.getElementById('bass')
const floor = document.getElementById('floor')
const hihat = document.getElementById('hihat')
const snare = document.getElementById('snare')
const rack = document.getElementById('rack')
const chn = document.getElementById('chn')
const ride = document.getElementById('ride')
const splash = document.getElementById('splash')   


const buttonData = [
    {text:'crash-Cymbal', action:() => crash.play()},
    {text:'bass-Drum', action:() => bass.play()},
    {text:'floor-Tom', action:() => floor.play()},
    {text:'snare-Drum', action:() => snare.play()},
    {text:'rack-Tom', action:() => rack.play()},
    {text:'hi-Hat', action:() => hihat.play()},
    {text:'china-Cymbal', action:() => chn.play()},
    {text:'ride-Cymbal', action:() => ride.play()},
    {text:'splash-Play', action:()=> splash.play()},
];


buttonData.forEach(data=>{
    const button = document.createElement('button');
    button.className = 'grid-button';
    button.className = 'glow-on-hover';
    button.textContent = data.text;
    button.addEventListener('click', ()=> data.action());
    grid.appendChild(button);
});
