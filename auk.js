// === ВАРВАРЫ: АВТОПОКУПКА v37 === 
// Автор: Андрей Кузьмин 
// Telegram: @ваш_ник | Почта: example@domain.com 
// GitHub: github.com/ваш_репозиторий 
// 7 модулей: ящики, свитки, камни, книги, руны, огранки, рецепты
opera.addEventListener("BeforeScript", function(e) {
	// автор мода kraken bt.
	// это не панацея, но в некоторых моментах может быть полезным.
	// обработка ошибок, длитильных загрузок, краш скриптов итд...
	// нужные ошибки можете добавить самостоятельно, выбрав нужную логику...
	// адаптирован под a1 bot, barbars.ru_script, GrabbyBOTv12, kraken  bot.
	// установка: убрать из папки с скриптом все файлы анти чего-то там , всяко разные ускорители итд. оставить только файлы настройки скрипта и сам скрипт, добавить этот фаил в папку с скриптом.

	//=== в настройке не нуждается ===//
	! function() {
		for(var e = document.getElementsByTagName("*"), i = e.length - 1; - 1 < i; i--) {
			var t, n = e[i].tagName;
			"TITLE" != n && "STYLE" != n && "META" != n && "LINK" != n && "HEAD" != n && "INPUT" != n && (t = getComputedStyle(e[i]), n = e[i].style, ("none" == t.display || 0 == t.opacity && "" != t.opacity || "hidden" == t.visibility || "none" == n.display || 0 == n.opacity && "" != n.opacity || "hidden" == n.visibility) && e[i].parentNode.removeChild(e[i]))
		}
	}()
	if(localStorage.on_off == "on") {
		reloadId60 = setInterval(function() {
			location.reload();
		}, 600000);
	} else if(localStorage.on_off == "off") {

		}
	window.addEventListener('load', function() {
		var div = document.getElementsByTagName('div');
		var a = document.getElementsByTagName('a');
		var span = document.getElementsByTagName('span');
		var img = document.getElementsByTagName('img');
		var title_ = document.getElementsByTagName('title')[0];
		if(localStorage.on_off == "on" && /barbars|варвары|95.217.53.180|spaces|odnoklassniki/.test(location.host) || div[0] == undefined || a[0] == undefined || span[0] == undefined || document.getElementsByTagName('title')[0] == undefined || img[0] == undefined || document.body == undefined) {
			setInterval(function() {
				location.reload();
			}, 600000);
		}
		if(title_) {
			const title = title_.textContent;
			if(title.match("502 Bad Gateway|500 Internal Server Error|404 Not Found|504 Gateway Time-out")) {
				setTimeout(function() {
					history.go(-1);
				}, 200);
			} else if(title.match("Не удаётся получить доступ к сайту|Нет подключения к Интернету|Проблема сети|Соединение прервано")) {
				setTimeout(function() {
					location.reload();
				}, 1000);
			} else if(title.match("Не удаётся завершить защищённую транзакцию|Apache Tomcat|HTTP Status 500")) {
				setTimeout(function() {
					location.href = '/';
				}, 1000);
			}
		}
	});
}, !0);
var apRunning = false;
var apTimer = null;
var apDelay = 2000;
var apPhase = 0;
var apMinSilver = 50;

// Ящики
var apBoxBuyEnabled = false;
var apBoxRefreshMin = 1, apBoxRefreshMax = 2;
var apQMythicMin = 0, apQMythicMax = 0;
var apQLegendaryMin = 0, apQLegendaryMax = 0;
var apQEpicMin = 0, apQEpicMax = 0;
var apQRareMin = 0, apQRareMax = 0;
var apQGreenMin = 0, apQGreenMax = 0;

// Именованные модули: свитки(t/2), камни(t/1), книги(t/6), руны(t/4), огранки(t/8), рецепты(t/9)
var apScrollEnabled = false, apScrollRefreshMin = 1, apScrollRefreshMax = 2;
var apStoneEnabled = false, apStoneRefreshMin = 1, apStoneRefreshMax = 2;
var apBookEnabled = false, apBookRefreshMin = 1, apBookRefreshMax = 2;
var apRuneEnabled = false, apRuneRefreshMin = 1, apRuneRefreshMax = 2;
var apFacetEnabled = false, apFacetRefreshMin = 1, apFacetRefreshMax = 2;
var apRecipeEnabled = false, apRecipeRefreshMin = 1, apRecipeRefreshMax = 2;

var apScrolls = [], apStones = [], apBooks = [], apRunes = [], apFacets = [], apRecipes = [];

var apBoxQualityMask = 0;
var apScrollQualityMask = 0;
var apStoneQualityMask = 0;

var apCurrentEl = null;
var apCurrentModule = '';
var apPurchases = [];
  apStatsDisplayCount = 10;
var apStatsDisplayCount = 10;

// === LOCAL STORAGE ===
function apSetCookie(name, value) {
  try { localStorage.setItem('ap_' + name, value); } catch(e) {}
}
function apGetCookie(name) {
  try { var v = localStorage.getItem('ap_' + name); return v === null ? '' : v; } catch(e) { return ''; }
}
function apClearAllData() {
  try {
    var keys = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf('ap_') === 0) keys.push(k);
    }
    for (var j = 0; j < keys.length; j++) localStorage.removeItem(keys[j]);
  } catch(e) {}
  apRunning = false;
  apPhase = 0;
  apCurrentModule = '';
  apBoxQualityMask = 0; apScrollQualityMask = 0; apStoneQualityMask = 0;
  apPurchases = [];
  apStatsDisplayCount = 10;
  apScrolls = []; apStones = []; apBooks = []; apRunes = []; apFacets = []; apRecipes = [];
  apBoxBuyEnabled = false;
  apScrollEnabled = false; apStoneEnabled = false;
  apBookEnabled = false; apRuneEnabled = false; apFacetEnabled = false; apRecipeEnabled = false;
  apDelay = 2000; apMinSilver = 50;
  apBoxRefreshMin = 1; apBoxRefreshMax = 2;
  apScrollRefreshMin = 1; apScrollRefreshMax = 2;
  apStoneRefreshMin = 1; apStoneRefreshMax = 2;
  apBookRefreshMin = 1; apBookRefreshMax = 2;
  apRuneRefreshMin = 1; apRuneRefreshMax = 2;
  apFacetRefreshMin = 1; apFacetRefreshMax = 2;
  apRecipeRefreshMin = 1; apRecipeRefreshMax = 2;
  apQMythicMin = 0; apQMythicMax = 0;
  apQLegendaryMin = 0; apQLegendaryMax = 0;
  apQEpicMin = 0; apQEpicMax = 0;
  apQRareMin = 0; apQRareMax = 0;
  apQGreenMin = 0; apQGreenMax = 0;
  if (apTimer) { clearTimeout(apTimer); apTimer = null; }
  apUnhighlight();
  apCreateUI();
  apUpdateBtn();
}

function apSave() {
  apSetCookie('apRunning', apRunning ? '1' : '0');
  apSetCookie('apDelay', '' + apDelay);
  apSetCookie('apPhase', '' + apPhase);
  apSetCookie('apBoxQualityMask', '' + apBoxQualityMask);
  apSetCookie('apScrollQualityMask', '' + apScrollQualityMask);
  apSetCookie('apStoneQualityMask', '' + apStoneQualityMask);
  apSetCookie('apCurrentModule', apCurrentModule || '');
  apSetCookie('apMinSilver', '' + apMinSilver);
  apSetCookie('apBoxBuyEnabled', apBoxBuyEnabled ? '1' : '0');
  apSetCookie('apBoxRefreshMin', '' + apBoxRefreshMin);
  apSetCookie('apBoxRefreshMax', '' + apBoxRefreshMax);
  apSetCookie('apQMythicMin', '' + apQMythicMin); apSetCookie('apQMythicMax', '' + apQMythicMax);
  apSetCookie('apQLegendaryMin', '' + apQLegendaryMin); apSetCookie('apQLegendaryMax', '' + apQLegendaryMax);
  apSetCookie('apQEpicMin', '' + apQEpicMin); apSetCookie('apQEpicMax', '' + apQEpicMax);
  apSetCookie('apQRareMin', '' + apQRareMin); apSetCookie('apQRareMax', '' + apQRareMax);
  apSetCookie('apQGreenMin', '' + apQGreenMin); apSetCookie('apQGreenMax', '' + apQGreenMax);
  apSetCookie('apScrollEnabled', apScrollEnabled ? '1' : '0');
  apSetCookie('apScrollRefreshMin', '' + apScrollRefreshMin); apSetCookie('apScrollRefreshMax', '' + apScrollRefreshMax);
  apSetCookie('apStoneEnabled', apStoneEnabled ? '1' : '0');
  apSetCookie('apStoneRefreshMin', '' + apStoneRefreshMin); apSetCookie('apStoneRefreshMax', '' + apStoneRefreshMax);
  apSetCookie('apBookEnabled', apBookEnabled ? '1' : '0');
  apSetCookie('apBookRefreshMin', '' + apBookRefreshMin); apSetCookie('apBookRefreshMax', '' + apBookRefreshMax);
  apSetCookie('apRuneEnabled', apRuneEnabled ? '1' : '0');
  apSetCookie('apRuneRefreshMin', '' + apRuneRefreshMin); apSetCookie('apRuneRefreshMax', '' + apRuneRefreshMax);
  apSetCookie('apFacetEnabled', apFacetEnabled ? '1' : '0');
  apSetCookie('apFacetRefreshMin', '' + apFacetRefreshMin); apSetCookie('apFacetRefreshMax', '' + apFacetRefreshMax);
  apSetCookie('apRecipeEnabled', apRecipeEnabled ? '1' : '0');
  apSetCookie('apRecipeRefreshMin', '' + apRecipeRefreshMin); apSetCookie('apRecipeRefreshMax', '' + apRecipeRefreshMax);
  apSetCookie('apScrolls', apItemsToJson(apScrolls));
  apSetCookie('apStones', apItemsToJson(apStones));
  apSetCookie('apBooks', apItemsToJson(apBooks));
  apSetCookie('apRunes', apItemsToJson(apRunes));
  apSetCookie('apFacets', apItemsToJson(apFacets));
  apSetCookie('apRecipes', apItemsToJson(apRecipes));
  apSetCookie('apStatsDisplayCount', '' + apStatsDisplayCount);
}

function apLoad() {
  function b(k) { var v = apGetCookie(k); return v === '1'; }
  function n(k, def) { var v = apGetCookie(k); if (v === '') return def; var p = parseInt(v, 10); return isNaN(p) ? def : p; }
  apRunning = b('apRunning');
  apDelay = n('apDelay', 2000);
  apPhase = n('apPhase', 0);
  apBoxQualityMask = n('apBoxQualityMask', 0);
  apScrollQualityMask = n('apScrollQualityMask', 0);
  apStoneQualityMask = n('apStoneQualityMask', 0);
  apCurrentModule = apGetCookie('apCurrentModule') || '';
  apMinSilver = n('apMinSilver', 50);
  apBoxBuyEnabled = b('apBoxBuyEnabled');
  apBoxRefreshMin = n('apBoxRefreshMin', 1); apBoxRefreshMax = n('apBoxRefreshMax', 2);
  apQMythicMin = n('apQMythicMin', 0); apQMythicMax = n('apQMythicMax', 0);
  apQLegendaryMin = n('apQLegendaryMin', 0); apQLegendaryMax = n('apQLegendaryMax', 0);
  apQEpicMin = n('apQEpicMin', 0); apQEpicMax = n('apQEpicMax', 0);
  apQRareMin = n('apQRareMin', 0); apQRareMax = n('apQRareMax', 0);
  apQGreenMin = n('apQGreenMin', 0); apQGreenMax = n('apQGreenMax', 0);
  apScrollEnabled = b('apScrollEnabled'); apScrollRefreshMin = n('apScrollRefreshMin', 1); apScrollRefreshMax = n('apScrollRefreshMax', 2);
  apStoneEnabled = b('apStoneEnabled'); apStoneRefreshMin = n('apStoneRefreshMin', 1); apStoneRefreshMax = n('apStoneRefreshMax', 2);
  apBookEnabled = b('apBookEnabled'); apBookRefreshMin = n('apBookRefreshMin', 1); apBookRefreshMax = n('apBookRefreshMax', 2);
  apRuneEnabled = b('apRuneEnabled'); apRuneRefreshMin = n('apRuneRefreshMin', 1); apRuneRefreshMax = n('apRuneRefreshMax', 2);
  apFacetEnabled = b('apFacetEnabled'); apFacetRefreshMin = n('apFacetRefreshMin', 1); apFacetRefreshMax = n('apFacetRefreshMax', 2);
  apRecipeEnabled = b('apRecipeEnabled'); apRecipeRefreshMin = n('apRecipeRefreshMin', 1); apRecipeRefreshMax = n('apRecipeRefreshMax', 2);
  apScrolls = apItemsFromJson(apGetCookie('apScrolls'));
  apStones = apItemsFromJson(apGetCookie('apStones'));
  apBooks = apItemsFromJson(apGetCookie('apBooks'));
  apRunes = apItemsFromJson(apGetCookie('apRunes'));
  apFacets = apItemsFromJson(apGetCookie('apFacets'));
  apRecipes = apItemsFromJson(apGetCookie('apRecipes'));
  apPurchases = apPurchasesFromJson(apGetCookie('apPurchases'));
  apStatsDisplayCount = n('apStatsDisplayCount', 10);
}

function apItemsToJson(items) {
  var parts = [];
  for (var i = 0; i < items.length; i++) {
    var s = items[i];
    if (!s.name) continue;
    parts.push(encodeURIComponent(s.name) + '~' + (s.quality || '') + '~' + (s.minPrice || 0) + '~' + (s.maxPrice || 0));
  }
  return parts.join('|');
}
function apItemsFromJson(str) {
  var items = [];
  if (!str) return items;
  var parts = str.split('|');
  for (var i = 0; i < parts.length; i++) {
    var f = parts[i].split('~');
    if (f.length >= 4) {
      items.push({ name: decodeURIComponent(f[0]), quality: f[1], minPrice: parseInt(f[2], 10) || 0, maxPrice: parseInt(f[3], 10) || 0 });
    }
  }
  return items;
}

apLoad();


function apFormatPrice(silver) {
  var g = Math.floor(silver / 100);
  var s = silver % 100;
  if (g > 0 && s > 0) return g + 'з ' + s + 'с';
  if (g > 0) return g + 'з';
  return s + 'с';
}

