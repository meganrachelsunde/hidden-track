const ORDER=["friends","love","career","mystery","future","myself","style"];
/* One shared catalog. Categories only set the questions; any song can answer any of them.
   Even pitch slices: each song owns an equal share of the 110–1320 Hz scale,
   in an order shuffled by its title, so no song hogs the answers. */
SONGS.slice().sort((a,b)=>hash(a[0]+a[1])-hash(b[0]+b[1])).forEach((sg,i,L)=>{sg.hz=110*Math.pow(2,((i+.5)/L.length)*3.6)});
const VERD={Y:"Yes",N:"No",W:"Not yet",G:"Go",L:"Let it go"};

const $=id=>document.getElementById(id);
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
let cat=null,ck=null,petty=true,last=null,actx=null;
function hash(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function rng(seed){let a=seed>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
let show=function(v){["intro","cats","ask","ans"].forEach(x=>$("v-"+x).hidden=x!==v);const el=$("v-"+v);setTimeout(()=>{const top=el.getBoundingClientRect().top;if(top>innerHeight*.7||top<0)scrollTo({top:Math.max(0,top+scrollY-innerHeight*.35),behavior:"smooth"})},16)}
/* one plain instruction under the turntable, always saying what to do next */
function hint(){const h=$("hint");if(!h)return;let t;
  if(!$("v-intro").hidden)t="Press the record to start";
  else if(!$("v-cats").hidden)t="Pick a category below";
  else if(!$("v-ask").hidden)t=$("qin").value.trim()?"Now press the record":"Type below, then press the record";
  else t="Press the record to ask another";
  h.querySelector("span").textContent=t}
const _show=show;show=v=>{_show(v);hint()};

/* ================= record rendering ================= */
const REC={el:$("rec"),ctx:null,S:0,base:null,disc:null,sheen:null,ang:0,rpm:33.333,target:33.333,
  label:{lines:["PRESS","ME"],color:"#c6a15b",side:"A",rim:"NEEDLE DROP RECORDS"}};
const mk=S=>{const c=document.createElement("canvas");c.width=c.height=S;return c};
function conic(x,a,cx,cy,stops){if(!x.createConicGradient)return null;const g=x.createConicGradient(a,cx,cy);for(const s of stops)g.addColorStop(s[0],s[1]);return g}
let noisePat=null;
function noise(x){if(!noisePat){const n=mk(96),nx=n.getContext("2d"),d=nx.createImageData(96,96);for(let i=0;i<d.data.length;i+=4){const v=Math.random()*255;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255}nx.putImageData(d,0,0);noisePat=n}return x.createPattern(noisePat,"repeat")}
function arcText(x,text,r,c,mid,size,font,color,inside){x.save();x.font=`${size}px ${font}`;x.fillStyle=color;x.textAlign="center";x.textBaseline="middle";
  const sp=size*.32,w=[...text].map(ch=>x.measureText(ch).width+sp),tot=w.reduce((a,b)=>a+b,0);let a=mid-(inside?-1:1)*tot/2/r;
  for(let i=0;i<text.length;i++){const da=w[i]/r,ac=a+(inside?-1:1)*da/2;x.save();x.translate(c+Math.cos(ac)*r,c+Math.sin(ac)*r);x.rotate(ac+(inside?-Math.PI/2:Math.PI/2));x.fillText(text[i],0,0);x.restore();a+=(inside?-1:1)*da}
  x.restore()}
function buildBase(){const S=REC.S,u=S/920,c=S/2,b=mk(S),x=b.getContext("2d");REC.base=b;
  x.fillStyle=conic(x,-Math.PI/2,c,c,[[0,"#4b4b50"],[.1,"#d6d6d9"],[.22,"#5a5a60"],[.38,"#2c2c31"],[.52,"#bdbdc1"],[.66,"#55555b"],[.82,"#e3e3e5"],[1,"#4b4b50"]])||"#77777c";
  x.beginPath();x.arc(c,c,460*u,0,7);x.fill();
  x.lineWidth=1.5*u;x.strokeStyle="rgba(0,0,0,.55)";x.beginPath();x.arc(c,c,459*u,0,7);x.stroke();
  x.fillStyle="#121214";x.beginPath();x.arc(c,c,445*u,0,7);x.fill();
  x.lineWidth=1*u;x.strokeStyle="rgba(255,255,255,.18)";x.beginPath();x.arc(c,c,446*u,0,7);x.stroke()}
function buildDisc(){const S=REC.S,u=S/920,c=S/2,b=mk(S),x=b.getContext("2d"),L=REC.label;REC.disc=b;const R=rng(hash(L.lines.join(" ")+S));
  x.fillStyle="rgba(15,15,17,.6)";for(let i=0;i<180;i++){const a=i/180*Math.PI*2;x.beginPath();x.arc(c+Math.cos(a)*452.5*u,c+Math.sin(a)*452.5*u,1.6*u,0,7);x.fill()}
  x.fillStyle="#0b0b0d";x.beginPath();x.arc(c,c,440*u,0,7);x.fill();
  x.lineWidth=Math.max(.5,u*.85);
  for(let r=192;r<433;r+=1.05){x.strokeStyle=`rgba(255,255,255,${(.01+R()*.034).toFixed(3)})`;x.beginPath();x.arc(c,c,r*u,0,7);x.stroke()}
  for(const r of [404,353,299,247]){x.lineWidth=3.4*u;x.strokeStyle="#08080a";x.beginPath();x.arc(c,c,r*u,0,7);x.stroke();x.lineWidth=.8*u;x.strokeStyle="rgba(255,255,255,.08)";x.beginPath();x.arc(c,c,(r+2)*u,0,7);x.stroke()}
  x.lineWidth=5*u;x.strokeStyle="#0d0d0f";x.beginPath();x.arc(c,c,435.5*u,0,7);x.stroke();
  x.lineWidth=1.4*u;x.strokeStyle="rgba(255,255,255,.16)";x.beginPath();x.arc(c,c,439.2*u,0,7);x.stroke();
  x.fillStyle="#0f0f11";x.beginPath();x.arc(c,c,190*u,0,7);x.arc(c,c,146*u,0,7,true);x.fill("evenodd");
  x.lineWidth=.8*u;x.strokeStyle="rgba(255,255,255,.10)";x.beginPath();x.arc(c,c,191*u,0,7);x.stroke();
  arcText(x,"ND-001-"+L.side+"1   ·   HIDDEN TRACK",168*u,c,-Math.PI/2+.9,8*u,"'IBM Plex Mono',monospace","rgba(255,255,255,.17)");
  x.save();x.beginPath();x.arc(c,c,146*u,0,7);x.clip();x.fillStyle=L.color;x.fillRect(0,0,S,S);
  const rg=x.createRadialGradient(c-45*u,c-55*u,8*u,c,c,150*u);rg.addColorStop(0,"rgba(255,255,255,.12)");rg.addColorStop(1,"rgba(0,0,0,.2)");x.fillStyle=rg;x.fillRect(0,0,S,S);
  x.globalAlpha=.09;x.fillStyle=noise(x);x.fillRect(0,0,S,S);x.globalAlpha=1;x.restore();
  x.lineWidth=.9*u;x.strokeStyle="rgba(12,12,12,.4)";x.beginPath();x.arc(c,c,137*u,0,7);x.stroke();
  arcText(x,L.rim||"NEEDLE DROP RECORDS",116*u,c,-Math.PI/2,8.5*u,"'IBM Plex Mono',monospace","rgba(14,14,14,.82)");
  arcText(x,"SIDE "+L.side+"  ·  33⅓ RPM  ·  STEREO",116*u,c,Math.PI/2,7.5*u,"'IBM Plex Mono',monospace","rgba(14,14,14,.7)",true);
  x.fillStyle="#121212";x.textAlign="center";x.textBaseline="middle";
  let fs=36*u;const fam="'Big Shoulders Display','Arial Narrow',sans-serif";
  x.font=`800 ${fs}px ${fam}`;const maxW=Math.max(...L.lines.map(l=>x.measureText(l).width));if(maxW>170*u){fs*=170*u/maxW;x.font=`800 ${fs}px ${fam}`}
  const lh=fs*.9,y0=c-(L.lines.length-1)*lh/2-2*u;L.lines.forEach((l,i)=>{x.fillText(l,c,y0+i*lh+(i>0?0:0))});
  x.font=`${6.5*u}px 'IBM Plex Mono',monospace`;x.fillStyle="rgba(14,14,14,.6)";x.fillText("ND-001",c-92*u,c);x.fillText("℗ 2026",c+92*u,c);
  x.fillStyle="#050506";x.beginPath();x.arc(c,c,6*u,0,7);x.fill()}
function buildSheen(){const S=REC.S,u=S/920,c=S/2,b=mk(S),x=b.getContext("2d");REC.sheen=b;
  x.save();x.beginPath();x.arc(c,c,440*u,0,7);x.arc(c,c,146*u,0,7,true);x.clip("evenodd");
  const W=a=>`rgba(255,250,240,${a})`;
  const g=conic(x,-2.3,c,c,[[0,W(0)],[.05,W(.13)],[.09,W(.03)],[.14,W(0)],[.5,W(0)],[.55,W(.10)],[.59,W(.02)],[.64,W(0)],[1,W(0)]]);
  if(g){x.fillStyle=g;x.fillRect(0,0,S,S)}else{const l=x.createLinearGradient(0,0,S,S);l.addColorStop(.2,W(0));l.addColorStop(.32,W(.1));l.addColorStop(.44,W(0));x.fillStyle=l;x.fillRect(0,0,S,S)}
  const g2=conic(x,-.6,c,c,[[0,W(0)],[.04,W(.05)],[.08,W(0)],[.5,W(0)],[.54,W(.04)],[.58,W(0)],[1,W(0)]]);if(g2){x.fillStyle=g2;x.fillRect(0,0,S,S)}
  x.restore();
  const lg=x.createRadialGradient(c-50*u,c-60*u,0,c-50*u,c-60*u,120*u);lg.addColorStop(0,"rgba(255,255,255,.10)");lg.addColorStop(1,"rgba(255,255,255,0)");x.fillStyle=lg;x.beginPath();x.arc(c,c,146*u,0,7);x.fill();
  const sg=x.createRadialGradient(c-2*u,c-2.5*u,0,c,c,6*u);sg.addColorStop(0,"#f5f5f5");sg.addColorStop(.55,"#9d9da2");sg.addColorStop(1,"#38383c");x.fillStyle=sg;x.beginPath();x.arc(c,c,5.5*u,0,7);x.fill()}
function sizeRec(){const d=Math.min(devicePixelRatio||1,2),S=Math.round(REC.el.clientWidth*d);if(!S||S===REC.S)return;REC.S=S;REC.el.width=REC.el.height=S;REC.ctx=REC.el.getContext("2d");buildBase();buildDisc();buildSheen();paintRec()}
function setLabel(lines,color,side,rim){REC.label={lines,color,side:side||"A",rim:rim||"NEEDLE DROP RECORDS"};try{$("fblbl").textContent=lines.join("\n");document.querySelector(".recfb").style.setProperty("--lbl",color)}catch(e){}if(REC.S){buildDisc();paintRec()}}
function paintRec(){const x=REC.ctx,S=REC.S;if(!x)return;x.clearRect(0,0,S,S);x.drawImage(REC.base,0,0);x.save();x.translate(S/2,S/2);x.rotate(REC.ang);x.drawImage(REC.disc,-S/2,-S/2);x.restore();x.drawImage(REC.sheen,0,0);
  if(!REC.ok){try{const px=x.getImageData(Math.round(S/2+S*.1),Math.round(S/2),1,1).data;if(px[3]>200){REC.ok=true;$("deck").classList.add("painted")}}catch(e){}}}
let shownRpm="";
function stepRec(dt){const k=REC.target<REC.rpm?3.4:1.9;REC.rpm+=(REC.target-REC.rpm)*Math.min(1,dt*k);if(Math.abs(REC.target-REC.rpm)<.02)REC.rpm=REC.target;
  if(!reduce)REC.ang+=REC.rpm/60*Math.PI*2*dt;paintRec();const t=REC.rpm.toFixed(1);if(t!==shownRpm){shownRpm=t;$("rpm").textContent=t}}
function setSpeed(r){REC.target=r;$("spd33").setAttribute("fill",r>=40?"#4a4a4f":"#c6a15b");$("spd45").setAttribute("fill",r>=40?"#c6a15b":"#4a4a4f")}
const ARM={cur:0,target:0,lift:0,liftT:0,els:[...document.querySelectorAll(".armg")],sh:$("armShadow"),shown:""};
function setArm(a,lift){ARM.target=a;ARM.liftT=lift?1:0;$("status").classList.toggle("live",a>0&&!lift)}
function stepArm(dt){const d=ARM.target-ARM.cur,sp=Math.min(1,dt*(reduce?60:3.4));ARM.cur=Math.abs(d)<.02?ARM.target:ARM.cur+d*sp;
  ARM.lift+=(ARM.liftT-ARM.lift)*Math.min(1,dt*(reduce?60:5));
  const key=ARM.cur.toFixed(2)+"|"+ARM.lift.toFixed(2);if(key===ARM.shown)return;ARM.shown=key;
  ARM.els.forEach(g=>g.setAttribute("transform",`rotate(${ARM.cur.toFixed(2)} 1060 190)`));
  ARM.sh.setAttribute("transform",`translate(${(14+18*ARM.lift).toFixed(1)} ${(20+26*ARM.lift).toFixed(1)})`)}
function dropNeedle(){setArm(21,false);setTimeout(crackle,250)}
const labelFor=k=>{const n=CATS[k].name.toUpperCase();return n.includes(" & ")?[n.split(" & ")[0]+" &",n.split(" & ")[1]]:n.length>8&&n.includes(" ")?n.split(" "):[n]};
const HALF=Math.ceil(ORDER.length/2);
const sideOf=k=>ORDER.indexOf(k)<HALF?"A":"B";
const trackNo=k=>{const i=ORDER.indexOf(k);return sideOf(k)+(i<HALF?i+1:i-HALF+1)};

/* ================= atmosphere ================= */
const sky=$("sky"),sx=sky.getContext("2d");let motes=[];
function skySize(){sky.width=innerWidth;sky.height=innerHeight;const n=Math.round(innerWidth*innerHeight/7000);
  motes=Array.from({length:n},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:.35+Math.random()*1.3,v:.05+Math.random()*.22,ph:Math.random()*6.28}))}
