   		
	var Pressure, Temperature, Moles, Volume, RGas;

	function myReset() { 
		var but = document.getElementById("btnSolve");
		but.disabled = true;
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
		var error;	
		Pressure = document.forms["myform"]["PressureForm"].value;
		if (Pressure === "" || Pressure === '0')
			Pressure = "P";
		
		Volume = document.forms["myform"]["VolumeForm"].value;
		if (Volume === "" || Volume === '0')
			Volume = "V";
		
		Temperature = document.forms["myform"]["TemperatureForm"].value;
		if (Temperature === "" || Temperature === '0')
			Temperature = "T";
		
		Moles = document.forms["myform"]["MoleForm"].value;
		if (Moles === "" || Moles === '0')
			Moles = "n";
		
		error = checkValues();
		if(error ===1){
			document.getElementById('Pressure_Number').innerHTML = Pressure;
			document.getElementById('Volume_Number').innerHTML = Volume;
			document.getElementById('Mole_Number').innerHTML = Moles;
			document.getElementById('R_Number').innerHTML = RGas;
			document.getElementById('Temperature_Number').innerHTML = Temperature;
			var but = document.getElementById("btnSolve");
			but.disabled = false;
			}
	}
	
	function checkValues(){
		var error = 0;
		var gasSelect, gasCustomize;

		if(isNaN(Pressure))
			error+=1;
		if(isNaN(Volume))
			error+=1;
		if(isNaN(Moles))
			error+=1;
		if(isNaN(Temperature))
			error+=1;
		if (error > 1) {
			var msg;
			msg = "You have more than one unknown value.\n";
			msg += "Either use the Change of State assistant\n";
			msg += "or check your data entry.";
			alert(msg);
		} else if( error === 0){
			var msg = "You have filled in all the spaces. Please check your data.";
			alert(msg);
		}
		else if( document.forms["myform"]["nUnits"].value === "gram" ){
			var msg = "You have to use moles. Sorry!\nConvert the grams to moles and try again.";
			alert(msg);
			error = 2;
		}
		else {
			gasSelect = document.forms["myform"]["RUnits"].value;
			gasCustomize = document.forms["myform"]["RInput"].value;
			if(gasSelect === "SelectR" && gasCustomize === ""){
				error = 2;
				alert("Please select or input a value for R.");
			}
			else if(gasSelect !== "SelectR" && gasCustomize !== ""){
				error = 2;
				alert("Please select one or the other.");
			}
			else if(gasSelect !== "SelectR")
				RGas = gasSelect;
			else
				RGas = gasCustomize;
		}
		return error;
	}
	
	function GetAnswer(){
		var answer, msg;
		if(isNaN(Pressure))
			answer = Temperature * Moles * RGas / Volume;
		else if (isNaN(Volume))
			answer = Temperature * Moles * RGas / Pressure;
		else if (isNaN(Temperature))
			answer = Pressure * Volume / (Moles * RGas);
		else 
			answer = Pressure * Volume / (RGas * Temperature);
		msg = "My answer is: " + Math.round(answer*1000)/1000 + "\n" + "If you got something else, try solving the gas equation first.";
		alert (msg);
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
	
			
