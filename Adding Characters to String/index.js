var str = prompt("Enter a string");
if (str.substring(0,2)==="Py" || str.substring(0,2)==="py")
{
    document.write(str);
}
else
{
    document.write("Py"+str);
}