function drawSky(t){const w=sky.width,h=sky.height,M=Math.max(w,h);sx.clearRect(0,0,w,h);
  const lx=w*(.78+.14*Math.sin(t*.00011)),ly=h*(.02+.07*Math.cos(t*.00008));
  let g=sx.createRadialGradient(lx,ly,0,lx,ly,M*.9);g.addColorStop(0,"rgba(198,161,91,.22)");g.addColorStop(.3,"rgba(198,161,91,.07)");g.addColorStop(1,"rgba(198,161,91,0)");sx.fillStyle=g;sx.fillRect(0,0,w,h);
  const bx=w*(.12+.12*Math.cos(t*.00006)),by=h*(.9+.06*Math.sin(t*.00012));
  g=sx.createRadialGradient(bx,by,0,bx,by,M*.75);g.addColorStop(0,"rgba(111,129,147,.17)");g.addColorStop(1,"rgba(111,129,147,0)");sx.fillStyle=g;sx.fillRect(0,0,w,h);
  sx.save();sx.translate(lx,ly);sx.rotate(.62+.07*Math.sin(t*.00014));const bw=w*.34,bg=sx.createLinearGradient(-bw,0,bw,0);
  bg.addColorStop(0,"rgba(232,228,218,0)");bg.addColorStop(.5,"rgba(232,228,218,.045)");bg.addColorStop(1,"rgba(232,228,218,0)");sx.fillStyle=bg;sx.fillRect(-bw,0,bw*2,M*1.6);sx.restore();
  for(const m of motes){if(!reduce){m.y-=m.v;m.x+=Math.sin(t*.0003+m.ph)*.18;if(m.y<-4){m.y=h+4;m.x=Math.random()*w}}
    const d=Math.hypot(m.x-lx,m.y-ly)/M,a=Math.max(0,.6-d*.75)*(.55+.45*Math.sin(t*.0017+m.ph));if(a<.01)continue;
    sx.fillStyle=`rgba(240,226,196,${a.toFixed(3)})`;sx.beginPath();sx.arc(m.x,m.y,m.r,0,6.283);sx.fill()}}