function apGetBalance() {
  var divs = document.getElementsByTagName('div');
  for (var i = 0; i < divs.length; i++) {
    if (apInPanel(divs[i])) continue;
    var cls = divs[i].className || '';
    if (cls.indexOf('cntr') < 0) continue;
    var imgs = divs[i].getElementsByTagName('img');
    var gold = 0, silver = 0;
    var foundGold = false, foundSilver = false;
    for (var j = 0; j < imgs.length; j++) {
      var src = (imgs[j].getAttribute('src') || '').toLowerCase();
      if (!foundGold && src.indexOf('money_gold') >= 0) {
        var ne = imgs[j].nextSibling;
        while (ne && ne.nodeType !== 1) ne = ne.nextSibling;
        if (ne && ne.tagName && ne.tagName.toLowerCase() === 'span') {
          var gv = parseInt(ne.textContent || ne.innerText || '0', 10);
          if (!isNaN(gv)) gold = gv;
        }
        foundGold = true;
      }
      if (!foundSilver && src.indexOf('money_silver') >= 0) {
        var ne2 = imgs[j].nextSibling;
        while (ne2 && ne2.nodeType !== 1) ne2 = ne2.nextSibling;
        if (ne2 && ne2.tagName && ne2.tagName.toLowerCase() === 'span') {
          var sv = parseInt(ne2.textContent || ne2.innerText || '0', 10);
          if (!isNaN(sv)) silver = sv;
        }
        foundSilver = true;
      }
      if (foundGold && foundSilver) break;
    }
    if (foundGold || foundSilver) return gold * 100 + silver;
  }
  return apGetSilver();
}

function apCheckNotEnoughMoney() {
  var spans = document.getElementsByTagName('span');
  for (var i = 0; i < spans.length; i++) {
    if (apInPanel(spans[i])) continue;
    var cls = spans[i].className || '';
    if (cls.indexOf('feedbackPanel') < 0 && cls.indexOf('error') < 0) continue;
    var txt = (spans[i].textContent || spans[i].innerText || '').toLowerCase();
    if (txt.indexOf('не хватает') >= 0 || txt.indexOf('недостаточно') >= 0 || txt.indexOf('нет золота') >= 0) return true;
  }
  var lis = document.getElementsByTagName('li');
  for (var j = 0; j < lis.length; j++) {
    if (apInPanel(lis[j])) continue;
    var lcls = lis[j].className || '';
    if (lcls.indexOf('feedbackPanel') < 0 && lcls.indexOf('error') < 0) continue;
    var ltxt = (lis[j].textContent || lis[j].innerText || '').toLowerCase();
    if (ltxt.indexOf('не хватает') >= 0 || ltxt.indexOf('недостаточно') >= 0 || ltxt.indexOf('нет золота') >= 0) return true;
  }
  return false;
}

// === СТАТИСТИКА ПОКУПОК ===
function apLogPurchase(name, price, moduleKey, qualityKey) {
  var now = new Date();
  var d = ('0' + now.getDate()).slice(-2) + '.' + ('0' + (now.getMonth()+1)).slice(-2);
  var t = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2);
 var qLabel = '';
if (qualityKey && qualityKey.trim() !== '') {
  var qMap = {mythic:'миф.', legendary:'лег.', epic:'эп.', rare:'ред.', green:'необ.'};
  // Защита от случая, если пришло название на англ. (epic), а в qMap только русские ключи
  var engMap = {mythic:'миф.', legendary:'лег.', epic:'эп.', rare:'ред.', green:'необ.'};
  qLabel = qMap[qualityKey] || engMap[qualityKey] || ('[' + qualityKey + ']');
}
  var modLabel = '';
  var modInfo = apGetModuleInfo(moduleKey);
  if (modInfo) modLabel = modInfo.label;
  apPurchases.unshift({ name: name, price: price, module: modLabel, quality: qLabel, time: d + ' ' + t });
  if (apPurchases.length > 500) apPurchases = apPurchases.slice(0, 500);
  apSetCookie('apPurchases', apPurchasesToJson(apPurchases));
  apUpdateStatsDisplay();
  apUpdateRecentPurchases();
}
function apPurchasesToJson(items) {
  var parts = [];
  for (var i = 0; i < items.length; i++) {
    parts.push(encodeURIComponent(items[i].name) + '~' + (items[i].price||0) + '~' + encodeURIComponent(items[i].module||'') + '~' + encodeURIComponent(items[i].quality||'') + '~' + encodeURIComponent(items[i].time||''));
  }
  return parts.join('|');
}
function apPurchasesFromJson(str) {
  var items = [];
  if (!str) return items;
  var parts = str.split('|');
  for (var i = 0; i < parts.length; i++) {
    var f = parts[i].split('~');
    if (f.length >= 5) {
      items.push({ name: decodeURIComponent(f[0]), price: parseInt(f[1],10)||0, module: decodeURIComponent(f[2]), quality: decodeURIComponent(f[3]), time: decodeURIComponent(f[4]) });
    }
  }
  return items;
}
function apUpdateStatsDisplay() {
  var container = document.getElementById('ap-stc-stats');
  if (!container) return;
  if (apPurchases.length === 0) {
    container.innerHTML = '<div style="color:#666;font-size:11px;text-align:center;padding:10px">Покупок пока нет</div>';
    return;
  }
  var totalSpent = 0;
  for (var i = 0; i < apPurchases.length; i++) totalSpent += apPurchases[i].price;

  // Display count input
  var html = '<div style="margin-bottom:6px">' +
    '<span style="color:#aaa;font-size:11px">Показывать:</span> ' +
    '<input type="number" id="ap-stats-count" value="' + apStatsDisplayCount + '" style="width:40px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;text-align:center" min="1" max="500" /> ' +
    '<span style="color:#666;font-size:11px">последних покупок</span> ' +
    '<a href="#" id="ap-clear-stats" style="color:#cc4444;font-size:11px;float:right">очистить</a>' +
    '</div>';

  // Total
  html += '<div style="margin-bottom:8px;padding:6px;background:#222;border:1px solid #444;border-radius:3px">' +
    '<span style="color:#6FCD72;font-size:12px"><b>' + apPurchases.length + '</b> покупок</span> &mdash; ' +
    '<span style="color:#EEC053;font-size:12px">потрачено: <b>' + apFormatPrice(totalSpent) + '</b></span>' +
    '</div>';

  // Grouped summary
  var groups = {};
  for (var gi = 0; gi < apPurchases.length; gi++) {
    var p = apPurchases[gi];
    var gkey = p.name + '~' + p.quality;
    if (!groups[gkey]) groups[gkey] = { name: p.name, quality: p.quality, count: 0, total: 0 };
    groups[gkey].count++;
    groups[gkey].total += p.price;
  }
  var gKeys = [];
  for (var gk in groups) { if (groups.hasOwnProperty(gk)) gKeys.push(gk); }
  gKeys.sort(function(a, b) { return groups[b].total - groups[a].total; });
  if (gKeys.length > 0) {
    html += '<div style="margin-bottom:8px;padding:6px;background:#1a1a2e;border:1px solid #333;border-radius:3px">' +
      '<div style="color:#888;font-size:11px;margin-bottom:4px">Сводка:</div>';
    for (var ggi = 0; ggi < gKeys.length; ggi++) {
      var g = groups[gKeys[ggi]];
      var qColor = '#888';
      if (g.quality === 'миф.') qColor = '#aa66ff';
      else if (g.quality === 'лег.') qColor = '#FF8C00';
      else if (g.quality === 'эп.') qColor = '#cc44cc';
      else if (g.quality === 'ред.') qColor = '#44ccff';
      else if (g.quality === 'необ.') qColor = '#66cc66';
      html += '<div style="padding:2px 0;font-size:11px">' +
        '<span style="color:#EEC053">' + g.name + '</span> ' +
        '<span style="color:' + qColor + '">[' + g.quality + ']</span> ' +
        '<span style="color:#aaa">&mdash; ' + g.count + ' шт. &mdash; ' +
        '<span style="color:#6FCD72">' + apFormatPrice(g.total) + '</span></span>' +
        '</div>';
    }
    html += '</div>';
  }

  // Last N purchases
  var showCount = apStatsDisplayCount;
  if (showCount < 1) showCount = 1;
  if (showCount > apPurchases.length) showCount = apPurchases.length;
  html += '<div style="color:#888;font-size:11px;margin-bottom:4px">Последние ' + showCount + ' покупок:</div>';
  html += '<div style="max-height:300px;overflow-y:auto">';
  for (var j = 0; j < showCount; j++) {
    var p = apPurchases[j];
    var qColor = '#888';
    if (p.quality === 'миф.') qColor = '#aa66ff';
    else if (p.quality === 'лег.') qColor = '#FF8C00';
    else if (p.quality === 'эп.') qColor = '#cc44cc';
    else if (p.quality === 'ред.') qColor = '#44ccff';
    else if (p.quality === 'необ.') qColor = '#66cc66';
    html += '<div style="padding:4px 6px;border-bottom:1px solid #333;font-size:11px">' +
      '<span style="color:#666">' + (j+1) + '.</span> ' +
      '<span style="color:#EEC053">' + p.name + '</span> ' +
      '<span style="color:' + qColor + '">[' + p.quality + ']</span> ' +
      '<span style="color:#6FCD72">' + apFormatPrice(p.price) + '</span> ' +
      '<span style="color:#666">(' + p.module + ', ' + p.time + ')</span>' +
      '</div>';
  }
  html += '</div>';
  container.innerHTML = html;

  // Display count input handler
  var countInput = document.getElementById('ap-stats-count');
  if (countInput) {
    countInput.onchange = function() {
      var v = parseInt(countInput.value, 10);
      if (isNaN(v) || v < 1) v = 1;
      if (v > 500) v = 500;
      apStatsDisplayCount = v;
      apSetCookie('apStatsDisplayCount', '' + v);
      apUpdateStatsDisplay();
    };
  }

  var clearBtn = document.getElementById('ap-clear-stats');
  if (clearBtn) {
    clearBtn.onclick = function(e) {
      e.preventDefault();
      apPurchases = [];
      apSetCookie('apPurchases', '');
      apUpdateStatsDisplay();
	  apUpdateRecentPurchases(); 
      var cfgMsg = document.getElementById('ap-cfg-msg');
      if (cfgMsg) { cfgMsg.style.display='block'; cfgMsg.textContent='Статистика очищена'; cfgMsg.style.color='#6FCD72'; setTimeout(function(){cfgMsg.style.display='none';},1500); }
    };
  }
}

// === УТИЛИТЫ ===
function apInPanel(el) {
  var p = el.parentNode;
  while (p) {
    if (p.id === 'ap-panel') return true;
    p = p.parentNode;
  }
  return false;
}

function apRandomDelay(minSec, maxSec) {
  if (minSec > maxSec) minSec = maxSec;
  return (minSec + Math.floor(Math.random() * (maxSec - minSec + 1))) * 1000;
}

function apParsePriceFromElement(container) {
  var gold = 0, silver = 0;
  var imgs = container.getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++) {
    var src = (imgs[i].getAttribute('src') || '').toLowerCase();
    if (src.indexOf('money_gold') >= 0) {
      var ne = imgs[i].nextSibling;
      while (ne && ne.nodeType !== 1) ne = ne.nextSibling;
      if (ne && ne.tagName && ne.tagName.toLowerCase() === 'span') {
        var gv = parseInt(ne.textContent || ne.innerText || '0', 10);
        if (!isNaN(gv)) gold = gv;
      }
    } else if (src.indexOf('money_silver') >= 0) {
      var ne2 = imgs[i].nextSibling;
      while (ne2 && ne2.nodeType !== 1) ne2 = ne2.nextSibling;
      if (ne2 && ne2.tagName && ne2.tagName.toLowerCase() === 'span') {
        var sv = parseInt(ne2.textContent || ne2.innerText || '0', 10);
        if (!isNaN(sv)) silver = sv;
      }
    }
  }
  return gold * 100 + silver;
}

function apGetSilver() {
  var imgs = document.getElementsByTagName('img');
  var gold = 0, silver = 0;
  var foundGold = false, foundSilver = false;
  for (var i = 0; i < imgs.length; i++) {
    if (apInPanel(imgs[i])) continue;
    var src = (imgs[i].getAttribute('src') || '').toLowerCase();
    if (!foundGold && src.indexOf('money_gold') >= 0) {
      var nG = imgs[i].nextSibling;
      while (nG && nG.nodeType !== 1) nG = nG.nextSibling;
      if (nG && nG.tagName && nG.tagName.toLowerCase() === 'span') {
        var gv = parseInt(nG.textContent || nG.innerText || '0', 10);
        if (!isNaN(gv)) gold = gv;
      }
      foundGold = true;
    }
    if (!foundSilver && src.indexOf('money_silver') >= 0) {
      var nS = imgs[i].nextSibling;
      while (nS && nS.nodeType !== 1) nS = nS.nextSibling;
      if (nS && nS.tagName && nS.tagName.toLowerCase() === 'span') {
        var sv = parseInt(nS.textContent || nS.innerText || '0', 10);
        if (!isNaN(sv)) silver = sv;
      }
      foundSilver = true;
    }
    if (foundGold && foundSilver) break;
  }
  if (!foundSilver) return -1;
  return gold * 100 + silver;
}

// === ПОИСК ССЫЛОК ===
function apFindLinkByText(text) {
  text = text.toLowerCase();
  var all = document.getElementsByTagName('a');
  for (var i = 0; i < all.length; i++) {
    if (apInPanel(all[i])) continue;
    var txt = (all[i].textContent || all[i].innerText || '').toLowerCase();
    txt = txt.replace(/^\s+|\s+$/g, '');
    if (txt === text) return all[i];
    if (txt.indexOf(text) >= 0 && txt.length < text.length + 15) return all[i];
  }
  return null;
}

function apFindLinkByHref(hrefPart) {
  hrefPart = hrefPart.toLowerCase();
  var all = document.getElementsByTagName('a');
  for (var i = 0; i < all.length; i++) {
    if (apInPanel(all[i])) continue;
    var href = (all[i].getAttribute('href') || '').toLowerCase();
    if (href.indexOf('mail') >= 0) continue;
    if (href.indexOf(hrefPart) >= 0) return all[i];
  }
  return null;
}

