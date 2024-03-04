import{i as f,S as p}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const a=document.querySelector(".loader");function m(s){const r={base:"https://pixabay.com/api/",key:"42653068-ca30bcafd67c2a07aae2cb182",q:"",image_type:"photo",oriental:"horizontal",safesearch:"true"};r.q=s;const t=new URLSearchParams(r);a.style.display="block";const n=`${r.base}?${t}`;return fetch(n).then(e=>{if(!e.ok)throw new Error("Image error");return e.json()}).then(e=>(a.style.display="none",e.hits.length===0&&f.error({timeout:1500,position:"bottomCenter",message:"There are no images matching your search query. Please, enter something else!"}),e)).catch(e=>{console.log("Error fetching data!",e)})}function d(s){return s.hits.reduce((r,t)=>r+`<div class="container-image-gallery">
            <a class="gallery-link" href="${t.largeImageURL}">
            <img
                class="gallery-image"
                src="${t.webformatURL}"
                alt="${t.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${t.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${t.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${t.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${t.downloads}</p>
              </li>
            </ul>
        </a>
        </div>`,"")}const l=document.querySelector(".search"),c=document.querySelector(".gallery");let u="";l.addEventListener("submit",h);function h(s){s.preventDefault();const r=new p(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150});u=l.elements.query.value.trim(),c.innerHTML="",m(u).then(t=>{const n=d(t);c.insertAdjacentHTML("beforeend",n),r.refresh()}).catch(t=>{console.log("Error:",t)}),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
