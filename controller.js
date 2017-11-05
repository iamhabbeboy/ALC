
let model = require('./model');
<<<<<<< HEAD
let objectid = require('objectid');
//let ObjectID = require('mongodb').ObjectID;
=======
>>>>>>> 29d6f445192b58b4a79e6d03af4207410b8b560d

let controller = {

    index: (req, res) => {
<<<<<<< HEAD

        if( req.param('id') ) {
            
            var id = req.param('id'),
            obj = objectid(id);
            let collection = model.get('studentcollection');
            collection.find({ '_id': obj}, {}, (err, docs) => {
               //res.render( __dirname + '/views/index', { docs: docs, result: [] } );
               res.json({ status: 'success', rows: docs.length, result: docs });
               model.close();
            });

        } else {
            let collection = model.get('studentcollection');
            collection.find({}, {}, (err, docs) => {
                res.render( __dirname + '/views/index' , { result: docs, docs: []});
                model.close();
            });
        }
    },
    new: (req, res) => {

        let firstname  = req.body.firstname,
            lastname   = req.body.lastname,
            email      = req.body.email,
            level      = req.body.level,
            parentname = req.body.parentname,
            regno      = req.body.regno,
            address    = req.body.address;
           
        let query = { 
            "firstname": firstname, 
            "lastname": lastname,
            "email": email,
            "level": level,
            "parentname": parentname,
            "regno": Math.ceil(Math.random() * 1000000),
            "address": address
        };
        let collection = model.get('studentcollection');
        collection.find({ 'regno': email }, {}, (err, doc) => {
            if(doc.length > 0 ) {
                res.json({ 'status': 'exist', 'row': doc.length });
            } else {
                collection.insert( query , (err, doc) => {
                    if(err) throw err;
                    res.json({ 'status': 'success', 'row': '1'});
                    model.close();
                });
            }
        })
       
    },
    update: (req, res) => {

        let ID  = req.param('id');
        let collection = model.get('studentcollection');
        //collection.update({ _id: })
    },
    delete: (req, res) => {
        let ID = req.param('id'),
        obj = objectid(ID);
        collection = model.get('studentcollection');
        collection.find({ _id: obj }, {}, (err, docs) => {
            collection.remove({ _id: obj }, (err, doc) => {
                res.json({ status: 'success', result: docs });
            });
        });
    },
    get: (req, res) => {
        let text = req.param('text');
        let splitter = text.split(' ');
        var fname = '';
        var lname = '';
        res.json({status: '', result: []})
        collection = model.get('studentcollection');
        res.json({ status: '', result: []})
=======
        let collection = model.get('studentcollection');
        collection.find({}, {}, (err, docs) => {
            res.json(docs);
        });
    },
    new: (req, res) => {

    },
    update: (req, res) => {

    },
    delete: (req, res) => {
        res.send("ID is " + req.param('id'))
>>>>>>> 29d6f445192b58b4a79e6d03af4207410b8b560d
    }
}

module.exports = controller;