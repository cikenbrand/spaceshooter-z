class OptionsMenu{
    constructor(menu, selector, sfxVolume, bgmVolume){
        this.menu = menu;
        this.selector = selector;
        this.sfxVolume = sfxVolume;
        this.bgmVolume = bgmVolume;
        this.SFXValueText = document.createElement('span');
        this.BGMValueText = document.createElement('span');
        this.SFXContainer = document.createElement('div');
        this.BGMContainer = document.createElement('div');
        this.SFXText = document.createElement('span');
        this.BGMText= document.createElement('span');
        this.exitContainer = document.createElement('div');
        this.exitText = document.createElement('span');
        this.optionsLogo = document.createElement('div');
    }

    Show(){
        this.optionsLogo.setAttribute('id', 'options-logo');

        this.SFXContainer.setAttribute('id', 'sfx');
        this.BGMContainer.setAttribute('id', 'bgm');
        this.exitContainer.setAttribute('id', 'exit');
        AddClassToElement(this.SFXContainer, 'menu-item');
        AddClassToElement(this.BGMContainer, 'menu-item');
        AddClassToElement(this.exitContainer, 'menu-item');
        this.menu.append(this.optionsLogo);
        this.menu.append(this.SFXContainer);
        this.menu.append(this.BGMContainer);
        this.menu.append(this.exitContainer);

        this.SFXText.style.position = 'relative';
        this.SFXText.style.right = '30px';
        this.BGMText.style.position = 'relative';
        this.BGMText.style.right = '23px';
        this.exitText.style.position = 'relative';
        this.exitText.style.right = '24px';
        this.SFXText.innerText = "SFX";
        this.BGMText.innerText = "BGM";
        this.exitText.innerText = "EXIT";
        AddClassToElement(this.SFXText, 'text-menu');
        AddClassToElement(this.BGMText, 'text-menu');
        AddClassToElement(this.exitText, 'text-menu');

        this.SFXValueText.innerText = parseInt(this.sfxVolume * 10);
        this.BGMValueText.innerText = parseInt(this.bgmVolume * 10);
        AddClassToElement(this.SFXValueText, 'text-menu', 'value-text');
        AddClassToElement(this.SFXValueText, 'value-text');

        AddClassToElement(this.BGMValueText, 'text-menu', 'value-text');
        this.SFXContainer.append(this.SFXValueText);
        this.BGMContainer.append(this.BGMValueText);

        this.SFXContainer.append(this.selector);
        this.SFXContainer.append(this.SFXText);
        this.BGMContainer.append(this.BGMText);
        this.exitContainer.append(this.exitText);
    }
}