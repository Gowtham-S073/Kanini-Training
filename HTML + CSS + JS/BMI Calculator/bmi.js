function calculatebmi()
{
    var ht = document.getElementById('ht').value;
    var wt = document.getElementById('wt').value;

    var bm = wt/ (ht*ht);
    document.getElementById('bmi').innerHTML = bm;

    if(bm < 18.5)
    {
        document.getElementById('result').innerHTML = 'Underweight'
    }

    if(bm < 25)
    {
        document.getElementById('result').innerHTML = 'Healthy'
    }

    if(bm < 30)
    {
        document.getElementById('result').innerHTML = 'overweight'
    }

    if(bm > 30)
    {
        document.getElementById('result').innerHTML = 'Obesity'
    }
}