const express = require('express');
const lodash = require('lodash');
const externalModule = require('../../src/logger/logger')
const externalModule2 = require('../../src/util/helper')
const externalModule3 = require('../../src/validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
    externalModule2.printDate()
    externalModule2.printMonth()
    externalModule2.getBatchInfo()
    externalModule3.myTrim()
    externalModule3.lowerCase()
    externalModule3.upperCase()

    res.send('My first ever api!')
});

router.get('/hello', function(req, res){
    const arrayMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const firstOdd = [1,3,5,7,9,11,13,15,17,19];
    const array1 = [1,2,3,4,5,6];
    const array2 = [1,3,6,9,5,10];
    const array3 = [2,4,1,10,18];
    const array4 = [18,19,10,3,5];
    const array5 = [3,4,7,9,11,12];
    const movieCatagory = [["horror", "The Shining"], ["drama", "Titanic"],["thriller", "Shutter Island"],["fantasy", "Pnas Labyrinth"]];
    console.log(lodash.chunk(arrayMonths,3));
    console.log(lodash.tail(firstOdd));
    console.log(lodash.union(array1, array2, array3, array4, array5));
    console.log(lodash.fromPairs(movieCatagory));

    res.send('Done');
});

router.get('/movies', function (req, res) {
    const movieName = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"];
    res.send(movieName);
});

router.get('/movies/:indexNumber', function (req, res) {
    const movieName = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"];
    for(let i=0; i<movieName.length; i++){
        if(req.params.indexNumber == i){
            res.send(movieName[i]);
        }
    }
    if(req.params.indexNumber > movieName.length-1){
        res.send('Please enter a valid input');
    }
});

router.get('/films', function (req, res) {
    const movieName = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }];
       
    res.send(movieName)
});

router.get('/films/:filmId', function (req, res) {
    const movieName = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }];
    for(let i=0; i<movieName.length; i++){
        if(req.params.filmId == movieName[i].id){
            res.send(movieName[i].name);
        }
    }
    if(req.params.filmId > movieName.length || req.params.filmId == 0){
        res.send('No movie exist with ith id');
    }
    
});

module.exports = router;
// adding this comment for no reason