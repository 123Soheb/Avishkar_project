// Function to get the instance of the element
// with the id
function id(id) {
	return document.getElementById(id);
}

// This sorts the array using pigeonhole sort
const pigeonhole_sort = async (arr, n) => {

	// Find min and max in an array
	let min = arr[0];
	let max = arr[0];
	let range, i, j, index, fake_index;
	let isSort = document.createElement('div')
	isSort.id = "message";
	isSort.classList.add("message");
	id("message").appendChild(isSort)

	// Displaying message which will keep on
	// informing user about the parameters
	// which are changing
	isSort.innerText = `Minimum->${min} Maximum->${max}`

	// Using await to stop the code so that
	// visualization appears to the user
	await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, 1000)
	)
	for (let i = 0; i < n; i++) {

		// Iterating over the array
		id(i).style.color = "orange"
		id(i).style.borderColor = "orange"
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 1000)
		)
		if (arr[i] > max) {

			// Finding max
			max = arr[i];
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 1000)
			)
			isSort.innerText = `Minimum->${min} Maximum->${max}`
		}
		if (arr[i] < min) {

			// Finding min
			min = arr[i];
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 1000)
			)

			// Displaying message since min changed
			isSort.innerText = `Minimum->${min} Maximum->${max}`
		}
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 1000)
		)

		// Removing the iteration of box of orange
		// since iteration on that elment is complete
		id(i).style.color = "white"
		id(i).style.borderColor = "white"
	}

	range = max - min + 1;
	isSort.innerText =
		`Minimum->${min} Maximum->${max} range is->${range}`
	await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, 1000)
	)
	let phole = [];

	// Defining the pigeonhole array
	for (let i = 0; i < n; i++) {
		let tile = document.createElement('span');
		tile.id = i + 10;
		console.log(i)
		tile.classList.add("tile");
		phole[i] = 0;
		tile.innerText = phole[i];
		tile.style.margin = "0.5px";
		tile.style.padding = "7px"
		tile.style.border = "2px solid white"
		tile.style.width = "7vmin"
		tile.style.height = "7vmin"
		id("container_2").appendChild(tile);
		// i++;
	}
	console.log("phole before " + phole)
	await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, 1000)
	)

	// Filling the pigeon holes
	for (let i = 0; i < n; i++) {
		id((arr[i] - min) + 10).style.color = "orange"
		id((arr[i] - min) + 10).style.borderColor = "orange"
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 1000)
		)
		phole[arr[i] - min]++;
		id((arr[i] - min) + 10).innerText = phole[arr[i] - min]
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 1000)
		)
		id((arr[i] - min) + 10).style.color = "white"
		id((arr[i] - min) + 10).style.borderColor = "white"
		// i++
	}
	console.log("phole-->" + phole)

	index = 0;
	fake_index = 0
	isSort.innerText = `now we will modify array when phole[j]-- > 0`
	isSort.innerText =
`Minimum->${min} Maximum->${max} range is->${range} index->${index}`
	for (j = 0; j < range; j++) {
		id(j).style.color = "orange"
		id(j).style.borderColor = "orange"

		// Iterating over the array
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 1000)
		)
		while (phole[j]-- > 0) {
			id(j).style.color = "cyan"
			id(j).style.borderColor = "cyan"
			arr[index++] = j + min;
			id(fake_index++).innerText = j + min;
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 1000)
			)
			id(j).style.color = "white"
			id(j).style.borderColor = "white"
		}
		id(j).style.color = "white"
		id(j).style.borderColor = "white"
	}
	console.log(arr)
}

// Defining parameters array idcount for tiles
let idcount = 0;
var array = [8, 3, 2, 7,
	4, 6, 8];
window.onload = () => {

	// Sets message for user to understand major things
	id("message").innerText = "In this algorithm we will "
		+ "visualize Pigeohole sort First array displayed "
		+ "is main array and second array is PHOLE array"
	//when button start is clicked adding event to that
	id("start").addEventListener('click', () => {
		id("start").style.display = "none";
		id("message").innerText = ""
		console.log(array);
		let idcount = 0;

		// Creating a tile in an container id div to showcase
		// array elements and adding tile css to it
		for (let i = 0; i < array.length; i++) {
			let tile = document.createElement('span');
			tile.id = idcount;
			tile.classList.add("tile");
			tile.innerText = array[i];
			tile.style.margin = "0.5px";
			tile.style.padding = "7px"
			tile.style.border = "2px solid white"
			tile.style.width = "7vmin"
			tile.style.height = "7vmin"
			id("container").appendChild(tile);
			idcount++;
		}

		// Calling sorting function
		pigeonhole_sort(array, array.length);
	})
}
