// ========== إعدادات API الأساسي ==========
const API_BASE = 'https://series.albesriali03.workers.dev/';

// ========== دالة فلترة الصور السيئة ==========
function fixImageUrl(url) {
  if (!url || url.includes('default_image') || url.includes('system_logo') || url.includes('thumbnail.jpg') || url.includes('logo.png')) {
    return 'https://i.ibb.co/0wvJfBH/file-00000000c1e4720a9aba88f120b35bd1.png';
  }
  return url;
}

// ========== دالة جلب كل البيانات من API ==========
async function fetchAllFromAPI() {
  try {
    const res = await fetch(API_BASE + '?action=categories');
    const data = await res.json();
    if (!data.status || !data.data.length) throw new Error('لا توجد أقسام');
    const mainCategories = data.data.slice(0, 3);
    let allSeries = [];
    const promises = mainCategories.map(async (cat) => {
      try {
        const sRes = await fetch(API_BASE + '?action=series&url=' + encodeURIComponent(cat.url));
        const sData = await sRes.json();
        if (sData.status && sData.data.length) {
          return sData.data.map(s => ({
            id: s.url.replace(/[^a-zA-Z0-9]/g, '_'),
            title: s.title,
            image: fixImageUrl(s.image),
            url: s.url,
            episodes_count: s.episodes || '0',
            category: cat.name || '',
            rating: 0, ratingCount: 0, views: 0,
            episodes: [], trailer: ''
          }));
        }
      } catch(e) {}
      return [];
    });
    const results = await Promise.all(promises);
    allSeries = results.flat();
    return allSeries;
  } catch(e) { return null; }
}

// ========== دالة جلب حلقات مسلسل من API ==========
function extractEpisodeNumber(name) {
  if (!name) return null;
  let match = name.match(/حلقة\s*(\d+)/i) || name.match(/(?:Episode|Ep|E)\s*#?\s*(\d+)/i) || name.match(/Ep#(\d+)/i) || name.match(/#?(\d+)/);
  return match ? match[1] : name;
}

async function fetchEpisodesFromAPI(seriesUrl) {
  try {
    const res = await fetch(API_BASE + '?action=episodes&url=' + encodeURIComponent(seriesUrl));
    const data = await res.json();
    if (data.status && data.data && data.data.length > 0) {
      return data.data.map((ep, index) => ({
        title: extractEpisodeNumber(ep.name) || String(index + 1),
        url: ep.url || '',
        link1: ep.url || '',
        link2: '', link3: ''
      }));
    }
    return null;
  } catch(e) { return null; }
}

// ========== دالة جلب رابط التشغيل من API ==========
async function fetchPlayUrlFromAPI(episodeUrl) {
  try {
    const res = await fetch(API_BASE + '?action=play&url=' + encodeURIComponent(episodeUrl));
    const data = await res.json();
    if (data.status && data.player_url) return data.player_url;
    return null;
  } catch(e) { return null; }
}