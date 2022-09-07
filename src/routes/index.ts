import { Router } from "express";
import { readdirSync } from "fs";

import swaggerUi from "swagger-ui-express";

const PATH_ROUTER = `${__dirname}`

const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split('.').shift()
  return file;
}

router.use('/api-doc', swaggerUi.serve, swaggerUi.setup(require('./../../swagger.json')));

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== 'index') {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Se esta cargando la ruta .............. /${cleanName}`)
      router.use(`/v1/${cleanName}`, moduleRouter.router)
    });
  }
});

router.use('/', (req, res) => {
  res.redirect('/api-doc');
});

export { router }