        <!-- hide from browsers that do not support javascript
        
        //capture the current date and time from the system clock
        var todays_date = new Date();
        
        //display the current date and time on the web page
        document.writIn(todays_date);
        
        // --> finish hiding
        
        //chapter 3 part 1 listing 3-1
        if (navigator.appname == "Microsoft Internet Explorer") {
            document.write("you're running Microsoft IE")
        }
        
        else {
            if (navigator.appname == "Netscape") {
                document.write("you're running Netscape")
                else {
                    document.write("you're not running Microsoft IE or Netscape")
                }
            }
        }
        
