function convertToPdf() {
    const ztFile = document.getElementById('ztFile').files[0];
  
    if (ztFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Convert .zt file to PDF
            const ztData = e.target.result;
            // Your conversion logic goes here
        }
        reader.readAsText(ztFile);
    }
    else {
        alert("Please select a .zt file to convert.");
    }
}
