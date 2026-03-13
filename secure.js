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
