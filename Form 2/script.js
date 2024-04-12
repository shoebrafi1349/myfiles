const arara=[]
let conts = []
function editor(i){
console.log("run")
document.getElementById("Name").value = arara[i].name;
document.getElementById( "Address" ).value = arara[i].address;
if(arara[i].GST.search("Yes") == 0){document.getElementById( "Yes" ).checked = true;
document.getElementById( "GstText" ).style.visibility = 'visible';
document.getElementById( "GSTno" ).value = arara[i].GSTno;
}
if(arara[i].GST.search("No") == 0){document.getElementById( "No" ).checked = true;}
document.getElementById( "city" ).value = arara[i].city
if(arara[i].RC.search("Yes") == 0){document.getElementById( "Registered Company" ).checked = true;}
if(arara[i].RC.search("No") == 0){document.getElementById( "Registered Company" ).checked = false;}
conts = arara[i].contacts
addcontslist()
arara.pop(i)
}

function ceditor(i){
console.log("run")
document.getElementById("FirstName").value = conts[i].fname;
document.getElementById( "LastName" ).value = conts[i].lname;

conts.pop(i)
}
function deletor(i){
arara.pop(i)
sarray()
}
function cdeletor(i){
conts.pop(i)
addcontslist()
}
function submitdata(){
var person = {
name: null,
address: null,
city: null,
GST: null,
GSTno: null,
RC: null,
contacts: null}

person.name=document.getElementById( "Name" ).value
person.address=document.getElementById( "Address" ).value
person.city=document.getElementById( "city" ).value
if(document.getElementById( "Yes" ).checked){
person.GST="Yes"
person.GSTno=document.getElementById( "GSTno" ).value}
else if(document.getElementById( "No" ).checked){
person.GST="No"
person.GSTno=""}
	if(document.getElementById( "Registered Company" ).checked){
	person.RC="Yes";}
	else{person.RC="No";}
person.contacts = conts



if (person.name != null &&
person.address!= null &&
person.city != null){
arara.push(person)
console.log(arara.toString());
sarray();
document.getElementById( "Name" ).value = "";
document.getElementById( "Address" ).value = "";
document.getElementById( "Registered Company" ).checked = false;
document.getElementById( "Yes" ).checked = false;
document.getElementById( "No" ).checked = false ;
document.getElementById( "GSTno" ).value = "";
document.getElementById( "GstText" ).style.visibility = 'hidden';
document.getElementById("FirstName").value = "";
document.getElementById( "LastName" ).value = ""
conts = [];
console.log(conts.length)
addcontslist();
}
else { alert(person.name+person.address+person.city)}





}
var Cperson = {
fname: null,
lname:null,
}

function addcont(){
var Cperson = {
fname: null,
lname:null,
}
Cperson.fname=document.getElementById( "FirstName" ).value
Cperson.lname=document.getElementById( "LastName" ).value



document.getElementById( "FirstName" ).value = ""
document.getElementById( "LastName" ).value = ""


if (Cperson.fname != null && Cperson.lname != null ){
conts.push(Cperson)
console.log(conts.toString());
addcontslist();}
else { alert("Incomplete Contact field Field")}

}

function sarray(){
document.getElementById( "datalists" ).innerHTML = '<tr><th>Name</th><th>Address</th><th>' +
'City</th><th>GST</th><th>GST No</th><th>Registered Company</th><th>Contacts</th><th>Edit</th><th>Delete</th></tr>'
for (let i =0; i < arara.length; i++){
document.getElementById( "datalists" ).innerHTML += '<tr><td>'+ arara[i].name +'</td><td>'+arara[i].address+'</td><td>'+
arara[i].city+'</td><td>'+arara[i].GST+'</td><td>'+arara[i].GSTno+'</td><td>'+arara[i].RC+'</td><td>'+arara[i].contacts.length+'</td><td><button type="text" class="edit" onclick="editor('+i+')">Edit</button></td><td><button onclick="deletor('+i+')">Delete</button></td></tr>'
console.log(arara[i])
//document.getElementById( arara[i].name +"Edit" ).addEventListener('click',editor(i))
}
}

function addcontslist(){
document.getElementById( "contactlists" ).innerHTML = '<tr><th>First Name</th><th>Last Name</th><th>Edit</th><th>Delete</th></tr>'
console.log(conts.length)
for (let i =0; i < conts.length; i++){
document.getElementById( "contactlists" ).innerHTML += '<tr><td>'+ conts[i].fname +'</td><td>'+conts[i].lname+'</td><td><button type="text" class="edit" onclick="ceditor('+i+')">Edit</button></td><td><button onclick="cdeletor('+i+')">Delete</button></td></tr>'
j = conts[i]
console.log(conts[i])
//document.getElementById( arara[i].name +"Edit" ).addEventListener('click',editor(i))
}
}
function yesnoCheck() {
    if (document.getElementById('Yes').checked) {
        document.getElementById('GstText').style.visibility = 'visible';
    } else {
        document.getElementById('GSTno').value = ''
		document.getElementById('GstText').style.visibility = 'hidden';
		
		   }
}