import Navigo from "/navigo";

const router = new Navigo("/");

router.on({
    "/": () => {
      console.log("Home");
    },
    "/about":() => {
      console.log("About");
    }
});
router.resolve();