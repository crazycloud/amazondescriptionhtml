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
              var convertedContent = ed.getContent().replace(/&nbsp;/g, '').replace(/<strong>/g, '<b>').replace(/<\/strong>/g, '</b>').replace(/<li>(.*?)<\/li>/ig, "<t>- $1</t>").replace(/<ul>/ig,"").replace(/<\/ul>/ig,"<br>").replace(/<p><\/p>/ig, "<br>").replace(/<t>(.*?)<\/t>/ig, "$1<br>").replace(/<p>(.*?)<\/p>/ig, "$1<br><br>").replace(/\&amp;/g, "&").replace(/\&gt;/g, ">").replace(/\&lt;/g, "<").replace(/\&rsquo;/g, "'")
             $("#htmlcontent").text(convertedContent)

         })

           ed.on('paste', function(e) {
           	
            var convertedContent = ed.getContent().replace(/&nbsp;/g, '').replace(/<strong>/g, '<b>').replace(/<\/strong>/g, '</b>').replace(/<li>(.*?)<\/li>/ig, "<t>- $1</t>").replace(/<ul>/ig,"").replace(/<\/ul>/ig,"<br>").replace(/<p><\/p>/ig, "<br>").replace(/<t>(.*?)<\/t>/ig, "$1<br>").replace(/<p>(.*?)<\/p>/ig, "$1<br><br>").replace(/\&amp;/g, "&").replace(/\&gt;/g, ">").replace(/\&lt;/g, "<").replace(/\&rsquo;/g, "'")
             $("#htmlcontent").text(convertedContent)
         })
     }
 });

 function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $('#open_ender_output').html(
  // create an element where the html content as the string
  $('<div/>', {
    html: $("#htmlcontent").html()
  // get text content from element for decoded text  
  }).text()
)
};