// === КАЧЕСТВА ===
function apGetQualities() {
  return [
    { key: 'mythic',    icon: 'bonusdarkiron',  label: 'мифические',    pNum: 6, min: apQMythicMin,    max: apQMythicMax },
    { key: 'legendary', icon: 'bonuslegendary', label: 'легендарные',   pNum: 5, min: apQLegendaryMin, max: apQLegendaryMax },
    { key: 'epic',      icon: 'bonusepic',      label: 'эпические',     pNum: 4, min: apQEpicMin,      max: apQEpicMax },
    { key: 'rare',      icon: 'bonusrare',      label: 'редкие',         pNum: 3, min: apQRareMin,      max: apQRareMax },
    { key: 'green',     icon: 'bonusgreen',    label: 'необычные',      pNum: 2, min: apQGreenMin,     max: apQGreenMax }
  ];
}
function apQualityBit(key) {
  switch(key) { case 'mythic': return 1; case 'legendary': return 2; case 'epic': return 4; case 'rare': return 8; case 'green': return 16; }
  return 0;
}
function apDetectQualityFromURL() {
  var url = window.location.href || '';
  // 1. Пробуем найти /p/6/ (стандартный путь)
  var m = url.match(/\/p\/(\d+)\//i);
  if (m) {
    var pNum = parseInt(m[1], 10);
    var quals = apGetQualities();
    for (var i = 0; i < quals.length; i++) {
      if (quals[i].pNum === pNum) return quals[i].key;
    }
  }
  
  // 2. Если /p/ не найден, ищем по тексту страницы (названию качества рядом с ценой)
  // Это сработает, если вы открыли предмет через поиск
  var qualityTexts = {
    'миф.': 'mythic', 'мифический': 'mythic',
    'лег.': 'legendary', 'легендарный': 'legendary',
    'эп.': 'epic', 'эпический': 'epic',
    'ред.': 'rare', 'редкий': 'rare',
    'необ.': 'green', 'необычный': 'green'
  };
  
  var allText = document.body.textContent || '';
  for (var key in qualityTexts) {
    if (allText.indexOf(key) >= 0) {
      return qualityTexts[key];
    }
  }
  
  return '';
}
function apIconToQuality(iconSrc) {
  var s = iconSrc.toLowerCase();
  if (s.indexOf('bonusdarkiron') >= 0) return 'mythic';
  if (s.indexOf('bonuslegendary') >= 0) return 'legendary';
  if (s.indexOf('bonusepic') >= 0) return 'epic';
  if (s.indexOf('bonusrare') >= 0) return 'rare';
  if (s.indexOf('bonusgreen') >= 0) return 'green';
  return '';
}

// === ВКЛАДКИ ===
var apModuleInfo = [
  { key: 'boxes',  label: 'Ящики',   tabHref: '/t/3', type: 'box'  },
  { key: 'scrolls',label: 'Свитки',  tabHref: '/t/2', type: 'named', items: 'apScrolls', enabled: 'apScrollEnabled', rMin: 'apScrollRefreshMin', rMax: 'apScrollRefreshMax', searchPhase: 6, buyPhase: 7 },
  { key: 'stones', label: 'Камни',   tabHref: '/t/1', type: 'named', items: 'apStones',  enabled: 'apStoneEnabled',  rMin: 'apStoneRefreshMin',  rMax: 'apStoneRefreshMax',  searchPhase: 8, buyPhase: 9 },
  { key: 'books',  label: 'Книги',   tabHref: '/t/6', type: 'simple', items: 'apBooks',  enabled: 'apBookEnabled',  rMin: 'apBookRefreshMin',  rMax: 'apBookRefreshMax',  searchPhase: 12, buyPhase: 13 },
  { key: 'runes',  label: 'Руны',    tabHref: '/t/4', type: 'simple', items: 'apRunes',  enabled: 'apRuneEnabled',  rMin: 'apRuneRefreshMin',  rMax: 'apRuneRefreshMax',  searchPhase: 14, buyPhase: 15 },
  { key: 'facets', label: 'Огранки', tabHref: '/t/8', type: 'simple', items: 'apFacets',  enabled: 'apFacetEnabled', rMin: 'apFacetRefreshMin', rMax: 'apFacetRefreshMax', searchPhase: 16, buyPhase: 17 },
  { key: 'recipes',label: 'Рецепты', tabHref: '/t/9', type: 'simple', items: 'apRecipes',enabled: 'apRecipeEnabled', rMin: 'apRecipeRefreshMin', rMax: 'apRecipeRefreshMax', searchPhase: 18, buyPhase: 19 }
];

function apGetModuleOrder() {
  return ['boxes', 'scrolls', 'stones', 'books', 'runes', 'facets', 'recipes'];
}
function apGetModuleInfo(key) {
  for (var i = 0; i < apModuleInfo.length; i++) {
    if (apModuleInfo[i].key === key) return apModuleInfo[i];
  }
  return null;
}
function apModuleEnabled(key) {
  switch(key) {
    case 'boxes': return apBoxEnabled();
    case 'scrolls': return apScrollEnabled && apScrolls.length > 0;
    case 'stones': return apStoneEnabled && apStones.length > 0;
    case 'books': return apBookEnabled && apBooks.length > 0;
    case 'runes': return apRuneEnabled && apRunes.length > 0;
    case 'facets': return apFacetEnabled && apFacets.length > 0;
    case 'recipes': return apRecipeEnabled && apRecipes.length > 0;
  }
  return false;
}
function apBoxEnabled() {
  if (!apBoxBuyEnabled) return false;
  var q = apGetQualities();
  for (var i = 0; i < q.length; i++) {
    if (q[i].max > 0 || q[i].min > 0) return true;
  }
  return false;
}
function apGetNextModule(curKey) {
  var order = apGetModuleOrder();
  var startIdx = 0;
  for (var i = 0; i < order.length; i++) {
    if (order[i] === curKey) { startIdx = i; break; }
  }
  for (var j = 1; j <= order.length; j++) {
    var idx = (startIdx + j) % order.length;
    if (apModuleEnabled(order[idx])) return order[idx];
  }
  return null;
}

function apGetNeededQualities(items) {
  var set = {};
  for (var i = 0; i < items.length; i++) {
    if (items[i].name && items[i].quality) set[items[i].quality] = true;
  }
  return set;
}
function apGetNeededBoxQualities() {
  var set = {};
  var q = apGetQualities();
  for (var i = 0; i < q.length; i++) {
    if (q[i].max > 0 || q[i].min > 0) set[q[i].key] = true;
  }
  return set;
}

// === ОПРЕДЕЛЕНИЕ СТРАНИЦЫ ===
function apDetectPage() {
  var url = (window.location.href || '').toLowerCase();
  var title = (document.title || '').toLowerCase();
  if (url.indexOf('shop/item') >= 0) return 'shop_item';
  if (title.indexOf('подтверждение') >= 0) return 'confirm';
  if (url.indexOf('artefact/shop') >= 0) {
    if (url.indexOf('/t/3') >= 0) return 'shop_boxes';
    if (url.indexOf('/t/2') >= 0) return 'shop_scrolls';
    if (url.indexOf('/t/1') >= 0) return 'shop_stones';
    if (url.indexOf('/t/6') >= 0) return 'shop_books';
    if (url.indexOf('/t/4') >= 0) return 'shop_runes';
    if (url.indexOf('/t/8') >= 0) return 'shop_facets';
    if (url.indexOf('/t/9') >= 0) return 'shop_recipes';
    return 'artefact_shop';
  }
  if (url.indexOf('trade/artefact') >= 0) return 'artefact_auction';
  if (url.indexOf('trade/auctions') >= 0) return 'auctions';
  if (url.indexOf('/trade') >= 0) return 'trade';
  var aucLink = apFindLinkByHref('trade/auctions');
  if (aucLink) return 'main';
  if (title.indexOf('варвары') >= 0 && url.indexOf('trade') < 0 && url.indexOf('shop') < 0) return 'main';
  return 'unknown';
}

// === ПОИСК ЯЩИКА ===
function apFindBox() {
  var quals = apGetQualities();
  for (var q = 0; q < quals.length; q++) {
    var qual = quals[q];
    if (qual.max === 0 && qual.min === 0) continue;
    var imgs = document.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {
      if (apInPanel(imgs[i])) continue;
      var src = (imgs[i].getAttribute('src') || '').toLowerCase();
      if (src.indexOf(qual.icon) < 0) continue;
      var td = imgs[i].parentNode;
      while (td && td.tagName && td.tagName.toLowerCase() !== 'td') td = td.parentNode;
      if (!td) continue;
      var tdImgs = td.getElementsByTagName('img');
      for (var j = 0; j < tdImgs.length; j++) {
        var psrc = (tdImgs[j].getAttribute('src') || '').toLowerCase();
        if (psrc.indexOf('money_silver') < 0 && psrc.indexOf('money_gold') < 0) continue;
        var price = apParsePriceFromElement(td);
        var mn = qual.min, mx = qual.max;
        if (mn > mx) { var t = mn; mn = mx; mx = t; }
        if (price >= mn && price <= mx) {
          var balance = apGetBalance();
          if (balance > 0 && price > balance) break;
          var links = td.getElementsByTagName('a');
          if (links.length > 0) return links[0];
        }
        break;
      }
    }
  }
  return null;
}

// === ПОИСК ИМЕНОВАННОГО ПРЕДМЕТА (свитки, камни) ===
function apFindNamedItem(items) {
  var tables = document.getElementsByTagName('table');
  for (var i = 0; i < tables.length; i++) {
    var t = tables[i];
    if (apInPanel(t)) continue;
    var tds = t.getElementsByTagName('td');
    if (tds.length < 2) continue;
    var td1 = tds[1];
    var qIcon = '';
    var qImgs = td1.getElementsByTagName('img');
    for (var qi = 0; qi < qImgs.length; qi++) {
      var qKey = apIconToQuality(qImgs[qi].getAttribute('src') || '');
      if (qKey) { qIcon = qKey; break; }
    }
    if (!qIcon) continue;
    var links = td1.getElementsByTagName('a');
    if (links.length === 0) continue;
    var link = links[0];
    var linkText = (link.textContent || link.innerText || '').toLowerCase();
    var price = apParsePriceFromElement(td1);
    if (price < 0) continue;
    for (var k = 0; k < items.length; k++) {
      var s = items[k];
      if (!s.name) continue;
      if (s.quality !== qIcon) continue;
      if (linkText.indexOf(s.name.toLowerCase()) < 0) continue;
      var mn = s.minPrice, mx = s.maxPrice;
      if (mn > mx) { var tmp = mn; mn = mx; mx = tmp; }
      if (price >= mn && price <= mx) {
        var balance = apGetBalance();
        if (balance > 0 && price > balance) continue;
        return link;
      }
    }
  }
  return null;
}

// === ПОИСК ПРОСТОГО ПРЕДМЕТА (книги, руны, огранки, рецепты) ===
function apFindSimpleItem(items) {
  var tables = document.getElementsByTagName('table');
  for (var i = 0; i < tables.length; i++) {
    var t = tables[i];
    if (apInPanel(t)) continue;
    var tds = t.getElementsByTagName('td');
    if (tds.length < 2) continue;
    var td1 = tds[1];
    var links = td1.getElementsByTagName('a');
    if (links.length === 0) continue;
    var link = links[0];
    var linkText = (link.textContent || link.innerText || '').toLowerCase();
    var price = apParsePriceFromElement(td1);
    if (price < 0) continue;
    for (var k = 0; k < items.length; k++) {
      var s = items[k];
      if (!s.name) continue;
      if (linkText.indexOf(s.name.toLowerCase()) < 0) continue;
      var mn = s.minPrice, mx = s.maxPrice;
      if (mn > mx) { var tmp = mn; mn = mx; mx = tmp; }
      if (price >= mn && price <= mx) {
        var balance = apGetBalance();
        if (balance > 0 && price > balance) continue;
        return link;
      }
    }
  }
  return null;
}

// === ПОИСК "КУПИТЬ" ===
function apFindBuyLinkForBoxes() {
  var qualIcon = '';
  var imgs = document.getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++) {
    if (apInPanel(imgs[i])) continue;
    var qKey = apIconToQuality(imgs[i].getAttribute('src') || '');
    if (qKey) { qualIcon = qKey; break; }
  }
  var quals = apGetQualities();
  var minPrice = 0, maxPrice = 0;
  for (var qi = 0; qi < quals.length; qi++) {
    if (quals[qi].key === qualIcon) { minPrice = quals[qi].min; maxPrice = quals[qi].max; break; }
  }
  if (maxPrice === 0 && minPrice === 0) return null;
  var all = document.getElementsByTagName('a');
  for (var j = 0; j < all.length; j++) {
    if (apInPanel(all[j])) continue;
    var txt = (all[j].textContent || all[j].innerText || '').toLowerCase();
    if (txt.indexOf('купить') < 0) continue;
    var price = apParsePriceFromElement(all[j]);
    var mn = minPrice, mx = maxPrice;
    if (mn > mx) { var t = mn; mn = mx; mx = t; }
    if (price >= mn && price <= mx) return all[j];
  }
  return null;
}

function apFindItemBuyLink(items, qualityKey) {
  // На странице предмета h1 = "Магазин артефактов", название — в span.link внутри <td>
  var itemName = '';
  var h1 = document.getElementsByTagName('h1');
  if (h1.length > 0) itemName = (h1[0].textContent || h1[0].innerText || '').toLowerCase();
  // Если h1 — это "магазин артефактов", ищем span.link внутри td (таблица предмета)
  if (!itemName || itemName.indexOf('магазин') >= 0 || itemName.indexOf('подтвер') >= 0) {
    var tds = document.getElementsByTagName('td');
    for (var ti = 0; ti < tds.length; ti++) {
      if (apInPanel(tds[ti])) continue;
      var spanInTd = tds[ti].getElementsByTagName('span');
      for (var spi = 0; spi < spanInTd.length; spi++) {
        var cls = spanInTd[spi].className || '';
        if (cls.indexOf('link') >= 0) {
          var txt = (spanInTd[spi].textContent || spanInTd[spi].innerText || '').toLowerCase();
          if (txt.indexOf('объявл') >= 0 || txt.indexOf('клан') >= 0) continue;
          itemName = txt;
          break;
        }
      }
      if (itemName && itemName.indexOf('магазин') < 0) break;
    }
  }
  // Запасной вариант — .link, но не "объявление клана"
  if (!itemName || itemName.indexOf('магазин') >= 0 || itemName.indexOf('подтвер') >= 0) {
    var allSpans = document.getElementsByTagName('span');
    for (var si2 = 0; si2 < allSpans.length; si2++) {
      if (apInPanel(allSpans[si2])) continue;
      var cls2 = allSpans[si2].className || '';
      if (cls2.indexOf('link') < 0) continue;
      var txt2 = (allSpans[si2].textContent || allSpans[si2].innerText || '').toLowerCase();
      if (txt2.indexOf('объявл') >= 0 || txt2.indexOf('клан') >= 0) continue;
      itemName = txt2;
      break;
    }
  }
  var all = document.getElementsByTagName('a');
  for (var j = 0; j < all.length; j++) {
    if (apInPanel(all[j])) continue;
    var txt = (all[j].textContent || all[j].innerText || '').toLowerCase();
    if (txt.indexOf('купить') < 0) continue;
    var price = apParsePriceFromElement(all[j]);
    for (var si = 0; si < items.length; si++) {
      var s = items[si];
      if (!s.name) continue;
      if (qualityKey && s.quality !== qualityKey) continue;
      if (itemName.indexOf(s.name.toLowerCase()) < 0) continue;
      var mn = s.minPrice, mx = s.maxPrice;
      if (mn > mx) { var t = mn; mn = mx; mx = t; }
      if (price >= mn && price <= mx) return all[j];
    }
  }
  return null;
}

