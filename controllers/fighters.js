import{v4 as uuidv4} from 'uuid';

let fighters = []


export const createFighter = (req, res)=>{
    const fighter = req.body;
    fighters.push({...fighter, id: uuidv4() });
    res.send(`Fighter with the name ${fighter.name} added`);
};

export const getFighters= (req, res) =>{
    console.log(fighters);
    res.send(fighters);
};

export const getFighterById =(req, res)=>{
    const {id}= req.params;
    const fighterMatch =fighters.find((fighter)=> fighter.id===id);
    res.send(fighterMatch);
};

export const deleteFighter = (req, res)=>{
    const {id}= req.params;
    fighters = fighters.filter((fighter)=> fighter.id != id);
    res.send(`Fighter with the name ${fighter.name} deleted`);
}

export const updateFighter = (req, res)=>{
    const {id} = req.params;
    const {name, nickname, age, height, specialability} = req.body;
    const fighter = fighters.find((fighter)=> fighter.id==id);
    if(name){
        fighter.name = name
    }
    if(nickname){
        fighter.nickname = nickname
    }
    if(age){
        fighter.age = age
    }
    if(height){
        fighter.height = height
    }
    if(specialability){
        fighter.specialability = specialability
    }
    res.send('Updated');
};