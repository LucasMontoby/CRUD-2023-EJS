const db = require("../../database/models");
const sequelize = db.sequelize;

const moviesApi = {
    list: (req, res) =>{
        db.Movie.findAll()
        .then(movie => {
            res.status(200).json({
                meta:{
                    satus:200,
                    total: movie.length,
                    url: "api/moviesApi"
                }
            })
        })
    }
}

module.exports = moviesApi