/* ================= tone + questions ================= */
function setMode(p){petty=p;$("mPetty").setAttribute("aria-pressed",p);$("mSoft").setAttribute("aria-pressed",!p);
  if(ck)syncDrop();if(last&&!$("v-ans").hidden)$("reading").textContent=last[petty?4:3]}
$("mPetty").onclick=()=>setMode(true);$("mSoft").onclick=()=>setMode(false);

$("grid").innerHTML=["A","B"].map(S=>`<div class="side"><span>SIDE ${S}</span><span>${S==="A"?"33⅓":"45"}</span></div>`+ORDER.filter(k=>sideOf(k)===S).map(k=>{const no=trackNo(k);
  return `<button class="trk" style="--c:${CATS[k].color}" data-k="${k}" type="button"><span class="no">${no}</span><span class="nm">${CATS[k].name}</span><span class="ct">${SONGS.length} tracks<b></b></span></button>`}).join("")).join("");
$("grid").onclick=e=>{const b=e.target.closest(".trk");if(b)pick(b.dataset.k)};

/* question openers: tap one, finish it in your own words */
const STEMS={"vibe": ["What is the universe trying to tell me about", "What's hiding in plain sight about", "What am I about to find out about", "What's the hidden track in", "What would my future self whisper about", "What secret am I keeping from myself about", "What's quietly shifting in", "What door is opening in"], "dis": ["What is the universe trying to tell me about", "What's the real tea about", "Who's not telling me the truth about", "What's the plot twist in", "What am I too proud to admit about", "What red flag am I calling a vibe in", "What would the group chat say about", "What will I regret not saying about"]};
const SUBJ={friends:"my friends and family",love:"love",career:"my work",mystery:"the signs I keep seeing",future:"what's coming",myself:"myself",style:"how I show up"};
const stems=()=>petty?STEMS.dis:STEMS.vibe;
function renderQs(){const v=$("qin").value.trim().toLowerCase();const list=stems().filter(q=>!v||q.toLowerCase().startsWith(v));
  $("qs").innerHTML=`<div class="qs-cap">Start with</div>`+list.map((q,i)=>`<button class="q" type="button" role="option" data-s="${q}"><span>${String(i+1).padStart(2,"0")}</span>${q} …</button>`).join("");return list.length}
