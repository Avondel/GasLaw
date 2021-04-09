   		
	var Pressure, Temperature, Moles, Volume;

	function myReset() { 
		initiate();
	}
	
	function initiate() {
		clean(document.getElementById("top-left"));
		clean(document.getElementById("top-right"));
	}
	
	function clean(node){
		for(var n = 0; n < node.childNodes.length; n ++){
			var child = node.childNodes[n];
			if(child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue))){
				node.removeChild(child);
				n --;
			}
			else if(child.nodeType === 1){
				clean(child);
			}
		}
	}

	function HelpSolve() {
		Pressure = document.forms["myform"]["PressureForm"].value;
		if (Pressure === "" || Pressure === '0')
			Pressure = "P";
		
		Volume = document.forms["myform"]["VolumeForm"].value;
		if (Volume === "" || Volume === '0')
			Volume = "V";
		
		Temperature = document.forms["myform"]["TemperatureForm"].value;
		if (Temperature === "" || Temperature === '0')
			Temperature = "T";
		
		Mole = document.forms["myform"]["MoleForm"].value;
		if (Mole === "" || Mole === '0')
			Mole = "n";
		
		R = 0.0821;
		
		document.getElementById('Pressure_Number').innerHTML = Pressure;
		document.getElementById('Volume_Number').innerHTML = Volume;
		document.getElementById('Mole_Number').innerHTML = Mole;
		document.getElementById('R_Number').innerHTML = R;
		document.getElementById('Temperature_Number').innerHTML = Temperature;

		if (error === 1) {
			msg = "You have more than one unknown value.\n";
			msg += "Try again using the Change of State assistant.";
			alert(msg);
		}
	}
	
	function checkValues(){
		msg = Pressure + " " + Volume + " " + Temperature + " " + Mole;
		return 1;
	}
	
	function Ex2() {
		msg = "";
		msg = "\bExample:\nConvert 3.2 centimeters to Inches.\n\nLook up the relation between centimeters and inches. \n\nCentimeters: 2.54 \nInches: 1";
		alert(msg);
	}

	function Ex3() {
		msg = "";
		msg = "Calculate 3.2 cm times 1 inch divide by 2.54 cm. \n\nEnter:\n3.2 * 1 / 2.54 = ";
		alert(msg);
	}
			
	function allowDrop(ev) {
		ev.preventDefault();
		if (ev.target.getAttribute("draggable") == "true")
			ev.dataTransfer.dropEffect = "none"; // dropping is not allowed
		else
		  ev.dataTransfer.dropEffect = "all"; // drop it like it's hot
	}
	
	function drag(ev) {
		ev.dataTransfer.setData("id", ev.target.id);
	}

	function drop(ev) {
		var widen = 0;
		var widenstring;
		var data = ev.dataTransfer.getData("id");
		var sourceId = document.getElementById(data).parentNode.id;
		var targetId = ev.target.id;
		ev.preventDefault();
		if(ev.target.innerHTML === "Drop Here"){
			ev.target.innerHTML="";
		}
		ev.target.appendChild(document.getElementById(data));
		if(document.getElementById(sourceId).childNodes.length === 0)
			document.getElementById(sourceId).innerHTML = "Drop Here";
		else
			widen = calculateLength(sourceId);
		
		widenstring = '' + widen + "em";
		document.getElementById(sourceId).style.width = widenstring;
		widen = calculateLength(targetId);
		widenstring = '' + widen + "em";
		ev.target.style.width = widenstring;
	}
	
	function calculateLength(elementId){
		var widen = 0;
		var c = document.getElementById(elementId).childNodes;
		var d;
			for(var n = 0; n < c.length ; n++){
				d = c[n];
				d=d.childNodes;
				d=d[1];
				widen = widen + d.innerHTML.length/2 + 1;
			}
		widen = widen+3;
		if(widen<7)
			widen = 7;
		return widen;
	}
	
	function childNodeList() {
	  var c = document.getElementById("top-left").childNodes;
  var txt = "";
  var i;
  for (i = 0; i < c.length; i++) {
    txt = txt + c[i].nodeName + "<br>";
  }

  //document.getElementById("demo").innerHTML = txt;
  alert(txt);
}

	
	function myFunction() {

  var x = document.getElementById("left");
  var txt = "";
  var i;
  for (i = 0; i < x.attributes.length; i++) {
    txt = txt + x.attributes[i].name + " = " + x.attributes[i].value + "\n";
  }
  txt = txt + left.innerHTML;
 	}
	
			
