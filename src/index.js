import React,{ useEffect, useState} from 'react'
import { render } from 'react-dom'
import WordCloud from "react-d3-cloud"
const App = () => {
  const [data, setData] = useState([])
  const fontSizeMapper = word => Math.pow(word.value, 0.5) * 5
  const rotate = 0
  const fontFamily = 'meiryo'

  useEffect(() => {
    window
      .fetch('./data/data_keyword_count.json')
      .then((response) => response.json())
      .then((data) =>{
        const words = data.map((d) => {
            return {
                text: d.text,
                value: +(d.count),
            }
        })
        setData(words)
      })
    
  }, [])
  return (
    <div className="App">
       <WordCloud
          data={data}
          fontSizeMapper={fontSizeMapper}
          rotate={rotate}
          font={fontFamily}
       />
    </div>
  );
}
render(<App />, document.querySelector('#content'))