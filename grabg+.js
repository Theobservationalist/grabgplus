var system  = require('system');
var args  = system.args;
var addr;

if (args.length === 1){
console.log('uncompleted syntax !!');
phantom.exit(1);
}else{
addr = system.args[1];

var page = require('webpage').create();

page.open('https://www.youtube.com/user/'+addr,function(status){

if (status === 'fail'){

console.log('network problems : '+status);

}else{

   var data = page.evaluate(function(){
   	
    return document.getElementsByClassName('about-channel-link yt-uix-redirect-link about-channel-link-with-icon')[0].getAttribute('href');

     });
   console.log('user account:'+ data);
   }
   phantom.exit(); 
  });
 }

