// This is a JavaScript file
  var arr=new Array();
  arr.taro={'名前':'太郎','メール':'taro@yamada.com','電話':'888-7777'};
  arr.hanako={'名前':'花子','メール':'hanako@hanako.com','電話':'555-5555'};
  arr.tuyano={'名前':'つやの','メール':'tuyano@mac.com','電話':'03-3333-3333'};
  document.write('<ul>');
  for(obj in arr){
     // var dataobj=arr[obj];
      document.write('<li>');
      for(obj2 in arr[obj]){
          document.write(obj+':'+obj2+':'+arr[obj][obj2]+'<br>');
      }
      document.write('</li>');
  }
  document.write('</ul>');