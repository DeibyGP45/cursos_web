

export function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    
    
export function getCookie(cname) {
    
    
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var cArray = decodedCookie.split(';');
    let r = ''

    cArray.some( item => {
      item = item.trimLeft()
        if (item.indexOf(name) == 0) {
          r  = item.substring(name.length, item.length);
            return true
        }
})
return r ;

}