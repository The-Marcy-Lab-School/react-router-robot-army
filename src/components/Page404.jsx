import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div className='ui segment'>
        <p className='ui center aligned header'>Page not Found</p>    
        <Link to="/"><button className="ui button fluid">
          Go Home
        </button></Link>
    </div>
  );
}

export default Page404;