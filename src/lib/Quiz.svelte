<script lang="ts">
  import type { QuizData } from "./api";
  import Question from "./Question.svelte";

  export let quizData: QuizData[];
  export let isChecked: boolean;
  export let isAllQuestionAnswered: boolean;
  // export let score: number;

  let userAnswers: (string | null)[] = Array(quizData.length).fill(null);

  function handleAnswered(answer: string, index: number) {
    const newAnswered = [...userAnswers];

    if (newAnswered[index] === answer) newAnswered[index] = null;
    else newAnswered[index] = answer;

    userAnswers = newAnswered;
  }

  //   $: console.log(userAnswers);

  $: isAllQuestionAnswered = userAnswers.every(Boolean);

</script>

{#each quizData as quiz, i}
  <Question
    on:userAnswered={({ detail }) => handleAnswered(detail, i)}
    {quiz}
    {isChecked}
    userAnswer={userAnswers[i]}
  />
{/each}
