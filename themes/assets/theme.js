const links = document.links;
for (let i = 0, linksLength = links.length ; i < linksLength ; i++) {
 if (links[i].hostname !== window.location.hostname) {
  links[i].target = '_blank';
  links[i].rel = 'noreferrer noopener';
 }
}

// custom-main-product.liquid accrodion icon
document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion details');
  
  accordions.forEach(accordion => {
    const summary = accordion.querySelector('summary');
    const iconCaret = summary.querySelector('.icon-caret');
    
    // アコーディオンの状態変化を監視
    accordion.addEventListener('toggle', function() {
      if (accordion.open) {
        // 開いている時のSVGに変更
        iconCaret.innerHTML = `
          <svg class="icon icon-caret" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg>
        `;
      } else {
        // 閉じている時のSVGに戻す（元のアイコン）
        iconCaret.innerHTML = `
          <svg class="icon icon-caret" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
        `;
      }
    });
  });
});


// ヘッダーの高さを考慮したスムーススクロール
document.addEventListener('DOMContentLoaded', function() {
  const HEADER_HEIGHT = 80; // ヘッダーの高さ（px）
  
  // guide_boxを含むIDのアンカーリンクを対象とする
  const anchorLinks = document.querySelectorAll('a[href*="#guide-box"]');
  
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // デフォルトの動作を防ぐ
      
      // リンク先のIDを取得
      const href = this.getAttribute('href');
      const targetId = href.substring(href.indexOf('#') + 1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // 目標位置を計算（要素の位置 - ヘッダーの高さ）
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - HEADER_HEIGHT;
        
        // スムーススクロールで移動
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // URLのハッシュを更新（履歴に追加）
        history.pushState(null, null, href);
      }
    });
  });
  
  // ページ読み込み時にURLにハッシュがある場合の対応
  if (window.location.hash && window.location.hash.includes('guide-box')) {
    setTimeout(function() {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - HEADER_HEIGHT;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // 少し遅延させてページの読み込みを待つ
  }
});