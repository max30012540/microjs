$.ajax=function(c,d){var a=$.copySetting({method:"GET",url:"/",header:void 0,data:void 0,dataType:"text",async:!0,timeout:30,completed:void 0,success:void 0,fail:void 0},"object"===typeof c?c:d),b=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");b.onreadystatechange=function(){4==b.readyState&&(clearTimeout(g),typeof a.completed===func&&a.completed(b,b.statusText),200==b.status?typeof a.success===func&&a.success("json"==dataType?JSON.parse(b.responseText):b.responseText):
typeof a.fail===func&&a.fail(b.status,b.statusText))};b.open(a.method,"object"===typeof c?a.url:c,a.sync);if(0<a.header.length)for(var e in a.header)a.header.hasOwnProperty(e)&&b.setRequestHeader(e,a.header[e]);if(typeof a.data!=undef){var f="";if("object"===typeof a.data){for(e in a.data)a.header.hasOwnProperty(e)&&(f+=encodeURI(e)+"="+encodeURI(a.data[e])+"&");f=f.substr(0,f.length-1)}else"string"===typeof a.data&&(f=a.data);b.send(f);return b}b.send();var g=setTimeout(function(){b.abort()},a.timeout);
return b};$.post=function(c,d,a,b){return $.ajax({url:c,method:"POST",data:d,success:a,dataType:b})};$.get=function(c,d,a){return $.ajax({url:c,success:d,dataType:a})};$.json=function(c,d){return $.ajax({url:c,success:d,dataType:"json"})};