function syncDrop(){const t=$("qin"),v=t.value.trim().toLowerCase(),focused=document.activeElement===t;
  const startedStem=stems().some(q=>v.startsWith(q.toLowerCase()));const n=(focused||!v)&&!startedStem?renderQs():0;$("field").classList.toggle("open",n>0)}
function autoQ(){const st=stems();return st[Math.floor(Math.random()*st.length)]+" "+SUBJ[ck]+"?"}
function pick(k){ck=k;cat=CATS[k];const i=ORDER.indexOf(k),S=sideOf(k);$("askEye").textContent=trackNo(k)+" · "+cat.name;
  setLabel(["PRESS","ME"],cat.color,S,cat.name.toUpperCase());setQ("");show("ask");syncDrop()}
function setQ(v){$("qin").value=v;$("qin").dispatchEvent(new Event("input"))}
$("qs").addEventListener("pointerdown",e=>{if(e.target.closest(".q"))e.preventDefault()});
$("qs").onclick=e=>{const b=e.target.closest(".q");if(!b)return;const v=b.dataset.s+" ";setQ(v);const t=$("qin");t.focus();try{t.setSelectionRange(v.length,v.length)}catch(_){}syncDrop()};
function vvh(){const h=(window.visualViewport&&visualViewport.height)||innerHeight;document.documentElement.style.setProperty("--vvh",h+"px")}
vvh();if(window.visualViewport)visualViewport.addEventListener("resize",vvh);addEventListener("resize",vvh);
function lift(){const top=$("field").getBoundingClientRect().top+scrollY-14;scrollTo({top,behavior:"smooth"})}
$("qin").addEventListener("focus",()=>{document.body.classList.add("typing");syncDrop();setTimeout(lift,60);setTimeout(lift,380)});
$("qin").addEventListener("blur",()=>setTimeout(()=>{if(document.activeElement!==$("qin"))document.body.classList.remove("typing");syncDrop()},120));
$("qin").addEventListener("input",syncDrop);
$("qin").oninput=()=>{$("spin").disabled=!$("qin").value.trim();hint()};
$("random").onclick=()=>{setQ(autoQ());spin()};
$("spin").onclick=spin;
$("qin").onkeydown=e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();if($("qin").value.trim())spin()}};

