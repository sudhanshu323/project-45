class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder","Enter your name");
        this.playbutton = createButton("Play");
        this.logo = createImg("assets/logo.png","Game title");
        this.title = createElement("h1");
    }

    setElementsPosition(){
        this.input.position(width/2,height/2);
        this.playbutton.position(width/2,height/2+60);
        this.logo.position(width/4-150,height/4-50);
        this.title.position(width/4+110,height/4-60);
    }

    setElementsStyle(){
        this.title.class("title");
        this.input.class("input");
        this.button.class("button");
    }
    display(){
        this.title.html("Car League");
        this.setElementsPosition();
        this.setElementsStyle();
    }
}