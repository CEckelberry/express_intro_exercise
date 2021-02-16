const { response, query } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/mean' , (req, res) => {
    //capture mean of numbers entered in query statement
    let query = req.query['nums'];
    console.log(query)
    let nums = query.split(',').map(x=> +x);

    console.log(nums)
    
    //adding numbers to mean before divide
    let mean = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i])
        mean += nums[i];
    }
    //console.log(mean)
    mean = mean / nums.length;
    
    return res.json({"operation":"mean", "value": mean});
})


app.get('/median' , (req, res) => {
    //capture mean of numbers entered in query statement
    let query = req.query['nums'];
    console.log(query)
    let nums = query.split(',').map(x=> +x);

    console.log(nums)
    
    //median function
    Array.prototype.median = function () {
        return this.slice().sort((a, b) => a - b)[Math.floor(this.length / 2)]; 
      };


    let median = nums.median();
    
    return res.json({"operation":"median", "value": median});
})


app.get('/mode' , (req, res) => {
    //capture mean of numbers entered in query statement
    let query = req.query['nums'];
    console.log(query)
    let nums = query.split(',').map(x=> +x);

    console.log(nums)
    //destructure into counts for each number in nums
    counts = {}
    nums.forEach(function(e) {
      if(counts[e] === undefined) {
        counts[e] = 0
      }
      counts[e] += 1
    })
    //get values in counts and find the max 
    let arr = Object.values(counts);
    let max = Math.max(...arr)

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }

    const mode = getKeyByValue(counts, max)
    
    return res.json({"operation":"mode", "value": mode});
})






app.listen(3000, () => {
    console.log('App on port 3000');
})