/* ================= frequency engine =================
   question → hash → pitch on a log scale (110–1320 Hz).
   each song has its own pitch; the answer is the song closest in cents. */
const norm=s=>s.toLowerCase().replace(/[^a-z0-9 ]/g,"").trim();
const hzOf=s=>110*Math.pow(2,(hash(s)%3600)/1000);
const day=new Date().toISOString().slice(0,10);
const dayDrift=Math.pow(2,((hash(day)%160)-80)/1000);
const qHz=q=>hzOf(norm(q)+ck)*dayDrift;
const sHz=s=>s.hz||hzOf(s[0]+s[1]);
/* Short memory: the same question on the same day keeps its song; otherwise the record
   won't repeat any of your recent answers. Stored only in this browser. */
const MEM={get(k,d){try{return JSON.parse(localStorage.getItem("ht."+k))||d}catch(e){return d}},set(k,v){try{localStorage.setItem("ht."+k,JSON.stringify(v))}catch(e){}}};
function choose(q,fq){const key=norm(q)+"|"+ck+"|"+day,asked=MEM.get("asked",{}),songs=SONGS;
  const ranked=songs.map(s=>[cents(fq,sHz(s)),s]).sort((a,b)=>a[0]-b[0]);
  const prev=asked[key]&&songs.find(s=>s[0]===asked[key]);
  if(prev)return[prev,ranked.find(r=>r[1]===prev)[0]];
  const recent=MEM.get("recent",[]),keep=Math.min(40,songs.length-1);
  const pickR=ranked.find(r=>!recent.includes(r[1][0]))||ranked[0];
  MEM.set("recent",[pickR[1][0],...recent.filter(t=>t!==pickR[1][0])].slice(0,keep));
  asked[key]=pickR[1][0];const ks=Object.keys(asked);if(ks.length>200)delete asked[ks[0]];MEM.set("asked",asked);
  return[pickR[1],pickR[0]]}
const cents=(a,b)=>Math.abs(1200*Math.log2(a/b));

const scope={f1:0,f2:0,amp:.15,mode:"idle",t:0};
const cv=$("scope"),cx=cv.getContext("2d");
function scopeSize(){const r=cv.getBoundingClientRect(),d=devicePixelRatio||1;cv.width=r.width*d;cv.height=r.height*d;cx.setTransform(d,0,0,d,0,0)}
function wave(f,phase,w,h,color,amp,lw,glow){cx.beginPath();const cyc=f/55;
  for(let x=0;x<=w;x+=2){const y=h*.42+Math.sin((x/w)*cyc*2*Math.PI+phase)*h*.32*amp;x?cx.lineTo(x,y):cx.moveTo(x,y)}
  cx.strokeStyle=color;cx.lineWidth=lw;cx.shadowColor=color;cx.shadowBlur=glow||0;cx.stroke();cx.shadowBlur=0}
function drawScope(){const w=cv.clientWidth,h=cv.clientHeight;cx.clearRect(0,0,w,h);
  cx.fillStyle="rgba(232,228,218,.13)";for(let x=0;x<=w;x+=Math.max(8,w/48)){cx.fillRect(x,h*.42-(x%(w/6)<w/48?5:2),1,x%(w/6)<w/48?10:4)}
  const p=reduce?0:scope.t;
  if(scope.mode==="idle")wave(2,p*2,w,h,"rgba(232,228,218,.35)",.05,1);
  else if(scope.mode==="hold")wave(scope.f1,p*5,w,h,"#c6a15b",.12+scope.amp*.88,1.4+scope.amp,8);
  else if(scope.mode==="typing")wave(scope.f1,p*4,w,h,"#c6a15b",.85,1.4,6);
  else if(scope.mode==="sweep"){wave(scope.f2,p*6,w,h,"#6f8193",.6,1.2,4);wave(scope.f1,p*4,w,h,"#c6a15b",.85,1.4,6)}
  else if(scope.mode==="lock"){wave(scope.f1,p*4,w,h,"rgba(198,161,91,.35)",.85,1);wave(scope.f2,p*4,w,h,"rgba(111,129,147,.35)",.85,1);
    cx.beginPath();const c1=scope.f1/55,c2=scope.f2/55;
    for(let x=0;x<=w;x+=2){const u=x/w*2*Math.PI,y=h*.42+(Math.sin(u*c1+p*4)+Math.sin(u*c2+p*4))*h*.17;x?cx.lineTo(x,y):cx.moveTo(x,y)}
    cx.strokeStyle="#e8e4da";cx.lineWidth=1.6;cx.shadowColor="#e8e4da";cx.shadowBlur=8;cx.stroke();cx.shadowBlur=0}
  scope.t+=.016}
