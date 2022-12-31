import './index.css'

const DestinationItem = props => {
  const {searchItem} = props
  const {name, imgUrl} = searchItem
  return (
    <li className="item-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
