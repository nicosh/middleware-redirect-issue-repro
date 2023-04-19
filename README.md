# To reproduce
- Make sure to be on the main branch (next 13.2.4)
- npm install
- npm run dev
- Visit http://localhost:3000
- You should be able to see
- Change branch (checkout on bug branch)
- npm install
- npm run dev
- Visit http://localhost:3000
- It should return 404 page


The project structure is inspired by [platforms starter kit](https://github.com/vercel/platforms/tree/app-dir), routing and redirects with middleware works on next 13.2.4 but it breaks on 13.3.0 ( and all other canaries)