(()=>{"use strict";function e(e){e.firstChild&&e.removeChild(e.firstChild)}const t=document.querySelector(".app-container");t.style.backgroundImage="url(assets/ec7ce84cb56f13f2bbacce3b60f566c2.png)";const a=document.createElement("DIV");a.classList.add("btn-container");const n=document.createElement("BUTTON"),c=document.createElement("BUTTON"),s=document.createElement("BUTTON");n.classList.add("btn"),n.classList.add("red"),c.classList.add("btn"),c.classList.add("yellow"),s.classList.add("btn"),s.classList.add("green"),n.textContent="Collapse",c.textContent="CallbackChat",s.textContent="Liker";const d=document.createElement("DIV");d.classList.add("animation-container"),t.appendChild(a),a.append(n),a.append(c),a.append(s),t.appendChild(d);const i=new class{constructor(e){this.container=e}openAnimationPage(){const e=document.createElement("DIV"),t=document.createElement("BUTTON"),a=document.createElement("DIV"),n=document.createElement("P");e.classList.add("collapse-container"),t.classList.add("btn-collapse"),a.classList.add("collapse"),n.classList.add("text"),t.textContent="Run",n.textContent="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",this.container.appendChild(e),e.append(t),e.append(a),a.append(n),t.addEventListener("click",(()=>{a.classList.contains("collapse-active")?(a.classList.add("collapse-close"),a.classList.remove("collapse-active")):(a.classList.add("collapse-active"),a.classList.remove("collapse-close"))}))}}(d),l=new class{constructor(e){this.container=e}openChat(){const e=document.createElement("DIV"),t=document.createElement("FORM"),a=document.createElement("P"),n=document.createElement("TEXTAREA"),c=document.createElement("BUTTON"),s=document.createElement("SPAN");e.classList.add("container-chat"),t.classList.add("form-chat"),a.classList.add("title-chat"),n.classList.add("textarea-chat"),c.classList.add("send-chat"),s.classList.add("close-chat"),a.textContent="Напишите нам",c.textContent="Отправить",s.textContent="✖",n.spellCheck="false",this.container.firstChild.appendChild(e),e.append(a),e.append(t),e.append(s),t.append(n),t.append(c),s.addEventListener("click",(()=>{e.classList.add("disapperance"),document.querySelector(".open-callback-chat").classList.remove("toPoint"),document.querySelector(".open-callback-chat").classList.add("fromPoint"),e.addEventListener("animationend",(()=>{e.remove()}))}))}openAnimationPage(){const e=document.createElement("DIV"),t=document.createElement("DIV");e.classList.add("callback-chat-container"),t.classList.add("open-callback-chat"),this.container.appendChild(e),e.append(t),t.addEventListener("click",(()=>{document.querySelector(".container-chat")||(this.container.classList.remove("disapperance"),t.classList.remove("fromPoint"),t.classList.add("toPoint"),this.openChat(this.container))}))}}(d),o=new class{constructor(e){this.container=e}openAnimationPage(){const e=document.createElement("DIV"),t=document.createElement("BUTTON");e.classList.add("liker-container"),t.classList.add("btn-liker"),t.textContent="Liker",this.container.appendChild(e),e.append(t),t.addEventListener("click",(()=>{const t=document.createElement("IMG");t.classList.add("heart");const a=Math.floor(4*Math.random())+1;t.classList.add(`like-${a}`),t.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWxJREFUeNrs1z9KA0EUx/HdJIaoRL1ALCxsvIaNN7A1Vga0jIWdeAYtRRtBIpbxD9opYmNhjqAgGJQUEYzR9fd0Fsbl7ezMJLMp4sKnm31fkp1hEz/wBnNlvP/w7zUBq3AKT0BP5BkuYAkK0tpRWIZLaIq1dM8JVKDIFoK/MrAOLQgUHmAeFuAxYe0rrIAvt6LRWsIQWVfQXb8bF64YDLFV5sJ3KYRvwp4vneN3yDvezC2Yiu7qTgqnKMsdp/sUwg0uXE8hfMad42n4cLixPmGG29Vkz2H4MO4ch5/6zUG0A7OqMFlzEN6Kdrgwne3zPkYbUNAJkxK89CHahjmuERf2xJun20P0Cxbj5qvCpNpDeFM1OylMti2itej71yZM7+l9gyhtzHzSXJ0wycKRRvQaxnRm6oY98SmOFdFbmNSdZxImOThgolcmUZtw+LXvSNE6jJvOsQmHNsQPuBGb+/2h+wuT+3lKA7i+BRgA/Up805zsZVkAAAAASUVORK5CYII=",e.appendChild(t),t.addEventListener("animationend",(()=>{t.remove()}))}))}}(d);n.addEventListener("click",(()=>{e(d),i.openAnimationPage()})),c.addEventListener("click",(()=>{e(d),l.openAnimationPage()})),s.addEventListener("click",(()=>{e(d),o.openAnimationPage()}))})();
//# sourceMappingURL=main.js.map