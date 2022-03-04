<script context="module">
  import {getPosts} from '$lib/services'
  export async function load({url, params, fetch, session, context}) {
    const {data, error} = await getPosts()
    return {
      props: {
        posts: data,
        error
      }
    }
  }
</script>

<script>
  import {getUser, signOut} from '$lib/services'

  import CreatePost from '$lib/CreatePost.svelte'
  import Error from '$lib/Error.svelte'
  import Post from '$lib/Post.svelte'
  import {browser} from '$app/env'
  import {goto} from '$app/navigation'

  export let posts, error

  const user = getUser()
  if ( browser && !user ) goto('/login')

  async function handleSignOut() {
    await signOut()
    goto('/login')
  }
</script>

<header class="flex justify-between">
  <h1 class="text-2xl">Welcome to Qwitter!</h1>
  <button on:click={handleSignOut} class="btn">Logout</button>
</header>

<CreatePost />

<Error {error} />

{#each posts || [] as post}
  <Post {...post} />
{:else}
  No posts found!
{/each}