// === ПОДСВЕТКА И КЛИК ===
function apHighlight(el) {
  apUnhighlight();
  if (!el) return;
  el.style.outline = '3px solid #6FCD72';
  el.style.outlineOffset = '2px';
  apCurrentEl = el;
  if (el.scrollIntoView) { try { el.scrollIntoView(); } catch (e) {} }
}
function apUnhighlight() {
  if (apCurrentEl) { apCurrentEl.style.outline = ''; apCurrentEl.style.outlineOffset = ''; apCurrentEl = null; }
}
function apClickLink(link, delayMs) {
  apHighlight(link);
  var useDelay = delayMs || apDelay;
  apTimer = setTimeout(function() {
    if (!apRunning) return;
    apUnhighlight();
    window.location.href = link.href;
  }, useDelay);
}
function apGoHome() {
  var auc = apFindLinkByText('Аукцион артефактов');
  if (!auc) auc = apFindLinkByText('аукцион артефактов');
  if (auc) { apClickLink(auc); return; }
  auc = apFindLinkByText('Аукционы');
  if (!auc) auc = apFindLinkByText('аукционы');
  if (auc) { apClickLink(auc); return; }
  auc = apFindLinkByHref('trade/artefact');
  if (auc) { apClickLink(auc); return; }
  apPhase = 0; apSave();
  window.location.href = '/trade/artefact';
}

// === ОБРАТНЫЙ ОТСЧЁТ ===
function apShowCountdown(ms) {
  var btn = document.getElementById('ap-btn');
  if (!btn) return;
  var sec = Math.floor(ms / 1000);
  btn.innerHTML = '\u0421\u0442\u043e\u043f (' + sec + '\u0441)';
  var ci = setInterval(function() {
    ms -= 1000;
    sec = Math.floor(ms / 1000);
    if (sec <= 0 || !apRunning) { clearInterval(ci); if (apRunning) apUpdateBtn(); return; }
    btn.innerHTML = '\u0421\u0442\u043e\u043f (' + sec + '\u0441)';
  }, 1000);
}

// === ПЕРЕКЛЮЧЕНИЕ МОДУЛЯ ===
function apClickModuleTab(moduleKey) {
  var info = apGetModuleInfo(moduleKey);
  if (!info) return false;
  var link = apFindLinkByText(info.label);
  if (!link) {
    var tabHref = (info.tabHref || '').toLowerCase();
    var all = document.getElementsByTagName('a');
    var qLabels = ['мифические','легендарные','эпические','редкие','необычные'];
    for (var i = 0; i < all.length; i++) {
      if (apInPanel(all[i])) continue;
      var href = (all[i].getAttribute('href') || '').toLowerCase();
      if (href.indexOf('mail') >= 0) continue;
      if (href.indexOf(tabHref) < 0) continue;
      var linkText = (all[i].textContent || all[i].innerText || '').toLowerCase().replace(/^\s+|\s+$/g, '');
      var isQualityLink = false;
      for (var q = 0; q < qLabels.length; q++) {
        if (linkText === qLabels[q]) { isQualityLink = true; break; }
      }
      if (!isQualityLink) { link = all[i]; break; }
    }
  }
  if (link) { apClickLink(link); return true; }
  return false;
}
function apIsOnModulePage(moduleKey) {
  var page = apDetectPage();
  switch(moduleKey) {
    case 'boxes': return page === 'shop_boxes';
    case 'scrolls': return page === 'shop_scrolls';
    case 'stones': return page === 'shop_stones';
    case 'books': return page === 'shop_books';
    case 'runes': return page === 'shop_runes';
    case 'facets': return page === 'shop_facets';
    case 'recipes': return page === 'shop_recipes';
  }
  return false;
}
function apGetModuleItems(moduleKey) {
  switch(moduleKey) {
    case 'scrolls': return apScrolls;
    case 'stones': return apStones;
    case 'books': return apBooks;
    case 'runes': return apRunes;
    case 'facets': return apFacets;
    case 'recipes': return apRecipes;
  }
  return [];
}
function apGetModuleRefresh(moduleKey) {
  switch(moduleKey) {
    case 'boxes': return [apBoxRefreshMin, apBoxRefreshMax];
    case 'scrolls': return [apScrollRefreshMin, apScrollRefreshMax];
    case 'stones': return [apStoneRefreshMin, apStoneRefreshMax];
    case 'books': return [apBookRefreshMin, apBookRefreshMax];
    case 'runes': return [apRuneRefreshMin, apRuneRefreshMax];
    case 'facets': return [apFacetRefreshMin, apFacetRefreshMax];
    case 'recipes': return [apRecipeRefreshMin, apRecipeRefreshMax];
  }
  return [1, 2];
}
function apGetModuleMask(moduleKey) {
  switch(moduleKey) {
    case 'boxes': return apBoxQualityMask;
    case 'scrolls': return apScrollQualityMask;
    case 'stones': return apStoneQualityMask;
  }
  return 0;
}
function apSetModuleMask(moduleKey, val) {
  switch(moduleKey) {
    case 'boxes': apBoxQualityMask = val; break;
    case 'scrolls': apScrollQualityMask = val; break;
    case 'stones': apStoneQualityMask = val; break;
  }
}

// === ОСНОВНОЙ ЦИКЛ ===
function apStep() {
  if (!apRunning) { apStop(); return; }
  var page = apDetectPage();

  // ФАЗА 0: Главная → Аукционы
  if (apPhase === 0) {
    var aucLink = apFindLinkByText('\u0410\u0443\u043a\u0446\u0438\u043e\u043d\u044b');
    if (!aucLink) aucLink = apFindLinkByText('\u0430\u0443\u043a\u0446\u0438\u043e\u043d\u044b');
    if (!aucLink) aucLink = apFindLinkByHref('trade/auctions');
    if (aucLink) { apPhase = 1; apSave(); apClickLink(aucLink); return; }
    apGoHome(); return;
  }

  // ФАЗА 1: Аукционы → Аукцион артефактов
  if (apPhase === 1) {
    if (page === 'artefact_shop' || page.indexOf('shop_') === 0) { apPhase = 3; apSave(); apStep(); return; }
    if (page === 'artefact_auction') { apPhase = 2; apSave(); apStep(); return; }
    var artLink = apFindLinkByText('\u0410\u0443\u043a\u0446\u0438\u043e\u043d \u0430\u0440\u0442\u0435\u0444\u0430\u043a\u0442\u043e\u0432');
    if (!artLink) artLink = apFindLinkByText('\u0430\u0443\u043a\u0446\u0438\u043e\u043d \u0430\u0440\u0442\u0435\u0444\u0430\u043a\u0442\u043e\u0432');
    if (!artLink) artLink = apFindLinkByHref('trade/artefact');
    if (artLink) { apPhase = 2; apSave(); apClickLink(artLink); return; }
    apGoHome(); return;
  }

  // ФАЗА 2: Аукцион → Лучшие предложения (магазин)
  if (apPhase === 2) {
    if (page === 'artefact_shop' || page.indexOf('shop_') === 0) { apPhase = 3; apSave(); apStep(); return; }
    var shopLink = apFindLinkByText('\u043b\u0443\u0447\u0448\u0438\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f');
    if (!shopLink) shopLink = apFindLinkByHref('artefact/shop');
    if (shopLink) { apPhase = 3; apSave(); apClickLink(shopLink); return; }
    apGoHome(); return;
  }

  // ФАЗА 3: В магазине — выбор следующего модуля
  if (apPhase === 3) {
    var order = apGetModuleOrder();
    var startIdx = 0;
    if (apCurrentModule) {
      for (var si = 0; si < order.length; si++) {
        if (order[si] === apCurrentModule) { startIdx = si + 1; break; }
      }
    }
    var firstModule = null;
    for (var mi = startIdx; mi < order.length; mi++) {
      if (apModuleEnabled(order[mi])) { firstModule = order[mi]; break; }
    }
    if (!firstModule) {
      for (var mi2 = 0; mi2 < startIdx; mi2++) {
        if (apModuleEnabled(order[mi2])) { firstModule = order[mi2]; break; }
      }
    }
    if (!firstModule) { apPhase = 0; apSave(); apGoHome(); return; }
    apCurrentModule = firstModule;
    var info = apGetModuleInfo(firstModule);
    apSetModuleMask(firstModule, 0);
    if (apIsOnModulePage(firstModule)) {
      apPhase = info.searchPhase; apSave(); apStep(); return;
    }
    if (page === 'artefact_shop' && firstModule === 'scrolls') {
      apPhase = info.searchPhase; apSave(); apStep(); return;
    }
    if (apClickModuleTab(firstModule)) { apPhase = info.searchPhase; apSave(); return; }
    apGoHome(); return;
  }

  // ФАЗА 4: Поиск ящиков (с перебором качеств)
  if (apPhase === 4) {
    if (page === 'shop_boxes') {
      var silver = apGetSilver();
      if (silver >= 0 && silver < apMinSilver) {
        var waitLow = apRandomDelay(apBoxRefreshMin, apBoxRefreshMax);
        apTimer = setTimeout(function() { if (apRunning) window.location.reload(); }, waitLow);
        apShowCountdown(waitLow); return;
      }
      var boxLink = apFindBox();
      if (boxLink) { apPhase = 5; apSave(); apClickLink(boxLink); return; }
      // Перебор качеств
      var curQ = apDetectQualityFromURL();
      if (curQ) { apBoxQualityMask |= apQualityBit(curQ); apSave(); }
      var neededBox = apGetNeededBoxQualities();
      var qOrder = ['mythic', 'legendary', 'epic', 'rare', 'green'];
      var quals = apGetQualities();
      for (var qi = 0; qi < qOrder.length; qi++) {
        var qk = qOrder[qi];
        if (!neededBox[qk]) continue;
        if (apBoxQualityMask & apQualityBit(qk)) continue;
        var qlabel = '';
        for (var qq = 0; qq < quals.length; qq++) { if (quals[qq].key === qk) { qlabel = quals[qq].label; break; } }
        var qLink = apFindLinkByText(qlabel);
        if (qLink) { apClickLink(qLink); return; }
        break;
      }
      // Все качества проверены — следующий модуль
      apBoxQualityMask = 0; apSave();
      var nextBox = apGetNextModule('boxes');
      if (nextBox) { apPhase = 3; apSave(); apStep(); return; }
      var boxWait = apRandomDelay(apBoxRefreshMin, apBoxRefreshMax);
      apTimer = setTimeout(function() { if (apRunning) window.location.reload(); }, boxWait);
      apShowCountdown(boxWait); return;
    }
    if (page === 'artefact_shop') { if (apClickModuleTab('boxes')) return; }
    if (page === 'shop_item') { apPhase = 5; apSave(); apStep(); return; }
    // Если на странице другого модуля — кликаем на ящики
    if (apClickModuleTab('boxes')) return;
    apGoHome(); return;
  }

  // ФАЗА 5: Покупка ящика
  if (apPhase === 5) {
    if (page === 'shop_item') {
      var buyLink = apFindBuyLinkForBoxes();
      if (buyLink) {
        var bPrice = apParsePriceFromElement(buyLink);
        var bQual = apDetectQualityFromURL() || '';
        if (apCheckNotEnoughMoney()) { apPhase = 11; apSave(); apStep(); return; }
        var bBalance = apGetBalance();
        if (bBalance > 0 && bPrice > bBalance) { apPhase = 11; apSave(); apStep(); return; }
        apLogPurchase('Ящик', bPrice, 'boxes', bQual);
        apPhase = 10; apSave(); apClickLink(buyLink); return;
      }
      apPhase = 0; apSave(); apGoHome(); return;
    }
    if (page === 'confirm') { apPhase = 10; apSave(); apStep(); return; }
    apPhase = 0; apSave(); apStep(); return;
  }

  // ФАЗЫ 6/8: Поиск свитков/камней (с перебором качеств)
  if (apPhase === 6 || apPhase === 8) {
    var modKey = (apPhase === 6) ? 'scrolls' : 'stones';
    var items = apGetModuleItems(modKey);
    var mask = (apPhase === 6) ? 'apScrollQualityMask' : 'apStoneQualityMask';
    if (apIsOnModulePage(modKey) || (page === 'artefact_shop' && modKey === 'scrolls')) {
      var needed = apGetNeededQualities(items);
      var curQKey = apDetectQualityFromURL();
      if (curQKey && needed[curQKey]) {
        apSetModuleMask(modKey, apGetModuleMask(modKey) | apQualityBit(curQKey));
        apSave();
      }
      var found = apFindNamedItem(items);
      if (found) {
        var buyPh = (apPhase === 6) ? 7 : 9;
        apPhase = buyPh; apSave(); apClickLink(found); return;
      }
      // Перебор качеств
      var qOrderS = ['mythic', 'legendary', 'epic', 'rare', 'green'];
      var qualsS = apGetQualities();
      for (var qi2 = 0; qi2 < qOrderS.length; qi2++) {
        var qk2 = qOrderS[qi2];
        if (!needed[qk2]) continue;
        if (apGetModuleMask(modKey) & apQualityBit(qk2)) continue;
        var qlabel2 = '';
        for (var qq2 = 0; qq2 < qualsS.length; qq2++) { if (qualsS[qq2].key === qk2) { qlabel2 = qualsS[qq2].label; break; } }
        var qLink2 = apFindLinkByText(qlabel2);
        if (qLink2) { apClickLink(qLink2); return; }
        break;
      }
      // Все качества проверены
      apSetModuleMask(modKey, 0); apSave();
      var nextMod = apGetNextModule(modKey);
      if (nextMod) { apPhase = 3; apSave(); apStep(); return; }
      var rm = apGetModuleRefresh(modKey);
      var sw = apRandomDelay(rm[0], rm[1]);
      apTimer = setTimeout(function() { if (apRunning) window.location.reload(); }, sw);
      apShowCountdown(sw); return;
    }
    // На странице другого модуля — кликаем на нужный
    if (apClickModuleTab(modKey)) return;
    apGoHome(); return;
  }

  // ФАЗЫ 7/9: Покупка свитка/камня
  if (apPhase === 7 || apPhase === 9) {
    var mk = (apPhase === 7) ? 'scrolls' : 'stones';
    var mkItems = apGetModuleItems(mk);
    if (page === 'shop_item') {
      var sBuyLink = apFindItemBuyLink(mkItems, apDetectQualityFromURL());
      if (sBuyLink) {
        var sPrice = apParsePriceFromElement(sBuyLink);
        var sName = '';
        var sNameTds = document.getElementsByTagName('td');
        for (var snti = 0; snti < sNameTds.length; snti++) {
          if (apInPanel(sNameTds[snti])) continue;
          var sNameSpans = sNameTds[snti].getElementsByTagName('span');
          for (var snspi = 0; snspi < sNameSpans.length; snspi++) {
            var sncls = sNameSpans[snspi].className || '';
            if (sncls.indexOf('link') >= 0) {
              var sntxt = (sNameSpans[snspi].textContent || sNameSpans[snspi].innerText || '');
              if (sntxt.indexOf('объявл') >= 0 || sntxt.indexOf('клан') >= 0) continue;
              sName = sntxt; break;
            }
          }
          if (sName) break;
        }
        if (!sName) sName = mkItems[0] ? mkItems[0].name : 'предмет';
        if (apCheckNotEnoughMoney()) { apPhase = 11; apSave(); apStep(); return; }
        var sBalance = apGetBalance();
        if (sBalance > 0 && sPrice > sBalance) { apPhase = 11; apSave(); apStep(); return; }
        apLogPurchase(sName, sPrice, mk, apDetectQualityFromURL() || '');
        apPhase = 10; apSave(); apClickLink(sBuyLink); return;
      }
      apPhase = 0; apSave(); apGoHome(); return;
    }
    if (page === 'confirm') { apPhase = 10; apSave(); apStep(); return; }
    apPhase = 0; apSave(); apStep(); return;
  }

  // ФАЗЫ 12/14/16/18: Поиск простых модулей (книги, руны, огранки, рецепты)
  if (apPhase === 12 || apPhase === 14 || apPhase === 16 || apPhase === 18) {
    var sModKey = '';
    if (apPhase === 12) sModKey = 'books';
    if (apPhase === 14) sModKey = 'runes';
    if (apPhase === 16) sModKey = 'facets';
    if (apPhase === 18) sModKey = 'recipes';
    var sItems = apGetModuleItems(sModKey);
    if (apIsOnModulePage(sModKey)) {
      var sFound = apFindSimpleItem(sItems);
      if (sFound) {
        var sBuyPh = sModKey === 'books' ? 13 : sModKey === 'runes' ? 15 : sModKey === 'facets' ? 17 : 19;
        apPhase = sBuyPh; apSave(); apClickLink(sFound); return;
      }
      // Не нашли — следующий модуль
      var sNext = apGetNextModule(sModKey);
      if (sNext) { apPhase = 3; apSave(); apStep(); return; }
      var sRm = apGetModuleRefresh(sModKey);
      var sWait = apRandomDelay(sRm[0], sRm[1]);
      apTimer = setTimeout(function() { if (apRunning) window.location.reload(); }, sWait);
      apShowCountdown(sWait); return;
    }
    // На другой странице — кликаем на нужный модуль
    if (apClickModuleTab(sModKey)) return;
    apGoHome(); return;
  }

  // ФАЗЫ 13/15/17/19: Покупка простого предмета
  if (apPhase === 13 || apPhase === 15 || apPhase === 17 || apPhase === 19) {
    var pModKey = '';
    if (apPhase === 13) pModKey = 'books';
    if (apPhase === 15) pModKey = 'runes';
    if (apPhase === 17) pModKey = 'facets';
    if (apPhase === 19) pModKey = 'recipes';
    var pItems = apGetModuleItems(pModKey);
    if (page === 'shop_item') {
      var pBuyLink = apFindItemBuyLink(pItems, '');
      if (pBuyLink) {
        var pPrice = apParsePriceFromElement(pBuyLink);
        var pName = '';
        var pNameTds = document.getElementsByTagName('td');
        for (var pnti = 0; pnti < pNameTds.length; pnti++) {
          if (apInPanel(pNameTds[pnti])) continue;
          var pNameSpans = pNameTds[pnti].getElementsByTagName('span');
          for (var pnspi = 0; pnspi < pNameSpans.length; pnspi++) {
            var pncls = pNameSpans[pnspi].className || '';
            if (pncls.indexOf('link') >= 0) {
              var pntxt = (pNameSpans[pnspi].textContent || pNameSpans[pnspi].innerText || '');
              if (pntxt.indexOf('объявл') >= 0 || pntxt.indexOf('клан') >= 0) continue;
              pName = pntxt; break;
            }
          }
          if (pName) break;
        }
        if (!pName) pName = pItems[0] ? pItems[0].name : 'предмет';
        if (apCheckNotEnoughMoney()) { apPhase = 11; apSave(); apStep(); return; }
        var pBalance = apGetBalance();
        if (pBalance > 0 && pPrice > pBalance) { apPhase = 11; apSave(); apStep(); return; }
        apLogPurchase(pName, pPrice, pModKey, '');
        apPhase = 10; apSave(); apClickLink(pBuyLink); return;
      }
      apPhase = 0; apSave(); apGoHome(); return;
    }
    if (page === 'confirm') { apPhase = 10; apSave(); apStep(); return; }
    apPhase = 0; apSave(); apStep(); return;
  }

  // ФАЗА 10: Подтверждение
  if (apPhase === 10) {
    if (page === 'confirm') {
      var confirmLink = apFindLinkByText('\u0414\u0430, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e');
      if (!confirmLink) confirmLink = apFindLinkByText('\u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e');
      if (confirmLink) { apPhase = 11; apSave(); apClickLink(confirmLink); return; }
      apPhase = 0; apSave(); apGoHome(); return;
    }
    apPhase = 11; apSave(); apStep(); return;
  }

  // ФАЗА 11: После покупки → продолжить поиск в том же модуле
  if (apPhase === 11) {
    var lastMod = apCurrentModule || '';
    if (lastMod) {
      var info11 = apGetModuleInfo(lastMod);
      if (info11) {
        apPhase = info11.searchPhase;
        apSave();
        if (apIsOnModulePage(lastMod)) { apStep(); return; }
        if (apClickModuleTab(lastMod)) return;
      }
    }
    apPhase = 3; apSave(); apStep(); return;
  }

  apPhase = 0; apSave(); apStep();
}

