class LeaderBoard
    
    attr_reader :players

    def initialize
        @players = {}
    end

    def add_score(player_id, score)
        if !@players.include?(player_id)
            @players[player_id] = [score]
        else 
            @players[player_id].push(score)
        end
        return @players[player_id].inject(:+) / @players[player_id].length.to_f
    end

    def top(ids)
        hash = Hash.new
        @players.each{|k, v| hash[k] = (v.inject(:+) / v.length.to_f)}
        hash.sort_by{|k, v| v }.reverse.map{|e| e[0]}.slice(0, ids)
    end

    def reset(id)
        @players[id] = [0];

    end

end

board = LeaderBoard.new
board.add_score(1, 50)
board.add_score(2, 80)
board.add_score(2, 70)
board.add_score(2, 60)
board.add_score(3, 90)
board.add_score(3, 85)
board.reset(3)
p board.top(3)