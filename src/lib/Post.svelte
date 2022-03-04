<script>
  import { tick } from "svelte";

  import Error from "./Error.svelte";
  import { createComment, createLike, deleteComment, getUser } from "./services";

  export let id, user, content, likes = 0, comments = [], publicURL = null

  let commentContent = ''
  let createCommentPromise = Promise.resolve({})
  function addComment() {
    console.log(getUser())
    createCommentPromise = createComment({email: getUser().email, post:id, content:commentContent, user_id: getUser().id})
    .then(({data, error}) => {
      commentContent = ''
      comments = [...data, ...comments]
      return {data, error}
    })
  }

  async function removeComment(comment) {
    console.log(comment)
    const { data, error } = await deleteComment(comment)
    if (error) return
    let idx = comments.indexOf(comment)
    comments.splice(idx, 1)
    comments = comments
  }

  function addLike() {
    likes += 1
    createLike({user: getUser().email, post: id})
  }
</script>

<article class="card flex-1 bg-base-100 shadow-md">
  {#if publicURL}
    <figure class="px-10 pt-10">
      <img src={publicURL} alt="Shoes" class="rounded-xl">
    </figure>
  {/if}
  <div class="card-body items-center text-center mt-8"> 
    <h2 class="card-title">{user} says...</h2>
    <p>{content}</p>
    <div class="card-actions flex justify-between">
      {#await createCommentPromise}
        Posting comments...
      {:then {data, error}}
        <Error {error} />
        {#if data}
          Thanks for creating an insightful and kind comment!
        {/if}
        <form class="form-control" on:submit|preventDefault={addComment}>
          <div class="input-group">
            <input bind:value={commentContent} type="text" placeholder="Comment…" class="input input-bordered">
            <button class="btn">
              Leave Comment
            </button>
          </div>
        </form>
      {/await}
      <button on:click={addLike} class="btn btn-primary">{likes} {likes === 1 ? 'Like' : 'Likes'}</button>
    </div>
    {#each comments as comment (comment.id)}
      <div>
        {comment.email} says... <q>{comment.content}</q>
        <button class="btn btn-circle btn-outline" on:click={() => removeComment(comment)}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    {/each}
  </div>
</article>