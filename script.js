(async function() {
    try {
        const response = await fetch('CB protein MS data.xlsx');
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, {type: 'array'});
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const tableHtml = XLSX.utils.sheet_to_html(worksheet);
        document.getElementById('excelTable').innerHTML = tableHtml;
    } catch (error) {
        console.error('Error loading or parsing the Excel file:', error);
    }
})();
