

export async function Post(request : Request) {

        const getProducts = async () => {
        const res = fetch('http://192.168.1.18:8080/api/auth/email/submit' , {
            method: 'POST',
      
            headers : {
              'Content-Type' : 'application/json'
            },
      
            body: JSON.stringify(
              {'email' : 'elines835@gmail.com'}
            ),
          });
      
          
          console.log('code sended');
          //return await res.json()
    }

    const data = await getProducts() 


}