// ============================================================
// Technology Transfer Handbook — SPA application logic (v2)
// Reads CONFIG, ACTS, IPS_DATA, RELEVANCE, FLOW (data-loader.js)
// and FABFLOW/DTCO_LOOPS/EXTERNAL_IP_STREAMS/IP_TO_FW (fab-data.js).
// Renders flow diagrams + matrix + IP map, and shows all detail
// INLINE below each section (no pop-ups), stacked top-to-bottom.
// ============================================================

/* ---------- tier metadata ---------- */
var IP_TIERS={"Protocol compliance":"T1","SPICE":"T1","Statistic model":"T1","Corner model":"T1","Behavior model ( Verilog-A)":"T3","BEOL model (Back end of line model)":"T2","EDA process tech file":"T1","Netlist view":"T2","Pcell (parameterized cell)":"T1","DRC (Design rule check)":"T1","LVS (Layout vs. Schematic)":"T1","LPE (Layout Parameter Extraction)":"T2","ERC (Electrical rule check)":"T2","PEX (Parasitic Extraction)":"T1","ESD (Electrostatic Discharge)":"T1","Antenna":"T1","Latch-up":"T1","Reliability rules":"T1","DFM":"T2","IR drop rule":"T2","EM rule (Electromigration)":"T1","Thermal-aware rule":"T2","Mask data preparation interface":"T1","Test acceess I/O guidline":"T3","Timing and signal integerity":"T3","STA-Static Timing Analysis":"T1","Synthesis/CTS/P&R":"T2","Clocking":"T2","Low-power kits (retention/isolation)":"T2","Standard cell families":"T1","SRAM compilers":"T1","ESD clamps/pad rings":"T1","IO libraries":"T1","PCIe":"T3","USB":"T3","MIPI":"T3","Ethernet":"T3","Analog":"T2","Mixed signal":"T2","High speed":"T2","RF/mmwave":"T3","prioritized RF front-ends":"T3","DFT":"T2","ROM":"T2","eFuse":"T2","DDR/LPDDR":"T3","Device architecture":"T1","TCAD models":"T1","Reticle Shot Map":"T1","Process recipe":"T1","DOE methodology":"T2","Material selection table":"T1","Dense device array (variability, LDE)":"T2","Reliability stress structure":"T1","Lithography and parttern monitor":"T3","Statistic limit , conner chart":"T3","Reference structure":"T1","Measurement definitions":"T1","Model correlations":"T1","Integration guides":"T1","Process flow integration":"T1","Process window":"T1","Process sensitivity analysis":"T2","Process corner definition method":"T1","Yield  leaning":"T3","Inline monitoring strategy":"T1","Split lot design":"T2","Tool qualification and matching":"T1","Test structure design":"T1","Yield ramp-up methodology":"T1","Defect classification":"T1","SPC":"T1","FDC (Fault detection and classification)":"T1","Q-time controls":"T1","R2R APC":"T1","Lesson learn":"T2","FMEA (failure mode and effects analysis)":"T2","Equipment maintanence IP":"T3","Defect control strategy":"T2","Defect root cause library":"T1","Cost optimization":"T4","Capacity planning":"T4","Electrical test information":"T1","Metrology information":"T1","Defect-inspection information":"T1","Correlation data":"T1","Metrology involvement":"T2","Measurement system capability":"T2","Reliability of test infrastructure":"T2","TDDB lifetime models":"T1","BTI degradation models":"T1","HCI models":"T1","EM lifetime prediction":"T1","FA flow decision tree":"T2","Physical root-cause libs":"T2","Cross-layer defect interpretation":"T2","HTOL/ HAST/ TC test flows":"T1","Acceleration factor derivation":"T1","Sample size and confidence models":"T2","FIT (Failure in time) rate calculation methods":"T1","Mission profile translation":"T3","Automotive/aerospace qualification logic":"T3","Automotive Qualification Plan":"T3","Layer List and Polarity":"T1","Pellicle/Inspection Plan":"T1","Fracturing and Geometry Algorithms":"T2","ORC (Optical Rule Check)- Mask rule check":"T3","File format and data stuctures":"T3","Mask data translation":"T1","RET/OPC (Resolution Enhancement Tech / Optical Proximity Correction) kits":"T1","OPC test-keys":"T1","SMO strategies":"T2","SRAF (Sub-Resolution Assist Features) recipes":"T2","Phase Shift Masks design":"T3","mask set definition":"T3","alignment and overlay marks":"T3","hotspot library":"T3","hotspot detection method":"T3","Mask quality control":"T1","Multi-beam datapath":"T3","Product-specific yield learning":"T4","Design-process interaction":"T2","Customer ramp playbook":"T4","Electrical test":"T1","FDC rules":"T1","Dispatch Logic / Scheduling Rules":"T2","SECS/GEM Configuration":"T1","RMS Structure":"T2","AMHS/MCS Routing Algorithms":"T2","OPC-UA Namespace":"T3","Server Configuration":"T4","WIP Tracking":"T1","Lot Genealogy Schema":"T2","YMS Data Integration Schema":"T2","SEM/TEM Image Metadata Schema":"T3","Virtual Metrology Models":"T2","MLOps Pipeline Configuration":"T3","RBAC Configuration":"T4","IT/OT Segmentation Rules":"T3","IEC 62443 / Cybersecurity Layer":"T3","Data Retention & Archival Policy":"T4","Backup & Disaster Recovery Procedures":"T4"};

