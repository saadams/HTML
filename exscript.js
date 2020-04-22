     buttonClick= false;
      hidePage(); // hides the page on load
      var endTip; // undeclared global var (will be used later)
      var endTotal; // undeclared global var (will be used later)
      //INVISABLITY (jk)
      // hides the output page or id (finPage)
      function hidePage(){
        var finPage = document.getElementById('finPage');
         finPage.style.display="none";
      }
      // Shows the page
      function showPage(){
         var finPage = document.getElementById('finPage');
         finPage.style.display="block";
         
      }
      // was trying to figure out how to hide and show page
      // I eventually figured it out :) as seen above
      /*function testToggle(){
          var x = document.getElementById("finPage"); 
          if (x.style.display === "none"){
              x.style.display = "block"
          }else {
              x.style.display = "none"
          }*/
      // SLIDER INFO
      // gets  the information from the slider/range element in html.
      document.querySelector('#tipForm').onchange = function(){
        var tipHardV = document.getElementById('tipHardUser').value  
        // after user testing added feature to input desired tip ammount.
        var totalAmt = document.getElementById('totalAmt').value
        var tip = document.getElementById('tipInput').value
       // var tipAmt = totalAmt*tip/100; // caculates the tip value percent as a number
        //document.getElementById('tipHardUser').value = tipAmt;
        document.getElementById('tipOutput').innerHTML = `${tip}%`
        // basic logs just to make sure everything is working :)
          console.log(tip);
          console.log(totalAmt); 
          console.log(tipHardV);
          
      
      };
      // Listener listens for the button id'calc' to be clicked and then executes.
        document.getElementById('calc').addEventListener("click", function(){
            buttonClick=true;
            showPage(); // shows the finPage or the output page
            getTotal(); // calls get Total
        });
      // The fun stuff ################################################################################
      function getTotal(){
            var totalAmt = document.getElementById('totalAmt').value
            var tip = document.getElementById('tipInput').value // gets tip input from slider #default value is 0#
            var tipHardV = document.getElementById('tipHardUser').value //gets the users desired tip
            var tipAmt = totalAmt*tip/100; // caculates the tip value percent as a number
          
        // OUTPUTS&AlGORITHMMS #############################################################################
          
          // checks if the input tipHardV is empty and if so it cycles to the else if.
            if(tipHardV != '' && totalAmt != ''){
                //var tipHardV = document.getElementById('tipHardUser').value  
                var tipAmt = parseFloat(tipHardV);
                var userPercent = parseFloat(tipHardV/totalAmt*100).toFixed(0) // caculates the desired tip as a percent
                document.getElementById('tipOutput').innerHTML = `${userPercent}%` // sets the tipOutput text to show the percent of the total the user is tipping.
                document.getElementById('tipInput').value = userPercent; // adjusts the slider.
                endTip = "You tipped " + "$" + tipAmt.toFixed(2); // fixes the tip output to 2 decimal places
                endTipHt.innerHTML = endTip;
                var totalWTip = parseFloat(parseFloat(tipAmt)+ parseFloat(totalAmt)).toFixed(2); // causes the total to be parsed as a float or point number fixed to 2 decimal places adds the numbers together.
                endTotal = "Your Total: " +"$" + totalWTip; // combines string and total
                endTotalHt.innerHTML = endTotal// outputs string
            }
          
          //checks if the total Amt is empty
            else if(totalAmt != ''){
            endTip = "You Tipped: " + "$" + tipAmt.toFixed(2); // fixes the tip output to 2 decimal places
            endTipHt.innerHTML = endTip;
            var totalWTip = parseFloat(parseFloat(tipAmt)+ parseFloat(totalAmt)).toFixed(2); // causes the total to be parsed as a float or point number fixed to 2 decimal places adds the numbers together.
            endTotal = "Your Total: " +"$" + totalWTip; // combines string and total
            endTotalHt.innerHTML = endTotal// outputs string
            }else{
                alert('Enter a Total Bill Ammount.'); 
                Error('User must input number'); // causes error/alerts user          
            } 
          // after button is click resets values;
          document.getElementById('tipHardUser').value = ''; 
          document.getElementById('tipInput').value='';
          document.getElementById('totalAmt').value='';

      };
      