const express = require('express');

const carDB = require('../data/car-dealer.db3')

const router = express.Router()

router.post('/', (req, res) => {
    //best practice is to abstract/capture req info to use elsewhere for readability/at-a-glance understanding of what it is supposed to be
    const newCar = req.body

    carDB('cars')
    .insert(newCar, 'id') //id here is for postgress or mySQL, to tell it which column to return to us
    .then(ids => { //the insert will automatically return ids in sqlite3, this is not in the knex documentation
        const id = ids[0];
        return carDB('cars')
                    .select('VIN', 'Mileage')
                    .where({id: id})
                    .first()
                    .then(car => {
                        res.status(200).json(car)
                    })
    })
    .catch(err => {
        console.log("this is POST car err", err)
        res.status(500).json({error: 'server POST issue'})
    })
})

router.get('/', (req, res)=>{
    carDB('cars')
    .select('*')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        console.log("this is GET all cars err", err)
        res.status(500).json({error: 'server GET cars issue'})
    })
})

router.get('/:id', (req, res)=>{
    const carId = req.params.id

    carDB('cars')
    .select('*')
    .where({id: carId})
    .first()
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        console.log("this is GET SPECIFIC car err", err)
        res.status(500).json({error: 'server GET car issue'})
    })
})


//MIDDLEWARE

function validateId(req, res, next){
    const carId = req.params.id

    carDB('cars')
        .select('*')
        .where({id: carId})
        .first()
        .then(car => {
            if(!car){
                res.status(404).json({error: 'car id not found'})
            }
            else{
                next()
            }
        })
        .catch(err => {
            console.log('This is valid id error', err)
            res.status(500).json({error: 'validating id err, server'})
        })
}

module.exports = router;