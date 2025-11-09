document.addEventListener('DOMContentLoaded', function () {


	const appendTable = document.querySelector('#l_table tbody');
	const form = document.querySelector('#l_form');


	const summonForm = document.querySelector('#l_summon_form');
	summonForm.addEventListener('click', function (e) {
		e.preventDefault();

		form.classList.toggle('hidden');
	})

	const submit = document.querySelector('#l_submit');
	submit.addEventListener('click', function (e) {
		e.preventDefault();

		if (!l_form.checkValidity()) {
			l_form.reportValidity();
			return;
		}

		const name = document.querySelector('#l_name').value;
		const role = document.querySelector('#l_role').value;
		const phone = document.querySelector('#l_phone').value;
		const department = document.querySelector('#l_depart').value;

		const whichRowToEdit = document.querySelector('.editingRow');

		if (whichRowToEdit) {
			const cellData = whichRowToEdit.querySelectorAll('td');
			cellData[0].textContent = name;
			cellData[1].textContent = role;
			cellData[2].textContent = phone;
			cellData[3].textContent = department;
			whichRowToEdit.classList.remove('editingRow');
		} else {
			const newTr = document.createElement('tr');
			newTr.classList.add('tableBody');
			newTr.innerHTML = `
				<td>${name}</td>
				<td>${role}</td>
				<td>${phone}</td>
				<td>${department}</td>
				<td>
					<a href="" class="btn btn-success editBtn" id="l_edit">Edit</a>
					<a href="" class="btn btn-danger delBtn" id="l_delete">Delete</a>
				</td>
			`;
			appendTable.appendChild(newTr);
		}

		form.reset();

		document.querySelectorAll('.delBtn').forEach(a=>{a.addEventListener('click', function (e) {
			e.preventDefault();
			const row = this.closest('tr');
			row.remove();
		});
		});

		document.querySelectorAll('.editBtn').forEach(a=>{a.addEventListener('click', function (e) {
			e.preventDefault();
	
			const confirmEditingRow = document.querySelector('.editingRow');
	
			if (confirmEditingRow) {
				confirmEditingRow.classList.remove('editingRow');
			}
	
			const row = this.closest('tr');
			row.classList.add('editingRow');
			const cellData = row.querySelectorAll('td');
	
			const name = cellData[0].textContent;
			const role = cellData[1].textContent;
			const phone = cellData[2].textContent;
			const department = cellData[3].textContent;
	
			document.querySelector('#l_name').value = name;
			document.querySelector('#l_role').value = role;
			document.querySelector('#l_phone').value = phone;
			document.querySelector('#l_depart').value = department;		
		});
		});
	});

	document.querySelectorAll('.delBtn').forEach(a=>{a.addEventListener('click', function (e) {
		e.preventDefault();
		const row = this.closest('tr');
		row.remove();
	});
	});

	document.querySelectorAll('.editBtn').forEach(a=>{a.addEventListener('click', function (e) {
		e.preventDefault();

		const confirmEditingRow = document.querySelector('.editingRow');

		if (confirmEditingRow) {
			confirmEditingRow.classList.remove('editingRow');
		}

		const row = this.closest('tr');
		row.classList.add('editingRow');
		const cellData = row.querySelectorAll('td');

		const name = cellData[0].textContent;
		const role = cellData[1].textContent;
		const phone = cellData[2].textContent;
		const department = cellData[3].textContent;

		document.querySelector('#l_name').value = name;
		document.querySelector('#l_role').value = role;
		document.querySelector('#l_phone').value = phone;
		document.querySelector('#l_depart').value = department;		
	});
	});




});