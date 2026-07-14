var MASTERED_KEY = 'toeic_part5_mastered';

var deck = CARDS.map(function(_, i) { return i; });
var cur = 0;
var mastered = loadMastered();
var masteredCount = Object.keys(mastered).length;
var filterMode = false;
var openSections = {};

function loadMastered() {
  try {
    return JSON.parse(localStorage.getItem(MASTERED_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveMastered() {
  localStorage.setItem(MASTERED_KEY, JSON.stringify(mastered));
}

function getActiveDeck() {
  if (!filterMode) return deck;
  return deck.filter(function(i) { return !mastered[i]; });
}

function render() {
  var ad = getActiveDeck();
  if (ad.length === 0) {
    document.getElementById('card').innerHTML = '<div style="text-align:center;padding:40px;color:#6b7280;font-size:14px;">모두 외웠습니다!<br><br>초기화 후 다시 복습하세요.</div>';
    document.getElementById('counter').textContent = '완료';
    document.getElementById('prevBtn').disabled = true;
    document.getElementById('nextBtn').disabled = true;
    return;
  }
  if (cur >= ad.length) cur = ad.length - 1;
  var idx = ad[cur];
  var d = CARDS[idx];

  document.getElementById('counter').textContent = (cur + 1) + ' / ' + ad.length;
  document.getElementById('pFill').style.width = (((cur + 1) / ad.length) * 100) + '%';

  var badge = document.getElementById('badge');
  badge.textContent = d.theme;
  badge.style.background = d.tc;

  document.getElementById('topicLbl').textContent = d.topic;
  document.getElementById('qText').textContent = d.q;
  document.getElementById('qkoText').textContent = d.qko;
  document.getElementById('ansText').textContent = d.ans;
  document.getElementById('ansKoText').textContent = d.ansko;

  var hc = '';
  for (var i = 0; i < d.hints.length; i++) {
    var htext = d.hints[i].replace(/^이유\d+\(?\S*\)?[:：]\s*/, '');
    hc += '<div class="hint-step"><span class="hint-num">이유' + (i + 1) + '</span><span>' + htext + '</span></div>';
  }
  document.getElementById('hintContent').innerHTML = hc;

  var sc = '';
  for (var j = 0; j < d.sim.length; j++) {
    sc += '<div class="sim-item">' + d.sim[j] + '</div>';
  }
  document.getElementById('simContent').innerHTML = sc;

  var isMastered = !!mastered[idx];
  document.getElementById('card').className = 'card' + (isMastered ? ' mastered' : '');
  document.getElementById('bMaster').className = 'btn' + (isMastered ? ' green' : '');
  document.getElementById('bMaster').textContent = isMastered ? '완료됨' : '외웠어요';
  document.getElementById('mCheck').className = 'master-check' + (isMastered ? ' vis' : '');

  var key = 's' + idx;
  var open = openSections[key] || {};
  var secMap = { qko: 'bKoQ', hint: 'bHint', ans: 'bAns', ansko: 'bKoA', sim: 'bSim' };
  var secs = ['qko', 'hint', 'ans', 'ansko', 'sim'];
  for (var k = 0; k < secs.length; k++) {
    var sec = secs[k];
    var el = document.getElementById('s' + sec);
    var btn = document.getElementById(secMap[sec]);
    if (open[sec]) {
      el.classList.add('vis');
      btn.classList.add('on');
    } else {
      el.classList.remove('vis');
      btn.classList.remove('on');
    }
  }

  document.getElementById('prevBtn').disabled = (cur === 0);
  document.getElementById('nextBtn').disabled = (cur === ad.length - 1);
  updateStats();
}

function tog(sec, btnId) {
  var ad = getActiveDeck();
  if (ad.length === 0) return;
  var idx = ad[cur];
  var key = 's' + idx;
  if (!openSections[key]) openSections[key] = {};
  var el = document.getElementById('s' + sec);
  var btn = document.getElementById(btnId);
  var isOpen = el.classList.contains('vis');
  el.classList.toggle('vis', !isOpen);
  btn.classList.toggle('on', !isOpen);
  openSections[key][sec] = !isOpen;
}

function nav(dir) {
  var ad = getActiveDeck();
  cur = Math.max(0, Math.min(ad.length - 1, cur + dir));
  render();
}

function toggleMaster() {
  var ad = getActiveDeck();
  if (ad.length === 0) return;
  var idx = ad[cur];
  if (mastered[idx]) {
    delete mastered[idx];
    masteredCount--;
  } else {
    mastered[idx] = true;
    masteredCount++;
  }
  saveMastered();
  render();
}

function toggleFilter() {
  filterMode = !filterMode;
  cur = 0;
  document.getElementById('filterBtn').className = 'btn' + (filterMode ? ' on' : '');
  render();
}

function shuffleCards() {
  for (var i = deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = deck[i];
    deck[i] = deck[j];
    deck[j] = tmp;
  }
  cur = 0;
  render();
}

function resetAll() {
  mastered = {};
  masteredCount = 0;
  saveMastered();
  openSections = {};
  deck = CARDS.map(function(_, i) { return i; });
  cur = 0;
  filterMode = false;
  document.getElementById('filterBtn').className = 'btn';
  render();
}

function updateStats() {
  var total = CARDS.length;
  var m = masteredCount;
  document.getElementById('sStat').textContent = '전체 ' + total;
  document.getElementById('mStat').textContent = '외운 것 ' + m;
  document.getElementById('rStat').textContent = '남은 것 ' + (total - m);
}

function topicChips(topicNums) {
  return topicNums.map(function(n) {
    var c = CARDS[n - 1];
    var bg = c ? c.tc : '#9ca3af';
    var title = c ? c.topic : ('주제 ' + n);
    return '<span class="topic-chip" style="background:' + bg + '" title="' + title + '">' + n + '</span>';
  }).join('');
}

function renderChainList() {
  var html = '';
  CARDS.forEach(function(d, i) {
    html += '<div class="chain-card" style="border-left-color:' + d.tc + '">';
    html += '<div class="chain-topic">' + d.topic + '</div>';
    d.hints.forEach(function(h) {
      html += '<div class="chain-step">' + h + '</div>';
    });
    html += '</div>';
  });
  document.getElementById('chainList').innerHTML = html;
}

function renderStoryList() {
  var html = '';
  STORIES.forEach(function(s) {
    html += '<div class="story-card">';
    html += '<div class="story-title">' + s.title + '</div>';
    html += '<div class="story-ko">' + s.ko + '</div>';
    html += '<div class="badge-row">' + topicChips(s.topics) + '</div>';
    html += '</div>';
  });
  document.getElementById('storyList').innerHTML = html;
}

function renderPatternList() {
  var html = '';
  PATTERNS.forEach(function(p) {
    html += '<div class="pattern-card">';
    html += '<div class="pattern-group">' + p.group + '</div>';
    html += '<div class="pattern-en">' + p.en + '</div>';
    html += '<div class="pattern-ko">' + p.ko + '</div>';
    html += '<div class="badge-row">' + topicChips(p.topics) + '</div>';
    html += '</div>';
  });
  document.getElementById('patternList').innerHTML = html;
}

var TABS = ['card', 'chain', 'story', 'pattern'];
function switchTab(name) {
  TABS.forEach(function(t) {
    document.getElementById('tabPanel-' + t).classList.toggle('hidden', t !== name);
    document.getElementById('tabBtn-' + t).classList.toggle('on', t === name);
  });
}

document.addEventListener('keydown', function(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowLeft') nav(-1);
  else if (e.key === 'ArrowRight') nav(1);
  else if (e.key === ' ') { e.preventDefault(); tog('ans', 'bAns'); }
  else if (e.key === 'h' || e.key === 'H') tog('hint', 'bHint');
  else if (e.key === 't' || e.key === 'T') tog('ansko', 'bKoA');
  else if (e.key === 'q' || e.key === 'Q') tog('qko', 'bKoQ');
  else if (e.key === 'm' || e.key === 'M') toggleMaster();
});

render();
renderChainList();
renderStoryList();
renderPatternList();
