import{a as f,S as m,i as n}from"./assets/vendor-Bt_EzQve.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="53064153-2d7216b374d8f49c4006b10a4",h="https://pixabay.com/api/";async function g(i){try{return(await f.get(h,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw console.error("Pixabay API error:",r),r}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:d,downloads:p})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img src="${o}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t}</p>
        <p><b>Views:</b> ${s}</p>
        <p><b>Comments:</b> ${d}</p>
        <p><b>Downloads:</b> ${p}</p>
      </div>
    </li>
  `).join("");c.innerHTML=r,b.refresh()}function w(){c.innerHTML=""}function P(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const u=document.querySelector(".form"),v=u.elements["search-text"];u.addEventListener("submit",async i=>{i.preventDefault();const r=v.value.trim();if(!r){n.warning({title:"Oops!",message:"Please enter a search term.",position:"topRight"});return}w(),P();try{const o=await g(r);!o.hits||o.hits.length===0?n.error({title:"No results!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(o.hits)}catch{n.error({title:"Error!",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map
