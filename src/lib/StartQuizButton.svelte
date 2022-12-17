<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let className = "";

  const dispatcher = createEventDispatcher();

  function handleClick() {
    dispatcher("startQuiz");
  }
</script>

<button
  on:click={handleClick}
  class="start-quiz-btn py-3 px-7 font-bold text-lg {className}"
>
  Start Quiz</button
>
