var i = {name:"WorkOrderMasterID", order:0};

CreateItem(i);
//name, type, order

function CreateItem(item)
{
  //var para = document.createElement("P");                       // Create a <p> element
  //var t = document.createTextNode("This is a paragraph");       // Create a text node
  //para.appendChild(t);   
  //document.getElementById("h").appendChild(t);        

  var inp= document.createElement("INPUT");

  var c, r, t;
    t = document.createElement('table');
    r = t.insertRow(item.order); 
    c = r.insertCell(0);
    c.innerHTML =item.name;
    c = r.insertCell(1);
    c.appendChild(inp);
    document.getElementById("h").appendChild(t);


  //var lbl=document.createElement("LABEL");
  //var n= document.createTextNode(name);
  //lbl.appendChild(n);
  //document.getElementById("h").appendChild(lbl);
  // document.getElementById("h").appendChild(inp);  
}

