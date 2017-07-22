$("document:ready", function() {
  tinyMCE.init({
    selector: ".tinymce",
    inline: false,
    toolbar: [
      "insertfile undo redo | styleselect | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | codesample",
      "formatselect fontsizeselect table" ],
    image_advtab: true,
    style_formats: [
    {title: 'checkMark', selector: 'li', 
    styles: {
        'list-style-image' : 'url("../images/check-mark.png" )' //your desired image
     }
    }
    ],
    plugins: "table,code,textcolor,colorpicker,codesample,link,autolink,autoresize,lists,advlist",
    default_link_target: "_blank",
    target_list: false,
    fontsize_formats: '8px 10px 12px 14px 18px 24px 36px'
  });
});
