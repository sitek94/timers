<script>
  // Layout

  const timers = [
    { label: 'Spanish', icon: '🇪🇸' },
    { label: 'Reading', icon: '📖' },
    { label: 'Vlog', icon: '🎥' },
    { label: 'Stretching', icon: '🧘‍♀️' },
    { label: 'Journal', icon: '📝' },
    { label: 'Charisma', icon: '🗣' },
  ]
</script>

<main>
  {#each timers as { label, icon }}
    <button on:click={() => alert(label)}>
      <span role="img" aria-label={label}>
        {icon}
      </span>
    </button>
  {/each}
</main>

<style>
  :global(body) {
    color: #fff;
    background: #222;
    padding: 2rem;
  }

  main {
    display: flex;
    gap: 1rem;
  }

  button {
    font-size: 3rem;
    border: 3px solid #fff;
    border-radius: 1rem;
    cursor: pointer;
    background: #fff;
  }
  button:hover {
    border-color: cornflowerblue;
  }
</style>
