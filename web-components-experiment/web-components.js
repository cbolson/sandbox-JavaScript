let acItemId, acLang;
let idDateStart;
let idDateEnd;
let acWrapper, acNavLoadingEl, acNumMonthsEl, acNumMonthsElTmp, clickableDates;

let shadow;

// temp to force css reload
const d = new Date();
let time = d.getTime();

// create template to hold calendar
const acTemplate = document.createElement("template");
acTemplate.innerHTML = `
<style>
@import "web-components.css?${time}";
/* testing only css */
#ac-container{
  margin:2rem auto;
  max-width:1000px;
  padding:2rem;
  border:1px solid #DDD;
  border-radius:10px;
  background-color:#EFEFEF
}
.msg{
  color:red;
}
</style>

<div id="ac-container">
<span class="msg">Everything in this box forms part of the web component (including this text)</span>
   <ul id="ac-nav">
        <li data-direction="back" title="Previous month">Prev</li>
        <li data-direction="today" title="Today" class="loader">Today</li>
        <li data-direction="next" title="Next month">Next</li>
    </ul>
    <div id="ac-months">
        months loaded here....
    </div>
</div>
`;

class MyCalendar extends HTMLElement {
  constructor() {
    super();

    // get attributes to define calendar settings
    acItemId = this.getAttribute("ac-id");
    acLang = this.getAttribute("ac-lang");
    idDateStart = this.getAttribute("ac-date-start");
    idDateEnd = this.getAttribute("ac-date-end");

    shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(acTemplate.content.cloneNode(true));

    // build calendar....
    buildCalendar();
  }
}
// add custom element to the window
window.customElements.define("ac-calendar", MyCalendar);

function buildCalendar() {
  acNumMonthsEl = shadow.querySelector("#ac-months");
  acNumMonthsEl.innerHTML = `Item id: ${acItemId}<br>Lang: ${acLang}<br>Field Date Start: ${idDateStart}<br>Field Date End: ${idDateEnd}`;
}

// test

// // testing - writing to date fields
// const fieldDateStart = document.querySelector(`#${idDateStart}`);
// const fieldDateEnd = document.querySelector(`#${idDateEnd}`);

// fieldDateStart.value = idDateStart;
// fieldDateEnd.value = idDateEnd;