var DOM_EMO={'PDK':'','TD':'','PILOT':'','HVM':'','METRO':'','QR':'','MASK':'','PROD':'','IT':''};
var DOM_LABEL={'PDK':'PDK \u2014 Process Design Kit','TD':'Technology Development','PILOT':'Pilot / Prototyping','HVM':'Volume Manufacturing','METRO':'Metrology & Measurement','QR':'Quality & Reliability','MASK':'Mask Fabrication','PROD':'Product Engineering','IT':'IT & Automation'};
var DOM_SUB={'PDK':'Models, rules, IP libraries \u2014 EDA office','TD':'R&D lab \u2014 device architecture, TCAD, DOE','PILOT':'Pilot line \u2014 process window, yield learning','HVM':'HVM fab \u2014 APC/SPC, yield stabilization','METRO':'Inline metrology (fab floor) + offline lab','QR':'Reliability lab (HTOL/HAST/TC), FA lab','MASK':'Mask shop \u2014 e-beam, OPC, reticle inspection','PROD':'Design office + E-test floor \u2014 yield learning','IT':'Horizontal layer \u2014 MES, FDC, APC, data models'};
var LAYERS=[
  {id:'design',label:'IP \u2014 DESIGN SUPPORT',sub:'PDK, Mask Data, Product Engineering',domains:['PDK','MASK','PROD']},
  {id:'manuf',label:'IP \u2014 MANUFACTURING',sub:'Technology Development, Pilot, HVM',domains:['TD','PILOT','HVM']},
  {id:'support',label:'IP \u2014 MFG SUPPORT',sub:'Metrology \u00B7 Quality & Reliability \u00B7 IT & Automation',domains:['METRO','QR','IT']}
];

/* ---------- Fab Work Flow → related articles in "Specific Processes in Fab" ----------
   Each FW phase links to the matching knowledge-base articles (more.html#<id>). */
var FW_ARTICLES={
  FW1:[['process-characterization','Process Characterization'],['doe','Design of Experiments (DOE)'],['device-characterization','Device Characterization'],['spice','SPICE / BSIM4 Model Role'],['construct','Construction Analysis']],
  FW2:[['msa','MSA — Measurement System Analysis'],['pcm-wat','PCM / WAT'],['teg','Test Element Group (TEG)'],['spc','Statistical Process Control (SPC)'],['device-characterization','Device Characterization']],
  FW3:[['spice','SPICE / BSIM4 Model Role'],['dfm','Design for Manufacturability (DFM)'],['mfd','Manufacturability for Design (MfD)'],['dft','Design for Test (DFT)'],['tapeout','Tape-out · DRC / LVS Sign-off']],
  FW4:[['tqv','Test Vehicle (TQV)'],['mpw','Multi-Project Wafer (MPW)'],['lots','Lot Types — R&D · Eng · Qual'],['yield','Yield Learning'],['fmea','FMEA — Failure Mode & Effects'],['fa','Failure Analysis (FA)'],['process-qualification','Process Qualification']],
  FW5:[['spc','Statistical Process Control (SPC)'],['apc','APC · FDC · Run-to-Run Control'],['pcn','PCN — Process Change Notification'],['oee','OEE · SEMI E10 · MTTR / MTBF'],['wip','WIP · Cycle Time · X-Factor'],['prod-qual','Product Qualification'],['prr','PRR — Product Release Review'],['pqe','PQE — Product Quality Engineer'],['coc','CoC — Certificate of Conformance'],['sweat','SWEAT — Wafer-Level EM (JEP119A)']]
};
function articleLinks(fwId){
  var arts=FW_ARTICLES[fwId];if(!arts||!arts.length)return '';
  var h='<div class="art-links"><div class="art-links-lbl">Related articles in <em>Specific Processes in Fab</em></div><div class="art-links-row">';
  arts.forEach(function(a){h+='<a class="art-link" href="more.html#'+a[0]+'">'+E(a[1])+' \u2197</a>';});
  h+='</div></div>';
  return h;
}

/* ---------- lookups ---------- */
var PHASES={},GROUPS={},FLOW_MAP={},FW_MAP={},IPS_BY_NO={};
CONFIG.phases.forEach(function(p){PHASES[p.id]=p;});
CONFIG.groups.forEach(function(g){GROUPS[g.id]=g;});
FLOW.forEach(function(p){FLOW_MAP[p.id]=p;});
FABFLOW.forEach(function(p){FW_MAP[p.id]=p;});
IPS_DATA.forEach(function(ip){IPS_BY_NO[ip.no]=ip;});

