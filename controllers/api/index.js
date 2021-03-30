const router = require("express").Router();
const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");
const customerRoutes = require("./customerRoutes");
const flavorRoutes = require("./flavorRoutes")
const orderItemRoutes = require("./orderItemRoutes")
const productTypeRoutes = require("./productTypeRoutes")
const sizeRoutes = require("./sizeRoutes")

router.use("/users", userRoutes);
router.use("/orders", orderRoutes);
router.use("/customers", customerRoutes);
router.use("/flavors", flavorRoutes);
router.use("/orderitem", orderItemRoutes);
router.use("/producttype", productTypeRoutes);
router.use("/size", sizeRoutes);

module.exports = router;
