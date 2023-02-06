const express = require("express");
const app = express();
const port = 8000;


const abilities = [
        {
            "ability": {
                "name": "blaze",
                "url": "https://pokeapi.co/api/v2/ability/66/"
            },
            "is_hidden": false,
            "slot": 1
        },

        {
            "ability": {
                "name": "solar-power",
                "url": "https://pokeapi.co/api/v2/ability/94/"
            },
            "is_hidden": true,
            "slot": 3
        },

        {
    "game_indices": {
          "game_index": 153,
          "version": {
              "name": "red",
              "url": "https://pokeapi.co/api/v2/version/1/"
          }
      }
    },

    {
      "game_index": 1,
      "version": {
          "name": "diamond",
          "url": "https://pokeapi.co/api/v2/version/12/"
      }
  },

  {
  "height": 7,
    "held_items": [],
    "id": 1,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    }
    ]

// req is short for request
// res is short for response
app.get("/api/user", (req, res) => {
  res.json(abilities);
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );