function total(){
    var bsp = document.getElementById('bsp').value;
    var itp = document.getElementById('itp').value;
    var aj = document.getElementById('aj').value;
    var valid = true;
    if(bsp.match(/^\d*$/)==null||bsp.match(/\D*/)!=""){
        valid = false;
    }
    if(itp.match(/^\d*$/)==null||itp.match(/\D*/)!=""){
        valid = false;
    }
    if(aj.match(/^\d*$/)==null||aj.match(/\D*/)!=""){
        valid = false;
    }
    if(valid){
        document.getElementById("total").innerHTML = (("<b>Basic Web Programming (Quantity = </b>"+bsp+"<b>):</b>")+" $"+(19.99*bsp)+
        ("<b><br>Intro to PHP (Quantity = </b>"+itp+"<b>):</b>")+" $"+(86.00*itp)+
        ("<b><br>Advanced JQuery (Quantity = </b>"+aj+"<b>):</b>")+" $"+(55.00*aj)
        +("<b><br><br>Final Total: </b>")+(19.99*bsp+86.00*itp+55.00*aj));
    }
    if(!valid){
        alert("error: invalid field(s)");
    }
    
    
}