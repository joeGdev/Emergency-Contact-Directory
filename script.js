document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('l_form');
	const hidden = document.getElementById('l_summon_form');
	hidden.addEventListener('click', function (e) {
		e.preventDefault();
		
		form.classList.toggle('hidden');
	});

	const submit = document.getElementById('l_submit');
	submit.addEventListener('click', function (e) {
		e.preventDefault();

		const name = document.getElementById('l_name').value;
		const role = document.getElementById('l_role').value;
		const phone = document.getElementById('l_phone').value;
		const department = document.getElementById('l_depart').value;

		const table = document.querySelector('#l_table tbody');

		const newRow = document.createElement('tr');
		newRow.innerHTML = `
			<td>${name}</td>
			<td>${role}</td>
			<td>${phone}</td>
			<td>${department}</td>
		`;
		table.appendChild(newRow);

		form.reset();
	});

});