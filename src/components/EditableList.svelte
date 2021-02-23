<script>
export let entries = [{name: '', field: ''}];
export let typeOfEntry;

function addEntry() {
  entries = [...entries, {name: ''}]
}

function handleEntryInputKey(event, index) {
  if(event.key === 'Enter'){
    addEntry();
    setTimeout(()=> entries[index+1].field.focus())
  }
}

function removeEntry(index) {
  entries = entries.filter((_,i) => i != index);
}

</script>

<div>
  <h3>{typeOfEntry.charAt(0).toUpperCase() + typeOfEntry.slice(1) + 's'}</h3>
  {#each entries as entry, index}
    <button class="rm" on:click={()=>removeEntry(index)}>x</button>
    <input bind:this={entry.field} bind:value={entry.name} on:keypress={(event) => handleEntryInputKey(event, index)}/>
    <br>
  {/each}
  <button on:click={addEntry}>Add {typeOfEntry}</button>
</div>

<style>
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
</style>