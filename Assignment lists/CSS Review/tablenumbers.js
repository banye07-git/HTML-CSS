let table = "Number".padEnd(8) + "Square".padEnd(8) + "Cube\n";
for (let num = 5; num <= 15; num++) {
    let square = num * num;
    let cube = num * num * num;
    table += `${String(num).padEnd(8)}${String(square).padEnd(8)}${cube}\n`;
}
//document.write(`<table>${table}</table>`);
alert(table);
//console.log(table);