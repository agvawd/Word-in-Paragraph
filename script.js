// https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection
// https://developer.mozilla.org/en-US/docs/Web/API/Selection/modify
// $("body").click(function(){
// 	debugger;
//      var s = window.getSelection();
//     s.modify('extend','backward','word');        
//     var b = s.toString();

//     s.modify('extend','forward','word');
//     var a = s.toString();
//     s.modify('move','forward','character');
//      alert(b+a);
// });

var p = $('p');

p.html(function(index, oldHtml) {
    return oldHtml.replace(/\b(\w+?)\b/g, '<span class="word">$1</span>')
});

p.click(function(event) { 
    if(this.id == event.target.id) {
        alert(event.target.innerHTML);
    }
});