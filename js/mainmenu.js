class MainMenu{
    constructor(menu, selector){
        this.menu = menu;
        this.selector = selector;
        this.startMenu = document.createElement('div');
        this.startText = document.createElement('span');
        this.title = document.createElement('div');
        this.optionsMenu = document.createElement('div');
        this.optionsText = document.createElement('span');
    }

    Show(){
        this.menu.setAttribute('id', 'menu');

        document.body.prepend(this.menu);
    
        this.title.setAttribute('id', 'title');
    
        menu.append(this.title);
        
        AddClassToElement(this.startMenu, 'menu-item');
    
        this.startMenu.setAttribute('id', 'start');
        AddClassToElement(this.startText, 'text-menu');
        this.startText.innerText = "START";
        
        this.menu.append(this.startMenu);
        this.startMenu.append(this.selector);
        this.startMenu.append(this.startText);
    
        AddClassToElement(this.optionsMenu, 'menu-item');
    
        this.optionsMenu.setAttribute('id', 'options');
        AddClassToElement(this.optionsText, 'text-menu');
        this.optionsText.innerText = "OPTIONS";
    
        this.menu.append(this.optionsMenu);
        this.optionsMenu.append(this.optionsText);
    }
}

