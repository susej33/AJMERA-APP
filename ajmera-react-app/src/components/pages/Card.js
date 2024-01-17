const Card = (props) => {
    const {title, data, element} = props;
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-4 w-96 m-2">
         <div className="flex items-center mb-4">
            {element}
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
          </div>
          <p className="text-2xl font-bold">{data}</p>
        </div>
  )
}

export default Card;