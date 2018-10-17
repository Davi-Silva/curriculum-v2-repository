// Getting the DOM Elements
let videoWrap: any = document.querySelector("#video-wrap");
let titleWrap: any = document.querySelector("#title-wrap");
let titleH1: any = document.querySelector("#title-wrap h1");
let titleH3: any = document.querySelectorAll("#title-wrap h3");

// Getting the values
let initialInnerWindowsWidth: number = window.innerWidth;
let newInnerWidth: number;
let style: any;
let fontSize: number;

// Setting the initial margin-top to the title
titleWrap.style.marginTop = `${videoWrap.clientHeight / 3}px`;

// FIX NEEDED
// BUG: The H1 font-size shrinks when the window is resized. But it shrinks
// when both window width and height is resized and it is not supposed to do that.
window.onresize = event => {
    titleWrap.style.marginTop = `${videoWrap.clientHeight / 3}px`;
    newInnerWidth = window.innerWidth;

    // Check if the window is being shrunk or expanded 
    if (initialInnerWindowsWidth < newInnerWidth) {
        initialInnerWindowsWidth = newInnerWidth;
        style = window
            .getComputedStyle(titleH1, null)
            .getPropertyValue("font-size");
        fontSize = parseFloat(style);
        titleH1.style.fontSize = `${fontSize + 0.5}px`;
        console.log(fontSize);
    } else {
        initialInnerWindowsWidth = newInnerWidth;
        style = window
            .getComputedStyle(titleH1, null)
            .getPropertyValue("font-size");
        fontSize = parseFloat(style);
        titleH1.style.fontSize = `${fontSize - 0.5}px`;
    }
};

class Contact {
    name: string;
    email: string;
    phone: number;
    id: string;
    constructor(name, email, phone, id) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.id = id;
    }
}

class ContantManager {
    contactList: any[];
    constructor() {
        this.contactList = [];
    }

    add(contact) {
        this.contactList.push(contact);
    }

    removeLast() {
        this.contactList.pop();
    }

    removeSpecificContact(contact) {
        let index: number = this.getContactIndex(contact);
    }

    getContactIndex(contact): number {
        return 0;
    }
}