// === УПРАВЛЕНИЕ ===
function apStart() {
  apRunning = true;
  apCurrentModule = '';
  apBoxQualityMask = 0; apScrollQualityMask = 0; apStoneQualityMask = 0;
  var page = apDetectPage();
  if (page === 'artefact_shop' || page.indexOf('shop_') === 0) { apPhase = 3; }
  else if (page === 'artefact') { apPhase = 2; }
  else if (page === 'shop_item') { apPhase = 3; }
  else if (page === 'confirm') { apPhase = 10; }
  else { apPhase = 0; }
  apSave(); apUpdateBtn(); apStep();
}
function apStop() {
  apRunning = false;
  if (apTimer) { clearTimeout(apTimer); apTimer = null; }
  apUnhighlight(); apSave(); apUpdateBtn();
}
function apUpdateBtn() {
  var btn = document.getElementById('ap-btn');
  if (!btn) return;
  if (apRunning) {
    btn.innerHTML = '\u0421\u0442\u043e\u043f';
    btn.style.backgroundColor = '#cc4444'; btn.style.color = '#fff'; btn.style.borderColor = '#cc4444';
  } else {
    btn.innerHTML = '\u0421\u0442\u0430\u0440\u0442';
    btn.style.backgroundColor = '#333'; btn.style.color = '#6FCD72'; btn.style.borderColor = '#666';
  }
}

// === ВКЛАДКИ UI ===
var apActiveSubtab = 'boxes';
function apSwitchSubtab(name) {
  var subs = ['boxes', 'scrolls', 'stones', 'books', 'runes', 'facets', 'recipes', 'stats'];
  apActiveSubtab = name;
  for (var i = 0; i < subs.length; i++) {
    var btn = document.getElementById('ap-subtab-' + subs[i]);
    var cnt = document.getElementById('ap-stc-' + subs[i]);
    var on = (subs[i] === name);
    if (btn) {
      btn.style.backgroundColor = on ? '#444' : '#222';
      btn.style.color = on ? '#EEC053' : '#666';
      btn.style.borderColor = on ? '#777' : '#444';
    }
    if (cnt) cnt.style.display = on ? 'block' : 'none';
  }
}

// === HTML ГЕНЕРАЦИЯ ===
function apQRow(id, label, minVal, maxVal) {
  return '<div style="margin-bottom:4px;display:flex;align-items:center">' +
    '<span style="color:#aaa;font-size:11px;width:75px;display:inline-block">' + label + '</span>' +
    '<input type="number" id="' + id + '-min" value="' + minVal + '" style="width:40px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;text-align:center" min="0" max="99999" />' +
    '<span style="color:#888;font-size:11px;margin:0 4px">\u2014</span>' +
    '<input type="number" id="' + id + '-max" value="' + maxVal + '" style="width:40px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;text-align:center" min="0" max="99999" />' +
    '<span style="color:#888;font-size:10px;margin-left:3px">\u0441\u0435\u0440.</span>' +
    '</div>';
}

function apItemRow(idx, name, quality, minPrice, maxPrice, hasQuality) {
  var opts = '<option value="mythic"' + (quality === 'mythic' ? ' selected' : '') + '>\u043c\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435</option>' +
    '<option value="legendary"' + (quality === 'legendary' ? ' selected' : '') + '>\u043b\u0435\u0433\u0435\u043d\u0434\u0430\u0440\u043d\u044b\u0435</option>' +
    '<option value="epic"' + (quality === 'epic' ? ' selected' : '') + '>\u044d\u043f\u0438\u0447\u0435\u0441\u043a\u0438\u0435</option>' +
    '<option value="rare"' + (quality === 'rare' ? ' selected' : '') + '>\u0440\u0435\u0434\u043a\u0438\u0435</option>' +
    '<option value="green"' + (quality === 'green' ? ' selected' : '') + '>\u043d\u0435\u043e\u0431\u044b\u0447\u043d\u044b\u0435</option>';
  var qHtml = hasQuality ? '<select class="ap-item-quality" style="width:80px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;font-size:11px">' + opts + '</select>' : '';
  return '<div class="ap-item-row" style="margin-bottom:6px;border:1px solid #444;padding:4px;border-radius:3px">' +
    '<div style="display:flex;align-items:center;gap:3px;margin-bottom:4px">' +
    '<input type="text" class="ap-item-name" value="' + (name || '') + '" placeholder="\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435" style="flex:1;background:#111;color:#EEC053;border:1px solid #555;padding:2px;font-size:11px" />' +
    qHtml +
    '<a href="#" class="ap-item-del" style="color:#cc4444;text-decoration:none;font-size:14px;margin-left:2px">\u00d7</a>' +
    '</div>' +
    '<div style="display:flex;align-items:center;gap:4px">' +
    '<span style="color:#888;font-size:11px">\u0446\u0435\u043d\u0430:</span>' +
    '<input type="number" class="ap-item-min" value="' + (minPrice || 0) + '" style="width:50px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;text-align:center;font-size:11px" min="0" max="99999" />' +
    '<span style="color:#888;font-size:10px">\u2014</span>' +
    '<input type="number" class="ap-item-max" value="' + (maxPrice || 0) + '" style="width:50px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;text-align:center;font-size:11px" min="0" max="99999" />' +
    '<span style="color:#888;font-size:10px">\u0441\u0435\u0440\u0435\u0431\u0440\u043e (1 \u0437\u043e\u043b\u043e\u0442\u043e = 100 \u0441\u0435\u0440\u0435\u0431\u0440\u0430)</span>' +
    '</div>' +
    '</div>';
}

function apSimpleModuleHtml(key, label, enabled, rMin, rMax, items, hasQuality) {
  var id = 'ap-' + key;
  var html = '<div style="margin-bottom:6px">' +
    '<label style="color:#aaa;font-size:12px;cursor:pointer"><input type="checkbox" id="' + id + '-enabled" ' + (enabled ? 'checked' : '') + ' style="vertical-align:middle" /> \u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0443 ' + label.toLowerCase() + '</label>' +
    '</div>' +
    '<div style="margin-bottom:6px">' +
    '<span style="color:#aaa;font-size:12px">\u041e\u0431\u043d\u043e\u0432\u043b. (' + label.toLowerCase() + ', \u0441\u0435\u043a):</span> ' +
    '<input type="number" id="' + id + '-rmin" value="' + rMin + '" style="width:35px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;text-align:center" min="1" max="60" /> \u2014 ' +
    '<input type="number" id="' + id + '-rmax" value="' + rMax + '" style="width:35px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;text-align:center" min="1" max="60" />' +
    '</div>' +
    '<div style="color:#EEC053;font-weight:bold;margin:8px 0 4px">\u0421\u043f\u0438\u0441\u043e\u043a ' + label.toLowerCase() + '</div>' +
    '<div id="' + id + '-list"></div>' +
    '<a href="#" id="' + id + '-add" style="display:inline-block;color:#6FCD72;font-size:12px;text-decoration:none;margin-top:4px;cursor:pointer">+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c</a>' +
    '<div id="' + id + '-display"></div>';
  return html;
}

function apUpdateItemDisplay(key) {
  var dispId = 'ap-' + key + '-display';
  var disp = document.getElementById(dispId);
  if (!disp) return;
  var items = apGetModuleItems(key);
  if (items.length === 0) {
    disp.innerHTML = '<span style="color:#666;font-size:11px">\u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442</span>';
    return;
  }
  var html = '<div style="margin-top:8px;padding-top:6px;border-top:1px solid #444">' +
    '<div style="color:#888;font-size:11px;margin-bottom:4px">\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435:</div><ol style="margin:0;padding-left:20px;color:#aaa;font-size:11px;line-height:1.6">';
  for (var i = 0; i < items.length; i++) {
    var s = items[i];
    var ql = '';
    if (s.quality) {
      switch(s.quality) {
        case 'mythic': ql = ', \u043c\u0438\u0444.' ; break;
        case 'legendary': ql = ', \u043b\u0435\u0433.'; break;
        case 'epic': ql = ', \u044d\u043f.'; break;
        case 'rare': ql = ', \u0440\u0435\u0434.'; break;
        case 'green': ql = ', \u043d\u0435\u043e\u0431.'; break;
      }
    }
    html += '<li>' + (s.name || '?') + ql + ', ' + s.minPrice + '\u2014' + s.maxPrice + ' \u0441.</li>';
  }
  html += '</ol></div>';
  disp.innerHTML = html;
}