const fmt=f=>f.toFixed(1)+" Hz";
function readout(q,l,s,on){$("hzQ").textContent=q;$("lock").textContent=l;$("lock").className=on?"on":"";$("hzS").textContent=s}
$("qin").addEventListener("input",()=>{const q=$("qin").value.trim();
  if(!q){scope.mode="idle";readout("— Hz","IDLE","",false)}else{scope.f1=qHz(q);scope.mode="typing";readout(fmt(scope.f1),"YOUR QUESTION","",false)}});

/* ================= sound ================= */
function ac(){actx=actx||new (window.AudioContext||window.webkitAudioContext)();return actx}
function tone(f1,f2){try{const a=ac(),t=a.currentTime,g=a.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.04,t+.15);g.gain.setValueAtTime(.04,t+1.4);g.gain.linearRampToValueAtTime(0,t+2.2);g.connect(a.destination);
  const o=a.createOscillator();o.type="sine";o.frequency.setValueAtTime(f1,t);o.frequency.exponentialRampToValueAtTime(f2,t+1.5);o.connect(g);o.start(t);o.stop(t+2.3)}catch(e){}}
function crackle(){try{const a=ac(),n=Math.floor(a.sampleRate*1.6),buf=a.createBuffer(1,n,a.sampleRate),d=buf.getChannelData(0);
  for(let i=0;i<n;i++){d[i]=(Math.random()*2-1)*.012+(Math.random()<.0009?(Math.random()*2-1)*.7:0)}
  for(let i=0;i<a.sampleRate*.03;i++)d[i]+=(Math.random()*2-1)*(1-i/(a.sampleRate*.03))*.5;
  const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();s.buffer=buf;f.type="bandpass";f.frequency.value=2200;f.Q.value=.6;g.gain.value=.5;
  const t=a.currentTime;g.gain.setValueAtTime(.5,t);g.gain.linearRampToValueAtTime(0,t+1.6);s.connect(f);f.connect(g);g.connect(a.destination);s.start()}catch(e){}}

/* ================= spin + reveal ================= */
function spin(){
  const q=$("qin").value.trim();if(!q)return;
  const fq=qHz(q);const [best,bd]=choose(q,fq);
  const fs=sHz(best);
  $("spin").disabled=true;$("random").disabled=true;
  setSpeed(45);setArm(19,true);scope.f1=fq;scope.mode="sweep";tone(fq,fs);
  let i=0;const sweep=setInterval(()=>{const s=SONGS[i++%SONGS.length];scope.f2=sHz(s);readout(fmt(fq),"SCANNING",fmt(scope.f2),false)},180);
  setTimeout(dropNeedle,950);
  setTimeout(()=>{clearInterval(sweep);scope.f2=fs;scope.mode="lock";readout(fmt(fq),"LOCKED · Δ "+Math.round(bd)+"¢",fmt(fs),true);
    setSpeed(33.333);reveal(q,best,bd);$("random").disabled=false},2400);
}
function reveal(q,s,bd){last=s;buzz.lock();const [t,a,v]=s,h=hash(t),c=cat.color,S=sideOf(ck),tr=SONGS.indexOf(s)+1;
  const ring=(x,y,r,al)=>`radial-gradient(circle at ${x}% ${y}%,transparent ${r}%,rgba(0,0,0,${al}) ${r}%,rgba(0,0,0,${al}) ${r+.35}%,transparent ${r+.35}%)`;
  const px=20+h%60,py=30+(h>>7)%50;
  const bg=[ring(px,py,22,.28),ring(px,py,30,.18),ring(px,py,38,.1),`radial-gradient(circle at ${px}% ${py}%,rgba(255,255,255,.18),transparent 45%)`,`linear-gradient(${150+h%40}deg,color-mix(in srgb,${c} 92%,#fff),color-mix(in srgb,${c} 62%,#000))`].join(",");
  $("swrap").innerHTML=`<canvas class="peek" width="440" height="440"></canvas><div class="sleeve" style="--sbg:${bg}"><div class="stop"><span class="cat-no">ND-001 · ${S}${tr} · ${cat.name}</span></div><div><div class="stitle"></div><div class="sartist"></div></div></div>`;
  const pk=$("swrap").querySelector(".peek"),pc=pk.getContext("2d");if(REC.disc){pc.drawImage(REC.base,0,0,440,440);pc.drawImage(REC.disc,0,0,440,440);pc.drawImage(REC.sheen,0,0,440,440)}
  
  $("swrap").querySelector(".stitle").textContent=t;$("swrap").querySelector(".sartist").textContent=a;
  $("asked").textContent="“"+q+"”";$("reading").textContent=s[petty?4:3];
  const term=encodeURIComponent(t+" "+a);
  $("links").innerHTML=`<a href="https://open.spotify.com/search/${term}" target="_blank" rel="noopener">Spotify ↗</a><a href="https://music.apple.com/us/search?term=${term}" target="_blank" rel="noopener">Apple Music ↗</a><a href="https://www.youtube.com/results?search_query=${term}" target="_blank" rel="noopener">YouTube ↗</a>`;
  show("ans");
}
function liftArm(){setArm(0,true);setTimeout(()=>{if(ARM.target===0)ARM.liftT=0},1100)}
$("go").onclick=()=>{dropNeedle();show("cats")};
$("again").onclick=()=>{liftArm();setQ("");show("ask")};
$("other").onclick=()=>{liftArm();show("cats")};

