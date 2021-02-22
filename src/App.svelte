<script>
import GoMarkGithub from 'svelte-icons/go/GoMarkGithub.svelte'
let players = [''];
let roles = [''];

$: shuffled = shuffle(roles);

function shuffle(array) {
	array = array.slice(0);
	for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function handlePlayerInputKey(event, index) {
  if(event.key === 'Enter'){
		addPlayer();
		setTimeout(()=> document.getElementById(`player${index+1}`).focus())
  }
}

function handleRoleInputKey(event, index) {
  if(event.key === 'Enter'){
		addRole();
		setTimeout(()=> document.getElementById(`role${index+1}`).focus())
	}
}

function addPlayer() {
	players = [...players, '']
}

function removePlayer(index) {
	players = players.filter((_,i) => i != index);
}

function addRole() {
	roles = [...roles, '']
}

function removeRole(index) {
	roles = roles.filter((_,i) => i != index);
}
</script>

<main>

<nav>
	<div class="icon" ><a href="https://github.com/jmbuhr/werwolf-app"><GoMarkGithub/></a></div>
</nav>

<h1>Werwolf Online Generator</h1>


<div class='controls'>
	<div>
		<h3>Players</h3>
		{#each players as player, index}
			<button class="rm" on:click={()=>removePlayer(index)}>x</button>
			<input id="player{index}" bind:value={players[index]} on:keypress={(event) => handlePlayerInputKey(event, index)}/>
			<br>
		{/each}
		<button on:click={addPlayer}>Add player</button>
	</div>
	<div>
		<h3>Roles</h3>
		{#each roles as role, index}
			<button class="rm" on:click={()=>removeRole(index)}>x</button>
			<input id="role{index}" bind:value={roles[index]} on:keypress={(event) => handleRoleInputKey(event, index)}/>
			<br>
		{/each}
		<button on:click={addRole}>Add role</button>
	</div>
</div>
<div class='result'>
	<table>
		<tr>
			<th>Player</th>
			<th>Role</th>
		</tr>
		{#each players as pl, index}
			<tr>
				<td>{pl}</td>
				<td>{shuffled[index]}</td>
			</tr>
		{/each}
	</table>
</div>

</main>

<style>
  h1 {
		text-align: center;
	}

	.icon {
    width: 32px;
    height: 32px;
  }

	.result {
		margin: 30px auto;
		max-width: fit-content;
	}

	.controls {
		background-color: rgb(195, 197, 219);
		padding: 2px 10px;
		margin: auto;
		border-radius: 2px;
		max-width: fit-content;
	}

	button {
		transition: 0.3s;
		opacity: 0.8;
		border-radius: 5px;
	}

	button.rm {
		font-weight: bold;
		border-radius: 40%;
		margin: auto;
		padding: 1px 6px;
		border: none;
		text-align: center;
	}

	button:hover {opacity: 1}

	button.rm:hover {
		background-color: rgb(128, 14, 14);
		color: white;
	}

	table {
		color: #333333;
		border-collapse: collapse;
	}

	table th {
			padding: 8px;
			background-color: #d7d7e7;
	}

	table tr:hover td {
			background-color: #DFEBF1;
	}

	table td {
			border-width: 1px;
			padding: 8px;
			background-color: #ffffff;
	}

</style>
