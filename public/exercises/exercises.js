
// Populate code into page from data

const populateCode = exNum => {
    const demoArea = document.querySelector(`.${exNum} .ex-container`);
    const cssArea = document.querySelector(`.${exNum} .code-container.css`);
    const htmlArea = document.querySelector(`.${exNum} .code-container.html`);
    demoArea.innerHTML = eval(exNum).html;
    cssArea.innerHTML = eval(exNum).css;

    document.querySelector(`.${exNum} .tab.html`).classList.add("active");
    htmlArea.innerText = eval(exNum).html;
    htmlArea.style.display = "block";

    const link = document.querySelector(`.${exNum} .github-link`);
    link.href = eval(exNum).link;
};


// Exercise 1 - Simple page

const ex1 = {
    html: `
    <h1>Hello</h1>
    <p>This is an example paragraph</p>
    <p>This is another</p>
`,
    css: `
    .ex1 h1 {
        color: red;
    }

    .ex1 p {
        color: blue;
        font-weight: 300;
    }
`,
    link: 'https://github.com/boolean-uk'
};

const ex2 = {
    html: `
    <h1>Hello Again</h1>
    <ul>
        <li> One </li>
        <li> Two </li>
    </ul>
`,
    css: `
    .ex2 h1 {
        color: green;
    }
    
    .ex2 li {
        color: firebrick;
        font-weight: 600;
    }
`,
    link: 'https://github.com/boolean-uk'
};

// HTML/CSS display buttons

[...document.querySelectorAll(".tab-area button")].forEach(button => {
    button.addEventListener("click", event => {
        let lang = event.target.innerText.toLowerCase();
        const exNum = event.target.parentElement.parentElement.parentElement.classList[1];
        if (lang === "css") {
            document.querySelector(`.${exNum} .code-container.html`).style.display = "none";
            document.querySelector(`.${exNum} .tab.html`).classList.remove("active");
            document.querySelector(`.${exNum} .code-container.css`).style.display = "block";
            document.querySelector(`.${exNum} .tab.css`).classList.add("active");
        } else {
            document.querySelector(`.${exNum} .code-container.css`).style.display = "none";
            document.querySelector(`.${exNum} .tab.css`).classList.remove("active");
            document.querySelector(`.${exNum} .code-container.html`).style.display = "block";
            document.querySelector(`.${exNum} .tab.html`).classList.add("active");
        }
    });
});

populateCode('ex1');
populateCode('ex2');
