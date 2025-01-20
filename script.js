// Page Navigation
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show selected page
  document.getElementById(pageId).classList.add('active');
}

// Blessing Data
const blessings = [
  "「願您的生活如詩如畫，每個清晨都能迎來新的希望，每個夜晚都能帶著滿足入眠。」",
  "「願您的所有努力都能開花結果，所有的夢想都能成真。」",
  "「願您健康快樂，如繁星般點亮您的每一個夜晚，所有的期待都能如願。」",
  "「願您擁有無盡的勇氣與智慧，面對生活中的每一個挑戰，都能迎來屬於自己的彩虹與陽光。」",
  "「願您的每一天都充滿愛與溫暖，每一個夢想都能在努力中實現，所有的美好都如約而至。」",
  "「願您的每個選擇都能帶來無悔的回憶，每段旅程都能充滿意義與收穫。」",
  "「願您的笑容如陽光般燦爛，心靈如星空般深邃，所有的美好都圍繞在您身邊。」",
  "「願您的心靈如大海般寬廣，容納所有的喜怒哀樂；腳步如微風般輕盈，走遍世界的每一個角落，找到屬於自己的幸福與平靜。」"
];

// Color alternation
const colors = ['#00008B', '#800080', '#FF1493', '#8B4513'];
let colorIndex = 0;

// Generate Blessing
document.getElementById('generate-btn').addEventListener('click', () => {
  const blessingBox = document.getElementById('blessing-box');
  
  // Clear previous content
  blessingBox.innerHTML = '';
  
  // Add click animation
  animateButton();
  
  // Get random blessing and format it
  let blessing = blessings[Math.floor(Math.random() * blessings.length)];
  // Remove「」marks and add line breaks after commas
  blessing = blessing.replace(/「|」/g, '')
                    .replace(/，/g, '，\n')
                    .replace(/。/g, '。\n');
  
  // Create blessing text element
  const blessingText = document.createElement('div');
  blessingText.className = 'blessing-text';
  blessingText.style.fontSize = '3vw';
  blessingText.style.fontFamily = 'DFKai-SB, serif';
  blessingText.style.display = 'flex';
  blessingText.style.alignItems = 'center';
  blessingText.style.justifyContent = 'center';
  blessingText.style.height = '100%';
  blessingText.style.margin = '40px 0';
  blessingText.style.padding = '30px';
  blessingText.style.lineHeight = '1.8';
  blessingText.textContent = blessing;
  
  // Create blessing element
  const p = document.createElement('p');
  p.classList.add('blessing-text');
  p.style.color = colors[colorIndex];
  p.textContent = blessing.trim();
  
  // Update color index
  colorIndex = (colorIndex + 1) % colors.length;
  
  // Add to box and show
  blessingBox.appendChild(p);
  blessingBox.style.opacity = '1';
});

// Button Click Animation
function animateButton() {
  const btn = document.getElementById('generate-btn');
  btn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    btn.style.transform = 'scale(1)';
  }, 100);
}

// Initialize first page
showPage('home');
