import { useEffect } from "react"

export default function Home(props) {
  /* estratégia usando SPA
  
  useEffect(() => {
    fetch('http://localhost:3333/episodes')
    .then(response => response.json())
    .then(data  => console.log(data))
  }, []);
  */
  console.log(props.episodes);

  
  return (
    <h1>Home</h1>
  )
}


export async function getStaticProps() {
 const response = await fetch('http://localhost:3333/episodes');
 const data =  await response.json();

 return {
   props: {
     episodes: data,
   },
   revalidate: 60 * 60 * 8, // determina de quanto em quanto tempo serão feita chamas api - 8 hrs 
 }
}
