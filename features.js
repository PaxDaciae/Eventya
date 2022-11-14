

    // Navbar background function

    window.onscroll = function dropDownNavBackground() { 
        "use strict";
        var navTarget = document.getElementById("nav-bar-background");

        if (document.scrollTop >= 475  || document.documentElement.scrollTop >= 475 ) {
          console.log("DWN")
          // var navTarget = document.getElementById("nav-bar-background");
          navTarget.classList.remove("nav-transparent");
          navTarget.classList.add("nav-colored");
        }
        else {
          console.log("UP")
          navTarget.classList.add("nav-transparent");
          navTarget.classList.remove("nav-colored");
        }
      };