/* ================= haptics =================
   Android: the Vibration API drives the motor directly (buzz that builds while you hold).
   iPhone: Safari has no Vibration API; toggling a hidden iOS switch control (iOS 18+) fires the
   system haptic tick. It only fires inside a real touch, so iPhone gets crisp taps on press and release. */
const buzz=(()=>{const canV=typeof navigator.vibrate==="function";
  function iosTick(){try{const l=document.createElement("label"),i=document.createElement("input");i.type="checkbox";i.setAttribute("switch","");
    l.appendChild(i);l.style.display="none";l.setAttribute("aria-hidden","true");document.head.appendChild(l);l.click();l.remove()}catch(e){}}
  const v=pat=>{try{navigator.vibrate(pat)}catch(e){}};
  return{press(){canV?v(14):iosTick()},
    ring(p){if(canV)v(Math.round(6+p*22))},
    full(){canV?v([30,50,30]):iosTick()},
    release(){canV?v(22):iosTick()},
    lock(){canV?v([12,70,40]):iosTick()}}})();

/* ================= press and hold: water ================= */
if(/AppleWebKit/.test(navigator.userAgent)&&!/Chrome|Chromium|Android/.test(navigator.userAgent))document.documentElement.classList.add("wk");
const HOLD=1400,deck=$("deck"),wdisp=$("wdisp"),wturb=$("wturb");
const rc=$("ripple"),rx=rc.getContext("2d");let rings=[],hold=null,heldFrom=33.333,armFrom=0;
function rsize(){const d=devicePixelRatio||1;rc.width=innerWidth*d;rc.height=innerHeight*d;rx.setTransform(d,0,0,d,0,0)}
function addRing(x,y,p){rings.push({x,y,r:3,v:2.2+p*3.2,a:.45+p*.4,w:.8+p*1.8})}
function ringPath(g,dy,dr,col,a){rx.strokeStyle=`rgba(${col},${a})`;rx.beginPath();rx.arc(g.x,g.y+dy,Math.max(1,g.r+dr),0,6.2832);rx.stroke()}
const hum={start(){try{const a=ac(),t=a.currentTime;this.g=a.createGain();this.g.gain.setValueAtTime(0,t);this.g.gain.linearRampToValueAtTime(.03,t+.2);this.g.connect(a.destination);
  this.o=a.createOscillator();this.o.type="sine";this.o.frequency.setValueAtTime(110,t);this.o.frequency.exponentialRampToValueAtTime(660,t+HOLD/1000);this.o.connect(this.g);this.o.start(t)}catch(e){}},
  stop(){try{const t=actx.currentTime;this.g.gain.cancelScheduledValues(t);this.g.gain.setTargetAtTime(0,t,.08);this.o.stop(t+.5)}catch(e){}}};
function drawRipples(now){rx.clearRect(0,0,innerWidth,innerHeight);
  for(const g of rings){g.r+=g.v;g.v*=.992;g.a*=.972;rx.lineWidth=g.w;
    ringPath(g,2.5,3,"0,0,0",g.a*.45);ringPath(g,0,0,"240,234,220",g.a);ringPath(g,0,-g.r*.18,"198,161,91",g.a*.4)}
  rings=rings.filter(g=>g.a>.02);
  if(hold){const p=Math.min(1,(now-hold.t0)/HOLD);hold.p=p;
    if(now-hold.last>Math.max(110,320-p*210)){hold.last=now;addRing(hold.x,hold.y,p);buzz.ring(p)}
    if(!document.documentElement.classList.contains("wk"))wdisp.setAttribute("scale",(p*15).toFixed(1));
    wturb.setAttribute("baseFrequency",(.006+Math.sin(now/380)*.002).toFixed(4)+" "+(.009+Math.cos(now/460)*.0025).toFixed(4));
    if(scope.mode==="idle"||scope.mode==="hold"){scope.mode="hold";scope.amp=p;scope.f1=110*Math.pow(2,p*2.6);readout(fmt(scope.f1),p>=1?"RELEASE":"HOLDING","",p>=1)}
    if(p>=1&&!hold.buzz){hold.buzz=1;buzz.full()}}}
const busy=()=>$("random").disabled;
function startHold(x,y){if(busy()||hold)return;hold={x,y,t0:performance.now(),last:0,p:0};heldFrom=REC.target;REC.target=0;armFrom=ARM.target;setArm(19,true);deck.classList.add("held");buzz.press();addRing(x,y,0);hum.start()}
let lastGo=0;
function endHold(e){if(!hold)return;if(!(e&&e.type==="pointercancel"))buzz.release();const p=hold.p,x=hold.x,y=hold.y,cancelled=e&&e.type==="pointercancel";hold=null;hum.stop();REC.target=heldFrom;
  deck.classList.remove("held");wdisp.setAttribute("scale","0");
  for(let i=0;i<3;i++)setTimeout(()=>addRing(x,y,.5+i*.25),i*110);
  if(scope.mode==="hold"){scope.mode="idle";scope.amp=.15;readout("— Hz","IDLE","",false)}
  if(!cancelled||p>=.3){lastGo=performance.now();dropNeedle();release()}else setArm(armFrom,false)}
