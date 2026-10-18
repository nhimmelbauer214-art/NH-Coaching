"use strict";
/* ===== KONFIGURATION ===== */
// PLACEHOLDER: Endpunkt des Formulardienstes (z. B. Formspree) hier eintragen. Solange leer, wird NICHTS gesendet.
const FORM_ENDPOINT = "";

/* ===== ÜBERSETZUNGEN: Deutsch steht im HTML, Englisch hier (Schlüssel = data-t) ===== */
const EN = {
skip:"Skip to content",menu:"Menu",n1:"Coaching",n2:"Process",n3:"Transformation",n4:"About me",n5:"FAQ",n6:"Contact",cta:"Request coaching",
h_eye:"Online Fitness Coaching",h_h1:"Fitness that fits into your life.",h_sub:"Individual online fitness coaching for people with little time and clear goals.",h_cta2:"How the coaching works",
h_f1:"Max. 5 active clients at a time",h_f2:"Gym or home training",h_f3:"Sessions usually around 60 minutes",h_alt:"Noah, mirror selfie, mid-2026",
p_h:"You want to change something. But your daily life leaves little room to think about it constantly.",
p_1:"A full workday, family, appointments. In the evening there is little energy left to compare training methods, estimate calories or sort through conflicting advice. You may have tried a lot already – and at some point the structure was missing.",
p_k:"You don’t necessarily need more time for fitness. You need an approach that fits the time you have.",
s_h:"A clear strategy instead of constant trial and error.",s1h:"Training",s1:"A concrete plan with exercises, sets, repetitions and notes on execution.",
s2h:"Nutrition",s2:"Individual recommendations for calories and macronutrients as part of a strategy that works in everyday life.",
s3h:"Support",s3:"Direct WhatsApp contact with a reply within 24 hours.",s4h:"Adjustment",s4:"Weekly check-ins and sensible changes based on your actual progress.",
a_h:"How the coaching works",a1h:"Request",a1:"You describe your starting point, goal and time frame.",a2h:"Analysis",a2:"Age, height, weight, training experience, daily routine and available time are reviewed.",
a3h:"Individual plan",a3:"You receive a suitable training plan and an approach for training and nutrition.",a4h:"Implementation",a4:"You fit the plan into your daily life.",
a5h:"Weekly check-in",a5:"Progress, training, weight, well-being and sleep are reviewed.",a6h:"Adjustment if needed",a6:"What works stays. Where necessary, it is adjusted.",
t_h:"Concrete training. Clear structure. No unnecessary effort.",
t_1:"You get concrete exercises with sets, repetitions and execution notes – for the gym or for training at home. For home training, dumbbells, parallettes and a pull-up bar are often enough.",
t_2:"My own sessions typically take around 60 minutes. That is a rough guide, not a guarantee for every programme.",
w_h:"Personal support instead of mass processing.",w_k:"A maximum of 5 active coaching clients at a time.",
w_1:"I want to focus on the people I actually coach individually – instead of processing as many clients in parallel as possible.",
w2:"Individual training planning",w3:"Strategy based on your starting point",w4:"Direct contact and regular feedback",w5:"Adjustments when needed",w6:"Realistic expectations, focus on everyday practicality",
x_h:"Years of consistent work. No shortcut.",x_1:"My development over several years – photos from my everyday life, not edited, only cropped.",
x_g1:"Front pose",x_g2:"Back pose",x_g3:"Back on the pull-up bar",x_now:"Current",x_cn:"Training at home doesn’t need expensive equipment: a pull-up bar, dumbbells and parallettes are often enough.",
x_a1:"Front pose, biceps flexed, 2021",x_a2:"Front pose, biceps flexed, 2024",x_a3:"Front pose, biceps flexed, 2025",x_a4:"Front pose, biceps flexed, 2026",
x_b1:"Back pose, both arms flexed, 2021",x_b2:"Back pose, both arms flexed, 2024",x_b3:"Back pose, both arms flexed, 2025",
x_c1:"Back on the pull-up bar, late 2025",x_c2:"Back on the pull-up bar, current",
u_h:"A structured approach I have applied to myself for years.",
u_1:"I’m 22 and have trained consistently for over five years. At 16–17, in a first diet, I went from about 72 to about 65 kg (around 11% body fat at the time). Today I weigh about 82 kg at an estimated 12–13% body fat.",
u_2:"I did not start with ideal structure. Over the years I learned how important a sustainable approach is. My development is personal experience – not proof that everyone will achieve the same with the same approach. I am neither a doctor nor an orthopaedist.",
u_k:"Motivation gets you started. A good routine helps you stay with it.",u_3:"Motivation fluctuates. A workable structure saves you repeated decisions – and therefore energy.",
o_eye:"Individual online fitness coaching",o_pm:"per month",o_min:"Minimum term: 3 months · Total for the minimum term: €597",
o1:"Individual initial analysis",o2:"Individual training plan with concrete exercise selection",o3:"Support for gym or home training",o4:"Individual recommendations on calories and macronutrients",o5:"Weekly check-ins and progress tracking",o6:"Personal WhatsApp contact",o7:"Adjustments when needed",
f_h:"Frequently asked questions",
q1:"Who is the coaching for?",r1:"For working people around 40 and older who want to lose fat, build muscle or improve their shape and are looking for a clear plan that fits everyday life.",
q2:"Is it suitable for beginners, and can I train at home?",r2:"Yes. The plan follows your experience and your equipment – gym or home training are both possible.",
q3:"How much time should I plan per session?",r3:"My plans are typically designed for about 60 minutes. We discuss your available time during the analysis.",
q4:"How do support and check-ins work?",r4:"Via WhatsApp, with a reply within 24 hours. Once a week we look at progress, training, weight, well-being and sleep together.",
q5:"What if the plan doesn’t work?",r5:"Then it gets adjusted. If it works, it stays as it is.",
q6:"How do the nutrition recommendations work?",r6:"I look at your starting point, daily life and goal and derive a clear approach from it – how I would proceed in your place. This is not medical nutrition counselling or therapy.",
q7:"How long until results become visible?",r7:"That depends on your starting point, training status and consistency. I cannot guarantee results.",
q8:"Minimum term, price, health limitations?",r8:"€199 per month with a 3-month minimum term. If you have serious health problems, please talk to your doctor first – I do not replace medical care.",
c_h:"Request coaching",c_1:"Briefly describe your situation. The request is non-binding; we discuss the next steps personally. Please do not enter diagnoses or medical findings.",
l_name:"Name",l_mail:"Email address",l_age:"Age",l_h:"Height (cm)",l_w:"Weight (kg)",l_sex:"Gender (optional)",l_goal:"Training goal",o_choose:"Please choose",
g1:"Lose fat",g2:"Build muscle",g3:"Both / get fitter overall",l_exp:"Previous training experience",l_days:"Training days per week",l_min:"Time per session (min.)",
l_hint:"My training plans are typically designed for about 60 minutes per session.",l_day:"Your daily life in a sentence or two",l_tried:"What have you tried so far?",l_why:"Why now?",
l_lim:"There are limitations we should discuss personally before training starts (please don’t enter details here).",l_more:"Anything else (optional)",
l_priv:"I have read the",l_priv2:".",f_priv:"Privacy policy",l_send:"Send request",
ft_1:"Individual fitness strategies for people with little time.",f_imp:"Legal notice",f_haft:"Disclaimer"};
const MSG={
de:{req:"Bitte ausfüllen.",mail:"Bitte eine gültige E-Mail-Adresse eingeben.",send:"Wird gesendet …",ok:"Danke, deine Anfrage ist eingelangt und wird persönlich beantwortet.",fail:"Die Übertragung hat nicht funktioniert. Bitte versuche es später erneut.",noep:"Technische Einrichtung offen: Es ist noch kein Formulardienst konfiguriert. Die Anfrage wurde NICHT gesendet."},
en:{req:"Please fill in this field.",mail:"Please enter a valid email address.",send:"Sending …",ok:"Thank you, your request has arrived and will be answered personally.",fail:"The transmission failed. Please try again later.",noep:"Technical setup pending: no form service is configured yet. Your request was NOT sent."}};

