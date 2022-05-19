//CODE DIDN'T WORK :-)

var musicCollection = 
{
    "0001": 
    {
        "album": "Palmystery",
        "artist": "Victor Wooten",
        "tracks": ["Flex", "Left, Right & Center"]
    },

    "0002":
    {
        "album": "DJ Jesse Vol.3",
        "artist": "jacob Collier",
        "tracks": ["Hideaway", "Feel"]
    },

    "0003":
    {
        "artist": "Richard Bona",
        "tracks": [ ]
    },
    
    "0004": 
    {
            "album": "By The River of Babylon"
    }
}

var musicCollection = JSON.parse(JSON.stringify(musicCollection));  //this is just a way of saving a copy of the original object before anything is changed.


function updateCollection(id, prop, value) //this function updates the musicCollection.

{
    /*The first thing we want to do is delete any property of the object that is 
    empty. So if we have an artist property with no name, that "artist" property
    gets deleted entirely from the object. */
    if (value === "")
    {
       delete musicCollection[id][prop]; 
    } 
    /* When updating most properties, we'll overide the values in the property with 
        our new input. However, if the property in question is "Tracks", we are not going to 
        overide as usual, we'll rather push the new track to the end of the list. */
    else if (prop === "tracks")
    {//but before we initiate the pushing of every new tracks to the end of the list, we have to first make sure that the track property is created, just in case it is not already created, or doesn't exist.
        musicCollection[id][prop] = musicCollection[id][prop] || []; //so now that we know that it exists, we will just push the value (new track) that is passed into the function unto the end of the array.
        musicCollection[id][prop].push(value);
    }
    //last condition: if the property exists, and isn't empty, and the destination isn't "tracks", then we just send the value in question to the location pre-specified.
   else 
   {
       musicCollection[id][prop] = value;
   }
   
    return musicCollection;
}

console.log(updateCollection(0003, "artist", "Boney M"));