/* touch: handled directly so iOS can't claim the long press (it fires pointercancel and starts a scroll/callout) */
let touchId=null;
const tFind=e=>[...e.changedTouches].find(t=>t.identifier===touchId);
deck.addEventListener("touchstart",e=>{e.preventDefault();if(touchId!==null)return;const t=e.changedTouches[0];touchId=t.identifier;startHold(t.clientX,t.clientY)},{passive:false});
deck.addEventListener("touchmove",e=>{e.preventDefault();const t=tFind(e);if(t&&hold){hold.x=t.clientX;hold.y=t.clientY}},{passive:false});
deck.addEventListener("touchend",e=>{e.preventDefault();if(!tFind(e))return;touchId=null;endHold()},{passive:false});
deck.addEventListener("touchcancel",e=>{if(!tFind(e))return;touchId=null;endHold({type:"pointercancel"})});
/* mouse and pen */
deck.addEventListener("pointerdown",e=>{if(e.pointerType==="touch")return;try{deck.setPointerCapture(e.pointerId)}catch(_){}startHold(e.clientX,e.clientY)});
deck.addEventListener("pointermove",e=>{if(e.pointerType!=="touch"&&hold){hold.x=e.clientX;hold.y=e.clientY}});
deck.addEventListener("pointerup",e=>{if(e.pointerType!=="touch")endHold(e)});deck.addEventListener("pointercancel",e=>{if(e.pointerType!=="touch")endHold(e)});
deck.addEventListener("contextmenu",e=>e.preventDefault());
deck.addEventListener("click",()=>{if(performance.now()-lastGo<700||busy())return;lastGo=performance.now();const r=REC.el.getBoundingClientRect();addRing(r.left+r.width/2,r.top+r.height/2,.6);dropNeedle();release()});
deck.addEventListener("keydown",e=>{if((e.key===" "||e.key==="Enter")&&!e.repeat){e.preventDefault();const r=REC.el.getBoundingClientRect();startHold(r.left+r.width/2,r.top+r.height/2)}});
deck.addEventListener("keyup",e=>{if(e.key===" "||e.key==="Enter")endHold()});
function release(){
  if(!$("v-intro").hidden)show("cats");
  else if(!$("v-cats").hidden)pick(ORDER[Math.floor(Math.random()*ORDER.length)]);
  else if(!$("v-ask").hidden){if(!$("qin").value.trim())setQ(autoQ());spin()}
  else{liftArm();setQ("");show("ask")}}

/* ================= loop ================= */
/* Canvases are re-measured whenever the page or its parts actually get a size.
   In an embedded panel the page can load at 0×0, so load-time sizing alone leaves every canvas blank. */
let sizedFor="";
function sizeAll(){try{sizeAll_()}catch(e){window.__err&&__err("size: "+e.message)}}
function sizeAll_(){const key=[innerWidth,innerHeight,deck.clientWidth,cv.clientWidth,cv.clientHeight,devicePixelRatio].join("|");
  if(key===sizedFor)return;sizedFor=key;for(const f of [skySize,rsize,scopeSize,sizeRec]){try{f()}catch(e){window.__err&&__err(f.name+": "+e.message)}}}
addEventListener("resize",sizeAll);addEventListener("orientationchange",sizeAll);addEventListener("pageshow",sizeAll);
document.addEventListener("visibilitychange",()=>{if(!document.hidden)sizeAll()});
if(window.visualViewport)visualViewport.addEventListener("resize",sizeAll);
if(window.ResizeObserver){const ro=new ResizeObserver(()=>sizeAll());ro.observe(document.documentElement);ro.observe(deck);ro.observe(cv)}
/* Two clocks. requestAnimationFrame is the smooth one, but embedded viewers can pause it
   (and ResizeObserver with it) indefinitely; a timer clock takes over whenever frames stop arriving. */
let lastT=performance.now(),checkAt=0,lastFrameAt=0;
function frame(t){if(t-lastT<8)return;const dt=Math.min(.05,(t-lastT)/1000);lastT=t;lastFrameAt=performance.now();
  if(t>checkAt){checkAt=t+500;sizeAll()}
  for(const f of [()=>drawSky(reduce?0:t),()=>stepRec(dt),()=>stepArm(dt),drawScope,()=>drawRipples(t)]){try{f()}catch(e){window.__err&&__err("frame: "+e.message)}}}
function raf(t){requestAnimationFrame(raf);frame(performance.now())}
setInterval(()=>{const n=performance.now();if(n-lastFrameAt>120)frame(n)},33);
setInterval(sizeAll,700);
sizeAll();requestAnimationFrame(raf);setTimeout(()=>frame(performance.now()),0);
(document.fonts&&document.fonts.ready||Promise.resolve()).then(()=>{if(REC.S){buildDisc();paintRec()}});

try{window.__stage("ready")}catch(e){}
