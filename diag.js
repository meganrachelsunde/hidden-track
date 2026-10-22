(function(){var e=document.getElementById("err"),seen={},n=0;
function out(t){if(!e)return;e.hidden=false;e.textContent=t}
function rep(m){m=String(m||"error");if(seen[m]||n>3)return;seen[m]=1;n++;if(!e)return;e.hidden=false;e.textContent=(e.getAttribute("data-err")?e.textContent+"\n":"")+"ERR "+m;e.setAttribute("data-err","1")}
window.__err=rep;
window.__stage=function(st){if(st==="ready"){if(e&&!e.getAttribute("data-err")){e.hidden=true;e.textContent=""}}};
out("Scripts load, main app still starting\u2026");
window.addEventListener("error",function(ev){var t=ev.target;if(t&&t!==window&&t.tagName){if(t.tagName==="SCRIPT")rep("could not load "+String(t.src).split("/").pop());return}rep((ev.message||"script failed to load")+(ev.lineno?" @"+ev.lineno:"")+(ev.filename?" "+String(ev.filename).split("/").pop():""))},true);
window.addEventListener("unhandledrejection",function(ev){rep(ev.reason&&ev.reason.message||ev.reason)});
setTimeout(function(){if(e&&!e.hidden&&!e.getAttribute("data-err")&&/starting/.test(e.textContent))rep("app.js never finished starting")},4000);
})();
