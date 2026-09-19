(function(){
  var yr = document.getElementById('yr');
  if(yr) yr.textContent = new Date().getFullYear();
})();

// mobile nav toggle
(function(){
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');
  if(!toggle || !menu) return;
  function close(){
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', function(){
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', close);
  });
  window.addEventListener('resize', function(){
    if(window.innerWidth > 860) close();
  });
})();

// scroll-reveal: fade/rise sections and cards into view, staggered per group
(function(){
  var items = document.querySelectorAll('.reveal-up');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce || !('IntersectionObserver' in window)){
    items.forEach(function(el){ el.classList.add('is-visible'); });
    return;
  }
  var parentCounts = new Map();
  items.forEach(function(el){
    var parent = el.parentElement;
    var i = parentCounts.get(parent) || 0;
    el.style.transitionDelay = Math.min(i, 6) * 70 + 'ms';
    parentCounts.set(parent, i + 1);
  });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  items.forEach(function(el){ io.observe(el); });
})();

// subtle ambient hook animation behind hero headline (no-ops if #hookCanvas is absent)
(function(){
  var canvas = document.getElementById('hookCanvas');
  if(!canvas) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ctx = canvas.getContext('2d');
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var w, h, particles = [];
  function size(){
    var rect = canvas.parentElement.getBoundingClientRect();
    w = canvas.width = rect.width * dpr;
    h = canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
  }
  function init(){
    particles = [];
    var count = Math.min(36, Math.floor((w*h) / (26000 * dpr * dpr)));
    for(var i=0;i<count;i++){
      particles.push({
        x: Math.random()*w, y: Math.random()*h,
        r: (Math.random()*1.6+0.6) * dpr,
        vx: (Math.random()-0.5)*0.18*dpr, vy: (Math.random()-0.5)*0.18*dpr,
        c: Math.random() > 0.6 ? '#F2A93B' : '#FF4B5C'
      });
    }
  }
  function tick(){
    ctx.clearRect(0,0,w,h);
    for(var i=0;i<particles.length;i++){
      var p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0 || p.x > w) p.vx *= -1;
      if(p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = p.c;
      ctx.globalAlpha = 0.5;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if(!reduce) requestAnimationFrame(tick);
  }
  size(); init();
  window.addEventListener('resize', function(){ size(); init(); });
  if(!reduce){ requestAnimationFrame(tick); } else { tick(); }
})();
