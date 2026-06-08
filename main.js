function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

function toggleExp(card) {
  const detail = card.querySelector('.exp-detail');
  const isOpen = detail.classList.contains('open');
  document.querySelectorAll('.exp-detail').forEach(d => d.classList.remove('open'));
  if (!isOpen) detail.classList.add('open');
}

function filterExp(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.exp-item').forEach(item => {
    const cats = item.dataset.cats || '';
    item.classList.toggle('dimmed', cat !== 'all' && !cats.includes(cat));
  });
}

function triggerReveals() {
  document.querySelectorAll('.reveal:not(.visible)').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 70);
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function submitForm() {
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const msg = document.getElementById('cf-msg').value.trim();
  if (!name || !email || !msg) { alert('Please fill in your name, email, and message.'); return; }
  document.getElementById('form-success').style.display = 'block';
  ['cf-name', 'cf-email', 'cf-org', 'cf-msg'].forEach(id => document.getElementById(id).value = '');
}

document.addEventListener('DOMContentLoaded', () => setTimeout(triggerReveals, 300));
