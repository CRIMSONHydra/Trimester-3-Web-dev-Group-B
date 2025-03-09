import React, { useState } from 'react'

const randomWords = [
  "apple", "banana", "chair", "mountain", "river", "coffee", "laptop", "sunshine", "blanket", "mirror",
  "garden", "elephant", "pencil", "thunder", "melody", "ocean", "rainbow", "suitcase", "volcano", "whisper",
  "zebra", "popcorn", "galaxy", "hammock", "bicycle", "treasure", "lantern", "cupcake", "dolphin", "festival",
  "lighthouse", "passport", "waterfall", "library", "avocado", "sunrise", "notebook", "telescope", "chocolate",
  "fountain", "butterfly", "cinnamon", "fireworks", "squirrel", "hurricane", "blueberry", "parachute",
  "adventure", "orchestra", "jellyfish", "spaceship", "windmill", "chandelier", "marshmallow", "constellation",
  "carousel", "tornado", "symphony", "lemonade", "rollercoaster", "aquarium", "sunflower", "cupcake",
  "dragonfly", "igloo", "compass", "tambourine", "raspberry", "boomerang", "feather", "starlight", "labyrinth",
  "coconut", "echo", "violin", "gemstone", "tangerine", "dandelion", "cactus", "moonlight", "peppermint",
  "velvet", "waterfall", "stargaze", "masquerade", "skyline", "hummingbird", "meadow", "postcard", "aurora",
  "kaleidoscope", "wanderlust", "infinity", "tranquility", "horizon", "sapphire", "journey", "firefly",
  "dreamscape", "nostalgia", "serenity", "lullaby", "enchantment", "wonderland", "wilderness", "mystery",
  "silhouette", "daydream", "mirage", "solitude", "reverie", "heartbeat", "eclipse", "moonbeam", "sonnet",
  "stardust"
];

function FilterList() {

  const [input, setInput] = useState("");
  
  const list = randomWords.filter(word => {
    return word.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <div>
      <input type="text" placeholder="Search" value={input} onChange={e => setInput(e.target.value)} />
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  )
}

export default FilterList