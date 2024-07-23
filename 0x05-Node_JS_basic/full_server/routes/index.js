import AppController from "../controllers/AppController";
import StudentsController from "../controllers/StudentsController";

/**
 * Organize a complex HTTP server using Express.
 * @param {Express} app The app.
 * @author Erick Nyoro
 */
const mapRoutes = (app) => {
  app.get("/", AppController.getHomepage);
  app.get("/students", StudentsController.getAllStudents);
  app.get("/students/:major", StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