// === UI СОЗДАНИЕ ===
function apCreateUI() {
  var oldPanel = document.getElementById('ap-panel');
  if (oldPanel) oldPanel.parentNode.removeChild(oldPanel);

  var panel = document.createElement('div');
  panel.id = 'ap-panel';
  panel.style.position = 'fixed';
  panel.style.bottom = '75px';
  panel.style.right = '10px';
  panel.style.zIndex = '9998';
  var versionInfo = document.createElement('div'); 
  versionInfo.style.cssText = 'color:#666;font-size:10px;text-align:center;margin-bottom:4px;'; 
  versionInfo.textContent = 'v37.1 | Автор: Кузьмин А.';
  
  panel.appendChild(versionInfo);
  document.body.appendChild(panel);

  // Кнопка настроек

  var cfgBtn = document.createElement('a');
  cfgBtn.id = 'ap-cfg-btn';
  cfgBtn.href = '#';
  cfgBtn.style.cssText = 'display:block;width:180px;text-align:center;padding:6px;margin-top:8px;background:#333;border:1px solid #666;color:#888;text-decoration:none;font-family:Arial,sans-serif;font-size:12px;border-radius:4px;cursor:pointer';
  cfgBtn.innerHTML = '\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438';
  cfgBtn.onclick = function(e) {
  e.preventDefault();
  var c = document.getElementById('ap-cfg');
  var rp = document.getElementById('ap-recent-purchases');
  var isOpen = (c.style.display === 'none' || !c.style.display);
  c.style.display = isOpen ? 'block' : 'none';
  if (rp) rp.style.display = isOpen ? 'none' : 'block'; // при открытии скрываем последние покупки
};

  panel.appendChild(cfgBtn);

  // Панель настроек
  var cfg = document.createElement('div');
  cfg.id = 'ap-cfg';
  cfg.style.cssText = 'display:none;background:#1a1a1a;border:1px solid #555;border-radius:6px;padding:10px;width:300px;margin-top:4px;color:#fff;font-family:Arial,sans-serif;font-size:13px;max-height:80vh;overflow-y:auto';

  // Общие настройки
  var commonHtml = '<div style="color:#EEC053;font-weight:bold;margin-bottom:8px">\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438</div>' +
    '<div style="margin-bottom:6px"><span style="color:#aaa;font-size:12px">\u041f\u0430\u0443\u0437\u0430:</span> ' +
    '<input type="number" id="ap-delay-input" value="' + (apDelay / 1000) + '" style="width:40px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;text-align:center" min="1" max="60" /> \u0441\u0435\u043a</div>' +
    '<div style="margin-bottom:6px"><span style="color:#aaa;font-size:12px">\u041c\u0438\u043d. \u0441\u0435\u0440\u0435\u0431\u0440\u043e:</span> ' +
    '<input type="number" id="ap-msilver-input" value="' + apMinSilver + '" style="width:50px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;text-align:center" min="0" max="99999" /></div>';

  // Под-вкладки
  var subs = ['boxes', 'scrolls', 'stones', 'books', 'runes', 'facets', 'recipes', 'stats'];
  var subLabels = {boxes:'\u042f\u0449\u0438\u043a\u0438',scrolls:'\u0421\u0432\u0438\u0442\u043a\u0438',stones:'\u041a\u0430\u043c\u043d\u0438',books:'\u041a\u043d\u0438\u0433\u0438',runes:'\u0420\u0443\u043d\u044b',facets:'\u041e\u0433\u0440\u0430\u043d\u043a\u0438',recipes:'\u0420\u0435\u0446\u0435\u043f\u0442\u044b',stats:'\u0421\u0442\u0430\u0442.'};
  var tabsHtml = '<div style="margin-bottom:6px;display:flex;flex-wrap:wrap;gap:2px;border-bottom:1px solid #444;padding-bottom:6px">';
  for (var si = 0; si < subs.length; si++) {
    tabsHtml += '<a href="#" id="ap-subtab-' + subs[si] + '" style="display:inline-block;padding:3px 6px;font-size:10px;text-decoration:none;border:1px solid;border-radius:3px;cursor:pointer">' + subLabels[subs[si]] + '</a>';
  }
  tabsHtml += '</div>';
  cfg.innerHTML = commonHtml + tabsHtml;

  // Ящики
  var boxesHtml = '<div id="ap-stc-boxes">' +
    '<div style="margin-bottom:6px"><label style="color:#aaa;font-size:12px;cursor:pointer"><input type="checkbox" id="ap-box-enabled" ' + (apBoxBuyEnabled ? 'checked' : '') + ' /> \u041f\u043e\u043a\u0443\u043f\u043a\u0430 \u044f\u0449\u0438\u043a\u043e\u0432</label></div>' +
    '<div style="margin-bottom:6px"><span style="color:#aaa;font-size:12px">\u041e\u0431\u043d\u043e\u0432\u043b. (\u0441\u0435\u043a):</span> ' +
    '<input type="number" id="ap-box-rmin" value="' + apBoxRefreshMin + '" style="width:35px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;text-align:center" min="1" max="60" /> \u2014 ' +
    '<input type="number" id="ap-box-rmax" value="' + apBoxRefreshMax + '" style="width:35px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;text-align:center" min="1" max="60" /></div>' +
    '<div style="color:#EEC053;font-weight:bold;margin:8px 0 4px">\u042f\u0449\u0438\u043a\u0438 (\u0446\u0435\u043d\u0430 \u0432 \u0441\u0435\u0440\u0435\u0431\u0440\u0435)</div>' +
    '<div style="color:#888;font-size:10px;margin-bottom:4px">0\u20140 = \u0432\u044b\u043a\u043b.</div>' +
    apQRow('ap-mythic', '\u041c\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435', apQMythicMin, apQMythicMax) +
    apQRow('ap-legendary', '\u041b\u0435\u0433\u0435\u043d\u0434\u0430\u0440\u043d\u044b\u0435', apQLegendaryMin, apQLegendaryMax) +
    apQRow('ap-epic', '\u042d\u043f\u0438\u0447\u0435\u0441\u043a\u0438\u0435', apQEpicMin, apQEpicMax) +
    apQRow('ap-rare', '\u0420\u0435\u0434\u043a\u0438\u0435', apQRareMin, apQRareMax) +
    apQRow('ap-green', '\u041d\u0435\u043e\u0431\u044b\u0447\u043d\u044b\u0435', apQGreenMin, apQGreenMax) +
    '</div>';

  // Свитки
  var scrollsHtml = '<div id="ap-stc-scrolls" style="display:none">' +
    apSimpleModuleHtml('scrolls', '\u0441\u0432\u0438\u0442\u043a\u043e\u0432', apScrollEnabled, apScrollRefreshMin, apScrollRefreshMax, apScrolls, true) + '</div>';
  // Камни
  var stonesHtml = '<div id="ap-stc-stones" style="display:none">' +
    apSimpleModuleHtml('stones', '\u043a\u0430\u043c\u043d\u0435\u0439', apStoneEnabled, apStoneRefreshMin, apStoneRefreshMax, apStones, true) + '</div>';
  // Книги
  var booksHtml = '<div id="ap-stc-books" style="display:none">' +
    apSimpleModuleHtml('books', '\u043a\u043d\u0438\u0433', apBookEnabled, apBookRefreshMin, apBookRefreshMax, apBooks, false) + '</div>';
  // Руны
  var runesHtml = '<div id="ap-stc-runes" style="display:none">' +
    apSimpleModuleHtml('runes', '\u0440\u0443\u043d', apRuneEnabled, apRuneRefreshMin, apRuneRefreshMax, apRunes, false) + '</div>';
  // Огранки
  var facetsHtml = '<div id="ap-stc-facets" style="display:none">' +
    apSimpleModuleHtml('facets', '\u043e\u0433\u0440\u0430\u043d\u043e\u043a', apFacetEnabled, apFacetRefreshMin, apFacetRefreshMax, apFacets, false) + '</div>';
  // Рецепты
  var recipesHtml = '<div id="ap-stc-recipes" style="display:none">' +
    apSimpleModuleHtml('recipes', '\u0440\u0435\u0446\u0435\u043f\u0442\u043e\u0432', apRecipeEnabled, apRecipeRefreshMin, apRecipeRefreshMax, apRecipes, false) + '</div>';
  // Статистика
  var statsHtml = '<div id="ap-stc-stats" style="display:none"></div>';

  var saveHtml = '<div style="text-align:center;margin-top:8px">' +
    '<button id="ap-cfg-save" style="background:#6FCD72;color:#000;border:none;padding:5px 16px;font-weight:bold;font-size:12px;cursor:pointer;border-radius:4px">\u0421\u041e\u0425\u0420\u0410\u041d\u0418\u0422\u042c</button></div>' +
    '<div id="ap-cfg-msg" style="font-size:11px;display:none;text-align:center;margin-top:6px"></div>' +
    '<div style="text-align:center;margin-top:6px">' +
    '<button id="ap-cfg-clearall" style="background:#cc4444;color:#fff;border:none;padding:4px 12px;font-size:11px;cursor:pointer;border-radius:4px">\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435</button>' +
    '</div>';

  cfg.innerHTML += boxesHtml + scrollsHtml + stonesHtml + booksHtml + runesHtml + facetsHtml + recipesHtml + statsHtml + saveHtml;
  panel.appendChild(cfg);

  // Заполняем списки
  function fillList(key, items, hasQuality) {
    var listEl = document.getElementById('ap-' + key + '-list');
    if (!listEl) return;
    for (var i = 0; i < items.length; i++) {
      var s = items[i];
      var tmp = document.createElement('div');
      tmp.innerHTML = apItemRow(i, s.name, s.quality, s.minPrice, s.maxPrice, hasQuality);
      while (tmp.firstChild) listEl.appendChild(tmp.firstChild);
    }
    apUpdateItemDisplay(key);
  }
  fillList('scrolls', apScrolls, true);
  fillList('stones', apStones, true);
  fillList('books', apBooks, false);
  fillList('runes', apRunes, false);
  fillList('facets', apFacets, false);
  fillList('recipes', apRecipes, false);

  // Обработчики под-вкладок
  for (var si2 = 0; si2 < subs.length; si2++) {
    (function(s) {
      var btn = document.getElementById('ap-subtab-' + s);
      if (btn) btn.onclick = function(e) { e.preventDefault(); apSwitchSubtab(s); if (s === 'stats') apUpdateStatsDisplay(); };
    })(subs[si2]);
  }
  apSwitchSubtab('boxes');
  apUpdateStatsDisplay();

  // Кнопки "Добавить"
  var addKeys = ['scrolls', 'stones', 'books', 'runes', 'facets', 'recipes'];
  var addHasQ = {scrolls:true, stones:true, books:false, runes:false, facets:false, recipes:false};
  for (var ai = 0; ai < addKeys.length; ai++) {
    (function(key, hq) {
      var addBtn = document.getElementById('ap-' + key + '-add');
      if (addBtn) addBtn.onclick = function(e) {
        e.preventDefault();
        var list = document.getElementById('ap-' + key + '-list');
        if (!list) return;
        var div = document.createElement('div');
        div.innerHTML = apItemRow(0, '', 'rare', 0, 0, hq);
        while (div.firstChild) list.appendChild(div.firstChild);
      };
    })(addKeys[ai], addHasQ[addKeys[ai]]);
  }

  // Удаление строк
  for (var di = 0; di < addKeys.length; di++) {
    (function(key) {
      var listEl = document.getElementById('ap-' + key + '-list');
      if (listEl) listEl.onclick = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (target && target.className === 'ap-item-del') {
          e.preventDefault();
          var row = target.parentNode;
          while (row && row.className !== 'ap-item-row') row = row.parentNode;
          if (row) row.parentNode.removeChild(row);
        }
      };
    })(addKeys[di]);
  }

  // Кнопка Старт/Стоп
  var btn = document.createElement('a');
  btn.id = 'ap-btn';
  btn.href = '#';
  btn.style.cssText = 'display:block;width:180px;text-align:center;padding:8px;margin-top:8px;background:#333;border:1px solid #666;color:#EEC053;text-decoration:none;font-family:Arial,sans-serif;font-size:13px;border-radius:4px;cursor:pointer';
  btn.innerHTML = '\u0421\u0442\u0430\u0440\u0442';
  btn.onclick = function(e) { e.preventDefault(); if (apRunning) apStop(); else apStart(); };
  panel.appendChild(btn);
  apUpdateBtn();
