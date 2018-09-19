
class FirstElement extends HTMLElement {
  constructor() {
    super();

    const pElem = document.createElement('p');
    pElem.textContent = "Hello from First!";

    this.attachShadow({mode: 'open'}).appendChild(
      pElem
    );
  }
}

class SecondElement extends HTMLElement {
  constructor() {
    super();

    const pElem = document.createElement('p');
    pElem.textContent = "Hello from Second!";

    this.attachShadow({mode: 'open'}).appendChild(
      pElem
    );
  }
}



customElements.define('my-element', FirstElement);
customElements.define('my-element', SecondElement);
