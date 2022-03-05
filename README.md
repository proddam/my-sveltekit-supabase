# Svelte에서 Supabase 사용해 보기
- 본 프로젝트는 toy project
- 참고 동영상: https://www.youtube.com/watch?v=mPQyckogDYc
  - 보고 따라하기에는 그닥 좋은 내용은 아님
  - promise를 사용하는 패턴은 참고가 됨
  - supabase를 완벽하게 숙지한 상태가 아닌 듯함. 연동이 살짝 삐걱됨
## Supabase 첫 사용 후기
- Database
  - 비교적 사용하기 쉬움. 
  - 단, Policy 설정이 Postgre db에 sql 구문으로 정의. 
  - Row Level Security 개념 정확히 이해하는 것이 필요
    - https://supabase.com/docs/guides/auth/row-level-security
- Auth
  - magic link 방식 외의 다른 auth 방법도 봤으면 좋겠음
- Storage
  - private bucket 에 대한 hands-on 도 필요한 상태
- 다음에 참고할 프로젝트
  https://github.com/supabase-community/svelte-kanban

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
- 실제 netlify에는 연동 안함


## To Do
[ ] dot env 도입


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
