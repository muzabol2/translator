# translator
Translator is a small frontend application for the [LibreTranslate API](https://libretranslate.com/docs/) made from youtube tutorial for educational purposes only.

<img width="602" alt="image" src="https://user-images.githubusercontent.com/109333068/236662593-9e4d0a60-3afd-4589-bb26-1871a4523534.png">

## Technologies
* Set up the app with [Vite](https://vitejs.dev/) (before mostly use [Create React App](https://create-react-app.dev/))
* [TypeScript](https://www.typescriptlang.org/)
* libraries:
  * [React](https://legacy.reactjs.org/)
  * [use-debounce](https://www.npmjs.com/package/use-debounce)
  * [styled-components](https://styled-components.com/)
* test libraries:
  * [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
  * [jest](https://jestjs.io/docs/tutorial-react) 
  * [vitest](https://vitest.dev/guide/)
  * [cypress](https://www.cypress.io/)

## Setup
To use LibreTranslate API you need to pay but you can run it locally and then it is free. [Here](https://github.com/muzabol2/translator/blob/main/src/lib/config/config.ts#L6) is a config line that you can change. 
To run the api locally you need to download an image [libretranslate/libretranslate](https://hub.docker.com/r/libretranslate/libretranslate) and run it in a docker container. Do that: 
1. Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed on your machine.
2. In a `docker-compose.yml` file of the project choose languages you want to have:
```yaml
version: "3"
services:
  translator:
    image: libretranslate/libretranslate
    restart: always
    ports:
      - 3001:5000
    environment:
      LT_LOAD_ONLY: "zh,de,pl,en,es" // here change
```
3. In a terminal navigate to the root directory of your project where the `docker-compose.yml` file is located and run the command:
```bash
docker-compose up
```
4. Once the container is up and running, your frontend translate app can communicate with it. You can check if api works by opening your web browser and navigating to `http://localhost:3001`.

## Inspiration
[Jacek Pudysz](https://github.com/jpudysz) - this repo is just a result of watching his tutorial on [YouTube](https://www.youtube.com/playlist?list=PLe9Nvh2XoKC0TPd5I5WMHtFsOTW1IGPy-). I just added a few little changes myself. The course helped me a lot to organize my knowledge. I also caught some good practices. Thank you. You are the best!
