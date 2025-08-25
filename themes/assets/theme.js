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

