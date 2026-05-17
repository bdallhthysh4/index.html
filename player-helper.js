const BACKUP_API = 'https://series.albesriali03.workers.dev/';

async function fetchBackupEpisode(title, episodeNum) {
  try {
    let res = await fetch(BACKUP_API + '?action=categories');
    let data = await res.json();
    if (!data.status || !data.data.length) throw new Error('لا توجد أقسام');
    let foundEpisode = null;
    for (let cat of data.data) {
      if (foundEpisode) break;
      try {
        res = await fetch(BACKUP_API + '?action=series&url=' + encodeURIComponent(cat.url));
        let seriesData = await res.json();
        if (!seriesData.status) continue;
        let matched = seriesData.data.find(s => s.title.toLowerCase().includes(title.toLowerCase()));
        if (matched) {
          res = await fetch(BACKUP_API + '?action=episodes&url=' + encodeURIComponent(matched.url));
          let epData = await res.json();
          if (epData.status && epData.data.length) {
            let epIndex = episodeNum - 1;
            foundEpisode = epData.data[epIndex >= 0 && epIndex < epData.data.length ? epIndex : 0];
          }
        }
      } catch(e) { continue; }
    }
    if (!foundEpisode) throw new Error('الحلقة غير موجودة');
    res = await fetch(BACKUP_API + '?action=play&url=' + encodeURIComponent(foundEpisode.url));
    let playData = await res.json();
    if (playData.status && playData.player_url) return playData.player_url;
    throw new Error('ما فيه رابط تشغيل');
  } catch(e) { return null; }
}

async function playVideo(url, usePlayerjs = true) {
  const container = document.getElementById('player-container');
  if (url.includes('series.albesriali03.workers.dev') || (!url.includes('.mp4') && !url.includes('.m3u8') && !url.includes('zvde-dsn'))) {
    const playUrl = await fetchPlayUrlFromAPI(url);
    if (playUrl) url = playUrl;
  }
  if (usePlayerjs && typeof Playerjs !== 'undefined') {
    container.innerHTML = '';
    new Playerjs({ id: 'player-container', file: url });
  } else {
    if (url.includes('.mp4') || url.includes('.m3u8') || url.includes('zvde-dsn')) {
      playDirectVideo(url, container);
    } else {
      container.innerHTML = '<iframe class="main-frame" src="' + url + '" allowfullscreen frameborder="0" allow="autoplay; fullscreen" style="width:100%; height:100%; border:none;"></iframe>';
    }
  }
}