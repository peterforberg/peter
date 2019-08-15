/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console


        // Some dude's thing online:
  var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
        // BUTTON VARIABLES
        var water = 0;
        var light = 0;
        var snip = 0;
        var ignore = 0;
        var step = -1;
        var tourism = 82;
        var rainy = 20;
        var social = 19;
        var gov = 62;
        var visas = 1;
       /*  var rain = 0;
        var gdp = 25,672,030;
        var social = 32;
        var gov = 62;
        var sea = 0;
        var visas = 0;
        var good = water + light; */
        // BUTTON CODE
        function tutorial() {
        step += 1;
        if (step >= 0) {
          var a = document.getElementById("waterb");
            a.style.display = "block";
        }
        if (step >= 1){
        var b = document.getElementById("lightb");
            b.style.display = "block";
        }
        if (step >= 2){
        var c = document.getElementById("snipb");
            c.style.display = "block";
        }
        if (step >= 3){
        var d = document.getElementById("ignoreb");
            d.style.display = "block";
        }
        if (step >= 4){
        var e = document.getElementById("demo");
            e.style.display = "block";
        }
        if (step >= 5) {
        var f = document.getElementById("skip");
            f.style.display = "none";
        var g = document.getElementById("next");
            g.style.display = "none";
        }
        
        }
        function skip() {
          step += 6;
          var a = document.getElementById("waterb");
            a.style.display = "block";
          var b = document.getElementById("lightb");
            b.style.display = "block";
          var c = document.getElementById("snipb");
            c.style.display = "block";
          var d = document.getElementById("ignoreb");
            d.style.display = "block";
          var e = document.getElementById("demo");
            e.style.display = "block";
          var f = document.getElementById("skip");
            f.style.display = "none";
          var g = document.getElementById("next");
            g.style.display = "none";
        }
          
        
        function onWaterClick() {
            water += 1;
            step +=1;
            document.getElementById("water").innerHTML = water;
        }
            
        function onLightClick() {
            light += 1;
            step += 1;
            document.getElementById("light").innerHTML = light;
        }
            
        function onSnipClick() {
            snip += 1;
            step += 1;
            document.getElementById("snip").innerHTML = snip;
        }
            
        function onIgnoreClick() {
            ignore -= 1;
            step += 1;
            document.getElementById("ignore").innerHTML = ignore;
        }
        function onRandVarClick() {
          if (step >= 17) {
            tourism -= 3;
            document.getElementById("tourism").innerHTML = tourism;
            var y = document.getElementById("randvar1");
            y.style.display = "block";
          }
          if (step >= 14) {
            var min = -11; 
            var max = 13;  
            var random = Math.floor(Math.random() * (+max - +min)) + +min;
            rainy += random;
            document.getElementById("rainy").innerHTML = rainy;
            var v = document.getElementById("randvar2");
            v.style.display = "block";
          }
          if (step >= 22) {
            var min2 = -3; 
            var max2 = 5;  
            var random2 = Math.floor(Math.random() * (+max2 - +min2)) + +min2;
            social += random2;
            document.getElementById("social").innerHTML = social;
            var u = document.getElementById("randvar3");
            u.style.display = "block";
          }
          if (step >= 26) {
            var min3 = -5; 
            var max3 = 2;  
            var random3 = Math.floor(Math.random() * (+max3 - +min3)) + +min3;
            gov += random3;
            document.getElementById("gov").innerHTML = gov;
            var t = document.getElementById("randvar4");
            t.style.display = "block";
          }
          if (step >= 30) {
            var min4 = 2; 
            var max4 = 5;  
            var random4 = Math.floor(Math.random() * (+max4 - +min4)) + +min4;
            visas += random4;
            document.getElementById("visas").innerHTML = visas;
            var s = document.getElementById("randvar5");
            s.style.display = "block";
          }
        }
        
        function gameDisplay() {
          document.getElementById("display").src=images[step];
          document.getElementById("text").innerHTML=text[step];   
          var x = document.getElementById("secret");
          if (step == 15) {
          x.style.display = "block";
          } else {
          x.style.display = "none";
          }
          var w = document.getElementById("shop");
          if (step == 13) {
          w.style.display = "block";  
          } else {
          w.style.display = "none";  
          }
        }
        
        var images = ["https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2Fplants.gif?v=1562878556559","https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2Fplants.gif?v=1562878556559",
          "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2Fplants.gif?v=1562878556559",
          "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2Fplants.gif?v=1562878556559",
          "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2Fplants.gif?v=1562878556559",
          "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2Fplants.gif?v=1562878556559",
          "https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2Fhalfdead.png?v=1563556211969", "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2FplantStages3.png?v=1563207053480", "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2FplantStages4.png?v=1563207050232", "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2FplantStages5.png?v=1563207049314", "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2FplantStages6.png?v=1563207049397", "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2FplantStages7.png?v=1563207049570",  
"https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2FplantStages8.png?v=1563207049734", 
"https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2FplantStages9.png?v=1563207050025", 
"https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2Fshopkeep.gif?v=1563814058192",
"https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2FplantStages11.png?v=1563207050767",                         "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2FplantStages12.png?v=1563207050999", "https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FplantChild1.png?v=1563556212701","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FplantChild2.png?v=1563556212445","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FplantChild3.png?v=1563556212960","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FplantChild4.png?v=1563556213264","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FplantChild5.png?v=1563556213484","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FplantWater1.png?v=1563556214797","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FplantWater2.png?v=1563556209993","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FplantWater3.png?v=1563556210273","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FplantWater4.png?v=1563556210454","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FplantWater5.png?v=1563556210558","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FplantWater6.png?v=1563556210735","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FplantWater7.png?v=1563556210894","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FplantDrown.gif?v=1563813227844","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2Frooftop.gif?v=1563556211050","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2Fmonitors.gif?v=1563556212236","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FfireTree.gif?v=1563556211648","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FwaterTree.gif?v=1563556211453","https://cdn.glitch.com/10934f8c-ca36-4889-9400-ccd09fd8b568%2FtreeLine.gif?v=1563556211269", "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2Fplants.gif?v=1562878556559"]
        var text = ["The buttons on the left allow you to interact with the world around you. Right now the \"water\" button lets you give your plant water. Leave them alone for now.", "These buttons will affect your choe's stats, like \"warmth,\" which will increase when you press \"light.\" Remember: everything in moderation.", "Not all choices will always make sense. Sometimes, \"snip\" will not refer to the plant. Just trust that you have all of the options available to you and do your best!", "Everyone needs to work together on this, so collaborate to make the best decision for your choe. Think of yourselves as thousands of mothers. If no one chooses to take care of your choe, the plant will simply be ignored.", "One last thing: this timer above your choe signals the next time you can make a choice.", "OK! You're ready to go! What's your first choice? (SNIP)", "I don't think that your choe was ready for parenthood. Let them get stronger before you try something like that. Do you feel like you're strong enough to be a parent? (WATER)", "See? You choe likes that more. Think about what you like. Thank about what helps you feel like you've been treated fairly. (LIGHT)", "Your choe will grow stronger the more care you put into it. Only when your choe is strong enough will it be able to help others. Then you can snip. Let it grow. (WATER)", "Unlike the delicacy of a rose, trimmed to keep the bush alive but dead in its vase after a week, the beauty of your choe comes from their resiliency and longevity. Their many children will flourish and grow. (IGNORE)", "It's OK, even a plant needs a break from all of the attention. Take some time to yourself if you need it. (WATER)", "It's a shame, this is probably your first plant, right? Of course, choe loves you, and I truly believe that, but...this is not a world for plants. (WATER)", "The island once was lush with plants like your choe, a wonderland of flora sprawling across rooftops and breaking through paved streets. No wonder so many came to see it. (LIGHT)", "This is a showcase choe, truly a gem. You deserve, and they deserve, a reward. Treat yourself to something nice. (SHOP)", " \"You think you can pay for fertilizer with warmth? With joy? Choices aren't free in this economy; no charity.\" (IGNORE) ", "...Sorry about that. You know what you can give your choe? Secrets. It's good to talk to plants. Tell your choe a secret, just for the two of you. (SUBMIT)", "That is a fully mature choe! I think the two of you are ready for the next step. (SNIP)", "You hear that thunder? The gods must be pleased with our progress. Your little army of choes grows stronger every day. (SNIP)", "You really want this growth. You crave it don't you? That's OK. The kalanchoe is know for its untameable prosperity. You know, in other cultures, this plant is called the devil's backbone. (SNIP)", "From one single seed can come so many possibilities. Without this seed, none of these children would be here. (SNIP)", "On an island like this, parenthood can be a difficult choice. Think about the world you're leaving this choe in. Think about the decision you've made to keep this choe here. What choice does that give the offspring? (SNIP)", "A whole family, you've really done it. Is this growth a wise decision? Man, that thunder sounds like it's getting closer, your choe might need some light. (LIGHT)", "Oh. Don't pay that any mind. Save that thought for a sunny day. Keep your choe strong. (LIGHT)", "You chose to bring these children into the world, and they need water. So give them water. (WATER)", "Your floors? No need to worry. The floor will be fine. The choe will not. (LIGHT)", "On this island storms like this are becoming more frequent, right? I think that's the word. You should just accept that you have no power to change that. (IGNORE)", "See? Pretend like it's not even there, what other choice do you have? (IGNORE)", "Ok something might actually be going wrong. What does \"water\" even mean in this situation? The water is everywhere. (WATER)", "That did nothing. OK. I'm sure the storm will pass; I'm sure you'll be fine. (IGNORE)", "Oh no. Oh no. Oh no no no no no. There goes your kalanchoe, drowning in water. There goes the roof, letting in light. There goes the window, uncut leaves caught in its frame. Time to make a choice. (LIGHT)", "To the rooftop? Nice choice. The water can't get us here, but your choe is gone. What a waste. So much time invested. OK, a blinking radio antenna, a pool of water...what...Make a choice? (LIGHT)", " \"We have tranmissions coming in from all across the island, flooding, power outages, electric fires.\" Always something to decide. Where should we invest? (SNIP)", "That wire shouldn't have any power going through it. The fire must be from the initial shock. Sucks to have limited options in a complex world, doesn't it? (WATER)", "That...that worked? Why isn't there a radio option? A 'call for help' button? Where are the efficacious options, all you have left is to...ignore? (IGNORE)", "Bad decision. Bad decision. Look at all of these trees. Looks like a live wire. But what's inaction when your only choices are unactionable? What next? (ANY)", "This is the screen players would be presented with after completing their decision. The text will read: \"You've made your choice! Now it's up to everyone else. Come back when the timer runs out to choose again.\" "]
      
        var colorw = text.indexOf("water");
       