// Блок последних покупок
var recent = document.createElement('div');
recent.id = 'ap-recent-purchases';
recent.style.cssText = 'display:block;width:180px;margin-top:8px;background:#222;border:1px solid #555;border-radius:4px;color:#aaa;font-family:Arial,sans-serif;font-size:11px;padding:6px;max-height:200px;overflow-y:auto;';
panel.appendChild(recent);
apUpdateRecentPurchases();

  // Сохранение
  var cfgSave = document.getElementById('ap-cfg-save');
  if (cfgSave) cfgSave.onclick = function(e) {
    e.preventDefault();
    var msgBox = document.getElementById('ap-cfg-msg');
    function val(id) { var el = document.getElementById(id); return el ? parseInt(el.value, 10) : NaN; }
    function swap(a, b) { return a > b ? [b, a] : [a, b]; }
    var dv = val('ap-delay-input');
    var ms = val('ap-msilver-input');
    if (isNaN(dv) || dv < 1 || dv > 60) { msgBox.style.display='block'; msgBox.textContent='\u041f\u0430\u0443\u0437\u0430: 1-60'; msgBox.style.color='#cc4444'; return; }
    if (isNaN(ms) || ms < 0) { msgBox.style.display='block'; msgBox.textContent='\u0421\u0435\u0440\u0435\u0431\u0440\u043e: 0+'; msgBox.style.color='#cc4444'; return; }
    apDelay = dv * 1000; apMinSilver = ms;
    apBoxBuyEnabled = document.getElementById('ap-box-enabled').checked;
    var r;
    r = swap(val('ap-box-rmin'), val('ap-box-rmax')); apBoxRefreshMin = r[0]; apBoxRefreshMax = r[1];
    r = swap(val('ap-mythic-min'), val('ap-mythic-max')); apQMythicMin = r[0]; apQMythicMax = r[1];
    r = swap(val('ap-legendary-min'), val('ap-legendary-max')); apQLegendaryMin = r[0]; apQLegendaryMax = r[1];
    r = swap(val('ap-epic-min'), val('ap-epic-max')); apQEpicMin = r[0]; apQEpicMax = r[1];
    r = swap(val('ap-rare-min'), val('ap-rare-max')); apQRareMin = r[0]; apQRareMax = r[1];
    r = swap(val('ap-green-min'), val('ap-green-max')); apQGreenMin = r[0]; apQGreenMax = r[1];
    apScrollEnabled = document.getElementById('ap-scrolls-enabled').checked;
    r = swap(val('ap-scrolls-rmin'), val('ap-scrolls-rmax')); apScrollRefreshMin = r[0]; apScrollRefreshMax = r[1];
    apStoneEnabled = document.getElementById('ap-stones-enabled').checked;
    r = swap(val('ap-stones-rmin'), val('ap-stones-rmax')); apStoneRefreshMin = r[0]; apStoneRefreshMax = r[1];
    apBookEnabled = document.getElementById('ap-books-enabled').checked;
    r = swap(val('ap-books-rmin'), val('ap-books-rmax')); apBookRefreshMin = r[0]; apBookRefreshMax = r[1];
    apRuneEnabled = document.getElementById('ap-runes-enabled').checked;
    r = swap(val('ap-runes-rmin'), val('ap-runes-rmax')); apRuneRefreshMin = r[0]; apRuneRefreshMax = r[1];
    apFacetEnabled = document.getElementById('ap-facets-enabled').checked;
    r = swap(val('ap-facets-rmin'), val('ap-facets-rmax')); apFacetRefreshMin = r[0]; apFacetRefreshMax = r[1];
    apRecipeEnabled = document.getElementById('ap-recipes-enabled').checked;
    r = swap(val('ap-recipes-rmin'), val('ap-recipes-rmax')); apRecipeRefreshMin = r[0]; apRecipeRefreshMax = r[1];

    // Чтение списков
    var listKeys = ['scrolls', 'stones', 'books', 'runes', 'facets', 'recipes'];
    var listTargets = {scrolls:'apScrolls', stones:'apStones', books:'apBooks', runes:'apRunes', facets:'apFacets', recipes:'apRecipes'};
    var hasQMap = {scrolls:true, stones:true, books:false, runes:false, facets:false, recipes:false};
    for (var li = 0; li < listKeys.length; li++) {
      var key = listKeys[li];
      var rows = document.getElementById('ap-' + key + '-list');
      var newItems = [];
      if (rows) {
        var rowEls = rows.getElementsByClassName('ap-item-row');
        for (var ri = 0; ri < rowEls.length; ri++) {
          var name = rowEls[ri].getElementsByTagName('input')[0].value;
          var quality = '';
          if (hasQMap[key]) {
            var sel = rowEls[ri].getElementsByTagName('select');
            if (sel.length > 0) quality = sel[0].value;
          }
          var inputs = rowEls[ri].getElementsByTagName('input');
          var minP = parseInt(inputs[1].value, 10) || 0;
          var maxP = parseInt(inputs[2].value, 10) || 0;
          if (name && name.trim()) newItems.push({ name: name.trim(), quality: quality, minPrice: minP, maxPrice: maxP });
        }
      }
      switch(key) {
        case 'scrolls': apScrolls = newItems; break;
        case 'stones': apStones = newItems; break;
        case 'books': apBooks = newItems; break;
        case 'runes': apRunes = newItems; break;
        case 'facets': apFacets = newItems; break;
        case 'recipes': apRecipes = newItems; break;
      }
      apUpdateItemDisplay(key);
    }
    var sdc = val('ap-stats-count');
    if (!isNaN(sdc) && sdc >= 1 && sdc <= 500) apStatsDisplayCount = sdc;
    apSave();
    msgBox.style.display = 'block';
    msgBox.textContent = '\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e!';
    msgBox.style.color = '#6FCD72';
    setTimeout(function() { msgBox.style.display = 'none'; }, 1500);
  };
}

