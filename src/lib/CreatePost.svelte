<script>
  import Error from '$lib/Error.svelte';
  import {createPost, getUser} from '$lib/services'
  import UploadImage from './UploadImage.svelte'

  let file = null
  let postContent = ''

  let createPostPromise = Promise.resolve({})
  function handleCreatePost() {
    createPostPromise = createPost({user: getUser().email, content: postContent, imageFile: file})
  }
</script>


<form class="form-control" on:submit|preventDefault={handleCreatePost}>
  <label for="post" class="label">
    <span class="label-text">What would you like to qwit?</span>
  </label>

  <UploadImage bind:file />

  <textarea bind:value={postContent} id="post" class="textarea textarea-info" placeholder="Bio"></textarea>
  {#await createPostPromise}
    <button disabled class="btn" type="button">Qwit that Shwit!</button>
  {:then {data, error}}
    <button class="btn">Qwit that Shwit!</button>
    {#if data}
      <strong class="text-green-600">Successfully create post!</strong>
    {/if}
    <Error {error} />
  {/await}
</form>