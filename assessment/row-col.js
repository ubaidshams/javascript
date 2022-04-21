var rowNum=Number(prompt("Enter the number of rows"))
var colNum=Number(prompt("Enter the number of columns"))

var table=document.createElement("table")
table.className="tstyle";

for(var i=1;i<=rowNum;i++)
{
    var tr=document.createElement("tr")
    table.appendChild(tr)

    for(var j=1;j<=colNum;j++)
    {
        var td=document.createElement("td")
        tr.appendChild(td)
        td.innerHTML=i*j
        td.style.border="1px solid"
    }
}
document.body.append(table)