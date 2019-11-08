var distributeCandies = function (candies, num_people) {
    let max = 2 * candies, people = [], i = 0, count = 1;;

    people = new Array(num_people).fill(0)
    let iter = 0;
    while (candies > 0 || people[people.length-1] === max) {

            if (count > candies) {
                people[iter] += candies;
            } else {
                people[iter] += count;
            }

            candies -= count;
            count +=1;
            iter += 1
            if (iter >= people.length) iter = 0;
    }
    return people;
};


console.log(distributeCandies(10, 3))