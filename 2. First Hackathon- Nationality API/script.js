let heading=document.createElement('h1');
heading.innerText="Nationality API";
document.body.append(heading);
heading.setAttribute('id','heading');

let label=document.createElement('label');
label.innerText="Enter any Name here:";
document.body.append(label);
label.setAttribute('id','label');

let input=document.createElement('input');
input.setAttribute('type','search');
document.body.append(input);
input.setAttribute('id','randomName');

let button=document.createElement('button');
button.innerText="SEARCH";
document.body.append(button);
button.addEventListener('click',function(){findNationality()});
button.setAttribute('id','button')

async function findNationality(){
    try{
        let randomName=document.getElementById('randomName').value;
        console.log(randomName);
        let response= await fetch(`https://api.nationalize.io/?name=${randomName}`);
        let data=await response.json();
        console.log(data);

        let name=data.name;
        let country1=data.country[0].country_id;
        let country2=data.country[1].country_id;
        let probability1=data.country[0].probability;
        let probability2=data.country[1].probability;


        let div=document.createElement('div');
        div.setAttribute('id','card');
        div.innerHTML=`<p>The Nationality of a Person Based on the Name you have entered:</p>
        <h2>Name: <mark> ${name} </mark> </h2><hr>
        <h3>1.First prediction of the Nationality based on the name you have entered is <span> "${country1}" </span>. </h3>
        <h5>Probability of number of <mark> ${name} </mark> in the country is ${probability1}.</h5><hr>
        <h3>2.Second prediction of the Nationality based on the name you have entered is <span> "${country2}" </span>. </h3>
        <h5>Probability of number of <mark> ${name} </mark> in the country is ${probability2}.</h5>
        `;
        document.body.append(div);

        console.log(name);
        console.log(country1);
        console.log(country2);
        console.log(probability1);
        console.log(probability2);

       
    }
    catch(error){
        console.log(error);
    }
}


