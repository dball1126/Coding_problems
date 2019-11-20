
class LeaderBoard{
    constructor(){
        this.players = {};
    }

    average_score(scores){
         if (scores.length < 1) return 0
        const reducer = (acc, val ) => acc + val;
        return (scores.reduce(reducer) )/ scores.length
    }

    add_score(id, score){
        if (!this.players[id]){
            const newPlayer = new Person(id, score);
            this.players[newPlayer.id] = newPlayer
        } else {
            this.players[id].score.push(score)
        }
        const scores = this.players[id].score
        return this.average_score(scores);
    }

    top(ids){
        const list = [];

        for (let n in this.players){
            let score = parseInt(this.average_score(this.players[n].score))
            let id = parseInt(this.players[n].id)
            let obj = {}
            obj[score] = id
            list.push(obj)
        }
        let sorted = list.map(e => Object.keys(e)).map(e => parseInt(e)).sort((a, b) => b - a)
        let results = []
        sorted.map(e =>{
            list.forEach(item => {
                if (item[String(e)]){
                    results.push(item[String(e)])
                }
            })
        })
        console.log(results.slice(0, ids))
    }

    reset(id){
        this.players[id].score = [];
    }
}

const board = new LeaderBoard();
board.add_score(1, 50);
board.add_score(2, 80); // 80.0
board.add_score(2, 70); // 75.0
board.add_score(2, 60); // 70.0

board.add_score(3, 90); // 90.0

board.add_score(3, 85); // 87.5
board.reset(3)
console.log(board.top(3))
