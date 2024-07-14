async function  fetchDataSync()
{
    const delay=(time,callback)=>
    {
        const pro = new Promise(resolve => {
            setTimeout(() => {
                callback(); 
                resolve();
            }, time);})
         return pro
       
    }

    const function1= ()=>
    {
         fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response=>
        {
            if (!response.ok) {
                throw new Error('Network response was not ok in API1');
            }
            return response.json();
        })
        .then(data=> {
            console.log('Data received from API1 : ', data);
        })
        .catch(error => {
            console.log('Error in API1:', error.message);
        });
    }


    const function2=()=>
    {
       fetch('https://api.agify.io?name=meelad')
        .then(response=>
        {
            if (!response.ok) {
                throw new Error('Network response was not ok in API2');
            }
        return response.json();
        })
        .then(data=> {
            console.log('Data received from API2 : ', data);
        })
        .catch(error => {
            console.log('Error in API2:', error.message);
        });
    }

    const function3= ()=>
        {
         fetch('https://dog.ceo/api/breeds/image/random')
            .then(response=>
            {
                if (!response.ok) {
                    throw new Error('Network response was not ok in API3');
                }
            return response.json();
            })
            .then(data=> {
                console.log('Data received from API3 : ', data);
            })
            .catch(error => {
                console.log('Error in API3:', error.message);
            });
        }    

   await delay(10000,function1)
    await delay(5000,function2)
   await delay(7000,function3)
}

fetchDataSync()