/* ---------- utils ---------- */
function E(s){if(s==null)return '';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function figureHTML(src,caption){
  if(!src)return '';
  var h='<figure class="phase-figure"><img src="'+E(src)+'" alt="'+E(caption||'')+'" loading="lazy"'
    +' onerror="this.closest(\'figure\').classList.add(\'img-missing\')">';
  if(caption)h+='<figcaption>'+E(caption)+'</figcaption>';
  h+='</figure>';
  return h;
}
function tCC(t){return t==='T1'?'tchip-t1':t==='T2'?'tchip-t2':t==='T3'?'tchip-t3':'tchip-t4';}
function tBg(t){return {T1:'#C0392B',T2:'#44607A',T3:'#B5BCC6',T4:'#EDF1F5'}[t]||'#B5BCC6';}
function tFg(t){return {T1:'#fff',T2:'#fff',T3:'#1F2937',T4:'#475569'}[t]||'#1F2937';}
function tLbl(t){return {T1:'Must Transfer',T2:'Should Transfer',T3:'Optional',T4:'Develop Locally'}[t]||t;}
function ipTier(ip){return IP_TIERS[ip.name]||ip.tier||'T3';}
function citeMarkup(text){if(!text)return '';return E(text).replace(/\[(\d+(?:\s*,\s*\d+)*)\]/g,function(_,n){return '<sup style="color:var(--spa-red);font-weight:700">['+n.replace(/\s+/g,'')+']</sup>';});}
function criteriaList(text){
  if(!text||!text.trim())return '';
  var raw=text.split(/;|\n/).map(function(s){return s.trim().replace(/\.+$/,'');}).filter(function(s){return s.length>2;});
  if(raw.length<2)raw=text.split(/\.\s+(?=[A-Z])/).map(function(s){return s.trim();}).filter(function(s){return s.length>2;});
  if(raw.length<2)return '<p>'+E(text)+'</p>';
  return '<ul>'+raw.map(function(i){return '<li>'+E(i)+'</li>';}).join('')+'</ul>';
}

/* ---------- IP-by-domain block (shared) ---------- */
function buildIPsByDomain(items){
  if(!items||!items.length)return '<p style="color:var(--spa-mid);font-size:12px;font-style:italic">No IPs assigned.</p>';
  var byDom={};
  items.forEach(function(ip){(byDom[ip.domain]=byDom[ip.domain]||[]).push(ip);});
  var html='';
  Object.keys(byDom).sort().forEach(function(dom){
    var dIPs=byDom[dom],emo=DOM_EMO[dom]||'';
    var bySub={};
    dIPs.forEach(function(ip){var sg=ip.sub||'General';(bySub[sg]=bySub[sg]||[]).push(ip);});
    html+='<div class="dom-sec collapsed"><div class="dom-sec-hdr" onclick="this.parentNode.classList.toggle(\'collapsed\')">';
    html+='<span class="dom-sec-name">'+E(DOM_LABEL[dom]||dom)+'</span><span class="dom-sec-count">'+dIPs.length+' IPs</span></div>';
    Object.keys(bySub).sort().forEach(function(sg){
      html+='<div class="sg-block">';
      if(Object.keys(bySub).length>1)html+='<div class="sg-hdr">'+E(sg)+'</div>';
      html+='<div class="ip-card-grid">';
      bySub[sg].forEach(function(ip){
        var full=IPS_BY_NO[ip.no];
        var def=full?(full.definition||'').substring(0,85):'';
        var tier=ipTier(ip);
        html+='<div class="ipc" onclick="event.stopPropagation();openIP('+ip.no+')">';
        html+='<div class="ipc-name">'+E(ip.name)+'</div>';
        if(def)html+='<div class="ipc-def">'+E(def)+(def.length>=85?'\u2026':'')+'</div>';
        html+='<div class="ipc-foot"><span class="tchip '+tCC(tier)+'">'+tier+'</span></div></div>';
      });
      html+='</div></div>';
    });
    html+='</div>';
  });
  return html;
}

/* ============================================================
   TT PHASE FLOW
   ============================================================ */
function buildTTFlow(){
  var d=document.getElementById('tt-diagram');
  var blk=function(id){
    var f=FLOW_MAP[id];if(!f)return '';
    var dur=id==='P2'?'Yield \u226560%':id==='P3'?'Yield \u226580%':''+f.duration;
    return '<div class="tt-block" data-tt="'+id+'" onclick="showTT(\''+id+'\')">'
      +'<div class="tt-block-code">'+f.label+'</div>'
      +'<div class="tt-block-name">'+E(f.title.split('\u00B7')[0].split('\u2013')[0].split(':')[0].trim().substring(0,30))+'</div>'
      +'<div class="tt-block-dur">'+dur+'</div></div>';
  };
  var h=blk('P0')+'<div class="tt-arrow">\u2192</div>';
  h+='<div class="tt-parallel"><div class="tt-par-lbl">Phase 1 \u2014 3 parallel streams</div>';
  ['P1a','P1b','P1c'].forEach(function(id){h+=blk(id);});
  h+='</div><div class="tt-arrow">\u2192</div>'+blk('P2')+'<div class="tt-arrow">\u2192</div>'+blk('P3');
  d.innerHTML=h;
}

function showTT(id){
  var f=FLOW_MAP[id];if(!f)return;
  document.querySelectorAll('#tt-diagram .tt-block').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-tt')===id);});
  var panel=document.getElementById('tt-detail');
  var empty=document.getElementById('tt-empty');if(empty)empty.style.display='none';

  /* IPs for this phase (across all groups) */
  var phMap={};
  Object.values(RELEVANCE).forEach(function(gd){(gd[id]||[]).forEach(function(ip){if(!phMap[ip.no])phMap[ip.no]=ip;});});
  var allIPs=Object.values(phMap).sort(function(a,b){return a.domain.localeCompare(b.domain)||a.name.localeCompare(b.name);});
  var t1=0,t2=0,t3=0;
  allIPs.forEach(function(ip){var t=ipTier(ip);if(t==='T1')t1++;else if(t==='T2')t2++;else t3++;});

  var h='<div class="detail-hd"><div class="dh-sup">'+E(f.label)+(f.parallel?' \u00B7 Parallel Stream':'')+'</div>';
  h+='<div class="dh-title">'+E(f.title)+'</div>';
  h+='<div class="dh-meta">'+E(f.duration)+'</div>';
  h+='<button class="detail-close" onclick="closeTT()">\u2715</button></div>';
  h+='<div class="detail-bd">';

  /* 1. Description */
  h+='<div class="dblk"><div class="dblk-h">Description</div>'+figureHTML(f.image,f.image_caption)+'<p>'+citeMarkup(f.description||'')+'</p></div>';

  /* 2. Action list */
  if(f.activities&&f.activities.length){
    h+='<div class="dblk"><div class="dblk-h">Action List</div><ul>';
    f.activities.forEach(function(a){h+='<li>'+E(a)+'</li>';});
    h+='</ul></div>';
  }

  /* 3. Deliverables */
  if(f.deliverables&&f.deliverables.length){
    h+='<div class="dblk"><div class="dblk-h">Deliverables &amp; Materials</div><ul>';
    f.deliverables.forEach(function(x){h+='<li class="del">'+E(x)+'</li>';});
    h+='</ul></div>';
  }

  /* 4. Entry/Exit criteria */
  h+='<div class="dblk"><div class="dblk-h">Entry &amp; Exit Criteria</div>';
  if(id==='P2')h+='<div class="yield-flag">Functional Yield \u2265 60%</div>';
  if(id==='P3')h+='<div class="yield-flag">Production Yield \u2265 80%</div>';
  if(f.parallel)h+='<div class="par-flag">Runs in parallel with the other two P1 streams</div>';
  if(f.entry_criteria)h+='<div class="crit-box crit-entry"><div class="crit-t">Entry Criteria</div>'+criteriaList(f.entry_criteria)+'</div>';
  if(f.exit_criteria)h+='<div class="crit-box crit-exit"><div class="crit-t">Exit / Acceptance</div>'+criteriaList(f.exit_criteria)+'</div>';
  h+='</div>';

  /* 5. IP know-how */
  h+='<div class="dblk"><div class="dblk-h">IP Know-how</div>';
  h+='<div class="tier-bar">';
  if(t1)h+='<span class="tchip tchip-t1">Must Transfer: '+t1+'</span>';
  if(t2)h+='<span class="tchip tchip-t2">Should: '+t2+'</span>';
  if(t3)h+='<span class="tchip tchip-t3">Optional: '+t3+'</span>';
  h+='<span class="note">(tiers fixed at P0)</span></div>';
  h+='<div class="ipmap-link" onclick="routeTo(\'page-ipmap\')">Xem th\u00EAm \u1EDF b\u1EA3n \u0111\u1ED3 ph\u00E2n b\u1ED1 IP \u2192</div>';
  h+=buildIPsByDomain(allIPs)+'</div>';

  /* 6. References */
  if(f.refs&&f.refs.length){
    h+='<div class="dblk"><div class="dblk-h">References</div><ul class="refs-list">';
    f.refs.forEach(function(r){h+='<li>'+E(r)+'</li>';});
    h+='</ul></div>';
  }
  h+='</div>';

  panel.innerHTML=h;panel.classList.add('show');
  setTimeout(function(){panel.scrollIntoView({behavior:'smooth',block:'nearest'});},30);
}
function closeTT(){var p=document.getElementById('tt-detail');p.classList.remove('show');p.innerHTML='';
  document.querySelectorAll('#tt-diagram .tt-block').forEach(function(b){b.classList.remove('on');});
  var e=document.getElementById('tt-empty');if(e)e.style.display='block';}

/* ============================================================
   FAB WORK FLOW
   ============================================================ */
function buildFabFlow(){
  /* external IP streams */
  var ed=document.getElementById('fw-ext-row');var eh='';
  EXTERNAL_IP_STREAMS.forEach(function(e){
    eh+='<div class="fw-ext-stream" onclick="showExt(\''+e.id+'\')">';
    eh+='<div class="fw-ext-lbl">External IP \u00B7 '+E(e.code)+'</div>';
    eh+='<div class="fw-ext-name">'+E(e.label)+'</div>';
    eh+='<div class="fw-ext-sub">'+E(e.subtitle)+'</div>';
    eh+='<div class="fw-ext-enter">enters at: '+e.enters_at.join(', ')+'</div></div>';
  });
  ed.innerHTML=eh;

  /* phase blocks */
  var d=document.getElementById('fw-diagram');var h='';
  FABFLOW.forEach(function(p,i){
    h+='<div class="fw-block" data-fw="'+p.id+'" onclick="showFW(\''+p.id+'\')">';
    h+='<div class="fw-block-code">'+E(p.id)+' \u00B7 '+E(p.code)+'</div>';
    h+='<div class="fw-block-name">'+E(p.label)+'</div>';
    h+='<div class="fw-block-sub">'+E(p.subtitle)+'</div>';
    h+='<div class="fw-block-meta"><span class="fw-meta-chip">'+p.output_ip_nos.length+' IPs</span>';
    h+='<span class="fw-meta-chip">'+p.engineer_groups.length+' groups</span>';
    h+='<span class="fw-meta-chip">'+p.key_activities.length+' actions</span></div></div>';
    if(i<FABFLOW.length-1)h+='<div class="fw-arrow">\u2192</div>';
  });
  d.innerHTML=h;

  /* DTCO loops */
  var dd=document.getElementById('fw-dtco-grid');var dh='';
  DTCO_LOOPS.forEach(function(loop){
    var fromP=FW_MAP[loop.from],toP=FW_MAP[loop.to];
    dh+='<div class="fw-dtco-card" onclick="showDTCO(\''+loop.id+'\')">';
    dh+='<div class="fw-dtco-card-id">'+E(loop.id.replace('_',' '))+'</div>';
    dh+='<div class="fw-dtco-card-lbl">'+E(loop.label)+'</div>';
    dh+='<div class="fw-dtco-card-route">'+E(fromP?fromP.short:loop.from)+'<span class="arrow">\u2192</span>'+E(toP?toP.short:loop.to)+'</div></div>';
  });
  dd.innerHTML=dh;
}

function showFW(id){
  var p=FW_MAP[id];if(!p)return;
  document.querySelectorAll('#fw-diagram .fw-block').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-fw')===id);});
  var panel=document.getElementById('fw-detail');
  var empty=document.getElementById('fw-empty');if(empty)empty.style.display='none';

  var h='<div class="detail-hd"><div class="dh-sup">Fab Work Flow \u00B7 '+E(id)+' \u00B7 '+E(p.code)+'</div>';
  h+='<div class="dh-title">'+E(p.label)+'</div>';
  h+='<div class="dh-sub">'+E(p.subtitle)+'</div>';
  h+='<div class="dh-meta">'+E(p.duration)+'</div>';
  h+='<button class="detail-close" onclick="closeFW()">\u2715</button></div>';
  h+='<div class="detail-bd">';

  /* Description */
  h+='<div class="dblk"><div class="dblk-h">Description</div>'+figureHTML(p.image,p.image_caption)+'<p>'+E(p.description)+'</p></div>';

  /* Activities */
  h+='<div class="dblk"><div class="dblk-h">Key Activities</div><ul>';
  p.key_activities.forEach(function(k){h+='<li>'+E(k)+'</li>';});
  h+='</ul></div>';

  /* Entry/Exit */
  h+='<div class="dblk"><div class="dblk-h">Entry &amp; Exit Criteria</div>';
  h+='<div class="crit-box crit-entry"><div class="crit-t">Entry</div>'+criteriaList(p.entry_criteria)+'</div>';
  h+='<div class="crit-box crit-exit"><div class="crit-t">Exit</div>'+criteriaList(p.exit_criteria)+'</div></div>';

  /* Output IPs grouped by domain */
  var byDom={};
  p.output_ip_nos.forEach(function(no){var ip=IPS_BY_NO[no];if(!ip)return;(byDom[ip.domain]=byDom[ip.domain]||[]).push(ip);});
  h+='<div class="dblk"><div class="dblk-h">Output IP Know-how ('+p.output_ip_nos.length+')</div>';
  h+='<div class="ipmap-link" onclick="routeTo(\'page-ipmap\')">Xem th\u00EAm \u1EDF b\u1EA3n \u0111\u1ED3 ph\u00E2n b\u1ED1 IP \u2192</div>';
  Object.keys(byDom).sort().forEach(function(dom){
    h+='<div class="fw-ipgrp"><div class="fw-ipgrp-hdr">'+E(dom)+' \u00B7 '+byDom[dom].length+'</div><div>';
    byDom[dom].sort(function(a,b){return a.no-b.no;}).forEach(function(ip){
      h+='<span class="fw-ipchip" onclick="openIP('+ip.no+')"><span class="no">#'+ip.no+'</span>'+E(ip.name.substring(0,30))+'</span>';
    });
    h+='</div></div>';
  });
  h+='</div>';

  /* Engineer groups */
  h+='<div class="dblk"><div class="dblk-h">Engineer Groups ('+p.engineer_groups.length+')</div>';
  p.engineer_groups.forEach(function(grp){
    h+='<div class="eg-card"><span class="eg-id">'+E(grp[0])+'</span><span class="eg-role">'+E(grp[1])+'</span></div>';
  });
  h+='</div>';

  /* References */
  if(p.refs&&p.refs.length){
    h+='<div class="dblk"><div class="dblk-h">References</div><ul class="refs-list">';
    p.refs.forEach(function(r){h+='<li>'+E(r)+'</li>';});
    h+='</ul>'+articleLinks(id)+'</div>';
  } else {
    h+='<div class="dblk"><div class="dblk-h">References</div>'+articleLinks(id)+'</div>';
  }
  h+='</div>';

  panel.innerHTML=h;panel.classList.add('show');
  setTimeout(function(){panel.scrollIntoView({behavior:'smooth',block:'nearest'});},30);
}
function closeFW(){var p=document.getElementById('fw-detail');p.classList.remove('show');p.innerHTML='';
  document.querySelectorAll('#fw-diagram .fw-block').forEach(function(b){b.classList.remove('on');});
  var e=document.getElementById('fw-empty');if(e)e.style.display='block';}

function showDTCO(id){
  var loop=null;DTCO_LOOPS.forEach(function(l){if(l.id===id)loop=l;});if(!loop)return;
  var fromP=FW_MAP[loop.from],toP=FW_MAP[loop.to];
  var panel=document.getElementById('fw-detail');
  var empty=document.getElementById('fw-empty');if(empty)empty.style.display='none';
  document.querySelectorAll('#fw-diagram .fw-block').forEach(function(b){b.classList.remove('on');});
  var h='<div class="detail-hd"><div class="dh-sup">DTCO Loop \u00B7 '+(fromP?fromP.code:loop.from)+' \u2192 '+(toP?toP.code:loop.to)+'</div>';
  h+='<div class="dh-title">'+E(loop.label)+'</div>';
  h+='<button class="detail-close" onclick="closeFW()">\u2715</button></div><div class="detail-bd">';
  h+='<div class="dblk"><p>'+E(loop.description)+'</p></div>';
  h+='<div class="dblk"><div class="dblk-h">Loop Parameters</div><ul>';
  h+='<li><strong>Trigger:</strong> '+E(loop.trigger)+'</li>';
  h+='<li><strong>Cycle time:</strong> '+E(loop.cycle_time)+'</li>';
  h+='<li><strong>From:</strong> '+E(fromP?fromP.label:loop.from)+' ('+loop.from+')</li>';
  h+='<li><strong>To:</strong> '+E(toP?toP.label:loop.to)+' ('+loop.to+')</li>';
  h+='</ul></div></div>';
  panel.innerHTML=h;panel.classList.add('show');
  setTimeout(function(){panel.scrollIntoView({behavior:'smooth',block:'nearest'});},30);
}

function showExt(id){
  var s=null;EXTERNAL_IP_STREAMS.forEach(function(x){if(x.id===id)s=x;});if(!s)return;
  var panel=document.getElementById('fw-detail');
  var empty=document.getElementById('fw-empty');if(empty)empty.style.display='none';
  document.querySelectorAll('#fw-diagram .fw-block').forEach(function(b){b.classList.remove('on');});
  var h='<div class="detail-hd"><div class="dh-sup">External IP Stream \u00B7 '+E(s.code)+'</div>';
  h+='<div class="dh-title">'+E(s.label)+'</div>';
  h+='<div class="dh-sub">'+E(s.subtitle)+'</div>';
  h+='<button class="detail-close" onclick="closeFW()">\u2715</button></div><div class="detail-bd">';
  h+='<div class="dblk"><p>'+E(s.description)+'</p></div>';
  h+='<div class="dblk"><div class="dblk-h">Enters Fab Work Flow at</div><div>';
  s.enters_at.forEach(function(fwId){var fw=FW_MAP[fwId];h+='<span class="fw-ipchip">'+E(fwId)+' '+E(fw?fw.code:'')+'</span>';});
  h+='</div></div>';
  h+='<div class="dblk"><div class="dblk-h">Example IPs in this stream</div><div>';
  s.ip_examples.forEach(function(ex){
    var m=ex.match(/\((?:no\.\s*)?(\d+)\)/);var no=m?parseInt(m[1]):null;
    var label=ex.replace(/\s*\((?:no\.\s*)?\d+\)/,'').trim();var ip=no?IPS_BY_NO[no]:null;
    if(ip)h+='<span class="fw-ipchip" onclick="openIP('+no+')"><span class="no">#'+no+'</span>'+E(ip.name)+'</span>';
    else h+='<span class="fw-ipchip" style="cursor:default">'+E(label)+'</span>';
  });
  h+='</div></div>';
  h+='<div class="dblk"><div class="dblk-h">Engineer groups involved</div><p>'+E(s.engineer_groups_involved.join(' \u00B7 '))+'</p></div>';
  h+='<div class="dblk"><p style="font-style:italic;color:var(--spa-mid)">\u2139 '+E(s.note)+'</p></div></div>';
  panel.innerHTML=h;panel.classList.add('show');
  setTimeout(function(){panel.scrollIntoView({behavior:'smooth',block:'nearest'});},30);
}

/* ============================================================
   ENGINEER MATRIX
   ============================================================ */
function buildToolbar(){
  var gf=document.getElementById('grp-filter');
  CONFIG.groups.forEach(function(g){var o=document.createElement('option');o.value=g.id;o.textContent=g.id+' \u2014 '+g.short;gf.appendChild(o);});
  var pf=document.getElementById('ph-filter');
  CONFIG.phases.forEach(function(p){var o=document.createElement('option');o.value=p.id;o.textContent=p.id+' \u2014 '+p.short.substring(0,26);pf.appendChild(o);});
  gf.addEventListener('change',renderMatrix);
  pf.addEventListener('change',renderMatrix);
}

function renderMatrix(){
  var gfv=document.getElementById('grp-filter').value;
  var pfv=document.getElementById('ph-filter').value;
  var vG=gfv==='all'?CONFIG.groups:CONFIG.groups.filter(function(g){return g.id===gfv;});
  var vP=pfv==='all'?CONFIG.phases:CONFIG.phases.filter(function(p){return p.id===pfv;});
  var html='<thead><tr><th class="corner-th">Engineer Group \u00D7 Phase</th>';
  vP.forEach(function(ph){
    html+='<th class="phase-th"><div class="ph-th-inner"><div class="ph-id-chip">'+ph.id+'</div>'
      +'<span class="ph-th-short">'+E(ph.short.length>26?ph.short.substring(0,24)+'\u2026':ph.short)+'</span></div></th>';
  });
  html+='</tr></thead><tbody>';
  vG.forEach(function(gr){
    html+='<tr><td class="group-td"><div class="grp-badge">'+gr.id+'</div>'
      +'<div class="grp-short">'+E(gr.short)+'</div><div class="grp-name">'+E(gr.name)+'</div></td>';
    vP.forEach(function(ph){
      var items=(RELEVANCE[gr.id]?RELEVANCE[gr.id][ph.id]:[])||[];
      var act=(ACTS[gr.id]&&ACTS[gr.id][ph.id])||{};
      if(!items.length){html+='<td class="act-td no-data-td"><div class="no-data-lbl">\u2014</div></td>';return;}
      var cnt={T1:0,T2:0,T3:0};
      items.forEach(function(ip){var t=ipTier(ip);if(cnt[t]!==undefined)cnt[t]++;});
      var pills=(cnt.T1?'<span class="pill pill-t1">T1:'+cnt.T1+'</span>':'')
               +(cnt.T2?'<span class="pill pill-t2">T2:'+cnt.T2+'</span>':'')
               +(cnt.T3?'<span class="pill pill-t3">T3:'+cnt.T3+'</span>':'');
      html+='<td class="act-td" data-ph="'+ph.id+'" data-gr="'+gr.id+'" onclick="showCell(this.dataset.ph,this.dataset.gr)">'
        +'<div class="act-title">'+E((act&&act.title)||'\u2014')+'</div><div class="pills">'+pills+'</div></td>';
    });
    html+='</tr>';
  });
  html+='</tbody>';
  document.getElementById('matrix-tbl').innerHTML=html;
}

function showCell(phId,grId){
  var ph=PHASES[phId],gr=GROUPS[grId];
  var act=(ACTS[gr.id]&&ACTS[gr.id][ph.id])||{};
  var items=(RELEVANCE[grId]&&RELEVANCE[grId][phId])||[];
  document.querySelectorAll('#matrix-tbl .act-td').forEach(function(c){
    c.classList.toggle('on',c.dataset.ph===phId&&c.dataset.gr===grId);});
  var panel=document.getElementById('ew-detail');
  var empty=document.getElementById('ew-empty');if(empty)empty.style.display='none';

  var srcMap={};
  if(CONFIG.meta&&CONFIG.meta.sources)CONFIG.meta.sources.forEach(function(s){srcMap[s.id]=s.cite;});
  var srcRefs=(act.src||'').split(',').map(function(s){return s.trim();}).filter(Boolean)
    .map(function(sid,i){return '<li><b>['+(i+1)+'] '+E(sid)+'</b> '+E(srcMap[sid]||sid)+'</li>';}).join('');
  var cnt={T1:0,T2:0,T3:0};
  items.forEach(function(ip){var t=ipTier(ip);if(cnt[t]!==undefined)cnt[t]++;});
  var ipB=(cnt.T1?'<span class="pill pill-t1">Must: '+cnt.T1+'</span>':'')
         +(cnt.T2?'<span class="pill pill-t2">Should: '+cnt.T2+'</span>':'')
         +(cnt.T3?'<span class="pill pill-t3">Optional: '+cnt.T3+'</span>':'');
  var sorted=items.slice().sort(function(a,b){return a.domain.localeCompare(b.domain)||a.name.localeCompare(b.name);});
  var desc='<p>'+E(act.description||'')+'</p>';
  if(act.key_tasks&&act.key_tasks.length)desc+='<ul>'+act.key_tasks.map(function(t){return '<li>'+E(t)+'</li>';}).join('')+'</ul>';
  if(srcRefs)desc+='<div class="src-box"><div class="src-box-title">References</div><ul class="ref-list">'+srcRefs+'</ul></div>';

  var h='<div class="detail-hd"><div class="dh-sup">'+E(gr.id+' \u2014 '+gr.name+' \u00B7 '+ph.id+': '+ph.short)+'</div>';
  h+='<div class="dh-title">'+E(act.title||'\u2014')+'</div>';
  h+='<button class="detail-close" onclick="closeCell()">\u2715</button></div><div class="detail-bd">';
  h+='<div class="acc-sec open" id="acc-1"><div class="acc-hdr" onclick="document.getElementById(\'acc-1\').classList.toggle(\'open\')">'
    +'<span class="acc-label">Description &amp; Key Tasks</span><span class="acc-chev"></span></div>'
    +'<div class="acc-body">'+desc+'</div></div>';
  h+='<div class="acc-sec" id="acc-2"><div class="acc-hdr" onclick="document.getElementById(\'acc-2\').classList.toggle(\'open\')">'
    +'<span class="acc-label">IP Know-how by Domain</span><div class="pills" style="margin-left:auto">'+ipB+'</div><span class="acc-chev"></span></div>'
    +'<div class="acc-body"><div class="ipmap-link" onclick="routeTo(\'page-ipmap\')">Xem th\u00EAm \u1EDF b\u1EA3n \u0111\u1ED3 ph\u00E2n b\u1ED1 IP \u2192</div>'+buildIPsByDomain(sorted)+'</div></div>';
  h+='</div>';
  panel.innerHTML=h;panel.classList.add('show');
  setTimeout(function(){panel.scrollIntoView({behavior:'smooth',block:'nearest'});},30);
}
function closeCell(){var p=document.getElementById('ew-detail');p.classList.remove('show');p.innerHTML='';
  document.querySelectorAll('#matrix-tbl .act-td').forEach(function(c){c.classList.remove('on');});
  var e=document.getElementById('ew-empty');if(e)e.style.display='block';}

/* ============================================================
   IP DISTRIBUTION MAP
   ============================================================ */
function buildIPMap(){
  var byDom={};
  IPS_DATA.forEach(function(ip){(byDom[ip.domain]=byDom[ip.domain]||[]).push(ip);});
  var html='';
  LAYERS.forEach(function(layer){
    html+='<div class="ipm-layer"><div class="ipm-layer-hdr">'
      +'<span class="ipm-layer-label">'+E(layer.label)+'</span>'
      +'<span class="ipm-layer-sub">'+E(layer.sub)+'</span></div><div class="ipm-cards-row">';
    layer.domains.forEach(function(dom){
      var dIPs=byDom[dom]||[];var samples=dIPs.slice(0,4);var rest=dIPs.length-4;
      var subs={};dIPs.forEach(function(ip){subs[ip.sub]=1;});
      html+='<div class="ipm-card" onclick="showDomainDetail(\''+dom+'\')">';
      html+='<div class="ipm-card-hdr">';
      html+='<div><div class="ipm-card-name">'+E(DOM_LABEL[dom]||dom)+'</div>';
      html+='<div class="ipm-card-sub">'+E(DOM_SUB[dom]||'')+'</div></div></div>';
      html+='<div class="ipm-card-body"><div class="ipm-card-cnt">'+dIPs.length+' IP items \u00B7 '+Object.keys(subs).length+' sub-groups</div>';
      html+='<div class="ipm-chip-row">';
      samples.forEach(function(ip){html+='<span class="ipm-chip" title="'+E(ip.name)+'">'+E(ip.name.substring(0,20)+(ip.name.length>20?'\u2026':''))+'</span>';});
      if(rest>0)html+='<span class="ipm-chip-more">+'+rest+'</span>';
      html+='</div></div></div>';
    });
    html+='</div></div>';
  });
  html+='<div id="ipm-detail" class="ipm-detail"></div>';
  html+='<div id="ipd-panel" class="ipd-panel"></div>';
  document.getElementById('ipm-main').innerHTML=html;
}

function showDomainDetail(dom){
  var dIPs=IPS_DATA.filter(function(ip){return ip.domain===dom;});
  var det=document.getElementById('ipm-detail');if(!det)return;
  var html='<div class="ipm-detail-hdr"><div class="ipm-detail-title">'+E(DOM_LABEL[dom]||dom)
    +' <span style="font-size:10px;font-weight:400;opacity:.7">'+dIPs.length+' IP items</span></div>';
  html+='<button class="ipm-detail-close" onclick="closeDomainDetail()">\u2715</button></div><div class="ipm-detail-grid">';
  dIPs.forEach(function(ip){
    var tier=ipTier(ip);
    html+='<div class="ipm-detail-card" onclick="openIP('+ip.no+')">';
    html+='<div class="ipm-detail-name">'+E(ip.name)+'</div>';
    html+='<div class="ipm-detail-def">'+E((ip.definition||'').substring(0,90))+'</div>';
    html+='<span class="ipm-detail-tier" style="background:'+tBg(tier)+';color:'+tFg(tier)+'">'+tier+' \u2014 '+tLbl(tier)+'</span></div>';
  });
  html+='</div>';
  det.innerHTML=html;det.classList.add('open');
  document.querySelectorAll('.ipm-card').forEach(function(c){c.style.outline='none';});
  setTimeout(function(){det.scrollIntoView({behavior:'smooth',block:'nearest'});},30);
}
function closeDomainDetail(){var d=document.getElementById('ipm-detail');if(d){d.classList.remove('open');d.innerHTML='';}}

/* IP full detail — inline below map */
function openIP(no){
  var ip=IPS_BY_NO[no];if(!ip)return;
  var tier=ipTier(ip);
  var panel=document.getElementById('ipd-panel');
  if(!panel){ // when opened from TT/FW/cell pages where the IP panel lives in ipmap
    routeTo('page-ipmap');
    panel=document.getElementById('ipd-panel');
    if(!panel)return;
  }
  var fields=[{label:'Definition',val:ip.definition},{label:'Purpose',val:ip.purpose},
    {label:'Components & Characteristics',val:ip.chars},{label:'Deliverable / Transfer Form',val:ip.delivery},
    {label:'Comment & Notes',val:ip.comment}];
  var fwIds=IP_TO_FW[String(no)]||[];
  var fwChips='';
  if(fwIds.length){
    fwChips='<div class="ip-fw-link"><span class="ip-fw-link-lbl">Produced in Fab Work Flow:</span>';
    fwIds.forEach(function(fwId){var fw=FW_MAP[fwId];if(!fw)return;
      fwChips+='<span class="ip-fw-link-chip" onclick="routeTo(\'page-fabflow\');showFW(\''+fwId+'\')">'+E(fwId)+' \u00B7 '+E(fw.short)+'</span>';});
    fwChips+='</div>';
  }
  var h='<div class="ipd-hd"><div class="ipd-dom">'+E(ip.domain+' \u00B7 '+ip.sub)+'</div>';
  h+='<div class="ipd-name">'+E(ip.name)+'</div>';
  h+='<button class="ipd-close" onclick="closeIP()">\u2715</button></div><div class="ipd-bd">';
  h+='<div class="tier-bar"><span class="tchip '+tCC(tier)+'">'+tier+' \u2014 '+tLbl(tier)+'</span>'
    +'<span class="note">(Tier fixed at P0 contract)</span></div>'+fwChips;
  fields.forEach(function(f){
    h+='<div class="ip-field"><span class="ip-field-lbl">'+E(f.label)+'</span>'
      +'<div class="ip-field-val'+(f.val?'':' empty')+'">'+E(f.val||'No content available')+'</div></div>';
  });
  h+='</div>';
  panel.innerHTML=h;panel.classList.add('show');
  setTimeout(function(){panel.scrollIntoView({behavior:'smooth',block:'start'});},40);
}
function closeIP(){var p=document.getElementById('ipd-panel');if(p){p.classList.remove('show');p.innerHTML='';}}

/* ============================================================
   SPA ROUTER
   ============================================================ */
function routeTo(pid){
  var ps=Array.from(document.querySelectorAll('.hb-page'));
  if(!ps.some(function(p){return p.id===pid;}))pid='page-home';
  ps.forEach(function(p){p.classList.toggle('active',p.id===pid);});
  document.querySelectorAll('.sb-link').forEach(function(l){l.classList.toggle('on',l.getAttribute('data-page')===pid);});
  /* breadcrumb */
  var titles={};ps.forEach(function(p){titles[p.id]=p.getAttribute('data-title')||p.id;});
  var crumb=document.getElementById('spa-crumb');if(crumb)crumb.innerHTML='<strong>'+E(titles[pid]||'')+'</strong>';
  /* expand matching submenu */
  [['sb-flow-link','sb-flow-sub','page-flow'],['sb-fw-link','sb-fw-sub','page-fabflow']].forEach(function(s){
    var lk=document.getElementById(s[0]),sb=document.getElementById(s[1]);
    if(lk&&sb){var on=(pid===s[2]);lk.classList.toggle('exp',on);sb.classList.toggle('open',on);}
  });
  history.replaceState(null,'','#'+pid);
  window.scrollTo(0,0);if(document.documentElement)document.documentElement.scrollTop=0;
  if(window.innerWidth<=880)document.getElementById('spa-sidebar').classList.remove('open');
}

function route(){
  var h=(location.hash||'').replace(/^#/,'');
  routeTo(h||'page-home');
}

document.addEventListener('DOMContentLoaded',function(){
  buildTTFlow();buildFabFlow();buildToolbar();renderMatrix();buildIPMap();

  /* nav clicks */
  document.addEventListener('click',function(e){
    var pl=e.target.closest('[data-page]');
    if(pl){e.preventDefault();var pid=pl.getAttribute('data-page');routeTo(pid);
      if(pid==='page-flow'&&!document.querySelector('#tt-detail.show'))showTT('P0');
      if(pid==='page-fabflow'&&!document.querySelector('#fw-detail.show'))showFW('FW1');
      return;}
    var tt=e.target.closest('[data-tt]');
    if(tt&&tt.classList.contains('sub-link-tt')){e.preventDefault();routeTo('page-flow');showTT(tt.getAttribute('data-tt'));return;}
    var fw=e.target.closest('[data-fw-nav]');
    if(fw){e.preventDefault();routeTo('page-fabflow');showFW(fw.getAttribute('data-fw-nav'));return;}
    if(e.target.closest('#spa-burger')){document.getElementById('spa-sidebar').classList.toggle('open');return;}
  },false);

  window.addEventListener('hashchange',route);
  route();
});
