const $ = require("jquery");
document.addEventListener('DOMContentLoaded',()=>{
  $('external-link').each(function(){
    const link = document.createElement('a');
    link.href = $(this).attr('url');
    link.classList.add("ExternalLink");
    link.target = "_blank";
    link.rel = "noopener noreferrer"
    link.innerHTML = `${$(this).text()}<span class="material-icons">open_in_new</span>`;
    this.insertAdjacentElement("afterend",link);
    $(this).remove();
  })
})