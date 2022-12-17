<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let isChecked: boolean;
  export let answer: string;
  export let userAnswer: string;
  export let correct_answer: string;

  const dispatcher = createEventDispatcher();
  function handleClick() {
    if (isChecked) return;
    dispatcher("userAnswered", answer);
  }

  $: isAnswered = !isChecked && answer === userAnswer;
  $: correct = isChecked && correct_answer === answer;
  $: inCorrect = isChecked && answer === userAnswer;
</script>

<button
  class="quiz-option"
  class:bg-[#D6DBF5]={isAnswered}
  class:inCorrect
  class:correct
  disabled={isChecked}
  on:click={handleClick}>{@html answer}</button
>
