function CreateCanvas(color, {particles : {enableStars = null, starsCount = null}}){
    //get canvas id
    const canvas = document.getElementById('canvas');

    //canvas background color
    canvas.style.backgroundColor = color;

    //create app state
    const appState = document.createElement('appstate');

    //prepend app state to document head
    document.head.prepend(appState);

    //create menu element
    const menu = document.createElement('div');

    //create selector element
    const selector = document.createElement('div');

    //additional properties
    this.enableStars = enableStars;

    if(this.enableStars == true){
        //create a div for particles placeholder 
        var particles = document.createElement('div');

        //assign id to particle
        particles.setAttribute('id', 'particles-js');

        //prepend to body
        document.body.prepend(particles);

        //#region create stars
        new particlesJS("particles-js", {
            "particles": {
                "number": {
                "value": starsCount,
                "density": {
                    "enable": true,
                    "value_area": 789.1476416322727
                }
                },
                "color": {
                "value": "#ffffff"
                },
                "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "width": 100,
                    "height": 100
                }
                },
                "opacity": {
                "value": 0.48927153781200905,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 0.2,
                    "opacity_min": 0,
                    "sync": false
                }
                },
                "size": {
                "value": 2,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0,
                    "sync": false
                }
                },
                "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
                },
                "move": {
                "enable": true,
                "speed": 20,
                "direction": "bottom",
                "random": true,
                "straight": true,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
                },
                "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                    "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 83.91608391608392,
                    "size": 1,
                    "duration": 3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
                }
            },
            "retina_detect": true
        });
        //#endregion
    }

    let sfxVolume = 1;
    let bgmVolume = 1;

    const mainMenu = new MainMenu(menu, selector);

    const optionsMenu = new OptionsMenu(menu, selector, sfxVolume, bgmVolume);

    document.addEventListener('DOMContentLoaded',()=>{
        //show main menu
        mainMenu.Show();

        //set app state to main menu & start menu item upon starting
        AddClassToElement(appState, 'main-menu', 'start');

        //assign the selector style
        AddClassToElement(selector, 'selector');
    });

    //audio for selector menu
    const sfxObject = new Audio();
    const sfxSource = {select:"audio/droplet-select.mp3", confirm:"audio/confirm-select.mp3"}

    function SFX(audioObject, audioSource){
        var _audioObject = audioObject;
        var _audioSource = audioSource;

        _audioObject.volume = sfxVolume;
        _audioObject.src = "";
        _audioObject.src = _audioSource;

        return _audioObject;
    }

    //bgm
    const bgmObject = new Audio();
    bgmSource = "bgm/tomorrow.mp3";
    let bgmStart = false;
    bgmObject.loop = true;
    bgmObject.volume = bgmVolume;

    document.addEventListener('click', ()=> {
        if(!bgmStart){
            bgmObject.src = bgmSource;
            bgmObject.play();
            bgmStart = true;
        }
    });

    //set keydown event listener to checkkey function if on main menu
    document.onkeydown = checkKey;
    
    //checkkey function
    function checkKey(e) {
        e = e || window.event;

        switch(e.keyCode){
            case 38: //key up
                if(ContainClass(appState, 'main-menu') && ContainClass(appState, 'options')){
                    //play sound if the selector is not on start
                    SFX(sfxObject, sfxSource.select).play();
                    ToggleElementClass(appState, 'options', 'start');
                    mainMenu.startMenu.append(selector);
                    
                } else if(ContainClass(appState, 'options-menu') && ContainClass(appState, 'bgm')){
                    SFX(sfxObject, sfxSource.select).play();
                    ToggleElementClass(appState, 'bgm', 'sfx');

                    optionsMenu.SFXContainer.append(selector);
                } else if(ContainClass(appState, 'options-menu') && ContainClass(appState, 'exit')){
                    SFX(sfxObject, sfxSource.select).play();
                    ToggleElementClass(appState, 'exit', 'bgm');
                    optionsMenu.BGMContainer.append(selector);
                }
                break;
            case 40: //key down
                if(ContainClass(appState, 'main-menu') && ContainClass(appState, 'start')){
                    //play sound if the selector is not on options
                    SFX(sfxObject, sfxSource.select).play();
                    ToggleElementClass(appState, 'start', 'options');
                    mainMenu.optionsMenu.append(selector);         
                }
                else if(ContainClass(appState, 'options-menu') && ContainClass(appState, 'sfx')){
                    SFX(sfxObject, sfxSource.select).play();
                    ToggleElementClass(appState, 'sfx', 'bgm');
                    optionsMenu.BGMContainer.append(selector);
                } else if(ContainClass(appState, 'options-menu') && ContainClass(appState, 'bgm')){
                    SFX(sfxObject, sfxSource.select).play();
                    ToggleElementClass(appState, 'bgm', 'exit');
                    optionsMenu.exitContainer.append(selector);
                }

                break;
            case 37: //key left
                if(ContainClass(appState, 'options-menu') && ContainClass(appState, 'sfx')){
                    sfxVolume -= 0.1;
                    if(sfxVolume <= 0){
                        sfxVolume = 0;
                    }

                    SFX(sfxObject, sfxSource.select).volume = sfxVolume.toFixed(1);
                    console.log("SFX:" + SFX(sfxObject, sfxSource.select).volume);
                    SFX(sfxObject, sfxSource.select).play();
                    optionsMenu.SFXValueText.innerText = parseInt(sfxVolume * 10);

                    if(sfxVolume.toFixed(1) == 0){
                        optionsMenu.SFXValueText.innerText = 0;
                    }
                }
        
                if(ContainClass(appState, 'options-menu') && ContainClass(appState, 'bgm')){
                    bgmVolume -= 0.1;
                    if(bgmVolume <= 0){
                        bgmVolume = 0;
                    }

                    bgmObject.volume = bgmVolume.toFixed(1);
                    console.log("BGM:" + bgmObject.volume);
                    SFX(sfxObject, sfxSource.select).play();
                    optionsMenu.BGMValueText.innerText = parseInt(bgmVolume * 10);

                    if(bgmVolume.toFixed(1) == 0){
                        optionsMenu.BGMValueText.innerText = 0;
                    }
                }
                break;
            case 39: //key right
                if(ContainClass(appState, 'options-menu') && ContainClass(appState, 'sfx')){
                    sfxVolume += 0.1;
                    if(sfxVolume >= 1){
                        sfxVolume = 1;
                    }
                    SFX(sfxObject, sfxSource.select).volume = sfxVolume.toFixed(1);
                    console.log("SFX:" + SFX(sfxObject, sfxSource.select).volume);
                    SFX(sfxObject, sfxSource.select).play();
                    optionsMenu.SFXValueText.innerText = parseInt(sfxVolume * 10);
                }

                if(ContainClass(appState, 'options-menu') && ContainClass(appState, 'bgm')){
                    bgmVolume += 0.1;
                    if(bgmVolume >= 1){
                        bgmVolume = 1;
                    }

                    bgmObject.volume = bgmVolume.toFixed(1);
                    console.log("BGM:" + bgmObject.volume);
                    SFX(sfxObject, sfxSource.select).play();
                    optionsMenu.BGMValueText.innerText = parseInt(bgmVolume * 10);
                }
                break;
            case 13: //key enter
                if(ContainClass(appState, 'main-menu') && ContainClass(appState, 'options')){
                    //play selected sound
                    SFX(sfxObject, sfxSource.confirm).play();

                    mainMenu.optionsText.classList.add('blink');
                    RemoveClassFromElement(appState, 'main-menu', 'options');

                    setTimeout(()=>{
                        AddClassToElement(canvas, 'fade-out');
                        //optionsMenu.SFXContainer.append(selector);

                        canvas.addEventListener('animationend', function(){
                            ToggleElementClass(canvas, 'fade-out', 'fade-in');
                            RemoveAllChildElements(menu);
                            optionsMenu.Show();
                        });
                    }, 1000);  

                    setTimeout(()=>{
                        RemoveClassFromElement(mainMenu.optionsText, 'blink');
                        AddClassToElement(appState, 'options-menu', 'sfx');
                        RemoveClassFromElement(canvas, 'fade-in');
                    },2500);
                }else if(ContainClass(appState, 'options-menu') && ContainClass(appState, 'exit')){
                    //play selected sound
                    SFX(sfxObject, sfxSource.confirm).play();
                    optionsMenu.exitText.classList.add('blink');
                    RemoveClassFromElement(appState, 'options-menu', 'exit');

                    setTimeout(()=>{
                        console.log('exit');
                        AddClassToElement(canvas, 'fade-out');

                        canvas.addEventListener('animationend', ()=>{
                            RemoveAllChildElements(menu);
                            ToggleElementClass(canvas, 'fade-out', 'fade-in');
                            mainMenu.Show();
                        });
                    }, 1000);

                    setTimeout(()=>{
                        RemoveClassFromElement(optionsMenu.exitText, 'blink');
                        RemoveClassFromElement(canvas, 'fade-in');
                        AddClassToElement(appState, 'main-menu', 'start');
                    }, 2500);
                }
                break;
            default:
                return;
        }
    }
}