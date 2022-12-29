function UnFavorites () {
return(<div className="content p-40">
<div className='d-flex align-center justify-between mb-40'>
 <h1>{searchValue ? `Поиск по "${searchValue}"` : 'Все кроссовки'}</h1>
<div className='search-block d-flex'>
  <img src='/img/search.svg' alt='Search' />
 <input onChange={onChangeSeacrhInput} value={searchValue} placeholder='Поиск...' />
 {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Remove" />}
</div>
</div>
<div className="d-flex flex-wrap">
{items.map((item, index) => {
  return <Card key={index} onFavorite={(obj) =>  onAddToFavorites(obj)} title={item.title} price={item.price} imageUrl={item.imageUrl}  onPlus={(obj) => onAddToCart(obj)} />
})}
</div>
</div>)
}
export default UnFavorites;