// === ЗАПУСК ===
function apInit() {
  if (!document.body) { setTimeout(apInit, 100); return; }
  apCreateUI();
  // Кнопка очистки всех данных
  var clearAllBtn = document.getElementById('ap-cfg-clearall');
  if (clearAllBtn) clearAllBtn.onclick = function(e) {
    e.preventDefault();
    if (confirm('\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b? \u0412\u0441\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u0441\u043f\u0438\u0441\u043a\u0438 \u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b!')) {
      apClearAllData();
    }
  };
  if (apRunning) { apStep(); }
}
// Экранирование HTML (защита от спецсимволов в названиях)
function apEsc(s) {
  return String(s).replace(/[&<>"']/g, function(c) {
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}

// Компактный блок "Последние покупки" рядом с кнопками
function apUpdateRecentPurchases() {
  var container = document.getElementById('ap-recent-purchases');
  if (!container) return;

  var html = '<div style="font-weight:bold;color:#EEC053;margin-bottom:4px;">Последние покупки</div>';

  if (!apPurchases || apPurchases.length === 0) {
    html += '<div style="color:#777;">Пока нет</div>';
  } else {
    var maxCount = 5; // сколько последних покупок показывать
    if (maxCount > apPurchases.length) maxCount = apPurchases.length;

    for (var i = 0; i < maxCount; i++) {
      var p = apPurchases[i];
      html += '<div style="border-top:1px solid #444;padding:3px 0;">'
        + '<span>' + apEsc(p.name) + '</span> '
        + '<span style="color:#8ad;">' + (p.quality && p.quality.trim() !== '' ? '[' + apEsc(p.quality) + ']' : '\u00a0\u2014\u00a0') + '</span> '
        + '<span style="color:#6FCD72;">' + apFormatPrice(p.price) + '</span>'
        + '</div>';
		
    }
	html += '<div style="margin-bottom:6px;text-align:center;"><a href="https://t.me/KUZAND" target="_blank" style="color:#6FCD72;font-size:10px;">✎ Написать автору</a></div>';
  }
  container.innerHTML = html;
}
// === КОНЕЦ СКРИПТА === 
// Версия: 37 
// Дата обновления: 10.10.2026 
// Автор: Андрей Кузьмин 
// Поддержка: Opera 12.x UserJS

apInit();

// ================= ПАТЧ v39: ЯЩИКИ СПИСКОМ (как свитки) =================
// Вставить в САМЫЙ КОНЕЦ файла. Предыдущий патч v38 (если был) — удалить.

var apBoxes = [];
var apCurrentBoxQuality = '';

// === Число с учётом пробелов-разделителей («1 234» → 1234) ===
function apParseNum(txt) {
  return parseInt(String(txt).replace(/\D/g, ''), 10) || 0;
}
// Цена из элемента, а если её там нет — из родительского
function apPriceAround(el) {
  var p = apParsePriceFromElement(el);
  if (p <= 0 && el.parentNode) p = apParsePriceFromElement(el.parentNode);
  return p;
}

// === Баланс: устойчивый парсинг ===
function apGetSilver() {
  var imgs = document.getElementsByTagName('img');
  var gold = 0, silver = 0, foundGold = false, foundSilver = false;
  for (var i = 0; i < imgs.length; i++) {
    if (apInPanel(imgs[i])) continue;
    var src = (imgs[i].getAttribute('src') || '').toLowerCase();
    if (!foundGold && src.indexOf('money_gold') >= 0) {
      var nG = imgs[i].nextSibling;
      while (nG && nG.nodeType !== 1) nG = nG.nextSibling;
      if (nG && nG.tagName && nG.tagName.toLowerCase() === 'span') gold = apParseNum(nG.textContent || nG.innerText || '0');
      foundGold = true;
    }
    if (!foundSilver && src.indexOf('money_silver') >= 0) {
      var nS = imgs[i].nextSibling;
      while (nS && nS.nodeType !== 1) nS = nS.nextSibling;
      if (nS && nS.tagName && nS.tagName.toLowerCase() === 'span') silver = apParseNum(nS.textContent || nS.innerText || '0');
      foundSilver = true;
    }
    if (foundGold && foundSilver) break;
  }
  if (!foundSilver) return -1;
  return gold * 100 + silver;
}

function apGetBalance() {
  var divs = document.getElementsByTagName('div');
  for (var i = 0; i < divs.length; i++) {
    if (apInPanel(divs[i])) continue;
    var cls = divs[i].className || '';
    if (cls.indexOf('cntr') < 0) continue;
    var imgs = divs[i].getElementsByTagName('img');
    var gold = 0, silver = 0, foundGold = false, foundSilver = false;
    for (var j = 0; j < imgs.length; j++) {
      var src = (imgs[j].getAttribute('src') || '').toLowerCase();
      if (!foundGold && src.indexOf('money_gold') >= 0) {
        var ne = imgs[j].nextSibling;
        while (ne && ne.nodeType !== 1) ne = ne.nextSibling;
        if (ne && ne.tagName && ne.tagName.toLowerCase() === 'span') gold = apParseNum(ne.textContent || ne.innerText || '0');
        foundGold = true;
      }
      if (!foundSilver && src.indexOf('money_silver') >= 0) {
        var ne2 = imgs[j].nextSibling;
        while (ne2 && ne2.nodeType !== 1) ne2 = ne2.nextSibling;
        if (ne2 && ne2.tagName && ne2.tagName.toLowerCase() === 'span') silver = apParseNum(ne2.textContent || ne2.innerText || '0');
        foundSilver = true;
      }
      if (foundGold && foundSilver) break;
    }
    if (foundGold || foundSilver) return gold * 100 + silver;
  }
  return apGetSilver();
}

// === Ящики теперь — именованный модуль со списком (как свитки) ===
function apGetModuleItems(moduleKey) {
  switch (moduleKey) {
    case 'boxes': return apBoxes;
    case 'scrolls': return apScrolls;
    case 'stones': return apStones;
    case 'books': return apBooks;
    case 'runes': return apRunes;
    case 'facets': return apFacets;
    case 'recipes': return apRecipes;
  }
  return [];
}
function apBoxEnabled() {
  return apBoxBuyEnabled && apBoxes.length > 0;
}
function apGetNeededBoxQualities() {
  var set = {};
  for (var i = 0; i < apBoxes.length; i++) {
    if (apBoxes[i].quality) set[apBoxes[i].quality] = true;
  }
  return set;
}

// === Поиск ящика в списке магазина (t/3): по списку, а не по диапазонам качеств ===
function apFindBox() {
  var tables = document.getElementsByTagName('table');
  var balance = apGetBalance();
  for (var i = 0; i < tables.length; i++) {
    var t = tables[i];
    if (apInPanel(t)) continue;
    var tds = t.getElementsByTagName('td');
    if (tds.length < 2) continue;
    var td1 = tds[1];
    var qIcon = '';
    var qImgs = td1.getElementsByTagName('img');
    for (var qi = 0; qi < qImgs.length; qi++) {
      var qKey = apIconToQuality(qImgs[qi].getAttribute('src') || '');
      if (qKey) { qIcon = qKey; break; }
    }
    if (!qIcon) continue;
    var links = td1.getElementsByTagName('a');
    if (links.length === 0) continue; // строка «продано» — ссылки нет
    var price = apParsePriceFromElement(td1);
    var name = (links[0].textContent || links[0].innerText || '').toLowerCase();
    for (var k = 0; k < apBoxes.length; k++) {
      var s = apBoxes[k];
      if (!s.name && !s.quality) continue;
      if (s.quality && s.quality !== qIcon) continue;
      var want = (s.name || '').toLowerCase();
      if (want && name.indexOf(want) < 0) continue;
      var mn = s.minPrice, mx = s.maxPrice;
      if (mn > mx) { var tmp = mn; mn = mx; mx = tmp; }
      if (mn === 0 && mx === 0) continue; // цену не задали — строка неактивна
      if (price >= mn && price <= mx) {
        if (balance > 0 && price > balance) continue; // не хватает денег — смотрим следующий ящик
        apCurrentBoxQuality = qIcon;
        apSave();
        return links[0];
      }
    }
  }
  return null;
}

// === Поиск «Купить» на странице ящика (фаза 5) ===
function apFindBuyLinkForBoxes() {
  var qKey = apDetectQualityFromURL() || '';
  if (!qKey) {
    var imgs = document.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {
      if (apInPanel(imgs[i])) continue;
      var q = apIconToQuality(imgs[i].getAttribute('src') || '');
      if (q) { qKey = q; break; }
    }
  }
  if (!qKey) qKey = apCurrentBoxQuality || '';

  var all = document.getElementsByTagName('a');
  var candidate = null;
  for (var j = 0; j < all.length; j++) {
    if (apInPanel(all[j])) continue;
    var txt = (all[j].textContent || all[j].innerText || '').toLowerCase();
    if (txt.indexOf('купить') < 0) continue;
    var price = apPriceAround(all[j]);
    for (var k = 0; k < apBoxes.length; k++) {
      var s = apBoxes[k];
      if (!s.name && !s.quality) continue;
      if (s.quality && qKey && s.quality !== qKey) continue;
      var mn = s.minPrice, mx = s.maxPrice;
      if (mn > mx) { var t = mn; mn = mx; mx = t; }
      if (price >= mn && price <= mx) {
        var balance = apGetBalance();
        if (balance > 0 && price > balance) continue;
        return all[j];
      }
      // цену со страницы разобрать не удалось — это тот ящик, который мы сами выбрали в списке
      if (price === 0 && !candidate) candidate = all[j];
    }
  }
  if (candidate && apBoxes.length > 0) return candidate;
  return null;
}

// === Тот же фикс цены — для покупки свитков/камней/книг и т.д. ===
if (!apFindItemBuyLink.__apPriceFix) {
  var apFindItemBuyLinkOrig = apFindItemBuyLink;
  var apFindItemBuyLinkPatched = function (items, qualityKey) {
    var r = apFindItemBuyLinkOrig(items, qualityKey);
    if (r) return r;
    var all = document.getElementsByTagName('a');
    for (var j = 0; j < all.length; j++) {
      if (apInPanel(all[j])) continue;
      var txt = (all[j].textContent || all[j].innerText || '').toLowerCase();
      if (txt.indexOf('купить') < 0) continue;
      var price = apPriceAround(all[j]);
      if (price <= 0) continue;
      for (var k = 0; k < items.length; k++) {
        var s = items[k];
        if (!s.name) continue;
        if (qualityKey && s.quality && s.quality !== qualityKey) continue;
        var mn = s.minPrice, mx = s.maxPrice;
        if (mn > mx) { var t = mn; mn = mx; mx = t; }
        if (price >= mn && price <= mx) {
          var balance = apGetBalance();
          if (balance > 0 && price > balance) continue;
          return all[j];
        }
      }
    }
    return null;
  };
  apFindItemBuyLinkPatched.__apPriceFix = true;
  apFindItemBuyLink = apFindItemBuyLinkPatched;
}

// === Сохранение / загрузка (полные версии, затирают прежние) ===
function apSave() {
  apSetCookie('apRunning', apRunning ? '1' : '0');
  apSetCookie('apDelay', '' + apDelay);
  apSetCookie('apPhase', '' + apPhase);
  apSetCookie('apBoxQualityMask', '' + apBoxQualityMask);
  apSetCookie('apScrollQualityMask', '' + apScrollQualityMask);
  apSetCookie('apStoneQualityMask', '' + apStoneQualityMask);
  apSetCookie('apCurrentModule', apCurrentModule || '');
  apSetCookie('apMinSilver', '' + apMinSilver);
  apSetCookie('apBoxBuyEnabled', apBoxBuyEnabled ? '1' : '0');
  apSetCookie('apBoxRefreshMin', '' + apBoxRefreshMin);
  apSetCookie('apBoxRefreshMax', '' + apBoxRefreshMax);
  apSetCookie('apQMythicMin', '' + apQMythicMin); apSetCookie('apQMythicMax', '' + apQMythicMax);
  apSetCookie('apQLegendaryMin', '' + apQLegendaryMin); apSetCookie('apQLegendaryMax', '' + apQLegendaryMax);
  apSetCookie('apQEpicMin', '' + apQEpicMin); apSetCookie('apQEpicMax', '' + apQEpicMax);
  apSetCookie('apQRareMin', '' + apQRareMin); apSetCookie('apQRareMax', '' + apQRareMax);
  apSetCookie('apQGreenMin', '' + apQGreenMin); apSetCookie('apQGreenMax', '' + apQGreenMax);
  apSetCookie('apScrollEnabled', apScrollEnabled ? '1' : '0');
  apSetCookie('apScrollRefreshMin', '' + apScrollRefreshMin); apSetCookie('apScrollRefreshMax', '' + apScrollRefreshMax);
  apSetCookie('apStoneEnabled', apStoneEnabled ? '1' : '0');
  apSetCookie('apStoneRefreshMin', '' + apStoneRefreshMin); apSetCookie('apStoneRefreshMax', '' + apStoneRefreshMax);
  apSetCookie('apBookEnabled', apBookEnabled ? '1' : '0');
  apSetCookie('apBookRefreshMin', '' + apBookRefreshMin); apSetCookie('apBookRefreshMax', '' + apBookRefreshMax);
  apSetCookie('apRuneEnabled', apRuneEnabled ? '1' : '0');
  apSetCookie('apRuneRefreshMin', '' + apRuneRefreshMin); apSetCookie('apRuneRefreshMax', '' + apRuneRefreshMax);
  apSetCookie('apFacetEnabled', apFacetEnabled ? '1' : '0');
  apSetCookie('apFacetRefreshMin', '' + apFacetRefreshMin); apSetCookie('apFacetRefreshMax', '' + apFacetRefreshMax);
  apSetCookie('apRecipeEnabled', apRecipeEnabled ? '1' : '0');
  apSetCookie('apRecipeRefreshMin', '' + apRecipeRefreshMin); apSetCookie('apRecipeRefreshMax', '' + apRecipeRefreshMax);
  apSetCookie('apScrolls', apItemsToJson(apScrolls));
  apSetCookie('apStones', apItemsToJson(apStones));
  apSetCookie('apBooks', apItemsToJson(apBooks));
  apSetCookie('apRunes', apItemsToJson(apRunes));
  apSetCookie('apFacets', apItemsToJson(apFacets));
  apSetCookie('apRecipes', apItemsToJson(apRecipes));
  apSetCookie('apBoxes', apItemsToJson(apBoxes));
  apSetCookie('apCurrentBoxQuality', apCurrentBoxQuality || '');
  apSetCookie('apStatsDisplayCount', '' + apStatsDisplayCount);
}

function apLoad() {
  function b(k) { var v = apGetCookie(k); return v === '1'; }
  function n(k, def) { var v = apGetCookie(k); if (v === '') return def; var p = parseInt(v, 10); return isNaN(p) ? def : p; }
  apRunning = b('apRunning');
  apDelay = n('apDelay', 2000);
  apPhase = n('apPhase', 0);
  apBoxQualityMask = n('apBoxQualityMask', 0);
  apScrollQualityMask = n('apScrollQualityMask', 0);
  apStoneQualityMask = n('apStoneQualityMask', 0);
  apCurrentModule = apGetCookie('apCurrentModule') || '';
  apMinSilver = n('apMinSilver', 50);
  apBoxBuyEnabled = b('apBoxBuyEnabled');
  apBoxRefreshMin = n('apBoxRefreshMin', 1); apBoxRefreshMax = n('apBoxRefreshMax', 2);
  apQMythicMin = n('apQMythicMin', 0); apQMythicMax = n('apQMythicMax', 0);
  apQLegendaryMin = n('apQLegendaryMin', 0); apQLegendaryMax = n('apQLegendaryMax', 0);
  apQEpicMin = n('apQEpicMin', 0); apQEpicMax = n('apQEpicMax', 0);
  apQRareMin = n('apQRareMin', 0); apQRareMax = n('apQRareMax', 0);
  apQGreenMin = n('apQGreenMin', 0); apQGreenMax = n('apQGreenMax', 0);
  apScrollEnabled = b('apScrollEnabled'); apScrollRefreshMin = n('apScrollRefreshMin', 1); apScrollRefreshMax = n('apScrollRefreshMax', 2);
  apStoneEnabled = b('apStoneEnabled'); apStoneRefreshMin = n('apStoneRefreshMin', 1); apStoneRefreshMax = n('apStoneRefreshMax', 2);
  apBookEnabled = b('apBookEnabled'); apBookRefreshMin = n('apBookRefreshMin', 1); apBookRefreshMax = n('apBookRefreshMax', 2);
  apRuneEnabled = b('apRuneEnabled'); apRuneRefreshMin = n('apRuneRefreshMin', 1); apRuneRefreshMax = n('apRuneRefreshMax', 2);
  apFacetEnabled = b('apFacetEnabled'); apFacetRefreshMin = n('apFacetRefreshMin', 1); apFacetRefreshMax = n('apFacetRefreshMax', 2);
  apRecipeEnabled = b('apRecipeEnabled'); apRecipeRefreshMin = n('apRecipeRefreshMin', 1); apRecipeRefreshMax = n('apRecipeRefreshMax', 2);
  apScrolls = apItemsFromJson(apGetCookie('apScrolls'));
  apStones = apItemsFromJson(apGetCookie('apStones'));
  apBooks = apItemsFromJson(apGetCookie('apBooks'));
  apRunes = apItemsFromJson(apGetCookie('apRunes'));
  apFacets = apItemsFromJson(apGetCookie('apFacets'));
  apRecipes = apItemsFromJson(apGetCookie('apRecipes'));
  apBoxes = apItemsFromJson(apGetCookie('apBoxes'));
  apPurchases = apPurchasesFromJson(apGetCookie('apPurchases'));
  apStatsDisplayCount = n('apStatsDisplayCount', 10);
  apCurrentBoxQuality = apGetCookie('apCurrentBoxQuality') || '';
}

// === Очистка данных тоже стирает список ящиков ===
if (!apClearAllData.__apBoxesClear) {
  var apClearAllDataOrig = apClearAllData;
  var apClearAllDataNew = function () {
    apClearAllDataOrig();
    apBoxes = [];
    apCurrentBoxQuality = '';
    apSave();
  };
  apClearAllDataNew.__apBoxesClear = true;
  apClearAllData = apClearAllDataNew;
}

// === Вкладка «Ящики»: редактор списка вместо чекбоксов качеств ===
function apUpdateBoxesDisplay() {
  var disp = document.getElementById('ap-box2-display');
  if (!disp) return;
  if (!apBoxes.length) {
    disp.innerHTML = '<span style="color:#666;font-size:11px">список пуст</span>';
    return;
  }
  var html = '<div style="margin-top:8px;padding-top:6px;border-top:1px solid #444">' +
    '<div style="color:#888;font-size:11px;margin-bottom:4px">Сохранённые:</div>' +
    '<ol style="margin:0;padding-left:20px;color:#aaa;font-size:11px;line-height:1.6">';
  for (var i = 0; i < apBoxes.length; i++) {
    var s = apBoxes[i];
    var ql = '';
    if (s.quality) {
      switch (s.quality) {
        case 'mythic': ql = ', миф.'; break;
        case 'legendary': ql = ', лег.'; break;
        case 'epic': ql = ', эп.'; break;
        case 'rare': ql = ', ред.'; break;
        case 'green': ql = ', необ.'; break;
      }
    }
    html += '<li>' + apEsc(s.name || 'ящик') + ql + ' — ' + apFormatPrice(s.minPrice) + ' … ' + apFormatPrice(s.maxPrice) + '</li>';
  }
  html += '</ol></div>';
  disp.innerHTML = html;
}

function apReadBoxesFromDOM() {
  var listEl = document.getElementById('ap-box2-list');
  if (listEl) {
    var newItems = [];
    var rows = listEl.getElementsByClassName('ap-item-row');
    for (var i = 0; i < rows.length; i++) {
      var inputs = rows[i].getElementsByTagName('input');
      if (!inputs || inputs.length < 3) continue;
      var name = inputs[0].value.trim();
      var sel = rows[i].getElementsByTagName('select');
      var quality = sel.length > 0 ? sel[0].value : '';
      var minP = parseInt(inputs[1].value, 10) || 0;
      var maxP = parseInt(inputs[2].value, 10) || 0;
      if (name || quality) newItems.push({ name: name, quality: quality, minPrice: minP, maxPrice: maxP });
    }
    apBoxes = newItems;
  }
  var en = document.getElementById('ap-box2-enabled');
  if (en) apBoxBuyEnabled = en.checked;
  var rmin = document.getElementById('ap-box2-rmin');
  if (rmin) { var v1 = parseInt(rmin.value, 10); if (!isNaN(v1) && v1 >= 1 && v1 <= 60) apBoxRefreshMin = v1; }
  var rmax = document.getElementById('ap-box2-rmax');
  if (rmax) { var v2 = parseInt(rmax.value, 10); if (!isNaN(v2) && v2 >= 1 && v2 <= 60) apBoxRefreshMax = v2; }
  apSave();
  apUpdateBoxesDisplay();
}

function apRenderBoxesList() {
  var listEl = document.getElementById('ap-box2-list');
  if (!listEl) return;
  listEl.innerHTML = '';
  for (var i = 0; i < apBoxes.length; i++) {
    var s = apBoxes[i];
    var tmp = document.createElement('div');
    tmp.innerHTML = apItemRow(i, s.name, s.quality, s.minPrice, s.maxPrice, true);
    while (tmp.firstChild) listEl.appendChild(tmp.firstChild);
  }
  apUpdateBoxesDisplay();
}

function apRebuildBoxesTab() {
  var cont = document.getElementById('ap-stc-boxes');
  if (!cont || cont.getAttribute('data-ap-boxlist') === '1') return;
  cont.setAttribute('data-ap-boxlist', '1');
  // Старые настройки качеств прячем, но оставляем в DOM, чтобы не ломать кнопку «Сохранить»
  var wrap = document.createElement('div');
  wrap.style.display = 'none';
  while (cont.firstChild) wrap.appendChild(cont.firstChild);
  cont.appendChild(wrap);

  var html = '<div style="color:#EEC053;font-size:12px;margin-bottom:6px">Ящики — список (как свитки)</div>' +
    '<div style="color:#888;font-size:10px;margin-bottom:6px">Имя можно не заполнять — тогда совпадение по качеству. Мин и макс цену указывайте обязательно (в серебре), иначе строка не сработает. Чтобы удалить строку — очистите имя и качество.</div>' +
    '<div style="margin-bottom:6px">' +
    '<label style="color:#aaa;font-size:12px;cursor:pointer"><input type="checkbox" id="ap-box2-enabled" ' + (apBoxBuyEnabled ? 'checked' : '') + ' style="vertical-align:middle" /> включить покупку ящиков</label>' +
    '</div>' +
    '<div style="margin-bottom:6px">' +
    '<span style="color:#aaa;font-size:12px">Обновл. (сек):</span> ' +
    '<input type="number" id="ap-box2-rmin" value="' + apBoxRefreshMin + '" style="width:35px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;text-align:center" min="1" max="60" /> — ' +
    '<input type="number" id="ap-box2-rmax" value="' + apBoxRefreshMax + '" style="width:35px;background:#111;color:#EEC053;border:1px solid #555;padding:2px;text-align:center" min="1" max="60" />' +
    '</div>' +
    '<div id="ap-box2-list"></div>' +
    '<a href="#" id="ap-box2-add" style="color:#6FCD72;font-size:11px">+ добавить ящик</a>' +
    '<div id="ap-box2-display"></div>';
  cont.insertAdjacentHTML('beforeend', html);

  apRenderBoxesList();

  var addBtn = document.getElementById('ap-box2-add');
  if (addBtn) addBtn.onclick = function (e) {
    e.preventDefault();
    var listEl = document.getElementById('ap-box2-list');
    if (!listEl) return;
    var tmp = document.createElement('div');
    tmp.innerHTML = apItemRow(0, '', 'rare', 0, 0, true);
    while (tmp.firstChild) listEl.appendChild(tmp.firstChild);
  };

  // Живое сохранение: любое изменение в списке/настройках сразу пишется
  if (cont.addEventListener) cont.addEventListener('change', function () { apReadBoxesFromDOM(); });
}

// Оборачиваем создание UI, чтобы вкладка пересобиралась при каждом открытии панели
if (!apCreateUI.__apBoxList) {
  var apCreateUIOrig = apCreateUI;
  var apCreateUINew = function () {
    apCreateUIOrig();
    apRebuildBoxesTab();
  };
  apCreateUINew.__apBoxList = true;
  apCreateUI = apCreateUINew;
}

apLoad();
// Если панель уже построена — пересобираем вкладку сразу
if (document.getElementById('ap-panel')) apRebuildBoxesTab();
// ================= КОНЕЦ ПАТЧА v39 =================
// ================= ПАТЧ v42: ФАЗЫ ДЛЯ ЯЩИКОВ =================
// У модуля 'boxes' не были заданы searchPhase/buyPhase — фаза 3 ставила apPhase = undefined,
// и бот замирал на странице ящиков, никогда не доходя до фазы 4 (поиск) и 5 (покупка).
(function () {
  for (var i = 0; i < apModuleInfo.length; i++) {
    if (apModuleInfo[i].key === 'boxes') {
      apModuleInfo[i].searchPhase = 4; // фаза поиска ящика
      apModuleInfo[i].buyPhase = 5;    // фаза покупки ящика
    }
  }
})();
// ================= КОНЕЦ ПАТЧА v42 =================
