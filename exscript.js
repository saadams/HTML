 buttonClick= false;
      hidePage();
      var endTip;
      var endTotal;
      function hidePage(){
        var finPage = document.getElementById('finPage');
         finPage.style.display="none";
      }
      function showPage(){
         var finPage = document.getElementById('finPage');
         finPage.style.display="block";
         
      }
      /*function testToggle(){
          var x = document.getElementById("finPage");
          if (x.style.display === "none"){
              x.style.display = "block"
          }else {
              x.style.display = "none"
          }*/
      
      document.querySelector('#tipForm').onchange = function(){
        var totalAmt = document.getElementById('totalAmt').value
        var tip = document.getElementById('tipInput').value
          document.getElementById('tipOutput').innerHTML = `${tip}%`
          console.log(tip);
          console.log(totalAmt);   
      
      };
      
        document.getElementById('calc').addEventListener("click", function(){
            buttonClick=true;
            showPage();
            getTotal();
        });
      function getTotal(){
            var totalAmt = document.getElementById('totalAmt').value
            var tip = document.getElementById('tipInput').value
            var tipAmt = totalAmt*tip/100;
            if(totalAmt != ''){
            endTip = "You tipped " + "$" + tipAmt;
            endTipHt.innerHTML = endTip;
            var totalWTip = parseFloat(tipAmt + parseInt(totalAmt));
            endTotal = "Your total " +"$" + totalWTip;
            endTotalHt.innerHTML = endTotal
            }else{alert('Enter a Number')}

      };
      