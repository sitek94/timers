<script lang="ts">
  const timers = [
    { label: 'Spanish', icon: '🇪🇸', time: 10 },
    { label: 'Reading', icon: '📖', time: 15 },
    { label: 'Vlog', icon: '🎥', time: 10 },
    { label: 'Stretching', icon: '🧘‍♀️', time: 20 },
    { label: 'Journal', icon: '📝', time: 5 },
    { label: 'Charisma', icon: '🗣', time: 5 },
  ]

  type Timer = typeof timers[number]

  let active: Timer | null = null

  function onClick(timer: Timer) {
    active = timer
    setTimeout(() => {
      alert(`${timer.label} is done!`)
      active = null
    }, timer.time * 100)
  }
</script>

<main>
  {#each timers as timer}
    <button on:click={() => onClick(timer)} class:active={timer === active}>
      <span role="img" aria-label={timer.label}>
        {timer.icon}
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

  button.active {
    opacity: 0.3;
  }
</style>
