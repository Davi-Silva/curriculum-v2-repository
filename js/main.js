// Getting the DOM Elements
var videoWrap = document.querySelector("#video-wrap");
var titleWrap = document.querySelector("#title-wrap");
var titleH1 = document.querySelector("#title-wrap h1");
var titleH3 = document.querySelectorAll("#title-wrap h3");
// Getting the values
var initialInnerWindowsWidth = window.innerWidth;
var newInnerWidth;
var style;
var fontSize;
// Setting the initial margin-top to the title
titleWrap.style.marginTop = videoWrap.clientHeight / 3 + "px";
// FIX NEEDED
// BUG: The H1 font-size shrinks when the window is resized. But it shrinks
// when both window width and height is resized and it is not supposed to do that.
window.onresize = function (event) {
    titleWrap.style.marginTop = videoWrap.clientHeight / 3 + "px";
    newInnerWidth = window.innerWidth;
    // Check if the window is being shrunk or expanded 
    if (initialInnerWindowsWidth < newInnerWidth) {
        initialInnerWindowsWidth = newInnerWidth;
        style = window
            .getComputedStyle(titleH1, null)
            .getPropertyValue("font-size");
        fontSize = parseFloat(style);
        titleH1.style.fontSize = fontSize + 0.5 + "px";
        console.log(fontSize);
    }
    else {
        initialInnerWindowsWidth = newInnerWidth;
        style = window
            .getComputedStyle(titleH1, null)
            .getPropertyValue("font-size");
        fontSize = parseFloat(style);
        titleH1.style.fontSize = fontSize - 0.5 + "px";
    }
};
var Contact = /** @class */ (function () {
    function Contact(name, email, phone, id) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.id = id;
    }
    return Contact;
}());
var ContantManager = /** @class */ (function () {
    function ContantManager() {
        this.contactList = [];
    }
    ContantManager.prototype.add = function (contact) {
        this.contactList.push(contact);
    };
    ContantManager.prototype.removeLast = function () {
        this.contactList.pop();
    };
    ContantManager.prototype.removeSpecificContact = function (contact) {
        var index = this.getContactIndex(contact);
    };
    ContantManager.prototype.getContactIndex = function (contact) {
        return 0;
    };
    return ContantManager;
}());
