# Svelte에서 Supabase 사용해 보기
- 본 프로젝트는 toy project

## Supabase 사용법



## Tailwind CSS를 Sveltekit 에서 사용하는 방법
- https://tailwindcss.com/docs/guides/sveltekit
- Tailwind CSS 설치
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init tailwind.config.cjs -p
mv postcss.config.js postcss.config.cjs
```
- tailwind.config.cjs 변경
```
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};
```
- ./src/app.css 추가
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- ./src/routes/__layout.svelte 에 app.css 추가
```
<script>
  import "../app.css";
</script>

<slot />
```

## Netlify 연동
- .gitignore 에 관련 build 폴더 추가
```
.netlify
```


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
