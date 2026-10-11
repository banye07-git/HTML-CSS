let table = "Number\tSquare\tCube\n";
for (let num = 5; num <= 15; num++) {
    let square = num * num;
    let cube = num * num * num;
    table += `${String(num).padEnd(12)}${String(square).padEnd(12)}${cube}\n`;
}
//document.write(`<table>${table}</table>`);
alert(table);
//console.log(table);