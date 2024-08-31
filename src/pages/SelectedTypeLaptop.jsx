import { useParams } from "react-router-dom";

const SelectedType = () => {
  const {type} = useParams();
  console.log(type);
  
  return (
    <div>
      selected series
    </div>
  )
}

export default SelectedType;
