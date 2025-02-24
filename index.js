const express = require('express')
const app = express()

const PORT = 8004

app.set('view engine', 'ejs')


app.get('/air', (req, res) =>{
    res.render('show', {type: 'Air', signs: ['Aquarius', ' Gemini', ' Libra'], traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']})
})
app.get('/water', (req, res) =>{
    res.render('show', {type: 'Water', signs: ['Pisces',  'Cancer', ' Scorpio'], traits: ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']})
})
app.get('/fire', (req, res) =>{
    res.render('show', {type: 'Fire', signs: ['Aries', ' Leo', ' Sagittarius'], traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']})
})
app.get('/earth', (req, res) =>{
    res.render('show', {type: 'Earth', signs: ['Taurus', ' Virgo', ' Capricorn'], traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']})
})
app.get('/', (req, res) =>{
    res.render('index')
})


app.listen(PORT, ()=>{
    console.log('Port is running')
})