
let express = require('express');
let route_controller = require('./controller');
let router = express.Router();

<<<<<<< HEAD
router.route('/').get( route_controller.index );
router.route('/new').post( route_controller.new );
router.route('/update/:id').get( route_controller.update );
router.route('/delete/:id').get( route_controller.delete );
router.route('/get/:text').get( route_controller.get );

=======
router.route('/').get(route_controller.index);
router.route('/new').post(route_controller.new);
router.route('/update/:id').get(route_controller.update);
router.route('/delete/:id').get(route_controller.delete);
>>>>>>> 29d6f445192b58b4a79e6d03af4207410b8b560d

module.exports = router;