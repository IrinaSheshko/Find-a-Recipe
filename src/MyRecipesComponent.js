function MyRecipesComponent({ label, image, calories, ingredients, onFavorite }) {
  return (
    <div className="card">
      <button className="fav-btn" onClick={onFavorite}>🤍</button>  
      <img className="card-image" src={image} alt="recipe" />

      <div className="card-content">
        <h2 className="card-title">{label}</h2>
        <p className="card-calories">
          {calories.toFixed()} kcal
        </p>

        <ul className="card-list">
          {ingredients.slice(0, 5).map((ingredient, index) => (
            <li key={index}>• {ingredient}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default MyRecipesComponent;