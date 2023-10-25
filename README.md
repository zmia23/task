# Frontend Interview Task

Sample of webapp for users management. App is supoed to contain following views:
- Home - starting page
- Users - view for users management
- About - placeholder view for more information about app

## Get started

After cloning repository it is necesary to install dependencies and run the page. For building and runing page
there are two possible options:
- Vite
- Docker

After seting up page using one of mentioned method, visit: `http://localhost:3000/`

### Run with Vite
Navigate console to the repository and type:
```
npm i
```
When installing all dependencies is finished, build the app using following command: 
```
npm run build
```
After build, it is time to run the page and  it is achived by runing following command:
```
npm run dev
```

### Run with Docker
Create image using following command:
```
docker build -t <image-name> . 
``` 
Take a note that `<imagename>` has to be replaced with the string, e.g `ikarus-task-final`

When image is done building run container using following command:
```
docker run -dp 3000:3000 -t <image-name>:latest
```
Take a note that `<imagename>` has to pe trplaced with image tag defined in previous step.

## Environment modes

There are environment variables taht change API behaviour. Inspect `.env` file in root of the project to modify avriables.
- `VITE_IS_AXIOS_MOCK=true` - If it is set to `true`, all api calls will be mocked.
- `VITE_RETURN_ERROR_ON_CREATE=false` - If it is set to `true`, it will return error on `POST /api/users`. Purpose is to display Error banner in Users view.

## Check it out on pages

Navigate to Deploy > Pages. there you will find the link of the app deployed to pages.