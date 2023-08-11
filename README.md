<h2 align="center">Oldagram</h2>

<p align="center">
  <em> The oldagram is my sixth project of the Scrimba Front-End course, in this course, I build an Instagram duplicate from scratch and structure the code to finish the post-push.</em>
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![Join the chat at https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist](https://badges.gitter.im/Front-End-Checklist/Front-End-Design-Checklist.svg)](https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist) [![CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

## Table of Contents
* **[1. What I learned](#1---What-I-learned)**
	* [1.1 Create the multi "Template string" using "For loop"](#11---Create-the-multi-"Template-string"-using-"For-loop")


---

> The **Oldagram** is my sixth static website, I tried to duplicate the website layout from Instagram and learned to write reusable code in new techniques.

I start the Scrimba Module 4 course- Essential CSS Concepts and learn how to use HTML, CSS, and JavaScript knowledge. At the end of the course, I follow the Figma template to finish the social media website layout and take a look at → [Oldagram](https://shiuandai.github.io/Oldagram/).

## How did I start the project?

* Ensure all points are taken into consideration from Figma Template. → [Figma Template from Scrimba](https://www.figma.com/file/h0MKma9TTWzGOMQ9Ia6ROW/Oldagram?type=design&node-id=0-1&mode=design&t=bLeKAiMCwMVBGG4B-0)
* Use JavaScript to render out all three posts.
* The easy start is to create the first post.
* Use semantic HTML.
* Add hover effects to the icons.

---

## 1. - What I learned

Designing a social media website requires following some rules and taking into consideration that the project is not only a graphic project but a web project too which allows users to interact with the graphics.

### 1.1 - Create the multi "Template string" using "For loop"

* [ ] **Template strings** are literals delimited with backtick (`) characters, allowing for **multi-line strings**, **string interpolation** with embedded expressions, and special constructs called **tagged templates**.
	> ℹ️ [JS] GET to know more about "Template literals". → [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

```JS
const mainEl=document.getElementById("main")
let html=""

for (let i=0; i<posts.length; i++){
    html+=`
    <div id="post_author">
            <img src=${posts[i].avatar} alt=${posts[i].avatar} class="avatar">  //利用中括號和$來驅動expression
            <div>
                <div class="name font_size"><span>${posts[i].name}</span></div>
                <span class="location font_size">${posts[i].location}</span>
            </div>
        </div>
    </div>
    `
}
mainEl.innerHTML=html
```
The code above is useful to create the multi posts and reduce the code complexity.
⚠️ *Along with having normal strings, template literals can also contain other parts called placeholders, which are embedded expressions delimited by a dollar sign and curly braces: **${expression}**.*

**[⬆ back to top](#table-of-contents)**


## Author

**[Shiuan Dai](https://www.linkedin.com/in/shiuandai/)**

**[⬆ back to top](#table-of-contents)**


[6]:	https://guideguide.me/
[7]:	https://www.sketchapp.com/docs/canvas/rulers-guides-grids/
[8]:	https://getbootstrap.com/docs/4.0/layout/grid/
[9]:	http://flexboxgrid.com/
[10]: https://css-tricks.com/dont-overthink-it-grids/
[11]:	https://www.lifewire.com/aco-file-2619477
[16]:	http://bradfrost.com/blog/post/atomic-web-design/
[22]:	https://js.libhunt.com/
[23]:	https://bestof.js.org/
[28]:	https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist
