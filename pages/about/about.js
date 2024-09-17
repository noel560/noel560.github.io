function discordclick() {
    const tempInput = document.createElement('textarea');
    tempInput.value = "noel54_";
    document.body.appendChild(tempInput);
    
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    
    document.execCommand("copy");
    
    document.body.removeChild(tempInput);
    
    alert("Successfully copied to clipboard!");
}
