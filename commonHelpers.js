import{i as f,S as p}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const c=document.querySelector(".loader"),l={base:"https://pixabay.com/api/",key:"42653068-ca30bcafd67c2a07aae2cb182",q:"",image_type:"photo",oriental:"horizontal",safesearch:"true"};function m(i){l.q=i;const s=new URLSearchParams(l);c.style.display="block";const r=`${l.base}?${s}`;return fetch(r).then(t=>{if(!t.ok)throw new Error("Image error");return t.json()}).then(t=>(c.style.display="none",t.hits.length===0&&f.error({timeout:1500,position:"bottomCenter",message:"Sorry, there are no images matching your search query. Please, try again!"}),t)).catch(t=>{console.log("Error fetching data!",t)})}function d(i){return i.hits.reduce((s,r)=>s+`<div class="container-image-gallery">
            <a class="gallery-link" href="${r.largeImageURL}">
            <img
                class="gallery-image"
                src="${r.webformatURL}"
                alt="${r.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${r.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${r.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${r.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${r.downloads}</p>
              </li>
            </ul>
        </a>
        </div>`,"")}const a=document.querySelector(".search"),u=document.querySelector(".gallery");a.addEventListener("submit",y);function y(i){i.preventDefault();let s="";const r=new p(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150});s=a.elements.query.value.trim(),u.innerHTML="",m(s).then(t=>{const e=d(t);u.insertAdjacentHTML("beforeend",e),r.refresh()}).catch(t=>{console.log("Error:",t)}),a.reset()}
//# sourceMappingURL=commonHelpers.js.map
