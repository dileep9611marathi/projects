export async function getUser()
{
   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

   if(!response.ok)
   {
    throw new Error ("HTTP error:"+response.status)
   }
   
   return await response.json();

}