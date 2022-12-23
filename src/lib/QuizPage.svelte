<script lang="ts">
  import type { QuizData, ResponseData } from "./api";
  import Quiz from "./Quiz.svelte";
  import Spinner from "./Spinner.svelte";
  import StartQuizButton from "./StartQuizButton.svelte";

  let isChecked = false;
  let isAllQuestionAnswered = false;
  let promise = fetchData();
  let score = 0;
  let quizLength = 0;

  async function fetchData(): Promise<QuizData[]> {
    const API = "https://opentdb.com/api.php?amount=7&category=19";
    const response = await fetch(API);
    const { results } = (await response.json()) as ResponseData;
    quizLength = results.length;

    return results;
  }

  function handleStartQUiz() {
    console.log("hello");
    promise = fetchData();
    isChecked = false;
  }

  function handleClick() {
    isChecked = true;
    isAllQuestionAnswered = false;
  }
</script>

<h1 class="quizzical text-3xl">Quizzical</h1>

<div class="quiz">
  {#await promise}
    <Spinner />
  {:then quizData}
    <Quiz {isChecked} {quizData} bind:isAllQuestionAnswered bind:score />
  {/await}

  {#if isChecked}
    <p>You scored {score}/{quizLength} correct answers</p>
    <StartQuizButton className="block md:mx-auto" on:click={handleStartQUiz} />
  {/if}

  {#if isAllQuestionAnswered}
    <button class="check-answers-btn block md:mx-auto" on:click={handleClick}
      >Check answers</button
    >
  {/if}
</div>
