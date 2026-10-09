/*
for (let employee = 1; employee <= 3; employee++) {
	const name = prompt(`Enter the name of employee ${employee}:`);
	const hoursWorked = Number(prompt(`Enter the hours worked by ${name}:`));
	const hourlyRate = Number(prompt(`Enter the hourly rate for ${name}:`));

	const regularHours = Math.min(hoursWorked, 40);
	const overtimeHours = Math.max(hoursWorked - 40, 0);
	const grossPay = regularHours * hourlyRate + overtimeHours * hourlyRate * 1.5;

	document.write(`<p>${name}'s gross pay is $${grossPay.toFixed(2)}.</p>`);
}*/

for (let employee = 1; employee <= 3; employee++) {
    const name = prompt(`Enter the name of employee ${employee}:`);
    const hoursWorked = Number(prompt(`Enter the hours worked by ${name}:`));
    const hourlyRate = Number(prompt(`Enter the hourly rate for ${name}:`));

    const overtimeHours = hoursWorked - 40;
    const overtimePay = hourlyRate * 1.5;
    const gross_pay = hourlyRate*(hoursWorked-overtimeHours)+overtimePay*overtimeHours;
    
    document.write(`<p>${name}'s gross pay is $${gross_pay.toFixed(2)}.</p>`);
}