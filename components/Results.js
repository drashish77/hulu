import Thumbnail from './Thumbnail'
import FlipMOve from 'react-flip-move'

function Results({ data }) {
  console.log(data)
  return (
    <FlipMOve className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 4k:flex flex-wrap justify-center'>
      {data.map((results) => (
        <Thumbnail key={results.id} results={results} />
      ))}
    </FlipMOve>
  )
}

export default Results
