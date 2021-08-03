// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener("load",function(){
    console.log("Everything Loaded");

    let rocket =  document.getElementById('rocket');
    rocket.style.top = "0px";
    rocket.style.left = "0px";
    let topTracker = parseInt(rocket.style.top);
    let leftTracker = parseInt(rocket.style.left);
    
    document.getElementById('up').addEventListener("click", function(){
        if(topTracker - 10 < 0) return;
        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) + 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;
        
        
        topTracker = topTracker - 10;
        rocket.style.top = topTracker + "px";
        rocket.style.position = "Relative";
        //rocket.setAttribute("style","top : " + topTracker + "px; position: relative;");

    });
    
    document.getElementById('down').addEventListener("click", function(){
        let container = document.getElementById('shuttleBackground');
        
        if(topTracker + 10 > container.offsetHeight-rocket.height) return;

        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) - 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;
        
        //let rocket =  document.getElementById('rocket');
        topTracker = topTracker + 10;
        rocket.style.top = topTracker + "px";
        rocket.style.position = "Relative";
        //rocket.setAttribute("style", "top : " + topTracker + "px; left: " + leftTracker + " px; position: relative;");

    });
    
    document.getElementById('left').addEventListener("click", function(){
        let container = document.getElementById('shuttleBackground');
        if(leftTracker - 10 < (-1*(container.offsetLeft)/2)) return;

        //let rocket = document.getElementById('rocket');
        leftTracker = leftTracker - 10;
        rocket.style.left = leftTracker + "px";
        rocket.style.position = "Relative";
        // rocket.setAttribute("style",  "top: " + topTracker  + "px; left : " + leftTracker +  " px; position: relative;");
        //console.log(leftTracker);
    });
    
    document.getElementById('right').addEventListener("click", function(){
        let container = document.getElementById('shuttleBackground');
        if(leftTracker + 10 > (container.offsetLeft)/2) return;
       // let rocket =  document.getElementById('rocket');
        leftTracker = leftTracker + 10;
        rocket.style.left = leftTracker + "px";
        rocket.style.position = "Relative";
        //rocket.setAttribute("style", "left : " + leftTracker + "px; left: " + leftTracker + " px; position: relative;");

    });


 
    document.getElementById('missionAbort').addEventListener("click", function(){
    let response = window.confirm("Confirm that you want to abort the mission");
       //console.log(response);
    if(response) {
        document.getElementById('flightStatus').innerText = "missionAbort";
        document.getElementById("shuttleBackground").setAttribute('style', 'background-color:green;');
        document.getElementById('spaceShuttleHeight').innerText = '0';
        rocket.setAttribute("style","top:0px; left:0px;position:relative;")
            
        }
    });

    document.getElementById('landing').addEventListener("click", function(){
        window.alert("The Shuttle is landing. Landing gear engaged.");
        document.getElementById('flightStatus').innerText ="The Shuttle has landed";
        document.getElementById("shuttleBackground").setAttribute('style', 'background-color:green;');
        document.getElementById('spaceShuttleHeight').innerText = '0';
        rocket.setAttribute("style","top:0px; left:0px;position:relative;")

    });
   
    document.getElementById('takeoff').addEventListener("click", function(){
    let response = window.confirm("Confirm that the shuttle is ready for take off");
       //console.log(response);
    if(response) {
        document.getElementById('flightStatus').innerText = "Shuttle in flight";
        document.getElementById("shuttleBackground").setAttribute('style', 'background-color:blue;');
        document.getElementById('spaceShuttleHeight').innerText = '10000';
            
        }

    });
});