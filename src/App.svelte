<script lang="ts">
  import QuizPage from "./lib/QuizPage.svelte";
  import StartQuizButton from "./lib/StartQuizButton.svelte";

  let isQuizStarted = false;
</script>

{#if isQuizStarted}
  <QuizPage />
{:else}
  <div class="h-screen grid place-content-center gap-10">
    <h1 class="quizzical text-5xl">Quizzical</h1>
    <div class="grid place-content-center">
      <StartQuizButton on:click={() => (isQuizStarted = true)} />
    </div>
  </div>
{/if}
