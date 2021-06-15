   		
	var Pressure1, Pressure2, Volume1, Volume2, Moles1, Moles2, Temperature1, Temperature2;
	var pressureChecked;
	var volumeChecked;
	var molesChecked;
	var tempChecked;
	var whichMethod;

	function myReset() { 
		var but = document.getElementById("btnSolve");
		but.disabled = true;
	}
	
	function initiate() {
		clean(document.getElementById("top-left"));
		clean(document.getElementById("top-right"));
		clean(document.getElementById("bottom-left"));
		clear(document.getElementById("bottom-right"));
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

	function setUp(){
		var numChecked;
		numChecked = 0;
		Equation = document.getElementById('EqDesc');
		LeftTop = document.getElementById('top-left');
		RightTop = document.getElementById('top-right');
		LeftBottom = document.getElementById('bottom-left');
		RightBottom = document.getElementById('bottom-right');
		
		pressureChecked = document.getElementById('Pressure').checked;
		volumeChecked = document.getElementById('Volume').checked;
		molesChecked = document.getElementById('Moles').checked;
		tempChecked = document.getElementById('Temp').checked;
		
		Equation.innerHTML = "<br>";
		document.getElementById('Pressure_Label1').hidden = true;
		document.getElementById('Pressure_Label2').hidden = true;
		document.getElementById('Volume_Label1').hidden = true;
		document.getElementById('Volume_Label2').hidden = true;
		document.getElementById('Moles_Label1').hidden = true;
		document.getElementById('Moles_Label2').hidden = true;
		document.getElementById('Temperature_Label1').hidden = true;
		document.getElementById('Temperature_Label2').hidden = true;
		document.getElementById("empty-element1").hidden = true;
		document.getElementById("empty-element2").hidden = true;
		document.getElementById("empty-element3").hidden = true;
		document.getElementById("empty-element4").hidden = true;
		
		if (pressureChecked)
		{
			document.getElementById("pressureRow").hidden = false;
			document.getElementById('Pressure_Label1').hidden = false;
			document.getElementById('Pressure_Label2').hidden = false;
			numChecked++;
		}
		else
			document.getElementById("pressureRow").hidden = true;
		
		if (volumeChecked)
		{
			document.getElementById("volumeRow").hidden = false;
			document.getElementById('Volume_Label1').hidden = false;
			document.getElementById('Volume_Label2').hidden = false;
			numChecked++;
		}
		else
			document.getElementById("volumeRow").hidden = true;
		
		if (molesChecked)
		{
			document.getElementById("molesRow").hidden = false;
			document.getElementById('Moles_Label1').hidden = false;
			document.getElementById('Moles_Label2').hidden = false;
			numChecked++;
		}
		else
			document.getElementById("molesRow").hidden = true;
			
		if (tempChecked)
		{
			document.getElementById("tempRow").hidden = false;
			document.getElementById('Temperature_Label1').hidden = false;
			document.getElementById('Temperature_Label2').hidden = false;
			numChecked++;
		}
		else
			document.getElementById("tempRow").hidden = true;
		
		if(pressureChecked && volumeChecked && !molesChecked && !tempChecked)
			Equation.innerHTML = "<center>Boyle's Law</center>";
		else if(!pressureChecked && volumeChecked && !molesChecked && tempChecked)
			Equation.innerHTML = "<center>Charles' Law</center>";
		else if(!pressureChecked && volumeChecked && molesChecked && !tempChecked)
			Equation.innerHTML = "<center>Avogadro's Law</center>";
		
		//if(numChecked < 2)
		//	alert("You need at least two (2) items checked for this to work.");

	}
	
	function BeginSolving(){
		var error = 0;
		var gasSelect, gasCustomize;
		var use = ['u','u','u','u'];

		if(pressureChecked)
		{
			Pressure1 = document.getElementById('pressureStart').value;
			Pressure2 = document.getElementById('pressureEnd').value;
			use[0] = 'n';

			if( !Number(Pressure1)){
				error += 1;
				document.getElementById('pressureStart').value = "";
				document.getElementById('Pressure_Number1').innerHTML = "P1";
				use[0] = 'v';
				Pressure1 = 1;
				whichMethod = 1;
			}
			else
				document.getElementById('Pressure_Number1').innerHTML = Pressure1;
		
			if(!Number(Pressure2)){
				error += 1;
				document.getElementById('pressureEnd').value = "";
				document.getElementById('Pressure_Number2').innerHTML = "P2";
				use[0]='v';
				Pressure2 = 1;
				whichMethod = 2;
			}
			else
				document.getElementById('Pressure_Number2').innerHTML = Pressure2;
		}
		else{
			Pressure1 = 1;
			Pressure2 = 1;
		}
		
		if(volumeChecked)
		{
			Volume1 = document.getElementById('volumeStart').value;
			Volume2 = document.getElementById('volumeEnd').value;
			use[1] = 'n';

			if(!Number(Volume1)) {
				error+=1;
				document.getElementById('volumeStart').value = "";
				document.getElementById('Volume_Number1').innerHTML = "V1";
				use[1] = 'v';
				Volume1 = 1;
				whichMethod = 1;
			}
			else
				document.getElementById('Volume_Number1').innerHTML = Volume1;
			if(!Number(Volume2)) {
				error+=1;
				document.getElementById('volumeEnd').value = "";
				document.getElementById('Volume_Number2').innerHTML = "V2";
				use[1] = 'v';
				Volume2 = 1;
				whichMethod = 2;
			}
			else
				document.getElementById('Volume_Number2').innerHTML = Volume2;
		}
		else {
			Volume1 = 1;
			Volume2 = 1;
		}
		
		if(molesChecked)
		{
			Moles1 = document.getElementById('molesStart').value;
			Moles2 = document.getElementById('molesEnd').value;
			use[2] = 'n';
			if(!Number(Moles1)){
				error+=1;
				document.getElementById('molesStart').value="";
				document.getElementById('Moles_Number1').innerHTML = 'n1';
				use[2] = 'v';
				Moles1 = 1;
				whichMethod = 2;
			}
			else
				document.getElementById('Moles_Number1').innerHTML = Moles1;
			if(!Number(Moles2)){
				error+=1;
				document.getElementById('molesEnd').value='';
				document.getElementById('Moles_Number2').innerHTML ='n2';
				use[2] = 'v';
				Moles2 = 1;
				whichMethod = 1;
			}
			else
				document.getElementById('Moles_Number2').innerHTML = Moles2;
		}
		else {
			Moles1 = 1;
			Moles2 = 1;
		}
		
		if(tempChecked)
		{
			Temperature1 = document.getElementById('tempStart').value;
			Temperature2 = document.getElementById('tempEnd').value;
			use[3] = 'n';
			
			if(!Number(Temperature1)){
				error+=1;
				document.getElementById('tempStart').value = '';
				document.getElementById('Temperature_Number1').innerHTML = 'T1';
				use[3] = 'v';
				Temperature1 = 1;
				whichMethod = 2; 
			}
			else
				document.getElementById('Temperature_Number1').innerHTML = Temperature1;
			if(!Number(Temperature2)){
				error+=1;
				document.getElementById('tempEnd').value = '';
				document.getElementById('Temperature_Number2').innerHTML = 'T2';
				use[3] = 'v';
				Temperature2 = 1;
				whichMethod = 1;
			}
			else
				document.getElementById('Temperature_Number2').innerHTML = Temperature2;
				
		}
		else {
			Temperature1 = 1;
			Temperature2 = 1;
		}
		
		if (error > 1) {
			var msg;
			msg = "You have more than one unknown value or invalid data.\n";
			msg += "Either use the Gas Law Assistant\n";
			msg += "or check your data entry.";
			document.getElementById('btnSolve').disabled = true;
			alert(msg);
		} 
		else if( error === 0){
			var msg = "You have filled in all the spaces with numbers.\n";
			msg += "You need one (1) empty space.\n";
			document.getElementById('btnSolve').disabled = true;
			alert(msg);
		}
		else if( document.getElementById('molesStartUnit').value === "grams" || document.getElementById('molesEndUnit').value === "grams" ){
			var msg = "You have to use moles. Sorry!\nConvert the grams to moles and try again.";
			alert(msg);
			document.getElementById('btnSolve').disabled = true;
			error = 2;
		}
		
		else if(document.getElementById('pressureStartUnit').value !== document.getElementById('pressureEndUnit').value || document.getElementById('volumeStartUnit').value !== document.getElementById('volumeEndUnit').value)
		{
			alert("Your units for Pressure and/or Volume do not match.");
			document.getElementById('btnSolve').disabled = true;
		}
		else if(document.getElementById('pressureStartUnit').value !== document.getElementById('pressureEndUnit').value || document.getElementById('volumeStartUnit').value !== document.getElementById('volumeEndUnit').value)
		{
			alert("Your units for Pressure and/or Volume do not match.");
			document.getElementById('btnSolve').disabled = true;
		}
		else
			document.getElementById('btnSolve').disabled = false;
		}
	
	function GetAnswer(){
		var answer;

		if(whichMethod === 1){
			answer = Pressure2 * Volume2 * Moles1 *Temperature1 / (Pressure1 * Volume1 * Moles2 * Temperature2);
		}
		else if (whichMethod === 2)
			answer = Pressure1 * Volume1 * Moles2 * Temperature2 / (Pressure2 * Volume2 * Moles1 *Temperature1);

		else answer = 0;
		alert("I think the answer is\n\t" + answer);
		
	
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
			ev.target.hidden=true;
			ev.target = ev.target.parentElement;
		}
		ev.target.appendChild(document.getElementById(data));
		//ev.target.childElement.hidden = false;
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
	
			
