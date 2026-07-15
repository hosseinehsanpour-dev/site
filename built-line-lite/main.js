const esc=s=>{const d=document.createElement("div");d.textContent=s??"";return d.innerHTML};
fetch("/content.json").then(r=>r.json()).then(d=>{
document.getElementById("h1").textContent=d.hero.line1;
document.getElementById("h2").textContent=d.hero.line2;
document.getElementById("hero-p").textContent=d.hero.subtitle;
const v=document.getElementById("hero-v");v.querySelector("source").src=d.hero.video;v.poster=d.hero.poster;v.load();v.play().catch(()=>{});
document.getElementById("stats").innerHTML=d.stats.map(s=>`<div class="stat"><b>${esc(s.value)}</b><small>${esc(s.label)}</small></div>`).join("");
document.getElementById("svc").innerHTML=d.services.map(s=>`<article><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p><ul>${s.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul></article>`).join("");
const pd=document.getElementById("pdetail");
document.getElementById("proj").innerHTML=d.projects.map(p=>`<div class="pcard" data-id="${p.id}"><img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy"/><div class="pb"><div class="pcat">${esc(p.category)}</div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p></div></div>`).join("");
document.querySelectorAll(".pcard").forEach(el=>el.onclick=()=>{
const p=d.projects.find(x=>x.id===el.dataset.id);if(!p)return;
pd.hidden=false;
pd.innerHTML=`<h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="met"><div><small>Budget</small>${esc(p.metrics.budget)}</div><div><small>Duration</small>${esc(p.metrics.duration)}</div><div><small>Scale</small>${esc(p.metrics.scale)}</div></div><div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>`;
pd.scrollIntoView({behavior:"smooth",block:"nearest"});
});
document.getElementById("tl").innerHTML=d.experience.map(e=>`<div class="ti"><div class="ty">${esc(e.year)} · ${esc(e.type)}</div><div class="tr">${esc(e.role)}</div><div class="tm">${esc(e.client)} — ${esc(e.project)}</div><p>${esc(e.achievement)}</p></div>`).join("");
document.getElementById("certs").innerHTML=d.certifications.map(c=>`<div class="ci"><strong>${esc(c.title)}</strong><br/><span class="tm">${esc(c.issuer)} · ${esc(c.year)} · ${esc(c.license)}</span></div>`).join("");
document.getElementById("edu").innerHTML=d.education.map(e=>`<div class="ci"><strong>${esc(e.degree)}</strong><br/><span class="tm">${esc(e.institution)} · ${esc(e.year)} · ${esc(e.specialization)}</span></div>`).join("");
document.getElementById("aff").innerHTML=d.affiliations.map(a=>`<li>${esc(a)}</li>`).join("");
document.getElementById("ch").textContent=d.contact.heading;
document.getElementById("cs").textContent=d.contact.subheading;
document.getElementById("cinfo").innerHTML=`<p><strong>Email</strong><br/><a href="mailto:${esc(d.contact.email)}">${esc(d.contact.email)}</a></p><p><strong>Location</strong><br/>${esc(d.contact.location)}</p><p><strong>Availability</strong><br/>${esc(d.contact.availability)}</p><p class="tm">${esc(d.contact.responseTime)}</p>`;
document.getElementById("ftag").textContent=d.site.footerTagline;
document.getElementById("cpy").textContent=`© ${new Date().getFullYear()} Professional Civil Engineer`;
document.getElementById("soc").innerHTML=`<a href="${esc(d.contact.linkedin)}" target="_blank" rel="noopener">LinkedIn</a><a href="${esc(d.contact.researchgate)}" target="_blank" rel="noopener">ResearchGate</a><a href="mailto:${esc(d.contact.email)}">Email</a>`;
document.getElementById("cf").onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);const body=encodeURIComponent(`Name: ${f.get("name")}\nEmail: ${f.get("email")}\nType: ${f.get("projectType")}\nBudget: ${f.get("budget")}\n\n${f.get("message")}`);location.href=`mailto:${d.contact.email}?subject=${encodeURIComponent("Project inquiry")}&body=${body}`;};
});
