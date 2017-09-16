 tinymce.init({
     selector: '#mytextarea',
     formats: {
         bold: {
             inline: 'b'
         }
     },
     height: 200,
    // content_css: 'https://www.tinymce.com/css/codepen.min.css',
     plugins: [
         ' paste '
     ],
     cleanup: true,
     forced_root_block: "",
     menubar: false,
     statusbar: false,
     toolbar: false,
     valid_elements: 'p,b,strong,br,ul,li',
     setup: function(ed) { //
         //console.log();
         $('strong').each(function() {
             var $this = $(this);
             if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
                 $this.remove();
         });
         ed.on('keyup', function(e) {
             console.log(ed.getContent());
             $("#htmlcontent").text(ed.getContent().replace(/&nbsp;/g, '').replace(/<strong>/g, '<b>').replace(/<\/strong>/g, '</b>').replace(/<li>(.*?)<\/li>/ig, "<p>- $1</p>").replace(/<ul>/ig,"").replace(/<\/ul>/ig,"").replace(/<p><\/p>/ig, "<br/>")
                )
         })

           ed.on('paste', function(e) {
             console.log(ed.getContent());
             $("#htmlcontent").text(ed.getContent().replace(/&nbsp;/g, '').replace(/<strong>/g, '<b>').replace(/<\/strong>/g, '</b>').replace(/<li>(.*?)<\/li>/ig, "<p>- $1</p>").replace(/<ul>/ig,"").replace(/<\/ul>/ig,"").replace(/<p><\/p>/ig, "<br/>")
                )
         })
     }
 });

 function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
};
