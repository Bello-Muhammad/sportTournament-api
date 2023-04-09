const express = require('express')
require('./config/mongoose')
const AppRoutes = require('./routes/index')

const app = express()

const port = process.env.PORT

app.use(express.json())

AppRoutes.init(app); //initializing app routing




// app.post('/addteam', async (req, res) => {

//     const teamname = req.body.teamname
//     const team = teamname.split(" ")

//     for (let i = 0; i < team.length; i++){
//         team[i] = team[i][0].toUpperCase() + team[i].substr(1);
//     }

//     const teamName = team.join(' ')

//     try {

//         const team =await Teams.findOne({teamName: teamName})

//         if(team) {
//             res.send('team exist '+ team.teamName)
//         }

//         const teams = new Teams({teamName})

//         await teams.save((err) => {
//             if (err) {
//                 res.send(err)
//             }
//             res.send('saved '+ teams.teamName ).status(201)
//         })
        
//     } catch (error) {
//         console.log(error)
//     }

// })


// app.get('/teams', async (req, res) => {
//     const teams = await Teams.find()

//     if(teams.length === 0) {
//         res.send("No team added yet")
//     }else{
//         res.send(teams)
//     }
    
//     // let Team = []

//     // teams.forEach( (team) => { Team.push(team.teamName) })

//     // console.log(Team.join(' '))

    
// })

// app.get('/teams/team/:id', async (req, res) => {

//     const _id = req.params.id

//     const team = await Teams.findById({ _id })
    
//     // let Team = []

//     // teams.forEach( (team) => { Team.push(team.teamName) })

//     // console.log(Team.join(' '))

//     res.send(team)
// })

// app.patch('/addplayer/:id', async (req, res) => {

//     const name = req.body.name

//     const Name = name.split(" ")

//     for (let i = 0; i < Name.length; i++){
//         Name[i] = Name[i][0].toUpperCase() + Name[i].substr(1);
//     }

//     const playerName = Name.join(' ')

//     let team =await Teams.updateOne({ _id: req.params.id }, {
//         $push: {
//             teamPlayers: playerName
//         }
//     })

//     res.send(team)
//     // team.teamplayers.push(playerName)

//     // await team.save()

//     // console.log( team)


// })

// app.patch('/teamanalysis/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     try {
//         const team = await Teams.findById({ _id: req.params.id})

//         if (!team) {
//             res.send('Can\'t find team')
//         }

//         updates.forEach((update) => team[update] = req.body[update])
//         await team.save()
//         res.send(team)
        
//     } catch (error) {
        
//     }

// })

// app.post('/addfixtures', async (req, res) => {

//     console.log(req.body)
//     const {title, firstTeam, secondTeam, date} = req.body

//     const fixture = new Fixtures({
//         title,
//         versus:[
//             {
//                 firstTeam,
//                 secondTeam,
//                 date
//             }
//         ]
//     })

//     await fixture.save()

//     res.send(fixture)

// })


app.listen(port, () => {
    console.log('server on port: '+port)
})