(()=>{async function e(e){let t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=c29b4a211db56e2c54591d2330d2d5cd`),a=await t.json();var m;"200"!=a.cod?document.getElementById("error-input").style.display="block":(document.getElementById("error-input").style.display="none",console.log(a),n(a.name,"city-name","",""),m=a.weather[0].icon,document.getElementById("weather-pic").src="http://openweathermap.org/img/wn/"+m+"@2x.png",console.log(a.weather[0].icon),n(Math.round(a.main.temp-273),"main-temperature","","&#8451;"),n(Math.round(a.main.feels_like-273),"main-feels-like","Feels like: ","&#8451;"),n(a.main.humidity,"main-humidity","Humidity: ","%"),n(a.weather[0].description[0].toUpperCase()+a.weather[0].description.substring(1),"main-clouds","",""),n(Math.round(a.main.temp_max-273),"max-temp","","&#8451;"),n(Math.round(a.main.temp_min-273),"min-temp","","&#8451;"))}function n(e,n,t,a){document.getElementById(n).innerHTML=t+e+a}search_button=document.getElementById("search-button"),search_button.addEventListener("click",(function(){e(document.getElementById("place-input").value)})),changeTempButton=document.getElementById("temp-changer"),changeTempButton.addEventListener("click",(async function(){let e=document.getElementById("city-name").innerHTML,n=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=c29b4a211db56e2c54591d2330d2d5cd`),t=await n.json(),a=t.main.temp-273,m=t.main.temp_min-273,i=t.main.temp_max-273,d=t.main.feels_like-273;"s"==changeTempButton.innerHTML[changeTempButton.innerHTML.length-1]?(document.getElementById("main-temperature").innerHTML=Math.round(a)+"&#8451;",document.getElementById("min-temp").innerHTML=Math.round(m)+"&#8451;",document.getElementById("max-temp").innerHTML=Math.round(i)+"&#8451;",document.getElementById("main-feels-like").innerHTML="Feels like: "+Math.round(d)+"&#8451;",changeTempButton.innerHTML="Change to Fahrenheit"):(document.getElementById("main-temperature").innerHTML=Math.round(1.8*a+32)+"&#8457;",document.getElementById("min-temp").innerHTML=Math.round(1.8*m+32)+"&#8457;",document.getElementById("max-temp").innerHTML=Math.round(1.8*i+32)+"&#8457;",document.getElementById("main-feels-like").innerHTML="Feels like: "+Math.round(1.8*d+32)+"&#8457;",changeTempButton.innerHTML="Change to Celsius")})),e("Mumbai")})();