import { useParams } from 'react-router-dom'

const ParamComp = () => {

    const {id} = useParams();
  return (
    <div>
      param : {id}
    </div>
  )
}

export default ParamComp