let lang="de";
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const DE={};
$$("[data-t]").forEach(e=>DE[e.dataset.t]??=e.textContent);
$$("[data-t-alt]").forEach(e=>DE[e.dataset.tAlt]=e.alt);
DE.menu="Menü";

function setLang(l){
  lang=l;document.documentElement.lang=l;const D=l==="de"?DE:EN;
  $$("[data-t]").forEach(e=>{e.textContent=D[e.dataset.t]});
  $$("[data-t-alt]").forEach(e=>{e.alt=D[e.dataset.tAlt]});
  $$("[data-t-aria]").forEach(e=>{e.setAttribute("aria-label",D[e.dataset.tAria])});
  $$("[data-lang]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===l));
  $$("[aria-invalid=true]").forEach(f=>validate(f)); // Fehlermeldungen in neuer Sprache; Eingaben bleiben unberührt
  try{localStorage.setItem("nh-lang",l)}catch(e){}
}
$$("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));

/* Mobile-Menü */
const btn=$(".menu-btn"),nav=$("#nav");
function $(s){return document.querySelector(s)}
btn.addEventListener("click",()=>{const o=nav.classList.toggle("open");btn.setAttribute("aria-expanded",o)});
nav.addEventListener("click",e=>{if(e.target.tagName==="A"){nav.classList.remove("open");btn.setAttribute("aria-expanded","false")}});

/* Scroll-Reveal (nur ohne reduced-motion; ohne JS bleibt alles sichtbar) */
if("IntersectionObserver"in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
  $$(".sec .wrap > *").forEach(e=>{e.classList.add("reveal");io.observe(e)});
}

/* Formular */
const form=$("#form"),status=$("#status");
function validate(f){
  let m="";
  if(f.required&&((f.type==="checkbox"&&!f.checked)||(f.type!=="checkbox"&&!f.value.trim())))m=MSG[lang].req;
  else if(f.type==="email"&&f.value&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.value))m=MSG[lang].mail;
  else if(f.value&&f.validity&&!f.validity.valid&&f.type==="number")m=MSG[lang].req;
  let n=f.closest("label").querySelector(".err");
  if(m){f.setAttribute("aria-invalid","true");if(!n){n=document.createElement("span");n.className="err";n.id=(f.name||"f")+"-err";f.closest("label").appendChild(n);f.setAttribute("aria-describedby",n.id)}n.textContent=m;return false}
  f.removeAttribute("aria-invalid");if(n)n.remove();return true;
}
form.addEventListener("input",e=>{if(e.target.hasAttribute("aria-invalid"))validate(e.target)});
let sending=false;
form.addEventListener("submit",async e=>{
  e.preventDefault();if(sending)return;
  const bad=$$("input:not(.hp),select,textarea",form).filter(f=>!validate(f));
  if(bad.length){bad[0].focus();status.textContent="";return}
  status.className="";
  if(!FORM_ENDPOINT){status.className="bad";status.textContent=MSG[lang].noep;return} // ehrlich: nichts wird gesendet
  sending=true;const sb=$("button[type=submit]",form);sb.disabled=true;status.textContent=MSG[lang].send;
  try{
    const r=await fetch(FORM_ENDPOINT,{method:"POST",body:new FormData(form),headers:{Accept:"application/json"}});
    if(!r.ok)throw new Error(r.status);
    status.className="ok";status.textContent=MSG[lang].ok;form.reset();
  }catch(err){status.className="bad";status.textContent=MSG[lang].fail}
  finally{sending=false;sb.disabled=false}
});
try{const s=localStorage.getItem("nh-lang");if(s==="en")setLang("en")}catch(e){}
