<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultmessages='false' b:layouts='false' b:responsive='true' dir='rtl' lang='ar' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta charset='UTF-8'/>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes' name='viewport'/> 

  <meta content='no-referrer' name='referrer'/>
  <title id='dynamic-title'>حكايتنا - مسلسلات تركية وعربية</title>
  <meta content='شاهد أحدث المسلسلات التركية والعربية بجودة عالية وأداء سلس.' id='dynamic-description' name='description'/>
  <meta content='index, follow' name='robots'/>
  <meta content='#e50914' name='theme-color'/>
  <meta content='yes' name='mobile-web-app-capable'/>
  <meta content='حكايتنا' name='apple-mobile-web-app-title'/>
  <meta content='yes' name='apple-mobile-web-app-capable'/>
  <meta content='black-translucent' name='apple-mobile-web-app-status-bar-style'/>
  <meta content='حكايتنا' name='application-name'/>
  <link href='https://YOURBLOG.blogspot.com/sw.js' rel='service-worker'/>
  <link href='https://i.ibb.co/0wvJfBH/file-00000000c1e4720a9aba88f120b35bd1.png' rel='apple-touch-icon' sizes='180x180'/>
  <link href='https://i.ibb.co/0wvJfBH/file-00000000c1e4720a9aba88f120b35bd1.png' rel='icon' sizes='192x192'/>
  <link href='https://i.ibb.co/0wvJfBH/file-00000000c1e4720a9aba88f120b35bd1.png' rel='icon' sizes='512x512'/>
  <link href='https://i.ibb.co/0wvJfBH/file-00000000c1e4720a9aba88f120b35bd1.png' rel='shortcut icon'/>
  <link href='data:application/manifest+json;base64,ewogICJuYW1lIjogItit2YPYp9mK2KrZhtinIiwKICAic2hvcnRfbmFtZSI6ICLYrdmD2KfZitiq2YbYpyIsCiAgInN0YXJ0X3VybCI6ICIvP209MSIsCiAgImRpc3BsYXkiOiAic3RhbmRhbG9uZSIsCiAgImJhY2tncm91bmRfY29sb3IiOiAiIzA1MDUwNSIsCiAgInRoZW1lX2NvbG9yIjogIiNlNTA5MTQiLAogICJvcmllbnRhdGlvbiI6ICJwb3J0cmFpdCIsCiAgInNjb3BlIjogIi8iLAogICJwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnMiOiBmYWxzZSwKICAiaWNvbnMiOiBbCiAgICB7CiAgICAgICJzcmMiOiAiaHR0cHM6Ly9pLmliYi5jby8wd3ZKZkJIL2ZpbGUtMDAwMDAwMDBjMWU0NzIwYTlhYmE4OGYxMjBiYzViZDEucG5nIiwKICAgICAgInNpemVzIjogIjUxMng1MTIiLAogICAgICAidHlwZSI6ICJpbWFnZS9wbmciLAogICAgICAicHVycG9zZSI6ICJhbnkgbWFza2FibGUiCiAgICB9CiAgXQp9' rel='manifest'/>
  
  <!-- أكواد الإعلانات النصية (تحميل غير متزامن) -->
  
  <b:skin><![CDATA[
    :root {
      --primary: #e50914; 
      --bg-body: #050505; 
      --bg-card: #0f0f0f;
      --bg-hover: #1a1a1a;
      --text-main: #ffffff; 
      --text-dim: #aaaaaa;
      --radius: 12px;
      --glass: rgba(15, 15, 15, 0.75);
      --ad-badge: #ffd700;
    }

    * {
      box-sizing: border-box;
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }
    
    html, body { 
      background: var(--bg-body); 
      color: var(--text-main); 
      font-family: 'Cairo', sans-serif; 
      margin: 0; 
      padding: 0;
      direction: rtl; 
      overflow-x: hidden;
      width: 100%; 
      scroll-behavior: smooth;
    }

    /* تحسينات الأداء القوية */
    .content-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      padding: 0 20px 30px;
      min-height: 400px;
      content-visibility: auto; /* المفتاح السحري للسرعة */
      contain-intrinsic-size: 500px; /* يحجز مساحة للبطاقات */
    }
    
    @media (min-width: 576px) { .content-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (min-width: 768px) { .content-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; padding: 0 50px 50px; } }
    @media (min-width: 1200px) { .content-grid { grid-template-columns: repeat(5, 1fr); gap: 25px; } }

    /* تحسينات للصور */
    img {
      will-change: transform;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }

    /* تحسين أداء البطاقات */
    .movie-card {
      will-change: transform;
      transform: translateZ(0);
      background: var(--bg-card);
      border-radius: var(--radius);
      overflow: hidden;
      cursor: pointer;
      position: relative;
      transition: transform 0.2s ease;
      border: 1px solid rgba(255,255,255,0.05);
      aspect-ratio: 2/3;
    }

    /* باقي التنسيقات كما هي */
    #blogger-helper { display: none !important; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #050505; }
    ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--primary); }

    /* الهيدر */
    header { 
      position: fixed; top: 0; width: 100%; z-index: 1000; 
      padding: 20px 0; 
      background: linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 100%);
      transition: all 0.3s ease;
    }
    header.scrolled { 
      background: var(--glass); 
      border-bottom: 1px solid rgba(255,255,255,0.05); 
      backdrop-filter: blur(15px); 
      padding: 12px 0; 
    }
    .header-flex { display: flex; align-items: center; justify-content: space-between; padding: 0 20px; flex-wrap: wrap; gap: 15px; }
    .logo { font-size: 28px; font-weight: 900; color: var(--primary); text-decoration: none; display: flex; align-items: center; gap: 10px; }
    .logo img { max-height: 45px; width: auto; }
    @media (min-width: 768px) {
      .header-flex { padding: 0 50px; }
      .logo { font-size: 35px; }
      .logo img { max-height: 55px; }
    }
    
    /* البحث */
    .search-container {
      position: relative;
      flex: 1 1 100%;
      order: 3;
      margin: 10px 0 0;
    }
    @media (min-width: 768px) {
      .search-container { flex: 0 1 500px; order: 0; margin: 0 30px; }
    }
    
    .search-box { position: relative; width: 100%; }
    .search-bar { 
      width: 100%; 
      background: rgba(255,255,255,0.08); 
      border: 1px solid rgba(255,255,255,0.05); 
      padding: 12px 45px 12px 20px; 
      border-radius: 30px; 
      color: #fff; 
      font-family: 'Cairo'; 
      font-size: 15px; 
      transition: 0.2s;
    }
    .search-bar:focus { 
      background: rgba(255,255,255,0.15); 
      border-color: var(--primary); 
    }
    .search-icon {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      color: #888;
      pointer-events: none;
    }
    
    .search-suggestions {
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      background: rgba(20, 20, 20, 0.98);
      backdrop-filter: blur(15px);
      border-radius: 16px;
      margin-top: 8px;
      padding: 12px;
      z-index: 1001;
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      max-height: 350px;
      overflow-y: auto;
      display: none;
    }
    .search-suggestions.active { display: block; }
    .suggestion-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.2s;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .suggestion-item:hover { background: rgba(229, 9, 20, 0.15); }
    .suggestion-item img {
      width: 45px;
      height: 60px;
      object-fit: cover;
      border-radius: 6px;
    }
    .suggestion-info h4 {
      margin: 0 0 3px;
      font-size: 15px;
      color: #fff;
    }
    .suggestion-info p {
      margin: 0;
      font-size: 11px;
      color: #aaa;
    }

    video::-webkit-media-controls-download-button { display:none !important; }
    video::-webkit-media-controls-enclosure { overflow:hidden !important; }

    .hero { 
      position: relative; 
      width: 100%; 
      height: 600px; 
      overflow: hidden; 
      background: #000;
      cursor: pointer;
    }
    @media (min-width: 768px) {
      .hero { height: 80vh; min-height: 700px; }
    }
    .hero-slide { 
      position: absolute; 
      inset: 0; 
      opacity: 0; 
      visibility: hidden;
      transition: opacity 1s ease;
      display: block; 
    }
    .hero-slide.active { 
      opacity: 1; 
      visibility: visible;
      z-index: 5;
    }
    
    .hero-bg { 
      width: 100%; 
      height: 100%; 
      object-fit: cover; 
      display: block; 
    }

    .hero-video-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 1s ease;
      z-index: 1;
      background: #000;
      pointer-events: none;
    }
    .hero-video-container.playing { opacity: 0.5; }
    
    .hero-video-container video,
    .hero-video-container iframe {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .hero-overlay { 
      position: absolute; inset: 0; z-index: 2;
      background: linear-gradient(to top, var(--bg-body) 0%, transparent 50%),
                  linear-gradient(to right, rgba(0,0,0,0.85) 0%, transparent 65%); 
    }

    .center-mute-trigger {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      z-index: 20; background: rgba(0,0,0,0.5); border: 2px solid rgba(255,255,255,0.4);
      width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center;
      justify-content: center; cursor: pointer; transition: 0.3s; opacity: 1;
      animation: pulse-audio 2s infinite;
    }
    @media (min-width: 768px) {
      .center-mute-trigger { width: 110px; height: 110px; }
      .center-mute-trigger i { font-size: 40px; }
    }
    .center-mute-trigger.hidden { opacity: 0; pointer-events: none; }
    .center-mute-trigger i { color: white; font-size: 30px; }

    @keyframes pulse-audio {
      0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
      70% { box-shadow: 0 0 0 25px rgba(255, 255, 255, 0); }
      100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
    }

    .hero-content { 
      position: absolute; 
      bottom: 10%; 
      right: 20px; 
      z-index: 10; 
      max-width: 100%; 
      pointer-events: none;
    }
    @media (min-width: 768px) {
      .hero-content { bottom: 15%; right: 50px; max-width: 800px; }
    }
    .hero-content h1 { 
      font-size: 40px; 
      margin: 10px 0; 
      font-weight: 900; 
      text-shadow: 2px 2px 30px rgba(0,0,0,1); 
      line-height: 1.1; 
    }
    @media (min-width: 768px) {
      .hero-content h1 { font-size: 85px; }
    }

    .hero-badge {
      background: var(--primary);
      color: #fff;
      display: inline-block;
      padding: 5px 15px;
      border-radius: 5px;
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 14px;
    }

    .hero-buttons {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 20px;
      flex-wrap: wrap;
      pointer-events: auto;
    }

    .watch-btn {
      background: #fff;
      color: #000;
      border: none;
      padding: 12px 30px;
      border-radius: 8px;
      font-weight: 900;
      cursor: pointer;
      font-family: 'Cairo';
      font-size: 18px;
      transition: 0.2s;
      box-shadow: 0 5px 15px rgba(255,255,255,0.2);
    }
    .watch-btn:hover { 
      transform: scale(1.05); 
      background: var(--primary); 
      color: #fff; 
    }

    .mute-btn {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      transition: 0.2s;
      pointer-events: auto;
    }
    .mute-btn:hover { background: var(--primary); border-color: var(--primary); }

    .categories-bar { display: flex; gap: 10px; padding: 20px 20px; overflow-x: auto; background: var(--bg-body); scrollbar-width: none; position: relative; z-index: 25; margin-top: -2px; }
    @media (min-width: 768px) {
      .categories-bar { padding: 20px 50px; gap: 15px; }
    }
    .cat-item { padding: 6px 18px; background: var(--bg-card); border-radius: 30px; cursor: pointer; white-space: nowrap; transition: 0.2s; border: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: var(--text-dim); }
    @media (min-width: 768px) {
      .cat-item { padding: 8px 25px; }
    }
    .cat-item.active { background: var(--primary); color: #fff; border-color: var(--primary); box-shadow: 0 5px 15px rgba(229, 9, 20, 0.3); }

    .main-content-wrapper { background: var(--bg-body); position: relative; padding-top: 10px; z-index: 20; }
    .section-title { padding: 0 20px; margin: 20px 0 25px; font-size: 26px; font-weight: 700; display: flex; align-items: center; gap: 15px; }
    @media (min-width: 768px) {
      .section-title { padding: 0 50px; font-size: 32px; }
    }
    .section-title::before { content: ''; width: 6px; height: 35px; background: var(--primary); display: inline-block; border-radius: 10px; }
    
    .ad-card { 
      background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
      border-radius: var(--radius); 
      overflow: hidden; 
      position: relative; 
      transition: all 0.2s ease;
      border: 1px solid rgba(255,255,255,0.05);
      aspect-ratio: 2/3;
    }
    .ad-card:hover { 
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(229,9,20,0.2);
      border-color: var(--primary);
    }
    
    .movie-card:hover { 
      transform: scale(1.06); 
      z-index: 2; 
      box-shadow: 0 15px 30px rgba(0,0,0,0.7);
      border-color: var(--primary);
    }
    .card-img { aspect-ratio: 2/3; position: relative; overflow: hidden; }
    .card-img img { 
      width: 100%; 
      height: 100%; 
      object-fit: cover; 
      transition: transform 0.3s ease;
    }
    .movie-card:hover .card-img img { transform: scale(1.1); }
    
    .fav-card-btn { 
      position: absolute; 
      top: 10px; 
      left: 10px; 
      background: rgba(0,0,0,0.6); 
      width: 30px; 
      height: 30px; 
      border-radius: 50%; 
      display: grid; 
      place-items: center; 
      z-index: 5; 
      color: white; 
      transition: 0.2s; 
      cursor: pointer; 
      border: 1px solid rgba(255,255,255,0.1);
      backdrop-filter: blur(5px);
    }
    @media (min-width: 768px) {
      .fav-card-btn { width: 35px; height: 35px; }
    }
    .fav-card-btn.active { 
      color: var(--primary); 
      background: white; 
      border-color: var(--primary);
    }

    .card-meta { 
      position: absolute; 
      bottom: 0; 
      width: 100%; 
      padding: 20px 10px 10px; 
      background: linear-gradient(transparent, rgba(0,0,0,0.98)); 
    }
    @media (min-width: 768px) {
      .card-meta { padding: 35px 15px 15px; }
    }
    .card-title { 
      font-size: 16px; 
      font-weight: 700; 
      margin-bottom: 5px; 
      white-space: nowrap; 
      overflow: hidden; 
      text-overflow: ellipsis; 
    }
    @media (min-width: 768px) {
      .card-title { font-size: 20px; margin-bottom: 8px; }
    }
    .ad-badge-small {
      position: absolute;
      top: 10px;
      right: 10px;
      background: var(--ad-badge);
      color: #000;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      z-index: 10;
      box-shadow: 0 2px 10px rgba(255,215,0,0.3);
    }
    .card-stats {
      display: flex;
      gap: 10px;
      font-size: 12px;
      color: #ccc;
    }

    .floating-ad {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%) translateY(200%);
      background: rgba(15,15,15,0.98);
      backdrop-filter: blur(15px);
      z-index: 9998;
      padding: 15px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.5);
      border: 2px solid var(--primary);
      transition: transform 0.5s ease;
      max-width: 90%;
      width: 400px;
    }
    .floating-ad.show { transform: translateX(-50%) translateY(0); }
    .floating-ad iframe { width: 100%; height: 90px; border: none; border-radius: 12px; }
    @media (max-width: 768px) { .floating-ad iframe { height: 60px; } }
    
    .floating-ad .close-ad {
      position: absolute;
      top: -15px;
      right: -15px;
      background: var(--primary);
      color: white;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 18px;
      font-weight: bold;
      border: 3px solid white;
      z-index: 9999;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      transition: all 0.2s ease;
    }
    .floating-ad .close-ad:hover { transform: scale(1.1); background: #ff0f1a; }

    .mid-page-ad {
      background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
      border-radius: 20px;
      padding: 20px;
      margin: 30px auto;
      max-width: 800px;
      border: 2px solid var(--primary);
      box-shadow: 0 15px 40px rgba(229,9,20,0.2);
      display: none;
      position: relative;
    }
    .mid-page-ad.show { display: block; animation: slideIn 0.5s ease; }
    @keyframes slideIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    .mid-page-ad .close-mid-ad {
      position: absolute;
      top: -12px;
      right: -12px;
      background: var(--primary);
      color: white;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      border: 2px solid white;
      z-index: 10;
    }
    .mid-page-ad iframe { width: 100%; height: 250px; border: none; border-radius: 12px; }
    .mid-page-ad .native-ad-label { color: #ffd700; font-size: 14px; margin-bottom: 15px; text-align: center; font-weight: bold; }

    .pre-episode-ad-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.98);
      z-index: 10000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      padding: 20px;
    }
    .pre-episode-ad-container {
      width: 100%;
      max-width: 800px;
      background: #0f0f0f;
      border-radius: 30px;
      padding: 25px;
      border: 3px solid var(--primary);
      box-shadow: 0 0 60px rgba(229, 9, 20, 0.4);
      animation: popIn 0.4s ease;
    }
    @keyframes popIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .pre-episode-ad-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding: 0 10px;
    }
    .pre-episode-ad-title { color: #ffd700; font-size: 24px; font-weight: 900; text-shadow: 0 2px 10px rgba(255,215,0,0.3); }
    .pre-episode-ad-timer {
      color: #fff;
      font-size: 18px;
      background: rgba(255,255,255,0.1);
      padding: 8px 20px;
      border-radius: 50px;
    }
    .pre-episode-ad-timer span { color: var(--primary); font-size: 28px; font-weight: 900; margin: 0 8px; }
    .pre-episode-ad-placeholder { width: 100%; height: 300px; background: #1a1a1a; border-radius: 20px; overflow: hidden; margin: 20px 0; border: 2px solid rgba(255,255,255,0.1); }
    .pre-episode-ad-placeholder iframe { width: 100%; height: 100%; border: none; }
    .pre-episode-ad-skip { text-align: center; }
    .pre-episode-ad-skip-btn {
      background: var(--primary);
      color: white;
      border: none;
      padding: 15px 50px;
      border-radius: 60px;
      font-family: 'Cairo';
      font-weight: 900;
      font-size: 20px;
      cursor: pointer;
      opacity: 0.5;
      pointer-events: none;
      transition: all 0.3s;
      border: 2px solid rgba(255,255,255,0.2);
      box-shadow: 0 5px 20px rgba(229,9,20,0.3);
    }
    .pre-episode-ad-skip-btn.active { opacity: 1; pointer-events: all; transform: scale(1.05); }
    .pre-episode-ad-skip-btn.active:hover { transform: scale(1.1); }
    @media (max-width: 768px) {
      .pre-episode-ad-container { padding: 15px; }
      .pre-episode-ad-title { font-size: 20px; }
      .pre-episode-ad-timer { font-size: 16px; }
      .pre-episode-ad-timer span { font-size: 24px; }
      .pre-episode-ad-placeholder { height: 200px; }
    }

    .drawer { 
      position: fixed; 
      top: 0; 
      right: -280px; 
      width: 280px; 
      height: 100%; 
      background: rgba(15, 15, 15, 0.98); 
      backdrop-filter: blur(20px); 
      z-index: 2001; 
      padding: 30px 20px; 
      transition: 0.3s; 
      border-left: 1px solid rgba(255,255,255,0.05); 
    }
    @media (min-width: 768px) { .drawer { right: -320px; width: 320px; } }
    .drawer.active { right: 0 !important; }
    .drawer-overlay { 
      position: fixed; 
      inset: 0; 
      background: rgba(0,0,0,0.8); 
      z-index: 2000; 
      display: none; 
      backdrop-filter: blur(5px); 
    }
    .drawer-overlay.active { display: block !important; }

    #watch-view { 
      display: none; 
      padding-top: 100px; 
      background: #000; 
      min-height: 100vh; 
    }
    @media (min-width: 768px) { #watch-view { padding-top: 120px; } }
    .video-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    @media (min-width: 768px) { .video-container { padding: 0 50px; } }
    
    .player-holder { 
      width: 100%; 
      aspect-ratio: 16/9; 
      border-radius: 12px; 
      border: 1px solid #1a1a1a; 
      background: #000; 
      box-shadow: 0 0 50px rgba(229, 9, 20, 0.15); 
      overflow: hidden; 
      position: relative; 
    }
    .main-frame, .html5-video { width: 100%; height: 100%; border: none; display: block; background: #000; }

    .server-alert { 
      background: linear-gradient(45deg, rgba(229, 9, 20, 0.15), rgba(0,0,0,0.5));
      color: #ffca28; 
      padding: 15px 25px; 
      border-radius: 50px; 
      margin-bottom: 20px; 
      text-align: center; 
      font-weight: bold; 
      border: 1px solid rgba(255, 202, 40, 0.3);
      font-size: 16px;
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    .server-alert i { color: #ffca28; font-size: 20px; }

    .episode-btn { 
      padding: 0; 
      background: #1a1a1a; 
      border-radius: 8px; 
      cursor: pointer; 
      text-align: center; 
      border: 2px solid transparent; 
      transition: 0.2s; 
      color: #fff; 
      position: relative; 
      overflow: hidden;
      aspect-ratio: 2/3; 
      display: flex;
      flex-direction: column;
    }
    .episode-btn img { width: 100%; height: 100%; object-fit: cover; display: block; opacity: 0.8; transition: 0.2s; }
    .episode-btn:hover img { opacity: 1; }
    .episode-btn .ep-num {
      position: absolute;
      bottom: 0;
      width: 100%;
      background: rgba(0,0,0,0.8);
      padding: 8px 0;
      font-size: 14px;
      font-weight: 800;
      z-index: 2;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    .episode-btn.active { border-color: var(--primary) !important; transform: scale(1.05); z-index: 10; }
    .episode-btn.active .ep-num { background: var(--primary); color: #fff; }
    
    .episode-btn.watched::after { 
      content: '\f058'; 
      font-family: "Font Awesome 6 Free"; 
      font-weight: 900; 
      position: absolute; 
      top: 5px; 
      left: 5px; 
      color: #fff; 
      background: var(--primary); 
      border-radius: 50%; 
      font-size: 12px;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 5;
      box-shadow: 0 2px 5px rgba(0,0,0,0.5);
    }

    .v-likes-btn { cursor:pointer; transition:0.2s; }
    .v-likes-btn.active { color: var(--primary); transform: scale(1.1); }

    .rating-stars { display: flex; gap: 5px; direction: ltr; margin: 10px 0; }
    .star { font-size: 24px; color: #444; cursor: pointer; transition: 0.2s; }
    .star.active, .star:hover { color: #ffd700; }
    .star.half { position: relative; }
    .star.half:before { content: '★'; position: absolute; left: 0; width: 50%; overflow: hidden; color: #ffd700; }

    .loader { 
      position: fixed; 
      inset: 0; 
      background: #050505; 
      z-index: 9999; 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      flex-direction: column; 
      gap: 20px; 
    }
    .spinner { 
      width: 60px; 
      height: 60px; 
      border: 5px solid #1a1a1a; 
      border-top-color: var(--primary); 
      border-radius: 50%; 
      animation: spin 0.8s infinite linear; 
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .site-footer {
      padding: 30px 20px;
      background: #050505;
      border-top: 1px solid #1a1a1a;
      text-align: center;
      margin-top: 40px;
    }
    .footer-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }
    .footer-copy { font-size: 16px; font-weight: 400; color: #fff; background: transparent; padding: 0; }
    .footer-tg {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      transition: 0.2s;
      gap: 5px;
    }
    .footer-tg i { font-size: 18px; color: #0088cc; transition: 0.2s; }
    .footer-tg:hover { color: #0088cc; }
    .footer-tg:hover i { transform: scale(1.1); }

    .install-button {
      position: fixed;
      bottom: 20px;
      left: 20px;
      background: var(--primary);
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 30px;
      font-family: 'Cairo';
      font-weight: 700;
      font-size: 13px;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3);
      display: none;
      align-items: center;
      gap: 8px;
      border: 1px solid rgba(255,255,255,0.2);
      animation: pulse-install 2s infinite;
    }
    .install-button.show { display: flex; }
    .install-button:hover { transform: scale(1.05); background: #ff0f1a; }
    @keyframes pulse-install {
      0% { box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3); }
      50% { box-shadow: 0 4px 25px rgba(229, 9, 20, 0.6); }
      100% { box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3); }
    }

    .quick-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; padding: 20px 20px 0; visibility: hidden; }
    .stat-item {
      background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
      border-radius: 16px;
      padding: 20px 10px;
      text-align: center;
      border: 1px solid rgba(255,255,255,0.05);
    }
    .stat-number { font-size: 24px; font-weight: 900; color: var(--primary); margin-bottom: 5px; }
    .stat-label { font-size: 13px; color: #aaa; }
    
    .back-to-top {
      position: fixed;
      bottom: 80px;
      right: 20px;
      width: 45px;
      height: 45px;
      background: var(--primary);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transition: 0.2s;
      box-shadow: 0 5px 20px rgba(229, 9, 20, 0.3);
    }
    .back-to-top.show { opacity: 1; visibility: visible; }
    
    .share-buttons { display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap; }
    .share-btn {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      transition: 0.2s;
    }
    .share-whatsapp { background: #25D366; }
    .share-telegram { background: #0088cc; }
    .share-copy { background: #666; cursor: pointer; }
    
    .copy-toast {
      position: fixed;
      bottom: 150px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--primary);
      color: white;
      padding: 12px 30px;
      border-radius: 50px;
      font-size: 15px;
      z-index: 10000;
      display: none;
    }
    .copy-toast.show { display: block; animation: fadeInOut 2s; }
    @keyframes fadeInOut {
      0% { opacity: 0; }
      15% { opacity: 1; }
      85% { opacity: 1; }
      100% { opacity: 0; }
    }

    .suggestions-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      margin-top: 20px;
      content-visibility: auto;
      contain-intrinsic-size: 300px;
    }
    @media (min-width: 768px) { .suggestions-grid { grid-template-columns: repeat(5, 1fr); } }

    .watched-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background: var(--primary);
      width: 0%;
    }

    /* ===== نظام الصفحات (Pagination) ===== */
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin: 30px 0 20px;
      flex-wrap: wrap;
      padding: 10px;
    }
    
    .page-btn {
      min-width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-card);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      color: var(--text-dim);
      font-weight: 600;
      cursor: pointer;
      transition: 0.2s;
      font-size: 15px;
      padding: 0 10px;
    }
    
    .page-btn:hover {
      background: var(--bg-hover);
      border-color: var(--primary);
      color: #fff;
    }
    
    .page-btn.active {
      background: var(--primary);
      color: #fff;
      border-color: var(--primary);
    }
    
    .page-btn.disabled {
      opacity: 0.3;
      pointer-events: none;
    }
    
    .page-dots {
      color: var(--text-dim);
      padding: 0 5px;
      font-size: 18px;
    }

    #episodes-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      content-visibility: auto;
      contain-intrinsic-size: 200px;
    }
    @media (min-width: 576px) { #episodes-grid { grid-template-columns: repeat(4, 1fr); } }
    @media (min-width: 768px) { #episodes-grid { grid-template-columns: repeat(5, 1fr); } }
    @media (min-width: 992px) { #episodes-grid { grid-template-columns: repeat(6, 1fr); } }
  ]]></b:skin>
  
  <link href='https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&amp;display=swap' rel='stylesheet'/>
  <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' rel='stylesheet'/>
</head>

<body onclick='enableAudio()' ontouchstart='enableAudio()'>
  <div id='blogger-helper' style='display:none !important;'>
    <b:section id='main-content' maxwidgets='1' showaddelement='yes'/>
  </div>

  <!-- قسم مطلوب لبلوجر - مخفي تماماً -->
  <b:section id='hidden-section' class='hidden' style='display:none;' maxwidgets='1' showaddelement='no'>
    <b:widget id='Blog1' locked='true' title='' type='Blog' version='2' visible='false'/>
  </b:section>

  <!-- إعلان عائم ذكي -->
  <div class='floating-ad' id='floatingAd'>
    <div class='close-ad' onclick='closeFloatingAd()'>&#10005;</div>
    <iframe allow='fullscreen' frameborder='0' scrolling='no' src='https://omg10.com/4/10670511' style='width:100%; height:90px; border:none;'/>
  </div>

  <!-- إعلان منتصف الصفحة -->
  <div class='mid-page-ad' id='midPageAd'>
    <div class='close-mid-ad' onclick='closeMidAd()'>&#10005;</div>
    <div class='native-ad-label'>💰 إعلان</div>
    <iframe allow='fullscreen' frameborder='0' scrolling='no' src='https://omg10.com/4/10670511' style='width:100%; height:250px; border:none;'/>
  </div>

  <!-- أكواد الإعلانات الإضافية -->

  <!-- زر تثبيت التطبيق -->
  <button class='install-button' id='install-button'>
    <i class='fas fa-download'/>
    <span>ثبت التطبيق</span>
  </button>

  <!-- زر العودة للأعلى -->
  <div class='back-to-top' id='backToTop'>
    <i class='fas fa-arrow-up'/>
  </div>
  
  <!-- رسالة منبثقة للنسخ -->
  <div class='copy-toast' id='copyToast'>تم نسخ اسم المسلسل!</div>

  <div class='loader' id='site-loader'>
    <div class='spinner'/>
  </div>

  <div class='drawer-overlay' id='overlay' onclick='toggleMenu()'/>
  <aside class='drawer' id='drawer'>
    <div style='text-align:center; margin-bottom:40px;'>
      <div class='logo' style='justify-content:center;'>حكايتنا</div>
    </div>
    <div style='display:flex; flex-direction:column; gap:10px;'>
      <a class='drawer-item' href='https://t.me/hikaytnamy' target='_blank'><i class='fab fa-telegram'/> قناة التليجرام</a>
      <a class='drawer-item' href='#' onclick='showFavorites(); return false;'><i class='fas fa-bookmark'/> قائمتي المفضلة</a>
      <a class='drawer-item' href='/'><i class='fas fa-home'/> الرئيسية</a>
    </div>
  </aside>

  <header id='main-header'>
    <div class='header-flex'>
      <div style='display:flex; align-items:center; gap:15px;'>
        <div onclick='toggleMenu()' style='cursor:pointer; font-size:22px;'><i class='fas fa-bars'/></div>
        <a class='logo' href='/'>
          <img alt='حكايتنا' src='https://i.ibb.co/0wvJfBH/file-00000000c1e4720a9aba88f120b35bd1.png' style='height:40px; width:auto;'/>
          <span>حكايتنا</span>
        </a>
      </div>
      
      <div class='search-container' id='search-container'>
        <div class='search-box'>
          <i class='fas fa-search search-icon'/>
          <input autocomplete='off' class='search-bar' id='global-search' placeholder='ابحث عن مسلسل...' type='text'/>
        </div>
        <div class='search-suggestions' id='search-suggestions'/>
      </div>
      
      <div onclick='showFavorites()' style='width:45px; height:45px; background:var(--primary); border-radius:50%; display:grid; place-items:center; cursor:pointer;'>
        <i class='fas fa-heart' style='color:white'/>
      </div>
    </div>
  </header>

  <main id='main-ui'>
    <section class='hero' id='hero-slider' onclick='toggleSliderMute(event)'/>
    
    <div class='categories-bar'>
      <div class='cat-item active' onclick='filterCategory(&quot;الكل&quot;, this)'>الكل</div>
      <div class='cat-item' onclick='filterCategory(&quot;تركي&quot;, this)'> تركي</div>
      <div class='cat-item' onclick='filterCategory(&quot;عربي&quot;, this)'> عربي</div>
      <div class='cat-item' onclick='filterCategory(&quot;أكشن&quot;, this)'> أكشن</div>
      <div class='cat-item' onclick='filterCategory(&quot;دراما&quot;, this)'> دراما</div>
    </div>

    <div class='main-content-wrapper'>
      <h2 class='section-title' id='grid-title'> مسلسلات جديدة</h2>
      <div class='content-grid' id='main-grid'/>
      
      <!-- نظام الصفحات (Pagination) -->
      <div class='pagination' id='pagination'/>
      
      <!-- مؤشر تحميل للمزيد -->
      <div id='loading-more' style='text-align:center; padding:20px; display:none;'>
        <div class='spinner' style='width:40px; height:40px; margin:0 auto;'/>
      </div>
    </div>
    
<!-- إحصائيات سريعة -->
<div class='quick-stats' style='visibility:hidden;'>
  <div class='stat-item'>
    <div class='stat-number' id='stat-series'>0</div>
    <div class='stat-label'>مسلسل</div>
  </div>
  <div class='stat-item'>
    <div class='stat-number' id='stat-views'>0</div>
    <div class='stat-label'>مشاهدة</div>
  </div>
  <div class='stat-item'>
    <div class='stat-number' id='stat-likes'>0</div>
    <div class='stat-label'>تقييم</div>
  </div>
</div>
    
    <footer class='site-footer'>
      <div class='footer-content'>
        <span class='footer-copy'>&#169; 2026 حكايتنا - جميع الحقوق محفوظة</span>
        <a class='footer-tg' href='https://t.me/hikaytnamy' target='_blank'>
          <i class='fab fa-telegram'/> انضم لقناتنا
        </a>
      </div>
    </footer>
  </main>

  <section id='watch-view'>
    <div class='video-container'>
      
      <div class='server-alert'>
        <i class='fas fa-info-circle'/>
        <span>اختر السيرفر المناسب للمشاهدة</span>
      </div>
      
      <div class='player-holder' id='player-container' oncontextmenu='return false;'>
        <!-- المشغل سيظهر هنا -->
      </div>

      <div style='margin-top:30px; display:flex; flex-direction:column; gap:20px; align-items:flex-start;'>
        <div style='width:100%;'>
          <h1 id='v-title' style='margin:0; font-size:28px; font-weight:900;'/>
          <div style='margin-top:10px; font-size:16px; display:flex; gap:15px; flex-wrap:wrap;'>
            <span id='v-views'><i class='fas fa-eye'/> -- مشاهدة</span>
            <div class='rating-stars' id='rating-stars'>
              <span class='star' data-rating='1'>&#9734;</span>
              <span class='star' data-rating='2'>&#9734;</span>
              <span class='star' data-rating='3'>&#9734;</span>
              <span class='star' data-rating='4'>&#9734;</span>
              <span class='star' data-rating='5'>&#9734;</span>
            </div>
            <div id='v-fav' onclick='toggleFavFromWatch()' style='cursor:pointer;'>
              <i class='fas fa-heart'/> المفضلة
            </div>
          </div>
          <div class='share-buttons'>
            <a class='share-btn share-whatsapp' href='#' onclick='shareSeriesWhatsApp(document.getElementById(&quot;v-title&quot;).innerText); return false;'>
              <i class='fab fa-whatsapp'/>
            </a>
            <a class='share-btn share-telegram' href='#' onclick='shareSeriesTelegram(document.getElementById(&quot;v-title&quot;).innerText); return false;'>
              <i class='fab fa-telegram'/>
            </a>
            <div class='share-btn share-copy' onclick='copySeriesName(document.getElementById(&quot;v-title&quot;).innerText)'>
              <i class='fas fa-copy'/>
            </div>
          </div>
        </div>
        <button onclick='closeWatch()' style='background:#222; border:1px solid #333; color:#fff; padding:12px 25px; border-radius:8px; cursor:pointer; font-family:Cairo; font-weight:700; width:100%; max-width:250px;'>العودة للرئيسية</button>
      </div>
      
      <div style='margin-top:30px;'>
        <h3>سيرفرات المشاهدة</h3>
        <div id='server-list' style='display:flex; gap:10px; flex-wrap:wrap;'/>
      </div>

      <div style='margin-top:40px; background:#0f0f0f; padding:20px; border-radius:12px; border:1px solid #1a1a1a;'>
        <h3 style='margin-top:0; border-bottom:1px solid #222; padding-bottom:15px;'>اختر الحلقة</h3>
        <div id='episodes-grid' style='display:grid; grid-template-columns: repeat(3, 1fr); gap:10px;'/>
      </div>

      <div id='suggestions-section' style='margin-top:40px;'>
        <h3>قد يعجبك أيضا&#1611;</h3>
        <div class='suggestions-grid' id='suggestions-grid'/>
      </div>
    </div>
    
    <footer class='site-footer'>
      <div class='footer-content'>
        <span class='footer-copy'>&#169; 2026 حكايتنا - جميع الحقوق محفوظة</span>
        <a class='footer-tg' href='https://t.me/hikaytnamy' target='_blank'>
          <i class='fab fa-telegram'/> انضم لقناتنا
        </a>
      </div>
    </footer>
  </section>

<script type='text/javascript'>
//<![CDATA[
(function() {
  const allowedDomains = [
    'hikaytna.my',
    'www.hikaytna.my',
    'hikaytna.blogspot.com',
    'localhost'             
  ];
  
  const currentDomain = window.location.hostname;
  const isAllowed = allowedDomains.some(domain => 
    currentDomain === domain || 
    currentDomain.endsWith('.' + domain) ||
    currentDomain.includes(domain.replace('www.', ''))
  );
  
  if (!isAllowed) {
    console.error('⚠️⚠️ هذا الموقع ليس الموقع الأصلي');
    document.body.innerHTML = `
      <div style="background:#050505; color:#fff; font-family:Cairo; text-align:center; padding:50px; min-height:100vh; display:flex; align-items:center; justify-content:center;">
        <div style="max-width:500px;">
          <h1 style="color:#e50914; font-size:40px; margin-bottom:20px;">⛔ غير مصرح</h1>
          <p style="font-size:18px; color:#aaa;">هذا الموقع غير مصرح له بالمشاهدة. يرجى زيارة الموقع الرسمي.</p>
          <p style="font-size:14px; color:#666; margin-top:30px;">hikaytna.my</p>
        </div>
      </div>
    `;
    throw new Error('نطاق غير مصرح');
  }
  
  console.log('✅ النطاق مصرح به');
})();
//]]>
</script>

  <script async='async' data-cfasync='false' data-zone='216819' src='https://quge5.com/88/tag.min.js'></script>
  <script src='https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js'></script>
  <script src='https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js'></script>

  <script type='text/javascript'>
    //<![CDATA[
    // ========== إعدادات Firebase ==========
    const firebaseConfig = {
      apiKey: "AIzaSyCEaxXR5eqzg0e5JvjWAFjZ5ZeMraMYREn",
      authDomain: "mo-play-b0cb7.firebaseapp.com",
      databaseURL: "https://mo-play-b0cb7-default-rtdb.firebaseio.com",
      projectId: "mo-play-b0cb7",
      storageBucket: "mo-play-b0cb7.firebasestorage.app",
      appId: "1:575424024738:web:0b1736c0c2e496adf607fb"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();
    
    // ========== المتغيرات العامة ==========
    let allData = [];
    let displayedData = [];
    let currentSlide = 0;
    let currentId = null;
    let trailerTimer = null;
    let slideTimer = null; 
    let isMuted = true; 
    let audioUnlocked = false;
    let isTransitioning = false;
    let videoEndListeners = [];
    let searchTimeout = null;
    let pendingSeriesItem = null;
    
    let currentPage = 1;
    const itemsPerPage = 20;
    let isLoading = false;
    let hasMore = true;
    
    // متغيرات للـ Pagination
    let totalPages = 1;
    
    let currentEpisodeIndex = 0;
    let currentEpisodes = [];
    let watchProgress = JSON.parse(localStorage.getItem('watch_progress') || '{}');
    
    let favorites = JSON.parse(localStorage.getItem('user_favs') || '[]');
    let watchedEpisodes = JSON.parse(localStorage.getItem('watched_eps') || '{}');
    let viewedInSession = JSON.parse(sessionStorage.getItem('viewed_ids') || '[]');
    
    // متغيرات للتحكم بالإعلانات
    let adShown = {
      floating: false,
      midPage: sessionStorage.getItem('midPageAdShown') === 'true',
      exitIntent: false,
      preEpisode: false
    };

    let deferredPrompt;
    const installButton = document.getElementById('install-button');
    const floatingAd = document.getElementById('floatingAd');
    
    // ========== تحسينات الإعلانات الذكية ==========
    
    // إظهار الإعلان العائم بعد 5 ثوانٍ
    setTimeout(() => {
      if (!localStorage.getItem('floatingAdClosed')) {
        floatingAd.classList.add('show');
        adShown.floating = true;
        
        // إخفاء الإعلان تلقائياً بعد 10 ثوانٍ
        setTimeout(() => {
          floatingAd.classList.remove('show');
        }, 10000);
      }
    }, 5000);
    
    // إظهار إعلان منتصف الصفحة بعد التمرير (مرة واحدة فقط)
    window.addEventListener('scroll', () => {
      const midPageAd = document.getElementById('midPageAd');
      if (!adShown.midPage && window.scrollY > 1000) {
        midPageAd.classList.add('show');
        adShown.midPage = true;
        sessionStorage.setItem('midPageAdShown', 'true');
      }
    }, { passive: true });
    
    // إغلاق الإعلان العائم
    window.closeFloatingAd = function() {
      floatingAd.classList.remove('show');
      localStorage.setItem('floatingAdClosed', 'true');
    };
    
    // إغلاق إعلان منتصف الصفحة
    window.closeMidAd = function() {
      document.getElementById('midPageAd').classList.remove('show');
    };
    
    // إعلان pop-under عند مغادرة الصفحة - مرة واحدة فقط في الجلسة
    let popunderShown = sessionStorage.getItem('popunderShown');
    window.addEventListener('beforeunload', function() {
      if (!popunderShown) {
        setTimeout(() => {
          window.open('https://omg10.com/4/10670511');
        }, 100);
        sessionStorage.setItem('popunderShown', 'true');
      }
    });

    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      console.log('✓ التطبيق مثبت');
      if (installButton) installButton.style.display = 'none';
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      if (installButton) installButton.classList.add('show');
    });

    if (installButton) {
      installButton.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          console.log('✓ تم تثبيت التطبيق');
          installButton.classList.remove('show');
        }
        deferredPrompt = null;
      });
    }

    function enableAudio() {
        if (!audioUnlocked) {
            audioUnlocked = true;
            applyMuteState();
        }
    }

    window.toggleSliderMute = function(event) {
      if (event.target.closest('.watch-btn') || event.target.closest('.mute-btn')) {
        return;
      }
      toggleMute();
    };

    // ========== جلب البيانات من Firebase ==========
    db.ref('series').on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        allData = Object.keys(data).map(key => ({ 
          id: key, 
          ...data[key],
          title: data[key].title || key.replace(/_/g, ' '),
          rating: data[key].rating || 0,
          ratingCount: data[key].ratingCount || 0
        }));
        
        allData.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        
        resetPagination();
        renderAll();
        updateStats();
        setTimeout(() => { document.getElementById('site-loader').style.display='none'; }, 800);
      }
    });

    // ===== دوال الـ Pagination =====
    function resetPagination() {
      currentPage = 1;
      totalPages = Math.ceil(allData.length / itemsPerPage);
      displayedData = allData.slice(0, itemsPerPage);
      renderPagination();
    }

    function renderPagination() {
      const paginationEl = document.getElementById('pagination');
      if (!paginationEl) return;
      
      if (totalPages <= 1) {
        paginationEl.innerHTML = '';
        return;
      }
      
      let html = '';
      
      // زر الصفحة السابقة
      html += `<div class="page-btn ${currentPage === 1 ? 'disabled' : ''}" onclick="changePage(${currentPage - 1})">
        <i class="fas fa-chevron-right"></i>
      </div>`;
      
      // الصفحة الأولى
      if (currentPage > 3) {
        html += `<div class="page-btn" onclick="changePage(1)">1</div>`;
        if (currentPage > 4) html += `<span class="page-dots">...</span>`;
      }
      
      // الصفحات حول الصفحة الحالية
      for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
        html += `<div class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</div>`;
      }
      
      // الصفحة الأخيرة
      if (currentPage < totalPages - 2) {
        if (currentPage < totalPages - 3) html += `<span class="page-dots">...</span>`;
        html += `<div class="page-btn" onclick="changePage(${totalPages})">${totalPages}</div>`;
      }
      
      // زر الصفحة التالية
      html += `<div class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" onclick="changePage(${currentPage + 1})">
        <i class="fas fa-chevron-left"></i>
      </div>`;
      
      paginationEl.innerHTML = html;
    }

    window.changePage = function(page) {
      if (page < 1 || page > totalPages || page === currentPage) return;
      
      currentPage = page;
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      displayedData = allData.slice(start, end);
      
      renderGrid(displayedData);
      renderPagination();
      
      // تمرير سلس لأعلى الشبكة
      document.querySelector('.main-content-wrapper').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };

    function loadMoreItems() {
      return;
    }

    function updateStats() {
      let totalViews = 0;
      let totalRating = 0;
      allData.forEach(item => {
        totalViews += item.views || 0;
        totalRating += (item.rating || 0) * (item.ratingCount || 0);
      });
      document.getElementById('stat-series').innerText = allData.length;
      document.getElementById('stat-views').innerText = totalViews.toLocaleString();
      document.getElementById('stat-likes').innerText = (allData.length > 0 ? (totalRating / allData.length).toFixed(1) : '0') + ' ★';
    }

    function renderAll() {
      resetPagination();
      renderGrid(displayedData);
      renderSlider();
    }

    function renderSlider() {
      const slider = document.getElementById('hero-slider');
      const top = allData.slice(0, 5);
      if(!top.length) return;
      
      videoEndListeners.forEach(listener => listener());
      videoEndListeners = [];
      
      slider.innerHTML = top.map((item, i) => {
        const isYoutube = item.trailer && (item.trailer.includes('youtube.com/embed/') || item.trailer.includes('youtu.be'));
        let trailerUrl = item.trailer;
        
        if (isYoutube && trailerUrl) {
          let videoId = '';
          if (trailerUrl.includes('youtube.com/embed/')) {
            videoId = trailerUrl.split('/').pop().split('?')[0];
          } else if (trailerUrl.includes('youtu.be')) {
            videoId = trailerUrl.split('/').pop().split('?')[0];
          }
          if (videoId) {
            trailerUrl = 'https://www.youtube.com/embed/' + videoId + '?enablejsapi=1&#038;autoplay=0&#038;mute=1&#038;controls=0&#038;loop=0&#038;rel=0&#038;showinfo=0&#038;modestbranding=1';
          }
        }
        
        return `
        <div class="hero-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
          <img src="${item.image}" class="hero-bg" onerror="this.src='https://via.placeholder.com/1280x720/1a1a1a/e50914?text=${encodeURIComponent(item.title)}'"/>
          
          <div class="hero-video-container" id="vid-cont-${i}">
            ${(item.trailer && trailerUrl) ? 
              (isYoutube ? 
                '<iframe id="player-' + i + '" width="100%" height="100%" src="' + trailerUrl + '" frameborder="0" allow="autoplay; encrypted-media" style="width:100%; height:100%; object-fit:cover; pointer-events:none;"></iframe>' :
                '<video id="player-' + i + '" src="' + item.trailer + '" playsinline="playsinline" muted="muted" style="width:100%; height:100%; object-fit:cover;"></video>'
              ) : ''
            }
          </div>

          <div class="center-mute-trigger ${!isMuted ? 'hidden' : ''}" id="cmute-${i}" onclick="event.stopPropagation(); toggleMute()">
            <i class="fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}"></i>
          </div>

          <div class="hero-overlay"></div>
          <div class="hero-content">
            <div class="hero-badge">${item.rating ? '★ ' + item.rating.toFixed(1) : 'حصرياً'}</div>
            <h1>${item.title}</h1>
            <div class="hero-buttons">
               <button class="watch-btn" onclick="event.stopPropagation(); openWatchWithAd('${item.id}')">
                 <i class="fas fa-play" style="margin-left:8px;"></i> مشاهدة
               </button>
               <button class="mute-btn" onclick="event.stopPropagation(); toggleMute()">
                 <i class="fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}"></i>
               </button>
            </div>
          </div>
        </div>
      `}).join('');

      initSliderCycle();
    }

    window.toggleMute = function() {
      isMuted = !isMuted;
      applyMuteState();
    };

    function applyMuteState() {
      const icons = document.querySelectorAll('.mute-btn i, .center-mute-trigger i');
      icons.forEach(icon => icon.className = isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up');
      
      document.querySelectorAll('.center-mute-trigger').forEach(btn => {
        if(isMuted) btn.classList.remove('hidden');
        else btn.classList.add('hidden');
      });
      
      const players = document.querySelectorAll('.hero-video-container video, .hero-video-container iframe');
      players.forEach(p => {
        if(p.tagName === 'VIDEO') {
          p.muted = isMuted;
          if(!isMuted && p.paused && p.closest('.hero-slide.active')) p.play().catch(() => {});
        } else {
          try {
            const cmd = isMuted ? 'mute' : 'unMute';
            p.contentWindow?.postMessage('{"event":"command","func":"' + cmd + '","args":""}', '*');
          } catch(e) {}
        }
      });
    }

    function initSliderCycle() {
      if(slideTimer) clearInterval(slideTimer);
      if(trailerTimer) clearTimeout(trailerTimer);
      
      startTrailerForCurrentSlide();
      slideTimer = setInterval(() => {
        if (!isTransitioning) {
          isTransitioning = true;
          nextSlide();
          setTimeout(() => { isTransitioning = false; }, 1500);
        }
      }, 120000);
    }

    function startTrailerForCurrentSlide() {
      const activeSlide = document.querySelector('.hero-slide.active');
      if(!activeSlide) return;
      
      const index = activeSlide.dataset.index;
      const player = document.getElementById('player-' + index);
      const container = document.getElementById('vid-cont-' + index);
      
      if(player && container) {
        container.classList.add('playing');
        
        if(player.tagName === 'VIDEO') {
          player.muted = isMuted;
          player.currentTime = 0;
          player.play().catch(e => {});
          
          const onEnded = () => {
            if (player.closest('.hero-slide.active') && !isTransitioning) {
              isTransitioning = true;
              nextSlide();
              setTimeout(() => { isTransitioning = false; }, 1500);
            }
          };
          
          player.addEventListener('ended', onEnded);
          videoEndListeners.push(() => player.removeEventListener('ended', onEnded));
          
        } else {
          try {
            const cmd = isMuted ? 'mute' : 'unMute';
            player.contentWindow?.postMessage('{"event":"command","func":"' + cmd + '","args":""}', '*');
            player.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          } catch(e) {}
        }
      }
    }

    function nextSlide() {
      const slides = document.querySelectorAll('.hero-slide');
      if(!slides.length) return;
      
      const currentActive = document.querySelector('.hero-slide.active');
      if(currentActive){
          const idx = currentActive.dataset.index;
          const oldPlayer = document.getElementById('player-' + idx);
          const oldCont = document.getElementById('vid-cont-' + idx);
          
          if(oldPlayer) {
              if(oldPlayer.tagName === 'VIDEO') {
                  oldPlayer.pause();
                  oldPlayer.currentTime = 0;
              } else {
                  try {
                      oldPlayer.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                  } catch(e) {}
              }
          }
          if(oldCont) oldCont.classList.remove('playing');
          currentActive.classList.remove('active');
      }

      currentSlide = (currentSlide + 1) % slides.length;
      if(slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
        setTimeout(() => startTrailerForCurrentSlide(), 500);
      }
    }

    function levenshteinDistance(a, b) {
      const matrix = [];
      for (let i = 0; i <= b.length; i++) matrix[i] = [i];
      for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
      
      for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
          if (b.charAt(i-1) === a.charAt(j-1)) {
            matrix[i][j] = matrix[i-1][j-1];
          } else {
            matrix[i][j] = Math.min(
              matrix[i-1][j-1] + 1,
              matrix[i][j-1] + 1,
              matrix[i-1][j] + 1
            );
          }
        }
      }
      return matrix[b.length][a.length];
    }

    function similarity(a, b) {
      a = a.toLowerCase();
      b = b.toLowerCase();
      if (a === b) return 1;
      if (a.includes(b) || b.includes(a)) return 0.9;
      const distance = levenshteinDistance(a, b);
      const maxLength = Math.max(a.length, b.length);
      return maxLength === 0 ? 1 : (maxLength - distance) / maxLength;
    }

    function performSearch(query) {
      query = query.toLowerCase().trim();
      
      if (query.length < 2) {
        document.getElementById('search-suggestions').classList.remove('active');
        resetPagination();
        renderGrid(displayedData);
        renderPagination();
        return;
      }
      
      let results = allData.map(item => {
        const titleLower = item.title.toLowerCase();
        const exactMatch = titleLower.includes(query);
        const simScore = similarity(titleLower, query);
        
        return {
          ...item,
          score: exactMatch ? 1 : simScore
        };
      }).filter(item => item.score > 0.4)
        .sort((a, b) => b.score - a.score);
      
      allData = results;
      resetPagination();
      renderGrid(displayedData);
      renderPagination();
      
      showSearchSuggestions(results.slice(0, 5));
    }

    function showSearchSuggestions(results) {
      const suggestionsEl = document.getElementById('search-suggestions');
      
      if (results.length === 0) {
        suggestionsEl.classList.remove('active');
        return;
      }
      
      suggestionsEl.innerHTML = results.map(item => `
        <div class="suggestion-item" onclick="openWatchWithAd('${item.id}')">
          <img src="${item.image}" onerror="this.src='https://via.placeholder.com/50x70/1a1a1a/e50914?text=No'"/>
          <div class="suggestion-info">
            <h4>${item.title}</h4>
            <p><i class="fas fa-eye"></i> ${item.views || 0} مشاهدة • ★ ${item.rating ? item.rating.toFixed(1) : '0'}</p>
          </div>
        </div>
      `).join('');
      
      suggestionsEl.classList.add('active');
    }

    function renderGrid(items, append = false) {
      const grid = document.getElementById('main-grid');
      if(!grid) return;
      
      if(items.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:50px; color:#666;">لا توجد نتائج</div>';
        return;
      }
      
      let html = append ? grid.innerHTML : '';
      items.forEach((item, index) => {
        const progress = watchProgress[item.id] ? (watchProgress[item.id].progress || 0) : 0;
        const progressStyle = progress > 0 ? `<div class="watched-progress" style="width:${progress}%;"></div>` : '';
        
        html += `
        <div class="movie-card" style="position:relative;">
          ${progressStyle}
          <div class="fav-card-btn ${favorites.includes(item.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFav('${item.id}', this)">
            <i class="fas fa-heart"></i>
          </div>
          <div class="card-img" onclick="openWatchWithAd('${item.id}')">
            <img src="${item.image}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/1a1a1a/e50914?text=${encodeURIComponent(item.title)}'"/>
            <div class="card-meta">
              <div class="card-title">${item.title}</div>
              <div class="card-stats">
                <span><i class="fas fa-eye"></i> ${item.views || 0}</span>
                <span>★ ${item.rating ? item.rating.toFixed(1) : '0'}</span>
              </div>
            </div>
          </div>
        </div>
        `;
        
        // إعلان بين البطاقات - كل 4 بطاقات فقط
        if (!append && (index + 1) % 4 === 0 && index < items.length - 1) {
          html += `
          <div class="ad-card" style="padding:0; overflow:hidden; position:relative;">
            <div class="ad-badge-small" style="position:absolute; top:10px; right:10px; z-index:10; background:#ffd700; color:#000; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:700;">إعلان</div>
            
            <iframe src="https://omg10.com/4/10670511" style="width:100%; height:100%; border:none; min-height:450px;" scrolling="no" frameborder="0" allow="fullscreen"></iframe>
          </div>
          `;
        }
      });
      
      grid.innerHTML = html;
    }

    function isVideoUrl(url) {
      if (!url) return false;
      const urlLower = url.toLowerCase();
      
      const videoExtensions = ['.mp4', '.m3u8', '.mkv', '.avi', '.mov', '.wmv', '.flv', '.webm'];
      for (let ext of videoExtensions) {
        if (urlLower.includes(ext)) return true;
      }
      
      const protectedVideoPatterns = [
        'vid', 'video', 'stream', 'embed', 'watch', 'zvde-dsn',
        '.net/', '.site/', '.org/', '.io/', '/video/', '/stream/'
      ];
      
      for (let pattern of protectedVideoPatterns) {
        if (urlLower.includes(pattern)) return true;
      }
      return false;
    }

    // إعلان قبل المشاهدة - 5 ثوان فقط
    function showPreEpisodeAd(callback) {
      if (adShown.preEpisode) {
        callback();
        return;
      }
      
      adShown.preEpisode = true;
      
      const adOverlay = document.createElement('div');
      adOverlay.className = 'pre-episode-ad-overlay';
      adOverlay.id = 'preEpisodeAd';
      adOverlay.innerHTML = `
        <div class="pre-episode-ad-container">
          <div class="pre-episode-ad-header">
            <span class="pre-episode-ad-title">📺 إعلان سريع</span>
            
            <span class="pre-episode-ad-timer"><span id="preAdCounter">5</span> ثوان</span>
          </div>
          <div class="pre-episode-ad-placeholder" id="preAdPlaceholder"></div>
          <div class="pre-episode-ad-skip">
            <button class="pre-episode-ad-skip-btn" id="preAdSkipBtn">تخطي الإعلان</button>
          </div>
        </div>
      `;
      
      document.body.appendChild(adOverlay);
      
      const adPlaceholder = document.getElementById('preAdPlaceholder');
      
      try {
        const adIframe = document.createElement('iframe');
        adIframe.src = 'https://omg10.com/4/10670511';
        adIframe.style.width = '100%';
        adIframe.style.height = '100%';
        adIframe.style.border = 'none';
        adIframe.setAttribute('allowfullscreen', 'true');
        adIframe.setAttribute('allow', 'autoplay; fullscreen');
        adPlaceholder.appendChild(adIframe);
      } catch(e) {
        adPlaceholder.innerHTML = `<a href="https://omg10.com/4/10670625" target="_blank" style="display:block; width:100%; height:100%; background:#333; color:#fff; text-align:center; line-height:300px;">اضغط للإعلان</a>`;
      }
      
      let counter = 5;
      const counterEl = document.getElementById('preAdCounter');
      const skipBtn = document.getElementById('preAdSkipBtn');
      
      const timer = setInterval(() => {
        counter--;
        if (counterEl) counterEl.innerText = counter;
        if (counter <= 0) {
          clearInterval(timer);
          if (skipBtn) {
            skipBtn.classList.add('active');
            skipBtn.onclick = () => {
              const overlay = document.getElementById('preEpisodeAd');
              if (overlay) overlay.remove();
              if (callback) callback();
            };
            skipBtn.ontouchstart = (e) => {
              e.preventDefault();
              const overlay = document.getElementById('preEpisodeAd');
              if (overlay) overlay.remove();
              if (callback) callback();
            };
          }
        }
      }, 1000);
    }

    window.openWatchWithAd = function(id) {
      const item = allData.find(x => x.id === id);
      if (!item) return;
      pendingSeriesItem = item;
      showPreEpisodeAd(() => {
        proceedToWatch(pendingSeriesItem);
      });
    };

    function proceedToWatch(item) {
      currentId = item.id;
      
      document.getElementById('dynamic-title').innerText = `مشاهدة مسلسل ${item.title} - حكايتنا`;
      document.getElementById('dynamic-description').setAttribute('content', `شاهد مسلسل ${item.title} بجودة عالية على حكايتنا`);
      
      if(trailerTimer) clearTimeout(trailerTimer);
      if(slideTimer) clearInterval(slideTimer);
      document.getElementById('search-container').style.display = 'none';

      if(!viewedInSession.includes(item.id)) {
          db.ref('series/' + item.id).update({ views: (item.views || 0) + 1 });
          viewedInSession.push(item.id);
          sessionStorage.setItem('viewed_ids', JSON.stringify(viewedInSession));
      }

      document.getElementById('main-ui').style.display = 'none';
      document.getElementById('watch-view').style.display = 'block';
      document.getElementById('v-title').innerText = item.title;
      document.getElementById('v-views').innerHTML = '<i class="fas fa-eye"></i> ' + (item.views || 0);
      
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => {
        star.innerHTML = '☆';
        star.classList.remove('active', 'half');
      });
      const rating = item.rating || 0;
      for (let i = 0; i < Math.floor(rating); i++) {
        stars[i].innerHTML = '★';
        stars[i].classList.add('active');
      }
      if (rating % 1 >= 0.5 && stars[Math.floor(rating)]) {
        stars[Math.floor(rating)].innerHTML = '★';
        stars[Math.floor(rating)].classList.add('half');
      }
      
      document.getElementById('v-fav').style.color = favorites.includes(item.id) ? 'var(--primary)' : '#aaa';

      const epGrid = document.getElementById('episodes-grid');
      epGrid.innerHTML = '';
      
      const episodes = Array.isArray(item.episodes) ? item.episodes : Object.values(item.episodes || {});
      currentEpisodes = episodes;
      
      if (episodes.length === 0) {
        epGrid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:20px; color:#666;">لا توجد حلقات</div>';
      } else {
        episodes.forEach((ep, i) => {
          const d = document.createElement('div');
          const isWatched = watchedEpisodes[item.id] && watchedEpisodes[item.id].includes(i);
          d.className = 'episode-btn' + (isWatched ? ' watched' : '');
          
          const epDisplayTitle = ep.title ? ep.title : (i + 1);
          const finalText = (epDisplayTitle == "الاخيرة" || epDisplayTitle == "الأخيرة") ? "الأخيرة" : 'الحلقة ' + epDisplayTitle;

          d.innerHTML = '<img src="' + item.image + '" onerror="this.src=\'https://via.placeholder.com/300x450/1a1a1a/e50914?text=No\'"/><div class="ep-num">' + finalText + '</div>';

          d.onclick = function() {
            document.querySelectorAll('.episode-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            if(!this.classList.contains('watched')) this.classList.add('watched');
            
            if(!watchedEpisodes[item.id]) watchedEpisodes[item.id] = [];
            if(!watchedEpisodes[item.id].includes(i)) watchedEpisodes[item.id].push(i);
            localStorage.setItem('watched_eps', JSON.stringify(watchedEpisodes));
            
            currentEpisodeIndex = i;
            setupServers(ep);
          };
          epGrid.appendChild(d);
        });
      }
      
      if(episodes.length > 0 && episodes[0]) {
        setTimeout(() => {
          if (epGrid.firstChild) epGrid.firstChild.click();
        }, 100);
      }
      
      showSuggestions(item);
      window.scrollTo(0,0);
      document.getElementById('search-suggestions').classList.remove('active');
    }

    function showSuggestions(currentItem) {
      const suggestionsGrid = document.getElementById('suggestions-grid');
      if (!suggestionsGrid) return;
      
      const category = currentItem.category || '';
      const suggestions = allData
        .filter(item => item.id !== currentItem.id && 
               (item.category && item.category.includes(category)))
        .slice(0, 5);
      
      if (suggestions.length === 0) {
        suggestionsGrid.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:#666;">لا توجد اقتراحات</div>';
        return;
      }
      
      suggestionsGrid.innerHTML = suggestions.map(item => `
        <div class="movie-card" onclick="openWatchWithAd('${item.id}')">
          <div class="card-img">
            <img src="${item.image}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/1a1a1a/e50914?text=${encodeURIComponent(item.title)}'"/>
            <div class="card-meta">
              <div class="card-title">${item.title}</div>
              <div class="card-stats">
                <span><i class="fas fa-eye"></i> ${item.views || 0}</span>
                <span>★ ${item.rating ? item.rating.toFixed(1) : '0'}</span>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }

    document.getElementById('global-search').addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => performSearch(e.target.value), 300);
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        document.getElementById('search-suggestions').classList.remove('active');
      }
    });

    window.toggleFav = (id, el) => {
        if(favorites.includes(id)) {
            favorites = favorites.filter(f => f !== id);
            el.classList.remove('active');
        } else {
            favorites.push(id);
            el.classList.add('active');
        }
        localStorage.setItem('user_favs', JSON.stringify(favorites));
    };

    window.showFavorites = () => {
        const favData = allData.filter(i => favorites.includes(i.id));
        document.getElementById('grid-title').innerText = '⭐ المفضلة';
        
        allData = favData;
        resetPagination();
        renderGrid(displayedData);
        renderPagination();
        
        if(document.getElementById('drawer').classList.contains('active')) toggleMenu();
        window.scrollTo({ top: 500, behavior: 'smooth' });
        document.getElementById('search-suggestions').classList.remove('active');
    };

    window.filterCategory = (cat, el) => {
      document.querySelectorAll('.cat-item').forEach(i => i.classList.remove('active'));
      el.classList.add('active');
      document.getElementById('grid-title').innerText = cat === 'الكل' ? ' مسلسلات جديدة' : cat;
      
      let filtered;
      if(cat === 'الكل') {
        filtered = allData;
      } else {
        filtered = allData.filter(item => 
          (item.category && item.category.includes(cat)) || 
          (item.title && item.title.includes(cat))
        );
      }
      
      allData = filtered;
      resetPagination();
      renderGrid(displayedData);
      renderPagination();
      document.getElementById('search-suggestions').classList.remove('active');
    };

    // ========== المشغل ==========
    function setupServers(ep) {
      const srvList = document.getElementById('server-list');
      srvList.innerHTML = '';
      
      const links = [
        { n: 'سيرفر 1', l: ep.link1 },
        { n: 'سيرفر 2', l: ep.link2 },
        { n: 'سيرفر 3', l: ep.link3 }
      ].filter(x => x.l && x.l.trim() !== '');

      if (links.length === 0) {
        srvList.innerHTML = '<div style="color:#666;">لا توجد سيرفرات</div>';
        return;
      }

      links.forEach((link, idx) => {
        const b = document.createElement('div');
        b.className = 'server-btn';
        b.style.cssText = "padding:8px 20px; background:#222; border-radius:30px; cursor:pointer; border:1px solid #444; color:#fff; font-size:14px;";
        b.innerText = link.n;
        b.onclick = function() {
          document.querySelectorAll('.server-btn').forEach(s => s.classList.remove('active'));
          this.classList.add('active');
          
          if (isVideoUrl(link.l)) {
            const container = document.getElementById('player-container');
            container.innerHTML = '';
            
            const video = document.createElement('video');
            video.className = 'html5-video';
            video.controls = true;
            video.autoplay = true;
            video.playsinline = true;
            video.controlsList = 'nodownload';
            video.oncontextmenu = () => false;
            video.disablePictureInPicture = true;
            
            const source = document.createElement('source');
            source.src = link.l;
            source.type = 'video/mp4';
            
            video.appendChild(source);
            container.appendChild(video);

            video.addEventListener('timeupdate', () => {
              if (!watchProgress[currentId]) watchProgress[currentId] = {};
              watchProgress[currentId] = {
                time: video.currentTime,
                episode: currentEpisodeIndex,
                progress: (video.currentTime / video.duration) * 100 || 0
              };
              localStorage.setItem('watch_progress', JSON.stringify(watchProgress));
            });

            const savedProgress = watchProgress[currentId];
            if (savedProgress && savedProgress.episode === currentEpisodeIndex) {
              video.currentTime = savedProgress.time || 0;
            }
            
          } else {
            const container = document.getElementById('player-container');
            container.innerHTML = '<iframe class="main-frame" src="' + link.l + '" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>';
          }
        };
        srvList.appendChild(b);
      });
      
      if(links.length > 0) {
        const firstLink = links[0].l;
        if (isVideoUrl(firstLink)) {
          const container = document.getElementById('player-container');
          container.innerHTML = '';
          
          const video = document.createElement('video');
          video.className = 'html5-video';
          video.controls = true;
          video.autoplay = true;
          video.playsinline = true;
          video.controlsList = 'nodownload';
          video.oncontextmenu = () => false;
          video.disablePictureInPicture = true;
          
          const source = document.createElement('source');
          source.src = firstLink;
          source.type = 'video/mp4';
          
          video.appendChild(source);
          container.appendChild(video);
        } else {
          const container = document.getElementById('player-container');
          container.innerHTML = '<iframe class="main-frame" src="' + firstLink + '" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>';
        }
      }
    }

    document.querySelectorAll('.star').forEach(star => {
      star.addEventListener('click', function() {
        const rating = parseInt(this.dataset.rating);
        if (!currentId) return;
        
        db.ref('series/' + currentId).transaction((item) => {
          if (item) {
            const oldRating = item.rating || 0;
            const oldCount = item.ratingCount || 0;
            const newRating = ((oldRating * oldCount) + rating) / (oldCount + 1);
            return {
              ...item,
              rating: newRating,
              ratingCount: oldCount + 1
            };
          }
          return item;
        });
        
        const stars = document.querySelectorAll('.star');
        stars.forEach((s, i) => {
          if (i < rating) {
            s.innerHTML = '★';
            s.classList.add('active');
          } else {
            s.innerHTML = '☆';
            s.classList.remove('active');
          }
        });
      });
    });

    window.toggleFavFromWatch = () => {
        if(!currentId) return;
        if(favorites.includes(currentId)) {
            favorites = favorites.filter(f => f !== currentId);
            document.getElementById('v-fav').style.color = '#aaa';
        } else {
            favorites.push(currentId);
            document.getElementById('v-fav').style.color = 'var(--primary)';
        }
        localStorage.setItem('user_favs', JSON.stringify(favorites));
        renderGrid(displayedData);
    };

    window.toggleMenu = () => {
      document.getElementById('drawer').classList.toggle('active');
      document.getElementById('overlay').classList.toggle('active');
    };

    window.closeWatch = () => {
      document.getElementById('watch-view').style.display = 'none';
      document.getElementById('main-ui').style.display = 'block';
      document.getElementById('player-container').innerHTML = '';
      document.getElementById('episodes-grid').innerHTML = '';
      document.getElementById('server-list').innerHTML = '';
      document.getElementById('search-container').style.display = 'block';
      
      document.getElementById('dynamic-title').innerText = 'حكايتنا - مسلسلات تركية وعربية';
      document.getElementById('dynamic-description').setAttribute('content', 'شاهد أحدث المسلسلات التركية والعربية بجودة عالية.');
      
      currentId = null;
      initSliderCycle(); 
    };

    window.onscroll = () => {
      const h = document.getElementById('main-header');
      if (window.scrollY > 50) h.classList.add('scrolled');
      else h.classList.remove('scrolled');
      
      const backToTop = document.getElementById('backToTop');
      if (window.scrollY > 500) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    };

    const backToTop = document.getElementById('backToTop');
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.shareSeriesWhatsApp = function(title) {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent('شاهد مسلسل ' + title + ' على حكايتنا')}`;
      window.open(whatsappUrl, '_blank');
    };

    window.shareSeriesTelegram = function(title) {
      const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(window.location.origin)}&text=${encodeURIComponent('مسلسل ' + title)}`;
      window.open(telegramUrl, '_blank');
    };

    window.copySeriesName = function(title) {
      navigator.clipboard.writeText(title).then(() => {
        const toast = document.getElementById('copyToast');
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2000);
      });
    };

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('https://raw.githubusercontent.com/mo-play/service-worker/main/sw.js')
          .then(reg => console.log('✓ وضع التطبيق نشط'))
          .catch(err => console.log('✓ الموقع يعمل بشكل طبيعي'));
      });
    }
    //]]>
  </script>
  
  <style>
    /* تحسينات إضافية */
    .movie-card { contain: content; }
    .content-grid { contain: content; }
  </style>
</body>
</html>
