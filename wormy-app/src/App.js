import React, { useEffect } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import convert from 'xml-js'
import BestSeller from './components/BestSeller';

function App() {


  const baseURL =

    // api call for book seeach
    useEffect(() => {
      const apiCall = async () => {
        const response = await axios('https://corsanywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=ybeFDV188bV1sTPf7xemw&q=me+before+you')

        console.log(response)
        const resJSON = convert.xml2json(response.data, { compact: true, spaces: 4 })
        console.log(JSON.parse(resJSON))
      }
      apiCall()
    }, [])



  // const apiCallBest = async () => {
  //   const response = await axios('https://api.nytimes.com/svc/books/v3/lists/current/{list}.json')

  //   return (response)

  // }
  // apiCallBest()





  return (
    <>
      <header>

        {/* <img src="https://imgur.com/8cIyLoo" alt="Wormy Logo" /> */}
        <h1>Wormy</h1>

      </header>

      <div>
        <h1>Daily Read</h1>
      </div>

      <div>


        <Route path='/'>
          <BestSeller />
        </Route>
      </div>
    </>
  );
}

export default App;
