<script lang="ts">
  import type { QuizData } from "./api";
  import Option from "./Option.svelte";

  export let isChecked: boolean;
  export let quiz: QuizData;
  export let userAnswer: string | null;

  const { question, incorrect_answers, correct_answer } = quiz;

  const answers = [...incorrect_answers, correct_answer].sort(
    () => 0.5 - Math.random()
  );
</script>

<div>
  <h3 class="quiz-question">{@html question}</h3>

  <div class="flex mt-4 gap-5 flex-wrap">
    {#each answers as answer}
      <Option
        on:userAnswered
        {isChecked}
        {answer}
        {correct_answer}
        {userAnswer}
      />
    {/each}
  </div>
</div>
