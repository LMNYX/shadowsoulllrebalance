// ==UserScript==
// @name     Fucking ShadowSoulll's Rebalance
// @version  1.0
// @grant    none
// @include      http://osu.ppy.sh*
// @include      https://osu.ppy.sh*
// ==/UserScript==
(() => {
  "use strict";

  function addPP(pp)
  {
    var userPP = [];
        userPP[0] = document.getElementsByClassName("value-display value-display--pp")[0].getElementsByClassName("value-display__value")[0].getElementsByTagName("div")[0].innerHTML;
        userPP[1] = document.getElementsByClassName("value-display value-display--pp")[1].getElementsByClassName("value-display__value")[0].getElementsByTagName("div")[0].innerHTML;
        var userRealPP = parseInt(userPP[0].replace(",", ""));
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        userRealPP += pp;
			  document.getElementsByClassName("value-display value-display--pp")[0].getElementsByClassName("value-display__value")[0].getElementsByTagName("div")[0].innerHTML = numberWithCommas(userRealPP);
				document.getElementsByClassName("value-display value-display--pp")[1].getElementsByClassName("value-display__value")[0].getElementsByTagName("div")[0].innerHTML = numberWithCommas(userRealPP);
  }
  function getPP(pp)
  {
    var userPP = [];
        userPP[0] = document.getElementsByClassName("value-display value-display--pp")[0].getElementsByClassName("value-display__value")[0].getElementsByTagName("div")[0].innerHTML;
        userPP[1] = document.getElementsByClassName("value-display value-display--pp")[1].getElementsByClassName("value-display__value")[0].getElementsByTagName("div")[0].innerHTML;
        var userRealPP = parseInt(userPP[0].replace(",", ""));
        return userRealPP;
  }
  window.onload = function(){
    window.curID = "0";
  	var xcs = setInterval(function(){
    	if(document.getElementsByClassName("value-display value-display--pp").length > 1)
      {
        if(window.curID == document.URL.split("/")[4])
        {
          return;
        }
        console.log(document.URL.split("/")[4]);
        switch(document.URL.split("/")[4])
        {
          case "4504101":
            addPP(-parseInt(getPP()/2));
          case "6704950":
            	addPP(-getPP());
            break;
          case "11516840":
            	addPP(20000);
            break;
          case "12150648":
            	addPP(-1);
            break;
          case "6872790":
            	addPP(-2000);
            break;
          default:
            break;
        }
        window.curID = document.URL.split("/")[4];
      }
      
    }, 99);
    
  }
})();
