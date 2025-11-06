document.addEventListener('DOMContentLoaded', function () {

	const form = document.getElementById('l_form');
	const table = document.querySelector('#l_table tbody');


	const summonForm = document.getElementById('l_summon_form');
	summonForm.addEventListener('click', function (e) {
		e.preventDefault();

		form.classList.toggle('hidden');
	});

	const submitForm = document.getElementById('l_submit');
	submitForm.addEventListener('click', function (e) {
		e.preventDefault();

		const name = document.getElementById('l_name').value;
		const role = document.getElementById('l_role').value;
		const phone = document.getElementById('l_phone').value;
		const department = document.getElementById('l_depart').value;

		const createTr = document.createElement('tr');
		createTr.innerHTML = `
			<td>${name}</td>
			<td>${role}</td>
			<td>${phone}</td>
			<td>${department}</td>
			<td><a href="" class="btn btn-danger" id="l_delete">Delete</a></td>
		`;

		table.appendChild(createTr);

		form.reset();
	});


});