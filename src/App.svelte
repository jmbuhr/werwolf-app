<script>
import GoMarkGithub from 'svelte-icons/go/GoMarkGithub.svelte'
import EditableList from './components/EditableList.svelte';
let players= [{name: '', field: ''}];
let roles = [{name: '', field: ''}];

$: shuffledRoles = shuffle(roles.map((v) => v.name));

function reshuffle() {
  shuffledRoles = shuffle(roles.map((v) => v.name));
}

function shuffle(array) {
  array = array.slice(0);
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
</script>

<main>

<nav>
  <div class="icon" ><a href="https://github.com/jmbuhr/werwolf-app"><GoMarkGithub/></a></div>
</nav>

<h1>Werwolf Online Generator</h1>
<div class='controls'>
  <EditableList bind:entries={players} typeOfEntry="player"/>
  <EditableList bind:entries={roles} typeOfEntry="role"/>
</div>
<div class='result'>
  <button on:click={reshuffle}>Reshuffle</button>
  <table>
    <tr>
      <th>Player</th>
      <th>Role</th>
    </tr>
    {#each players as pl, index}
      <tr>
        <td>{pl.name}</td>
        <td>{shuffledRoles[index]}</td>
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
