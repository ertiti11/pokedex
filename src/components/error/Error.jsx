import 'animate.css';
import './error.css';
export default function Error({keyword}) {
  return (
    <div className='error animate__animated animate__backInDown'>
        <h1 className='text'>Error</h1>
        <p>{keyword} no se encuentra en la base de datos de pokemon</p>
    </div>
  )
}
