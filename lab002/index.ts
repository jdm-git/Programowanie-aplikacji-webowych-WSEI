let hihatSound: HTMLAudioElement;
let clap: HTMLAudioElement;

const channel1: any[] = [];

appStart();
function appStart(): void{
    document.body.addEventListener('keypress', onKeyDown);
    const btnChannel1Play = document.querySelector('#btnChannel1');
    btnChannel1Play.addEventListener('click',onPlayChanell1);
    getSounds();

}
function onPlayChanell1(): void{
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    });
}
function getSounds(): void {
    hihatSound =  document.querySelector('[data-sound="hihat"]');
    clap =  document.querySelector('[data-sound="clap"]');
}

function onKeyDown(ev: KeyboardEvent): void{
    console.log(ev);
    const key = ev.key;
    const time = ev.timeStamp;
    channel1.push({key, time}); // skrocona notacja key: value


    playSound(key);
    console.log(channel1);
}

function playSound(key: string): void {
    // const keyboardKey = hihatSound.dataset.key

    switch (key){
        case 'a':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 's': 
            clap.currentTime = 0;
            clap.play();
            break;
    }
    
}
