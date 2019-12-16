def two_city_sched_cost(costs)
    costs.map{|cost| cost.min}.sum
end


p two_city_sched_cost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]])